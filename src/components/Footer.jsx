import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path, targetId) => {
    e.preventDefault();
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
    <footer id="footer" className="footer-wrapper">
      <div className="container">
        
        <div className="footer-container">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer-logo-section">
            <div className="footer-logo-container">
              <svg width="35" height="35" viewBox="0 0 100 100" fill="none">
                <path d="M15 75 L35 35 L50 55 L65 35 L85 75" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 75 L35 55 L50 75 L65 55 L75 75" stroke="#f3e5ab" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
              </svg>
              <div className="footer-logo-text">
                <span className="footer-logo-main">MERGLOWW</span>
                <span className="footer-logo-sub">ESTATES PRIVATE LIMITED</span>
              </div>
            </div>
            <p className="footer-desc">
              Merglooww Estates is your trusted partner for all your premium real estate and land investment needs, backed by years of experience and transparency.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/" onClick={(e) => handleNavClick(e, '/', '')} className="footer-link">Home</a></li>
              <li><a href="/" onClick={(e) => handleNavClick(e, '/', 'about')} className="footer-link">About Us</a></li>
              <li><Link to="/services" className="footer-link">Projects</Link></li>
              <li><a href="/" onClick={(e) => handleNavClick(e, '/', 'testimonials')} className="footer-link">Testimonials</a></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Offerings */}
          <div>
            <h4 className="footer-heading">Our Offerings</h4>
            <ul className="footer-links" style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ color: '#F8F9FA', opacity: 0.8, marginBottom: '0.5rem' }}>Premium Villa Plots</li>
              <li style={{ color: '#F8F9FA', opacity: 0.8, marginBottom: '0.5rem' }}>Farmland Investments</li>
              <li style={{ color: '#F8F9FA', opacity: 0.8, marginBottom: '0.5rem' }}>DTCP Approved Layouts</li>
              <li style={{ color: '#F8F9FA', opacity: 0.8, marginBottom: '0.5rem' }}>Property Documentation</li>
              <li style={{ color: '#F8F9FA', opacity: 0.8, marginBottom: '0.5rem' }}>Customer Support</li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h4 className="footer-heading">Reach Us</h4>
            
            <div className="footer-contact-item">
              <Phone size={20} className="footer-contact-icon" />
              <span>+91 9514949342</span>
            </div>
            
            <div className="footer-contact-item">
              <Mail size={20} className="footer-contact-icon" />
              <span>merglowwestatesofficial@gmail.com</span>
            </div>
            
            <div className="footer-contact-item">
              <MapPin size={24} className="footer-contact-icon" />
              <span>No.1/1, W BLOCK, GROUND FLOOR, IMAYAM COLONY, ANNA NAGAR WEST EXTENSION, CHENNAI - 600101.</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Mergloww Estates Private Limited. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
