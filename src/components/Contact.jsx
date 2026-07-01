import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';
import contactImg from '../assets/about-indian-family.png';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Get in Touch Badge Header */}
        <Reveal type="fade">
          <div className="contact-header">
            <span className="contact-badge">GET IN TOUCH</span>
            <p className="contact-subtitle">
              Whether you're looking for premium land investments or just want to ask a question, we're here for it.
            </p>
          </div>
        </Reveal>

        {/* Contact Content Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Side: Visual Card with Rounded Corners */}
          <Reveal type="slide-right" duration={1.5} display="flex">
            <div className="contact-image-card" style={{ backgroundImage: `url(${contactImg})` }}>
              <div className="contact-image-overlay"></div>
              <div className="contact-image-content">
                <div className="thank-you-sign">
                  <span className="sign-title">Mergloww</span>
                  <span className="sign-text">Thank You for Visiting</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Four Information Cards */}
          <div className="contact-cards-grid">
            
            {/* Card 1: Opening Hours */}
            <Reveal type="pop-up" delay={0}>
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <Clock size={24} className="contact-icon" />
                </div>
                <h4>Opening Hours</h4>
                <p className="info-main">Monday - Saturday</p>
                <p className="info-sub">9:00 AM - 6:00 PM</p>
              </div>
            </Reveal>

            {/* Card 2: Visit Us */}
            <Reveal type="pop-up" delay={0.15}>
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} className="contact-icon" />
                </div>
                <h4>Visit Us</h4>
                <p className="info-main">No. 45, Prime Tower,</p>
                <p className="info-sub">Chennai - 600001</p>
              </div>
            </Reveal>

            {/* Card 3: Talk to Us */}
            <Reveal type="pop-up" delay={0.3}>
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <Phone size={24} className="contact-icon" />
                </div>
                <h4>Talk to Us</h4>
                <p className="info-main">+91 98765 43210</p>
                <p className="info-sub">support@merglowwestates.com</p>
              </div>
            </Reveal>

            {/* Card 4: Follow Us */}
            <Reveal type="pop-up" delay={0.45}>
              <div className="contact-info-card dark-card">
                <h4>Follow the Legacy</h4>
                <p className="dark-card-desc">Stay updated with our latest project launches and land investment options.</p>
                <div className="social-links-row">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span>Instagram</span>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
