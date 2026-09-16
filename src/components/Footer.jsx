import './Footer.css';
import logo from '../assets/Logos/DoxaLabs-Logo-2T.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="DoxaLabs Logo" />

          <p>We create brands that connect, build, and grow.</p>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#ourservices">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <a href="#ourservices">Marketing</a>
          <a href="#ourservices">Web Development</a>
          <a href="#ourservices">SaaS</a>
          <a href="#ourservices">CGI Ads</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get in touch</h3>

          <a href="mailto:contacts@doxalabs.com">contacts@doxalabs.com</a>

          <a href="#contact">Start a project ↗</a>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="LinkedIn">
              LI
            </a>
            <a href="#" aria-label="Facebook">
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
