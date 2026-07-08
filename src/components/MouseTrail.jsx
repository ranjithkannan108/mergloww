import React, { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Arrays for cursor particles and mouse history
    // Arrays for cursor particles
    const cursorParticles = [];

    // Background rising dots
    const backgroundDots = [];
    
    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Cursor Particle class (Golden Dots)
    class CursorParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // Float outwards randomly with more spread for a sprinkle effect
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.alpha = 1.0;
        this.size = Math.random() * 4 + 1; // 1px to 5px smaller sprinkle dots
        const sprinkleColors = ['#d4af37', '#f3e5ab', '#ffffff', '#ffdf73', '#c5a059'];
        this.color = sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.02; // Fade out
        if (this.size > 0.1) this.size -= 0.05; // Shrink
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#d4af37';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Background Rising Dot class
    class RisingDot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.vy = -(Math.random() * 0.8 + 0.4); 
        this.vx = (Math.random() - 0.5) * 0.3; 
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.3 ? '#d4af37' : '#f3e5ab';
        this.maxAlpha = Math.random() * 0.3 + 0.1;
        this.alpha = 0;
        this.fadePhase = 'in'; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.fadePhase === 'in') {
          this.alpha += 0.01;
          if (this.alpha >= this.maxAlpha) {
            this.alpha = this.maxAlpha;
            this.fadePhase = 'visible';
          }
        }

        if (this.y < canvas.height * 0.25) {
          this.alpha -= 0.005;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#d4af37';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      let x, y;
      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }

      // Spawn a burst of sprinkles on every mouse/touch move
      for (let i = 0; i < 4; i++) {
        cursorParticles.push(new CursorParticle(x, y));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Spawn and Update Background Rising Dots
      if (backgroundDots.length < 50 && Math.random() < 0.1) {
        backgroundDots.push(new RisingDot());
      }

      for (let i = backgroundDots.length - 1; i >= 0; i--) {
        const dot = backgroundDots[i];
        dot.update();
        if (dot.y < -10 || dot.alpha <= 0) {
          backgroundDots.splice(i, 1);
        } else {
          dot.draw();
        }
      }

      // 2. Removed the Smooth Glowing Golden Tail of Dots

      // 3. Update and Draw Cursor Particles (Golden Dots)
      for (let i = cursorParticles.length - 1; i >= 0; i--) {
        const p = cursorParticles[i];
        p.update();
        if (p.alpha <= 0 || p.size <= 0) {
          cursorParticles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999999,
      }}
    />
  );
}
