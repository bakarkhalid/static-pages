import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Overview — RateVault CRM' };

export default async function DashboardOverview() {
  const supabase = await createClient();

  const [{ count: total }, { count: newCount }, { count: openCount }] = await Promise.all([
    supabase.from('leads').select('*', { count: 'exact', head: true }),
    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    supabase
      .from('leads')
      .select('*', { count: 'exact', head: true })
      .in('status', ['contacted', 'qualified']),
  ]);

  const { data: recent } = await supabase
    .from('leads')
    .select('id, full_name, email, status, created_at')
    .order('created_at', { ascending: false })
    .limit(5);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Overview of your platform activity</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total Leads" value={total ?? 0} tone="neutral" />
        <StatCard label="New Leads" value={newCount ?? 0} tone="green" />
        <StatCard label="Open Leads" value={openCount ?? 0} tone="amber" />
      </div>

      <section className="bg-white border border-slate-200 rounded-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <h2 className="font-semibold">Recent Leads</h2>
          <a href="/dashboard/leads" className="text-sm text-teal-700 hover:underline">
            View All
          </a>
        </div>
        <ul className="divide-y divide-slate-100">
          {(recent ?? []).length === 0 && (
            <li className="px-5 py-8 text-center text-sm text-slate-500">
              No leads yet — submit the marketing form to see one appear here.
            </li>
          )}
          {(recent ?? []).map((lead) => (
            <li key={lead.id}>
              <Link
                href={`/dashboard/leads/${lead.id}`}
                className="flex items-center justify-between px-5 py-3 hover:bg-slate-50"
              >
                <div>
                  <div className="font-medium text-slate-900">{lead.full_name}</div>
                  <div className="text-xs text-slate-500">{lead.email}</div>
                </div>
                <div className="text-right">
                  <StatusPill status={lead.status} />
                  <div className="text-xs text-slate-500 mt-1">
                    {new Date(lead.created_at).toLocaleString('en-AU', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: 'neutral' | 'green' | 'amber';
}) {
  const bg =
    tone === 'green'
      ? 'bg-emerald-50 border-emerald-200'
      : tone === 'amber'
      ? 'bg-amber-50 border-amber-200'
      : 'bg-white border-slate-200';
  return (
    <div className={`rounded-xl border p-5 ${bg}`}>
      <div className="text-xs uppercase tracking-wider text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: 'bg-blue-50 text-blue-700',
    contacted: 'bg-amber-50 text-amber-700',
    qualified: 'bg-emerald-50 text-emerald-700',
    won: 'bg-emerald-100 text-emerald-800',
    lost: 'bg-slate-100 text-slate-600',
  };
  const cls = styles[status] ?? 'bg-slate-100 text-slate-600';
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium capitalize ${cls}`}>
      {status}
    </span>
  );
}
