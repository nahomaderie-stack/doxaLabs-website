import React from 'react';
import './About.css';
import dashboardImg from '../assets/Background/dashboard.png';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        {/* Left Side: Overlapping Dashboard Preview Image */}
        <div className="about-image-wrapper">
          <img
            src={dashboardImg}
            alt="Analytics Dashboard Preview"
            className="about-dashboard-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
