import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

export default function CompanyServices() {
  const containerRef = useRef(null);
  const zoomWrapperRef = useRef(null);
  const outerHexagonsRef = useRef([]);

  const [dim, setDim] = useState({
    radius: 250,
    hexW: 160,
    hexH: 184, // 160 * 1.15
    centerW: 200,
    centerH: 230,
    maxScale: 3.5,
    titleSize: '0.85rem',
    iconSize: '2rem'
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Responsive dimensions
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setDim({
          radius: 130, hexW: 90, hexH: 104, centerW: 110, centerH: 126, 
          maxScale: 2.2, titleSize: '0.55rem', iconSize: '1.2rem'
        });
      } else if (width <= 768) {
        setDim({
          radius: 180, hexW: 120, hexH: 138, centerW: 150, centerH: 172, 
          maxScale: 2.8, titleSize: '0.7rem', iconSize: '1.5rem'
        });
      } else {
        setDim({
          radius: 200, hexW: 150, hexH: 172, centerW: 180, centerH: 207, 
          maxScale: 3.2, titleSize: '0.8rem', iconSize: '1.8rem'
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!containerRef.current || !zoomWrapperRef.current) {
        ticking = false;
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScroll = rect.height - windowHeight;
      let progress = -rect.top / totalScroll;
      
      progress = Math.max(0, Math.min(1, progress));
      
      // Scale goes from maxScale down to 1
      const scaleRange = dim.maxScale - 1;
      const scale = dim.maxScale - (progress * scaleRange);
      
      // Fade in the outer items
      const opacity = progress > 0.05 ? Math.min(1, (progress - 0.05) * 1.5) : 0;

      zoomWrapperRef.current.style.transform = `scale(${scale})`;
      
      outerHexagonsRef.current.forEach(hex => {
        if (hex) {
          hex.style.opacity = opacity;
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dim.maxScale]);

  const servicesList = [
    {
      icon: "🏡",
      title: "DTCP Approved Plots",
      desc: "Secure and legally approved DTCP residential plots in fast-growing locations with excellent appreciation potential.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "🏢",
      title: "CMDA Approved Projects",
      desc: "Premium CMDA-approved residential developments offering long-term value, quality infrastructure, and complete legal compliance.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "📜",
      title: "RERA Registered Projects",
      desc: "Transparent and trustworthy RERA-registered projects that ensure complete buyer protection and peace of mind.",
      img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "🌿",
      title: "Premium Farmland",
      desc: "Own carefully selected farmland investments with high future appreciation and a peaceful natural environment.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "⚖️",
      title: "Legal Documentation Support",
      desc: "Complete assistance with title verification, documentation, registration, and legal formalities for a hassle-free purchase.",
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "💰",
      title: "Property Loan Assistance",
      desc: "Support in obtaining loans through leading financial institutions with simplified processing.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "🏗️",
      title: "End-to-End Customer Support",
      desc: "From property selection to registration and after-sales assistance, we stand with you at every stage of your investment journey.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div style={{ backgroundColor: '#071f11', color: '#fff', minHeight: '100vh' }}>
      
      <div ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
        
        <div style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden',
          background: 'radial-gradient(circle at center, #184725 0%, #0a2914 60%, #041208 100%)'
        }}>
          
          <div 
            ref={zoomWrapperRef}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              maxWidth: '900px',
              maxHeight: '900px',
              transform: `scale(${dim.maxScale})`, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform',
              marginTop: '5vh' // Shift the entire cluster down slightly
            }}
          >
            
            {/* Center Hexagon */}
            <div style={{
              width: `${dim.centerW}px`,
              height: `${dim.centerH}px`,
              background: 'linear-gradient(135deg, #f3e5ab, #d4af37)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              zIndex: 10,
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.6)',
              textAlign: 'center',
              padding: '10px'
            }}>
              <h2 style={{ 
                color: '#071f11', 
                fontSize: dim.iconSize, 
                fontFamily: 'var(--font-serif, serif)', 
                margin: 0, 
                lineHeight: '1.2' 
              }}>
                Our<br/>Services
              </h2>
            </div>

            {/* Surrounding Hexagons */}
            {servicesList.map((srv, idx) => {
              const angle = (idx * 360) / servicesList.length;
              const rad = (angle - 90) * (Math.PI / 180);
              const x = Math.cos(rad) * dim.radius;
              const y = Math.sin(rad) * dim.radius;

              return (
                <div
                  key={idx}
                  ref={el => outerHexagonsRef.current[idx] = el}
                  style={{
                    position: 'absolute',
                    width: `${dim.hexW}px`,
                    height: `${dim.hexH}px`, 
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: 0, 
                    willChange: 'opacity'
                  }}
                >
                  <div 
                    className="hex-beat"
                    style={{
                      width: '100%',
                      height: '100%',
                      background: '#d4af37', /* Golden border background */
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, background 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      const inner = e.currentTarget.querySelector('.hex-inner');
                      if (inner) inner.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4)), url(${srv.img})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#d4af37';
                      e.currentTarget.style.transform = 'scale(1)';
                      const inner = e.currentTarget.querySelector('.hex-inner');
                      if (inner) inner.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${srv.img})`;
                    }}
                    onClick={() => {
                      document.getElementById(`service-detail-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div 
                      className="hex-inner"
                      style={{
                        position: 'absolute',
                        top: '3px',
                        bottom: '3px',
                        left: '3px',
                        right: '3px',
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${srv.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: window.innerWidth <= 480 ? '8px' : '15px',
                        transition: 'background-image 0.3s ease'
                      }}
                    >
                      <h4 style={{ 
                        color: '#fff', 
                        fontSize: dim.titleSize, 
                        margin: 0, 
                        fontFamily: 'var(--font-sans, sans-serif)', 
                        lineHeight: '1.2',
                        wordBreak: 'break-word',
                        textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.8)'
                      }}>
                        {srv.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Details Section */}
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '6rem 1.5rem' }}>
        <Reveal type="fade">
          <h2 style={{ textAlign: 'center', color: '#D4AF37', fontFamily: 'var(--font-serif, serif)', fontSize: '2.5rem', marginBottom: '4rem' }}>
            Explore Our Offerings
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {servicesList.map((srv, idx) => (
            <Reveal key={idx} type={idx % 2 === 0 ? 'slide-right' : 'slide-left'}>
              <div 
                id={`service-detail-${idx}`}
                style={{ 
                  background: 'rgba(15, 25, 20, 0.7)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  flexWrap: window.innerWidth <= 768 ? 'wrap' : 'nowrap'
                }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  minWidth: '120px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid rgba(212, 175, 55, 0.5)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
                }}>
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div>
                  <h3 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-serif, serif)' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#e5e7eb', fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
                    {srv.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
    </div>
  );
}
