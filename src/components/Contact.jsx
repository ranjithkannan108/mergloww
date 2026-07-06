import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Reveal from './Reveal';
import contactImg from '../assets/about-indian-family_converted.webp';
import './Contact.css';

function SwipeSlider({ icon, label, href }) {
  const trackRef = useRef(null);
  const [dragX, setDragX] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const startXRef = useRef(null);
  const isDragging = useRef(false);

  const getTrackWidth = () => {
    if (!trackRef.current) return 0;
    return trackRef.current.clientWidth;
  };

  const getThumbSize = () => {
    const w = window.innerWidth;
    if (w <= 360) return 34;
    if (w <= 480) return 38;
    if (w <= 768) return 40;
    return 44;
  };
  const THUMB_SIZE = getThumbSize();

  const handleStart = (clientX) => {
    if (triggered) return;
    startXRef.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX) => {
    if (!isDragging.current || triggered) return;
    const delta = clientX - startXRef.current;
    const max = getTrackWidth() - THUMB_SIZE;
    const clamped = Math.max(0, Math.min(delta, max));
    setDragX(clamped);
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const max = getTrackWidth() - THUMB_SIZE;
    if (dragX >= max * 0.75) {
      setDragX(max);
      setTriggered(true);
      setTimeout(() => {
        window.location.href = href;
        setTimeout(() => {
          setDragX(0);
          setTriggered(false);
        }, 1000);
      }, 300);
    } else {
      setDragX(0);
    }
  };

  // Mouse events
  const onMouseDown = (e) => handleStart(e.clientX);
  const onMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };
  const onMouseUp = () => handleEnd();

  // Touch events
  const onTouchStart = (e) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e) => { e.preventDefault(); handleMove(e.touches[0].clientX); };
  const onTouchEnd = () => handleEnd();

  return (
    <div
      className={`swipe-track ${triggered ? 'swipe-triggered' : ''}`}
      ref={trackRef}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Label text in centre */}
      <span className="swipe-track-label" style={{ opacity: triggered ? 0 : Math.max(0, 1 - dragX / 80) }}>
        {triggered ? '✓ Opening...' : label}
      </span>

      {/* Draggable thumb */}
      <div
        className="swipe-thumb"
        style={{ transform: `translateX(${dragX}px)`, transition: isDragging.current ? 'none' : 'transform 0.35s ease' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {icon}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Header */}
        <Reveal type="fade" display="flex" style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', width: '100%' }}>
            <h2 className="about-title glowing-title" style={{ fontSize: '1.25rem' }}>
              START YOUR JOURNEY WITH US.
            </h2>
          </div>
        </Reveal>

        {/* Contact Content Grid */}
        <div className="contact-grid">

          {/* Left Side: Image Card */}
          <Reveal type="slide-right" duration={1.5} display="flex">
            <div className="contact-image-card" style={{ backgroundImage: `url(${contactImg})` }}>
              <div className="contact-image-overlay"></div>
              <div className="contact-image-content">
                <div className="thank-you-sign">
                  <span className="sign-title">MERGLOWW ESTATES PRIVATE LIMITED</span>
                  <span className="sign-text">Thank You for Visiting</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Description + Swipe Sliders */}
          <Reveal type="slide-left" duration={1.5} display="flex">
            <div className="contact-right-panel">

              {/* Description */}
              <div className="contact-logo-box">
                <p className="contact-desc-text">
                  At <span className="company-gold">Mergloww Estates Private Limited</span>, trust is the foundation of every interaction. As a leading real estate company in Chennai, we specialize in DTCP, RERA, and CMDA‑approved plots and premium farmland projects. Whether you want to book a site visit, explore secure property investments, or get expert guidance, our team is ready to assist you with professionalism and transparency.
                </p>
              </div>

              {/* Swipe Sliders */}
              <SwipeSlider
                icon={<Phone size={24} />}
                label="Swipe to Call"
                href="tel:+911234567890"
              />
              <SwipeSlider
                icon={<Mail size={24} />}
                label="Swipe to Email"
                href="mailto:info@mergloww.com?subject=Regarding%20for%20Enquiries"
              />
              <SwipeSlider
                icon={<MapPin size={24} />}
                label="Swipe to Location"
                href="https://www.google.com/maps/search/?api=1&query=Mergloww+Estates+Private+Limited+Chennai"
              />

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
