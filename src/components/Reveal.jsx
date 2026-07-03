import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, duration = 1.4, delay = 0, type = 'fade-up', display = 'block', style = {}, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.05, // Trigger as soon as 5% of the element is visible
        rootMargin: '0px 0px -40% 0px' 
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getStyles = () => {
    let initialTransform = 'translateY(30px)';
    let visibleTransform = 'translateY(0)';

    if (type === 'fade') {
      initialTransform = 'none';
      visibleTransform = 'none';
    } else if (type === 'slide-left') { // comes from right to left
      initialTransform = 'translateX(60px)';
      visibleTransform = 'translateX(0)';
    } else if (type === 'slide-right') { // comes from left to right
      initialTransform = 'translateX(-60px)';
      visibleTransform = 'translateX(0)';
    } else if (type === 'slide-left-far') { // comes from far right to left
      initialTransform = 'translateX(500px)';
      visibleTransform = 'translateX(0)';
    } else if (type === 'slide-right-far') { // comes from far left to right
      initialTransform = 'translateX(-500px)';
      visibleTransform = 'translateX(0)';
    } else if (type === 'pop-up') { // pop up (scale + fade)
      initialTransform = 'scale(0.8) translateY(20px)';
      visibleTransform = 'scale(1) translateY(0)';
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? visibleTransform : initialTransform,
      transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      width: display === 'block' ? '100%' : 'auto',
      display: display,
      ...style
    };
  };

  return (
    <div ref={ref} className={className} style={getStyles()}>
      {children}
    </div>
  );
}
