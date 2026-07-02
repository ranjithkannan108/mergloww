import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg-textless.png';
import './Home.css';

export default function Home() {
  return (
    <>
    <section 
      id="home" 
      style={{ 
        height: '100vh',
        width: '100%',
        position: 'relative',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden'
      }}
    >

      {/* Animated Hero Background Image */}
      <div 
        className="animate-hero-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
      ></div>

      {/* Dark gradient overlay to make the transparent header text clearly visible */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '250px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          zIndex: 1
        }}
      ></div>

      {/* Subtle overall dark overlay so the entire image isn't overwhelmingly bright */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1
        }}
      ></div>

      {/* Green gradient overlay at the bottom specifically for text readability */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(7, 47, 31, 0.95) 0%, rgba(7, 47, 31, 0.6) 50%, transparent 100%)',
          zIndex: 1
        }}
      ></div>

      {/* Text Content positioned at the bottom - Animated */}
      <div
        className="animate-hero-text"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '0',
          width: '100%',
          padding: '0 5%',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          textShadow: '2px 2px 8px rgba(0,0,0,0.9)'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {"A Legacy Built on Trust".split('').map((char, index) => (
            <span
              key={index}
              className="reveal-letter"
              style={{
                animationDelay: `${index * 0.1}s`,
                whiteSpace: char === ' ' ? 'pre' : 'normal'
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9' }}>
          Premium land investments and luxury real estate in Tamil Nadu — secure your future with trusted property opportunities built on transparency, long-term growth, and peace of mind. Every commercial and residential property is more than land; it’s a foundation for prosperity and a legacy that lasts.
        </p>
      </div>
    </section>
    
    {/* Scrolling Services Marquee */}
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <div className="marquee-content">
          <Link to="/services/premium-residential-plots" className="marquee-capsule">Premium Residential Plots</Link>
          <Link to="/services/agricultural-farmland" className="marquee-capsule">Agricultural & Farmland Investments</Link>
          <Link to="/services/dtcp-approved-layouts" className="marquee-capsule">DTCP Approved Layouts</Link>
          <Link to="/services/property-documentation" className="marquee-capsule">Property Documentation</Link>
          <Link to="/services/real-estate-consulting" className="marquee-capsule">Real Estate Consulting</Link>
          
          {/* Duplicated for seamless scrolling */}
          <Link to="/services/premium-residential-plots" className="marquee-capsule">Premium Residential Plots</Link>
          <Link to="/services/agricultural-farmland" className="marquee-capsule">Agricultural & Farmland Investments</Link>
          <Link to="/services/dtcp-approved-layouts" className="marquee-capsule">DTCP Approved Layouts</Link>
          <Link to="/services/property-documentation" className="marquee-capsule">Property Documentation</Link>
          <Link to="/services/real-estate-consulting" className="marquee-capsule">Real Estate Consulting</Link>
        </div>
      </div>
    </div>
    </>
  );
}
