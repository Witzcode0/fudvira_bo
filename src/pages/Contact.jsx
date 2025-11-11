import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "../../src/styles/contact.css";

function Contact() {
    return (
        <>
            <Header />

            <section className="contact-section">
                <div className="container contact-container">

                    {/* Left - Image & Text Intro */}
                    <div className="contact-left">
                        <h2>Connect With Fudvira</h2>
                        <p>
                            Your health journey matters to us. Whether you have questions about our powders,
                            want bulk supply, or need personal product guidance — we’re here to support you.
                        </p>

                        <div className="contact-details-box">
                            <p><strong>📞 Phone:</strong> +91 89801 45007</p>
                            <p><strong>📧 Email:</strong> letstalk@bharatfuturistai.com</p>
                            <p><strong>🌍 Website:</strong> www.bharatfuturistai.com</p>
                            <p><strong>📍 Location:</strong> Rajkot, Gujarat, India</p>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="contact-right">
                        <form className="contact-form-card">
                            <h3>Send us a Message</h3>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <textarea rows="4" placeholder="Your Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
