'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function signUpAction(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');
  const full_name = String(formData.get('full_name') ?? '').trim();

  if (!email || !password || !full_name) {
    redirect(`/signup?error=${encodeURIComponent('All fields are required')}`);
  }
  if (password.length < 8) {
    redirect(`/signup?error=${encodeURIComponent('Password must be at least 8 characters')}`);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name } },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  redirect('/dashboard');
}
