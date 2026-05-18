import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export const metadata = { title: 'Lead — RateVault CRM' };

const STATUS_STYLES: Record<string, string> = {
  new: 'bg-blue-50 text-blue-700',
  contacted: 'bg-amber-50 text-amber-700',
  qualified: 'bg-emerald-50 text-emerald-700',
  won: 'bg-emerald-100 text-emerald-800',
  lost: 'bg-slate-100 text-slate-600',
};

function formatDate(value: string) {
  return new Date(value).toLocaleString('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: lead, error } = await supabase
    .from('leads')
    .select(
      'id, full_name, email, phone, investment_amount, preferred_term, ready_to_invest, status, source, created_at, updated_at'
    )
    .eq('id', id)
    .single();

  if (error || !lead) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/dashboard/leads" className="text-sm text-slate-500 hover:text-slate-900">
          ← Back to leads
        </Link>
      </div>

      <section className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-semibold">
              {initials(lead.full_name)}
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">{lead.full_name}</h1>
              <div className="text-sm text-slate-500">{lead.email}</div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span
                  className={`inline-block px-2 py-0.5 rounded font-medium capitalize ${
                    STATUS_STYLES[lead.status] ?? 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {lead.status}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">
                  Source: <span className="text-slate-700">{lead.source}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="text-right text-xs text-slate-500">
            Created {formatDate(lead.created_at)}
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-5">
        <h2 className="font-semibold text-slate-900 mb-5">Lead Information</h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
          <Field label="Full Name" value={lead.full_name} />
          <Field label="Email" value={lead.email} />
          <Field label="Phone" value={lead.phone} mono />
          <Field
            label="Status"
            value={
              <span
                className={`inline-block px-2 py-0.5 rounded text-xs font-medium capitalize ${
                  STATUS_STYLES[lead.status] ?? 'bg-slate-100 text-slate-600'
                }`}
              >
                {lead.status}
              </span>
            }
          />
          <Field label="Investment Amount" value={lead.investment_amount ?? '—'} />
          <Field label="Preferred Term" value={lead.preferred_term ?? '—'} />
          <Field label="Ready to Invest" value={lead.ready_to_invest ?? '—'} />
          <Field label="Source" value={lead.source} />
          <Field label="Created" value={formatDate(lead.created_at)} />
          <Field label="Last Updated" value={formatDate(lead.updated_at)} />
        </dl>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  mono,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className={`mt-1 text-slate-900 ${mono ? 'font-mono text-sm' : 'text-sm'}`}>{value}</dd>
    </div>
  );
}
