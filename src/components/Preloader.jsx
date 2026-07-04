import React from 'react';
import './Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-logo">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="preloader-svg">
            <path d="M15 75 L35 35 L50 55 L65 35 L85 75" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 75 L35 55 L50 75 L65 55 L75 75" stroke="#f3e5ab" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        </div>
        <h1 className="preloader-brand">MERGLOWW</h1>
        <h2 className="preloader-subtitle">ESTATES PRIVATE LIMITED</h2>
        
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
