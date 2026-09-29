import React, { useState } from 'react';
import { NavPage, VlogReelItem } from '../types/portfolio.ts';
import { vlogReels } from '../data/portfolioData.ts';

interface VideoReelsPageProps {
  onNavigate: (page: NavPage) => void;
  onSelectReel: (reel: VlogReelItem) => void;
}

export const VideoReelsPage: React.FC<VideoReelsPageProps> = ({ onNavigate, onSelectReel }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'eco' | 'cafe' | 'fashion'>('all');
  const [hoveredReelId, setHoveredReelId] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: '🌸 Tất Cả Reels (4)', count: 4 },
    { id: 'eco', label: '🍃 Du Lịch Sinh Thái (Trà Sư)', count: 2 },
    { id: 'cafe', label: '☕ Cà Phê & Chữa Lành (Đà Lạt)', count: 1 },
    { id: 'fashion', label: '👠 Thời Trang & Nghệ Thuật (Bangkok)', count: 1 }
  ];

  const filteredReels = vlogReels.filter(reel => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'eco') return reel.id === 'reel-1' || reel.id === 'reel-4';
    if (activeFilter === 'cafe') return reel.id === 'reel-2';
    if (activeFilter === 'fashion') return reel.id === 'reel-3';
    return true;
  });

  return (
    <div className="video-reels-page" style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. Sub-Site Hero Banner */}
      <section 
        style={{
          padding: '40px 24px 50px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.6) 0%, rgba(242, 248, 240, 0.4) 100%)',
          borderBottom: '1.5px solid var(--border-pink)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.82rem', marginBottom: '16px' }}>
            <button 
              onClick={() => onNavigate('home')}
              style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
            >
              Trang Chủ
            </button>
            <span style={{ color: 'var(--pink-deep)' }}>›</span>
            <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>Studio Video Reels</span>
          </div>

          {/* Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              borderRadius: '999px',
              background: '#FFFFFF',
              border: '1.5px solid var(--border-pink)',
              boxShadow: '0 4px 15px rgba(255, 117, 151, 0.2)',
              marginBottom: '18px'
            }}
          >
            <span>🎬</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
              VERTICAL VIDEO & REELS CINEMA STUDIO
            </span>
            <span>🎀</span>
          </div>

          <h1 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', 
              fontWeight: 800, 
              color: 'var(--matcha-deep)',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}
          >
            Tuyển Tập Phim Ngắn <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>9:16 Triệu View</span>
          </h1>

          <p style={{ maxWidth: '720px', margin: '0 auto 30px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Mỗi thước phim là một tác phẩm được trau chuốt tỉ mỉ từ kịch bản, ánh sáng thực cảnh đến bảng màu Cine Matcha & Rose ngọt ngào. Bấm để xem full video độ phân giải cao!
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {filters.map(f => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id as any)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 800 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'var(--pink-primary)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                    border: isActive ? '1.5px solid var(--pink-primary)' : '1.5px solid var(--border-matcha)',
                    boxShadow: isActive ? '0 6px 18px rgba(255, 117, 151, 0.35)' : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive 9:16 Smartphone Mockups Grid */}
      <section style={{ padding: '70px 24px', background: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              justifyContent: 'center'
            }}
          >
            {filteredReels.map((reel) => {
              const isMatcha = reel.colorScheme === 'matcha';
              const isHovered = hoveredReelId === reel.id;

              return (
                <div 
                  key={reel.id}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  onMouseEnter={() => setHoveredReelId(reel.id)}
                  onMouseLeave={() => setHoveredReelId(null)}
                >
                  {/* Smartphone Frame with Dynamic Island */}
                  <div 
                    onClick={() => onSelectReel(reel)}
                    className={isMatcha ? "phone-mockup-matcha" : "phone-mockup-pink"}
                    style={{
                      border: isMatcha ? '8px solid #2B3D23' : '8px solid #C04E6E',
                      boxShadow: isMatcha 
                        ? '0 25px 60px -10px rgba(47, 79, 36, 0.4), 0 0 0 1.5px rgba(197, 155, 75, 0.4)' 
                        : '0 25px 60px -10px rgba(216, 78, 116, 0.4), 0 0 0 1.5px rgba(255, 182, 193, 0.6)',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Dynamic Island */}
                    <div className="dynamic-island" />

                    {/* View Count Badge Pill */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '40px',
                        left: '16px',
                        zIndex: 20,
                        background: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                    >
                      <span style={{ color: isMatcha ? '#8EE4AF' : '#FFB6C1' }}>● REC</span>
                      <span>{reel.metrics}</span>
                    </div>

                    {/* Video / Thumbnail Cover */}
                    {isHovered ? (
                      <video 
                        src={reel.previewVideoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <img 
                        src={reel.coverImage} 
                        alt={reel.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}

                    {/* Overlay Gradient with Play Button */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px',
                        zIndex: 10
                      }}
                    >
                      <div 
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: isMatcha ? 'var(--matcha-primary)' : 'var(--pink-primary)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          marginBottom: '14px',
                          alignSelf: 'center',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                          transition: 'transform 0.25s ease'
                        }}
                      >
                        ▶
                      </div>

                      <span style={{ fontSize: '0.72rem', color: isMatcha ? '#B8E994' : '#FFAAA6', fontWeight: 800, letterSpacing: '0.5px' }}>
                        {reel.tag}
                      </span>
                      <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, margin: '4px 0 6px', lineHeight: 1.35 }}>
                        {reel.title}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                        📍 {reel.location}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Play Action below mockup */}
                  <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <button
                      onClick={() => onSelectReel(reel)}
                      className={isMatcha ? "btn-matcha-primary" : "btn-cute-pink"}
                      style={{ padding: '8px 20px', fontSize: '0.84rem' }}
                    >
                      <span>Xem Phim Full 9:16</span>
                      <span>▶</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Filmmaking & Production Stack (Behind the Scenes) */}
      <section 
        style={{
          padding: '70px 24px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 240, 244, 0.4) 100%)',
          borderTop: '1.5px solid var(--border-matcha)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <span style={{ fontSize: '1.5rem' }}>🍃 ⋆ ˚｡⋆ 🎬 ⋆ ˚｡⋆ 🎀</span>
            <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '8px' }}>
              Quy Trình & Thiết Bị Sản Xuất Video Độc Quyền
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Bí quyết tạo nên những thước phim du lịch & marketing có hồn, triệu view và đậm chất nghệ thuật.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              { icon: '📱', title: 'Thiết Bị Ghi Hình', desc: 'iPhone 15 Pro Max 4K ProRes & Sony A7IV màu da trong trẻo.', accent: 'pink' },
              { icon: '🎙️', title: 'Thu Âm ASMR Sống Động', desc: 'DJI Mic không dây thu trọn tiếng gió thông, suối reo và cafe róc rách.', accent: 'matcha' },
              { icon: '🎨', title: 'Chỉnh Màu Cine Matcha Rose', desc: 'Bảng màu độc quyền cân bằng sắc xanh thiên nhiên và sắc hồng ngọt ngào.', accent: 'pink' },
              { icon: '📈', title: 'Tối Ưu Thuật Toán Reels', desc: 'Hook 3 giây đầu giữ chân người xem và kịch bản kết thúc mở kích thích bình luận.', accent: 'matcha' }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '20px',
                  border: `1.5px solid ${item.accent === 'pink' ? 'var(--border-pink)' : 'var(--border-matcha)'}`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h4 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '8px', fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA to Book Video Production */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-cute-pink"
              style={{ padding: '14px 34px', fontSize: '1rem' }}
            >
              <span>Xem Bảng Gói Dịch Vụ Video Reels 🎀</span>
              <span>➜</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
