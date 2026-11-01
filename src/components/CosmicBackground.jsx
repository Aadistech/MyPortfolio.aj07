import React, { useEffect, useRef } from 'react';

export default function CosmicBackground({ mousePosition }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate floating star dust / cosmic particles
    const particleCount = Math.min(Math.floor(width * 0.08), 90);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.15, // slight upward anti-gravity drift
      alpha: Math.random() * 0.7 + 0.3,
      glowColor: Math.random() > 0.6 ? '#38bdf8' : Math.random() > 0.3 ? '#a855f7' : '#ffffff',
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseVal: Math.random() * Math.PI,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse Parallax Offset
      const offsetX = (mousePosition.x - width / 2) * -0.04;
      const offsetY = (mousePosition.y - height / 2) * -0.04;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseVal += p.pulseSpeed;

        // Wrap around boundaries seamlessly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dynamicAlpha = Math.max(0.1, Math.min(1, p.alpha + Math.sin(p.pulseVal) * 0.25));

        ctx.save();
        ctx.beginPath();
        // apply slight parallax to particle position
        const drawX = p.x + offsetX * (p.size * 0.5);
        const drawY = p.y + offsetY * (p.size * 0.5);

        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.glowColor;
        ctx.globalAlpha = dynamicAlpha;
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  // Parallax calculations for the big ambient nebula layers
  const nebulaOffsetX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.025;
  const nebulaOffsetY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.025;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep space base gradient */}
      <div className="absolute inset-0 bg-[#03050c]" />

      {/* Subtle cosmic grid */}
      <div className="absolute inset-0 cosmic-grid opacity-30" />

      {/* Floating Nebula Glow 1: Cyan / Blue (Top Left) */}
      <div
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full opacity-25 filter blur-[140px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #0284c7 0%, #0369a1 40%, transparent 70%)',
          transform: `translate3d(${nebulaOffsetX * 1.5}px, ${nebulaOffsetY * 1.5}px, 0)`,
        }}
      />

      {/* Floating Nebula Glow 2: Cosmic Purple / Violet (Center Right) */}
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full opacity-20 filter blur-[150px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #7e22ce 0%, #581c87 50%, transparent 75%)',
          transform: `translate3d(${nebulaOffsetX * -1.2}px, ${nebulaOffsetY * -1.2}px, 0)`,
        }}
      />

      {/* Floating Nebula Glow 3: Deep Emerald / Teal (Bottom Left) */}
      <div
        className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full opacity-15 filter blur-[160px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #0f766e 0%, #115e59 40%, transparent 70%)',
          transform: `translate3d(${nebulaOffsetX * 0.8}px, ${nebulaOffsetY * 0.8}px, 0)`,
        }}
      />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
