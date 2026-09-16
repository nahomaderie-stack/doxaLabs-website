import './Footer.css';
import logo from '../assets/Logos/DoxaLabs-Logo-2T.png';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Footer() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <footer
      id="footer"
      ref={ref}
      className={`footer reveal-up ${isVisible ? 'reveal-visible' : ''}`}
    >
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <img src={logo} alt="DoxaLabs Logo" />
          </Link>
          <p>We create brands that connect, build, and grow.</p>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="/#home">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#ourservices">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <a href="/#ourservices">Marketing</a>
          <a href="/#ourservices">Web Development</a>
          <a href="/#ourservices">SaaS</a>
          <a href="/#ourservices">CGI Ads</a>
        </div>

        {/* Contact */}
        <div id="contact" className="footer-column footer-contact">
          <h3>Get in touch</h3>

          <a href="mailto:contacts@doxalabs.com">contacts@doxalabs.com</a>

          <a href="tel:+251973387550">Start a project ↗</a>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LI
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DoxaLabs. All rights reserved.</p>

        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
