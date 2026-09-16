import './Hero.css';
import { useEffect, useState } from 'react';
import bgImage from '../assets/Background/HeroImageC-2.png';

const words = ['Connect', 'Build', 'Market', 'Grow', 'Scale'];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Start typing smoothly as the curtain opens
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, 2000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    const currentWord = words[wordIndex];

    // Pause when full word is typed
    if (!isDeleting && charIndex === currentWord.length) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(pauseTimer);
    }

    // Pause briefly when word is fully deleted, then move to next word
    if (isDeleting && charIndex === 0) {
      const nextWordTimer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 400);
      return () => clearTimeout(nextWordTimer);
    }

    // Typing and deleting step speed
    const typingSpeed = isDeleting ? 60 : 120;
    const timer = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, isStarted]);

  const displayedWord = words[wordIndex].substring(0, charIndex);

  return (
    <section id="home">
      <div
        className="hero-image-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1>
          We create brands <br /> that{' '}
          <span className="hero-highlight">
            {displayedWord}
            <span className="typing-cursor">|</span>
          </span>
        </h1>

        <p>
          We build powerful digital experiences that help businesses grow,
          connect with their audiences, and stand out in an ever-evolving
          digital world. From strategy and design to development and digital
          innovation
        </p>

        <div className="hero-buttons">
          <a href="/#ourservices">
            <button className="discover-btn">Discover Us</button>
          </a>

          <a href="tel:+251973387550">
            <button className="call-btn">Book a Call ↗</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
