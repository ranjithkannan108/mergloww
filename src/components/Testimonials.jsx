import React from 'react';
import './About.css';
import Reveal from './Reveal';

export default function Testimonials() {
  const testimonials = [
    {
      initial: 'S',
      name: 'Suresh Kumar',
      role: 'Business Owner',
      quote: 'Merglooww Estates made our dream of owning a piece of land a reality. The process was incredibly smooth, and their transparency gave us complete peace of mind.'
    },
    {
      initial: 'P',
      name: 'Priya Sharma',
      role: 'IT Professional',
      quote: 'I highly recommend them! They offered end-to-end support from site visits to registration. A very professional and trustworthy team.'
    },
    {
      initial: 'R',
      name: 'Ramesh Natarajan',
      role: 'Investor',
      quote: "The strategic locations they offer are unmatched. I've already seen great appreciation on the plot I purchased. Excellent investment!"
    },
    {
      initial: 'A',
      name: 'Anjali Devi',
      role: 'Home Owner',
      quote: 'As first-time land buyers, we were very nervous. The team explained everything patiently and guided us through the documentation and registration process.'
    },
    {
      initial: 'K',
      name: 'Karthik Rajan',
      role: 'Software Architect',
      quote: 'Very professional approach. The plots are in high-growth corridors, and the documentation was fully verified and transparent. Exceptional real estate service in Chennai.'
    }
  ];

  return (
    <section id="testimonials" className="section section-alt" style={{ 
      backgroundColor: '#071f11',
      backgroundImage: 'radial-gradient(circle at center, #184725 0%, #0a2914 60%, #041208 100%)',
      color: '#ffffff', 
      padding: '80px 0 80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', padding: '0 1rem' }}>
          <h2 className="glowing-title" style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Happy Customers</h2>
        </div>
        
        <Reveal type="fade" duration={1.2}>
          <div className="testimonial-marquee-wrapper">
            <div className="testimonial-marquee-container">
              <div className="testimonial-marquee-content">
                {/* First Set of Testimonial Cards */}
                {testimonials.map((item, index) => (
                  <div 
                    key={`set1-${index}`} 
                    className="testimonial-card" 
                    style={{ 
                      padding: '2.5rem', 
                      background: '#072F1F', 
                      border: '2px solid var(--primary)', 
                      borderRadius: '12px', 
                      boxShadow: '0 4px 20px rgba(212,175,55,0.15)', 
                      position: 'relative', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between' 
                    }}
                  >
                    <div style={{ color: 'var(--primary)', fontSize: '3rem', position: 'absolute', top: '1rem', right: '1.5rem', opacity: '0.3', fontFamily: 'serif' }}>"</div>
                    <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                      "{item.quote}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#072F1F', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.initial}</div>
                      <div>
                        <h4 style={{ color: '#ffffff', fontWeight: 'bold', margin: '0' }}>{item.name}</h4>
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{item.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Second Set of Testimonial Cards (for seamless infinite loop) */}
                {testimonials.map((item, index) => (
                  <div 
                    key={`set2-${index}`} 
                    className="testimonial-card" 
                    style={{ 
                      padding: '2.5rem', 
                      background: '#072F1F', 
                      border: '2px solid var(--primary)', 
                      borderRadius: '12px', 
                      boxShadow: '0 4px 20px rgba(212,175,55,0.15)', 
                      position: 'relative', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between' 
                    }}
                  >
                    <div style={{ color: 'var(--primary)', fontSize: '3rem', position: 'absolute', top: '1rem', right: '1.5rem', opacity: '0.3', fontFamily: 'serif' }}>"</div>
                    <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                      "{item.quote}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#072F1F', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.initial}</div>
                      <div>
                        <h4 style={{ color: '#ffffff', fontWeight: 'bold', margin: '0' }}>{item.name}</h4>
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{item.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
