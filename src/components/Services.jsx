import React from 'react';
import './About.css';
import './Services.css';
import Reveal from './Reveal';
import SpiralTimeline from './SpiralTimeline';

export default function Services() {
  return (
    <section id="services" className="section" style={{ 
      backgroundColor: '#071f11',
      backgroundImage: 'radial-gradient(circle at center, #184725 0%, #0a2914 60%, #041208 100%)',
      color: '#ffffff', 
      minHeight: '80vh', 
      padding: '40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Reveal type="fade">
            <h2 className="glowing-title dim-to-bright" style={{ marginBottom: '1.5rem' }}>
              OUR PROJECTS
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.15}>
            <p className="dim-to-bright" style={{ color: '#ffffff', fontSize: '1.2rem', letterSpacing: '0.05em', opacity: 0.9 }}>
              Explore Our Premium Projects
            </p>
          </Reveal>
        </div>

        <SpiralTimeline />

      </div>
    </section>
  );
}
