import React, { useState } from 'react';
import { profileInfo } from '../../data/portfolioData.ts';
import { NavPage } from '../../types/portfolio.ts';
import { LanguageSwitcher } from '../common/LanguageSwitcher.tsx';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 7 core categories in a single balanced row
  const allNavItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'tiktok', label: 'Xây kênh TikTok từ số 0' },
    { id: 'video-reels', label: 'Content Facebook' },
    { id: 'video-ugc', label: 'Video UGC' },
    { id: 'marketing-plan', label: 'Kế hoạch Marketing' },
    { id: 'ads', label: 'Ads' },
    { id: 'design-ai', label: 'Design AI' }
  ];

  const handleNavClick = (page: NavPage, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const { t } = useLanguage();

  return (
    <header 
      style={{
        position: 'fixed',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'max-content',
        maxWidth: 'calc(100% - 20px)',
        zIndex: 50,
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(255, 117, 151, 0.35)',
          borderRadius: '20px',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 8px 24px -4px rgba(216, 78, 116, 0.15), 0 3px 12px rgba(85, 122, 70, 0.08)'
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick('home', e)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', flexShrink: 0 }}
        >
          <span style={{ fontSize: '1.25rem' }}>🎀</span>
          <div>
            <span 
              className="font-serif" 
              style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.02em', color: 'var(--matcha-deep)', lineHeight: 1.1 }}
            >
              {profileInfo.name}
            </span>
            <span style={{ display: 'block', fontSize: '0.58rem', color: 'var(--pink-deep)', fontWeight: 700, letterSpacing: '0.6px', marginTop: '1px' }}>
              PORTFOLIO
            </span>
          </div>
        </a>

        {/* Subtle Vertical Divider */}
        <div 
          className="desktop-divider"
          style={{ width: '1px', height: '30px', background: 'rgba(85, 122, 70, 0.18)', flexShrink: 0 }} 
        />

        {/* Desktop Nav Links: Single Sleek Row of 7 Categories */}
        <nav 
          style={{ display: 'none', alignItems: 'center', gap: '6px' }}
          className="nav-links"
        >
          {allNavItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? 'var(--pink-deep)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  background: isActive ? 'var(--pink-soft)' : 'transparent',
                  border: isActive ? '1.5px solid var(--border-pink)' : '1px solid transparent',
                  transition: 'all 0.18s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 2px 8px rgba(255, 117, 151, 0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 240, 244, 0.6)';
                    e.currentTarget.style.color = 'var(--pink-deep)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-dark)';
                  }
                }}
              >
                {t(item.label)}
              </a>
            );
          })}
        </nav>

        {/* Desktop Divider before Language Switcher */}
        <div 
          className="desktop-divider"
          style={{ width: '1px', height: '24px', background: 'rgba(85, 122, 70, 0.18)', flexShrink: 0 }} 
        />

        {/* Language Switcher Button (Nút chuyển ngôn ngữ VI / EN ở đầu trang) */}
        <div style={{ flexShrink: 0 }}>
          <LanguageSwitcher compact />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          style={{
            display: 'none',
            background: 'var(--pink-soft)',
            border: '1px solid var(--border-pink)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--pink-deep)',
            fontSize: '1.15rem',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            marginTop: '10px',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1.5px solid var(--border-pink)',
            padding: '14px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          {/* Mobile Language Switcher Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px 10px', borderBottom: '1px solid rgba(85, 122, 70, 0.1)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>Ngôn ngữ / Language:</span>
            <LanguageSwitcher compact />
          </div>

          {allNavItems.map((item) => (
            <a
              key={item.id}
              href={`#/${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              style={{
                padding: '9px 14px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: currentPage === item.id ? 800 : 600,
                color: currentPage === item.id ? 'var(--pink-deep)' : 'var(--text-dark)',
                background: currentPage === item.id ? 'var(--pink-soft)' : 'transparent',
                display: 'block',
                fontSize: '0.85rem'
              }}
            >
              {t(item.label)}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-links { display: flex !important; }
          .desktop-divider { display: block !important; }
        }
        @media (max-width: 767px) {
          .mobile-nav-toggle { display: flex !important; }
          .desktop-divider { display: none !important; }
        }
      `}</style>
    </header>
  );
};
