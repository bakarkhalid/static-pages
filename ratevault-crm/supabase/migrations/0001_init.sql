-- RateVault CRM — initial schema
-- Roles: admin, agent
-- Statuses: new, contacted, qualified, won, lost
-- Activities: notes + auto-logged status changes

-- ───────────────────────────────────────────────────────────────
-- Enums
-- ───────────────────────────────────────────────────────────────
create type user_role as enum ('admin', 'agent');
create type lead_status as enum ('new', 'contacted', 'qualified', 'won', 'lost');
create type activity_type as enum ('note', 'status_change');

-- ───────────────────────────────────────────────────────────────
-- profiles — one row per auth.users entry; carries role + display name
-- ───────────────────────────────────────────────────────────────
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role user_role not null default 'agent',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_role_idx on profiles(role);

-- Auto-create a profile when a user signs up
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email)
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ───────────────────────────────────────────────────────────────
-- leads
-- ───────────────────────────────────────────────────────────────
create table leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  investment_amount text,
  preferred_term text,
  ready_to_invest text,
  status lead_status not null default 'new',
  assigned_to uuid references profiles(id) on delete set null,
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index leads_status_idx on leads(status);
create index leads_assigned_to_idx on leads(assigned_to);
create index leads_created_at_idx on leads(created_at desc);

-- ───────────────────────────────────────────────────────────────
-- activities — unified timeline for notes + status changes
-- ───────────────────────────────────────────────────────────────
create table activities (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  user_id uuid references profiles(id) on delete set null,
  type activity_type not null,
  body text,
  old_status lead_status,
  new_status lead_status,
  created_at timestamptz not null default now()
);

create index activities_lead_id_idx on activities(lead_id, created_at desc);

-- Auto-log status changes
create or replace function log_lead_status_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.status is distinct from old.status then
    insert into activities (lead_id, user_id, type, old_status, new_status)
    values (new.id, auth.uid(), 'status_change', old.status, new.status);
  end if;
  new.updated_at := now();
  return new;
end;
$$;

create trigger leads_status_change
  before update on leads
  for each row execute function log_lead_status_change();

-- Bump updated_at on profile edits
create or replace function touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end;
$$;

create trigger profiles_touch before update on profiles
  for each row execute function touch_updated_at();

-- ───────────────────────────────────────────────────────────────
-- Helper: is the current user an admin?
-- ───────────────────────────────────────────────────────────────
create or replace function is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ───────────────────────────────────────────────────────────────
-- RLS
-- ───────────────────────────────────────────────────────────────
alter table profiles enable row level security;
alter table leads enable row level security;
alter table activities enable row level security;

-- profiles
create policy "profiles: read all (auth)"
  on profiles for select
  to authenticated
  using (true);

create policy "profiles: update self"
  on profiles for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

create policy "profiles: admin full"
  on profiles for all
  to authenticated
  using (is_admin())
  with check (is_admin());

-- leads
create policy "leads: agent reads own"
  on leads for select
  to authenticated
  using (assigned_to = auth.uid() or is_admin());

create policy "leads: agent updates own"
  on leads for update
  to authenticated
  using (assigned_to = auth.uid() or is_admin())
  with check (assigned_to = auth.uid() or is_admin());

create policy "leads: admin insert/delete"
  on leads for insert
  to authenticated
  with check (is_admin());

create policy "leads: admin delete"
  on leads for delete
  to authenticated
  using (is_admin());

-- activities
create policy "activities: read for accessible leads"
  on activities for select
  to authenticated
  using (
    exists (
      select 1 from leads l
      where l.id = activities.lead_id
      and (l.assigned_to = auth.uid() or is_admin())
    )
  );

create policy "activities: insert for accessible leads"
  on activities for insert
  to authenticated
  with check (
    exists (
      select 1 from leads l
      where l.id = activities.lead_id
      and (l.assigned_to = auth.uid() or is_admin())
    )
  );

-- Note: service-role (used by /api/leads/intake) bypasses RLS automatically,
-- so anonymous lead submissions from the marketing site insert without policies.
