import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-icon-container">
             <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="header-logo-svg">
              <path d="M15 75 L35 35 L50 55 L65 35 L85 75" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 75 L35 55 L50 75 L65 55 L75 75" stroke="#f3e5ab" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            </svg>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-text">MERGLOWW</span>
            <span className="logo-subtitle">ESTATES PRIVATE LIMITED</span>
          </div>
        </div>

        <nav className="desktop-nav">
          <Link to="/" className="nav-link"><span>Home</span></Link>
          <a href="/#about" className="nav-link"><span>About</span></a>
          <Link to="/services" className="nav-link"><span>Services</span></Link>
          <a href="/#testimonials" className="nav-link"><span>Testimonials</span></a>
          <a href="#footer" className="nav-link"><span>Contact</span></a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary glow-btn">
            <span>Get in Touch</span>
          </button>
        </div>

        <button className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu} className="mobile-link"><span>Home</span></Link>
        <a href="/#about" onClick={closeMenu} className="mobile-link"><span>About</span></a>
        <Link to="/services" onClick={closeMenu} className="mobile-link"><span>Services</span></Link>
        <a href="/#testimonials" onClick={closeMenu} className="mobile-link"><span>Testimonials</span></a>
        <a href="#footer" onClick={closeMenu} className="mobile-link"><span>Contact</span></a>
        <button className="btn-primary mobile-btn glow-btn" onClick={closeMenu}>
          <span>Get in Touch</span>
        </button>
      </nav>
    </header>
  );
}
