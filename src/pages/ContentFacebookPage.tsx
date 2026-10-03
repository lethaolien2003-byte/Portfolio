import React, { useState } from 'react';
import { NavPage, FacebookBrandShowcase, FacebookReel } from '../types/portfolio.ts';
import { facebookContentBrands } from '../data/facebookContentData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ContentFacebookPageProps {
  onNavigate: (page: NavPage) => void;
}

export const ContentFacebookPage: React.FC<ContentFacebookPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [selectedReel, setSelectedReel] = useState<FacebookReel | null>(null);

  return (
    <div className="content-facebook-page" style={{ paddingTop: '95px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. HERO BANNER (Gọn gàng, giảm khoảng trống, không badge/mô tả thừa) */}
      <section 
        style={{
          padding: '24px 20px 22px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.7) 0%, rgba(242, 248, 240, 0.45) 100%)',
          borderBottom: '1.5px solid var(--border-pink)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', marginBottom: '10px' }}>
            <button 
              onClick={() => onNavigate('home')}
              style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
            >
              {t('Trang Chủ')}
            </button>
            <span style={{ color: 'var(--pink-deep)' }}>›</span>
            <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>{t('Content Facebook')}</span>
          </div>

          <h1 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 800, 
              color: 'var(--text-dark)',
              lineHeight: 1.25,
              margin: 0
            }}
          >
            {t('Sáng Tạo')} <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>{t('Content Facebook')}</span> {t('Thực Chiến')}
          </h1>
        </div>
      </section>

      {/* 2. BRANDS SHOWCASE SECTION */}
      <section style={{ padding: '34px 20px 70px', backgroundColor: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {facebookContentBrands.map((brand) => (
            <BrandSection 
              key={brand.id}
              brand={brand}
              onSelectReel={(r) => setSelectedReel(r)}
            />
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE FACEBOOK VIDEO MODAL */}
      {selectedReel && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedReel(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              backgroundColor: '#1E2024',
              borderRadius: '24px',
              padding: '16px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              border: '1.5px solid rgba(255,255,255,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.1rem' }}>🎬</span>
                <span style={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 800 }}>
                  Facebook Reel Viewer
                </span>
              </div>
              <button
                onClick={() => setSelectedReel(null)}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            {/* Facebook Video Iframe Player */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9 / 16',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#000000'
              }}
            >
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(selectedReel.url)}&show_text=false&width=360`}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={selectedReel.title}
              />
            </div>

            {/* Video Caption & External Link */}
            <div style={{ padding: '4px 6px' }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 700, margin: '0 0 6px', lineHeight: 1.4 }}>
                {selectedReel.title}
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', margin: '0 0 12px', lineHeight: 1.5 }}>
                {selectedReel.description}
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={selectedReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    background: '#1877F2',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    padding: '9px 16px',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Mở xem trên Facebook</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// BRAND SECTION COMPONENT
// ============================================================================
interface BrandSectionProps {
  brand: FacebookBrandShowcase;
  onSelectReel: (reel: FacebookReel) => void;
}

const BrandSection: React.FC<BrandSectionProps> = ({ brand, onSelectReel }) => {
  const { t } = useLanguage();
  const isPink = brand.colorScheme === 'pink';

  return (
    <article 
      id={brand.id}
      className="fb-brand-card"
      style={{
        background: '#FFFFFF',
        borderRadius: '26px',
        padding: '36px 32px',
        border: `1.5px solid ${isPink ? 'rgba(255, 117, 151, 0.28)' : 'rgba(85, 122, 70, 0.22)'}`,
        boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.05)',
        position: 'relative'
      }}
    >
      {/* Brand Header */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}
      >
        {/* Brand Circular Logo */}
        <div 
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
            flexShrink: 0,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2px'
          }}
        >
          <img 
            src={brand.logo} 
            alt={brand.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>

        {/* Brand Info */}
        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span 
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                background: isPink ? 'var(--pink-soft)' : 'var(--matcha-soft)',
                padding: '3px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {brand.category}
            </span>
          </div>
          <h2 
            className="font-serif"
            style={{
              fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              lineHeight: 1.2,
              margin: 0
            }}
          >
            {brand.name}
          </h2>
        </div>
      </div>

      {/* Vai trò của Tali (Trình bày to rõ, sạch sẽ dạng text liên kết, không bọc ô) */}
      <div style={{ fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '14px' }}>
        <span style={{ fontWeight: 800, color: 'var(--text-dark)', marginRight: '6px' }}>
          {t('Vai trò của Tali:')}
        </span>
        <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>
          {brand.roles.map(r => t(r)).join(' • ')}
        </span>
      </div>

      {/* Định hướng nội dung (Chỉ hiển thị khi có chiến lược) */}
      {brand.strategy && brand.strategy.trim() !== '' && (
        <div 
          style={{
            borderLeft: `3.5px solid ${isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)'}`,
            paddingLeft: '16px',
            paddingTop: '3px',
            paddingBottom: '3px',
            marginBottom: '32px'
          }}
        >
          <div 
            style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              color: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)',
              marginBottom: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}
          >
            {t('Định hướng hình ảnh & Chiến lược nội dung')}
          </div>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-dark)', lineHeight: 1.7, margin: 0 }}>
            {t(brand.strategy)}
          </p>
        </div>
      )}

      {/* CONTENT GROUP 1: VIDEO REELS (9:16 Cards - 2 videos/hàng trên điện thoại) */}
      {brand.reels.length > 0 && (
        <div style={{ marginBottom: brand.posts.length > 0 ? '40px' : '0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{ fontSize: '1.2rem' }}>🎬</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
              {t('Video Reels')}
            </h3>
          </div>

          <div 
            className="fb-reels-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            {brand.reels.map((reel) => (
              <FacebookReelCard 
                key={reel.id} 
                reel={reel} 
                isPink={isPink}
                onSelect={() => onSelectReel(reel)}
              />
            ))}
          </div>
        </div>
      )}

      {/* CONTENT GROUP 2: FACEBOOK POSTS (2 bài đăng/hàng trên điện thoại) */}
      {brand.posts.length > 0 && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{ fontSize: '1.2rem' }}>📝</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
              {t('Bài viết Fanpage')}
            </h3>
          </div>

          <div 
            className="fb-posts-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px'
            }}
          >
            {brand.posts.map((post) => (
              <FacebookPostCard 
                key={post.id} 
                post={post} 
                brandLogo={brand.logo}
                brandName={brand.name}
                isPink={isPink}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

// ============================================================================
// FACEBOOK REEL CARD (9:16 VERTICAL PREVIEW - KHÔNG CÓ TAG THỪA)
// ============================================================================
interface FacebookReelCardProps {
  reel: FacebookReel;
  isPink: boolean;
  onSelect: () => void;
}

const FacebookReelCard: React.FC<FacebookReelCardProps> = ({ reel, isPink, onSelect }) => {
  return (
    <div
      className="fb-reel-card"
      style={{
        background: '#FFFFFF',
        borderRadius: '18px',
        border: '1.5px solid rgba(85, 122, 70, 0.15)',
        overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
        e.currentTarget.style.borderColor = isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.05)';
        e.currentTarget.style.borderColor = 'rgba(85, 122, 70, 0.15)';
      }}
    >
      {/* 9:14 Thumbnail Container (Xóa sạch các tag về loại video và số lượt xem trên đầu ảnh) */}
      <div 
        onClick={onSelect}
        style={{
          position: 'relative',
          aspectRatio: '9 / 14',
          overflow: 'hidden',
          backgroundColor: '#0F1012',
          cursor: 'pointer'
        }}
      >
        <img 
          src={reel.thumbnail} 
          alt={reel.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
          }}
        />

        {/* Center Play Button Overlay */}
        <div 
          className="fb-reel-play-btn"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(24, 119, 242, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '1.25rem',
            paddingLeft: '3px',
            boxShadow: '0 4px 18px rgba(24, 119, 242, 0.5)',
            transition: 'transform 0.2s ease'
          }}
        >
          ▶
        </div>
      </div>

      {/* Info & External Link */}
      <div className="fb-reel-info" style={{ padding: '14px', display: 'flex', flexDirection: 'column', flex: 1, gap: '10px' }}>
        <h4 
          className="fb-reel-title"
          style={{
            fontSize: '0.86rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.45,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.4em'
          }}
          title={reel.title}
        >
          {reel.title}
        </h4>

        {/* Action Buttons */}
        <div className="fb-reel-actions" style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
          <button
            onClick={onSelect}
            style={{
              flex: 1,
              background: isPink ? 'var(--pink-soft)' : 'var(--matcha-soft)',
              color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
              border: `1px solid ${isPink ? 'var(--border-pink)' : 'var(--border-matcha)'}`,
              padding: '7px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Xem video ▶
          </button>
          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#F0F2F5',
              color: 'var(--text-dark)',
              border: '1px solid rgba(0,0,0,0.08)',
              padding: '7px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
            title="Mở link bài Reel trên Facebook"
          >
            <span>Facebook</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// FACEBOOK POST CARD (CHÈN ĐẦY ĐỦ ẢNH THẬT, TRÌNH BÀY BÀI VIẾT ĐẸP MẮT)
// ============================================================================
interface FacebookPostCardProps {
  post: {
    id: string;
    url: string;
    title: string;
    excerpt: string;
    image?: string;
    date?: string;
  };
  brandLogo: string;
  brandName: string;
  isPink: boolean;
}

const FacebookPostCard: React.FC<FacebookPostCardProps> = ({ post, brandLogo, brandName, isPink }) => {
  return (
    <div
      className="fb-post-card"
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        border: '1.5px solid rgba(85, 122, 70, 0.15)',
        overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.09)';
        e.currentTarget.style.borderColor = isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.04)';
        e.currentTarget.style.borderColor = 'rgba(85, 122, 70, 0.15)';
      }}
    >
      {/* Post Author Header */}
      <div className="fb-post-author" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 18px 10px' }}>
        <img 
          className="fb-post-author-img"
          src={brandLogo} 
          alt={brandName}
          style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'contain', border: '1px solid rgba(0,0,0,0.08)' }} 
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="fb-post-author-name" style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {brandName}
            </span>
            <span style={{ color: '#1877F2', fontSize: '0.85rem' }} title="Verified Page">✓</span>
          </div>
          <span className="fb-post-author-sub" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            Fanpage Official • 🌐 Công khai
          </span>
        </div>
      </div>

      {/* Post Content Excerpt */}
      <div className="fb-post-content" style={{ padding: '0 18px 12px' }}>
        <h4 className="fb-post-title" style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0 0 6px', lineHeight: 1.4 }}>
          {post.title}
        </h4>
        <p className="fb-post-excerpt" style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
          {post.excerpt}
        </p>
      </div>

      {/* CHÈN ẢNH BÀI POST RÕ RÀNG, ĐẦY ĐỦ */}
      {post.image && (
        <a 
          className="fb-post-img-wrap"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#F0F2F5',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            cursor: 'pointer'
          }}
          title="Bấm để xem ảnh gốc trên bài viết Facebook"
        >
          <img 
            src={post.image} 
            alt={post.title}
            style={{
              width: '100%',
              maxHeight: '380px',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </a>
      )}

      {/* Action CTA */}
      <div className="fb-post-cta" style={{ padding: '12px 18px', marginTop: 'auto', background: '#FAFAFA' }}>
        <a 
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: '#FFFFFF',
            border: '1px solid #1877F2',
            color: '#1877F2',
            padding: '8px 14px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 700,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1877F2';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.color = '#1877F2';
          }}
        >
          <span>Xem bài viết trên Fanpage Facebook</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
};

// ============================================================================
// MOBILE STYLING: 2 VIDEOS HOẶC 2 BÀI ĐĂNG TRÊN 1 HÀNG
// ============================================================================
const mobileStyles = `
  @media (max-width: 768px) {
    .fb-brand-card {
      padding: 18px 12px !important;
      border-radius: 18px !important;
    }
    .fb-reels-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 10px !important;
    }
    .fb-posts-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 10px !important;
    }
    /* Reel Card Mobile */
    .fb-reel-card {
      border-radius: 12px !important;
    }
    .fb-reel-play-btn {
      width: 34px !important;
      height: 34px !important;
      font-size: 0.95rem !important;
    }
    .fb-reel-info {
      padding: 8px 8px 10px !important;
      gap: 6px !important;
    }
    .fb-reel-title {
      font-size: 0.72rem !important;
      line-height: 1.35 !important;
      min-height: 2.2em !important;
    }
    .fb-reel-actions {
      gap: 4px !important;
    }
    .fb-reel-actions button, .fb-reel-actions a {
      padding: 6px 3px !important;
      font-size: 0.66rem !important;
    }
    /* Post Card Mobile */
    .fb-post-card {
      border-radius: 12px !important;
    }
    .fb-post-author {
      padding: 8px 8px 6px !important;
      gap: 6px !important;
    }
    .fb-post-author-img {
      width: 24px !important;
      height: 24px !important;
    }
    .fb-post-author-name {
      font-size: 0.72rem !important;
    }
    .fb-post-author-sub {
      font-size: 0.58rem !important;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .fb-post-content {
      padding: 0 8px 6px !important;
    }
    .fb-post-title {
      font-size: 0.74rem !important;
      line-height: 1.35 !important;
      margin-bottom: 4px !important;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 2.2em !important;
    }
    .fb-post-excerpt {
      font-size: 0.66rem !important;
      line-height: 1.4 !important;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .fb-post-img-wrap img {
      max-height: 140px !important;
    }
    .fb-post-cta {
      padding: 8px 8px !important;
    }
    .fb-post-cta a {
      padding: 5px 6px !important;
      font-size: 0.66rem !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('fb-mobile-styles')) {
  const styleEl = document.createElement('style');
  styleEl.id = 'fb-mobile-styles';
  styleEl.innerHTML = mobileStyles;
  document.head.appendChild(styleEl);
}

