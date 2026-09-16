import React from 'react';
import './Hero2.css';

function Hero2() {
  return (
    <section className="hero-container">
      {/* Glowing Purple Arch/Ring */}
      <div className="hero-arch" aria-hidden="true" />

      {/* Subtle Central Glow Effect */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* Main Content Box */}
      <div className="hero-content">
        <h1 className="hero-title">
          We create brands <br />
          that <span className="hero-title-highlight">connect.</span>
        </h1>

        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing
          <br />
          elit, sed diam nonummy nibh euismod
        </p>

        <div className="hero-actions">
          <a href="#discover" className="btn-primary">
            <svg
              className="btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
            Discover Us
          </a>

          <a href="#book-call" className="btn-secondary">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero2;
