import './OurServices.css';
function OurServices() {
  return (
    <section id="ourservices" className="our-services">
      {/* Marketing */}
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consecteteur adipiscing elit, sed diam
          nonummy nibh euismod Lorem ipsum dolor sit amet, consecteteur
          adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit
          amet, consecteteur adipiscing elit, sed diam nonummy nibh euismod
        </p>
      </div>
      <div className="services-grid">
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

          <h3>Saas</h3>

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
