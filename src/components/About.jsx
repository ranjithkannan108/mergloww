import React from 'react';
import { Home, Handshake, TrendingUp, HeartHandshake, SearchCheck } from 'lucide-react';
import './About.css';
import aboutFamily from '../assets/about-indian-family.png';
import imgCustomerSatisfaction from '../assets/why-customer-satisfaction.png';
import imgLongTermValue from '../assets/why-long-term-value.png';
import imgTransparency from '../assets/why-transparency.png';
import imgProfessionalism from '../assets/why-professionalism.png';

export default function About() {
  return (
    <section id="about" className="section section-alt" style={{ 
      borderBottom: '1px solid var(--border-color)', 
      padding: '50px 0 40px 0',
      backgroundColor: '#ffffff',
      color: '#072F1F'
    }}>
      <div className="container">
        
        {/* Centered Glowing Title */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <h2 className="about-title glowing-title">
            About Mergloww Estates
          </h2>
        </div>

        <div className="about-grid">
          
          <div className="about-visuals" style={{ transform: 'scale(0.85)', marginTop: '-2rem' }}>
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
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.05)', borderTop: '4px solid var(--primary)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#164228' }}>
              To become the most trusted and preferred real estate partner in Tamil Nadu by continually exceeding customer expectations and redefining the standards of land investments.
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.05)', borderTop: '4px solid var(--primary)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#164228' }}>
              To deliver legally verified, strategically located properties while maintaining the highest standards of integrity, customer satisfaction, and long-term value.
            </p>
          </div>
          
        </div>

        {/* Our Expertise Section */}
        <div style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#072F1F', fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Expertise
            </h2>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', flexWrap: 'wrap' }}>
            
            {/* Buying */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '75px', height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid var(--primary)', borderRadius: '50%', boxShadow: '0 0 25px rgba(212,175,55,0.5)', background: '#ffffff' }}>
                <Home size={34} color="#072F1F" strokeWidth={2} />
              </div>
              <span style={{ color: '#000000', fontWeight: 'bold', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Buying</span>
            </div>

            {/* Selling */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '75px', height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid var(--primary)', borderRadius: '50%', boxShadow: '0 0 25px rgba(212,175,55,0.5)', background: '#ffffff' }}>
                <Handshake size={34} color="#072F1F" strokeWidth={2} />
              </div>
              <span style={{ color: '#000000', fontWeight: 'bold', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Selling</span>
            </div>

            {/* Investing */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '75px', height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid var(--primary)', borderRadius: '50%', boxShadow: '0 0 25px rgba(212,175,55,0.5)', background: '#ffffff' }}>
                <TrendingUp size={34} color="#072F1F" strokeWidth={2} />
              </div>
              <span style={{ color: '#000000', fontWeight: 'bold', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Investing</span>
            </div>

          </div>
        </div>

        {/* Why Choose Mergloww Section */}
        <div style={{ marginTop: '6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <h2 className="about-title glowing-title">
              Why Choose Mergloww
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Customer Satisfaction */}
            <div style={{ background: '#ffffff', border: '2px solid var(--primary)', borderRadius: '0 60px 0 60px', boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                <h4 style={{ color: '#072F1F', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Customer Satisfaction</h4>
                <p style={{ color: '#164228', lineHeight: '1.6', fontSize: '0.95rem' }}>We prioritize your needs, ensuring a smooth, personalized, and delightful property buying experience from start to finish.</p>
              </div>
              <div style={{ width: '100%', height: '220px' }}>
                <img src={imgCustomerSatisfaction} alt="Customer Satisfaction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Long-term Value */}
            <div style={{ background: '#ffffff', border: '2px solid var(--primary)', borderRadius: '0 60px 0 60px', boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                <h4 style={{ color: '#072F1F', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Long-term Value</h4>
                <p style={{ color: '#164228', lineHeight: '1.6', fontSize: '0.95rem' }}>We handpick strategically located properties poised for exceptional appreciation, securing your financial future.</p>
              </div>
              <div style={{ width: '100%', height: '220px' }}>
                <img src={imgLongTermValue} alt="Long-term Value" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Transparency */}
            <div style={{ background: '#ffffff', border: '2px solid var(--primary)', borderRadius: '0 60px 0 60px', boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                <h4 style={{ color: '#072F1F', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Transparency</h4>
                <p style={{ color: '#164228', lineHeight: '1.6', fontSize: '0.95rem' }}>We believe in open communication and complete honesty, ensuring you are fully informed at every step of your investment.</p>
              </div>
              <div style={{ width: '100%', height: '220px' }}>
                <img src={imgTransparency} alt="Transparency" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Professionalism */}
            <div style={{ background: '#ffffff', border: '2px solid var(--primary)', borderRadius: '0 60px 0 60px', boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                <h4 style={{ color: '#072F1F', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Professionalism</h4>
                <p style={{ color: '#164228', lineHeight: '1.6', fontSize: '0.95rem' }}>Our dedicated team of experts provides top-tier guidance, legal support, and hassle-free registration processes.</p>
              </div>
              <div style={{ width: '100%', height: '220px' }}>
                <img src={imgProfessionalism} alt="Professionalism" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
