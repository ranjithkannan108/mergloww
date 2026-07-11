import React from 'react';
import logoImg from '../assets/LOGO PNG.png';
import './Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-logo">
          <img src={logoImg} alt="Merglooww Logo" className="preloader-svg" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
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
