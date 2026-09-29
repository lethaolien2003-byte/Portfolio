import React from 'react';
import { NavPage } from '../types/portfolio.ts';
import { roadmapSteps } from '../data/portfolioData.ts';

interface RoadmapPageProps {
  onNavigate: (page: NavPage) => void;
  onSelectPhoto: (photo: { url: string; caption?: string; location?: string }) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({ onNavigate, onSelectPhoto }) => {
  const travelDestinations = [
    {
      city: 'Rừng Tràm Trà Sư',
      region: 'An Giang',
      tag: 'Bản Giao Hưởng Xanh',
      accent: 'matcha',
      desc: 'Chiến dịch du lịch sinh thái đạt 2.4 triệu lượt xem với hình ảnh chèo thuyền nan áo vàng giữa cánh đồng bèo xanh mướt.',
      img: '/photos/p29.jpg',
      stamp: 'APPROVED · ECO TOUR'
    },
    {
      city: 'Đà Lạt Mộng Mơ',
      region: 'Lâm Đồng',
      tag: 'Lối Sống Chậm & Cà Phê',
      accent: 'pink',
      desc: 'Tiếp thị trải nghiệm F&B tại tiệm cà phê Nhà Của Thông, kết nối người trẻ với phong cách sống an yên giữa rặng thông.',
      img: '/photos/p15.jpg',
      stamp: 'LOVED · DA LAT MIST'
    },
    {
      city: 'Bangkok & Wat Arun',
      region: 'Thái Lan',
      tag: 'Văn Hóa & Phong Cách Sống',
      accent: 'pink',
      desc: '3.2 triệu lượt xem với trang phục truyền thống kiêu sa tại Chùa Bình Minh và dạo bước phố nghệ thuật Song Wat đầy màu sắc.',
      img: '/photos/p20.jpg',
      stamp: 'CERTIFIED · BANGKOK'
    },
    {
      city: 'Hà Nội & TP. HCM',
      region: 'Vietnam Hubs',
      tag: 'Studio Tiếp Thị & Chiến Lược',
      accent: 'matcha',
      desc: 'Nơi khởi xướng các chiến dịch tiếp thị số, tư vấn nhận diện thẩm mỹ và phát triển nội dung đa kênh cho nhãn hàng.',
      img: '/photos/p1.jpg',
      stamp: 'HEADQUARTERS'
    }
  ];

  return (
    <div className="roadmap-page" style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      {/* 1. Sub-Site Hero Banner */}
      <section 
        style={{
          padding: '40px 24px 50px',
          background: 'linear-gradient(180deg, rgba(255, 240, 244, 0.5) 0%, rgba(242, 248, 240, 0.6) 100%)',
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
            <span style={{ color: 'var(--pink-deep)', fontWeight: 800 }}>Hành Trình Sáng Tạo</span>
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
            <span>🗺️</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--pink-deep)', letterSpacing: '1px' }}>
              CREATIVE JOURNEY & TRAVEL PASSPORT
            </span>
            <span>🍃</span>
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
            Hành Trình <span style={{ color: 'var(--pink-deep)', fontStyle: 'italic' }}>Chiến Lược & Dấu Ấn</span> Địa Lý
          </h1>

          <p style={{ maxWidth: '750px', margin: '0 auto 30px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Mỗi vùng đất là một nguồn cảm hứng bất tận. Khám phá lộ trình 4 bước kiến tạo chiến dịch tiếp thị cảm xúc và những dấu mốc đã qua cùng Thảo Liên Lê.
          </p>
        </div>
      </section>

      {/* 2. Vintage Travel Boarding Pass / Passport Visual Card */}
      <section style={{ padding: '60px 24px 40px', background: 'var(--bg-cream)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '2px dashed var(--border-pink)',
              boxShadow: '0 16px 40px rgba(216, 78, 116, 0.12)',
              padding: '28px 34px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div className="washi-tape-pink" style={{ top: '-12px' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(85, 122, 70, 0.2)', paddingBottom: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.8rem' }}>✈️</span>
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '2px', fontWeight: 800, color: 'var(--pink-deep)' }}>
                    BOARDING PASS & CREATIVE PASSPORT
                  </div>
                  <div className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--matcha-deep)' }}>
                    THẢO LIÊN LÊ · EXPEDITION
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <div><strong>FLIGHT:</strong> TL-2026</div>
                <div><strong>GATE:</strong> 01-A</div>
                <div><strong>CLASS:</strong> CREATIVE FIRST</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-soft)', fontWeight: 700 }}>KHỞI HÀNH (ORIGIN)</span>
                <h4 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--text-dark)' }}>Hà Nội / An Giang 🍃</h4>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.4rem' }}>✈ ┈┈┈┈ ✈</span>
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-soft)', fontWeight: 700 }}>ĐÍCH ĐẾN (DESTINATION)</span>
                <h4 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--pink-deep)' }}>Bangkok / Đà Lạt 🌸</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Step Strategic Marketing Roadmap */}
      <section style={{ padding: '60px 24px 80px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '1.4rem' }}>🌱 ⋆ ˚｡⋆ 🎬 ⋆ ˚｡⋆ 🍃 ⋆ ˚｡⋆ ✨</span>
            <h2 className="font-serif" style={{ fontSize: '2.3rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '8px' }}>
              Quy Trình 4 Bước Chuyển Hóa Thương Hiệu
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Kết hợp hoàn hảo giữa thẩm mỹ thị giác nữ tính và tư duy tiếp thị số hiệu quả.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {roadmapSteps.map((step, idx) => {
              const isMatcha = step.accent === 'matcha';
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.stepNumber}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                    gap: '30px',
                    alignItems: 'center',
                    background: isMatcha ? 'var(--matcha-cream)' : 'var(--pink-soft)',
                    borderRadius: '28px',
                    padding: '36px',
                    border: `1.5px solid ${isMatcha ? 'var(--border-matcha)' : 'var(--border-pink)'}`,
                    position: 'relative'
                  }}
                >
                  <div className={isMatcha ? "washi-tape-matcha" : "washi-tape-pink"} style={{ top: '-12px' }} />

                  {/* Left Column for Even or Right Column for Odd */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <span 
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          background: isMatcha ? 'var(--matcha-primary)' : 'var(--pink-primary)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '1.1rem'
                        }}
                      >
                        {step.stepNumber}
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: isMatcha ? 'var(--matcha-deep)' : 'var(--pink-deep)', letterSpacing: '1px' }}>
                        GIAI ĐOẠN: {step.timeTag?.toUpperCase()} · {step.badge.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-serif" style={{ fontSize: '1.8rem', color: isMatcha ? 'var(--matcha-deep)' : 'var(--pink-deep)', fontWeight: 800, marginBottom: '14px' }}>
                      {step.title}
                    </h3>

                    <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                      {step.description}
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ padding: '4px 12px', borderRadius: '999px', background: '#FFFFFF', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dark)', border: '1px solid rgba(0,0,0,0.08)' }}>
                        {step.icon} Tinh Thần Độc Bản
                      </span>
                      <span style={{ padding: '4px 12px', borderRadius: '999px', background: '#FFFFFF', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dark)', border: '1px solid rgba(0,0,0,0.08)' }}>
                        ✓ Đo Lường Chỉ Số ROI
                      </span>
                    </div>
                  </div>

                  {/* Highlight Photo Column */}
                  <div style={{ order: isEven ? 2 : 1, textAlign: 'center' }}>
                    {step.highlightPhoto && (
                      <div 
                        onClick={() => onSelectPhoto({ url: step.highlightPhoto!, caption: step.title, location: step.badge })}
                        className="polaroid-frame"
                        style={{ cursor: 'pointer', maxWidth: '300px', margin: '0 auto', display: 'inline-block' }}
                      >
                        <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '4px', marginBottom: '8px' }}>
                          <img 
                            src={step.highlightPhoto} 
                            alt={step.title} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-soft)', fontStyle: 'italic' }}>
                          Ảnh thực tế: {step.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Geographical Travel Chronicles Grid */}
      <section style={{ padding: '70px 24px 90px', background: 'linear-gradient(180deg, rgba(242, 248, 240, 0.4) 0%, #FFFFFF 100%)' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <span style={{ fontSize: '1.3rem' }}>🌏</span>
            <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--matcha-deep)', fontWeight: 800, marginTop: '8px' }}>
              Nhật Ký Dấu Ấn 4 Điểm Đến Trọng Điểm
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Những điểm tựa tạo nên kho tư liệu hình ảnh và video phong phú cho mọi chiến dịch.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '24px'
            }}
          >
            {travelDestinations.map((dest, i) => {
              const isMatcha = dest.accent === 'matcha';
              return (
                <div 
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '20px',
                    border: `1.5px solid ${isMatcha ? 'var(--border-matcha)' : 'var(--border-pink)'}`,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div 
                    onClick={() => onSelectPhoto({ url: dest.img, caption: dest.tag, location: dest.city })}
                    style={{ aspectRatio: '16 / 10', borderRadius: '14px', overflow: 'hidden', marginBottom: '14px', cursor: 'pointer' }}
                  >
                    <img src={dest.img} alt={dest.city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: isMatcha ? 'var(--matcha-leaf)' : 'var(--pink-deep)' }}>
                      {dest.region.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.68rem', background: isMatcha ? 'var(--matcha-mist)' : 'var(--pink-soft)', color: isMatcha ? 'var(--matcha-deep)' : 'var(--pink-deep)', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                      {dest.stamp}
                    </span>
                  </div>

                  <h4 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    {dest.city}
                  </h4>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, flex: 1 }}>
                    {dest.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Jump to Services CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button 
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-cute-pink"
              style={{ padding: '14px 34px', fontSize: '1rem' }}
            >
              <span>Khám Phá Các Gói Dịch Vụ Của Thảo Liên 🎀</span>
              <span>➜</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
