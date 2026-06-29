import React from 'react';
import heroBg from '../assets/hero-bg.png';

export default function Home() {
  return (
    <section 
      id="home" 
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        position: 'relative',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      {/* Dark gradient overlay to make the transparent header text clearly visible */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '250px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          zIndex: 1
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
          backgroundColor: 'rgba(0,0,0,0.2)',
          zIndex: 0
        }}
      ></div>

      {/* Intentionally left empty of text as requested */}
    </section>
  );
}
