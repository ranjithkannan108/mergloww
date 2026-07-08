import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import heroBg from '../assets/Home page 2.webp';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/services') {
        setActiveSection('services');
        return;
      }

      const sections = ['about', 'testimonials', 'contact'];
      let current = 'home';
      
      if (window.scrollY > 100) {
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
              current = section;
            }
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e, path, targetId) => {
    e.preventDefault();
    closeMenu();
    
    if (location.pathname === path) {
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path, { state: { scrollTo: targetId } });
    }
  };

  return (
    <header className={`header animate-nav ${isScrolled ? 'scrolled' : ''}`}>
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
            <span className="logo-tagline">Building Trust. Creating Value.</span>
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="/" onClick={(e) => handleNavClick(e, '/', '')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}><span>Home</span></a>
          <a href="/" onClick={(e) => handleNavClick(e, '/', 'about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}><span>About</span></a>
          <Link to="/services" onClick={closeMenu} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}><span>Projects</span></Link>
          <a href="/" onClick={(e) => handleNavClick(e, '/', 'testimonials')} className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}><span>Testimonials</span></a>
          <a href="/" onClick={(e) => handleNavClick(e, '/', 'contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}><span>Contact</span></a>
        </nav>

        <div className="header-actions">
          <a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); setIsContactModalOpen(true); }} className="btn-primary glow-btn" style={{ textDecoration: 'none' }}>
            <span>Get in Touch</span>
          </a>
        </div>

        <button className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="/" onClick={(e) => handleNavClick(e, '/', '')} className={`mobile-link ${activeSection === 'home' ? 'active' : ''}`}><span>Home</span></a>
        <a href="/" onClick={(e) => handleNavClick(e, '/', 'about')} className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`}><span>About</span></a>
        <Link to="/services" onClick={closeMenu} className={`mobile-link ${activeSection === 'services' ? 'active' : ''}`}><span>Projects</span></Link>
        <a href="/" onClick={(e) => handleNavClick(e, '/', 'testimonials')} className={`mobile-link ${activeSection === 'testimonials' ? 'active' : ''}`}><span>Testimonials</span></a>
        <a href="/" onClick={(e) => handleNavClick(e, '/', 'contact')} className={`mobile-link ${activeSection === 'contact' ? 'active' : ''}`}><span>Contact</span></a>
        <a href="#" onClick={(e) => { e.preventDefault(); closeMenu(); setIsContactModalOpen(true); }} className="btn-primary mobile-btn glow-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
          <span>Get in Touch</span>
        </a>
      </nav>

      {/* Flyer-Style Contact Modal (Rendered via Portal) */}
      {isContactModalOpen && createPortal(
        <div className="modal-overlay">
          <div className="modal-content flyer-modal" onClick={e => e.stopPropagation()}>
            {/* Absolute Circular Close Button */}
            <button className="flyer-close-btn" onClick={() => setIsContactModalOpen(false)}>✕</button>
            
            {/* Top Image Section */}
            <div className="flyer-image-section" style={{ backgroundImage: `url(${heroBg})` }}>
              <div className="flyer-overlay">
                <div className="flyer-logo-container">
                  <h2 className="flyer-brand">MERGLOWW ESTATES</h2>
                  <p className="flyer-tagline">Building Trust. Creating Value.</p>
                </div>
              </div>
            </div>
            
            {/* Bottom Content Section */}
            <div className="flyer-content-section">
              <h3 className="flyer-title" style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.6)' }}>A BETTER LIFE STARTS HERE</h3>
              
              <div className="flyer-contact-grid">
                <div className="flyer-contact-item">
                  <div className="flyer-icon"><Phone size={28} /></div>
                  <div className="flyer-text">
                    <span className="flyer-label">CALL US</span>
                    <strong>+91 9514949342</strong>
                  </div>
                </div>
                
                <div className="flyer-contact-item">
                  <div className="flyer-icon"><Mail size={28} /></div>
                  <div className="flyer-text">
                    <span className="flyer-label">EMAIL US</span>
                    <strong>merglowwestatesofficial@gmail.com</strong>
                  </div>
                </div>
                
                <div className="flyer-contact-item full-width">
                  <div className="flyer-icon"><MapPin size={28} /></div>
                  <div className="flyer-text">
                    <span className="flyer-label">VISIT US</span>
                    <strong>No.1/1, W BLOCK, GROUND FLOOR, IMAYAM COLONY, ANNA NAGAR WEST EXTENSION, CHENNAI - 600101.</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
