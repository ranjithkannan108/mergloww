import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import './SpiralTimeline.css';
import imgSriSakthi from '../assets/projects/sri-sakthi-garden.png';
import imgSudiksha from '../assets/projects/sudiksha-garden.png';
import imgSpNagar from '../assets/projects/sp-nagar.png';
import imgHeavanya from '../assets/projects/heavanya-garden.png';

export default function SpiralTimeline({ items }) {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const navigate = useNavigate();

  // Real project data
  const cards = items || [
    { 
      id: 'sri-sakthi-garden',
      title: "1. Sri Sakthi Garden", 
      location: "(Guduvanchery, Chennai)",
      approval: "DTCP & RERA APPROVED",
      sizes: "800Sq.Ft Onwards",
      price: "₹5,100/Sq.Ft Onwards",
      image: imgSriSakthi
    },
    { 
      id: 'sudiksha-garden',
      title: "2. Sudiksha Garden", 
      location: "(Maduranthakam, Chengalpattu)",
      approval: "DTCP APPROVED",
      sizes: "600Sq.Ft Onwards",
      price: "₹1,600/Sq.Ft Onwards",
      image: imgSudiksha
    },
    { 
      id: 'sp-nagar',
      title: "3. SP Nagar", 
      location: "(Walajabad, Chengalpattu)",
      approval: "DTCP & RERA APPROVED",
      sizes: "500Sq.Ft Onwards",
      price: "₹1,600/Sq.Ft Onwards",
      image: imgSpNagar
    },
    { 
      id: 'heavanya-garden',
      title: "4. Heavanya Garden", 
      location: "(Minjur, Tiruvallur)",
      approval: "DTCP & RERA APPROVED",
      sizes: "700Sq.Ft Onwards",
      price: "₹1,750/Sq.Ft Onwards",
      image: imgHeavanya
    }
  ];

  const [drawProgress, setDrawProgress] = useState(0);
  const pathRef = useRef(null);
  const [spiralSpark, setSpiralSpark] = useState({ x: 500, y: -200 });

  useEffect(() => {
    if (containerRef.current) {
      // 150px lead-in at the top, 150px lead-out at the bottom
      setHeight(cards.length * 500 + 150 + 150);
    }
  }, [cards.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const start = window.innerHeight;
      const end = window.innerHeight - height;
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);
      setDrawProgress(progress);
      
      if (pathRef.current) {
        try {
          const pt = pathRef.current.getPointAtLength(pathRef.current.getTotalLength() * progress);
          setSpiralSpark({ x: pt.x, y: pt.y });
        } catch(e) {}
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [height]);

  // Generate a smooth continuous sine wave with an initial lead-in
  const generateSineWavePath = () => {
    // Start with a curve coming from the top left, crossing at Y=150
    let path = `M 500 -200 C 250 -112.5, 250 62.5, 500 150 `;
    
    for (let i = 0; i < cards.length; i++) {
      const startY = i * 500 + 150;
      const endY = (i + 1) * 500 + 150;
      const cp1Y = startY + 125;
      const cp2Y = endY - 125;
      
      if (i % 2 === 0) {
        // Curve to the right
        path += `C 750 ${cp1Y}, 750 ${cp2Y}, 500 ${endY} `;
      } else {
        // Curve to the left
        path += `C 250 ${cp1Y}, 250 ${cp2Y}, 500 ${endY} `;
      }
    }
    
    // Add a lead-out curve that crosses the center line and fades out
    const lastI = cards.length;
    const finalStartY = lastI * 500 + 150;
    const finalEndY = (lastI + 1) * 500 + 150;
    const finalCp1Y = finalStartY + 125;
    const finalCp2Y = finalEndY - 125;
    
    if (lastI % 2 === 0) {
      path += `C 750 ${finalCp1Y}, 750 ${finalCp2Y}, 500 ${finalEndY} `;
    } else {
      path += `C 250 ${finalCp1Y}, 250 ${finalCp2Y}, 500 ${finalEndY} `;
    }
    
    return path;
  };

  return (
    <div className="spiral-section">
      <div className="spiral-container" ref={containerRef}>
        
        {/* SVG Curve Background */}
        <div className="spiral-svg-wrapper" style={{ height: `${height}px` }}>
          <svg viewBox={`0 -20 1000 ${height + 20}`} width="100%" height="100%" preserveAspectRatio="none" className="spiral-svg">
            
            {/* Origin Node / Star */}
            <g transform="translate(500, 0)">
              <circle cx="0" cy="0" r="8" fill="#D4AF37" style={{ filter: 'drop-shadow(0 0 15px #FFE500)' }} />
              <circle cx="0" cy="0" r="4" fill="#FFFDE7" />
              <path d="M 0 -15 L 2 -4 L 15 0 L 2 4 L 0 15 L -2 4 L -15 0 L -2 -4 Z" fill="#D4AF37" opacity="0.6" style={{ filter: 'drop-shadow(0 0 10px #D4AF37)' }} />
            </g>

            {/* Center Straight Line */}
            <line 
              x1="500" y1="0" x2="500" y2={height} 
              stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" 
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={100 - (drawProgress * 100)}
            />
            
            {/* Continuous Sine Wave */}
            <path 
              ref={pathRef}
              d={generateSineWavePath()} 
              fill="none" 
              stroke="rgba(212, 175, 55, 0.5)" 
              strokeWidth="2" 
              className="helix-front" 
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={100 - (drawProgress * 100)}
              style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.5))' }}
            />

            {/* Spark for Straight Line */}
            {drawProgress > 0 && drawProgress < 1 && (
              <circle 
                cx="500" cy={height * drawProgress} r="4" 
                fill="#FFFDE7" 
                style={{ 
                  filter: 'drop-shadow(0 0 8px #D4AF37) drop-shadow(0 0 15px #D4AF37)'
                }} 
              />
            )}
            
            {/* Spark for Spiral Line */}
            {drawProgress > 0 && drawProgress < 1 && (
              <circle 
                cx={spiralSpark.x} cy={spiralSpark.y} r="4" 
                fill="#FFFDE7" 
                style={{ 
                  filter: 'drop-shadow(0 0 8px #D4AF37) drop-shadow(0 0 15px #D4AF37)'
                }} 
              />
            )}
          </svg>
        </div>

        <div className="spiral-items-wrapper">
          {cards.map((card, index) => (
            <div key={index} className={`spiral-item ${index % 2 === 0 ? 'right' : 'left'}`}>
              <Reveal 
                type="pop-up" 
                delay={0.1}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              >
                <div 
                  className="spiral-card" 
                  onClick={() => card.id && navigate(`/projects/${card.id}`)}
                  style={{ cursor: card.id ? 'pointer' : 'default' }}
                >
                  {card.image && (
                    <div style={{ position: 'relative', width: 'calc(100% + 48px)', height: '160px', marginLeft: '-24px', marginTop: '-24px', marginBottom: '1rem', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        style={{ 
                          width: '100%',
                          height: '100%', 
                          objectFit: 'cover'
                        }} 
                      />
                      {/* Gradient overlay to add opacity at the bottom of the image */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(15, 25, 20, 0.95) 0%, transparent 100%)'
                      }}></div>
                    </div>
                  )}
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
                    <div style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '16px', letterSpacing: '0.5px' }}>
                      {card.approval}
                    </div>
                  )}
                  
                  {card.sizes && (
                    <p style={{ margin: '8px 0', fontSize: '0.9rem' }}>
                      <strong style={{ color: 'white' }}>Plot Sizes:</strong> <br/>{card.sizes}
                    </p>
                  )}
                  {card.price && (
                    <p style={{ margin: '8px 0', fontSize: '0.9rem' }}>
                      <strong style={{ color: 'white' }}>Price:</strong> <br/>{card.price}
                    </p>
                  )}
                  {card.description && <p>{card.description}</p>}
                  
                  {card.id && (
                    <button 
                      className="attractive-btn"
                      style={{ marginTop: '1.2rem', width: '100%', display: 'flex', justifyContent: 'center' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${card.id}`);
                      }}
                    >
                      Learn More <span>→</span>
                    </button>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


