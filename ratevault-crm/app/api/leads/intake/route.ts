import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

const DEFAULT_ORIGINS = ['http://localhost:3000'];

function allowedOrigins(): Set<string> {
  const fromEnv = (process.env.LEADS_INTAKE_ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  return new Set([...DEFAULT_ORIGINS, ...fromEnv]);
}

function corsHeaders(origin: string | null) {
  const allowed = allowedOrigins();
  const allowOrigin = origin && allowed.has(origin) ? origin : 'http://localhost:3000';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(request.headers.get('origin')) });
}

type IntakePayload = {
  name?: string;
  email?: string;
  phone?: string;
  investment_amount?: string;
  preferred_term?: string;
  ready_to_invest?: string;
};

export async function POST(request: Request) {
  const headers = corsHeaders(request.headers.get('origin'));

  let body: IntakePayload;
  try {
    body = (await request.json()) as IntakePayload;
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON' }, { status: 400, headers });
  }

  const full_name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const phone = body.phone?.trim();

  if (!full_name || !email || !phone) {
    return NextResponse.json(
      { success: false, message: 'name, email and phone are required' },
      { status: 400, headers }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Invalid email address' },
      { status: 400, headers }
    );
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from('leads').insert({
    full_name,
    email,
    phone,
    investment_amount: body.investment_amount ?? null,
    preferred_term: body.preferred_term ?? null,
    ready_to_invest: body.ready_to_invest ?? null,
    source: 'website',
  });

  if (error) {
    console.error('Lead intake failed:', error);
    return NextResponse.json(
      { success: false, message: 'Could not save lead' },
      { status: 500, headers }
    );
  }

  return NextResponse.json({ success: true }, { status: 201, headers });
}
