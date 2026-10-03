import React from 'react';
import { HeroSection } from '../components/sections/HeroSection.tsx';
import { NavPage, VlogReelItem } from '../types/portfolio.ts';
import { homeContent, partnerBrands } from '../data/portfolioData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onSelectPhoto: (photo: { url: string; caption?: string; location?: string }) => void;
  onSelectReel: (reel: VlogReelItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectPhoto
}) => {
  const { t } = useLanguage();
  return (
    <div className="home-page-view" style={{ minHeight: '100vh' }}>
      {/* 1. HERO SHOWCASE */}
      <HeroSection onSelectPhoto={onSelectPhoto} />

      {/* 2. SECTION: MỘT CHÚT VỀ MÌNH (ABOUT ME) */}
      <section 
        id="about-me"
        className="about-me-section"
        style={{
          padding: '44px 20px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.45) 0%, rgba(243, 248, 241, 0.65) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h2 
              className="font-serif about-me-title" 
              style={{ 
                fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)', 
                color: 'var(--matcha-deep)',
                fontWeight: 800,
                lineHeight: 1.2
              }}
            >
              {t('Một chút về')} <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>{t('mình')}</span>
            </h2>
          </div>

          {/* About Me Content Grid */}
          <div 
            className="about-me-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            {/* Left: Diverse Photo Duo (p1.jpg Atelier & p4.jpg Lotus Smile) */}
            <div className="about-me-photos-col" style={{ gridColumn: 'span 5' }}>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', alignItems: 'center' }}>
                {/* Photo 1: Atelier Portrait */}
                <div 
                  className="polaroid-frame-pink float-slow"
                  style={{
                    transform: 'rotate(-3deg)',
                    background: '#FFFFFF',
                    padding: '10px 10px 14px',
                    borderRadius: '14px',
                    boxShadow: '0 12px 28px rgba(216, 78, 116, 0.16)',
                    width: '48%',
                    cursor: 'pointer'
                  }}
                  onClick={() => onSelectPhoto({ url: "/photos/p19.jpg", caption: "Thảo Liên Lê · High Fashion & Editorial", location: "Art Gallery" })}
                >
                  <div className="washi-tape-pink" style={{ top: '-10px' }} />
                  <div style={{ aspectRatio: '3/4', borderRadius: '6px', overflow: 'hidden' }}>
                    <img 
                      src="/photos/p19.jpg" 
                      alt="Thảo Liên Lê" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ marginTop: '6px', textAlign: 'center' }}>
                    <span className="font-script" style={{ fontSize: '1.1rem', color: 'var(--pink-deep)' }}>
                      Chic & Slay ⋆*
                    </span>
                  </div>
                </div>

                {/* Photo 2: Coastal Muse */}
                <div 
                  className="polaroid-frame float-reverse"
                  style={{
                    transform: 'rotate(3deg)',
                    background: '#FFFFFF',
                    padding: '10px 10px 14px',
                    borderRadius: '14px',
                    boxShadow: '0 12px 28px rgba(85, 122, 70, 0.16)',
                    width: '48%',
                    cursor: 'pointer'
                  }}
                  onClick={() => onSelectPhoto({ url: "/photos/p16.jpg", caption: "Thảo Liên Lê · Nàng thơ bên bờ biển", location: "Coastal Muse" })}
                >
                  <div className="washi-tape-matcha" style={{ top: '-10px' }} />
                  <div style={{ aspectRatio: '3/4', borderRadius: '6px', overflow: 'hidden' }}>
                    <img 
                      src="/photos/p16.jpg" 
                      alt="Thảo Liên Lê" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ marginTop: '6px', textAlign: 'center' }}>
                    <span className="font-script" style={{ fontSize: '1.1rem', color: 'var(--matcha-deep)' }}>
                      Pure Muse ⋆*
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Personal Bio & Academic Highlights */}
            <div className="about-me-bio-col" style={{ gridColumn: 'span 7' }}>
              <div 
                className="about-me-bio-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '20px',
                  padding: '30px 28px',
                  border: '1.5px solid var(--border-matcha)',
                  boxShadow: '0 12px 32px -8px rgba(85, 122, 70, 0.08)'
                }}
              >
                {/* Personal Intro Bio */}
                <p style={{ fontSize: '0.98rem', color: 'var(--text-dark)', lineHeight: 1.75, marginBottom: '14px' }}>
                  <strong style={{ color: 'var(--matcha-deep)', fontSize: '1.05rem', fontWeight: 800 }}>
                    {t('Xin chào, mình là Thao Lien Le (hay Tali).')}
                  </strong>{' '}
                  {t('Mình có hơn 3 năm làm Marketing trong môi trường SMEs cho mình cơ hội được “chạm” vào nhiều khía cạnh: từ lên plan, đóng góp tối ưu sản phẩm, làm content, edit video, chạy Ads đến biên tập và tổ chức sự kiện.')}
                </p>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.68, fontStyle: 'italic', marginBottom: '22px' }}>
                  {t('Và cũng chính môi trường đó dạy mình một điều: Marketing không phải lúc nào cũng bắt đầu với nguồn lực lớn, mà là tìm cách tận dụng nguồn lực có hạn để đưa thương hiệu đến đúng thị trường mục tiêu và tạo ra chuyển đổi tốt.')}
                </p>

                {/* Trình độ học vấn & Chuyên ngành - Trình bày phẳng, tinh gọn, không chia ô hộp rối mắt */}
                <div 
                  style={{ 
                    paddingTop: '18px', 
                    borderTop: '1px solid rgba(85, 122, 70, 0.16)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                    <span style={{ fontSize: '1.15rem' }}>🎓</span>
                    <span>
                      <strong style={{ color: 'var(--matcha-deep)' }}>{t('Tốt nghiệp Xuất sắc')}</strong> — {t('Đại học Kinh tế TP.HCM (UEH)')}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                    <span style={{ fontSize: '1.15rem' }}>📊</span>
                    <span>
                      {t('Chuyên ngành: Quản trị Kinh doanh')} • <strong style={{ color: 'var(--pink-deep)' }}>GPA: 3.81 / 4.0</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: KINH NGHIỆM VÀ KỸ NĂNG */}
      <section 
        id="skills-experience"
        style={{
          padding: '52px 20px',
          backgroundColor: '#FFFFFF',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 
              className="font-serif" 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', 
                color: 'var(--text-dark)', 
                fontWeight: 800,
                letterSpacing: '-0.5px'
              }}
            >
              {t('Kinh nghiệm và kỹ năng thực chiến')}
            </h2>
          </div>

          {/* Clean 2-Column Minimalist Editorial Flow (Không dùng ô hộp thô cứng, không dùng tag băng dính) */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px 32px'
            }}
          >
            {homeContent.skills.map((skill, idx) => {
              const isPink = skill.colorScheme === 'pink';
              const numStr = `0${idx + 1}`;
              return (
                <div
                  key={skill.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    padding: '20px 22px',
                    borderRadius: '16px',
                    background: isPink ? 'rgba(255, 240, 244, 0.45)' : 'rgba(243, 248, 241, 0.65)',
                    borderLeft: `4px solid ${isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)'}`,
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = isPink ? 'rgba(255, 240, 244, 0.8)' : 'rgba(243, 248, 241, 0.95)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = isPink ? 'rgba(255, 240, 244, 0.45)' : 'rgba(243, 248, 241, 0.65)';
                  }}
                >
                  {/* Elegant Number */}
                  <span 
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)',
                      lineHeight: 1,
                      paddingTop: '2px',
                      opacity: 0.85
                    }}
                  >
                    {numStr}
                  </span>

                  <div style={{ flex: 1 }}>
                    <h3 
                      style={{ 
                        fontSize: '1.08rem', 
                        fontWeight: 800, 
                        color: 'var(--text-dark)', 
                        marginBottom: '6px',
                        lineHeight: 1.35
                      }}
                    >
                      {t(skill.title)}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                      {t(skill.desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SECTION: THÀNH TỰU NỔI BẬT (Dashboard Strip liền mạch, không hộp rời rạc, không tag) */}
      <section 
        id="achievements"
        style={{
          padding: '52px 20px',
          background: 'linear-gradient(180deg, #F8FAF7 0%, #FFF6F8 100%)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 
              className="font-serif" 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', 
                color: 'var(--text-dark)',
                fontWeight: 800
              }}
            >
              {t('Thành tựu')} <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>{t('nổi bật')}</span>
            </h2>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', marginTop: '8px' }}>
              {t('Những kết quả chuyển đổi và tăng trưởng đo lường được từ các dự án thực tế.')}
            </p>
          </div>

          {/* Unified Metric Grid - Sang trọng, liền mạch */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '30px 24px',
              border: '1.5px solid rgba(85, 122, 70, 0.14)',
              boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.05)'
            }}
          >
            {homeContent.achievements.map((ach) => {
              const isPink = ach.colorScheme === 'pink';
              return (
                <div
                  key={ach.id}
                  style={{
                    padding: '16px 18px',
                    borderRadius: '16px',
                    background: isPink ? 'rgba(255, 240, 244, 0.35)' : 'rgba(243, 248, 241, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = isPink 
                      ? '0 10px 24px -6px rgba(216, 78, 116, 0.15)' 
                      : '0 10px 24px -6px rgba(85, 122, 70, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span 
                      style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)',
                        display: 'inline-block' 
                      }} 
                    />
                    <span 
                      style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 800, 
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.6px'
                      }}
                    >
                      {t(ach.category)}
                    </span>
                  </div>

                  {/* Impact Proof / Result */}
                  <div 
                    style={{
                      fontSize: '1.12rem',
                      fontWeight: 800,
                      color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                      lineHeight: 1.45
                    }}
                  >
                    {t(ach.highlight)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTION: CÁC BRAND ĐÃ ĐỒNG HÀNH */}
      <section 
        id="partner-brands"
        style={{
          padding: '52px 20px 60px',
          backgroundColor: '#FFFFFF',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 
              className="font-serif" 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', 
                color: 'var(--text-dark)',
                fontWeight: 800,
                lineHeight: 1.2
              }}
            >
              {t('Các brand đã')} <span style={{ color: 'var(--matcha-deep)', fontStyle: 'italic' }}>{t('đồng hành')}</span>
            </h2>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', marginTop: '8px' }}>
              {t('Đồng hành cùng các thương hiệu đa ngành tạo nên những dấu ấn tăng trưởng và chiến dịch thực chiến.')}
            </p>
          </div>

          {/* Clean Brand Logos Bar - Không dùng tag băng dính, tinh gọn và sang trọng */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '20px'
            }}
          >
            {partnerBrands.map((brand, idx) => {
              const isPink = idx % 2 === 0;
              return (
                <div
                  key={brand.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '20px 16px',
                    border: `1.5px solid ${isPink ? 'rgba(255, 117, 151, 0.25)' : 'rgba(85, 122, 70, 0.2)'}`,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = isPink 
                      ? '0 12px 28px -4px rgba(216, 78, 116, 0.16)' 
                      : '0 12px 28px -4px rgba(85, 122, 70, 0.16)';
                    e.currentTarget.style.borderColor = isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                    e.currentTarget.style.borderColor = isPink ? 'rgba(255, 117, 151, 0.25)' : 'rgba(85, 122, 70, 0.2)';
                  }}
                >
                  {/* Brand Logo Box */}
                  <div 
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      backgroundColor: brand.bgColor || '#F8F9FA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      padding: '4px',
                      border: '1.5px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      marginBottom: '12px'
                    }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        objectFit: 'contain',
                        borderRadius: '50%'
                      }} 
                    />
                  </div>

                  {/* Category Pill */}
                  <span 
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                      background: isPink ? 'var(--pink-soft)' : 'var(--matcha-soft)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      marginBottom: '6px'
                    }}
                  >
                    {t(brand.category)}
                  </span>

                  {/* Brand Name */}
                  <h3 
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: 'var(--text-dark)',
                      margin: 0
                    }}
                  >
                    {brand.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <style>{`
        @media (max-width: 900px) {
          .about-me-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
          .about-me-grid > div {
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .about-me-section {
            padding: 22px 14px !important;
          }
          .about-me-title {
            font-size: clamp(1.35rem, 4.8vw, 1.65rem) !important;
            margin-bottom: 8px !important;
          }
          .about-me-photos-col > div {
            max-width: 290px !important;
            margin: 0 auto !important;
            gap: 10px !important;
          }
          .about-me-photos-col .polaroid-frame-pink,
          .about-me-photos-col .polaroid-frame {
            padding: 6px 6px 10px !important;
            border-radius: 10px !important;
          }
          .about-me-photos-col .font-script {
            font-size: 0.92rem !important;
          }
          .about-me-bio-card {
            padding: 15px 14px !important;
            border-radius: 16px !important;
          }
          .about-me-bio-card p {
            font-size: 0.84rem !important;
            line-height: 1.55 !important;
            margin-bottom: 10px !important;
          }
          .about-me-bio-card strong {
            font-size: 0.9rem !important;
          }
          .about-me-bio-card div[style*="font-size: 0.95rem"] {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};
