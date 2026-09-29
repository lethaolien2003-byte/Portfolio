import React from 'react';
import { photobooths, filmStripPhotos } from '../../data/portfolioData.ts';

interface PhotoboothSectionProps {
  onSelectPhoto?: (photo: { url: string; caption?: string; location?: string }) => void;
}

export const PhotoboothSection: React.FC<PhotoboothSectionProps> = ({ onSelectPhoto }) => {
  const handlePhotoClick = (url: string, caption: string, location: string) => {
    if (onSelectPhoto) {
      onSelectPhoto({ url, caption, location });
    }
  };

  return (
    <section 
      id="photo-diary"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Matcha Ambient Blob */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 174, 123, 0.22) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 117, 151, 0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>📸</span>
            <span 
              className="font-script"
              style={{ fontSize: '2.6rem', color: 'var(--matcha-primary)', display: 'inline-block', lineHeight: 1 }}
            >
              Personal Visual Diary
            </span>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>🍃</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', marginTop: '4px', marginBottom: '14px', color: 'var(--matcha-deep)' }}>
            Nhật Ký Ảnh Thảo Liên & <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Life4Cuts Photobooth</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Bộ sưu tập ảnh đời thường, du lịch và phong cách sống của Thảo Liên Lê. Mỗi bức ảnh là một gam màu, một kỷ niệm và một câu chuyện truyền cảm hứng.
          </p>
        </div>

        {/* ===================================================================
            1. VINTAGE 35MM ANALOG FILM ROLL
            =================================================================== */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', padding: '0 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.2rem' }}>🎞️</span>
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--matcha-deep)', letterSpacing: '1px' }}>
                KODAK GOLD 35MM ANALOG ROLL · THAO LIEN
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              ISO 400 · 36 EXP · CLICK ĐỂ PHÓNG TO
            </span>
          </div>

          <div className="film-strip">
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '14px',
                padding: '4px 6px'
              }}
            >
              {filmStripPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  style={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    borderRadius: '6px', 
                    aspectRatio: '4 / 3',
                    cursor: 'pointer',
                    backgroundColor: '#000'
                  }}
                  onClick={() => handlePhotoClick(photo.imageUrl, photo.title, photo.location)}
                >
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Frame Code on bottom */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '6px',
                      left: '8px',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'var(--gold-soft)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      letterSpacing: '1px'
                    }}
                  >
                    ▶ {photo.frameCode}
                  </div>

                  {/* Location badge on top */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '8px',
                      background: 'rgba(20, 30, 18, 0.75)',
                      color: '#FFFFFF',
                      fontSize: '0.65rem',
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}
                  >
                    {photo.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================================
            2. KOREAN LIFE4CUTS PHOTOBOOTHS (MATCHA & PINK EDITIONS)
            =================================================================== */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span 
              className="font-script" 
              style={{ fontSize: '2.2rem', color: 'var(--matcha-primary)', display: 'block' }}
            >
              Korean 4-Cut Memories
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>
              Khung Ảnh 4 Ô <span style={{ color: 'var(--matcha-deep)' }}>Life4Cuts</span> Dễ Thương
            </h3>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              maxWidth: '920px',
              margin: '0 auto'
            }}
          >
            {photobooths.map((booth, idx) => (
              <div 
                key={booth.id}
                className={booth.theme === 'matcha' ? 'photobooth-strip-matcha' : 'photobooth-strip-pink'}
                style={{
                  transform: idx === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = idx === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)')}
              >
                {/* Washi Tape on top */}
                <div className={booth.theme === 'matcha' ? 'washi-tape-matcha' : 'washi-tape-pink'} />

                {/* Booth Header */}
                <div style={{ textAlign: 'center', borderBottom: booth.theme === 'matcha' ? '1px dashed var(--matcha-leaf)' : '1px dashed var(--pink-bubble)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '0.9rem' }}>{booth.sticker}</span>
                  <div 
                    className="font-serif" 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 800, 
                      color: booth.theme === 'matcha' ? 'var(--matcha-deep)' : 'var(--pink-deep)', 
                      letterSpacing: '1px' 
                    }}
                  >
                    {booth.tag}
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {booth.date} · {booth.location}
                  </span>
                </div>

                {/* 4 Photos Stack */}
                {booth.photos.map((photoUrl, photoIdx) => (
                  <div 
                    key={photoIdx} 
                    className="photobooth-photo"
                    onClick={() => handlePhotoClick(photoUrl, `Life4Cuts Frame 0${photoIdx + 1}`, booth.location)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={photoUrl} alt={`Photobooth snap ${photoIdx + 1}`} />
                  </div>
                ))}

                {/* Booth Footer Stamp */}
                <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-dark)', fontStyle: 'italic', marginBottom: '8px' }}>
                    "{booth.caption}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: booth.theme === 'matcha' ? 'var(--matcha-deep)' : 'var(--pink-deep)' }}>
                      THẢO LIÊN LÊ · PHOTOBOOTH
                    </span>
                    <span style={{ fontSize: '0.8rem' }}>♡</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
