'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Phone, MapPin, Menu, X, Clock, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang Chủ', href: '#trang-chu' },
    { label: 'Về Ông Mập', href: '#ve-ong-map' },
    { label: 'Thực Đơn (Menu)', href: '#menu' },
    { label: 'Không Gian Quán', href: '#khong-gian' },
    { label: 'Tiện Ích', href: '#tien-ich' },
    { label: 'Đánh Giá', href: '#danh-gia' },
    { label: 'Vị Trí & Liên Hệ', href: '#lien-he' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1b0f09]/90 backdrop-blur-md shadow-lg border-b border-[#c88a58]/20 py-3'
            : 'bg-gradient-to-b from-[#140a05]/95 via-[#1b0f09]/80 to-transparent py-4'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(27, 15, 9, 0.94)' : 'rgba(20, 10, 5, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid rgba(200, 138, 88, 0.25)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          padding: isScrolled ? '10px 0' : '16px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <Link
            href="#trang-chu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c88a58 0%, #e29d62 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1a0f0a',
                boxShadow: '0 4px 14px rgba(200, 138, 88, 0.4)',
                flexShrink: 0
              }}
            >
              <Coffee size={24} strokeWidth={2.4} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '0.5px',
                  display: 'block',
                  lineHeight: 1.15
                }}
              >
                ÔNG MẬP <span style={{ color: '#e29d62' }}>Coffee</span>
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: '#d4c2b5',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Sparkles size={11} color="#e29d62" /> Cà phê mộc & Sân vườn mát rượi
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#f0e6de',
                  fontSize: '0.94rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '6px 0',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e29d62')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#f0e6de')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="btn btn-primary"
              style={{
                display: 'none',
                padding: '9px 18px',
                fontSize: '0.88rem'
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
              className="btn btn-dark"
              style={{
                padding: '9px 16px',
                fontSize: '0.88rem',
                border: '1px solid rgba(200, 138, 88, 0.4)'
              }}
              title="Chỉ đường Google Maps"
            >
              <MapPin size={15} color="#e29d62" />
              <span className="hide-on-mobile">Chỉ Đường</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
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
            backgroundColor: 'rgba(15, 8, 4, 0.96)',
            backdropFilter: 'blur(16px)',
            paddingTop: '90px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                padding: '12px 16px',
                background: 'rgba(200, 138, 88, 0.12)',
                borderRadius: '12px',
                border: '1px solid rgba(200, 138, 88, 0.25)',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#e29d62',
                fontSize: '0.86rem'
              }}
            >
              <Clock size={16} />
              <span>Mở cửa: 06:00 - 22:30 (Cả tuần)</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '1.18rem',
                  fontFamily: 'var(--font-heading)',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: '#c88a58', fontSize: '1rem' }}>→</span>
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
              <span>Gọi Ngay: {CAFE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <MapPin size={18} color="#e29d62" />
              <span>Mở Google Maps Đến Quán</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          #desktop-call-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
