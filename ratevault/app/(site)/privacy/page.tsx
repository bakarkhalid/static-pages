import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — RateVault',
  description: "RateVault's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: 18/05/2026</p>
        <div className="legal-content">
          <h2>1. About RateVault</h2>
          <p>
            RateVault ("we", "us", or "our") is a comparison aggregator service that helps consumers
            compare fixed term deposit products from APRA-regulated financial institutions. We are
            not a financial institution, bank, or investment firm. We operate as a comparison
            website.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
            information in compliance with the Australian Privacy Act 1988 (Cth) and the Australian
            Privacy Principles (APPs).
          </p>

          <h2>2. Data Controller Information</h2>
          <p>
            RateVault is responsible for the personal information we collect through our website.
            For any privacy enquiries, please contact us at:{' '}
            <a href="mailto:info@ratevault.org">info@ratevault.org</a>
          </p>

          <h2>3. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact details (email address, telephone number)</li>
            <li>Investment preferences and deposit amounts</li>
            <li>Communication preferences</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (how you interact with our website)</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>Under the Australian Privacy Act 1988, we process your personal information on the following bases:</p>
          <ul>
            <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal information for specific purposes</li>
            <li><strong>Contractual necessity:</strong> Where processing is necessary to perform our comparison services</li>
            <li><strong>Legitimate purposes:</strong> Where processing is reasonably necessary for our business functions</li>
            <li><strong>Legal obligation:</strong> Where we need to comply with Australian law</li>
          </ul>

          <h2>5. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Provide personalised fixed term deposit comparisons</li>
            <li>Connect you with APRA-regulated financial institutions offering relevant products</li>
            <li>Communicate with you about available investment options</li>
            <li>Improve our comparison services and user experience</li>
            <li>Send marketing communications (where you have consented)</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h2>6. Information Sharing</h2>
          <p>
            We share your information with APRA-regulated financial institutions solely for the
            purpose of providing you with relevant fixed term deposit options. These institutions
            are independent and will process your data in accordance with their own privacy
            policies.
          </p>
          <p>
            We do not sell your personal information to third parties. We may share data with
            service providers who assist us in operating our website, subject to appropriate
            agreements.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfil the purposes
            for which it was collected, or as required by law. Generally, we retain enquiry data
            for up to 3 years, after which it is securely deleted.
          </p>

          <h2>8. Your Rights Under the Privacy Act</h2>
          <p>Under Australian privacy law, you have the following rights:</p>
          <ul>
            <li><strong>Right of Access:</strong> Request a copy of your personal information</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Right to Complain:</strong> Lodge a complaint about our handling of your information</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of receiving direct marketing communications</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@ratevault.org">info@ratevault.org</a>. We will respond within 30
            days of receiving your request.
          </p>

          <h2>9. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to improve your experience. Essential cookies
            are used to operate our website. Analytics and marketing cookies are only used with
            your consent. You can manage your cookie preferences through your browser settings.
          </p>

          <h2>10. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction. This
            includes encryption, secure servers, and access controls.
          </p>

          <h2>11. Overseas Disclosure</h2>
          <p>
            Your personal information is primarily processed within Australia. If we transfer data
            outside Australia, we ensure appropriate safeguards are in place in compliance with
            the Australian Privacy Principles.
          </p>

          <h2>12. Complaints</h2>
          <p>
            If you have concerns about how we handle your personal information, please contact us
            first. You also have the right to lodge a complaint with the Office of the Australian
            Information Commissioner (OAIC).
          </p>

          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on
            this page with an updated revision date. We encourage you to review this policy
            periodically.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy or our data practices, please contact us
            at <a href="mailto:info@ratevault.org">info@ratevault.org</a>
          </p>
        </div>
      </div>
    </section>
  );
}
