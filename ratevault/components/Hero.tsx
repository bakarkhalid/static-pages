import { EnquiryForm } from './EnquiryForm';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <span className="hero-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              APRA Regulated &amp; Government Guaranteed
            </span>
            <h1>Discover Australia&apos;s Leading Fixed Term Deposits</h1>
            <p className="hero-sub">
              Secure your financial future with guaranteed returns. Compare premium Australian
              institutions in seconds.
            </p>

            <ul className="hero-features">
              <li className="hero-feature">
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="15 7 21 7 21 13" />
                  </svg>
                </span>
                <div className="hf-text">
                  <h3>Secure fixed returns up to 7.6% P.A.</h3>
                  <p>Lock in guaranteed returns with Australia&apos;s leading financial institutions.</p>
                </div>
              </li>
              <li className="hero-feature">
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M3 10h18" />
                    <path d="M5 6l7-4 7 4" />
                    <path d="M5 10v11" />
                    <path d="M19 10v11" />
                    <path d="M9 14v4" />
                    <path d="M15 14v4" />
                    <path d="M12 14v4" />
                  </svg>
                </span>
                <div className="hf-text">
                  <h3>Compare APRA-authorised deposits</h3>
                  <p>Only regulated Australian institutions with proven track records.</p>
                </div>
              </li>
              <li className="hero-feature">
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
                  </svg>
                </span>
                <div className="hf-text">
                  <h3>Government Guarantee up to $250,000</h3>
                  <p>Financial Claims Scheme (FCS) protection for your deposits.</p>
                </div>
              </li>
              <li className="hero-feature">
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="10" y2="10" />
                    <line x1="13" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="10" y2="14" />
                    <line x1="13" y1="14" x2="16" y2="14" />
                    <line x1="8" y1="18" x2="10" y2="18" />
                    <line x1="13" y1="18" x2="16" y2="18" />
                  </svg>
                </span>
                <div className="hf-text">
                  <h3>Flexible interest payment options</h3>
                  <p>Choose monthly, quarterly, annual or at-maturity schedules.</p>
                </div>
              </li>
              <li className="hero-feature">
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <polyline points="8 18 10 14 13 17 16 12" />
                  </svg>
                </span>
                <div className="hf-text">
                  <h3>Independent market research</h3>
                  <p>Rates verified daily against institution websites — no promoted listings.</p>
                </div>
              </li>
              <li className="hero-feature">
                <span className="hf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <div className="hf-text">
                  <h3>Minimum investment from only $50,000</h3>
                  <p>Compare entry-level deposits alongside premium institutional rates.</p>
                </div>
              </li>
            </ul>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hs-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <div className="hs-lbl">Trusted by</div>
                  <div className="hs-val">50,000+ Investors</div>
                </div>
              </div>
              <div className="hero-stat">
                <span className="hs-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
                  </svg>
                </span>
                <div>
                  <div className="hs-lbl">Protected up to</div>
                  <div className="hs-val">$250,000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" id="enquire" style={{ transitionDelay: '.15s' }}>
            <div className="form-card hero-form">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
