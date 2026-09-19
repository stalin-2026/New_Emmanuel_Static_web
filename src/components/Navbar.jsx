
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a href="#home" className="logo">
        <img
          src="/images/logo.png"
          alt="New Emmanuel Enterprises"
        />
        <span>New Emmanuel Enterprises</span>
      </a>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#categories" onClick={() => setOpen(false)}>Categories</a></li>
        <li><a href="#products" onClick={() => setOpen(false)}>Products</a></li>
        <li><a href="#brands" onClick={() => setOpen(false)}>Top Brands</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About us</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact us</a></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}