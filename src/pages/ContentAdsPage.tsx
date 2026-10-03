import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ContentAdsPageProps {
  onNavigate: (page: NavPage) => void;
}

interface AdsPostItem {
  id: string;
  brandName: string;
  brandLogo: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

export const ContentAdsPage: React.FC<ContentAdsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const adsPosts: AdsPostItem[] = [
    {
      id: 'ads-1',
      brandName: 'CiLove Bridal',
      brandLogo: '/brands/cilove.jpg',
      title: 'NEW ARRIVAL - Váy Cưới Hot Trend',
      excerpt: 'Thiết kế độc đáo, phá cách phù hợp với các tiệc cưới sang trọng. Điểm nhấn hoa 3D nổi ở phần thân áo.',
      image: '/ads/ads-post-1.jpg',
      url: 'https://www.facebook.com/cilovebridal/posts/pfbid02as2i82AGzZ7m4E2kvFyg2FG6EpnhKBZE6F3A8kTrh6p93FuTidN1m7wcoquKKo9Ul'
    },
    {
      id: 'ads-2',
      brandName: 'CiLove Bridal',
      brandLogo: '/brands/cilove.jpg',
      title: 'Mẫu Váy Tiệc Đang Lên Xu Hướng - Chic Dress',
      excerpt: 'Chẳng cần hóp bụng hay dùng đai nịt, Chic Dress với phần hông cách điệu xếp ly che khéo khuyết điểm bụng.',
      image: '/ads/ads-post-2.jpg',
      url: 'https://www.facebook.com/cilovebridal/posts/pfbid0ouK2wxEqDswmymu49kj2JeRPaJHr7AsfJn9Es4U1wsFv2QCPVM53rURqKBQNQj9gl'
    },
    {
      id: 'ads-3',
      brandName: 'HappyBook Du Thuyền',
      brandLogo: '/brands/happybook.jpg',
      title: 'Booking Disney Cruise Singapore Giá Tốt',
      excerpt: 'Một chuyến Disney Cruise đáng nhớ: trọn gói từ tư vấn lịch trình, chọn cabin đến hỗ trợ thủ tục.',
      image: '/ads/ads-post-3.jpg',
      url: 'https://www.facebook.com/share/p/1CvwYn3wGG/'
    },
    {
      id: 'ads-4',
      brandName: 'Yến sào Yến Huỳnh',
      brandLogo: '/brands/yen-huynh.jpg',
      title: 'Set Quà Tết 2026 Chỉ Từ 289K',
      excerpt: 'Yến Sào Thượng Hạng - Khởi Xuân An Lành. Món quà vừa sang trọng, vừa tốt cho sức khỏe lại hợp túi tiền.',
      image: '/ads/ads-post-4.jpg',
      url: 'https://www.facebook.com/share/p/1EqiDXFRMW/'
    }
  ];

  return (
    <div className="content-ads-page" style={{ paddingTop: '80px', minHeight: '100vh', background: '#FAFBFC' }}>
      {/* 1. HERO BANNER - GỌN GÀNG, LIỀN MẠCH, KHÔNG CHIA Ô RỐI RẮM */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '36px 20px 24px', textAlign: 'center' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', marginBottom: '12px' }}>
          <button 
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
          >
            {t('Trang Chủ')}
          </button>
          <span style={{ color: 'var(--pink-deep)' }}>›</span>
          <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>{t('Content chạy Ads')}</span>
        </div>

        <h1 
          className="font-serif" 
          style={{ 
            fontSize: 'clamp(2rem, 3.8vw, 3rem)', 
            fontWeight: 800, 
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            margin: 0
          }}
        >
          {t('Một Campaign Ads Thành Công Đến Từ 2 Yếu Tố')}
        </h1>
      </section>

      {/* 2. KHU VỰC 70% - CONTENT */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '16px 20px 32px' }}>
        {/* Header section 70% */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '1.3rem', color: 'var(--pink-deep)' }}>🎀</span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--pink-deep)', margin: 0 }}>
              {t('70% — CONTENT')}
            </h2>
          </div>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-dark)', lineHeight: 1.6, margin: '0 0 6px' }}>
            {t('Content cần đánh trúng insight của khách hàng mục tiêu, đủ thu hút để họ dừng lại và quan trọng hơn là thúc đẩy họ ra quyết định.')}
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', margin: 0 }}>
            {t('Vai trò của Tali: Nghiên cứu content Ads của đối thủ • Phân tích hành vi & insight khách hàng • Tìm angle • Viết kịch bản và caption quảng cáo.')}
          </p>
        </div>

        {/* 4 Cards bài viết - Gọn gàng, ảnh to đẹp, link trực tiếp, 2 bài/hàng trên mobile */}
        <div 
          className="ads-posts-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '18px'
          }}
        >
          {adsPosts.map((post) => (
            <div
              key={post.id}
              className="ads-post-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(255, 117, 151, 0.22)',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(216, 78, 116, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Image Preview - Click to zoom */}
              <div 
                style={{ aspectRatio: '1 / 1', backgroundColor: '#F0F2F5', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setSelectedImage({ url: post.image, title: t(post.title) })}
              >
                <img 
                  src={post.image} 
                  alt={t(post.title)} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.25s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Content info */}
              <div className="ads-post-info" style={{ padding: '14px 14px 12px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <img 
                    className="ads-post-logo"
                    src={post.brandLogo} 
                    alt={post.brandName} 
                    style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'contain' }}
                  />
                  <span className="ads-post-brand" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>{post.brandName}</span>
                </div>

                <h3 className="ads-post-title" style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, lineHeight: 1.35 }}>
                  {t(post.title)}
                </h3>
                <p className="ads-post-excerpt" style={{ fontSize: '0.82rem', color: 'var(--text-medium)', lineHeight: 1.5, margin: 0 }}>
                  {t(post.excerpt)}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <a
                    className="ads-post-link"
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#1877F2',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{t('Xem bài chạy Ads trên Facebook')}</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. KHU VỰC 30% - ADS SETUP & OPTIMIZATION */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '16px 20px 60px' }}>
        {/* Header section 30% */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '1.3rem', color: 'var(--matcha-deep)' }}>⚡</span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--matcha-deep)', margin: 0 }}>
              {t('30% — ADS SETUP & OPTIMIZATION')}
            </h2>
          </div>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-dark)', lineHeight: 1.6, margin: '0 0 6px' }}>
            {t('Một content tốt vẫn cần được đưa đến đúng người, đúng nơi với ngân sách phù hợp. Việc setup và tối ưu Ads giúp content tiếp cận đúng tệp khách hàng và tạo ra kết quả với chi phí hợp lý.')}
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', margin: 0 }}>
            {t('Vai trò của Tali: Xác định hướng target • Setup campaign • Phân bổ ngân sách • Theo dõi chỉ số và tối ưu dựa trên kết quả thực tế.')}
          </p>
        </div>

        {/* Ads từng set - 2 ảnh kết quả hiển thị rõ nét */}
        <div style={{ marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', margin: '0 0 4px' }}>
            {t('Ads từng set (Báo cáo chỉ số & Hiệu quả chiến dịch)')}
          </h3>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-medium)', margin: 0 }}>
            {t('Ảnh chụp thực tế từ Ads Manager. Bấm vào ảnh để phóng to chi tiết.')}
          </p>
        </div>

        <div 
          className="ads-reports-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '18px'
          }}
        >
          {[
            { id: 'set-1', label: 'Báo Cáo Set #1', title: 'Báo cáo chỉ số Ads Campaign Set 1', image: '/ads/ads-result-1.png' },
            { id: 'set-2', label: 'Báo Cáo Set #2', title: 'Báo cáo chỉ số Ads Campaign Set 2', image: '/ads/ads-result-2.png' }
          ].map((set) => (
            <div 
              key={set.id}
              onClick={() => setSelectedImage({ url: set.image, title: t(set.title) })}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(85, 122, 70, 0.18)',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
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
              <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                  {t(set.label)}
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--matcha-deep)', fontWeight: 700 }}>
                  {t('Phóng to ⤢')}
                </span>
              </div>
              <div style={{ backgroundColor: '#F8F9FA', padding: '6px' }}>
                <img 
                  src={set.image} 
                  alt={t(set.title)} 
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
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
            <div style={{ overflow: 'auto', maxHeight: 'calc(94vh - 70px)' }}>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .ads-posts-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .ads-reports-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .ads-post-card {
            border-radius: 12px !important;
          }
          .ads-post-info {
            padding: 8px 8px 10px !important;
            gap: 4px !important;
          }
          .ads-post-logo {
            width: 18px !important;
            height: 18px !important;
          }
          .ads-post-brand {
            font-size: 0.72rem !important;
          }
          .ads-post-title {
            font-size: 0.76rem !important;
            line-height: 1.35 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 2.2em !important;
          }
          .ads-post-excerpt {
            font-size: 0.66rem !important;
            line-height: 1.4 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .ads-post-link {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </div>
  );
};
