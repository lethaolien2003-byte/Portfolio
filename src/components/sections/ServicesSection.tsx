import React from 'react';
import { servicesData } from '../../data/portfolioData.ts';

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>🎀</span>
            <span 
              className="font-script" 
              style={{ fontSize: '2.6rem', color: 'var(--matcha-primary)', display: 'inline-block', lineHeight: 1 }}
            >
              Tailored Marketing Packages
            </span>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>🍃</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', marginTop: '4px', marginBottom: '14px', color: 'var(--matcha-deep)' }}>
            Các Gói Dịch Vụ <span style={{ color: 'var(--matcha-primary)', fontStyle: 'italic' }}>Tiếp Thị & Sáng Tạo</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Kết hợp tư duy chiến lược thương hiệu sắc bén cùng khả năng sản xuất hình ảnh điện ảnh, mang đến giải pháp tiếp thị toàn diện cho doanh nghiệp của bạn.
          </p>
        </div>

        {/* 3 Coquette Cards with Ribbon Bows */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'stretch'
          }}
        >
          {servicesData.map((svc) => (
            <div 
              key={svc.id}
              style={{
                background: svc.ribbonColor === 'matcha' ? 'var(--matcha-mist)' : 'var(--pink-soft)',
                border: svc.ribbonColor === 'matcha' ? '2px solid var(--matcha-leaf)' : '2px solid var(--pink-bubble)',
                borderRadius: '32px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: '0 16px 40px rgba(59, 94, 43, 0.1)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(59, 94, 43, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(59, 94, 43, 0.1)';
              }}
            >
              {/* Coquette Bow Ribbon on Top */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#FFFFFF',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  border: svc.ribbonColor === 'matcha' ? '1.5px solid var(--matcha-leaf)' : '1.5px solid var(--pink-bubble)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: svc.ribbonColor === 'matcha' ? 'var(--matcha-deep)' : 'var(--pink-deep)'
                }}
              >
                <span>{svc.ribbonColor === 'matcha' ? '🍃' : '🎀'}</span>
                <span>{svc.tag}</span>
              </div>

              <div>
                <span 
                  className="font-script" 
                  style={{ 
                    fontSize: '1.8rem', 
                    color: svc.ribbonColor === 'matcha' ? 'var(--matcha-primary)' : 'var(--pink-deep)',
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  {svc.subtitle}
                </span>

                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)', marginBottom: '16px' }}>
                  {svc.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '24px' }}>
                  {svc.description}
                </p>

                {/* Bullets */}
                <div style={{ borderTop: '1px dashed rgba(85, 122, 70, 0.2)', paddingTop: '18px', marginBottom: '32px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--matcha-deep)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                    Quyền Lợi & Sản Phẩm Bàn Giao:
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {svc.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                        <span style={{ color: svc.ribbonColor === 'matcha' ? 'var(--matcha-primary)' : 'var(--pink-deep)', fontSize: '0.9rem' }}>✦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href="#contact" 
                className={svc.ribbonColor === 'matcha' ? 'btn-matcha-primary' : 'btn-cute-pink'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{svc.buttonText}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
