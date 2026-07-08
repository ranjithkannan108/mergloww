import React from 'react';
import './About.css';
import Reveal from './Reveal';
import aboutFamily from '../assets/about-indian-family_converted.webp';
import imgCustomerSatisfaction from '../assets/trust_integrity.png';
import imgLongTermValue from '../assets/long_term_value.png';
import imgTransparency from '../assets/complete_transparency.png';
import imgProfessionalism from '../assets/professional_excellence.png';

export default function About() {
  return (
    <section id="about" className="section section-alt" style={{ 
      padding: '80px 0 80px 0',
      backgroundColor: '#071f11',
      backgroundImage: 'radial-gradient(circle at center, #184725 0%, #0a2914 60%, #041208 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div className="container">
        
        {/* Centered Glowing Title */}
        <Reveal type="fade" display="flex" style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem', width: '100%' }}>
            <h2 className="about-title glowing-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              About Mergloww Estates Private Limited
            </h2>
          </div>
        </Reveal>

        <div className="about-grid">
          
          <div className="about-visuals" style={{ transform: 'scale(0.85)', position: 'relative' }}>
            {/* Decorative Hexagons */}
            <div className="about-hexagon-gold" style={{ top: '-10%', left: '-5%' }}></div>
            <div className="about-hexagon-green" style={{ bottom: '-5%', right: '-10%' }}></div>
            <div className="about-hexagon-gold" style={{ top: '40%', right: '-15%', width: '60px', height: '60px', opacity: 0.5 }}></div>
            
            <Reveal type="slide-left" duration={2.8} style={{ zIndex: 1, position: 'relative' }}>
              <div className="about-image-card">
                <img src={aboutFamily} alt="Happy family showing trust in Mergloww" className="about-image" />
              </div>
            </Reveal>
          </div>

          <div className="about-info" style={{ textAlign: 'justify' }}>
            <Reveal type="fade" duration={2.2}>
              <p className="about-description" style={{ fontSize: '1.25rem', lineHeight: '1.9' }}>
                <strong style={{ color: 'var(--primary)', textShadow: '0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(212, 175, 55, 0.4)' }}>Mergloww Estates Private Limited</strong> is a trusted real estate company specializing in DTCP, RERA, CMDA-approved projects, and premium farmland developments. With a strong commitment to integrity, transparency, and quality, we provide secure investment opportunities that help you grow your wealth with confidence and build a better future.
              </p>
              <p className="about-description-secondary" style={{ fontSize: '1.15rem', lineHeight: '1.9', marginTop: '1.5rem' }}>
                From project planning to registration, our experienced team ensures every customer receives complete guidance with transparency and professionalism.
              </p>
            </Reveal>
          </div>
          
        </div>

        {/* Vision & Mission Section - Static Banners with Sunset & Landscape Backgrounds */}
        <div className="vision-mission-container">
          <Reveal type="slide-right" display="flex" style={{ flex: 1 }}>
            <div 
              className="accordion-card mission-bg" 
              style={{ backgroundImage: `url(${imgProfessionalism})` }}
            >
              <div className="accordion-overlay"></div>
              <div className="card-content-reveal">
                <h3>Our Mission</h3>
                <p>
                  To provide trusted DTCP, RERA, CMDA-approved and premium farmland investment opportunities through transparency, integrity, and quality, empowering our customers to build lasting wealth and a secure future.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Static MERGLOWW divider banner (does not move/transition) */}
          <div className="accordion-ribbon-divider">
            <div className="ribbon-banner-double">
              <div className="ribbon-text">
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>G</span>
                <span>L</span>
                <span>O</span>
                <span>W</span>
                <span>W</span>
              </div>
            </div>
          </div>

          <Reveal type="slide-left" display="flex" style={{ flex: 1 }}>
            <div 
              className="accordion-card vision-bg" 
              style={{ backgroundImage: `url(${aboutFamily})` }}
            >
              <div className="accordion-overlay"></div>
              <div className="card-content-reveal">
                <h3>Our Vision</h3>
                <p>
                  To be the trusted partner behind every successful property investment, delivering exceptional value, lasting relationships, and a future built on confidence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>



        {/* Why Choose Mergloww Section */}
        <div style={{ marginTop: '8rem' }}>
          <Reveal type="fade" display="flex" style={{ justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', width: '100%' }}>
              <h2 className="about-title glowing-title" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                WHY CHOOSE MERGLOWW ESTATES?
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Trust & Integrity */}
            <Reveal type="shuffle" delay={0} display="flex">
              <div className="why-choose-card" style={{ background: 'rgba(15, 25, 20, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 229, 0, 0.2)', borderBottom: '4px solid var(--primary)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Trust & Integrity</h4>
                  <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>We uphold the highest standards of honesty, ethics, and transparency, ensuring every investment is built on trust and confidence.</p>
                </div>
                <div className="why-choose-img-wrapper">
                  <img src={imgCustomerSatisfaction} alt="Trust & Integrity" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
                </div>
              </div>
            </Reveal>

            {/* Long-Term Value */}
            <Reveal type="shuffle" delay={0.2} display="flex">
              <div className="why-choose-card" style={{ background: 'rgba(15, 25, 20, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 229, 0, 0.2)', borderBottom: '4px solid var(--primary)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Long-Term Value</h4>
                  <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>We offer strategically selected DTCP, RERA, CMDA-approved projects and premium farmland with excellent growth potential, helping you create lasting wealth and long-term financial security.</p>
                </div>
                <div className="why-choose-img-wrapper">
                  <img src={imgLongTermValue} alt="Long-Term Value" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
                </div>
              </div>
            </Reveal>

            {/* Complete Transparency */}
            <Reveal type="shuffle" delay={0.4} display="flex">
              <div className="why-choose-card" style={{ background: 'rgba(15, 25, 20, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 229, 0, 0.2)', borderBottom: '4px solid var(--primary)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Complete Transparency</h4>
                  <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>From consultation to registration, every step is clear, secure, and fully documented, giving you complete peace of mind.</p>
                </div>
                <div className="why-choose-img-wrapper">
                  <img src={imgTransparency} alt="Complete Transparency" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
                </div>
              </div>
            </Reveal>

            {/* Professional Excellence */}
            <Reveal type="shuffle" delay={0.6} display="flex">
              <div className="why-choose-card" style={{ background: 'rgba(15, 25, 20, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 229, 0, 0.2)', borderBottom: '4px solid var(--primary)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ padding: '2.5rem 2rem 2rem 2rem', flex: 1 }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-serif)', textTransform: 'uppercase' }}>Professional Excellence</h4>
                  <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '0.95rem' }}>Our experienced team is committed to delivering exceptional service, expert guidance, and a seamless property investment experience.</p>
                </div>
                <div className="why-choose-img-wrapper">
                  <img src={imgProfessionalism} alt="Professional Excellence" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
