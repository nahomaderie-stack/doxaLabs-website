import { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logos/DoxaLabs-Logo-3F.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (id) => (e) => {
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      e.preventDefault();

      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        window.history.pushState(null, '', `/#${id}`);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="Logo-container">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="DoxaLabs Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/#home" onClick={handleNavClick('home')}>
          Home
        </a>

        <a href="/#about" onClick={handleNavClick('about')}>
          About Us
        </a>

        <a href="/#ourservices" onClick={handleNavClick('ourservices')}>
          Services
        </a>

        <a href="/#contact" onClick={handleNavClick('contact')}>
          Contact
        </a>
      </nav>

      {/* Actions */}
      <div className="header-actions">
        {/* CTA */}
        <a href="tel:+251973387550" className="cta-link">
          <button type="button">Contact Us</button>
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
