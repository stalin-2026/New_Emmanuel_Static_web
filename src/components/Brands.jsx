
import React from 'react';

const brands = [
  'dell',
  'lg',
  'philips',
  'samsung',
  'whirlpool',
  'haier',
  'sony',
  'panasonic',
  'bosch',
  'ifb',
];

export default function Brands() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="top-brands">
      <h2 className="section-title">
        Top <span>Brands</span>
      </h2>

      <div className="brands-wrapper">
        <div className="brands-track">
          {duplicatedBrands.map((brand, i) => (
            <div className="brand-item" key={`${brand}-${i}`}>
              <img
                src={`/assets/${brand}.png`}
                alt={`${brand} logo`}
                width="140"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}