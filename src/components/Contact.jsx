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
        <Reveal type="fade" display="flex" style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', width: '100%' }}>
            <h2 className="about-title glowing-title" style={{ fontSize: '1.25rem' }}>
              START YOUR JOURNEY WITH US.
            </h2>
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

          {/* Right Side: Contact Form */}
          <Reveal type="slide-left" duration={1.5} display="flex">
            <div className="contact-form-container">
              <h3 className="form-title">Send us a message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Query" required className="form-input form-textarea" rows="3"></textarea>
                </div>
                <button type="submit" className="btn-primary glow-btn form-submit-btn">
                  <span>Submit Query</span>
                </button>
              </form>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
