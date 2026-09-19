import React from 'react';

const products = [
  { img: 'assets/pro_chair.png', name: 'Plastic Chair' },
  { img: 'assets/pro_sofa.png', name: 'Chesterfield Sofa' },
  { img: 'assets/pro_table.png', name: 'Wooden Coffee Table' },
  { img: 'assets/pro_tv_stand.png', name: 'TV Entertainment Unit' },
  { img: 'assets/pro_mattress.png', name: 'Pillow Top Mattress' },
  { img: 'assets/pro_cooker.png', name: 'Prestige Pressure Cooker' },
  { img: 'assets/pro_rice_cooker.png', name: 'Bajaj Rice Cooker' },
  { img: 'assets/pro_induction.png', name: 'Philips Induction Cooktop' },
  { img: 'assets/pro_stove.png', name: '2 Burner Gas Stove' },
  { img: 'assets/pro_kettle.png', name: 'Scarlett Electric Kettle' },
  { img: 'assets/pro_theatre.png', name: 'Philips Home Theatre' },
];

export default function Products() {
  const scrollBy = (amount) => {
    document.getElementById('prodScroll').scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="products" className="products">
      <h2 className="section-title"><span>Products</span></h2>
      <div className="products-wrapper">
        <button className="scroll-btn left" onClick={() => scrollBy(-280)}>&#10094;</button>
        <div className="products-scroll" id="prodScroll">
          {products.map((p) => (
            <div className="product-card" key={p.name}>
              <div className="img-wrap">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="p-name">{p.name}</div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollBy(280)}>&#10095;</button>
      </div>
    </section>
  );
}