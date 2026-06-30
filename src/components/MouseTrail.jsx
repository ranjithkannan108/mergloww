import React, { useEffect, useRef } from 'react';

// Helper function to draw a 5-pointed star on canvas
const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, color, alpha) => {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.shadowBlur = 8;
  ctx.shadowColor = '#d4af37';
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Arrays for cursor star particles and background rising dots
    const cursorParticles = [];
    const backgroundDots = [];
    
    // Mouse coordinates
    let mouseX = -100;
    let mouseY = -100;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Cursor Particle class (Twinkling Star)
    class CursorParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5 - 0.4;
        this.alpha = 1.0;
        this.size = Math.random() * 4 + 2;
        this.color = Math.random() > 0.4 ? '#d4af37' : '#f3e5ab';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.025;
        if (this.size > 0.1) this.size -= 0.06;
      }

      draw() {
        const spikes = 5;
        const outerRadius = this.size;
        const innerRadius = this.size / 2.5;
        drawStar(ctx, this.x, this.y, spikes, outerRadius, innerRadius, this.color, this.alpha);
      }
    }

    // Background Rising Dot class
    class RisingDot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10; // Start just below bottom of screen
        // Float upwards: negative Y velocity
        this.vy = -(Math.random() * 0.8 + 0.4); 
        this.vx = (Math.random() - 0.5) * 0.3; // subtle left/right drift
        this.size = Math.random() * 2 + 1; // 1px to 3px dots
        this.color = Math.random() > 0.3 ? '#d4af37' : '#f3e5ab';
        // Random maximum alpha for varying brightness
        this.maxAlpha = Math.random() * 0.4 + 0.1;
        this.alpha = 0; // Fade in initially
        this.fadePhase = 'in'; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Fade in from bottom, then stay, then fade out near the top
        if (this.fadePhase === 'in') {
          this.alpha += 0.01;
          if (this.alpha >= this.maxAlpha) {
            this.alpha = this.maxAlpha;
            this.fadePhase = 'visible';
          }
        }

        // Start fading out when reaching top 25% of viewport
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
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Spawn star particles behind mouse
      for (let i = 0; i < 3; i++) {
        cursorParticles.push(new CursorParticle(mouseX, mouseY));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Spawn and Update Background Rising Dots
      // Limit total active background dots to 80 to prevent clutter and preserve GPU
      if (backgroundDots.length < 80 && Math.random() < 0.15) {
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

      // 2. Update and Draw Mouse Star Particles
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Base64 of the custom gold cursor SVG image matching the user request
  const cursorSvgBase64 = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48bGluZWFyR3JhZGllbnQgaWQ9ImdvbGQiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZFRTg3NSIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjRDNBRjM3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTE3QTE2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImRhcmstZ29sZCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5Qzc3MTQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0RTNCMEEiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0zIDIgTDIyIDE3IEwxNSAxOCBMMjAgMjYgTDE3IDI4IEwxMiAyMCBMNyAyNCBaIiBmaWxsPSJ1cmwoI2RhcmstZ29sZCkiIC8+PHBhdGggZD0iTTMgMSBMMjIgMTYgTDE1IDE3IEwyMCAyNSBMMTcgMjcgTDEyIDE5IEw3IDIzIFoiIGZpbGw9InVybCgjZ29sZCkiIC8+PHJlY3QgeD0iNy41IiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSI5IiByeD0iMSIgZmlsbD0iI0ZGRkZGRiIgLz48L3N2Zz4=";
  const handSvgBase64 = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdvbGQiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZFRTg3NSIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjRDNBRjM3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTE3QTE2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTSA4IDMgTCA4IDEyIEEgMiAyIDAgMCAwIDEwIDE0IEwgMTIgMTQgTCAxMiA1IEEgMSAxIDAgMCAxIDE0IDUgTCAxNCAxNCBMIDE2IDE0IEwgMTYgNyBBIDEgMSAwIDAgMSAxOCA3IEwgMTggMTQgTCAyMCAxNCBMIDIwIDkgQSAxIDEgMCAwIDEgMjIgOSBMIDIyIDE4IEMgMjIgMjIgMTkgMjUgMTUgMjUgTCAxMCAyNSBDIDcgMjUgNSAyMyA1IDIwIEwgNSAxNSBBIDEgMSAwIDAgMSA3IDE1IEwgNyAxMiBBIDEgMSAwIDAgMSA4IDExIFoiIGZpbGw9IiM0RTNCMEEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEsIDEpIiAvPjxwYXRoIGQ9Ik0gOCAzIEwgOCAxMiBBIDIgMiAwIDAgMCAxMCAxNCBMIDEyIDE0IEwgMTIgNSBBIDEgMSAwIDAgMSAxNCA1IEwgMTQgMTQgTCAxNiAxNCBMIDE2IDcgQSAxIDEgMCAwIDEgMTggNyBMIDE4IDE0IEwgMjAgMTQgTCAyMCA5IEEgMSAxIDAgMCAxIDIyIDkgTCAyMiAxOCBDIDIyIDIyIDE5IDI1IDE1IDI1IEwgMTAgMjUgQyA3IDI1IDUgMjMgNSAyMCBMIDUgMTUgQSAxIDEgMCAwIDEgNyAxNSBMIDcgMTIgQSAxIDEgMCAwIDEgOCAxMSBaIiBmaWxsPSJ1cmwoI2dvbGQiKSBzdHJva2U9IiM1QTQ1MEMiIHN0cm9rZS13aWR0aD0iMC41IiAvPjwvc3ZnPg==";

  return (
    <>
      {/* Set the custom gold cursor globally using CSS */}
      <style>{`
        @media (min-width: 951px) {
          *, *::before, *::after {
            cursor: url(data:image/svg+xml;base64,${cursorSvgBase64}) 3 1, auto !important;
          }
          a, button, [role="button"], select, input, .nav-link, .why-choose-card, .testimonial-card, .social-icon, .btn-primary, .glow-btn, .search-btn {
            cursor: url(data:image/svg+xml;base64,${handSvgBase64}) 8 3, pointer !important;
          }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 999999, // Render trails and background dust on top of page background
        }}
      />
    </>
  );
}
