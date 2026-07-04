import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Sprout, FileCheck, ShieldCheck, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import './Services.css';
import Reveal from './Reveal';

export default function Services() {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const navigate = useNavigate();

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

  const services = [
    {
      id: 'premium-residential-plots',
      title: 'Premium Residential Plots',
      description: 'Well-planned residential villa plots in Tamil Nadu located in rapidly developing areas with excellent future appreciation potential.',
      icon: <MapPin size={40} color="#072F1F" />
    },
    {
      id: 'agricultural-farmland',
      title: 'Agricultural & Farmland Investments',
      description: 'Invest in fertile agricultural land and estates designed for long-term real estate growth, passive income, and sustainable living.',
      icon: <Sprout size={40} color="#072F1F" />
    },
    {
      id: 'dtcp-approved-layouts',
      title: 'DTCP Approved Layouts',
      description: 'Government-approved layouts with wide roads, drainage, electricity, and modern infrastructure.',
      icon: <ShieldCheck size={40} color="#072F1F" />
    },
    {
      id: 'property-documentation',
      title: 'Property Documentation',
      description: 'Complete legal verification and hassle-free registration support from our experienced legal team.',
      icon: <FileCheck size={40} color="#072F1F" />
    },
    {
      id: 'real-estate-consulting',
      title: 'Real Estate Consulting',
      description: 'Dedicated real estate agent assistance before, during, and after your commercial or residential property purchase.',
      icon: <Headphones size={40} color="#072F1F" />
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="section" style={{ 
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
            <h2 className="glowing-title" style={{ marginBottom: '0.5rem' }}>
              OUR SERVICES
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.15}>
            <p style={{ color: '#ffffff', fontSize: '1.2rem', letterSpacing: '0.05em', opacity: 0.9 }}>
              We Build Opportunities
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {services.map((service, index) => (
            <Reveal key={index} type="pop-up" delay={index * 0.15} display="flex">
              <div style={{ 
                background: '#ffffff', 
                borderRadius: '16px', 
                padding: '1.2rem', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                borderBottom: '4px solid var(--primary)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'rgba(212, 175, 55, 0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  marginBottom: '0.8rem',
                  border: '2px solid var(--primary)'
                }}>
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <h3 style={{ color: '#072F1F', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#444444', fontSize: '0.85rem', lineHeight: '1.3', flex: 1, marginBottom: '1rem' }}>
                  {service.description}
                </p>
                
                <button 
                  className="attractive-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.id}`);
                  }}
                >
                  Learn More <span>→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
