import React, { useState } from 'react';
import { profileInfo } from '../../data/portfolioData.ts';
import { NavPage } from '../../types/portfolio.ts';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string; icon: string }[] = [
    { id: 'home', label: 'Trang Chủ', icon: '🌸' },
    { id: 'video-reels', label: 'Video Reels', icon: '🎬' },
    { id: 'photo-diary', label: 'Photo Diary', icon: '📸' },
    { id: 'roadmap', label: 'Hành Trình', icon: '🗺️' },
    { id: 'services', label: 'Dịch Vụ', icon: '✨' }
  ];

  const handleNavClick = (page: NavPage, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '1260px',
        zIndex: 50,
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(255, 117, 151, 0.35)', // Balanced Pink & Matcha border
          borderRadius: '999px',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 12px 35px -5px rgba(216, 78, 116, 0.15), 0 4px 15px rgba(85, 122, 70, 0.1)'
        }}
      >
        {/* Brand Logo & Cute Stickers */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick('home', e)}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="sticker" style={{ fontSize: '1.35rem' }}>🍃</span>
            <span className="sticker" style={{ fontSize: '1.25rem', marginLeft: '-4px' }}>🎀</span>
          </div>
          <div>
            <span 
              className="font-serif" 
              style={{ fontSize: '1.28rem', fontWeight: 800, letterSpacing: '0.02em', color: 'var(--matcha-deep)' }}
            >
              {profileInfo.name}
            </span>
            <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--pink-deep)', fontWeight: 700, letterSpacing: '1px' }}>
              MARKETING & TRAVEL VLOG ⋆ ˚｡⋆
            </span>
          </div>
        </a>

        {/* Music Player Mini Widget */}
        <div 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--pink-soft)',
            border: '1px solid var(--border-pink)',
            borderRadius: '999px',
            padding: '5px 14px',
            fontSize: '0.78rem',
            color: 'var(--text-dark)',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)'
          }}
          className="nav-music-widget"
        >
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            style={{ 
              background: 'var(--pink-primary)', 
              color: '#fff', 
              border: 'none',
              borderRadius: '50%', 
              width: '24px', 
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(255, 117, 151, 0.35)'
            }}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <span className={isPlaying ? "spin-slow" : ""} style={{ fontSize: '1rem', display: 'inline-block' }}>
            💿
          </span>
          <span style={{ fontWeight: 600, color: 'var(--pink-deep)' }}>Pink Skies & Matcha Travel ⋆*</span>
          <span style={{ color: 'var(--matcha-primary)', fontSize: '0.72rem' }}>0:48 / 3:12</span>
        </div>

        {/* Desktop Nav Links (Direct Multi-Site Routing) */}
        <nav 
          style={{ display: 'none', alignItems: 'center', gap: '8px' }}
          className="nav-links"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#/${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? 'var(--pink-deep)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  padding: '7px 14px',
                  borderRadius: '999px',
                  background: isActive ? 'var(--pink-soft)' : 'transparent',
                  border: isActive ? '1.5px solid var(--border-pink)' : '1.5px solid transparent',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  boxShadow: isActive ? '0 4px 12px rgba(255, 117, 151, 0.2)' : 'none'
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Romantic Rose Pink Direct Message Button (Restores perfect 50/50 balance) */}
        <a 
          href="#/contact"
          onClick={(e) => handleNavClick('contact', e)}
          className="btn-cute-pink"
          style={{ 
            padding: '8px 22px', 
            fontSize: '0.85rem',
            background: 'linear-gradient(135deg, #FF7597 0%, #E8577D 100%)',
            boxShadow: '0 8px 24px -4px rgba(255, 117, 151, 0.45)',
            textDecoration: 'none'
          }}
        >
          <span>✉ Direct Message</span>
          <span style={{ fontSize: '0.95rem' }}>♡</span>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          style={{
            display: 'none',
            background: 'var(--pink-soft)',
            border: '1px solid var(--border-pink)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--pink-deep)',
            fontSize: '1.2rem',
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
            marginTop: '12px',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1.5px solid var(--border-pink)',
            padding: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#/${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              style={{
                padding: '10px 16px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: currentPage === item.id ? 800 : 600,
                color: currentPage === item.id ? 'var(--pink-deep)' : 'var(--text-dark)',
                background: currentPage === item.id ? 'var(--pink-soft)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="#/contact"
            onClick={(e) => handleNavClick('contact', e)}
            style={{
              padding: '10px 16px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 700,
              color: '#fff',
              background: 'var(--pink-primary)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <span>✉ Direct Message ♡</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .nav-music-widget { display: flex !important; }
          .nav-links { display: flex !important; }
        }
        @media (max-width: 959px) {
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
