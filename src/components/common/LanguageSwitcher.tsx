import React from 'react';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className, compact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className={`language-switcher ${className || ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.95)',
        border: '1.5px solid var(--border-pink)',
        borderRadius: '999px',
        padding: '3px',
        boxShadow: '0 4px 14px rgba(216, 78, 116, 0.12)',
        userSelect: 'none'
      }}
    >
      <button
        onClick={() => setLanguage('vi')}
        type="button"
        title="Chuyển sang Tiếng Việt"
        style={{
          border: 'none',
          cursor: 'pointer',
          padding: compact ? '3px 8px' : '4px 10px',
          borderRadius: '999px',
          fontSize: '0.74rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: language === 'vi' ? 'var(--pink-deep)' : 'transparent',
          color: language === 'vi' ? '#FFFFFF' : 'var(--text-dark)',
          boxShadow: language === 'vi' ? '0 2px 8px rgba(216, 78, 116, 0.3)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <span>🇻🇳</span>
        <span>VI</span>
      </button>

      <button
        onClick={() => setLanguage('en')}
        type="button"
        title="Switch to English"
        style={{
          border: 'none',
          cursor: 'pointer',
          padding: compact ? '3px 8px' : '4px 10px',
          borderRadius: '999px',
          fontSize: '0.74rem',
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: language === 'en' ? 'var(--matcha-deep)' : 'transparent',
          color: language === 'en' ? '#FFFFFF' : 'var(--text-dark)',
          boxShadow: language === 'en' ? '0 2px 8px rgba(85, 122, 70, 0.3)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
