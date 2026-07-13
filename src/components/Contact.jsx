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
  const [botCheck, setBotCheck] = useState(''); // Honeypot field
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam Protection: If the hidden honeypot field is filled, silently fake success.
    if (botCheck !== '') {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', query: '' });
      setBotCheck('');
      return;
    }

    setStatus('submitting');
    
    // Using Environment Variable instead of hardcoded URL
    const scriptURL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('query', formData.query);

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      
      // With no-cors, we can't read the response status, so we assume success if it didn't throw a network error.
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', query: '' });
      
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('error');
    }
  };

  const closePopup = () => {
    setStatus('');
  };

  return (
    <section className="contact-template-section" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="contact-template-overlay"></div>
      
      <div className="contact-template-container">
        {/* Header */}
        <Reveal type="fade-up" duration={1}>
          <div className="contact-template-header">
            <span className="contact-thank-you-top">Thank You for Visiting</span>
            <h1>Contact Us</h1>
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
                  {/* Honeypot Field - Invisible to Real Users, Bots will fill it */}
                  <input 
                    type="text" 
                    name="botcheck" 
                    style={{ display: 'none' }} 
                    value={botCheck}
                    onChange={(e) => setBotCheck(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                  />

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
                  <button type="submit" className="template-submit-btn" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Custom Popup Modal */}
      {(status === 'success' || status === 'error') && (
        <div className="custom-popup-overlay">
          <div className="custom-popup-modal">
            <div className={`popup-icon ${status}`}>
              {status === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              )}
            </div>
            <h3>{status === 'success' ? 'Thank You!' : 'Oops!'}</h3>
            <p>
              {status === 'success' 
                ? 'Your message has been sent successfully. We will get back to you shortly.' 
                : 'There was an error submitting the form. Please try again.'}
            </p>
            <button className="popup-close-btn" onClick={closePopup}>
              {status === 'success' ? 'Great' : 'Try Again'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
