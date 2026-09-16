import './OurServices.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

function OurServices() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="ourservices" className="our-services">
      {/* Header */}
      <div
        ref={headerRef}
        className={`services-header reveal-up ${headerVisible ? 'reveal-visible' : ''}`}
      >
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
          nonummy nibh euismod Lorem ipsum dolor sit amet, consecteteur
          adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit
          amet, consecteteur adipiscing elit, sed diam nonummy nibh euismod
        </p>
      </div>

      {/* Grid — no reveal-up on wrapper; cards animate individually */}
      <div
        ref={gridRef}
        className={`services-grid ${gridVisible ? 'reveal-visible' : ''}`}
      >
        <div className="service-card marketing-card">
          <div className="service-icon">i</div>
          <h3>Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consecteteur
            adipiscing
          </p>
        </div>

        {/* Web Development */}
        <div className="service-card web-card selected">
          <div className="service-icon">i</div>

          <h3>Web Development</h3>

          <p>
            Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consecteteur
            adipiscing
          </p>
        </div>

        {/* SaaS */}
        <div className="service-card saas-card">
          <div className="service-icon">i</div>

          <h3>SaaS</h3>

          <p>
            Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consecteteur
            adipiscing
          </p>
        </div>

        {/* App Development */}
        <div className="service-card app-card">
          <div className="service-icon">i</div>

          <h3>App Development</h3>

          <p>
            Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
            nonummy nibh euismod
          </p>
        </div>

        {/* CGI Ads */}
        <div className="service-card cgi-card">
          <div className="service-icon">i</div>

          <h3>CGI Ads</h3>

          <p>
            Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
            nonummy nibh euismod
          </p>
        </div>
      </div>
    </section>
  );
}
export default OurServices;
