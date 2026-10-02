'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, ArrowRight, Star, Droplets, Coffee, Wifi } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function Hero() {
  return (
    <section
      id="trang-chu"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '80px',
        overflow: 'hidden',
        backgroundColor: '#120804'
      }}
    >
      {/* Background Hero Image with Warm Dark Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.38,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      >
        <Image
          src="/images/cafe-exterior-mist.jpg"
          alt="Không gian sân vườn xanh mát phun sương tại Ông Mập Coffee"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>

      {/* Atmospheric Radial Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'radial-gradient(circle at 75% 30%, rgba(200, 138, 88, 0.22) 0%, transparent 60%), linear-gradient(to bottom, rgba(18, 8, 4, 0.85) 0%, rgba(18, 8, 4, 0.7) 50%, rgba(18, 8, 4, 0.98) 100%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTA */}
          <div style={{ maxWidth: '680px' }}>
            {/* Top Status Indicators (Clean, Professional) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '22px'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(42, 90, 52, 0.85)',
                  color: '#d4eed9',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(184, 222, 195, 0.3)'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                    display: 'inline-block'
                  }}
                  className="pulse-badge"
                />
                <span>Đang Mở Cửa • 06:00 - 22:30</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(200, 138, 88, 0.18)',
                  color: '#f7dfca',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  border: '1px solid rgba(200, 138, 88, 0.35)'
                }}
              >
                <Droplets size={14} color="#e29d62" />
                <span>Sân Vườn Phun Sương Mát Lạnh</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '20px',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
              }}
            >
              Hương Vị Cà Phê Mộc Giữa Không Gian{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #e29d62 0%, #f6cfab 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline'
                }}
              >
                Sân Vườn Mát Lạnh
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#e0d2c8',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '620px'
              }}
            >
              Điểm dừng chân thư thái tại <strong>156 Trần Thị Trọng, Tân Bình</strong>. Thưởng thức
              cà phê phin rang mộc đậm vị, đá xay kem tươi béo ngậy và sinh tố trái cây thanh mát
              trong không gian giàn cây rợp bóng cùng hệ thống phun sương dập tan cái nóng Sài Gòn.
            </p>

            {/* Highlights row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                marginBottom: '36px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Coffee size={18} color="#e29d62" />
                <span style={{ fontSize: '0.86rem', color: '#f3ece7', fontWeight: 600 }}>Cà phê phin từ 18k</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Droplets size={18} color="#6ee7b7" />
                <span style={{ fontSize: '0.86rem', color: '#f3ece7', fontWeight: 600 }}>Phun sương giảm nhiệt</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Wifi size={18} color="#93c5fd" />
                <span style={{ fontSize: '0.86rem', color: '#f3ece7', fontWeight: 600 }}>Wifi mạnh & Ổ điện</span>
              </div>
            </div>

            {/* CTA Group */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              <a
                href="#menu"
                className="btn btn-primary"
                style={{
                  padding: '14px 30px',
                  fontSize: '1rem',
                  fontWeight: 700
                }}
              >
                <span>Xem Menu Đồ Uống (Từ 18k)</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{
                  padding: '14px 22px',
                  fontSize: '0.96rem',
                  border: '1px solid rgba(200, 138, 88, 0.4)'
                }}
              >
                <MapPin size={17} color="#e29d62" />
                <span>Chỉ Đường Đến Quán</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="btn btn-outline-light"
                style={{
                  padding: '14px 22px',
                  fontSize: '0.96rem'
                }}
              >
                <Phone size={16} />
                <span>{CAFE_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Rating Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '36px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <span style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 600 }}>
                4.8 / 5.0
              </span>
              <span style={{ fontSize: '0.86rem', color: '#bcaea4' }}>
                • Khách hàng tin tưởng đánh giá tại khu vực Tân Bình
              </span>
            </div>
          </div>

          {/* Right Column: Featured Visuals */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className="hero-visual"
          >
            {/* Main Featured Showcase Card */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)',
                border: '1.5px solid rgba(200, 138, 88, 0.35)',
                backgroundColor: '#1f110a'
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '380px' }}>
                <Image
                  src="/images/coffee-phin-drip.jpg"
                  alt="Cà phê phin truyền thống tại Ông Mập Coffee"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(20, 10, 5, 0.95) 0%, rgba(20, 10, 5, 0.25) 50%, transparent 100%)'
                  }}
                />

                {/* Steam effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '35%',
                    width: '30px',
                    height: '40px',
                    pointerEvents: 'none'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      width: '4px',
                      height: '24px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      borderRadius: '50%',
                      filter: 'blur(2px)',
                      animation: 'steamRise 2.5s infinite ease-out'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '10px',
                      width: '4px',
                      height: '20px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '50%',
                      filter: 'blur(2px)',
                      animation: 'steamRise 2.8s infinite ease-out 0.6s'
                    }}
                  />
                </div>

                {/* Top overlay badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(20, 10, 5, 0.85)',
                    color: '#e29d62',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(200, 138, 88, 0.4)'
                  }}
                >
                  Cà Phê Phin Truyền Thống
                </div>
              </div>

              {/* Card Bottom Details */}
              <div style={{ padding: '22px 24px', backgroundColor: '#1c0f0a' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                      Cà Phê Phin Tí Tách & Trà Lài
                    </h3>
                    <p style={{ color: '#c0afa3', fontSize: '0.9rem', marginTop: '2px' }}>
                      Pha phin tại bàn, hạt rang mộc chuẩn gu Sài Gòn
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#e29d62', fontSize: '1.3rem', fontWeight: 800 }}>
                      18.000đ
                    </span>
                    <span style={{ display: 'block', color: '#8d786d', fontSize: '0.75rem' }}>kèm trà đá</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '14px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.82rem',
                    color: '#e8ded7'
                  }}
                >
                  <MapPin size={14} color="#e29d62" />
                  <span>156 Trần Thị Trọng, Tân Bình (Khu Tân Sơn)</span>
                </div>
              </div>
            </div>

            {/* Floating Mini Card 1: Bạc Xỉu 3 Tầng */}
            <div
              className="float-element hero-float-card-1"
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-30px',
                backgroundColor: 'rgba(28, 14, 8, 0.92)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(200, 138, 88, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 12
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                <Image
                  src="/images/coffee-bac-xiu.jpg"
                  alt="Bạc Xỉu 3 tầng"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ display: 'block', color: '#ffffff', fontSize: '0.88rem', fontWeight: 700 }}>
                  Bạc Xỉu 3 Tầng
                </span>
                <span style={{ color: '#e29d62', fontSize: '0.82rem', fontWeight: 600 }}>
                  25.000đ • Món Bán Chạy
                </span>
              </div>
            </div>

            {/* Floating Mini Card 2: Sinh Tố Bơ Đắk Lắk */}
            <div
              className="float-element hero-float-card-2"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-25px',
                backgroundColor: 'rgba(28, 14, 8, 0.92)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(42, 90, 52, 0.45)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 12,
                animationDelay: '1.5s'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                <Image
                  src="/images/drink-smoothie-coffee.jpg"
                  alt="Sinh tố bơ"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ display: 'block', color: '#ffffff', fontSize: '0.88rem', fontWeight: 700 }}>
                  Sinh Tố Bơ Đắk Lắk
                </span>
                <span style={{ color: '#86efac', fontSize: '0.82rem', fontWeight: 600 }}>
                  32.000đ • Bơ sáp dẻo quánh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
