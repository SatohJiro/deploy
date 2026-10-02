'use client';

import React from 'react';
import { Phone, Coffee, Navigation, Camera } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function MobileActionBar() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 48,
        backgroundColor: 'rgba(28, 14, 8, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(200, 138, 88, 0.3)',
        padding: '10px 16px',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)'
      }}
      className="mobile-action-bar"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          maxWidth: '500px',
          margin: '0 auto'
        }}
      >
        {/* Call Now */}
        <a
          href={`tel:${CAFE_INFO.phone}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '6px 2px'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#c88a58',
              color: '#1a0f0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(200, 138, 88, 0.4)'
            }}
          >
            <Phone size={17} />
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#f5e4d5' }}>Gọi Quán</span>
        </a>

        {/* View Menu */}
        <a
          href="#menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '6px 2px'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#e29d62',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Coffee size={17} />
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#f5e4d5' }}>Xem Menu</span>
        </a>

        {/* Direct Maps */}
        <a
          href={CAFE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '6px 2px'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#4ade80',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Navigation size={17} />
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#f5e4d5' }}>Chỉ Đường</span>
        </a>

        {/* Cafe Space Gallery */}
        <a
          href="#khong-gian"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '6px 2px'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fcd34d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Camera size={17} />
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#f5e4d5' }}>Không Gian</span>
        </a>
      </div>
    </div>
  );
}
