import React from 'react';
import { profileInfo } from '../../data/portfolioData.ts';

interface HeroSectionProps {
  onSelectPhoto?: (photo: { url: string; caption?: string; location?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPhoto }) => {
  const handlePhotoClick = (url: string, caption: string, location: string) => {
    if (onSelectPhoto) {
      onSelectPhoto({ url, caption, location });
    }
  };

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '135px',
        paddingBottom: '90px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Dreamy Matcha & Rose Pink Floating Ambient Spheres */}
      <div 
        style={{
          position: 'absolute',
          top: '2%',
          left: '8%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110, 148, 93, 0.38) 0%, rgba(213, 228, 207, 0.2) 50%, transparent 70%)',
          filter: 'blur(75px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 117, 151, 0.32) 0%, rgba(255, 230, 236, 0.2) 50%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '35%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(85, 122, 70, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div 
        style={{
          maxWidth: '1260px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Safari Search Bar Pill Widget */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="safari-pill">
            <span style={{ fontSize: '1rem', color: 'var(--matcha-primary)' }}>🍃</span>
            <span style={{ fontWeight: 600, letterSpacing: '0.3px' }}>
              thao lien le · travel vlog & aesthetic marketing portfolio ⋆*
            </span>
            <span style={{ fontSize: '0.95rem', color: 'var(--pink-primary)' }}>♡</span>
          </div>
        </div>

        {/* Main Title Banner with Exact Text: Marketing Portfolio Thao Lien Le */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div 
            className="font-script float-sway"
            style={{ 
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', 
              color: 'var(--matcha-primary)', 
              lineHeight: 1,
              marginBottom: '-6px'
            }}
          >
            Where green serenity meets visual poetry
          </div>
          
          <h1 
            style={{ 
              fontSize: 'clamp(2.6rem, 6.2vw, 5.2rem)', 
              fontWeight: 800, 
              color: 'var(--text-dark)', 
              lineHeight: 1.08,
              letterSpacing: '-1px'
            }}
          >
            Marketing Portfolio <br />
            <span 
              style={{ 
                color: 'var(--matcha-deep)', 
                fontStyle: 'italic', 
                fontFamily: 'var(--font-serif)',
                textShadow: '0 4px 15px rgba(85, 122, 70, 0.15)'
              }}
            >
              Thao Lien Le
            </span>
          </h1>

          <p 
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-muted)', 
              maxWidth: '680px', 
              margin: '18px auto 0',
              lineHeight: 1.65,
              fontWeight: 400
            }}
          >
            {profileInfo.vlogTagline}
          </p>

          {/* Quick CTA Actions */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '26px', flexWrap: 'wrap' }}>
            <a href="#vlog-reels" className="btn-matcha-primary">
              <span>Khám Phá Video Reels</span>
              <span style={{ fontSize: '1.1rem' }}>🎬</span>
            </a>
            <a href="#photo-diary" className="btn-glass-pill">
              <span>Xem Nhật Ký Ảnh (Photo Diary)</span>
              <span style={{ fontSize: '1.1rem' }}>📸</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            ETHEREAL SCRAPBOOK COLLAGE (FEATURING REAL PHOTOS FROM 'ẢNH')
            =================================================================== */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Floating Sticker / Cloud 1 */}
          <div 
            className="float-slow"
            style={{
              position: 'absolute',
              top: '-40px',
              left: '4%',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '8px 18px',
              borderRadius: '999px',
              boxShadow: '0 8px 24px rgba(85, 122, 70, 0.15)',
              border: '1px solid var(--border-matcha)'
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>✈️</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--matcha-deep)' }}>
              PASSION FOR TRAVEL & MARKETING
            </span>
          </div>

          {/* LEFT COLUMN: Polaroid 1 + Boarding Pass Widget (Col 1-4) */}
          <div style={{ gridColumn: 'span 4' }}>
            {/* Polaroid 1: Fairy Stream in Forest (p3.jpg) */}
            <div 
              className="polaroid-frame float-slow"
              style={{
                transform: 'rotate(-4deg)',
                width: '100%',
                marginBottom: '26px'
              }}
              onClick={() => handlePhotoClick(profileInfo.heroImages.fairyStream, "Nắng sớm xuyên tán rừng Trà Sư", "Suối Rừng Xanh")}
            >
              <div className="washi-tape-matcha" />
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                  src={profileInfo.heroImages.fairyStream} 
                  alt="Thảo Liên Lê bên suối rừng"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-script" style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>
                  Sun-drenched stream ⋆*
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--matcha-deep)', fontWeight: 700 }}>
                  🍃 DA LAT / AN GIANG
                </span>
              </div>
            </div>

            {/* Aesthetic Boarding Pass Widget */}
            <div 
              style={{
                background: '#FFFFFF',
                border: '1.5px dashed var(--matcha-sage)',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 10px 30px rgba(85, 122, 70, 0.1)',
                position: 'relative'
              }}
              className="float-reverse"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--matcha-deep)', letterSpacing: '1px' }}>
                  BOARDING PASS · VLOG FLIGHT
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--pink-deep)', fontWeight: 700 }}>
                  TL-2026 ✈
                </span>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>HAN</span>
                <span style={{ color: 'var(--matcha-primary)', fontSize: '0.9rem' }}>➔</span>
                <span>DLI</span>
                <span style={{ color: 'var(--matcha-primary)', fontSize: '0.9rem' }}>➔</span>
                <span>BKK</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Hành trình sáng tạo nội dung & trải nghiệm văn hóa đa sắc màu.
              </p>
            </div>
          </div>

          {/* CENTER COLUMN: Hero Master Portrait (p29.jpg - Tra Su Green Boat) (Col 5-8) */}
          <div style={{ gridColumn: 'span 4', textAlign: 'center', position: 'relative' }}>
            {/* Cute Ribbon at Top Center */}
            <div 
              className="sticker pulse-soft"
              style={{
                position: 'absolute',
                top: '-26px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '2.4rem',
                zIndex: 10
              }}
            >
              🎀
            </div>

            {/* Arch Master Photo Frame with Green & Gold Accents */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '200px 200px 32px 32px',
                overflow: 'hidden',
                border: '6px solid #FFFFFF',
                boxShadow: '0 28px 65px -10px rgba(59, 94, 43, 0.35), 0 0 0 2px var(--matcha-leaf)',
                aspectRatio: '3 / 4.4',
                cursor: 'pointer',
                backgroundColor: 'var(--matcha-mist)'
              }}
              onClick={() => handlePhotoClick(profileInfo.heroImages.traSuBoat, "Thuyền nan giữa rừng tràm Trà Sư", "An Giang")}
            >
              <img 
                src={profileInfo.heroImages.traSuBoat} 
                alt="Thảo Liên Lê trên thuyền rừng tràm"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Location Badge Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: '1px solid var(--border-matcha)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--matcha-deep)' }}>
                  📍 Trà Sư Emerald Forest · Thao Lien
                </span>
              </div>
            </div>

            {/* Wax Seal Badge Floating at Center-Right */}
            <div 
              className="wax-seal-matcha float-slow"
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '-16px',
                zIndex: 10
              }}
            >
              TL
            </div>
          </div>

          {/* RIGHT COLUMN: Polaroid 2 + Apple Notes Card (Col 9-12) */}
          <div style={{ gridColumn: 'span 4' }}>
            {/* Polaroid 2: Da Lat Pine Balcony (p15.jpg) */}
            <div 
              className="polaroid-frame float-slow"
              style={{
                transform: 'rotate(4deg)',
                width: '100%',
                marginBottom: '26px'
              }}
              onClick={() => handlePhotoClick(profileInfo.heroImages.daLatCafe, "Ban công Tiệm Cà Phê Nhà Của Thông", "Đà Lạt")}
            >
              <div className="washi-tape-pink" />
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                  src={profileInfo.heroImages.daLatCafe} 
                  alt="Thảo Liên Lê tại Nhà Của Thông Đà Lạt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-script" style={{ fontSize: '1.5rem', color: 'var(--text-dark)' }}>
                  Pine forest breeze ⋆*
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--pink-deep)', fontWeight: 700 }}>
                  🌲 ĐÀ LẠT CAFE
                </span>
              </div>
            </div>

            {/* Apple Notes Widget */}
            <div className="apple-notes-card float-reverse">
              <div className="apple-notes-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>📌</span>
                  <span>From Thảo Liên's Desk</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--matcha-leaf)', fontWeight: 700 }}>
                  2026 ROADMAP
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.6, fontStyle: 'italic' }}>
                "{profileInfo.quote}"
              </p>
              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(85, 122, 70, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--matcha-deep)', fontWeight: 600 }}>
                  Strategic Storyteller
                </span>
                <span className="font-script" style={{ fontSize: '1.5rem', color: 'var(--matcha-primary)' }}>
                  Thao Lien Le
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: repeat(12, 1fr)"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
          }
          div[style*="grid-column: span 4"] {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
