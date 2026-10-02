'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Phone, MapPin, Menu, X, Clock } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Về Quán', href: '#ve-ong-map' },
    { label: 'Thực Đơn', href: '#menu' },
    { label: 'Không Gian', href: '#khong-gian' },
    { label: 'Tiện Ích', href: '#tien-ich' },
    { label: 'Đánh Giá', href: '#danh-gia' },
    { label: 'Liên Hệ', href: '#lien-he' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: isScrolled ? 'rgba(24, 13, 8, 0.95)' : 'rgba(18, 9, 5, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(200, 138, 88, 0.25)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.45)' : 'none'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            width: '100%'
          }}
        >
          {/* Brand Logo */}
          <Link
            href="#trang-chu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c88a58 0%, #e29d62 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1a0f0a',
                boxShadow: '0 4px 14px rgba(200, 138, 88, 0.35)',
                flexShrink: 0
              }}
            >
              <Coffee size={22} strokeWidth={2.4} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '0.4px',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap'
                }}
              >
                ÔNG MẬP <span style={{ color: '#e29d62' }}>Coffee</span>
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: '#bfae9f',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  whiteSpace: 'nowrap'
                }}
              >
                Cà Phê Mộc • Sân Vườn
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Clean, No Wrapping) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
              flex: '1 1 auto',
              justifyContent: 'center'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#e7ded7',
                  fontSize: '0.94rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  padding: '8px 2px',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e29d62')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#e7ded7')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons on Right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0
            }}
          >
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="btn btn-primary"
              style={{
                display: 'none',
                padding: '9px 18px',
                fontSize: '0.88rem',
                whiteSpace: 'nowrap',
                fontWeight: 600
              }}
              id="desktop-call-btn"
            >
              <Phone size={15} />
              <span>{CAFE_INFO.phoneDisplay}</span>
            </a>

            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark nav-directions-btn"
              style={{
                padding: '9px 16px',
                fontSize: '0.88rem',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(200, 138, 88, 0.4)'
              }}
              title="Chỉ đường Google Maps đến 156 Trần Thị Trọng"
            >
              <MapPin size={15} color="#e29d62" />
              <span>Chỉ Đường</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              className="mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            backgroundColor: 'rgba(15, 8, 4, 0.98)',
            backdropFilter: 'blur(16px)',
            paddingTop: '96px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                padding: '12px 16px',
                background: 'rgba(200, 138, 88, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(200, 138, 88, 0.2)',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#e29d62',
                fontSize: '0.86rem'
              }}
            >
              <Clock size={16} />
              <span>Mở cửa: 06:00 - 22:30 hàng ngày</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '1.12rem',
                  fontFamily: 'var(--font-heading)',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: '#c88a58', fontSize: '0.9rem' }}>→</span>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Phone size={18} />
              <span>Gọi Quán: {CAFE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <MapPin size={18} color="#e29d62" />
              <span>Mở Chỉ Đường Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
