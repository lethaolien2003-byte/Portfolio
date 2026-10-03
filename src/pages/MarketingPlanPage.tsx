import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface MarketingPlanPageProps {
  onNavigate: (page: NavPage) => void;
}

interface PlanItem {
  id: string;
  order: string;
  title: string;
  image: string;
  highlights: string[];
}

export const MarketingPlanPage: React.FC<MarketingPlanPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const plans: PlanItem[] = [
    {
      id: 'plan-channel',
      order: '01',
      title: 'Định Hướng Xây Dựng Kênh',
      image: '/marketing-plan/plan-1.png',
      highlights: [
        'Nghiên cứu insight & hành vi tệp khách hàng tiềm năng',
        'Xác định rõ các trụ cột nội dung (Content Pillars) chủ lực',
        'Thiết lập phong cách kênh chân thật, chuẩn gu thương hiệu'
      ]
    },
    {
      id: 'plan-timeline',
      order: '02',
      title: 'Kế Hoạch Content Theo Từng Giai Đoạn',
      image: '/marketing-plan/plan-2.png',
      highlights: [
        'Tối ưu content đa kênh',
        'Phối hợp nhịp nhàng giữa kịch bản, quay dựng và thiết kế',
        'Theo dõi tiến độ và đánh giá hiệu quả từng bài đăng'
      ]
    },
    {
      id: 'plan-product',
      order: '03',
      title: 'Kế Hoạch Marketing Cho Sản Phẩm Mới',
      image: '/marketing-plan/plan-3.png',
      highlights: [
        'Định vị lợi thế sản phẩm (USP) so với đối thủ',
        'Chiến dịch ra mắt mạch lạc: Teasing ➔ Launch ➔ Retargeting',
        'Tối ưu ngân sách thực tế và gia tăng tỷ lệ chuyển đổi'
      ]
    }
  ];

  return (
    <div className="marketing-plan-page" style={{ paddingTop: '80px', minHeight: '100vh', background: '#FAFBFC' }}>
      {/* 1. HERO HEADER - THIẾT KẾ LIỀN MẠCH, KHÔNG CHIA Ô RỐI MẮT */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: '36px 20px 28px', textAlign: 'center' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.84rem', marginBottom: '12px' }}>
          <button 
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
          >
            {t('Trang Chủ')}
          </button>
          <span style={{ color: 'var(--pink-deep)' }}>›</span>
          <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>{t('Kế hoạch Marketing')}</span>
        </div>

        <h1 
          className="font-serif" 
          style={{ 
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: '18px'
          }}
        >
          {t('Kế Hoạch Marketing & Content Thực Chiến')}
        </h1>

        {/* User's Exact Content Intro - Liền mạch, thoáng đãng, tự động dịch */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.75, marginBottom: '12px' }}>
            {t('Xuất thân từ Content, sau nhiều năm làm việc ở nhiều vị trí khác nhau, mình may mắn có cơ hội được học hỏi và trực tiếp thực hiện nhiều dạng kế hoạch: từ định hướng xây dựng kênh, kế hoạch Marketing cho sản phẩm mới đến kế hoạch Content theo từng giai đoạn.')}
          </p>
          <p style={{ fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.75, margin: 0 }}>
            {t('Theo kinh nghiệm của mình, dù là một kế hoạch Marketing tổng thể hay một kế hoạch Content nhỏ, mọi thứ đều cần bắt đầu từ việc nghiên cứu thị trường, hiểu khách hàng mục tiêu và xác định rõ các trụ nội dung xuyên suốt. Khi hiểu mình đang nói với ai, thị trường cần gì và sản phẩm có lợi thế gì, kế hoạch phía sau mới có hướng đi rõ ràng và thực tế hơn.')}
          </p>
        </div>
      </section>

      {/* 2. PLANS SHOWCASE - BỐ CỤC TRỰC QUAN, GỌN GÀNG, HÌNH ẢNH TO RÕ */}
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '10px 20px 70px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '42px' }}>
          {plans.map((plan) => (
            <div 
              key={plan.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid rgba(85, 122, 70, 0.16)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                padding: '24px 28px',
                transition: 'box-shadow 0.25s ease'
              }}
            >
              {/* Header: Title + Highlights in a single cohesive flow */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--matcha-deep)' }}>
                    {plan.order}.
                  </span>
                  <h2 
                    style={{ 
                      fontSize: '1.35rem', 
                      fontWeight: 800, 
                      color: 'var(--text-dark)', 
                      margin: 0,
                      fontFamily: 'var(--font-serif)'
                    }}
                  >
                    {t(plan.title)}
                  </h2>
                </div>

                {/* Highlights inline list */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', paddingLeft: '22px' }}>
                  {plan.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-medium)' }}>
                      <span style={{ color: 'var(--matcha-deep)', fontWeight: 800, fontSize: '0.82rem' }}>✓</span>
                      <span>{t(h)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Document Preview - Full width, clear view, click to zoom */}
              <div 
                onClick={() => setSelectedImage({ url: plan.image, title: t(plan.title) })}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  backgroundColor: '#F8F9FA',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <img 
                  src={plan.image} 
                  alt={t(plan.title)}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    transition: 'transform 0.25s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Floating hint */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.72)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    padding: '5px 14px',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>{t('Bấm phóng to chi tiết')}</span>
                  <span>⤢</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '94vw',
              maxHeight: '94vh',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: '#F0F2F5',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ overflow: 'auto', maxHeight: 'calc(94vh - 70px)' }}>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
