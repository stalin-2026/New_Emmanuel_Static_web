import React from 'react';

const brands = ['dell', 'lg', 'philips', 'samsung', 'whirlpool', 'haier', 'sony', 'panasonic', 'bosch', 'ifb'];

export default function Brands() {
  return (
    <section id="brands" className="top-brands">
      <h2 className="section-title">Top <span>Brands</span></h2>
      <div className="brands-wrapper">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, i) => (
            <div className="brand-item" key={i}>
              <img src={`assets/${brand}.png`} alt={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}