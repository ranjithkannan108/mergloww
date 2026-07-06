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

export default function SpiralTimeline({ items }) {
  const navigate = useNavigate();

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
    },
    { 
      id: 'heavanya-garden',
      title: "Heavanya Garden", 
      location: "(Minjur, Tiruvallur)",
      approval: "DTCP & RERA APPROVED",
      sizes: "700Sq.Ft Onwards",
      price: "₹1,750/Sq.Ft Onwards",
      image: imgHeavanya
    }
  ];

  return (
    <div className="spiral-section">
      <div className="spiral-container">
        <div className="spiral-items-wrapper">
          <div className="timeline-road"></div>
          {cards.map((card, index) => (
            <div key={index} className={`spiral-item ${index % 2 === 0 ? 'align-left' : 'align-right'}`}>
              <div className="timeline-center-wrapper">
                <Reveal type="pop-up" delay={0.15} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="timeline-center-icon">
                    <GoldenLocationIcon />
                  </div>
                  {card.location && (
                    <div className="timeline-center-location">
                      {card.location.replace(/[()]/g, '')}
                    </div>
                  )}
                </Reveal>
              </div>
              <Reveal 
                type="pop-up" 
                delay={0.1}
              >
                <div 
                  className={`spiral-card ${index % 2 !== 0 ? 'reverse' : ''}`}
                  onClick={() => card.id && navigate(`/projects/${card.id}`)}
                  style={{ cursor: card.id ? 'pointer' : 'default' }}
                >
                  {card.image && (
                    <div className="spiral-card-image" style={{ position: 'relative', flex: '0 0 160px', height: '210px', borderRadius: '12px', overflow: 'hidden' }}>
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
                  <div className="spiral-card-content" style={{ flex: '1', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
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
    </div>
  );
}


