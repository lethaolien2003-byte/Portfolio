import React, { useState } from 'react';
import { NavPage } from '../types/portfolio.ts';
import { profileInfo } from '../data/portfolioData.ts';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Reels 9:16',
    budget: '15M - 30M',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Vui lòng điền tên và email của bạn để Thảo Liên phản hồi nhé! ♡');
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="contact-page" style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. Sub-Site Hero Banner */}
      <section 
        style={{
          padding: '40px 24px 50px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.7) 0%, rgba(242, 248, 240, 0.5) 100%)',
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
            <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>Hộp Thư Trực Tiếp</span>
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
              boxShadow: '0 4px 15px rgba(255, 117, 151, 0.25)',
              marginBottom: '18px'
            }}
          >
            <span>✉</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
              DIRECT MESSAGE & INSTAGRAM CHAT STATION
            </span>
            <span>♡</span>
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
            Hộp Thư Trực Tiếp & <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Khởi Đầu Dự Án</span>
          </h1>

          <p style={{ maxWidth: '720px', margin: '0 auto 10px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Bạn đang ấp ủ một chiến dịch du lịch, video ngắn triệu view hay muốn nâng tầm hình ảnh thương hiệu? Hãy gửi một phong thư tình yêu đến Thảo Liên nhé!
          </p>
        </div>
      </section>

      {/* 2. Interactive Instagram DM Mockup & Contact Form Duo */}
      <section style={{ padding: '60px 24px 90px', background: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '36px',
              alignItems: 'start'
            }}
          >
            {/* Left: Instagram DM Chat Simulator */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                border: '1.5px solid var(--border-pink)',
                boxShadow: '0 16px 40px rgba(216, 78, 116, 0.15)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div className="washi-tape-pink" style={{ top: '-12px' }} />

              {/* Chat Header */}
              <div 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 240, 244, 0.9) 0%, rgba(242, 248, 240, 0.9) 100%)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-pink)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--pink-primary)' }}>
                      <img src="/photos/p5.jpg" alt="Avatar Thảo Liên" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#2ECC71',
                        border: '2px solid #fff'
                      }} 
                    />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <strong style={{ fontSize: '0.96rem', color: 'var(--text-dark)' }}>{profileInfo.name}</strong>
                      <span style={{ color: '#3897F0', fontSize: '0.9rem' }}>✓</span>
                    </div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-soft)' }}>
                      {profileInfo.instagramHandle} · Đang hoạt động
                    </span>
                  </div>
                </div>

                <span style={{ fontSize: '1.2rem', color: 'var(--pink-deep)' }}>♡</span>
              </div>

              {/* Chat Thread */}
              <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '340px', background: '#FCFBF9' }}>
                <div style={{ textAlign: 'center', margin: '4px 0 10px' }}>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(0,0,0,0.05)', padding: '3px 10px', borderRadius: '999px', color: 'var(--text-soft)' }}>
                    HÔM NAY · HỘP THƯ BẢO MẬT
                  </span>
                </div>

                {/* Message 1 */}
                <div style={{ alignSelf: 'flex-start', maxWidth: '82%', display: 'flex', gap: '8px' }}>
                  <div 
                    style={{
                      background: 'var(--pink-soft)',
                      border: '1px solid var(--border-pink)',
                      padding: '12px 16px',
                      borderRadius: '18px 18px 18px 4px',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: 'var(--text-dark)'
                    }}
                  >
                    Xin chào! Cảm ơn bạn đã ghé thăm portfolio của Thảo Liên 🍃🌸
                  </div>
                </div>

                {/* Message 2 */}
                <div style={{ alignSelf: 'flex-start', maxWidth: '82%', display: 'flex', gap: '8px' }}>
                  <div 
                    style={{
                      background: 'var(--pink-soft)',
                      border: '1px solid var(--border-pink)',
                      padding: '12px 16px',
                      borderRadius: '18px 18px 18px 4px',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: 'var(--text-dark)'
                    }}
                  >
                    Bạn có thể chọn dịch vụ quan tâm hoặc điền form bên cạnh, Thảo Liên sẽ phản hồi ngay trong 24 giờ nhé! 🎀
                  </div>
                </div>

                {/* Quick Reply Pills */}
                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['🎬 Sản xuất Video 9:16', '🌿 Chiến dịch Du lịch', '✨ Định vị Brand Aesthetic'].map((pill, i) => (
                    <button
                      key={i}
                      onClick={() => setFormData({ ...formData, service: pill })}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '999px',
                        background: '#FFFFFF',
                        border: '1px solid var(--border-matcha)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--matcha-deep)',
                        cursor: 'pointer'
                      }}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Love Letter Booking Form */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                border: '1.5px solid var(--border-matcha)',
                padding: '34px 30px',
                boxShadow: '0 16px 40px rgba(85, 122, 70, 0.12)',
                position: 'relative'
              }}
            >
              <div className="washi-tape-matcha" style={{ top: '-12px' }} />

              <div style={{ marginBottom: '22px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
                  LOVE LETTER FORM · GỬI THƯ LIÊN HỆ
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--matcha-deep)', marginTop: '4px' }}>
                  Bắt Đầu Hợp Tác Ngay Hôm Nay
                </h3>
              </div>

              {isSent ? (
                <div 
                  style={{
                    padding: '30px 20px',
                    textAlign: 'center',
                    background: 'var(--pink-soft)',
                    borderRadius: '20px',
                    border: '1.5px solid var(--border-pink)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '12px' }}>💌</div>
                  <h4 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--pink-deep)', fontWeight: 800 }}>
                    Thư Đã Được Gửi Thành Công!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.6 }}>
                    Cảm ơn <strong>{formData.name}</strong>! Thảo Liên sẽ kiểm tra hộp thư và liên hệ lại với bạn qua email <strong>{formData.email}</strong> sớm nhất có thể. ♡
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="btn-cute-pink"
                    style={{ marginTop: '20px', padding: '8px 24px', fontSize: '0.85rem' }}
                  >
                    Gửi Thư Khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Tên của bạn hoặc Tên Thương hiệu *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="VD: Mai Anh / Sweet Bakery Đà Lạt"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(85, 122, 70, 0.3)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Email hoặc Số Zalo liên hệ *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="VD: maianh@gmail.com / 0912 xxx xxx"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(85, 122, 70, 0.3)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Dịch vụ quan tâm
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: '1.5px solid rgba(85, 122, 70, 0.3)',
                          fontSize: '0.85rem',
                          outline: 'none',
                          background: '#fff',
                          fontFamily: 'inherit'
                        }}
                      >
                        <option>Video Reels 9:16 Viral</option>
                        <option>Định Hình Brand Aesthetic</option>
                        <option>Chiến Dịch Du Lịch & Cafe</option>
                        <option>Tư Vấn Tiếp Thị Toàn Diện</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Ngân sách dự kiến
                      </label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: '1.5px solid rgba(85, 122, 70, 0.3)',
                          fontSize: '0.85rem',
                          outline: 'none',
                          background: '#fff',
                          fontFamily: 'inherit'
                        }}
                      >
                        <option>Dưới 10 Triệu</option>
                        <option>10M - 25 Triệu</option>
                        <option>25M - 50 Triệu</option>
                        <option>Trên 50 Triệu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Lời nhắn nhủ hoặc Ý tưởng của bạn
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Mô tả ngắn gọn về sản phẩm, địa điểm quay chụp hoặc thông điệp bạn muốn truyền tải..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid rgba(85, 122, 70, 0.3)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-cute-pink"
                    style={{ justifyContent: 'center', padding: '14px 24px', fontSize: '0.95rem', marginTop: '6px' }}
                  >
                    <span>Gửi Thư Trực Tiếp Đến Thảo Liên ♡</span>
                    <span>✉</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social Channels Row */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '1px' }}>
              HOẶC KẾT NỐI QUA CÁC KÊNH MẠNG XÃ HỘI CHÍNH THỨC
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              {[
                { name: 'Instagram', handle: '@thaolien.journey', icon: '📸', color: '#E1306C' },
                { name: 'TikTok', handle: '@thaolien.vlog', icon: '🎵', color: '#000000' },
                { name: 'Email Trực Tiếp', handle: 'thaolien.journey@gmail.com', icon: '✉', color: '#D84E74' },
                { name: 'Zalo / Hotline', handle: '0988.xxx.xxx', icon: '💬', color: '#0068FF' }
              ].map((s, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    padding: '10px 20px',
                    borderRadius: '999px',
                    border: '1.5px solid var(--border-pink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)'
                  }}
                >
                  <span>{s.icon}</span>
                  <span>{s.name}:</span>
                  <span style={{ color: 'var(--pink-deep)' }}>{s.handle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
