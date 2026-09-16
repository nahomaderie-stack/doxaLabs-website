import React from 'react';
import './Hero.css';
import bgImage from '../assets/Background/HeroImageC.png';

function Hero() {
  return (
    <section id="home">
      <div
        className="hero-image-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1>
          We create brands <br /> that{' '}
          <span className="hero-highlight">Connect.</span>
        </h1>
        <p>
          We build powerful digital experiences that help businesses
          grow,connect with their audiences, and stand out in an ever-evolving
          digital world. From strategy and design to development and digital
          innovation
        </p>
        <div className="hero-buttons">
          <button>Discover Us</button>
          <button>Book a Call ↗</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
