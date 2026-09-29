import React from 'react';
import { VlogReelItem } from '../../types/portfolio.ts';

interface VideoModalProps {
  reel: VlogReelItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ reel, onClose }) => {
  if (!reel) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(32, 39, 30, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '500px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '32px',
          border: '2px solid var(--border-matcha)',
          padding: '24px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'var(--matcha-mist)',
            border: '1px solid var(--border-matcha)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--matcha-deep)',
            fontSize: '1.1rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ paddingRight: '40px', marginBottom: '14px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--matcha-deep)', textTransform: 'uppercase' }}>
            📍 {reel.location} · {reel.tag}
          </span>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', marginTop: '4px' }}>
            {reel.title}
          </h3>
        </div>

        {/* Video Player */}
        <div 
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '9 / 16',
            backgroundColor: '#000',
            marginBottom: '16px'
          }}
        >
          <video 
            controls 
            autoPlay 
            playsInline
            poster={reel.coverImage}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={reel.fullVideoUrl}
          />
        </div>

        {/* Metrics Badge */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--matcha-mist)',
            padding: '12px 18px',
            borderRadius: '16px',
            border: '1px solid var(--border-matcha)'
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--matcha-deep)', fontWeight: 600 }}>
            Lượt tiếp cận chiến dịch:
          </span>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--pink-deep)' }}>
            {reel.metrics}
          </span>
        </div>
      </div>
    </div>
  );
};
