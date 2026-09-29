import React, { useState } from 'react';
import { profileInfo } from '../../data/portfolioData.ts';

export const ContactSection: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '110px 24px',
        backgroundColor: 'var(--matcha-mist)',
        borderTop: '1.5px dashed var(--border-matcha)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="sticker" style={{ fontSize: '1.4rem' }}>💌</span>
          <span 
            className="font-script" 
            style={{ fontSize: '2.6rem', color: 'var(--matcha-primary)', display: 'inline-block', lineHeight: 1 }}
          >
            Let's connect & create magic
          </span>
          <span className="sticker" style={{ fontSize: '1.4rem' }}>🍃</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', marginTop: '4px', marginBottom: '16px', color: 'var(--matcha-deep)' }}>
          Gửi Lời Nhắn Đến <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Thảo Liên Lê</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto 40px', lineHeight: 1.65 }}>
          Sẵn sàng đưa thương hiệu của bạn vào những câu chuyện truyền cảm hứng? Hãy để lại tin nhắn hoặc kết nối trực tiếp cùng Thảo Liên.
        </p>

        {/* Instagram Direct Message (DM) Simulated Box */}
        <div 
          style={{
            background: '#ffffff',
            border: '2px solid var(--matcha-leaf)',
            borderRadius: '28px',
            padding: '36px 32px',
            boxShadow: '0 20px 50px rgba(59, 94, 43, 0.16)',
            textAlign: 'left',
            position: 'relative'
          }}
        >
          {/* Top Washi Tape */}
          <div className="washi-tape-gingham" style={{ top: '-13px' }} />

          {/* DM Chat Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(85, 122, 70, 0.15)', paddingBottom: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--matcha-leaf)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <img src="/photos/p1.jpg" alt="Thảo Liên Lê" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-dark)' }}>{profileInfo.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>● Đang trực tuyến · Phản hồi trong 2 giờ</div>
              </div>
            </div>

            <div className="wax-seal-matcha" style={{ width: '42px', height: '42px', fontSize: '0.9rem' }}>
              TL
            </div>
          </div>

          {/* Chat Bubble from Thao Lien */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <div 
              style={{
                background: 'var(--matcha-mist)',
                border: '1px solid var(--border-matcha)',
                borderRadius: '18px 18px 18px 4px',
                padding: '14px 20px',
                maxWidth: '82%',
                fontSize: '0.95rem',
                color: 'var(--text-dark)',
                lineHeight: 1.55
              }}
            >
              Chào bạn! Mình là Thảo Liên 🌸🍃. Bạn đang ấp ủ một chiến dịch du lịch, ra mắt sản phẩm mới hay cần tái định vị phong cách mỹ cảm cho thương hiệu? Hãy để lại lời nhắn cho mình nhé!
            </div>
          </div>

          {/* Contact Form */}
          {sent ? (
            <div 
              style={{
                background: 'var(--matcha-mist)',
                border: '1.5px solid var(--matcha-leaf)',
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💌 ✨</div>
              <h4 style={{ color: 'var(--matcha-deep)', fontSize: '1.3rem', marginBottom: '6px' }}>
                Cảm ơn bạn! Tin nhắn đã được gửi.
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Thảo Liên sẽ phản hồi qua email của bạn trong thời gian sớm nhất!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--matcha-deep)', marginBottom: '6px' }}>
                  EMAIL CỦA BẠN:
                </label>
                <input 
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '14px',
                    border: '1.5px solid var(--border-matcha)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-cream)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--matcha-deep)', marginBottom: '6px' }}>
                  NỘI DUNG TRAO ĐỔI HOẶC Ý TƯỞNG CHIẾN DỊCH:
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Chia sẻ về thương hiệu của bạn, mong muốn và timeline dự kiến..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '14px',
                    border: '1.5px solid var(--border-matcha)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    backgroundColor: 'var(--bg-cream)',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap', gap: '14px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--matcha-leaf)', fontWeight: 600 }}>
                  Hoặc kết nối trực tiếp Instagram: {profileInfo.instagramHandle}
                </span>
                <button type="submit" className="btn-matcha-primary">
                  <span>Gửi Tin Nhắn Cho Thảo Liên</span>
                  <span style={{ fontSize: '1rem' }}>✈️</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
