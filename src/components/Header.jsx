import { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Logos/DoxaLabs-Logo-3F.png';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <header className={`container ${isScrolled ? 'scrolled' : ''}`}>
      <div className='Logo-container'>
        <Link to="/"><img src={logo} alt="DoxaLabs Logo" /></Link>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#ourservices">Services</a>
        <a href="#footer">Contact</a>
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
