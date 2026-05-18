import Link from 'next/link';
import { signInAction } from './actions';

export const metadata = { title: 'Sign in — RateVault CRM' };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-sm p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">RateVault CRM</h1>
          <p className="text-sm text-slate-500 mt-1">Sign in to manage leads</p>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form action={signInAction} className="space-y-4">
          <input type="hidden" name="next" value={next ?? '/dashboard'} />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 text-white py-2 font-medium hover:bg-slate-800 transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-500 text-center">
          New user?{' '}
          <Link href="/signup" className="text-slate-900 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
