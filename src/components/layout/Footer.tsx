import React from 'react';
import { NavPage } from '../../types/portfolio.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'tiktok', label: 'Xây kênh TikTok từ số 0' },
    { id: 'video-reels', label: 'Content Facebook' },
    { id: 'video-ugc', label: 'Video UGC' },
    { id: 'marketing-plan', label: 'Kế hoạch Marketing' },
    { id: 'ads', label: 'Ads' },
    { id: 'design-ai', label: 'Design AI' }
  ];

  return (
    <footer 
      style={{
        borderTop: '1.5px solid var(--border-pink)',
        padding: '24px 20px 18px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div 
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🍃</span>
            <span className="font-serif" style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--matcha-deep)' }}>
              Thảo Liên Lê · Marketing Portfolio
            </span>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'var(--pink-soft)',
              border: '1px solid var(--border-pink)',
              color: 'var(--pink-deep)',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(255, 117, 151, 0.15)',
              transition: 'all 0.2s'
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
            <span>{t('Lên Đầu Trang')}</span>
            <span>↑</span>
          </button>
        </div>

        {/* Clean nav links without icons */}
        {onNavigate && (
          <div 
            style={{
              borderTop: '1px solid rgba(85, 122, 70, 0.12)',
              paddingTop: '16px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              fontSize: '0.82rem'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
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
                    padding: '2px 0',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--pink-deep)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {t(item.label)}
                </button>
              ))}
            </div>

            <span style={{ color: 'var(--text-soft)', fontSize: '0.8rem' }}>
              © 2026 Thao Lien Le. All rights reserved.
            </span>
          </div>
        )}
      </div>
    </footer>
  );
};
