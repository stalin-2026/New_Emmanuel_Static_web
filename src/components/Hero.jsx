import React, { useState, useEffect, useRef } from 'react';

const heroData = [
  {
    img: 'assets/home_bg_1.png',
    alt: 'Home electronics and appliances',
    title: <>Wide Range of <span>Home Appliances</span> to Choose From</>,
    text: 'Electronics and daily essentials for every room in your home.',
  },
  {
    img: 'assets/home_bg_2.png',
    alt: 'Kitchen cookware set',
    title: <>Premium <span>Kitchen Cookware</span> for Every Recipe</>,
    text: 'Durable non-stick sets built for everyday cooking.',
  },
  {
    img: 'assets/home_bg_3.png',
    alt: 'Large kitchen appliances',
    title: <>Trusted <span>Large Appliances</span> for Modern Living</>,
    text: 'Refrigerators, ovens and more from top brands.',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(goNext, 7500);
    return () => clearInterval(timer.current); // cleanup on unmount
  }, []);

  function goTo(i) {
    setIndex(i);
    resetTimer();
  }

  function goNext() {
    setIndex((prev) => (prev + 1) % heroData.length);
    resetTimer();
  }

  function goPrev() {
    setIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer.current);
    timer.current = setInterval(goNext, 7500);
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-slides">
        {heroData.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === index ? 'active' : ''}`}>
            <div className="hero-slide-img">
              <img src={slide.img} alt={slide.alt} />
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow left" aria-label="Previous slide" onClick={goPrev}>&#10094;</button>
      <button className="hero-arrow right" aria-label="Next slide" onClick={goNext}>&#10095;</button>

      <div className="hero-content">
        <div className="hero-text" style={{ opacity: fade ? 1 : 0 }}>
          <h1>{heroData[index].title}</h1>
          <p>{heroData[index].text}</p>
        </div>
      </div>

      <div className="hero-dots">
        {heroData.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}