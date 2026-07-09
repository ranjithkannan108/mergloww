import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { servicesData } from '../data/serviceData';
import Reveal from './Reveal';
import './ServiceDetail.css';

import img24x7Security from '../assets/24x7 security.png';
import img30FeetRoad from '../assets/30 Feet road.png';
import imgCompoundWall from '../assets/Compound wall with gated community.png';
import imgSolarStreetLight from '../assets/Solar street light.png';
import bannerSudiksha from '../assets/Banner Image Sudiksha garden.webp';
import bannerSpNagar from '../assets/Banner Image SP Nagar.webp';
import railwayLandmark from '../assets/railway_landmark.png';
import busLandmark from '../assets/bus_landmark.png';
import schoolLandmark from '../assets/school_landmark.png';
import hospitalLandmark from '../assets/hospital_landmark.png';
import itLandmark from '../assets/it_landmark.png';
import locationLandmark from '../assets/location_landmark.png';
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
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <h1 className="service-hero-title" style={{ marginBottom: '10px' }}>{service.title}</h1>
          <p style={{ color: 'var(--primary)', fontSize: '1.25rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            <MapPin size={20} style={{ display: 'inline-block', verticalAlign: 'text-bottom', marginRight: '8px' }} />
            {service.tags[service.tags.length - 1]}
          </p>
        </div>
      </div>

      <div className="service-content-wrapper">

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
                  const getLandmarkImage = (text) => {
                    const lower = text.toLowerCase();
                    if (lower.includes('railway') || lower.includes('train')) return railwayLandmark;
                    if (lower.includes('bus')) return busLandmark;
                    if (lower.includes('school') || lower.includes('college') || lower.includes('education')) return schoolLandmark;
                    if (lower.includes('hospital') || lower.includes('health')) return hospitalLandmark;
                    if (lower.includes('it ') || lower.includes('industr') || lower.includes('compan')) return itLandmark;
                    return locationLandmark;
                  };

                  return (
                    <Reveal 
                      key={idx} 
                      type="shuffle" 
                      delay={idx * 0.1} 
                      display="inline-flex"
                    >
                      <div className="landmark-item" style={{ overflow: 'hidden' }}>
                        <div className="landmark-card-shape" style={{ 
                          backgroundImage: `linear-gradient(rgba(4, 18, 8, 0.7), rgba(4, 18, 8, 0.85)), url(${getLandmarkImage(item)})`, 
                          backgroundSize: 'cover', 
                          backgroundPosition: 'center',
                          border: '1px solid rgba(212, 175, 55, 0.4)'
                        }}>
                          <div className="landmark-title" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)', zIndex: 2, position: 'relative' }}>{item}</div>
                        </div>
                        <div className="landmark-icon-wrapper" style={{ overflow: 'hidden' }}>
                          <img src={getLandmarkImage(item)} alt="landmark" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
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
