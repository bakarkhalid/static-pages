const externalLinkSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const verifyTickSvg = (
  <svg className="verify-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export function Protected() {
  return (
    <section className="protected">
      <div className="container">
        <div className="section-head reveal">
          <h2>Your Investment is Protected</h2>
          <p>We only compare APRA-regulated institutions covered by the Australian Government Guarantee Scheme.</p>
        </div>

        <div className="protect-grid">
          <div className="protect-card reveal">
            <div className="protect-icon protect-icon-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
              </svg>
            </div>
            <h3>Government Guaranteed</h3>
            <p>Deposits protected up to $250,000 per person under the Financial Claims Scheme.</p>
            <a href="https://www.apra.gov.au/financial-claims-scheme" className="protect-link" target="_blank" rel="noopener">
              Learn about FCS
              {externalLinkSvg}
            </a>
          </div>

          <div className="protect-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="protect-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="2 11 12 4 22 11" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <line x1="5" y1="11" x2="5" y2="20" />
                <line x1="10" y1="11" x2="10" y2="20" />
                <line x1="14" y1="11" x2="14" y2="20" />
                <line x1="19" y1="11" x2="19" y2="20" />
              </svg>
            </div>
            <h3>APRA Regulated</h3>
            <p>All institutions are authorised by APRA as Authorised Deposit-taking Institutions (ADIs).</p>
            <a href="https://www.apra.gov.au/list-of-registered-authorised-deposit-taking-institutions" className="protect-link" target="_blank" rel="noopener">
              Verify on APRA Register
              {externalLinkSvg}
            </a>
          </div>

          <div className="protect-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="protect-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Secure &amp; Private</h3>
            <p>Your data is protected under the Australian Privacy Act 1988 and the Australian Privacy Principles.</p>
            <a href="/privacy" className="protect-link">
              View Privacy Policy
              {externalLinkSvg}
            </a>
          </div>
        </div>

        <div className="verify-card reveal">
          <h3 className="verify-title">How to Verify an Institution</h3>
          <div className="verify-grid">
            <div className="verify-item">
              <svg className="verify-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <div>
                <h4>Check the APRA Register</h4>
                <p>Visit <a href="#" target="_blank" rel="noopener">APRA&apos;s ADI register</a> to confirm an institution is authorised.</p>
              </div>
            </div>
            <div className="verify-item">
              <svg className="verify-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <div>
                <h4>Verify Government Guarantee</h4>
                <p>Check the <a href="#" target="_blank" rel="noopener">Financial Claims Scheme</a> to confirm your deposits are covered.</p>
              </div>
            </div>
            <div className="verify-item">
              {verifyTickSvg}
              <div>
                <h4>Contact AFCA</h4>
                <p>The <a href="#" target="_blank" rel="noopener">Australian Financial Complaints Authority</a> handles complaints about financial firms.</p>
              </div>
            </div>
            <div className="verify-item">
              {verifyTickSvg}
              <div>
                <h4>Reserve Bank of Australia</h4>
                <p>View the <a href="#" target="_blank" rel="noopener">RBA website</a> for information on Australia&apos;s financial system.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="protect-disclaimer reveal">
          <strong>Important:</strong> RateVault is a comparison service only and does not provide
          financial advice or handle client funds. Our comparison service exclusively features
          institutions that are authorised and regulated by the Australian Prudential Regulation
          Authority (APRA) and covered by the Financial Claims Scheme (FCS), protecting eligible
          deposits up to $250,000 per account holder, per ADI. We recommend verifying an
          institution&apos;s regulatory status on the APRA Register before investing.
        </p>
      </div>
    </section>
  );
}
