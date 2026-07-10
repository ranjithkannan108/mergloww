import React, { useEffect, useRef } from 'react';

import heroBg1 from '../assets/Home page 2.webp';
import heroBg2 from '../assets/srv_farmland.webp';
import heroBg3 from '../assets/srv_premium_villa.webp';
import './Home.css';

export default function Home() {
  const containerRef = useRef(null);
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!containerRef.current) {
        ticking = false;
        return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Total scrollable area within the sticky container
      const totalScroll = rect.height - windowHeight;
      let progress = -rect.top / totalScroll;
      
      progress = Math.max(0, Math.min(1, progress));
      
      // Slow, subtle zoom effect for all images
      const scale = 1 + (progress * 0.15);

      // Smooth fade transition optimized for 3 images over 300vh
      // Image 2 fades in smoothly over the first half of the scroll
      let op2 = Math.max(0, Math.min(1, (progress - 0.05) / 0.4));
      
      // Image 3 fades in smoothly over the second half of the scroll
      let op3 = Math.max(0, Math.min(1, (progress - 0.55) / 0.4));

      if (bg1Ref.current) {
        bg1Ref.current.style.transform = `scale(${scale})`;
      }
      if (bg2Ref.current) {
        bg2Ref.current.style.transform = `scale(${scale})`;
        bg2Ref.current.style.opacity = op2;
      }
      if (bg3Ref.current) {
        bg3Ref.current.style.transform = `scale(${scale})`;
        bg3Ref.current.style.opacity = op3;
      }

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
  }, []);

  return (
    <>
    <section 
      id="home" 
      ref={containerRef}
      style={{ 
        height: '130vh',
        width: '100%',
        position: 'relative',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: '#000'
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}>

        {/* Background Images Layer */}
        <div 
          ref={bg1Ref}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${heroBg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform'
          }}
        ></div>
        
        <div 
          ref={bg2Ref}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${heroBg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
            willChange: 'transform, opacity'
          }}
        ></div>

        <div 
          ref={bg3Ref}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${heroBg3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
            willChange: 'transform, opacity'
          }}
        ></div>

        {/* Dark gradient overlay to make the transparent header text clearly visible */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '250px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>

        {/* Subtle overall dark overlay so the entire image isn't overwhelmingly bright */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>

        {/* Green gradient overlay at the bottom specifically for text readability */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(7, 47, 31, 0.95) 0%, rgba(7, 47, 31, 0.7) 40%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>

        {/* Text Content positioned at the bottom - Animated on load */}
        <div
          className="animate-hero-text"
          style={{
            position: 'absolute',
            bottom: 'clamp(5%, 8vh, 12%)',
            left: '0',
            width: '100%',
            padding: '0 5%',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.9)'
          }}
        >
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: 'clamp(10px, 2vh, 20px)', fontWeight: 'bold', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.3em' }}>
            {(() => {
              let charIndex = 0;
              return "A Legacy Built on Trust".split(' ').map((word, wIdx) => (
                <span key={wIdx} style={{ display: 'inline-flex' }}>
                  {word.split('').map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className="reveal-letter"
                      style={{
                        animationDelay: `${(charIndex++) * 0.1}s`
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ));
            })()}
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6', opacity: '0.9' }}>
            Mergloww Estates Private Limited is a trusted real estate company specializing in DTCP, RERA, CMDA-approved projects, and premium farmland developments. With a strong commitment to integrity, transparency, and quality, we provide secure investment opportunities that help you grow your wealth with confidence and build a better future.
          </p>
        </div>
      </div>
    </section>
    
    </>
  );
}
