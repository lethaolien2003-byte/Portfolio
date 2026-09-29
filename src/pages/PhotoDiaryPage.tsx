import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { photobooths, filmStripPhotos, allPersonalPhotos } from '../data/portfolioData.ts';

interface PhotoDiaryPageProps {
  onNavigate: (page: NavPage) => void;
  onSelectPhoto: (photo: { url: string; caption?: string; location?: string }) => void;
}

export const PhotoDiaryPage: React.FC<PhotoDiaryPageProps> = ({ onNavigate, onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '🌸 Tất Cả (29 Ảnh)' },
    { id: 'Nature', label: '🍃 Rừng Tràm & Thiên Nhiên' },
    { id: 'Cafe Vlog', label: '☕ Cà Phê Mơ Màng Đà Lạt' },
    { id: 'Culture', label: '🏯 Bangkok & Chùa Wat Arun' },
    { id: 'Fashion', label: '🎀 Nàng Thơ Hồng Phấn' },
    { id: 'Street Art', label: '🎨 Phố Nghệ Thuật Song Wat' },
    { id: 'Fantasy', label: '🏰 Lâu Đài Cổ Tích' }
  ];

  const filteredPhotos = allPersonalPhotos.filter(item => {
    if (activeCategory === 'all') return true;
    return item.tag === activeCategory;
  });

  return (
    <div className="photo-diary-page" style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. Sub-Site Hero Header */}
      <section 
        style={{
          padding: '40px 24px 50px',
          background: 'linear-gradient(180deg, rgba(242, 248, 240, 0.6) 0%, rgba(255, 240, 244, 0.5) 100%)',
          borderBottom: '1.5px solid var(--border-matcha)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.82rem', marginBottom: '16px' }}>
            <button 
              onClick={() => onNavigate('home')}
              style={{ background: 'none', border: 'none', color: 'var(--pink-deep)', cursor: 'pointer', fontWeight: 600 }}
            >
              Trang Chủ
            </button>
            <span style={{ color: 'var(--matcha-leaf)' }}>›</span>
            <span style={{ color: 'var(--matcha-deep)', fontWeight: 800 }}>Photo Diary</span>
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
              border: '1.5px solid var(--border-matcha)',
              boxShadow: '0 4px 15px rgba(85, 122, 70, 0.18)',
              marginBottom: '18px'
            }}
          >
            <span>📸</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--matcha-deep)', letterSpacing: '1px' }}>
              VISUAL SCRAPBOOK & KOREAN PHOTOBOOTHS
            </span>
            <span>🌸</span>
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
            Nhật Ký Ảnh <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>29 Khoảnh Khắc</span> Độc Bản
          </h1>

          <p style={{ maxWidth: '740px', margin: '0 auto 30px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Từng bức hình là một mảnh ghép thanh xuân rực rỡ của Thảo Liên: từ sông nước miền Tây xanh ngắt đến hoàng hôn Bangkok tráng lệ. Nhấp vào bất kỳ ảnh nào để phóng to và xem nhật ký chi tiết!
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {categories.map(c => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 800 : 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'var(--pink-primary)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--text-dark)',
                    border: isActive ? '1.5px solid var(--pink-primary)' : '1.5px solid var(--border-pink)',
                    boxShadow: isActive ? '0 6px 18px rgba(255, 117, 151, 0.35)' : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Korean 4-Cut Photobooths (Life4Cuts Duo: Matcha Edition & Pink Edition) */}
      <section style={{ padding: '60px 24px', background: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '1.3rem' }}>🍃 ⋆ ˚｡⋆ 📸 ⋆ ˚｡⋆ 🎀</span>
            <h2 className="font-serif" style={{ fontSize: '2.1rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '8px' }}>
              Korean Life4Cuts Photobooth Song Đôi
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Hai dải ảnh photobooth 4 khung hình kinh điển chuẩn phong cách Hàn Quốc của Thảo Liên.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {photobooths.map((pb) => {
              const isMatcha = pb.theme === 'matcha';
              return (
                <div 
                  key={pb.id}
                  className={isMatcha ? "photobooth-strip-matcha" : "photobooth-strip-pink"}
                  style={{
                    transform: isMatcha ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = isMatcha ? 'rotate(-1.5deg)' : 'rotate(1.5deg)';
                  }}
                >
                  {/* Washi Tape */}
                  <div className={isMatcha ? "washi-tape-gingham" : "washi-tape-pink"} />

                  {/* Header Tag */}
                  <div style={{ textAlign: 'center', borderBottom: `1px solid ${isMatcha ? 'var(--matcha-leaf)' : 'var(--pink-bubble)'}`, paddingBottom: '10px' }}>
                    <div style={{ fontSize: '0.72rem', letterSpacing: '2px', fontWeight: 800, color: isMatcha ? 'var(--matcha-deep)' : 'var(--pink-deep)' }}>
                      LIFE 4 CUTS · KOREA PHOTO STUDIO
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: '2px' }}>
                      {pb.location}
                    </div>
                  </div>

                  {/* 4 Photos Vertical Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {pb.photos.map((img, i) => (
                      <div 
                        key={i}
                        className="photobooth-photo"
                        onClick={() => onSelectPhoto({ url: img, caption: pb.caption, location: pb.location })}
                        style={{ cursor: 'pointer' }}
                        title="Bấm để xem chi tiết ảnh"
                      >
                        <img src={img} alt={`Photobooth frame ${i + 1}`} />
                      </div>
                    ))}
                  </div>

                  {/* Photobooth Footer Info */}
                  <div style={{ textAlign: 'center', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: isMatcha ? 'var(--matcha-deep)' : 'var(--pink-deep)', fontWeight: 800 }}>
                      {pb.date}
                    </span>
                    <span style={{ fontSize: '1rem' }}>{pb.sticker}</span>
                    <span className="font-serif" style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                      TL · 2026
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 35mm Vintage Analog Film Strip Showcase */}
      <section style={{ padding: '60px 24px', background: '#FFFFFF', borderTop: '1px solid var(--border-pink)' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '1.2rem' }}>🎞️</span>
            <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-dark)', fontWeight: 800, marginTop: '6px' }}>
              Cuộn Phim Analog 35mm Hoài Niệm
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Những thước phim lướt ngang với tông màu hạt phim cổ điển.
            </p>
          </div>

          <div className="film-strip" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ display: 'flex', gap: '16px', minWidth: '980px', padding: '0 12px' }}>
              {filmStripPhotos.map((f) => (
                <div 
                  key={f.id}
                  onClick={() => onSelectPhoto({ url: f.imageUrl, caption: f.title, location: f.location })}
                  style={{
                    flex: '0 0 170px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{ aspectRatio: '3 / 4', borderRadius: '4px', overflow: 'hidden', background: '#333' }}>
                    <img src={f.imageUrl} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FAF3E0', fontSize: '0.65rem', marginTop: '6px', fontFamily: 'monospace' }}>
                    <span>KODAK PORTRA</span>
                    <span>{f.frameCode}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete 29-Photo Polaroid Gallery Wall */}
      <section style={{ padding: '70px 24px 90px', background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.3) 0%, #FFFFFF 100%)' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '1.5rem' }}>🌸 ⋆ ˚｡⋆ ୨୧ ⋆ ˚｡⋆ 🍃</span>
            <h3 className="font-serif" style={{ fontSize: '2.3rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '8px' }}>
              Bộ Sưu Tập Khung Ảnh Polaroid Toàn Phần
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Đang hiển thị {filteredPhotos.length} bức ảnh thực tế của Thảo Liên Lê. Bấm vào từng ảnh để xem lớn.
            </p>
          </div>

          {/* Responsive Polaroid Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '30px',
              justifyItems: 'center'
            }}
          >
            {filteredPhotos.map((photo, index) => {
              const isEven = index % 2 === 0;
              const rotation = (index % 5 - 2) * 1.8; // Varied subtle angles: -3.6, -1.8, 0, 1.8, 3.6
              return (
                <div
                  key={photo.id}
                  onClick={() => onSelectPhoto({ url: photo.url, caption: `${photo.title} — ${photo.caption}`, location: photo.location })}
                  className="polaroid-frame"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    width: '100%',
                    maxWidth: '270px'
                  }}
                >
                  {/* Alternating Washi Tape */}
                  <div className={isEven ? "washi-tape-pink" : "washi-tape-matcha"} style={{ top: '-12px' }} />

                  {/* Photo Image */}
                  <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: '4px', marginBottom: '14px', background: '#F0F0F0' }}>
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                  </div>

                  {/* Polaroid Handwritten Caption */}
                  <div style={{ textAlign: 'center', padding: '0 4px' }}>
                    <div style={{ fontSize: '0.72rem', color: isEven ? 'var(--pink-deep)' : 'var(--matcha-leaf)', fontWeight: 800, letterSpacing: '0.5px' }}>
                      {photo.tag.toUpperCase()} · {photo.location}
                    </div>
                    <div className="font-serif" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '2px' }}>
                      {photo.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-soft)', marginTop: '4px', fontStyle: 'italic' }}>
                      "{photo.caption}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick jump to Next Site CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button 
              onClick={() => {
                onNavigate('roadmap');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-matcha-primary"
              style={{ padding: '12px 32px', fontSize: '0.95rem' }}
            >
              <span>Xem Tiếp Site Hành Trình Sáng Tạo 🗺️</span>
              <span>➜</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
