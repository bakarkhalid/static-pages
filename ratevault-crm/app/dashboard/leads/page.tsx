import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Leads — RateVault CRM' };

export default async function LeadsPage() {
  const supabase = await createClient();

  const { data: leads, error } = await supabase
    .from('leads')
    .select(
      'id, full_name, email, phone, investment_amount, preferred_term, ready_to_invest, status, created_at'
    )
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Leads</h1>
          <p className="text-sm text-slate-500 mt-1">
            {leads?.length ?? 0} lead{(leads?.length ?? 0) === 1 ? '' : 's'} total
          </p>
        </div>
      </header>

      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
          Could not load leads: {error.message}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Investment</th>
              <th className="px-4 py-3">Term</th>
              <th className="px-4 py-3">Ready</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Received</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {(leads ?? []).length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                  No leads yet.
                </td>
              </tr>
            )}
            {(leads ?? []).map((l) => (
              <tr key={l.id} className="hover:bg-slate-50 cursor-pointer group">
                <td className="px-4 py-3 font-medium text-slate-900">
                  <Link href={`/dashboard/leads/${l.id}`} className="block group-hover:text-teal-700">
                    {l.full_name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  <Link href={`/dashboard/leads/${l.id}`} className="block">
                    <div>{l.email}</div>
                    <div className="text-xs text-slate-500">{l.phone}</div>
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  <Link href={`/dashboard/leads/${l.id}`} className="block">{l.investment_amount ?? '—'}</Link>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  <Link href={`/dashboard/leads/${l.id}`} className="block">{l.preferred_term ?? '—'}</Link>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  <Link href={`/dashboard/leads/${l.id}`} className="block">{l.ready_to_invest ?? '—'}</Link>
                </td>
                <td className="px-4 py-3">
                  <Link href={`/dashboard/leads/${l.id}`} className="block">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium capitalize bg-slate-100 text-slate-700">
                      {l.status}
                    </span>
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs">
                  <Link href={`/dashboard/leads/${l.id}`} className="block">
                    {new Date(l.created_at).toLocaleString('en-AU', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
