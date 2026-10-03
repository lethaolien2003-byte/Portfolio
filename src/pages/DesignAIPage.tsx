import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface DesignAIPageProps {
  onNavigate: (page: NavPage) => void;
}

interface DesignVisualItem {
  id: string;
  title: string;
  image: string;
  aspect?: string;
}

export const DesignAIPage: React.FC<DesignAIPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const visualItems: DesignVisualItem[] = [
    {
      id: 'ai-holiday',
      title: 'Thông Báo Lịch Nghỉ Lễ 30/4 & 1/5',
      image: '/design-ai/ai-holiday.jpg',
      aspect: '1 / 1'
    },
    {
      id: 'ai-banner',
      title: 'Banner Dịch Vụ Du Lịch & Khách Sạn',
      image: '/design-ai/ai-banner.png',
      aspect: '16 / 7'
    },
    {
      id: 'ai-national-day',
      title: 'Poster Chào Mừng Quốc Khánh 2/9',
      image: '/design-ai/ai-national-day.jpg',
      aspect: '3 / 4'
    },
    {
      id: 'ai-india-visa',
      title: 'Visual Quảng Bá Visa Ấn Độ',
      image: '/design-ai/ai-india-visa.png',
      aspect: '4 / 3'
    },
    {
      id: 'ai-esim',
      title: 'Banner Giới Thiệu eSIM Vietnam Du Lịch',
      image: '/design-ai/ai-esim.png',
      aspect: '16 / 10'
    },
    {
      id: 'ai-hotel-promo',
      title: 'Ưu Đãi 50% Khách Sạn Thương Gia',
      image: '/design-ai/ai-hotel-promo.png',
      aspect: '1 / 1'
    }
  ];

  return (
    <div className="design-ai-page" style={{ paddingTop: '96px', minHeight: '100vh', background: '#FAFBFC' }}>
      {/* 1. HERO HEADER - THOÁNG ĐÃNG, LIỀN MẠCH, KHÔNG CHIA Ô */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '36px 20px 24px', textAlign: 'center' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', marginBottom: '12px' }}>
          <button 
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
          >
            {t('Trang Chủ')}
          </button>
          <span style={{ color: 'var(--pink-deep)' }}>›</span>
          <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>{t('Design AI')}</span>
        </div>

        <h1 
          className="font-serif" 
          style={{ 
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: '16px'
          }}
        >
          {t('Ứng Dụng AI Vào Marketing & Design')}
        </h1>

        {/* User's Exact Content Intro - Trình bày tự nhiên, không ô hộp rườm rà */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.75, marginBottom: '12px' }}>
            {t('Mình sử dụng AI như một trợ lý trong công việc Marketing, giúp rút ngắn thời gian triển khai và tối ưu nguồn lực nhưng vẫn đảm bảo chất lượng đầu ra.')}
          </p>
          <p style={{ fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.75, margin: 0 }}>
            {t('Từ thiết kế Social Visual chỉ trong khoảng 5 phút, xây dựng Company Profile/Portfolio nhanh chóng, đến tạo video và các ấn phẩm truyền thông bằng AI. Nhờ đó, nhiều ý tưởng có thể được thử nghiệm và đưa vào thực tế nhanh hơn, đặc biệt phù hợp với môi trường SMEs có nguồn lực giới hạn.')}
          </p>
        </div>
      </section>

      {/* 2. SHOWCASE: CÁC ẤN PHẨM SOCIAL VISUAL BẰNG AI */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '16px 20px 40px' }}>
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0 0 4px', fontFamily: 'var(--font-serif)' }}>
            {t('Ấn Phẩm Thiết Kế & Visual Truyền Thông')}
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-medium)', margin: 0 }}>
            {t('Bấm vào ảnh để phóng to chi tiết.')}
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '18px'
          }}
        >
          {visualItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ url: item.image, title: t(item.title) })}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(85, 122, 70, 0.18)',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(85, 122, 70, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Image Preview Container */}
              <div 
                style={{
                  backgroundColor: '#F8F9FA',
                  aspectRatio: item.aspect || '4 / 3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img 
                  src={item.image} 
                  alt={t(item.title)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.25s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--matcha-deep)'
                  }}
                >
                  {t('Phóng to ⤢')}
                </span>
              </div>

              {/* Title Bar */}
              <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>
                  {t(item.title)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MỤC COMPANY PROFILE - TỐI ƯU HÓA HOÀN TOÀN CHO ĐIỆN THOẠI & MÁY TÍNH */}
      <section 
        id="company-profile"
        className="company-profile-section"
        style={{ 
          maxWidth: '1120px', 
          margin: '0 auto', 
          padding: '20px 20px 70px',
          scrollMarginTop: '92px'
        }}
      >
        <div 
          className="company-profile-title-bar"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '16px', 
            flexWrap: 'wrap', 
            gap: '12px' 
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '1.25rem' }}>📄</span>
              <span 
                style={{ 
                  fontSize: '0.74rem', 
                  fontWeight: 700, 
                  color: 'var(--matcha-deep)',
                  background: 'var(--matcha-soft)',
                  padding: '2px 10px',
                  borderRadius: '999px'
                }}
              >
                {t('14 Trang · PDF Nét Chuẩn')}
              </span>
            </div>
            <h2 
              className="company-profile-heading"
              style={{ 
                fontSize: 'clamp(1.25rem, 3.2vw, 1.6rem)', 
                fontWeight: 800, 
                color: 'var(--text-dark)', 
                margin: 0, 
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.25
              }}
            >
              {t('Company Profile - HappyBook OTA')}
            </h2>
          </div>

          {/* Action Buttons: Mở toàn màn hình xem nét nhất trên điện thoại & Tải về */}
          <div className="company-profile-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="/design-ai/HAPPYBOOK.PROFILE.VN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-matcha-primary company-profile-view-btn"
              style={{
                textDecoration: 'none',
                padding: '9px 20px',
                fontSize: '0.86rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>🚀 {t('Mở Xem Toàn Màn Hình')}</span>
            </a>

            <a
              href="/design-ai/HAPPYBOOK.PROFILE.VN.pdf"
              download="HAPPYBOOK.PROFILE.VN.pdf"
              className="btn-glass-pill company-profile-download-btn"
              style={{
                textDecoration: 'none',
                padding: '8px 18px',
                fontSize: '0.84rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>⬇ {t('Tải Bản PDF')}</span>
            </a>
          </div>
        </div>

        {/* Helpful Tip Banner for Mobile */}
        <div 
          className="mobile-pdf-tip-banner"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 240, 244, 0.9) 0%, rgba(232, 242, 228, 0.9) 100%)',
            border: '1px solid var(--border-matcha)',
            borderRadius: '12px',
            padding: '10px 14px',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 8px rgba(85, 122, 70, 0.08)'
          }}
        >
          <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>💡</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dark)', lineHeight: 1.45 }}>
            {t('Mẹo xem trên điện thoại: Bấm "Mở Xem Toàn Màn Hình" để lật xem từng trang mượt mà và zoom phóng to chữ rõ nét nhất.')}
          </span>
        </div>

        {/* Khung nhúng Profile trực tiếp vào trang */}
        <div 
          className="company-profile-frame-wrap"
          style={{
            width: '100%',
            height: '750px',
            backgroundColor: '#323639',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(85, 122, 70, 0.25)',
            position: 'relative'
          }}
        >
          <iframe
            src="/design-ai/HAPPYBOOK.PROFILE.VN.pdf#toolbar=1&navpanes=0&view=FitH"
            title="Company Profile HappyBook"
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none', 
              display: 'block' 
            }}
          />
        </div>

        {/* Quick mobile bottom full-screen button */}
        <div className="mobile-pdf-bottom-bar" style={{ marginTop: '14px', textAlign: 'center' }}>
          <a
            href="/design-ai/HAPPYBOOK.PROFILE.VN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-matcha-primary"
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              padding: '11px 20px', 
              fontSize: '0.9rem',
              boxSizing: 'border-box'
            }}
          >
            <span>📖 {t('Mở Đọc Trọn Bộ 14 Trang (Toàn Màn Hình)')}</span>
          </a>
        </div>
      </section>

      {/* LIGHTBOX MODAL CHO ẢNH */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '94vw',
              maxHeight: '94vh',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: '#F0F2F5',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ overflow: 'auto', maxHeight: 'calc(94vh - 70px)', textAlign: 'center' }}>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                style={{ maxWidth: '100%', maxHeight: 'calc(94vh - 90px)', height: 'auto', display: 'inline-block' }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .design-ai-page {
            padding-top: 92px !important;
          }
          .company-profile-section {
            padding: 14px 14px 44px !important;
            scroll-margin-top: 88px !important;
          }
          .company-profile-title-bar {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .company-profile-heading {
            font-size: 1.25rem !important;
            line-height: 1.25 !important;
          }
          .company-profile-actions {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
          .company-profile-actions a {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
            padding: 10px 16px !important;
          }
          .company-profile-frame-wrap {
            height: 480px !important;
            border-radius: 12px !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-pdf-tip-banner {
            display: none !important;
          }
          .mobile-pdf-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
