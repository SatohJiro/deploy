'use client';

import React from 'react';
import Link from 'next/link';
import { Coffee, MapPin, Phone, Clock, Mail, Heart, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#120804',
        color: '#fdfaf7',
        paddingTop: '70px',
        paddingBottom: '90px', // Extra padding for mobile bottom bar
        borderTop: '1px solid rgba(200, 138, 88, 0.25)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c88a58 0%, #e29d62 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1a0f0a'
                }}
              >
                <Coffee size={22} strokeWidth={2.4} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
                ÔNG MẬP <span style={{ color: '#e29d62' }}>Coffee</span>
              </span>
            </div>

            <p style={{ color: '#b9a79c', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '20px' }}>
              Quán cà phê sân vườn với hệ thống phun sương mát dịu giữa lòng Tân Bình. Cà phê phin
              rang mộc nguyên chất, trà sữa thơm béo, sinh tố hoa quả tươi ngon, phục vụ tận tâm với
              mức giá bình dân chuẩn Sài Gòn.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(42, 90, 52, 0.4)',
                border: '1px solid rgba(184, 222, 195, 0.3)',
                color: '#86efac',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <span
                style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#4ade80' }}
              />
              <span>Mở cửa: 06:00 – 22:30 mỗi ngày</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                marginBottom: '18px',
                fontFamily: 'var(--font-heading)',
                position: 'relative',
                paddingBottom: '8px'
              }}
            >
              Liên Kết Nhanh
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Trang Chủ', href: '#trang-chu' },
                { label: 'Về Quán Ông Mập', href: '#ve-ong-map' },
                { label: 'Thực Đơn Đồ Uống', href: '#menu' },
                { label: 'Góc Ảnh Không Gian', href: '#khong-gian' },
                { label: 'Tiện Ích Khách Hàng', href: '#tien-ich' },
                { label: 'Đánh Giá & Nhận Xét', href: '#danh-gia' },
                { label: 'Bản Đồ Chỉ Đường', href: '#lien-he' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: '#b9a79c',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#e29d62')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#b9a79c')}
                  >
                    <span style={{ color: '#c88a58' }}>›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                marginBottom: '18px',
                fontFamily: 'var(--font-heading)',
                position: 'relative',
                paddingBottom: '8px'
              }}
            >
              Thông Tin Liên Hệ
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#b9a79c' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={18} color="#e29d62" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CAFE_INFO.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Phone size={18} color="#e29d62" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <a href={`tel:${CAFE_INFO.phone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {CAFE_INFO.phoneDisplay}
                  </a>
                  {' / '}
                  <a href={`tel:${CAFE_INFO.altPhone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {CAFE_INFO.altPhoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Clock size={18} color="#e29d62" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{CAFE_INFO.openingHours} (Cả tuần & Ngày Lễ)</span>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{
                  padding: '9px 18px',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(200, 138, 88, 0.4)'
                }}
              >
                <span>Chỉ đường trên Google Maps →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: '#8e7c70'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Ông Mập Coffee</strong>. All rights reserved. 156 Đ. Trần Thị Trọng, Tân Sơn, Hồ Chí Minh.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Đậm đà hương vị cà phê mộc Sài Gòn</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#e29d62',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer'
              }}
              aria-label="Về đầu trang"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
