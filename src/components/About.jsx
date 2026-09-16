import './About.css';
import dashboardImg from '../assets/Background/dashboard.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

function About() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="about" className="about-section">
      <div
        ref={ref}
        className={`about-card reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
      >
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
