import React from 'react';
import { profileInfo } from '../../data/portfolioData.ts';
import { NavPage } from '../../types/portfolio.ts';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: NavPage; label: string; icon: string }[] = [
    { id: 'home', label: 'Trang Chủ', icon: '🌸' },
    { id: 'video-reels', label: 'Video Reels', icon: '🎬' },
    { id: 'photo-diary', label: 'Photo Diary', icon: '📸' },
    { id: 'roadmap', label: 'Hành Trình', icon: '🗺️' },
    { id: 'services', label: 'Dịch Vụ', icon: '✨' },
    { id: 'contact', label: 'Direct Message', icon: '✉' }
  ];

  return (
    <footer 
      style={{
        borderTop: '1.5px solid var(--border-pink)',
        padding: '50px 24px 34px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div 
        style={{
          maxWidth: '1260px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '1.3rem' }}>🍃</span>
              <span style={{ fontSize: '1.2rem', marginLeft: '-4px' }}>🎀</span>
              <span className="font-serif" style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--matcha-deep)' }}>
                {profileInfo.siteTitle}
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.65 }}>
              Thiết kế riêng cho Thảo Liên Lê phong cách Travel Vlog & Scrapbook mỹ cảm. Hòa quyện cân bằng giữa sắc xanh Matcha và sắc hồng Rose Petals.
            </p>
          </div>

          {/* Social Tags & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--pink-deep)', fontWeight: 700 }}>
              {profileInfo.instagramHandle} · Marketing & Travel Vlog
            </span>

            <button 
              onClick={scrollToTop}
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                background: 'var(--pink-soft)',
                border: '1.5px solid var(--border-pink)',
                color: 'var(--pink-deep)',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255, 117, 151, 0.15)',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--pink-primary)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--pink-soft)';
                e.currentTarget.style.color = 'var(--pink-deep)';
              }}
            >
              <span>Lên Đầu Trang</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Quick Multi-Site Nav Links at the Bottom of Footer */}
        {onNavigate && (
          <div 
            style={{
              borderTop: '1px dashed rgba(85, 122, 70, 0.2)',
              paddingTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              fontSize: '0.82rem'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <span style={{ fontWeight: 800, color: 'var(--matcha-deep)' }}>DANH MỤC SITE:</span>
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--pink-deep)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <span style={{ color: 'var(--text-soft)' }}>
              © 2026 Thao Lien Le. All rights reserved.
            </span>
          </div>
        )}
      </div>
    </footer>
  );
};
