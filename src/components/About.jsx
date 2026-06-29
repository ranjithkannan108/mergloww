import React from 'react';
import './About.css';
import aboutFamily from '../assets/about-family.png';

export default function About() {
  return (
    <section id="about" className="section section-alt" style={{ 
      borderBottom: '1px solid var(--border-color)', 
      padding: '100px 0',
      background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(10, 10, 11, 1) 70%)'
    }}>
      <div className="container">
        
        {/* Centered Glowing Title */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <h2 className="about-title glowing-title">
            About Mergloww Estates
          </h2>
        </div>

        <div className="about-grid">
          
          <div className="about-visuals" style={{ transform: 'scale(0.85)' }}>
            <div className="about-image-card">
              <img src={aboutFamily} alt="Happy family showing trust in Mergloww" className="about-image" />
            </div>
          </div>

          <div className="about-info" style={{ textAlign: 'justify' }}>
            <p className="about-description" style={{ fontSize: '1.25rem', lineHeight: '1.9' }}>
              <strong style={{ color: 'var(--primary)', textShadow: '0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(212, 175, 55, 0.4)' }}>Merglooww Estates Private Limited</strong> is a customer-focused real estate company committed to delivering premium land investments across Tamil Nadu. We believe every property should provide security, appreciation, and peace of mind.
            </p>
            <p className="about-description-secondary" style={{ fontSize: '1.15rem', lineHeight: '1.9', marginTop: '1.5rem' }}>
              From project planning to registration, our experienced team ensures every customer receives complete guidance with transparency and professionalism.
            </p>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(212, 175, 55, 0.05)', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                To deliver legally verified, strategically located properties while maintaining the highest standards of integrity, customer satisfaction, and long-term value.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
