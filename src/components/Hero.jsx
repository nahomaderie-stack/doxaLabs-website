
import React from 'react';
import './Hero.css';
import { useEffect, useState } from 'react';
import bgImage from '../assets/Background/HeroImageC-2.png';

function Hero() {
  const words = ['Connect', 'Build', 'Market', 'Grow', 'Scale'];

  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setTypedWord(currentWord.slice(0, typedWord.length + 1));

        // Pause when word is complete
        if (typedWord === currentWord) {
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setTypedWord(currentWord.slice(0, typedWord.length - 1));

        // Move to next word
        if (typedWord === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typedWord === currentWord && !isDeleting ? 1500 : typingSpeed);

    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, wordIndex]);

  return (
    <section id="home">
      <div
        className="hero-image-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1>
          We create brands <br /> that{' '}
          <span className="hero-highlight">
            {typedWord}
            <span className="typing-cursor">|</span>
          </span>
        </h1>

        <p>
          We build powerful digital experiences that help businesses
          grow, connect with their audiences, and stand out in an ever-evolving
          digital world. From strategy and design to development and digital
          innovation
        </p>

        <div className="hero-buttons">
          <a href="#ourservices">
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


