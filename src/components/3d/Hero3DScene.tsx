import React, { useState } from 'react';

interface Hero3DSceneProps {
  splineSceneUrl?: string;
}

/**
 * Component Hiển thị Hoạt cảnh 3D tương tác tại Hero
 * Hỗ trợ nhúng Spline Scene hoặc Fallback sang Geometric Interactive 3D Canvas
 */
export const Hero3DScene: React.FC<Hero3DSceneProps> = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Lắng nghe chuyển động chuột để tạo hiệu ứng Parallax 3D
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="hero-3d-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        position: 'relative',
        width: '100%',
        height: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px',
        userSelect: 'none'
      }}
    >
      {/* Khối cầu 3D Hologram Interactive (Fallback & Lightweight Engine) */}
      <div 
        style={{
          position: 'relative',
          width: '320px',
          height: '320px',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${mousePos.x * 45}deg) rotateX(${-mousePos.y * 45}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.8s ease-out',
        }}
      >
        {/* Glow Orb Core */}
        <div 
          style={{
            position: 'absolute',
            inset: '30px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #818cf8 0%, #4f46e5 45%, #1e1b4b 90%)',
            boxShadow: '0 0 60px 10px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.3)',
            animation: 'floatOrb 6s ease-in-out infinite',
          }}
        />

        {/* Orbit Ring 1 - Chiều ngang */}
        <div 
          style={{
            position: 'absolute',
            inset: '0px',
            border: '2px solid rgba(6, 182, 212, 0.5)',
            borderRadius: '50%',
            transform: 'rotateX(75deg) rotateY(15deg)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
            animation: 'spinRing 12s linear infinite'
          }}
        />

        {/* Orbit Ring 2 - Chiều dọc */}
        <div 
          style={{
            position: 'absolute',
            inset: '-15px',
            border: '2px dashed rgba(245, 158, 11, 0.6)',
            borderRadius: '50%',
            transform: 'rotateY(65deg) rotateX(25deg)',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
            animation: 'spinRingReverse 16s linear infinite'
          }}
        />

        {/* Floating 3D Metric Badges */}
        <div 
          style={{
            position: 'absolute',
            top: '20px',
            right: '-30px',
            background: 'rgba(17, 20, 32, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '10px 16px',
            borderRadius: '12px',
            transform: `translateZ(60px) translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>ROAS +340%</span>
        </div>

        <div 
          style={{
            position: 'absolute',
            bottom: '25px',
            left: '-20px',
            background: 'rgba(17, 20, 32, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '10px 16px',
            borderRadius: '12px',
            transform: `translateZ(80px) translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ fontSize: '1rem' }}>🎬</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>18.5M Views</span>
        </div>
      </div>

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
        @keyframes spinRing {
          from { transform: rotateX(75deg) rotateY(15deg) rotateZ(0deg); }
          to { transform: rotateX(75deg) rotateY(15deg) rotateZ(360deg); }
        }
        @keyframes spinRingReverse {
          from { transform: rotateY(65deg) rotateX(25deg) rotateZ(360deg); }
          to { transform: rotateY(65deg) rotateX(25deg) rotateZ(0deg); }
        }
      `}</style>
    </div>
  );
};
