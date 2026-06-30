import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, duration = 0.8, delay = 0, type = 'fade-up', display = 'block' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it reveals, we don't need to observe it anymore
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { 
        threshold: 0.05, // Trigger as soon as 5% of the element is visible
        rootMargin: '0px 0px -20% 0px' // Trigger when the element is 20% above the bottom of the screen
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
    } else if (type === 'pop-up') { // pop up (scale + fade)
      initialTransform = 'scale(0.8) translateY(20px)';
      visibleTransform = 'scale(1) translateY(0)';
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? visibleTransform : initialTransform,
      transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      width: display === 'block' ? '100%' : 'auto',
      display: display
    };
  };

  return (
    <div ref={ref} style={getStyles()}>
      {children}
    </div>
  );
}
