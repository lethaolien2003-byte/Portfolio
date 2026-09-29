import React from 'react';
import { roadmapSteps } from '../../data/portfolioData.ts';

interface RoadmapSectionProps {
  onSelectPhoto?: (photo: { url: string; caption?: string; location?: string }) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onSelectPhoto }) => {
  return (
    <section 
      id="roadmap"
      style={{
        padding: '110px 24px',
        backgroundColor: 'var(--matcha-mist)',
        borderTop: '1.5px solid var(--border-matcha)',
        borderBottom: '1.5px solid var(--border-matcha)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Matcha Leaf Background Watermark */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          right: '8%',
          fontSize: '12rem',
          opacity: 0.05,
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        🍃
      </div>

      <div style={{ maxWidth: '1060px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>🗺️</span>
            <span 
              className="font-script" 
              style={{ fontSize: '2.6rem', color: 'var(--matcha-primary)', display: 'inline-block', lineHeight: 1 }}
            >
              Strategic Creative Flight
            </span>
            <span className="sticker" style={{ fontSize: '1.4rem' }}>✈️</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', marginTop: '4px', marginBottom: '14px', color: 'var(--matcha-deep)' }}>
            Hành Trình Triển Khai <span style={{ color: 'var(--matcha-primary)', fontStyle: 'italic' }}>Chiến Dịch Tiếp Thị</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Quy trình 4 trạm dừng tinh tế từ khi gieo mầm ý tưởng đến lúc chiến dịch cất cánh rực rỡ và đơm hoa kết trái.
          </p>
        </div>

        {/* Roadmap Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
          {roadmapSteps.map((step) => (
            <div 
              key={step.stepNumber}
              style={{
                background: '#FFFFFF',
                border: step.accent === 'matcha' ? '1.5px solid var(--border-matcha)' : '1.5px solid var(--border-pink)',
                borderRadius: '26px',
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '24px',
                alignItems: 'center',
                boxShadow: '0 12px 35px rgba(59, 94, 43, 0.08)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(59, 94, 43, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 94, 43, 0.08)';
              }}
            >
              {/* Step Number Badge */}
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: step.accent === 'matcha' ? 'var(--matcha-mist)' : 'var(--pink-soft)',
                  border: step.accent === 'matcha' ? '2px solid var(--matcha-leaf)' : '2px solid var(--pink-bubble)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                <span 
                  className="font-mono" 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    color: step.accent === 'matcha' ? 'var(--matcha-deep)' : 'var(--pink-deep)' 
                  }}
                >
                  {step.stepNumber}
                </span>
              </div>

              {/* Step Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', margin: 0 }}>
                    {step.title}
                  </h3>
                  <span 
                    style={{
                      background: step.accent === 'matcha' ? 'var(--matcha-mist)' : 'var(--pink-soft)',
                      color: step.accent === 'matcha' ? 'var(--matcha-deep)' : 'var(--pink-deep)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: step.accent === 'matcha' ? '1px solid var(--border-matcha)' : '1px solid var(--border-pink)'
                    }}
                  >
                    ✦ {step.badge}
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </div>

              {/* Mini Stamp Photo of Thao Lien */}
              {step.highlightPhoto && (
                <div 
                  className="postage-stamp"
                  style={{
                    width: '90px',
                    height: '90px',
                    padding: '6px',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  onClick={() => onSelectPhoto && onSelectPhoto({ url: step.highlightPhoto!, caption: step.title, location: step.badge })}
                >
                  <img 
                    src={step.highlightPhoto} 
                    alt={step.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: auto 1fr auto"] {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            justify-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};
