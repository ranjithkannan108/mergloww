import React from 'react';
import { ShieldCheck, CheckCircle, Map, FileText } from 'lucide-react';
import Reveal from './Reveal';
import './TrustBanner.css';

const metrics = [
  {
    id: 1,
    title: "100% Clear Title",
    desc: "Guarantee",
    icon: <CheckCircle size={36} color="var(--primary)" />
  },
  {
    id: 2,
    title: "DTCP & RERA",
    desc: "Standard Layouts",
    icon: <ShieldCheck size={36} color="var(--primary)" />
  },
  {
    id: 3,
    title: "Tamil Nadu Wide",
    desc: "High-Growth Locations",
    icon: <Map size={36} color="var(--primary)" />
  },
  {
    id: 4,
    title: "End-to-End Legal",
    desc: "& Registration Support",
    icon: <FileText size={36} color="var(--primary)" />
  }
];

export default function TrustBanner() {
  return (
    <section className="trust-banner-section">
      <div className="container">
        <Reveal type="fade-up">
          <div className="trust-banner-wrapper">
            
            <div className="trust-metrics-grid">
              {metrics.map((metric, index) => (
                <Reveal key={metric.id} type="pop-up" delay={index * 0.15}>
                  <div className="trust-metric-card">
                    <div className="trust-metric-icon">
                      {metric.icon}
                    </div>
                    <div className="trust-metric-text">
                      <h3>{metric.title}</h3>
                      <p>{metric.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
