import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'matcha-leaf' | 'sakura-petal' | 'sparkle' | 'bokeh-orb';
  color: string;
  wobbleSpeed: number;
  wobbleAmp: number;
}

export const Petals3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse movement creates gentle breeze sway
    let targetMouseX = 0;
    let currentMouseX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const matchaColors = [
      'rgba(85, 122, 70, 0.75)',   // Rich Matcha Green
      'rgba(110, 148, 93, 0.8)',   // Leaf Green
      'rgba(139, 174, 123, 0.7)',  // Sage Green
      'rgba(59, 94, 43, 0.65)'     // Deep Forest Matcha
    ];

    const sakuraColors = [
      'rgba(255, 117, 151, 0.75)', // Rose Pink
      'rgba(255, 167, 188, 0.8)',  // Bubblegum Pink
      'rgba(255, 192, 203, 0.65)', // Light Sakura
      'rgba(248, 205, 218, 0.7)'   // Soft Blush
    ];

    const sparkleColors = [
      'rgba(229, 195, 120, 0.85)', // Champagne Gold
      'rgba(212, 175, 55, 0.8)',   // Rich Gold
      'rgba(255, 255, 255, 0.9)'   // Pure Diamond Sparkle
    ];

    // Create 45 ethereal particles (generous matcha leaves, sakura petals, fairy dust)
    const particles: Particle[] = Array.from({ length: 48 }, (_, i) => {
      const isMatcha = i % 2 === 0; // 50% Matcha Green Leaves
      const isSparkle = i % 5 === 0;
      const isOrb = i % 7 === 0;

      let type: Particle['type'] = 'matcha-leaf';
      let color = matchaColors[Math.floor(Math.random() * matchaColors.length)];

      if (isSparkle) {
        type = 'sparkle';
        color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      } else if (isOrb) {
        type = 'bokeh-orb';
        color = isMatcha ? 'rgba(110, 148, 93, 0.12)' : 'rgba(255, 167, 188, 0.12)';
      } else if (!isMatcha) {
        type = 'sakura-petal';
        color = sakuraColors[Math.floor(Math.random() * sakuraColors.length)];
      }

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 800 + 150,
        size: type === 'bokeh-orb' ? Math.random() * 40 + 20 : (type === 'sparkle' ? Math.random() * 4 + 2 : Math.random() * 12 + 9),
        speedY: type === 'bokeh-orb' ? Math.random() * 0.3 + 0.1 : Math.random() * 0.8 + 0.4,
        speedX: (Math.random() - 0.5) * 0.7,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.025,
        opacity: type === 'bokeh-orb' ? Math.random() * 0.2 + 0.05 : Math.random() * 0.4 + 0.5,
        type,
        color,
        wobbleSpeed: Math.random() * 0.03 + 0.015,
        wobbleAmp: Math.random() * 1.5 + 0.8
      };
    });

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.02;

      // Smooth mouse easing
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update positions with 3D wind breeze
        p.y += p.speedY;
        p.x += p.speedX + currentMouseX + Math.sin(tick * p.wobbleSpeed * 20 + i) * p.wobbleAmp;
        p.rotation += p.rotationSpeed;

        // Wrap around borders
        if (p.y > height + 50) {
          p.y = -40;
          p.x = Math.random() * width;
        }
        if (p.x < -60) p.x = width + 50;
        if (p.x > width + 60) p.x = -50;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'matcha-leaf') {
          // Draw elegant Matcha Tea Leaf
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.5, p.size * 0.7, p.size * 0.5, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.5, -p.size * 0.7, -p.size * 0.5, 0, -p.size);
          ctx.fill();

          // Leaf center vein
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.lineTo(0, p.size * 0.8);
          ctx.stroke();

        } else if (p.type === 'sakura-petal') {
          // Draw soft curved Sakura Petal
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size * 1.1, p.size * 0.4, 0, p.size);
          ctx.bezierCurveTo(-p.size * 1.1, p.size * 0.4, -p.size * 0.8, -p.size * 0.8, 0, -p.size);
          ctx.fill();

        } else if (p.type === 'sparkle') {
          // Draw 4-point twinkling star
          ctx.fillStyle = p.color;
          const s = p.size * (1 + Math.sin(tick * 3 + i) * 0.4);
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.25, -s * 0.25);
          ctx.lineTo(s, 0);
          ctx.lineTo(s * 0.25, s * 0.25);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.25, s * 0.25);
          ctx.lineTo(-s, 0);
          ctx.lineTo(-s * 0.25, -s * 0.25);
          ctx.closePath();
          ctx.fill();

        } else if (p.type === 'bokeh-orb') {
          // Floating dreamy ambient circle
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
          grad.addColorStop(0, p.color);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
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
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};
