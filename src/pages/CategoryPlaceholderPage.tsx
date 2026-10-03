import React from 'react';
import { NavPage } from '../types/portfolio.ts';
import { navCategories } from '../data/portfolioData.ts';

interface CategoryPlaceholderPageProps {
  pageId: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const CategoryPlaceholderPage: React.FC<CategoryPlaceholderPageProps> = ({
  pageId,
  onNavigate
}) => {
  const currentCategory = navCategories.find((c) => c.id === pageId) || {
    id: pageId,
    title: 'Chuyên mục',
    icon: '✨',
    desc: 'Nội dung chi tiết đang được chuẩn bị.',
    badge: 'In Progress'
  };

  return (
    <div 
      style={{ 
        minHeight: '85vh', 
        paddingTop: '140px', 
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div 
        style={{
          maxWidth: '780px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(20px)',
          borderRadius: '32px',
          padding: '48px 36px',
          border: '1.5px solid var(--border-pink)',
          boxShadow: '0 25px 50px -10px rgba(216, 78, 116, 0.18)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="washi-tape-pink" style={{ top: '-14px' }} />

        {/* Big Icon with Pulse effect */}
        <div 
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            background: 'var(--pink-soft)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.8rem',
            marginBottom: '20px',
            boxShadow: '0 10px 25px rgba(255, 117, 151, 0.25)'
          }}
        >
          {currentCategory.icon}
        </div>

        {/* Badge */}
        <div>
          <span 
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--matcha-deep)',
              background: 'var(--matcha-mist)',
              padding: '6px 18px',
              borderRadius: '999px',
              border: '1px solid var(--border-matcha)',
              letterSpacing: '1px'
            }}
          >
            🌸 CHUYÊN MỤC ĐANG CHỜ CẬP NHẬT 🍃
          </span>
        </div>

        {/* Category Title */}
        <h1 
          className="font-serif" 
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
            fontWeight: 800, 
            color: 'var(--text-dark)', 
            marginTop: '18px',
            marginBottom: '12px'
          }}
        >
          {currentCategory.title}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.65 }}>
          Trang chủ đã được cập nhật hoàn tất theo yêu cầu của bạn. Chúng ta sẽ tiếp tục cập nhật chi tiết nội dung cho trang <strong>"{currentCategory.title}"</strong> này ở bước tiếp theo!
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate('home')}
            className="btn-matcha-primary"
            style={{ padding: '10px 26px', fontSize: '0.92rem', cursor: 'pointer' }}
          >
            <span>Quay lại Trang chủ</span>
            <span>➜</span>
          </button>
        </div>

        {/* Quick Nav Row */}
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px dashed var(--border-pink)' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-soft)', display: 'block', marginBottom: '14px' }}>
            CHUYỂN NHANH ĐẾN CÁC DANH MỤC KHÁC:
          </span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {navCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => onNavigate(c.id as NavPage)}
                style={{
                  background: c.id === pageId ? 'var(--pink-primary)' : 'var(--pink-soft)',
                  color: c.id === pageId ? '#FFFFFF' : 'var(--text-dark)',
                  border: '1px solid var(--border-pink)',
                  padding: '5px 12px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>{c.icon}</span>
                <span>{c.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
