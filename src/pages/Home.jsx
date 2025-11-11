import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import "../styles/home.css"
// Sample images (replace with your assets)

import fruitPowder from "../assets/images/category/fruit.png";
import vegPowder from "../assets/images/category/veg.png";
import spicePowder from "../assets/images/category/spice.png";
import herbPowder from "../assets/images/category/herb.png";
import offerImg from "../assets/images/offer/offer.jpg";

function Home() {
  const categories = [
    { title: "Fruit Powders", img: fruitPowder },
    { title: "Vegetable Powders", img: vegPowder },
    { title: "Spice Powders", img: spicePowder },
    { title: "Ayurvedic / Herbal Powders", img: herbPowder },
  ];
  return (
    <div>
      <Header />
      <Hero />
      {/* start category section */}
      <section className="section category-section">
        <div className="container">
          <h2 className="section-title">Explore Our Natural Powder Categories</h2>
          <p className="section-subtitle">100% Pure, Handpicked & Nutrient-Rich Powders</p>

          <div className="category-grid">
            {categories.map((cat, index) => (
              <div className="category-card" key={index}>
                <div className="category-image">
                  <img src={cat.img} alt={cat.title} />
                </div>
                <h3>{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end category section */}

      {/* start offer banner section */}
      <section className="offer-banner">
        <div className="container offer-inner">

          {/* Text Content */}
          <div className="offer-text">
            <h2>Special Festival Offer</h2>
            <h1>Flat 20% OFF on All Natural Powders</h1>
            <p>Pure. Healthy. Chemical-free. Perfect for your daily nutrition.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>

          {/* Offer Image */}
          <div className="offer-image">
            <img src={offerImg} alt="Offer Product" />
          </div>

        </div>
      </section>
      {/* end offer banner section */}

      <Footer />
    </div>
  )
}

export default Home