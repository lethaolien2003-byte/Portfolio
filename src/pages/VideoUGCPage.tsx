import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface VideoUGCPageProps {
  onNavigate: (page: NavPage) => void;
}

interface UGCVideoItem {
  id: string;
  title: string;
  originalFileName: string;
  videoSrc: string;
  description: string;
  colorScheme: 'pink' | 'matcha';
}

export const VideoUGCPage: React.FC<VideoUGCPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [activeVideoModal, setActiveVideoModal] = useState<UGCVideoItem | null>(null);

  const ugcVideos: UGCVideoItem[] = [
    {
      id: 'ugc-1',
      title: 'Thiết kế chưa có tên (1)',
      originalFileName: 'Thiết kế chưa có tên (1).mp4',
      videoSrc: '/ugc-videos/ugc-1.mp4',
      description: 'Trải nghiệm dịch vụ thực tế từ góc nhìn khách hàng, tạo độ tin cậy và gắn kết tự nhiên.',
      colorScheme: 'pink'
    },
    {
      id: 'ugc-2',
      title: 'Thiết kế chưa có tên',
      originalFileName: 'Thiết kế chưa có tên.mp4',
      videoSrc: '/ugc-videos/ugc-2.mp4',
      description: 'Quy trình tư vấn và chăm sóc khách hàng thân thiện, tự nhiên và gần gũi.',
      colorScheme: 'matcha'
    },
    {
      id: 'ugc-3',
      title: 'TIKTOK - KIM SÂM',
      originalFileName: 'TIKTOK - KIM SÂM.mp4',
      videoSrc: '/ugc-videos/ugc-3.mp4',
      description: 'Video review không gian và dịch vụ trực quan, truyền tải đúng thông điệp thương hiệu.',
      colorScheme: 'pink'
    },
    {
      id: 'ugc-4',
      title: 'v10025g50000cm8em0nog65gfg9nda20',
      originalFileName: 'v10025g50000cm8em0nog65gfg9nda20.mp4',
      videoSrc: '/ugc-videos/ugc-4.mp4',
      description: 'Góc nhìn chân thật từ Creator, kích thích tương tác và hỗ trợ thúc đẩy chuyển đổi.',
      colorScheme: 'matcha'
    }
  ];

  return (
    <div className="video-ugc-page" style={{ paddingTop: '95px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. HERO BANNER & GIỚI THIỆU UGC (Gọn gàng, loại bỏ khoảng cách thừa) */}
      <section 
        style={{
          padding: '30px 20px 22px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.7) 0%, rgba(242, 248, 240, 0.45) 100%)',
          borderBottom: '1.5px solid var(--border-pink)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', marginBottom: '10px' }}>
            <button 
              onClick={() => onNavigate('home')}
              style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
            >
              {t('Trang Chủ')}
            </button>
            <span style={{ color: 'var(--pink-deep)' }}>›</span>
            <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>{t('Video UGC')}</span>
          </div>

          {/* Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 18px',
              borderRadius: '999px',
              background: '#FFFFFF',
              border: '1.5px solid var(--border-pink)',
              boxShadow: '0 4px 15px rgba(255, 117, 151, 0.18)',
              marginBottom: '12px'
            }}
          >
            <span>🎬</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--pink-deep)', letterSpacing: '0.8px' }}>
              USER-GENERATED CONTENT · VIDEO MARKETING
            </span>
            <span>✨</span>
          </div>

          <h1 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 800, 
              color: 'var(--text-dark)',
              lineHeight: 1.25,
              marginBottom: '16px'
            }}
          >
            {t('Sáng Tạo Video UGC Thực Chiến')}
          </h1>

          {/* Đoạn giới thiệu chuẩn xác theo người dùng yêu cầu */}
          <div 
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '20px 26px',
              border: '1.5px solid rgba(85, 122, 70, 0.18)',
              boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.04)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <p style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: 1.7, margin: 0 }}>
              {t('UGC là nội dung được tạo từ góc nhìn của người dùng, mang lại cảm giác chân thật và gần gũi. Đây cũng là cách mình sử dụng để giúp thương hiệu tăng độ tin cậy, kết nối tự nhiên hơn với khách hàng và hỗ trợ chuyển đổi.')}
            </p>
            <div style={{ height: '1px', background: 'rgba(85, 122, 70, 0.12)' }} />
            <p style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: 1.7, margin: 0 }}>
              {t('Mình đảm nhận xuyên suốt quá trình từ lên ý tưởng, viết kịch bản, booking UGC Creator đến phối hợp quay và dựng video, đảm bảo nội dung vừa giữ được sự tự nhiên của người dùng, vừa truyền tải đúng thông điệp thương hiệu.')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. UGC VIDEOS SHOWCASE (Khoảng cách đã thu gọn, không còn bị trống) */}
      <section style={{ padding: '24px 20px 60px', backgroundColor: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h2 
              className="font-serif" 
              style={{ 
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', 
                fontWeight: 800, 
                color: 'var(--text-dark)', 
                margin: '0 0 6px' 
              }}
            >
              {t('Tuyển Tập Video UGC Nổi Bật')}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', margin: 0 }}>
              {t('Bấm trực tiếp vào video để phát hoặc xem toàn màn hình độ phân giải cao.')}
            </p>
          </div>

          {/* Grid 4 Videos (Cân đối 4 cột desktop hoặc 2 video/hàng trên mobile) */}
          <div 
            className="ugc-videos-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
              justifyContent: 'center'
            }}
          >
            {ugcVideos.map((item) => {
              const isPink = item.colorScheme === 'pink';
              return (
                <div
                  key={item.id}
                  className="ugc-video-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    border: `1.5px solid ${isPink ? 'rgba(255, 117, 151, 0.28)' : 'rgba(85, 122, 70, 0.22)'}`,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = isPink 
                      ? '0 14px 32px rgba(216, 78, 116, 0.15)' 
                      : '0 14px 32px rgba(85, 122, 70, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  {/* HTML5 Video Player Container (9:16 Aspect Ratio) */}
                  <div 
                    style={{
                      position: 'relative',
                      aspectRatio: '9 / 16',
                      backgroundColor: '#0F1012',
                      overflow: 'hidden'
                    }}
                  >
                    <video
                      src={item.videoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>

                  {/* Video Info (Sạch đẹp, không có tag thừa) */}
                  <div className="ugc-video-info" style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                    <h3 
                      className="ugc-video-title"
                      style={{ 
                        fontSize: '1rem', 
                        fontWeight: 800, 
                        color: 'var(--text-dark)', 
                        margin: 0,
                        lineHeight: 1.4
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="ugc-video-desc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                      {item.description}
                    </p>

                    <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                      <button
                        className="ugc-video-btn"
                        onClick={() => setActiveVideoModal(item)}
                        style={{
                          width: '100%',
                          background: isPink ? 'var(--pink-soft)' : 'var(--matcha-soft)',
                          color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                          border: `1px solid ${isPink ? 'var(--border-pink)' : 'var(--border-matcha)'}`,
                          padding: '8px 14px',
                          borderRadius: '10px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Xem màn hình lớn</span>
                        <span>⤢</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MODAL PHÓNG TO VIDEO UGC */}
      {activeVideoModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setActiveVideoModal(null)}
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.1rem' }}>🎬</span>
                <span style={{ fontSize: '0.92rem', fontWeight: 800 }}>
                  {activeVideoModal.title}
                </span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
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

            {/* Video Player */}
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
              <video
                src={activeVideoModal.videoSrc}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Description */}
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.84rem', margin: '4px 0 0', lineHeight: 1.5 }}>
              {activeVideoModal.description}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .ugc-videos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .ugc-video-card {
            border-radius: 14px !important;
          }
          .ugc-video-info {
            padding: 8px 8px 10px !important;
            gap: 5px !important;
          }
          .ugc-video-title {
            font-size: 0.76rem !important;
            line-height: 1.35 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 2.2em !important;
          }
          .ugc-video-desc {
            font-size: 0.66rem !important;
            line-height: 1.4 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .ugc-video-btn {
            padding: 6px 4px !important;
            font-size: 0.66rem !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};
