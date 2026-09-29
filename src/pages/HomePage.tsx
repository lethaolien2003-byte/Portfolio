import React from 'react';
import { HeroSection } from '../components/sections/HeroSection.tsx';
import { NavPage, VlogReelItem } from '../types/portfolio.ts';
import { vlogReels, photobooths, profileInfo } from '../data/portfolioData.ts';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onSelectPhoto: (photo: { url: string; caption?: string; location?: string }) => void;
  onSelectReel: (reel: VlogReelItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectPhoto,
  onSelectReel
}) => {
  const featuredReel = vlogReels[0];
  const featuredPhotobooth = photobooths[0];

  const subSites: {
    id: NavPage;
    title: string;
    englishTitle: string;
    desc: string;
    icon: string;
    badge: string;
    accent: 'pink' | 'matcha';
    previewImg: string;
  }[] = [
    {
      id: 'video-reels',
      title: 'Studio Video Reels',
      englishTitle: 'Vertical Cinema & Reels',
      desc: 'Tuyển tập các thước phim 9:16 triệu view, kịch bản viral và kỹ xảo màu sắc điện ảnh.',
      icon: '🎬',
      badge: '2.4M+ Views',
      accent: 'pink',
      previewImg: '/photos/p26.jpg'
    },
    {
      id: 'photo-diary',
      title: 'Photo Diary & Photobooth',
      englishTitle: 'Visual Scrapbook',
      desc: '29 bức ảnh du lịch & thời trang độc bản, cuộn phim analog 35mm và khung ảnh Life4Cuts Hàn Quốc.',
      icon: '📸',
      badge: '29 Khoảnh Khắc',
      accent: 'matcha',
      previewImg: '/photos/p29.jpg'
    },
    {
      id: 'roadmap',
      title: 'Hành Trình Sáng Tạo',
      englishTitle: 'Travel & Career Journey',
      desc: 'Cuốn hộ chiếu nghệ thuật: Từ gieo mầm ý tưởng đến bùng nổ chiến dịch truyền thông đa kênh.',
      icon: '🗺️',
      badge: '4 Cột Mốc Lớn',
      accent: 'pink',
      previewImg: '/photos/p20.jpg'
    },
    {
      id: 'services',
      title: 'Dịch Vụ & Hợp Tác',
      englishTitle: 'Marketing Packages',
      desc: 'Bảng dịch vụ thắt nơ Coquette: Định hình phong cách thị giác, sản xuất video ngắn và tư vấn A-Z.',
      icon: '✨',
      badge: '3 Gói Dịch Vụ',
      accent: 'matcha',
      previewImg: '/photos/p5.jpg'
    },
    {
      id: 'contact',
      title: 'Hộp Thư Trực Tiếp',
      englishTitle: 'Direct Message Station',
      desc: 'Giao diện Instagram DM mô phỏng & phong thư tình yêu. Kết nối dự án marketing ngay hôm nay!',
      icon: '✉',
      badge: 'Phản Hồi Nhanh ♡',
      accent: 'pink',
      previewImg: '/photos/p10.jpg'
    }
  ];

  return (
    <div className="home-page-view" style={{ minHeight: '100vh' }}>
      {/* 1. Hero Showcase with Layered Scrapbook, Personal Photos & Apple Notes */}
      <HeroSection onSelectPhoto={onSelectPhoto} />

      {/* 2. "Vũ Trụ Danh Mục" - Multi-Site Portal Section */}
      <section 
        style={{
          padding: '80px 24px 60px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.45) 0%, rgba(242, 248, 240, 0.6) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Header Title with Balanced Pink & Matcha */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 20px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1.5px solid var(--border-pink)',
                boxShadow: '0 4px 15px rgba(255, 117, 151, 0.18)',
                marginBottom: '16px'
              }}
            >
              <span>🌸</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
                HỆ SINH THÁI PORTFOLIO RIÊNG BIỆT
              </span>
              <span>🍃</span>
            </div>

            <h2 
              className="font-serif" 
              style={{ 
                fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', 
                color: 'var(--matcha-deep)',
                fontWeight: 800,
                marginBottom: '14px',
                lineHeight: 1.2
              }}
            >
              Khám Phá Các <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Site Chuyên Biệt</span> Của Thảo Liên
            </h2>

            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65 }}>
              Mỗi danh mục trên thanh điều hướng là một không gian trải nghiệm hoàn chỉnh. Nhấp vào bất kỳ mục nào để bước vào thế giới riêng!
            </p>
          </div>

          {/* 5 Distinct Sub-Site Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}
          >
            {subSites.map((site, index) => {
              const isPink = site.accent === 'pink';
              return (
                <div
                  key={site.id}
                  onClick={() => {
                    onNavigate(site.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={isPink ? "polaroid-frame-pink" : "polaroid-frame"}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '24px',
                    border: `1.5px solid ${isPink ? 'rgba(255, 117, 151, 0.35)' : 'rgba(85, 122, 70, 0.35)'}`,
                    boxShadow: isPink 
                      ? '0 15px 35px -5px rgba(216, 78, 116, 0.14)' 
                      : '0 15px 35px -5px rgba(85, 122, 70, 0.14)',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.borderColor = isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = isPink ? 'rgba(255, 117, 151, 0.35)' : 'rgba(85, 122, 70, 0.35)';
                  }}
                >
                  {/* Washi Tape Accent */}
                  <div className={isPink ? "washi-tape-pink" : "washi-tape-matcha"} style={{ top: '-12px' }} />

                  {/* Thumbnail Image Header */}
                  <div 
                    style={{
                      height: '160px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      marginBottom: '16px',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={site.previewImg} 
                      alt={site.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      {site.badge}
                    </div>

                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                      }}
                    >
                      {site.icon}
                    </div>
                  </div>

                  {/* Title & English Subtitle */}
                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)', letterSpacing: '0.8px' }}>
                      SITE 0{index + 1} ⋆ {site.englishTitle.toUpperCase()}
                    </div>
                    <h3 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '2px' }}>
                      {site.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '20px', flex: 1 }}>
                    {site.desc}
                  </p>

                  {/* Action Link */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: `1px dashed ${isPink ? 'rgba(255, 117, 151, 0.25)' : 'rgba(85, 122, 70, 0.25)'}`,
                      paddingTop: '14px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)'
                    }}
                  >
                    <span>Vào Site Này</span>
                    <span style={{ fontSize: '1rem', transition: 'transform 0.2s' }}>➜</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Spotlight Duo (1 Top Reel & 1 Photobooth Preview) */}
      <section 
        style={{
          padding: '70px 24px 80px',
          backgroundColor: '#FFFFFF',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left: Featured Video Reel Preview */}
            <div 
              style={{
                background: 'var(--matcha-cream)',
                borderRadius: '32px',
                padding: '36px 30px',
                border: '1.5px solid var(--border-matcha)',
                position: 'relative'
              }}
            >
              <div className="washi-tape-matcha" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>🎬</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--matcha-leaf)', letterSpacing: '1px' }}>
                  FEATURED REEL TRÊN 2.4M VIEWS
                </span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--matcha-deep)', fontWeight: 800, marginBottom: '14px' }}>
                {featuredReel.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                Khám phá bản giao hưởng xanh ngắt tại Rừng Tràm Trà Sư. Góc quay dọc chuẩn điện ảnh đưa người xem hòa mình vào vẻ đẹp phương Nam.
              </p>

              {/* Clickable Reel Card with Preview */}
              <div 
                onClick={() => onSelectReel(featuredReel)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '16 / 9',
                  boxShadow: '0 12px 30px rgba(47, 79, 36, 0.2)'
                }}
              >
                <img 
                  src={featuredReel.coverImage} 
                  alt={featuredReel.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div 
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--matcha-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
                    }}
                  >
                    ▶
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                  📍 {featuredReel.location}
                </span>
                <button
                  onClick={() => onNavigate('video-reels')}
                  className="btn-matcha-primary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Xem Toàn Bộ 4 Reels ➜
                </button>
              </div>
            </div>

            {/* Right: Featured Korean Photobooth Preview */}
            <div 
              style={{
                background: 'var(--pink-soft)',
                borderRadius: '32px',
                padding: '36px 30px',
                border: '1.5px solid var(--border-pink)',
                position: 'relative'
              }}
            >
              <div className="washi-tape-pink" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.2rem' }}>🎀</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
                  KOREAN LIFE4CUTS PHOTOBOOTH
                </span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--pink-deep)', fontWeight: 800, marginBottom: '14px' }}>
                Nhật Ký Ảnh Dạo Chơi Cùng Thiên Nhiên
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
                Bộ 4 ảnh photobooth phong cách Hàn Quốc lưu giữ nét thanh xuân tươi vui giữa sắc xanh bạt ngàn và ánh nắng cao nguyên.
              </p>

              {/* Photobooth 4-photo strip row */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  background: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(216, 78, 116, 0.15)'
                }}
              >
                {featuredPhotobooth.photos.map((imgUrl, i) => (
                  <div 
                    key={i}
                    onClick={() => onSelectPhoto({ url: imgUrl, caption: featuredPhotobooth.caption, location: featuredPhotobooth.location })}
                    style={{
                      aspectRatio: '3 / 4',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer'
                    }}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Photobooth ${i}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pink-deep)' }}>
                  {featuredPhotobooth.tag}
                </span>
                <button
                  onClick={() => onNavigate('photo-diary')}
                  className="btn-cute-pink"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Xem 29 Ảnh Gallery ➜
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Aesthetic & Philosophy Banner */}
      <section 
        style={{
          padding: '60px 24px',
          background: 'radial-gradient(circle at 50% 50%, #FFF5F8 0%, #F5FAF3 100%)',
          borderTop: '1px solid var(--border-pink)',
          borderBottom: '1px solid var(--border-matcha)',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '14px' }}>🍃 ⋆ ˚｡⋆ ୨୧ ⋆ ˚｡⋆ 🌸</div>
          <blockquote 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', 
              fontStyle: 'italic', 
              color: 'var(--text-dark)', 
              lineHeight: 1.45,
              marginBottom: '16px' 
            }}
          >
            "{profileInfo.quote}"
          </blockquote>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-soft)', fontWeight: 600 }}>
            — Thảo Liên Lê · Creative Marketing Strategist & Visual Storyteller
          </p>
        </div>
      </section>
    </div>
  );
};
