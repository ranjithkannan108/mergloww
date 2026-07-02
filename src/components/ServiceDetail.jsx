import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/serviceData';
import './ServiceDetail.css';

const LogoDivider = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 15px' }}>
    <path d="M15 75 L35 35 L50 55 L65 35 L85 75" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
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

        {/* CTA Card */}
        <div className="service-cta-card">
          <h3>Interested in our services?</h3>
          <p>Get in touch with us instantly—we are ready to assist you!</p>
          <Link to="/#contact" className="service-cta-btn">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
