import React, { useState, useEffect } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { tiktokChannelsData, TikTokChannel, TikTokVideoItem } from '../data/tiktokChannelsData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface TikTokChannelsPageProps {
  onNavigate: (page: NavPage) => void;
}

export const TikTokChannelsPage: React.FC<TikTokChannelsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [activeChannelId, setActiveChannelId] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<TikTokVideoItem | null>(null);

  const filteredChannels = activeChannelId === 'all' 
    ? tiktokChannelsData 
    : tiktokChannelsData.filter(c => c.id === activeChannelId);

  // Close video modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="tiktok-channels-page" style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '70px' }}>
      {/* 1. HERO HEADER */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 28px', textAlign: 'center' }}>
        <h1 
          className="font-serif tiktok-hero-title" 
          style={{ 
            fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)', 
            fontWeight: 800, 
            color: 'var(--text-dark)', 
            lineHeight: 1.15,
            marginBottom: '20px' 
          }}
        >
          {t('Xây Kênh TikTok Từ Số 0')}
        </h1>

        {/* Quick Filter Channel Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveChannelId('all')}
            style={{
              padding: '7px 18px',
              borderRadius: '999px',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeChannelId === 'all' ? '1.5px solid var(--matcha-deep)' : '1px solid rgba(85, 122, 70, 0.2)',
              background: activeChannelId === 'all' ? 'var(--matcha-deep)' : '#FFFFFF',
              color: activeChannelId === 'all' ? '#FFFFFF' : 'var(--text-dark)',
              transition: 'all 0.2s ease',
              boxShadow: activeChannelId === 'all' ? '0 4px 12px rgba(85, 122, 70, 0.25)' : 'none'
            }}
          >
            {t('Tất cả 4 kênh')} ({tiktokChannelsData.length})
          </button>
          {tiktokChannelsData.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setActiveChannelId(channel.id)}
              style={{
                padding: '7px 18px',
                borderRadius: '999px',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: activeChannelId === channel.id ? '1.5px solid var(--pink-primary)' : '1px solid rgba(255, 117, 151, 0.3)',
                background: activeChannelId === channel.id ? 'var(--pink-soft)' : '#FFFFFF',
                color: activeChannelId === channel.id ? 'var(--pink-deep)' : 'var(--text-dark)',
                transition: 'all 0.2s ease',
                boxShadow: activeChannelId === channel.id ? '0 4px 12px rgba(255, 117, 151, 0.2)' : 'none'
              }}
            >
              {channel.name}
            </button>
          ))}
        </div>
      </section>

      {/* 2. CHANNELS LIST */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        {filteredChannels.map(channel => (
          <ChannelCard 
            key={channel.id} 
            channel={channel} 
            onPlayVideo={(video) => setSelectedVideo(video)}
          />
        ))}
      </div>

      {/* 3. BOTTOM CTA / NAVIGATION */}
      {onNavigate && (
        <div style={{ maxWidth: '820px', margin: '60px auto 0', textAlign: 'center', padding: '36px 24px', background: 'var(--matcha-soft)', borderRadius: '24px', border: '1.5px solid var(--border-matcha)', boxShadow: '0 10px 30px rgba(85, 122, 70, 0.08)' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'var(--matcha-deep)', marginBottom: '8px' }}>
            {t('Khám phá thêm các sản phẩm & dự án khác')}
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-medium)', marginBottom: '22px' }}>
            {t('Xem các video ngắn đa nền tảng (Reels/Shorts), video UGC hoặc các kế hoạch Marketing toàn diện.')}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('home')}
              className="tag-btn"
              style={{ padding: '9px 24px', fontSize: '0.88rem' }}
            >
              {t('← Về Trang Chủ')}
            </button>
            <button
              onClick={() => onNavigate('video-reels')}
              className="tag-btn-pink active"
              style={{ padding: '9px 24px', fontSize: '0.88rem' }}
            >
              {t('Xem Video Reels →')}
            </button>
          </div>
        </div>
      )}

      {/* 4. VIDEO PLAYER MODAL (XEM VIDEO TRỰC TIẾP TRÊN PORTFOLIO) */}
      {selectedVideo && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '430px',
              height: '88vh',
              maxHeight: '760px',
              backgroundColor: '#0F1012',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1.5px rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: '#16181D',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                <span style={{ fontSize: '1.1rem' }}>🎬</span>
                <span 
                  style={{ 
                    fontSize: '0.86rem', 
                    fontWeight: 700, 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis' 
                  }}
                  title={selectedVideo.title}
                >
                  {selectedVideo.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                  marginLeft: '10px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#FE2C55')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
                title="Đóng video (hoặc bấm Esc)"
              >
                ✕
              </button>
            </div>

            {/* Video Player Embedded via TikTok Player API */}
            <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', backgroundColor: '#000000' }}>
              <iframe
                src={`https://www.tiktok.com/player/v1/${selectedVideo.id}?autoplay=1`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>

            {/* Modal Bottom Stats Footer */}
            <div 
              style={{
                padding: '12px 18px',
                background: '#16181D',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.82rem',
                color: '#FFFFFF',
                fontWeight: 700
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>👁️</span> {selectedVideo.views} lượt xem
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FE2C55' }}>
                <span>❤️</span> {selectedVideo.likes} tim
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#A0A0A0' }}>
                <span>💬</span> {selectedVideo.comments} comment
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// SINGLE CHANNEL SHOWCASE COMPONENT
// ============================================================================
interface ChannelCardProps {
  channel: TikTokChannel;
  onPlayVideo: (video: TikTokVideoItem) => void;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel, onPlayVideo }) => {
  const { t } = useLanguage();
  const isPink = channel.colorScheme === 'pink';

  return (
    <article 
      id={channel.id}
      style={{
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '36px 30px',
        border: `1.5px solid ${isPink ? 'var(--border-pink)' : 'var(--border-matcha)'}`,
        boxShadow: isPink 
          ? '0 16px 40px -10px rgba(216, 78, 116, 0.12)' 
          : '0 16px 40px -10px rgba(85, 122, 70, 0.12)',
        position: 'relative'
      }}
    >
      {/* Top Split: Phone Mockup on Left + Strategy / Role Information on Right */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '36px'
        }}
        className="channel-header-grid"
      >
        {/* LEFT COLUMN: Smartphone Mockup showing TikTok Channel Screen (Kích thước vừa vặn, cân đối) */}
        <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'center' }}>
          <PhoneMockup channel={channel} />
        </div>

        {/* RIGHT COLUMN: Strategy, Role, Timeframe & Metrics (Trình bày to rõ, cân đối với ảnh) */}
        <div style={{ gridColumn: 'span 9', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Header Row: Channel Name + Timeframe */}
          <div>
            <div 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                letterSpacing: '0.8px',
                color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              TIKTOK CASE STUDY
            </div>
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', 
                fontWeight: 800, 
                color: 'var(--text-dark)', 
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.25,
                margin: 0
              }}
            >
              {channel.name}
            </h2>
            <div style={{ fontSize: '0.96rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '8px' }}>
              {t('Thời gian triển khai:')} <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{t(channel.timeframe)}</span>
            </div>
          </div>

          {/* Vai trò của Tali (Trình bày to rõ, tự nhiên dạng text liên kết) */}
          <div style={{ fontSize: '1.02rem', lineHeight: 1.65 }}>
            <span style={{ fontWeight: 800, color: 'var(--text-dark)', marginRight: '8px', fontSize: '1.05rem' }}>
              {t('Vai trò của Tali:')}
            </span>
            <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>
              {channel.roles.map(r => t(r)).join(' • ')}
            </span>
          </div>

          {/* Định hướng nội dung & chiến lược (Dạng trích dẫn thanh lịch) */}
          <div 
            style={{ 
              borderLeft: `4px solid ${isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)'}`, 
              paddingLeft: '18px',
              paddingTop: '4px',
              paddingBottom: '4px'
            }}
          >
            <div 
              style={{ 
                fontSize: '0.86rem', 
                fontWeight: 800, 
                color: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)', 
                marginBottom: '8px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.6px' 
              }}
            >
              {t('Định hướng nội dung & Chiến lược triển khai')}
            </div>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.72, margin: 0 }}>
              {t(channel.strategy)}
            </p>
          </div>

          {/* Kết quả đạt được (To, nổi bật) */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
            <span 
              style={{ 
                fontSize: '0.92rem', 
                fontWeight: 800, 
                color: 'var(--text-muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.6px' 
              }}
            >
              {t('Kết quả đạt được:')}
            </span>
            <span 
              style={{ 
                fontSize: '1.35rem', 
                fontWeight: 800, 
                color: isPink ? 'var(--pink-deep)' : 'var(--matcha-deep)',
                lineHeight: 1.3
              }}
            >
              {t(channel.highlightMetric)}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(85, 122, 70, 0.12)', margin: '10px 0 32px' }} />

      {/* Bottom: Video Showcase Groups */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {channel.groups.map((group, gIdx) => (
          <div key={gIdx}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <span style={{ fontSize: '1.2rem' }}>🎬</span>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                {t(group.groupName)}
              </h3>
            </div>

            {/* Video Cards Grid - 2 videos per row on mobile */}
            <div 
              className="tiktok-case-video-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '18px'
              }}
            >
              {group.videos.map((vid) => (
                <VideoProductCard 
                  key={vid.id} 
                  video={vid} 
                  isPink={isPink} 
                  onPlay={() => onPlayVideo(vid)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .channel-header-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
          .channel-header-grid > div {
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .tiktok-hero-title {
            font-size: clamp(1.22rem, 5.2vw, 1.7rem) !important;
            white-space: nowrap !important;
            line-height: 1.25 !important;
            margin-bottom: 14px !important;
          }
          .tiktok-case-video-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .tiktok-video-card {
            border-radius: 12px !important;
          }
          .tiktok-video-info {
            padding: 8px 8px 10px !important;
          }
          .tiktok-video-title {
            font-size: 0.72rem !important;
            line-height: 1.35 !important;
            margin-bottom: 6px !important;
            min-height: 2.2em !important;
          }
          .tiktok-video-stats {
            padding: 4px 6px !important;
            font-size: 0.65rem !important;
            border-radius: 8px !important;
          }
          .tiktok-video-play-btn {
            width: 34px !important;
            height: 34px !important;
            font-size: 0.95rem !important;
          }
          article[id^="tiktok"] {
            padding: 20px 14px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </article>
  );
};

// ============================================================================
// SMARTPHONE MOCKUP COMPONENT (TIKTOK PROFILE SCREEN)
// ============================================================================
interface PhoneMockupProps {
  channel: TikTokChannel;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ channel }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
      {/* Smartphone Frame with Real Screenshot (Kích thước tinh gọn, thanh thoát) */}
      <div
        style={{
          width: '190px',
          height: '380px',
          backgroundColor: '#1E2024',
          borderRadius: '34px',
          padding: '8px',
          boxShadow: '0 18px 40px -8px rgba(0, 0, 0, 0.32), 0 0 0 2px #3A3D46, 0 0 0 4px #18191D',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Dynamic Island / Notch */}
        <div 
          style={{
            width: '64px',
            height: '14px',
            backgroundColor: '#000000',
            borderRadius: '10px',
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30,
            boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
          }}
        />

        {/* Real Screenshot from D:\AI\ẢNH\KÊNH */}
        <div 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '28px',
            overflow: 'hidden',
            backgroundColor: '#000000',
            position: 'relative'
          }}
        >
          <img 
            src={channel.channelScreenshot} 
            alt={`Ảnh màn hình kênh TikTok ${channel.name}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block'
            }}
          />
        </div>
      </div>

      {/* DUY NHẤT 1 NÚT XEM KÊNH TIKTOK */}
      <a 
        href={channel.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'linear-gradient(135deg, #111111 0%, #2A2A2A 100%)',
          color: '#FFFFFF',
          fontSize: '0.8rem',
          fontWeight: 700,
          padding: '8px 18px',
          borderRadius: '999px',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #FE2C55 0%, #E01E45 100%)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(254, 44, 85, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #111111 0%, #2A2A2A 100%)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
        }}
      >
        <span>Xem kênh trên TikTok</span>
        <span>↗</span>
      </a>
    </div>
  );
};

// ============================================================================
// VIDEO PRODUCT CARD (BẤM VÀO ĐỂ XEM TRỰC TIẾP TRÊN PORTFOLIO)
// ============================================================================
interface VideoProductCardProps {
  video: TikTokVideoItem;
  isPink?: boolean;
  onPlay: () => void;
}

const VideoProductCard: React.FC<VideoProductCardProps> = ({ video, isPink, onPlay }) => {
  return (
    <div 
      className="tiktok-video-card"
      onClick={onPlay}
      role="button"
      tabIndex={0}
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1.5px solid rgba(85, 122, 70, 0.16)',
        overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
        e.currentTarget.style.borderColor = isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
        e.currentTarget.style.borderColor = 'rgba(85, 122, 70, 0.16)';
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay();
        }
      }}
    >
      {/* 9:14 Video Thumbnail Container (Sạch đẹp, không gắn tag thừa trên đầu video) */}
      <div 
        style={{
          position: 'relative',
          aspectRatio: '9 / 14',
          overflow: 'hidden',
          backgroundColor: '#0F1012'
        }}
      >
        <img 
          src={video.thumbnail} 
          alt={video.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="video-thumb-img"
        />

        {/* Center Play Button Overlay */}
        <div 
          className="tiktok-video-play-btn"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(254, 44, 85, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '1.2rem',
            paddingLeft: '3px',
            boxShadow: '0 4px 18px rgba(254, 44, 85, 0.5)',
            transition: 'transform 0.2s ease'
          }}
        >
          ▶
        </div>
      </div>

      {/* Video Info & Numerical Stats Annotation */}
      <div className="tiktok-video-info" style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h4 
          className="tiktok-video-title"
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: 'var(--text-dark)',
            lineHeight: 1.4,
            marginBottom: '10px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.3em'
          }}
          title={video.title}
        >
          {video.title}
        </h4>

        {/* Chú thích các con số minh chứng: Lượt xem, lượt tim, comment */}
        <div 
          className="tiktok-video-stats"
          style={{
            marginTop: 'auto',
            background: 'var(--matcha-mist)',
            borderRadius: '10px',
            padding: '7px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.74rem',
            fontWeight: 700,
            color: 'var(--matcha-deep)',
            border: '1px solid rgba(85, 122, 70, 0.15)'
          }}
        >
          <span title="Lượt xem" style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <span>👁️</span>
            <span>{video.views}</span>
          </span>
          <span title="Lượt tim" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#D84E74' }}>
            <span>❤️</span>
            <span>{video.likes}</span>
          </span>
          <span title="Bình luận" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-dark)' }}>
            <span>💬</span>
            <span>{video.comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
