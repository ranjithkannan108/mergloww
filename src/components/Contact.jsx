import React, { useState } from 'react';
import Reveal from './Reveal';
import contactImg from '../assets/about-indian-family_converted.webp';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', query: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Header */}
        <Reveal type="fade" display="flex" style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 className="about-title glowing-title" style={{ fontSize: '1.25rem' }}>
              START YOUR JOURNEY WITH US.
            </h2>
          </div>
        </Reveal>

        {/* Contact Content Grid */}
        <div className="contact-grid">

          {/* Left Side: Image Card + Description */}
          <Reveal type="slide-right" duration={1.5}>
            <div className="contact-left-panel">
              <div className="contact-image-card" style={{ backgroundImage: `url(${contactImg})` }}>
                <div className="contact-image-overlay"></div>
                <div className="contact-image-content">
                  <div className="thank-you-sign">
                    <span className="sign-title">MERGLOWW ESTATES PRIVATE LIMITED</span>
                    <span className="sign-text">Thank You for Visiting</span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="contact-logo-box" style={{ marginTop: '2rem' }}>
                <p className="contact-desc-text">
                  <span className="company-gold">Mergloww Estates Private Limited</span>, trust drives every interaction. As Chennai’s leading real estate company, we offer DTCP, RERA, and CMDA‑approved plots and premium farmland projects, with expert guidance and transparent service for secure investments and site visits.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Contact Form */}
          <Reveal type="slide-left" duration={1.5}>
            <div className="contact-right-panel">
              <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email ID" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="query" 
                      placeholder="Your Query" 
                      rows="5" 
                      value={formData.query}
                      onChange={handleChange}
                      required 
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
