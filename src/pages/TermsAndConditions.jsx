import { Link } from 'react-router-dom';
import './LegalPage.css';

function TermsAndConditions() {
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
          <h1 className="legal-title">Terms &amp; Conditions</h1>
          <p className="legal-meta">Last updated: September 2026</p>
        </header>

        <div className="legal-body">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the DoxaLabs website and services, you agree
              to be bound by these Terms &amp; Conditions. If you do not agree with
              any part of these terms, you may not access our services. These terms
              apply to all visitors, users, and others who access or use our
              services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Services</h2>
            <p>
              DoxaLabs provides digital services including but not limited to
              branding, marketing, web development, SaaS solutions, app development,
              and CGI advertising. The specific scope of services for any engagement
              will be defined in a separate project agreement or statement of work.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website — including but not limited to text,
              graphics, logos, images, and software — is the property of DoxaLabs
              and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works from our content
              without our express written permission.
            </p>
            <p>
              Work created for clients under a project agreement becomes the
              property of the client upon full payment, unless otherwise specified
              in the project contract.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when requested</li>
              <li>Use our services only for lawful purposes</li>
              <li>
                Not attempt to gain unauthorized access to any part of our systems
              </li>
              <li>
                Not use our services in any way that could damage, disable, or
                impair our infrastructure
              </li>
              <li>
                Not engage in any conduct that restricts or inhibits any other
                user's use of our services
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Payment Terms</h2>
            <p>
              Payment terms for services rendered are as agreed upon in individual
              project contracts. Unless otherwise specified:
            </p>
            <ul>
              <li>
                A deposit of 50% of the total project value is required before
                work commences
              </li>
              <li>
                The remaining balance is due upon project completion before final
                deliverables are released
              </li>
              <li>
                Late payments may incur interest at a rate of 1.5% per month
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary information
              exchanged during the course of a project engagement. This includes
              business strategies, technical specifications, and client data. This
              obligation survives the termination of any project agreement.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, DoxaLabs shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of, or inability to use, our services.
              Our total liability to you for any claim arising out of these terms
              shall not exceed the amount paid by you to DoxaLabs in the three
              months preceding the claim.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an "as is" and "as available" basis
              without warranties of any kind, either express or implied, including
              but not limited to warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Termination</h2>
            <p>
              Either party may terminate a project engagement by providing written
              notice as specified in the project agreement. Upon termination, you
              will be invoiced for all work completed up to the termination date.
              Deposits are non-refundable unless DoxaLabs is unable to deliver the
              agreed services.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in
              accordance with applicable laws. Any disputes arising under these
              terms shall be subject to the exclusive jurisdiction of the competent
              courts in the applicable jurisdiction.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by updating the "Last updated"
              date. Your continued use of our services after such changes constitutes
              your acceptance of the revised terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, please
              contact us at:
            </p>
            <div className="legal-contact-card">
              <p><strong>DoxaLabs</strong></p>
              <p>
                Email:{' '}
                <a href="mailto:legal@doxalabs.com">legal@doxalabs.com</a>
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

export default TermsAndConditions;
