import Link from 'next/link';

type Variant = 'default' | 'thanks';

export function Header({ variant = 'default' }: { variant?: Variant }) {
  const ctaText = variant === 'thanks' ? 'Return to Home' : 'Compare Rates Now';
  const ctaHref = variant === 'thanks' ? '/' : '/#enquire';

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="logo">
          <span className="logo-mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="13" cy="12" r="3" />
              <line x1="6" y1="8" x2="6" y2="16" />
            </svg>
          </span>
          RateVault
        </Link>
        <Link href={ctaHref} className="btn btn-primary">
          {ctaText}
        </Link>
      </div>
    </header>
  );
}
