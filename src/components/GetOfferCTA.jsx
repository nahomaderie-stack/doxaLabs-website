import "./GetOfferCTA.css";

function GetOfferCTA() {
  return (
    <section id="getoffercta" className="get-offer-cta">
      <div className="offer-content">
        <h2>
          Get our
          <br />
          Special <span>Offer</span>
          <br />
          Now!
        </h2>

        <div className="offer-buttons">
          <button className="offer-primary-btn">
            Choose Services
          </button>

          <button className="offer-secondary-btn">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetOfferCTA;