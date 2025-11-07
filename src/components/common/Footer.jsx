import React from "react";
import "../../styles/footer.css";
import branchImg from "../../assets/images/footer/f1.png";
import logo from "../../assets/images/logo/logo.png";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-container">

                {/* Logo & About */}
                <div className="footer-col about-col">
                    <div className="footer-logo">
                        <img src={logo} alt="Fudvira Logo" />
                    </div>
                    <p className="footer-text">
                        We specialize in pure, clean, and natural food powders crafted under strict quality standards.
Freshness, nutrition, and authentic taste — naturally from us to you.

                    </p>

                    <div className="footer-socials">
                        <a><FiFacebook /></a>
                        <a><FiInstagram /></a>
                        <a><FiYoutube /></a>
                    </div>
                </div>


                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div className="footer-col">
                    <h4>Customer Support</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping Policy</li>
                        <li>Returns & Refunds</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact + Branch Image */}
                <div className="footer-col contact-col">
                    <div className="contact-content">
                        <h4>Contact Us</h4>
                        <p><FiPhone /> +91 898-0145-007 <br />+91 849-0846-001</p>
                        <p><FiMail /> support@fudvira.com</p>
                        <p><FiMapPin /> Surat, Gujarat, India</p>
                    </div>

                    <img src={branchImg} alt="Decor Leaf Branch" className="footer-branch" />
                </div>

            </div>

            {/* Branch in Mobile View (Separately Displayed) */}
            <img src={branchImg} alt="Decor Branch" className="footer-branch-mobile" />

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} <span>Fudvira</span>. All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;