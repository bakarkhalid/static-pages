import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { signOutAction } from '../login/actions';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, email, role')
    .eq('id', user.id)
    .single();

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <aside className="w-64 shrink-0 bg-white border-r border-slate-200 flex flex-col">
        <div className="px-6 py-5 border-b border-slate-200">
          <div className="font-bold text-lg tracking-tight">RateVault</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider">CRM</div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <SidebarLink href="/dashboard" label="Overview" />
          <SidebarLink href="/dashboard/leads" label="Leads" />
          <SidebarLink href="/dashboard/users" label="Users" />
        </nav>
        <div className="border-t border-slate-200 p-4 text-sm">
          <div className="font-medium text-slate-900 truncate">{profile?.full_name ?? user.email}</div>
          <div className="text-xs text-slate-500 truncate">{profile?.email ?? user.email}</div>
          <div className="text-xs text-slate-500 mt-1 capitalize">{profile?.role ?? 'agent'}</div>
          <form action={signOutAction} className="mt-3">
            <button
              type="submit"
              className="w-full text-left text-sm text-slate-600 hover:text-slate-900"
            >
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {label}
    </Link>
  );
}
