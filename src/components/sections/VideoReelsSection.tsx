import React, { useRef, useState } from 'react';
import { vlogReels } from '../../data/portfolioData.ts';
import { VlogReelItem } from '../../types/portfolio.ts';

interface PhoneCardProps {
  reel: VlogReelItem;
  onSelect: (reel: VlogReelItem) => void;
}

const PhoneReelCard: React.FC<PhoneCardProps> = ({ reel, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(reel)}
    >
      {/* Category Pill Tag on top */}
      <div 
        style={{
          background: reel.colorScheme === 'matcha' ? 'var(--matcha-mist)' : 'var(--pink-soft)',
          color: reel.colorScheme === 'matcha' ? 'var(--matcha-deep)' : 'var(--pink-deep)',
          border: reel.colorScheme === 'matcha' ? '1px solid var(--border-matcha)' : '1px solid var(--border-pink)',
          padding: '5px 16px',
          borderRadius: '999px',
          fontSize: '0.78rem',
          fontWeight: 700,
          marginBottom: '14px',
          letterSpacing: '0.5px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        ✦ {reel.tag.toUpperCase()}
      </div>

      {/* 9:16 Smartphone Frame with Matcha Leather Edge */}
      <div className="phone-mockup-matcha">
        {/* Dynamic Island */}
        <div className="dynamic-island" />

        {/* Video Element */}
        <video 
          ref={videoRef}
          src={reel.previewVideoUrl}
          poster={reel.coverImage}
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Floating Gradient Overlay with Title & Location */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 18px 20px',
            background: 'linear-gradient(to top, rgba(20, 30, 18, 0.95) 0%, rgba(20, 30, 18, 0.6) 60%, transparent 100%)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            transition: 'transform 0.3s ease'
          }}
        >
          {/* Location Badge */}
          <span 
            style={{ 
              fontSize: '0.74rem', 
              color: 'var(--matcha-sage)', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              marginBottom: '4px'
            }}
          >
            📍 {reel.location}
          </span>

          <h3 
            style={{ 
              fontSize: '1rem', 
              color: '#ffffff', 
              lineHeight: 1.3,
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              marginBottom: '8px'
            }}
          >
            {reel.title}
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
              🔥 {reel.metrics}
            </span>
            <span 
              style={{
                fontSize: '0.75rem',
                background: isHovered ? 'var(--matcha-primary)' : 'rgba(255,255,255,0.2)',
                padding: '4px 10px',
                borderRadius: '999px',
                transition: 'background 0.2s'
              }}
            >
              {isHovered ? 'Phát Ngay ▶' : 'Chạm để xem'}
            </span>
          </div>
        </div>
      </div>

      {/* Caption below Phone */}
      <div style={{ textAlign: 'center', marginTop: '16px', maxWidth: '260px' }}>
        <h4 style={{ fontSize: '1.08rem', color: 'var(--matcha-deep)', marginBottom: '4px' }}>
          {reel.title}
        </h4>
        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {reel.location}
        </span>
      </div>
    </div>
  );
};

interface VideoReelsSectionProps {
  onSelectReel: (reel: VlogReelItem) => void;
}

export const VideoReelsSection: React.FC<VideoReelsSectionProps> = ({ onSelectReel }) => {
  return (
    <section 
      id="vlog-reels"
      style={{
        padding: '110px 24px',
        backgroundColor: 'var(--matcha-cream)',
        borderTop: '1.5px solid var(--border-matcha)',
        borderBottom: '1.5px solid var(--border-matcha)',
        position: 'relative'
      }}
    >
      {/* Background Decorative Matcha Leaf Blobs */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 174, 123, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>🎬</span>
            <span 
              className="font-script" 
              style={{ fontSize: '2.6rem', color: 'var(--matcha-primary)', display: 'inline-block', lineHeight: 1 }}
            >
              Cinematic Travel & Brand Reels
            </span>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>🍃</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', marginTop: '4px', marginBottom: '14px', color: 'var(--matcha-deep)' }}>
            Video Khung Dọc Điện Thoại & <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Chiến Dịch Lan Tỏa</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Trải nghiệm thị giác tối ưu hóa cho màn hình smartphone dọc (9:16). Rê chuột để xem trước các khung hình du lịch và chiến dịch viral của Thảo Liên Lê.
          </p>
        </div>

        {/* 4 Phones Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {vlogReels.map((reel) => (
            <PhoneReelCard 
              key={reel.id} 
              reel={reel} 
              onSelect={onSelectReel} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
