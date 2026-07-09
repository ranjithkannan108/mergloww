import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Reveal from './Reveal';
import contactBg from '../assets/about-indian-family_converted.webp'; 
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '' 
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', query: '' });
  };

  return (
    <section className="contact-template-section" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="contact-template-overlay"></div>
      
      <div className="contact-template-container">
        {/* Header */}
        <Reveal type="fade-up" duration={1}>
          <div className="contact-template-header">
            <span className="contact-thank-you-top">Thank You for Visiting</span>
            <h2>Contact Us</h2>
            <p>
              Mergloww Estates Private Limited is your trusted partner for all your premium real estate and land investment needs. Let us guide you to your perfect property.
            </p>
          </div>
        </Reveal>

        <div className="contact-template-grid">
          {/* Left Column: Info */}
          <div className="contact-template-info-wrapper">
            <Reveal type="fade-up" duration={1}>
              <div className="contact-info-card">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} color="#d4af37" strokeWidth={2.5} />
                </div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>No.1/1, W BLOCK, GROUND FLOOR, IMAYAM COLONY, ANNA NAGAR WEST EXTENSION, CHENNAI - 600101.</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} color="#d4af37" strokeWidth={2.5} />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+91 9514949342</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} color="#d4af37" strokeWidth={2.5} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>merglowwestatesofficial@gmail.com</p>
                </div>
              </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="contact-template-form-wrapper">
            <Reveal type="slide-left" delay={0.4}>
              <div className="contact-template-card">
                <form onSubmit={handleSubmit} className="template-form">
                  <div className="template-form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="template-form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="template-form-group">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="template-form-group">
                    <textarea 
                      name="query" 
                      placeholder="Type your message..." 
                      rows="2" 
                      value={formData.query}
                      onChange={handleChange}
                      required 
                    ></textarea>
                  </div>
                  <button type="submit" className="template-submit-btn">Send Message</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
