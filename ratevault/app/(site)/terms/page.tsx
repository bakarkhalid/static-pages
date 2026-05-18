import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — RateVault',
  description: "RateVault's terms of service — the conditions under which you use our comparison service.",
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: 18/05/2026</p>
        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using RateVault&apos;s website and services, you accept and agree to be
            bound by these Terms of Service and all applicable laws and regulations. If you do not
            agree to these terms, please do not use our services.
          </p>

          <h2>2. About Our Service</h2>
          <p>
            RateVault is a comparison aggregator website that connects consumers with
            APRA-regulated financial institutions offering fixed term deposit products. We provide
            comparison services only.
          </p>
          <div className="legal-callout">
            <p>
              <strong>Important:</strong> RateVault is not a financial institution, bank, credit
              union, or investment firm. We are a comparison website that aggregates information
              from APRA-regulated providers. We do not handle customer funds, provide financial
              advice, or make investment decisions on your behalf.
            </p>
          </div>

          <h2>3. No Financial Advice</h2>
          <p>
            The information provided on this website is for general informational and comparison
            purposes only. It does not constitute financial, investment, tax, or legal advice.
          </p>
          <p>
            We strongly recommend that you seek independent professional advice from a qualified
            financial adviser who holds an AFSL before making any investment decisions. You should
            consider whether any investment is suitable for your particular circumstances and
            financial position.
          </p>

          <h2>4. APRA-Regulated Institutions</h2>
          <p>
            All financial institutions featured on our website are authorised and regulated by the
            Australian Prudential Regulation Authority (APRA) as Authorised Deposit-taking
            Institutions (ADIs). Deposits with these institutions are protected by the Financial
            Claims Scheme (FCS) up to $250,000 per account holder, per ADI.
          </p>
          <p>
            While we take care to only feature regulated institutions, you should verify the
            regulatory status of any institution on the APRA Register at{' '}
            <a href="https://www.apra.gov.au" target="_blank" rel="noopener">apra.gov.au</a>{' '}
            before making any investment.
          </p>

          <h2>5. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, interest rates, terms,
            and product details are subject to change without notice. Rates displayed are
            indicative only and must be confirmed directly with the financial institution before
            proceeding.
          </p>
          <p>
            We make no representations or warranties regarding the accuracy, completeness, or
            timeliness of any information displayed on our website.
          </p>

          <h2>6. User Responsibilities</h2>
          <p>By using our services, you agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information when submitting enquiries</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Notify us immediately of any unauthorised use of your information</li>
            <li>Comply with all applicable Australian laws and regulations</li>
            <li>Use our services only for lawful purposes</li>
          </ul>

          <h2>7. Your Relationship with Financial Institutions</h2>
          <p>
            When you enquire about or invest in a fixed term deposit through our comparison
            service, your contractual relationship is directly with the financial institution, not
            with RateVault. We act solely as an introducer and bear no responsibility for the
            products, services, or conduct of these institutions.
          </p>

          <h2>8. Commercial Relationships</h2>
          <p>
            We may receive commissions, fees, or other remuneration from financial institutions
            when you make a successful enquiry or investment through our service. This commercial
            arrangement does not affect the rates you receive, which are the same as if you
            approached the institution directly.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, RateVault shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss of profits,
            revenue, data, or goodwill arising from:
          </p>
          <ul>
            <li>Your use of or inability to use our services</li>
            <li>Any decisions made based on information provided on our website</li>
            <li>The acts or omissions of any third-party financial institution</li>
            <li>Technical failures or service interruptions</li>
          </ul>
          <p>
            Nothing in these terms excludes or limits our liability for death or personal injury
            caused by our negligence, fraud, or any other liability that cannot be excluded by
            Australian law.
          </p>

          <h2>10. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the
            property of RateVault or our licensors and is protected by Australian intellectual
            property laws. You may not reproduce, distribute, or create derivative works without
            our written permission.
          </p>

          <h2>11. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            content, privacy policies, or practices of any third-party websites. Your use of
            third-party websites is at your own risk.
          </p>

          <h2>12. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to the website. Your continued use of the service
            after changes constitutes acceptance of the modified terms.
          </p>

          <h2>13. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of
            New South Wales, Australia. Any disputes arising from these terms or your use of our
            services shall be subject to the exclusive jurisdiction of the courts of New South
            Wales, Australia.
          </p>

          <h2>14. Severability</h2>
          <p>
            If any provision of these terms is found to be unenforceable or invalid, that provision
            shall be limited or eliminated to the minimum extent necessary, and the remaining
            provisions shall remain in full force and effect.
          </p>

          <h2>15. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:info@ratevault.org">info@ratevault.org</a>
          </p>
        </div>
      </div>
    </section>
  );
}
