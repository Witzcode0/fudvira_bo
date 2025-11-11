import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import "../../src/styles/about.css";

function About() {
    return (
        <div>
            <Header />
            <section className="about-section">
                <div className="container about-wrapper">

                    {/* Left Content */}
                    <div className="about-text">
                        <h1>About <span>Fudvira</span></h1>
                        <p>
                            Fudvira is a natural food brand committed to providing
                             <strong> healthy, pure, and chemical-free</strong> powders for daily nutrition.
                            Our products are made from <strong>real fruits, vegetables, herbs and spices</strong>
                            without additives, preservatives or artificial flavors.
                        </p>

                        <ul className="feature-list">
                            <li>100% Natural Ingredients</li>
                            <li>No Preservatives / No Artificial Flavours</li>
                            <li>Cold Drying & Fine Milling Process</li>
                            <li>Rich in Vitamins & Minerals</li>
                            <li>Perfect for Kids, Fitness & Daily Use</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="about-image">
                        <img src="https://www.hcpwellness.in/wp-content/uploads/2024/05/FOOD-POWDER.jpg" alt="Natural Food Powder" />
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About