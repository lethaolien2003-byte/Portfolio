import React from 'react';

interface PhotoLightboxModalProps {
  photo: {
    url: string;
    caption?: string;
    location?: string;
  } | null;
  onClose: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(32, 39, 30, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '560px',
          width: '100%',
          backgroundColor: '#FFFDF9',
          borderRadius: '16px',
          padding: '20px 20px 32px 20px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
          position: 'relative',
          border: '1.5px solid rgba(85, 122, 70, 0.3)',
          animation: 'floatSlow 8s ease-in-out infinite'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi Tape at Top */}
        <div className="washi-tape-gingham" style={{ top: '-13px' }} />

        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
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
            zIndex: 20
          }}
        >
          ✕
        </button>

        {/* Main Photo Image */}
        <div 
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
            marginBottom: '16px'
          }}
        >
          <img 
            src={photo.url} 
            alt={photo.caption || 'Personal Snapshot'}
            style={{
              width: '100%',
              maxHeight: '68vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        {/* Handwritten Note Area */}
        <div style={{ padding: '0 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            {photo.location && (
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--matcha-primary)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
                📍 {photo.location}
              </span>
            )}
            <h4 
              className="font-script" 
              style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginTop: '2px', lineHeight: 1.1 }}
            >
              {photo.caption || 'A beautiful memory'}
            </h4>
          </div>

          <div className="wax-seal-matcha" style={{ width: '42px', height: '42px', fontSize: '0.9rem' }}>
            TL
          </div>
        </div>
      </div>
    </div>
  );
};
