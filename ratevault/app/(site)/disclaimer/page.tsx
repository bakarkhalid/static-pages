import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer — RateVault',
  description: "RateVault's disclaimer — important information about the limitations of our comparison service.",
};

export default function DisclaimerPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Disclaimer</h1>
        <p className="legal-updated">Last updated: 18/05/2026</p>
        <div className="legal-content">
          <div className="legal-notice">
            <svg
              className="legal-notice-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <h3>Important Regulatory Notice</h3>
              <p>
                RateVault is a comparison aggregator website. We are <strong>not</strong> a
                financial institution, bank, credit union, or investment firm. We compare products
                from APRA-regulated institutions but do not ourselves hold an Australian Financial
                Services Licence (AFSL). We do not provide regulated financial advice.
              </p>
            </div>
          </div>

          <h2>About RateVault</h2>
          <p>
            RateVault is an independent comparison aggregator that helps consumers compare fixed
            term deposit products from authorised financial institutions. Our role is limited to:
          </p>
          <ul>
            <li>Displaying comparison information from APRA-regulated institutions</li>
            <li>Facilitating introductions between consumers and regulated providers</li>
            <li>Providing general information about fixed term deposit products</li>
          </ul>
          <p>
            We do not handle customer funds, provide personalised financial advice, or make
            investment decisions on anyone&apos;s behalf. The financial institutions we compare are
            independently regulated by APRA.
          </p>

          <h2>General Information Only</h2>
          <p>
            The information provided on RateVault is for general informational and comparison
            purposes only. All information on the site is provided in good faith; however, we make
            no representation or warranty of any kind, express or implied, regarding the accuracy,
            adequacy, validity, reliability, availability, or completeness of any information on
            the site.
          </p>

          <h2>Not Financial Advice</h2>
          <p>
            <strong>The content on this website does not constitute financial, investment, tax, or legal advice.</strong>
          </p>
          <p>
            Before making any investment decision, you should seek independent professional advice
            from a financial adviser who holds an Australian Financial Services Licence (AFSL). A
            licensed adviser can provide personalised advice based on your individual
            circumstances, financial objectives, and risk tolerance.
          </p>
          <p>
            To find a licensed financial adviser, visit ASIC&apos;s Financial Advisers Register at{' '}
            <a href="https://moneysmart.gov.au" target="_blank" rel="noopener">moneysmart.gov.au</a>
          </p>

          <h2>APRA-Regulated Institutions</h2>
          <p>
            All banks, credit unions, and financial institutions featured on our comparison service
            are authorised and regulated by the Australian Prudential Regulation Authority (APRA)
            as Authorised Deposit-taking Institutions (ADIs). We do not feature unregulated
            providers.
          </p>
          <p>
            You can verify the regulatory status of any institution by searching the APRA Register.
            We recommend you verify an institution&apos;s status before making any investment.
          </p>

          <h2>Rate Information</h2>
          <p>
            Interest rates displayed on our website are indicative only and subject to change
            without notice. Rates are sourced from financial institutions and may not reflect the
            most current rates available. Features and terms may vary. All rates and terms must be
            confirmed directly with the financial institution before proceeding with any
            investment.
          </p>

          <h2>Investment Risks</h2>
          <p>
            While fixed term deposits with APRA-regulated institutions are generally considered
            lower-risk investments compared to equities or other assets, all investments carry some
            level of risk:
          </p>
          <ul>
            <li><strong>Inflation risk:</strong> Returns may not keep pace with inflation</li>
            <li><strong>Interest rate risk:</strong> You may miss out on higher rates if market rates rise during your term</li>
            <li><strong>Liquidity risk:</strong> Early withdrawal may result in penalties or reduced returns</li>
            <li><strong>Institutional risk:</strong> Although mitigated by the Government Guarantee, there is always some residual risk</li>
          </ul>
          <p>Past performance is not a reliable indicator of future results.</p>

          <h2>Financial Claims Scheme</h2>
          <p>
            Eligible deposits with APRA-regulated ADIs are protected by the Australian
            Government&apos;s Financial Claims Scheme (FCS) up to $250,000 per account holder, per
            ADI.
          </p>
          <p>Please note:</p>
          <ul>
            <li>Some banking groups operate under the same ADI licence, meaning your protection limit applies across all brands within that group</li>
            <li>Joint accounts are protected up to $250,000 per account holder</li>
            <li>Protection is subject to eligibility criteria set by APRA</li>
          </ul>
          <p>
            For full details, visit{' '}
            <a href="https://www.apra.gov.au/financial-claims-scheme" target="_blank" rel="noopener">
              apra.gov.au/financial-claims-scheme
            </a>
          </p>

          <h2>No Guarantee of Results</h2>
          <p>
            We make no guarantees regarding the outcomes of any investment decisions you make. The
            final investment decision and any consequences thereof are solely your responsibility.
            We are not liable for any losses arising from investment decisions made using
            information from our website.
          </p>

          <h2>Third-Party Institutions</h2>
          <p>
            When you make an enquiry or investment through our service, your contractual
            relationship is directly with the relevant financial institution. We are not
            responsible for:
          </p>
          <ul>
            <li>The products, services, or practices of third-party financial institutions</li>
            <li>Any disputes between you and a financial institution</li>
            <li>The performance or solvency of any institution</li>
            <li>Changes to rates, terms, or product availability</li>
          </ul>
          <p>You should conduct your own due diligence before investing with any institution.</p>

          <h2>Commercial Relationships</h2>
          <p>
            RateVault may receive commissions, fees, or other payments from financial institutions
            for successful introductions or referrals. This commercial arrangement:
          </p>
          <ul>
            <li>Does not affect the rates you receive from financial institutions</li>
            <li>Does not influence the order in which we display products (unless clearly stated)</li>
            <li>May influence which products we feature on our website</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, under no circumstance shall RateVault have any
            liability to you for any loss or damage of any kind incurred as a result of the use of
            the site or reliance on any information provided on the site. Your use of the site and
            your reliance on any information on the site is solely at your own risk.
          </p>

          <h2>Professional Advice Recommended</h2>
          <p>Before making any financial decision, we strongly recommend that you:</p>
          <ul>
            <li>Consult with an AFSL-licensed financial adviser</li>
            <li>Review the Product Disclosure Statement (PDS) and any other documentation from the financial institution</li>
            <li>Consider your personal financial situation, objectives, and tax position</li>
            <li>Understand all fees, terms, and conditions associated with the investment</li>
            <li>Verify the regulatory status of any institution on the APRA Register</li>
            <li>Consider how the investment fits within your overall financial plan</li>
          </ul>

          <h2>Complaints</h2>
          <p>
            If you have a complaint about our comparison service, please contact us at{' '}
            <a href="mailto:info@ratevault.org">info@ratevault.org</a>
          </p>
          <p>
            If you have a complaint about a financial institution or product, you should contact
            that institution directly. If unresolved, you may be able to refer your complaint to
            the Australian Financial Complaints Authority (AFCA) at{' '}
            <a href="https://www.afca.org.au" target="_blank" rel="noopener">afca.org.au</a>
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this disclaimer, please contact us at{' '}
            <a href="mailto:info@ratevault.org">info@ratevault.org</a>
          </p>
        </div>
      </div>
    </section>
  );
}
