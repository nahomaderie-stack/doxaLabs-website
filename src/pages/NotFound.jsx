import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="nf-page">
      <div className="nf-glow" aria-hidden="true" />

      <div className="nf-content">
        <p className="nf-label">Error</p>

        <h1 className="nf-code">
          <span aria-hidden="true" className="nf-glitch" data-text="404">404</span>
        </h1>

        <h2 className="nf-title">Page not found</h2>

        <p className="nf-description">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn-primary">
            ← Back to Home
          </Link>
          <a href="#contact" className="nf-btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
