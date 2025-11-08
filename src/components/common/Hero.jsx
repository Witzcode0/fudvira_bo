import React from "react";
import "../../styles/hero.css";
import heroRightImg from "../../assets/images/hero/hero-img.png";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-inner container">
                <div className="hero-content">
                    <h1>Pure Nutrition, Naturally Preserved.</h1>
                    <p>
                        Fudvira brings you nature’s goodness in pure powdered form — made from real
                        fruits, vegetables, spices, and Ayurvedic herbs. No chemicals, no added sugar,
                        just authentic nourishment for daily wellness.
                    </p>
                    <div class="hero-buttons">
                        <a href="#" class="btn btn-primary">Shop Now</a>
                        <a href="#" class="btn btn-outline-primary">Explore Products</a>
                    </div>

                </div>

                <div className="hero-product-image">
                    <img src={heroRightImg} alt="Fudvira Products" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
