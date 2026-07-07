import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpiralTimeline.css';
import imgSriSakthi from '../assets/sri-sakthi-garden_converted.webp';
import imgSudiksha from '../assets/sudiksha-garden_converted.webp';
import imgSpNagar from '../assets/sp-nagar_converted.webp';

export default function SpiralTimeline({ items }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

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
      id: 'upcoming',
      title: "Upcoming Project",
      isUpcoming: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Position the spark vertically at the center of the screen
      const sparkPosition = windowHeight / 2;
      
      // Calculate how far down the container the spark is
      const sparkY = sparkPosition - containerRect.top;
      let progress = sparkY / containerRect.height;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
      
      // Determine which item is active (intersecting with the spark)
      let newActiveIndex = -1;
      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        
        // When the top of the card reaches the center of the screen (spark position), it activates.
        // It stays active until the bottom of the card passes the center of the screen.
        if (sparkPosition >= rect.top && sparkPosition <= rect.bottom) {
          newActiveIndex = index;
        }
      });
      
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-line">
        <div 
          className="timeline-line-filled"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>
        <div 
          className="timeline-spark-container"
          style={{ top: `${scrollProgress * 100}%` }}
        >
          <div className="timeline-spark"></div>
        </div>
      </div>
      
      {cards.map((card, index) => {
        const isEven = index % 2 === 0;
        const isActive = activeIndex === index;
        
        return (
          <div 
            key={index} 
            className={`timeline-item ${isEven ? 'left-card' : 'right-card'} ${isActive ? 'glow-active' : ''}`}
            ref={el => itemRefs.current[index] = el}
          >
            
            <div className="timeline-content-wrapper">
              {card.isUpcoming ? (
                <div className="timeline-card upcoming-card">
                  <div className="upcoming-dust"></div>
                  <div className="upcoming-content">
                    <h3>Upcoming Projects</h3>
                    <div className="upcoming-divider">
                      <svg width="240" height="20" viewBox="0 0 240 20" fill="none">
                        <defs>
                          <linearGradient id="lineGradL" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgba(212,175,55,0)"/>
                            <stop offset="100%" stopColor="#D4AF37"/>
                          </linearGradient>
                          <linearGradient id="lineGradR" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#D4AF37"/>
                            <stop offset="100%" stopColor="rgba(212,175,55,0)"/>
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="10" x2="90" y2="10" stroke="url(#lineGradL)" strokeWidth="1.5"/>
                        <line x1="150" y1="10" x2="240" y2="10" stroke="url(#lineGradR)" strokeWidth="1.5"/>
                        
                        <path d="M120 4 Q125 10 130 10 Q125 10 120 16 Q115 10 110 10 Q115 10 120 4 Z" fill="#D4AF37"/>
                        <circle cx="100" cy="10" r="2" fill="#D4AF37"/>
                        <circle cx="140" cy="10" r="2" fill="#D4AF37"/>
                        
                        <path d="M90 10 Q105 10 110 5" stroke="#D4AF37" fill="none"/>
                        <path d="M90 10 Q105 10 110 15" stroke="#D4AF37" fill="none"/>
                        <path d="M150 10 Q135 10 130 5" stroke="#D4AF37" fill="none"/>
                        <path d="M150 10 Q135 10 130 15" stroke="#D4AF37" fill="none"/>
                      </svg>
                    </div>
                    <p className="upcoming-subtitle">The next chapter of excellence</p>
                  </div>
                </div>
              ) : (
                <div className="timeline-card">
                  <div className="timeline-card-image" style={{ backgroundImage: `url(${card.image})` }}></div>
                  <div className="timeline-card-details">
                    <h3>{card.title}</h3>
                    {card.location && <h4 className="project-location">{card.location}</h4>}
                    {card.approval && <div className="project-approval">{card.approval}</div>}
                    
                    <div className="project-specs">
                      {card.sizes && <p><strong>Plot Sizes:</strong> {card.sizes}</p>}
                      {card.price && <p><strong>Price:</strong> {card.price}</p>}
                    </div>
                    
                    <button 
                      className="attractive-btn timeline-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${card.id}`);
                      }}
                    >
                      Learn More <span>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="timeline-center">
              <div className="timeline-circle">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>

            <div className="timeline-title-wrapper">
              {card.location && (
                <div className="timeline-side-location-icon">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              )}
              <h2 className="timeline-side-title">{card.title}</h2>
              {card.location && (
                <div className="timeline-side-location-text">{card.location}</div>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}

