import React from 'react';

export default function CategorySection({ id, title, dark = false, categories }) {
  return (
    <section id={id} className={dark ? 'kitchen-appliances' : 'home-appliances'}>
      <h2 className="section-title">{title}</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-item" key={cat.name}>
            <div className="category-card">
              <img src={cat.img} alt={cat.name} />
            </div>
            <h3 className="category-name">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}