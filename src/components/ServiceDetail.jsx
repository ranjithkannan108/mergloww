import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/serviceData';
import Reveal from './Reveal';
import './ServiceDetail.css';

import img24x7Security from '../assets/24x7 security.png';
import img30FeetRoad from '../assets/30 Feet road.png';
import imgCompoundWall from '../assets/Compound wall with gated community.png';
import imgSolarStreetLight from '../assets/Solar street light.png';
import imgAvenueTrees from '../assets/avenue trees.png';
import imgPlayArea from '../assets/play area.png';
import imgResidentialSurroundings from '../assets/residential surroundings.png';
import imgWaterFacility from '../assets/water facility.png';
const ScrambleText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = Date.now();
    const duration = 1200 + Math.random() * 800; // 1.2 to 2.0 seconds
    const chars = "0123456789";
    let interval = null;

    const scramble = () => {
      const now = Date.now();
      if (now - startTime >= duration) {
        setDisplay(text);
        clearInterval(interval);
        return;
      }
      
      const scrambled = text.split('').map(char => {
        // Scramble only digits to keep formatting intact
        if (/[0-9]/.test(char)) {
          return chars[Math.floor(Math.random() * chars.length)];
        }
        return char;
      }).join('');
      
      setDisplay(scrambled);
    };

    interval = setInterval(scramble, 50);
    return () => clearInterval(interval);
  }, [isVisible, text]);

  return <span ref={ref}>{display}</span>;
};

const LogoDivider = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 15px' }}>
    <path d="M15 75 L35 35 L50 55 L65 35 L85 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 75 L35 55 L50 75 L65 55 L75 75" stroke="#f3e5ab" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
  </svg>
);

export default function ServiceDetail() {
  const { serviceId } = useParams();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = servicesData[serviceId];

  // If service ID is not found, redirect to services page
  if (!service) {
    return <Navigate to="/#services" replace />;
  }

  return (
    <div className="service-detail-container fade-in">
      {/* Hero Image Section */}
      <div 
        className="service-hero-banner"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="service-hero-overlay"></div>
        <h1 className="service-hero-title">{service.title}</h1>
      </div>

      <div className="service-content-wrapper">
        {/* Scrolling Tags Text */}
        <div className="service-detail-marquee-wrapper">
          <div className="service-detail-marquee-container">
            <div className="service-detail-marquee-content">
              <span>
                <LogoDivider />
                {service.tags.join(' ')}
                <LogoDivider />
                Premium Real Estate 
                <LogoDivider />
                Trusted Investment 
                <LogoDivider />
                {service.title} 
              </span>
              <span>
                <LogoDivider />
                {service.tags.join(' ')}
                <LogoDivider />
                Premium Real Estate 
                <LogoDivider />
                Trusted Investment 
                <LogoDivider />
                {service.title} 
              </span>
            </div>
          </div>
        </div>

        {service.heading ? (
          <>
            <div className="service-block">
              <h3 style={{ textAlign: 'center' }}>{service.heading}</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left', padding: '0 1rem', marginTop: '1.5rem', textIndent: '3rem' }}>{service.description}</p>
            </div>
            
            <div className="service-block" style={{ width: '100%', marginTop: '3rem', marginBottom: '6rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '4rem', color: '#D4AF37', fontSize: '2rem' }}>Project Highlights</h3>
              <div className="highlights-grid">
                {service.highlights.map((item, idx) => {

                  // Get the relevant background image based on the text
                  const getHighlightImage = (text) => {
                    const lower = text.toLowerCase();
                    if (lower.includes('water')) return imgWaterFacility;
                    if (lower.includes('solar') || lower.includes('light')) return imgSolarStreetLight;
                    if (lower.includes('securit')) return img24x7Security;
                    if (lower.includes('wall') || lower.includes('gated')) return imgCompoundWall;
                    if (lower.includes('tree') || lower.includes('avenue')) return imgAvenueTrees;
                    if (lower.includes('road')) return img30FeetRoad;
                    if (lower.includes('play') || lower.includes('park')) return imgPlayArea;
                    if (lower.includes('resident')) return imgResidentialSurroundings;
                    return null;
                  };

                  const bgImage = getHighlightImage(item);

                  return (
                    <Reveal 
                      key={idx} 
                      type="shuffle" 
                      delay={idx * 0.1} 
                      display="inline-flex"
                    >
                      <div className="highlight-wrapper">
                        <div className="highlight-arch-card bg-highlight-card">
                          <div 
                            className="bg-image-layer"
                            style={{ 
                              backgroundImage: bgImage ? `url("${bgImage}")` : 'none',
                            }}
                          ></div>
                          <div className="bg-highlight-overlay"></div>
                          
                          <div className="highlight-crown">
                            <svg viewBox="0 0 60 40" className="crown-svg">
                              <path d="M5 40 L0 5 L20 20 L30 0 L40 20 L60 5 L55 40 Z" fill="#d4af37" />
                            </svg>
                            <div className="highlight-number">
                              {(idx + 1).toString().padStart(2, '0')}
                            </div>
                          </div>
                        </div>

                        <div className="highlight-title">{item}</div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div className="service-block" style={{ width: '100%', marginBottom: '4rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#D4AF37', fontSize: '2rem' }}>Nearby Landmarks</h3>
              <div className="landmarks-grid">
                {service.landmarks.map((item, idx) => {
                  const getLandmarkIcon = (text) => {
                    const lower = text.toLowerCase();
                    if (lower.includes('railway') || lower.includes('train')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2" ry="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="m8 19-2 3"></path><path d="m18 22-2-3"></path><path d="M8 15h0"></path><path d="M16 15h0"></path></svg>;
                    if (lower.includes('bus')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle></svg>;
                    if (lower.includes('school') || lower.includes('college') || lower.includes('education')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>;
                    if (lower.includes('hospital') || lower.includes('health')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>;
                    if (lower.includes('it ') || lower.includes('industr')) return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
                    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
                  };

                  return (
                    <Reveal 
                      key={idx} 
                      type="shuffle" 
                      delay={idx * 0.1} 
                      display="inline-flex"
                    >
                      <div className="landmark-item">
                        <div className="landmark-card-shape">
                          <div className="landmark-title">{item}</div>
                        </div>
                        <div className="landmark-icon-wrapper">
                          {getLandmarkIcon(item)}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div className="service-block block-highlight" style={{ width: '100%', marginBottom: '1rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#D4AF37', fontSize: '2rem' }}>Project Details</h3>
              <div className="project-details-grid">
                {service.details.map((item, idx) => (
                  <div key={idx} className="project-detail-card">
                    <div className="detail-label">{item.label}</div>
                    <div className="detail-value"><ScrambleText text={item.value} /></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Content Block 1: We have this service */}
            <div className="service-block">
              <h3>Overview</h3>
              <p>{service.weHaveThisService}</p>
            </div>

            {/* Content Block 2: Explain about service */}
            <div className="service-block">
              <h3>Service Details</h3>
              <p>{service.explainAboutService}</p>
            </div>

            {/* Content Block 3: Why we use Mergloww */}
            <div className="service-block block-highlight">
              <h3>Why Choose Mergloww?</h3>
              <p>{service.whyUseMergloww}</p>
            </div>
          </>
        )}

        <div className="service-cta-card">
          <p>Get in touch with us instantly—we are ready to assist you!</p>
          <Link to="/contact" className="service-cta-btn">
            Book a Site Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
