import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Products from './components/Products';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';
import { Analytics } from '@vercel/analytics/react';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection
        id="categories"
        title={<>Home <span>Appliances</span></>}
        dark={false}
        categories={[
          { img: 'assets/home_ac.png', name: 'Air Conditioners' },
          { img: 'assets/home_tele.png', name: 'Televisions' },
          { img: 'assets/home_wm.png', name: 'Washing Machines' },
          { img: 'assets/home_iron.png', name: 'Iron Box' },
        ]}
      />
      <CategorySection
        title="Kitchen Appliances"
        dark={true}
        categories={[
          { img: 'assets/kitchen_mix.png', name: 'Mixer Grinders' },
          { img: 'assets/kitchen_grin.png', name: 'Wet Grinders' },
          { img: 'assets/kitchen_mo.png', name: 'Microwaves' },
          { img: 'assets/kitchen_ref.png', name: 'Refrigerators' },
        ]}
      />
      <Products />
      <Brands />
      <About />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}