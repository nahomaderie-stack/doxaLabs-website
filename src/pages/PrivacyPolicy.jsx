import { Link } from 'react-router-dom';
import './LegalPage.css';

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-bg-glow" aria-hidden="true" />

      <div className="legal-container">
        {/* Back nav */}
        <Link to="/" className="legal-back">
          ← Back to Home
        </Link>

        <header className="legal-header">
          <p className="legal-label">Legal</p>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Last updated: September 2026</p>
        </header>

        <div className="legal-body">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to DoxaLabs ("we", "our", or "us"). We are committed to
              protecting your personal information and your right to privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or engage with our
              services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information that you provide directly to us, such as:
            </p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Business details when you request a project or consultation</li>
              <li>Communications you send to us</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p>
              We also automatically collect certain information when you visit our
              website, including IP address, browser type, operating system, referring
              URLs, and pages viewed.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about services, promotions, and events</li>
              <li>Monitor and analyze trends and usage to improve your experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted service providers
              who assist us in operating our website and conducting our business,
              subject to confidentiality agreements. We may also disclose your
              information if required by law or to protect the rights and safety of
              DoxaLabs, our users, or others.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on
              our website and hold certain information. You can instruct your browser
              to refuse all cookies or to indicate when a cookie is being sent.
              However, some features of our website may not function properly without
              cookies.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures
              to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@doxalabs.com">privacy@doxalabs.com</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites. We
              encourage you to review the privacy policies of any third-party sites
              you visit.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any significant changes by posting the new policy on this page and
              updating the "Last updated" date. Your continued use of our services
              after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us at:
            </p>
            <div className="legal-contact-card">
              <p><strong>DoxaLabs</strong></p>
              <p>
                Email:{' '}
                <a href="mailto:privacy@doxalabs.com">privacy@doxalabs.com</a>
              </p>
              <p>
                General:{' '}
                <a href="mailto:contacts@doxalabs.com">contacts@doxalabs.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
