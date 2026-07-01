import React, { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Arrays for cursor particles and mouse history
    const cursorParticles = [];
    const mouseHistory = [];
    const maxHistoryLength = 35;

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
        // Float outwards randomly
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.alpha = 1.0;
        this.size = Math.random() * 6 + 3; // 3px to 9px golden dots
        const goldColors = ['#d4af37', '#f3e5ab', '#ffdf73', '#c5a059'];
        this.color = goldColors[Math.floor(Math.random() * goldColors.length)];
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

    // Track mouse move
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Add to mouse history for drawing the tail line
      mouseHistory.push({ x, y });
      if (mouseHistory.length > maxHistoryLength) {
        mouseHistory.shift();
      }

      // Spawn golden dots
      if (Math.random() < 0.8) {
        cursorParticles.push(new CursorParticle(x, y));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

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

      // 2. Draw the Smooth Glowing Golden Tail of Dots (with interpolation to prevent gaps)
      if (mouseHistory.length > 1) {
        ctx.save();
        for (let i = 1; i < mouseHistory.length; i++) {
          const p1 = mouseHistory[i - 1];
          const p2 = mouseHistory[i];
          
          const ratio1 = (i - 1) / mouseHistory.length;
          const ratio2 = i / mouseHistory.length;

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          // Draw a dot every 3 pixels for a dense, smooth tail
          const steps = Math.max(1, Math.floor(distance / 3));

          for (let step = 0; step <= steps; step++) {
            const t = step / steps;
            const x = p1.x + dx * t;
            const y = p1.y + dy * t;
            const currentRatio = ratio1 + (ratio2 - ratio1) * t;

            // Make the tail dots larger (from 3px at the end up to 14px at the cursor)
            const size = currentRatio * 11 + 3;
            const alpha = currentRatio * 0.7;

            ctx.beginPath();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = '#d4af37';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#d4af37';
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
      }

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

      // Also slowly decay mouse history length if mouse is static
      if (mouseHistory.length > 0 && Math.random() < 0.3) {
        mouseHistory.shift();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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
