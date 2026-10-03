import React from 'react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface HeroSectionProps {
  onSelectPhoto?: (photo: { url: string; caption?: string; location?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPhoto }) => {
  const { t } = useLanguage();
  const handlePhotoClick = (url: string, caption: string, location: string) => {
    if (onSelectPhoto) {
      onSelectPhoto({ url, caption, location });
    }
  };

  return (
    <section 
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: '112px',
        paddingBottom: '48px',
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
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110, 148, 93, 0.28) 0%, rgba(213, 228, 207, 0.14) 50%, transparent 70%)',
          filter: 'blur(75px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 117, 151, 0.25) 0%, rgba(255, 230, 236, 0.14) 50%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Main Title Banner with Marketing Portfolio Thao Lien Le */}
        <div className="hero-text-banner" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h1 
            className="hero-main-title"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
              fontWeight: 800, 
              color: 'var(--text-dark)', 
              lineHeight: 1.18,
              letterSpacing: '-0.5px',
              marginBottom: '16px'
            }}
          >
            Marketing Portfolio <br />
            <span 
              className="hero-name-subtitle"
              style={{ 
                color: 'var(--matcha-deep)', 
                fontStyle: 'italic', 
                fontFamily: 'var(--font-serif)',
                textShadow: '0 3px 12px rgba(85, 122, 70, 0.12)'
              }}
            >
              Thao Lien Le
            </span>
          </h1>

          <div 
            className="hero-script-tagline font-script float-sway"
            style={{ 
              fontSize: 'clamp(1.45rem, 2.8vw, 2rem)', 
              color: 'var(--matcha-primary)', 
              lineHeight: 1.4,
              marginBottom: '14px'
            }}
          >
            Explore my work, my ideas, and the stories behind them - perhaps our next story begins here.
          </div>
          
          <p 
            className="hero-bio-quote"
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
              fontWeight: 600, 
              color: 'var(--text-dark)', 
              lineHeight: 1.6, 
              maxWidth: '820px', 
              margin: '0 auto 28px',
              fontFamily: 'var(--font-serif)'
            }}
          >
            {t('Đưa thương hiệu đến đúng nơi, chạm đúng người, biến những kết nối thành hành động.')}
          </p>

          {/* Quick Jump Buttons */}
          <div className="hero-quick-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#about-me" className="btn-matcha-primary" style={{ textDecoration: 'none', padding: '9px 24px', fontSize: '0.88rem' }}>
              <span>{t('Một chút về mình')}</span>
            </a>
            <a href="#skills-experience" className="btn-cute-pink" style={{ textDecoration: 'none', padding: '9px 24px', fontSize: '0.88rem' }}>
              <span>{t('Kinh nghiệm và kỹ năng thực chiến')}</span>
            </a>
            <a href="#achievements" className="btn-glass-pill" style={{ textDecoration: 'none', padding: '9px 24px', fontSize: '0.88rem' }}>
              <span>{t('Thành tựu nổi bật')}</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            SCRAPBOOK COLLAGE (FEATURING 3 BALANCED DIVERSE PHOTOS)
            =================================================================== */}
        <div 
          className="hero-collage-grid"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Floating Sticker */}
          <div 
            className="hero-badge-tag float-slow"
            style={{
              position: 'absolute',
              top: '-24px',
              left: '2%',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255, 255, 255, 0.95)',
              padding: '6px 14px',
              borderRadius: '999px',
              boxShadow: '0 6px 18px rgba(85, 122, 70, 0.12)',
              border: '1px solid var(--border-matcha)'
            }}
          >
            <span style={{ fontSize: '1rem' }}>✨</span>
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--matcha-deep)' }}>
              CREATIVE MARKETING & BRAND GROWTH
            </span>
          </div>

          {/* LEFT PHOTO: p20.jpg */}
          <div className="hero-col-left">
            <div 
              className="polaroid-frame hero-polaroid-card float-slow"
              style={{
                width: '100%',
                cursor: 'pointer',
                paddingBottom: '14px'
              }}
              onClick={() => handlePhotoClick("/photos/p20.jpg", "", "")}
            >
              <div className="washi-tape-matcha" />
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                  src="/photos/p20.jpg" 
                  alt="Thảo Liên Lê"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* CENTER PHOTO: Master Portrait Arch (p11.jpg) */}
          <div className="hero-col-center">
            {/* Cute Ribbon at Top Center */}
            <div 
              className="hero-arch-ribbon sticker pulse-soft"
              style={{
                position: 'absolute',
                top: '-22px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '2.1rem',
                zIndex: 10
              }}
            >
              🎀
            </div>

            {/* Arch Master Photo Frame with Green & Gold Accents */}
            <div 
              className="hero-arch-frame"
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'var(--pink-mist)'
              }}
              onClick={() => handlePhotoClick("/photos/p11.jpg", "Thảo Liên Lê", "")}
            >
              <img 
                src="/photos/p11.jpg" 
                alt="Thảo Liên Lê"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Location Badge Overlay */}
              <div 
                className="hero-arch-badge"
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: '1px solid var(--border-pink)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--pink-deep)' }}>
                  Thảo Liên Lê · Marketing Portfolio
                </span>
              </div>
            </div>

            {/* Wax Seal Badge */}
            <div 
              className="wax-seal-matcha float-slow"
              style={{
                position: 'absolute',
                bottom: '6px',
                right: '-12px',
                zIndex: 10
              }}
            >
              TL
            </div>
          </div>

          {/* RIGHT PHOTO: p29.jpg */}
          <div className="hero-col-right">
            <div 
              className="polaroid-frame hero-polaroid-card float-slow"
              style={{
                width: '100%',
                cursor: 'pointer',
                paddingBottom: '14px'
              }}
              onClick={() => handlePhotoClick("/photos/p29.jpg", "", "")}
            >
              <div className="washi-tape-pink" />
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                  src="/photos/p29.jpg" 
                  alt="Thảo Liên Lê"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop styles for hero collage */
        .hero-collage-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
          align-items: center;
          width: 100%;
        }
        .hero-col-left {
          grid-column: span 4;
        }
        .hero-col-left .polaroid-frame {
          transform: rotate(-4deg);
        }
        .hero-col-center {
          grid-column: span 4;
          text-align: center;
          position: relative;
        }
        .hero-arch-frame {
          border-radius: 160px 160px 24px 24px;
          border: 5px solid #FFFFFF;
          box-shadow: 0 20px 50px -8px rgba(216, 78, 116, 0.3), 0 0 0 1.5px var(--border-pink);
          aspect-ratio: 3 / 4.1;
        }
        .hero-col-right {
          grid-column: span 4;
        }
        .hero-col-right .polaroid-frame {
          transform: rotate(4deg);
        }

        /* Mobile styles: ensure title is not cut by navbar, font sizes are generous and clear, and 3 photos display side-by-side in one row */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 92px !important;
            padding-bottom: 24px !important;
          }
          .hero-text-banner {
            margin-bottom: 20px !important;
            overflow: visible !important;
          }
          .hero-main-title {
            font-size: clamp(1.95rem, 8vw, 2.55rem) !important;
            line-height: 1.16 !important;
            margin-bottom: 6px !important;
            letter-spacing: -0.4px !important;
            overflow: visible !important;
          }
          .hero-name-subtitle {
            font-size: clamp(1.8rem, 7.5vw, 2.35rem) !important;
            display: inline-block !important;
            margin-top: 2px !important;
            line-height: 1.2 !important;
          }
          .hero-script-tagline {
            font-size: clamp(1.36rem, 5.5vw, 1.8rem) !important;
            color: var(--matcha-deep) !important;
            margin-bottom: 10px !important;
            line-height: 1.45 !important;
            padding: 2px 6px !important;
            overflow: visible !important;
            letter-spacing: 0.2px !important;
          }
          .hero-bio-quote {
            font-size: clamp(1.05rem, 4.2vw, 1.25rem) !important;
            line-height: 1.6 !important;
            font-weight: 600 !important;
            margin: 0 auto 16px !important;
            padding: 0 10px !important;
            max-width: 92% !important;
            box-sizing: border-box !important;
            overflow: visible !important;
          }
          .hero-quick-buttons {
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            margin-bottom: 20px !important;
          }
          .hero-quick-buttons a {
            padding: 7px 16px !important;
            font-size: 0.8rem !important;
            border-radius: 999px !important;
          }

          /* DÀN 3 ẢNH ĐẦU TIÊN CÙNG HÀNG NGANG TRÊN ĐIỆN THOẠI (KHÔNG BAO GIỜ RỚT DÒNG) */
          .hero-collage-grid {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 6px !important;
            width: 100% !important;
            max-width: 375px !important;
            margin: 0 auto !important;
            padding: 0 4px !important;
            box-sizing: border-box !important;
            position: relative !important;
          }
          .hero-badge-tag {
            display: none !important;
          }
          .hero-col-left {
            display: block !important;
            flex: 0 1 29% !important;
            width: 29% !important;
            max-width: 102px !important;
            min-width: 0 !important;
            order: 1 !important;
            margin: 0 !important;
          }
          .hero-col-center {
            display: block !important;
            flex: 0 1 40% !important;
            width: 40% !important;
            max-width: 140px !important;
            min-width: 0 !important;
            order: 2 !important;
            margin: 0 !important;
            position: relative !important;
          }
          .hero-col-right {
            display: block !important;
            flex: 0 1 29% !important;
            width: 29% !important;
            max-width: 102px !important;
            min-width: 0 !important;
            order: 3 !important;
            margin: 0 !important;
          }

          .hero-col-left .polaroid-frame {
            transform: rotate(-2.5deg) !important;
            padding: 4px 4px 10px !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-col-right .polaroid-frame {
            transform: rotate(2.5deg) !important;
            padding: 4px 4px 10px !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-arch-frame {
            border-radius: 62px 62px 14px 14px !important;
            border: 3px solid #FFFFFF !important;
            box-shadow: 0 8px 22px -3px rgba(216, 78, 116, 0.35) !important;
            width: 100% !important;
          }
          .hero-arch-ribbon {
            top: -14px !important;
            font-size: 1.25rem !important;
          }
          .hero-arch-badge {
            display: none !important;
          }
          .wax-seal-matcha {
            width: 22px !important;
            height: 22px !important;
            font-size: 0.58rem !important;
            bottom: -2px !important;
            right: -2px !important;
          }
          .washi-tape-matcha, .washi-tape-pink {
            width: 26px !important;
            height: 9px !important;
            top: -5px !important;
          }
        }
      `}</style>
    </section>
  );
};
