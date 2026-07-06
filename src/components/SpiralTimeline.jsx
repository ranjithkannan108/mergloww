import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpiralTimeline.css';
import imgSriSakthi from '../assets/sri-sakthi-garden_converted.webp';
import imgSudiksha from '../assets/sudiksha-garden_converted.webp';
import imgSpNagar from '../assets/sp-nagar_converted.webp';

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
    }
  ];

  return (
    <div className="overlap-projects-wrapper">
      {cards.map((card, index) => (
        <div key={index} className="overlap-project-section" style={{ zIndex: index + 1 }}>
          <div 
            className="overlap-project-bg" 
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="overlap-project-overlay"></div>
          </div>
          
          <div className="project-number-indicator">
            <div className="project-number-circle">{(index + 1).toString().padStart(2, '0')}</div>
            <div className="project-number-text">PROJECT</div>
          </div>

          <div className="overlap-project-content-card">
            <h3>{card.title}</h3>
            {card.location && (
              <h4 className="project-location">{card.location}</h4>
            )}
            {card.approval && (
              <div className="project-approval">{card.approval}</div>
            )}
            
            <div className="project-details">
              {card.sizes && (
                <p><strong>Plot Sizes:</strong> {card.sizes}</p>
              )}
              {card.price && (
                <p><strong>Price:</strong> {card.price}</p>
              )}
              {card.description && <p>{card.description}</p>}
            </div>
            
            {card.id && (
              <button 
                className="attractive-btn overlap-btn"
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
      ))}
    </div>
  );
}


