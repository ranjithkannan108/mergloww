import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Sprout, FileCheck, ShieldCheck, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import './Services.css';
import Reveal from './Reveal';
import SpiralTimeline from './SpiralTimeline';

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
