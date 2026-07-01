import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import Reveal from './Reveal';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -40% 0px' 
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="section section-alt" style={{ 
      borderBottom: '1px solid var(--border-color)', 
      backgroundColor: '#ffffff', 
      color: '#072F1F', 
      padding: '40px 0 100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <h2 className="glowing-title" style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Happy Customers</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <Reveal delay={0}>
            <div className="testimonial-card" style={{ padding: '2.5rem', background: '#072F1F', border: '2px solid var(--primary)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(212,175,55,0.15)', position: 'relative', height: '100%' }}>
              <div style={{ color: 'var(--primary)', fontSize: '3rem', position: 'absolute', top: '1rem', right: '1.5rem', opacity: '0.3', fontFamily: 'serif' }}>"</div>
              <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "Merglooww Estates made our dream of owning a piece of land a reality. The process was incredibly smooth, and their transparency gave us complete peace of mind."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#072F1F', fontWeight: 'bold', fontSize: '1.2rem' }}>S</div>
                <div>
                  <h4 style={{ color: '#ffffff', fontWeight: 'bold', margin: '0' }}>Suresh Kumar</h4>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Business Owner</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="testimonial-card" style={{ padding: '2.5rem', background: '#072F1F', border: '2px solid var(--primary)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(212,175,55,0.15)', position: 'relative', height: '100%' }}>
              <div style={{ color: 'var(--primary)', fontSize: '3rem', position: 'absolute', top: '1rem', right: '1.5rem', opacity: '0.3', fontFamily: 'serif' }}>"</div>
              <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "I highly recommend them! They offered end-to-end support from site visits to registration. A very professional and trustworthy team."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#072F1F', fontWeight: 'bold', fontSize: '1.2rem' }}>P</div>
                <div>
                  <h4 style={{ color: '#ffffff', fontWeight: 'bold', margin: '0' }}>Priya Sharma</h4>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>IT Professional</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="testimonial-card" style={{ padding: '2.5rem', background: '#072F1F', border: '2px solid var(--primary)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(212,175,55,0.15)', position: 'relative', height: '100%' }}>
              <div style={{ color: 'var(--primary)', fontSize: '3rem', position: 'absolute', top: '1rem', right: '1.5rem', opacity: '0.3', fontFamily: 'serif' }}>"</div>
              <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "The strategic locations they offer are unmatched. I've already seen great appreciation on the plot I purchased. Excellent investment!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#072F1F', fontWeight: 'bold', fontSize: '1.2rem' }}>R</div>
                <div>
                  <h4 style={{ color: '#ffffff', fontWeight: 'bold', margin: '0' }}>Ramesh Natarajan</h4>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Investor</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
