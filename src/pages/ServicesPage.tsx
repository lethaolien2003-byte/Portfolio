import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { servicesData } from '../data/portfolioData.ts';

interface ServicesPageProps {
  onNavigate: (page: NavPage) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Thời gian hoàn thành một gói sản xuất video hoặc chiến dịch là bao lâu?',
      a: 'Thông thường từ 7 - 14 ngày làm việc tùy thuộc vào số lượng video, địa điểm quay thực cảnh (như Trà Sư, Đà Lạt hay Bangkok) và độ phức tạp của kịch bản.'
    },
    {
      q: 'Thảo Liên có nhận hợp tác với các thương hiệu ngoài ngành Du lịch & F&B không?',
      a: 'Có! Thảo Liên từng triển khai thành công các chiến dịch cho Thời trang, Mỹ phẩm, Khách sạn nghỉ dưỡng, Đồ gia dụng cao cấp và Workshop phong cách sống.'
    },
    {
      q: 'Quy trình thanh toán và nghiệm thu hợp đồng như thế nào?',
      a: 'Hợp đồng được chia làm 2-3 đợt thanh toán rõ ràng: Tạm ứng 50% khi duyệt kịch bản và 50% khi bàn giao toàn bộ sản phẩm chất lượng cao cùng báo cáo đo lường.'
    },
    {
      q: 'Tôi có thể yêu cầu kịch bản riêng hoặc đặt lịch quay tại địa điểm theo yêu cầu không?',
      a: 'Hoàn toàn được! Mỗi dự án đều được thiết kế moodboard và kịch bản độc bản dành riêng cho thương hiệu của bạn.'
    }
  ];

  return (
    <div className="services-page" style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. Sub-Site Hero Banner */}
      <section 
        style={{
          padding: '40px 24px 50px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.6) 0%, rgba(242, 248, 240, 0.4) 100%)',
          borderBottom: '1.5px solid var(--border-pink)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.82rem', marginBottom: '16px' }}>
            <button 
              onClick={() => onNavigate('home')}
              style={{ background: 'none', border: 'none', color: 'var(--matcha-leaf)', cursor: 'pointer', fontWeight: 600 }}
            >
              Trang Chủ
            </button>
            <span style={{ color: 'var(--pink-deep)' }}>›</span>
            <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>Dịch Vụ & Hợp Tác</span>
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
              border: '1.5px solid var(--border-pink)',
              boxShadow: '0 4px 15px rgba(255, 117, 151, 0.2)',
              marginBottom: '18px'
            }}
          >
            <span>✨</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
              COQUETTE RIBBON PACKAGES & MARKETING
            </span>
            <span>🎀</span>
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
            Bảng Dịch Vụ <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Mỹ Cảm & Chuyển Đổi</span>
          </h1>

          <p style={{ maxWidth: '750px', margin: '0 auto 30px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Giải pháp tiếp thị toàn diện từ hình ảnh, video dọc đến chiến lược tăng trưởng doanh số, cân bằng giữa vẻ đẹp nghệ thuật và hiệu quả kinh doanh.
          </p>
        </div>
      </section>

      {/* 2. Coquette Ribbon Service Cards */}
      <section style={{ padding: '70px 24px', background: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              alignItems: 'stretch'
            }}
          >
            {servicesData.map((srv, idx) => {
              const isPink = srv.ribbonColor === 'pink';
              const isFeatured = idx === 1; // Package 2 is viral reels

              return (
                <div
                  key={srv.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '28px',
                    padding: '36px 30px',
                    border: isFeatured 
                      ? '2.5px solid var(--pink-primary)' 
                      : `1.5px solid ${isPink ? 'var(--border-pink)' : 'var(--border-matcha)'}`,
                    boxShadow: isFeatured 
                      ? '0 20px 45px rgba(255, 117, 151, 0.25)' 
                      : '0 12px 35px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transform: isFeatured ? 'translateY(-8px)' : 'none'
                  }}
                >
                  {/* Coquette Ribbon Bow on Top */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-18px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: isPink ? 'var(--pink-primary)' : 'var(--matcha-primary)',
                      color: '#fff',
                      padding: '4px 18px',
                      borderRadius: '999px',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span>{isPink ? '🎀' : '🍃'}</span>
                    <span>{srv.tag.toUpperCase()}</span>
                  </div>

                  <div style={{ marginTop: '10px', marginBottom: '18px' }}>
                    <span style={{ fontSize: '0.78rem', color: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)', fontWeight: 800, letterSpacing: '0.8px' }}>
                      {srv.subtitle.toUpperCase()}
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '4px', lineHeight: 1.3 }}>
                      {srv.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {srv.description}
                  </p>

                  {/* Bullet points list */}
                  <div style={{ marginBottom: '30px', flex: 1 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px', letterSpacing: '0.5px' }}>
                      CHI TIẾT BÀN GIAO:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {srv.bullets.map((b, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: isPink ? 'var(--pink-deep)' : 'var(--matcha-leaf)', fontWeight: 800 }}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={isPink ? "btn-cute-pink" : "btn-matcha-primary"}
                    style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '0.9rem' }}
                  >
                    <span>{srv.buttonText}</span>
                    <span>➜</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Workflow Steps Timeline */}
      <section style={{ padding: '70px 24px', background: '#FFFFFF', borderTop: '1px solid var(--border-pink)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <span style={{ fontSize: '1.4rem' }}>🌱 ⋆ ˚｡⋆ 💌 ⋆ ˚｡⋆ 🎬</span>
            <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '8px' }}>
              Quy Trình 4 Bước Triển Khai Chuyên Nghiệp
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Minh bạch, chỉn chu và đúng tiến độ cam kết cho mọi thương hiệu đồng hành.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              { num: '01', title: 'Lắng Nghe & Lên Moodboard', desc: 'Thấu hiểu giá trị cốt lõi và phác thảo bảng màu, góc máy.', accent: 'matcha' },
              { num: '02', title: 'Biên Soạn Kịch Bản Chi Tiết', desc: 'Xây dựng câu chuyện tự nhiên, lời thoại và kịch bản 3 giây đầu.', accent: 'pink' },
              { num: '03', title: 'Bấm Máy & Chỉnh Màu Cine', desc: 'Ghi hình thực cảnh bằng thiết bị cao cấp và hậu kỳ màu sắc.', accent: 'matcha' },
              { num: '04', title: 'Nghiệm Thu & Hỗ Trợ Đăng', desc: 'Bàn giao file 4K và tư vấn thời điểm đăng tải tối ưu lượt xem.', accent: 'pink' }
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: step.accent === 'pink' ? 'var(--pink-soft)' : 'var(--matcha-cream)',
                  borderRadius: '20px',
                  padding: '24px',
                  border: `1.5px solid ${step.accent === 'pink' ? 'var(--border-pink)' : 'var(--border-matcha)'}`,
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800, color: step.accent === 'pink' ? 'var(--pink-deep)' : 'var(--matcha-deep)', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                  {step.num}
                </div>
                <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) */}
      <section style={{ padding: '60px 24px 80px', background: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '1.3rem' }}>❓</span>
            <h3 className="font-serif" style={{ fontSize: '2.1rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '6px' }}>
              Giải Đáp Thắc Mắc Thường Gặp
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: isOpen ? '1.5px solid var(--pink-primary)' : '1px solid var(--border-matcha)',
                    boxShadow: isOpen ? '0 8px 24px rgba(255, 117, 151, 0.15)' : 'none',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '0.96rem',
                      color: isOpen ? 'var(--pink-deep)' : 'var(--text-dark)'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.2rem', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 22px 18px', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Message Link */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-cute-pink"
              style={{ padding: '14px 34px', fontSize: '1rem' }}
            >
              <span>Nhắn Tin Trực Tiếp Với Thảo Liên ♡</span>
              <span>✉</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
