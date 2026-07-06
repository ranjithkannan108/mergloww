import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import './SpiralTimeline.css';
import imgSriSakthi from '../assets/sri-sakthi-garden_converted.webp';
import imgSudiksha from '../assets/sudiksha-garden_converted.webp';
import imgSpNagar from '../assets/sp-nagar_converted.webp';
import imgHeavanya from '../assets/heavanya-garden_converted.webp';

const GoldenLocationIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="url(#goldGradient)" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 6px 8px rgba(0,0,0,0.6))' }}>
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="25%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#E6C965" />
        <stop offset="75%" stopColor="#AA7C11" />
        <stop offset="100%" stopColor="#8A630B" />
      </linearGradient>
    </defs>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const DecorativeArt = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    right: '8vw', // On the right side
    transform: 'translateY(-50%)',
    width: '22vw',
    maxWidth: '250px',
    opacity: 0.12, 
    zIndex: 0,
    pointerEvents: 'none'
  }}>
    <svg viewBox="0 0 100 100" fill="none" stroke="#d4af37" strokeWidth="0.5">
       <circle cx="50" cy="50" r="45" />
       <circle cx="50" cy="50" r="35" strokeDasharray="2 4" />
       <path d="M50 5 L50 95 M5 50 L95 50" />
       <path d="M18 18 L82 82 M18 82 L82 18" strokeDasharray="1 3" />
       <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="rgba(212, 175, 55, 0.05)" />
    </svg>
  </div>
);

const ProjectWatermark = ({ index }) => {
  const number = (index + 1).toString().padStart(2, '0');
  return (
    <div className="project-watermark">
      <div className="watermark-number">
        {number}
      </div>
      <div className="watermark-text">
        PROJECT
      </div>
    </div>
  );
};

export default function SpiralTimeline({ items }) {
  const navigate = useNavigate();
  const wrapperRef = React.useRef(null);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  // Real project data
  const cards = items || [
    { 
      id: 'sri-sakthi-garden',
      title: "Sri Sakthi Garden", 
      location: "(Guduvanchery, Chennai)",
      approval: "DTCP & RERA APPROVED",
      sizes: "800Sq.Ft Onwards",
      price: "₹5,100/Sq.Ft Onwards",
      image: imgSriSakthi
    },
    { 
      id: 'sudiksha-garden',
      title: "Sudiksha Garden", 
      location: "(Maduranthakam, Chengalpattu)",
      approval: "DTCP APPROVED",
      sizes: "600Sq.Ft Onwards",
      price: "₹1,600/Sq.Ft Onwards",
      image: imgSudiksha
    },
    { 
      id: 'sp-nagar',
      title: "SP Nagar", 
      location: "(Walajabad, Chengalpattu)",
      approval: "DTCP & RERA APPROVED",
      sizes: "500Sq.Ft Onwards",
      price: "₹1,600/Sq.Ft Onwards",
      image: imgSpNagar
    }
  ];

  return (
    <div className="spiral-section">
      <div className="spiral-container">
        <div className="spiral-items-wrapper" ref={wrapperRef}>
          <div className="timeline-horizontal-road" style={{ width: `${cards.length * 100}vw` }}></div>
          {cards.map((card, index) => (
            <div key={index} className="spiral-item">
              <DecorativeArt />
              <ProjectWatermark index={index} />
              <Reveal type="pop-up" delay={0.1 + (index * 0.1)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="timeline-horizontal-marker">
                  <div className="timeline-center-icon">
                    <GoldenLocationIcon />
                  </div>
                  {card.location && (
                    <div className="timeline-center-location">
                      {card.location.replace(/[()]/g, '')}
                    </div>
                  )}
                </div>
                <div 
                  className="spiral-card"
                  onClick={() => card.id && navigate(`/projects/${card.id}`)}
                  style={{ cursor: card.id ? 'pointer' : 'default' }}
                >
                  {card.image && (
                    <div className="spiral-card-image">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        style={{ 
                          width: '100%',
                          height: '100%', 
                          objectFit: 'cover'
                        }} 
                      />
                    </div>
                  )}
                  <div className="spiral-card-content" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    {card.icon && (
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        background: 'rgba(212, 175, 55, 0.1)', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginBottom: '0.8rem',
                        border: '2px solid #D4AF37'
                      }}>
                        {React.cloneElement(card.icon, { size: 24, color: '#D4AF37' })}
                      </div>
                    )}
                    <h3>{card.title}</h3>
                    {card.location && (
                      <h4 style={{ color: '#d1d5db', fontSize: '0.9rem', marginTop: '-8px', marginBottom: '12px', fontWeight: 'normal' }}>
                        {card.location}
                      </h4>
                    )}
                    {card.approval && (
                      <div style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '12px', letterSpacing: '0.5px' }}>
                        {card.approval}
                      </div>
                    )}
                    
                    {card.sizes && (
                      <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
                        <strong style={{ color: 'white' }}>Plot Sizes:</strong> {card.sizes}
                      </p>
                    )}
                    {card.price && (
                      <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
                        <strong style={{ color: 'white' }}>Price:</strong> {card.price}
                      </p>
                    )}
                    {card.description && <p style={{ marginTop: '8px' }}>{card.description}</p>}
                    
                    {card.id && (
                      <button 
                        className="attractive-btn"
                        style={{ marginTop: '1.2rem', width: 'fit-content', padding: '8px 20px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/projects/${card.id}`);
                        }}
                      >
                        Learn More <span>→</span>
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <button 
          onClick={scrollLeft}
          style={{
            background: 'rgba(15, 25, 20, 0.85)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D4AF37',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'; e.currentTarget.style.transform = 'scale(1)'; }}
          aria-label="Previous Project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={scrollRight}
          style={{
            background: 'rgba(15, 25, 20, 0.85)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D4AF37',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'; e.currentTarget.style.transform = 'scale(1)'; }}
          aria-label="Next Project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

    </div>
  );
}


