import './Header.css';
function Header() {
  return (
    <header className="container">
      <div>
        <a href="/">DoxaLabs</a>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#ourservices">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div>
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;
