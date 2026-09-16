import './WhyChooseUs.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

function WhyChooseUs() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="whychooseus" className="why-choose-us">
      <div
        ref={headerRef}
        className={`why-choose-header reveal-up ${headerVisible ? 'reveal-visible' : ''}`}
      >
        <p className="section-label">Why Choose Us</p>

        <h2>
          We don&apos;t just deliver.
          <br />
          We make it<span> matter.</span>
        </h2>

        <p className="why-choose-description">
          We combine strategy, creativity, and technology to create work that
          helps businesses stand out, connect with people, and grow.
        </p>
      </div>

      {/* Grid — no reveal-up on wrapper; cards animate individually */}
      <div
        ref={gridRef}
        className={`why-choose-grid ${gridVisible ? 'reveal-visible' : ''}`}
      >
        <div className="why-card">
          <span className="why-number">01</span>
          <h3>Strategy First</h3>
          <p>
            Every project starts with understanding your goals, audience, and
            business before we build.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number">02</span>
          <h3>Creative Thinking</h3>
          <p>
            We turn ideas into distinctive visual experiences that make your
            brand recognizable and memorable.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number">03</span>
          <h3>Built for Growth</h3>
          <p>
            From campaigns to digital products, we create solutions that can
            evolve as your business grows.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number">04</span>
          <h3>One Creative Partner</h3>
          <p>
            Branding, marketing, development, and digital experiences brought
            together under one team.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number">05</span>
          <h3>Results Driven</h3>
          <p>
            Every decision is guided by data and purpose — we focus on outcomes
            that move the needle for your business.
          </p>
        </div>

        <div className="why-card">
          <span className="why-number">06</span>
          <h3>Long-term Partnership</h3>
          <p>
            We invest in lasting relationships, growing alongside your business
            long after a project ships.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
