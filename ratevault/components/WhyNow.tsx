export function WhyNow() {
  return (
    <section className="why-now">
      <div className="container">
        <div className="section-head reveal">
          <h2>Why Now Is The Best Time</h2>
          <p>Take advantage of historically high interest rates while they last.</p>
        </div>

        <div className="wn-grid">
          <div className="wn-card reveal">
            <div className="wn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 17 9 11 13 15 21 7" />
                <polyline points="15 7 21 7 21 13" />
              </svg>
            </div>
            <h3>Peak Interest Rate Environment</h3>
            <p>Current rates at multi-year highs. Lock in premium returns before they decline.</p>
          </div>

          <div className="wn-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="wn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" />
              </svg>
            </div>
            <h3>Market Volatility Protection</h3>
            <p>Unlike stocks or crypto, your capital is guaranteed and protected by the Government Guarantee.</p>
          </div>

          <div className="wn-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="wn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>Time-Sensitive Opportunity</h3>
            <p>Interest rates remain at attractive levels but may shift. Lock in today&apos;s premium rates before they change.</p>
          </div>
        </div>

        <div className="section-head section-head-sub reveal">
          <h2>Investment Products Compared</h2>
        </div>

        <div className="products-table-wrap reveal">
          <table className="products-table">
            <thead>
              <tr>
                <th>Investment Type</th>
                <th>Returns</th>
                <th>Risk Level</th>
                <th>Liquidity</th>
                <th>Protection</th>
              </tr>
            </thead>
            <tbody>
              <tr className="featured">
                <td>
                  <span className="featured-name">
                    <svg className="featured-tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                    Fixed Term Deposits
                  </span>
                </td>
                <td>Up to 7.6% P.A.</td>
                <td>Government Guaranteed</td>
                <td>Fixed Term</td>
                <td>$250,000 Guaranteed</td>
              </tr>
              <tr>
                <td><strong>Stocks &amp; ETFs</strong></td>
                <td>Variable Returns</td>
                <td>High Volatility</td>
                <td>Immediate</td>
                <td>No Protection</td>
              </tr>
              <tr>
                <td><strong>Savings Accounts</strong></td>
                <td>2-3% P.A.</td>
                <td>Very Low</td>
                <td>Immediate</td>
                <td>$250,000 Guaranteed</td>
              </tr>
              <tr>
                <td><strong>Property Investment</strong></td>
                <td>Variable Returns</td>
                <td>Market Dependent</td>
                <td>Low</td>
                <td>No Protection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
