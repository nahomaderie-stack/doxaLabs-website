import { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logos/DoxaLabs-Logo-3F.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Triggers when scrolled down more than 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${id}`);
      }
    }
  };

  return (
    <header className={`container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Logo-container">
        <Link to="/">
          <img src={logo} alt="DoxaLabs Logo" />
        </Link>
      </div>

      <nav>
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

      <div>
        <a href="tel:+251973387550">
          <button>Contact Us</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
