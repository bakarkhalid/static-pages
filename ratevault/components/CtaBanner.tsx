import Link from 'next/link';

const checkSvg = (
  <svg className="cta-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-head reveal">
          <h2>Take Advantage of Current Market Rates</h2>
          <p>
            Interest rates are at multi-year highs. Every day you wait is money left on the table.
            Join 50,000+ smart investors who&apos;ve already secured premium rates up to 7.6% P.A.
          </p>
        </div>

        <div className="cta-stats">
          <div className="cs-card reveal">
            <div className="cs-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="cs-text">Average Setup: 24 Hours</div>
          </div>
          <div className="cs-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="cs-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
              </svg>
            </div>
            <div className="cs-text">$2.4B+ Protected</div>
          </div>
          <div className="cs-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="cs-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 17 9 11 13 15 21 7" />
                <polyline points="15 7 21 7 21 13" />
              </svg>
            </div>
            <div className="cs-text">Up to 7.6% P.A. Available Now</div>
          </div>
        </div>

        <div className="cta-action reveal">
          <Link href="/#enquire" className="btn btn-primary btn-cta">
            Compare The Market Now — It&apos;s FREE
          </Link>
        </div>

        <div className="cta-trust reveal">
          <span>{checkSvg} No obligation</span>
          <span>{checkSvg} Instant comparison</span>
          <span>{checkSvg} Dedicated adviser support</span>
        </div>
      </div>
    </section>
  );
}
