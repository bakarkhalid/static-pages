import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link href="/" className="logo footer-logo">
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
            <p className="footer-desc">
              Australia&apos;s trusted fixed term deposit comparison service. We help investors secure
              the best guaranteed returns from APRA-regulated institutions.
            </p>
            <ul className="footer-contact">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Level 10, 123 Pitt Street, Sydney NSW 2000, Australia
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:1300732873">1300 SECURE (732 873)</a>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
                <a href="mailto:info@ratevault.org">info@ratevault.org</a>
              </li>
            </ul>
          </div>

          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-protection">
          <svg
            className="fp-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
          </svg>
          <p>
            <strong>Your protection matters.</strong> Our comparison service exclusively features
            institutions that are authorised and regulated by the Australian Prudential Regulation
            Authority (APRA) and covered by the Financial Claims Scheme (FCS), protecting eligible
            deposits up to $250,000 per account holder, per ADI.
          </p>
        </div>

        <div className="footer-bottom">
          <div>RateVault is a comparison service only and does not provide financial advice.</div>
          <div>&copy; 2026 RateVault. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
