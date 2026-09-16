import './GetOfferCTA.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

function GetOfferCTA() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="getoffercta" className="get-offer-cta">
      <div
        ref={ref}
        className={`offer-content reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
      >
        <h2>
          Get our
          <br />
          Special <span>Offer</span>
          <br />
          Now!
        </h2>

        <div className="offer-buttons">
          <a href="/#ourservices">
            <button className="offer-primary-btn">Choose Services</button>
          </a>

          <a href="tel:+251973387550">
            <button className="offer-secondary-btn">Contact Us</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GetOfferCTA;
