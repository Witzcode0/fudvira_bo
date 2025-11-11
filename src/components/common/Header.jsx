import React, { useState, useEffect, useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/images/logo/logo.png";
import { FiUser, FiHeart, FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";



function Header() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Separate states
  const [showDesktopProfile, setShowDesktopProfile] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);

  const profileRef = useRef(null);

  const popularSearches = [
    "Banana Powder",
    "Baby Food Mix",
    "Energy Shake Powder",
    "Healthy Bakery Ingredients",
  ];

  // ✅ Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowDesktopProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > 20){
      document.querySelector('.header').classList.add('header-small');
    } else {
      document.querySelector('.header').classList.remove('header-small');
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="container header-container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Fudvira Logo" />
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-toggle" onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            />

            {showSuggestions && (
              <div className="search-suggestions">
                <p className="suggestion-title">Popular Searches</p>
                <div className="pill-container">
                  {popularSearches.map((item, index) => (
                    <span key={index} className="suggestion-pill">{item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Icons */}
          <div className="header-icons">

            <div className="icon-box">
              <FiHeart className="icon" />
              <span className="label">Wishlist</span>
              <span className="count-badge">2</span>
            </div>

            <div className="icon-box">
              <FiShoppingCart className="icon" />
              <span className="label">Cart</span>
              <span className="count-badge">3</span>
            </div>

            {/* ✅ Desktop Profile Dropdown */}
            <div
              ref={profileRef}
              className="icon-box profile-trigger"
              onClick={() => setShowDesktopProfile(!showDesktopProfile)}
            >
              <FiUser className="icon" />
              <span className="label">Profile</span>

              <div className={`profile-dropdown ${showDesktopProfile ? "active" : ""}`}>
                <h4>Hello User</h4>
                <p>To access your Fudvira account</p>
                <button className="dropdown-btn">Login / Sign Up</button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ================= NAVIGATION MENU ================= */}
      <nav className="main-menu">
        <ul className="menu-list container">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu">
          <div className="close-btn" onClick={() => setMobileMenuOpen(false)}>
            <FiX />
          </div>

          {/* Mobile Icons */}
          <div className="mobile-user-actions">

            {/* ✅ Opens only MOBILE PROFILE PANEL */}
            <div className="m-action-box" onClick={() => setShowMobileProfile(true)}>
              <div className="m-icon-wrapper">
                <FiUser className="m-icon" />
              </div>
              <span>Profile</span>
            </div>

            <div className="m-action-box">
              <div className="m-icon-wrapper">
                <FiHeart className="m-icon" />
                <span className="m-count-badge">3</span>
              </div>
              <span>Wishlist</span>
            </div>

            <div className="m-action-box">
              <div className="m-icon-wrapper">
                <FiShoppingCart className="m-icon" />
                <span className="m-count-badge">5</span>
              </div>
              <span>Cart</span>
            </div>
          </div>

          <ul className="mobile-nav-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Products</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
          </ul>


        </div>
      </div>

      {/* ✅ MOBILE PROFILE BOTTOM PANEL */}
      <div className={`profile-panel-overlay ${showMobileProfile ? "active" : ""}`}>
        <div className="profile-panel">
          <div className="panel-close-btn" onClick={() => setShowMobileProfile(false)}>
            <FiX />
          </div>

          <h3 className="panel-title">Hello User</h3>
          <p className="panel-sub">To access your Fudvira account</p>

          <button className="panel-btn">Login / Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Header;
