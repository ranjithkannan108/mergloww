import React, { useState, useEffect } from 'react';
import { Home, Sprout } from 'lucide-react';

export default function ScrollTopWidget() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Calculate scroll progress percentage (0 to 100)
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Show widget only after scrolling down 200px
      if (currentScroll > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG parameters for progress circle
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#072F1F',
        border: '2px solid var(--primary)',
        boxShadow: isHovered 
          ? '0 0 25px rgba(212, 175, 55, 0.8), 0 0 10px rgba(7, 47, 31, 0.5)' 
          : '0 8px 20px rgba(0, 0, 0, 0.5)',
        transform: isVisible 
          ? `scale(1) translateY(0) rotate(${scrollProgress * 2.5}deg)` // Rotates as you scroll for a playful rolling effect
          : 'scale(0) translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.3s ease',
      }}
      title="Back to Top"
    >
      {/* Scroll Progress Ring */}
      <svg
        style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          transform: 'rotate(-90deg)',
          width: '60px',
          height: '60px',
        }}
      >
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="rgba(212, 175, 55, 0.15)"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="var(--primary)"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.1s ease',
          }}
        />
      </svg>

      {/* Interactive Land/Home Character Icon inside */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          // Counteract the rolling rotation of the outer container so the home icon stays upright, and apply hover effects
          transform: `rotate(${-scrollProgress * 2.5 + (isHovered ? -10 : 0)}deg) ${isHovered ? 'scale(1.2)' : 'scale(1)'}`,
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Toggle between Home and Sprout icon depending on scroll position for amusement */}
        {scrollProgress > 80 ? (
          <Sprout size={24} style={{ filter: 'drop-shadow(0 0 4px var(--primary))' }} />
        ) : (
          <Home size={24} style={{ filter: 'drop-shadow(0 0 4px var(--primary))' }} />
        )}
      </div>

      {/* Floating Hover Text Tooltip */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            right: '70px',
            backgroundColor: '#072F1F',
            color: 'var(--primary)',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            border: '1px solid var(--primary)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.2s ease',
            pointerEvents: 'none',
          }}
        >
          Back to Top
        </div>
      )}
    </div>
  );
}
