'use client';

import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function LocationContact() {
  return (
    <section
      id="lien-he"
      style={{
        padding: '90px 0',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Vị Trí & Liên Hệ</span>
          <h2 className="section-title">Ghé Thăm Ông Mập Coffee</h2>
          <p className="section-desc">
            Nằm trên trục đường <strong>Trần Thị Trọng (Tân Sơn, Tân Bình)</strong>, quán có không gian
            sân vườn thoáng đãng, dễ tìm, bãi xe máy ngay mặt tiền vô cùng thuận tiện.
          </p>
        </div>

        {/* 2 Columns: Contact Details & Google Maps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '36px',
            alignItems: 'stretch'
          }}
          className="contact-grid"
        >
          {/* Left: Info Card */}
          <div
            className="contact-card"
            style={{
              backgroundColor: '#fbf8f3',
              borderRadius: '24px',
              padding: '36px 30px',
              border: '1.5px solid rgba(63, 34, 22, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: '#1f110b',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span>Thông Tin Quán</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#f7e6d4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c88a58',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.84rem', color: '#8b796f', fontWeight: 600, textTransform: 'uppercase' }}>
                      Địa Chỉ Quán
                    </span>
                    <p style={{ color: '#1f110b', fontWeight: 600, fontSize: '1.05rem', marginTop: '2px' }}>
                      {CAFE_INFO.address}
                    </p>
                    <span style={{ fontSize: '0.84rem', color: '#68564c', display: 'block', marginTop: '3px' }}>
                      (Khu vực Tân Sơn, Phường 15, Quận Tân Bình, TP.HCM)
                    </span>
                  </div>
                </div>

                {/* Hotline */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#eaf4ed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2a5a34',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.84rem', color: '#8b796f', fontWeight: 600, textTransform: 'uppercase' }}>
                      Hotline Hỗ Trợ & Mang Đi
                    </span>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '4px' }}>
                      <a
                        href={`tel:${CAFE_INFO.phone}`}
                        style={{ color: '#2a5a34', fontWeight: 700, fontSize: '1.08rem' }}
                      >
                        {CAFE_INFO.phoneDisplay}
                      </a>
                      <span style={{ color: '#c4b5ab' }}>•</span>
                      <a
                        href={`tel:${CAFE_INFO.altPhone}`}
                        style={{ color: '#2a5a34', fontWeight: 700, fontSize: '1.08rem' }}
                      >
                        {CAFE_INFO.altPhoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#fef3c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#d97706',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.84rem', color: '#8b796f', fontWeight: 600, textTransform: 'uppercase' }}>
                      Thời Gian Mở Cửa
                    </span>
                    <p style={{ color: '#1f110b', fontWeight: 700, fontSize: '1.05rem', marginTop: '2px' }}>
                      {CAFE_INFO.openingHours}
                    </p>
                    <span style={{ fontSize: '0.84rem', color: '#2a5a34', fontWeight: 600 }}>
                      ✓ Mở cửa liên tục tất cả các ngày trong tuần (kể cả Lễ, Tết)
                    </span>
                  </div>
                </div>

                {/* Perks Checklist */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    padding: '16px 18px',
                    border: '1px solid #ebdcd0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#3f2216' }}>
                    <CheckCircle2 size={16} color="#2a5a34" style={{ flexShrink: 0 }} />
                    <span>Bãi giữ xe máy miễn phí an toàn ngay trước quán</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#3f2216' }}>
                    <CheckCircle2 size={16} color="#2a5a34" style={{ flexShrink: 0 }} />
                    <span>Hệ thống phun sương tự động mát dịu quanh năm</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#3f2216' }}>
                    <CheckCircle2 size={16} color="#2a5a34" style={{ flexShrink: 0 }} />
                    <span>Trà đá thơm mát lạnh phục vụ miễn phí không giới hạn</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#3f2216' }}>
                    <CheckCircle2 size={16} color="#2a5a34" style={{ flexShrink: 0 }} />
                    <span>Wifi tốc độ cao & ổ điện tiện làm việc, xem bóng đá</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid #ebdcd0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary full-width-btn"
                style={{ width: '100%', padding: '13px 16px', fontSize: '0.94rem' }}
              >
                <Navigation size={18} />
                <span>Chỉ Đường Bằng Google Maps</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="btn btn-dark full-width-btn"
                style={{ width: '100%', padding: '13px 16px', fontSize: '0.94rem' }}
              >
                <Phone size={18} />
                <span>Gọi Quán: {CAFE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Google Map */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fbf8f3',
              borderRadius: '24px',
              padding: '16px',
              border: '1.5px solid rgba(63, 34, 22, 0.08)',
              overflow: 'hidden',
              minHeight: '480px'
            }}
          >
            <div
              style={{
                position: 'relative',
                flex: 1,
                minHeight: '420px',
                borderRadius: '18px',
                overflow: 'hidden'
              }}
            >
              <iframe
                title="Bản đồ chỉ đường đến Ông Mập Coffee"
                src="https://maps.google.com/maps?q=156%20Tr%E1%BA%A7n%20Th%E1%BB%8B%20Tr%E1%BB%8Dng,%20Ph%C6%B0%E1%BB%9Dng%2015,%20T%C3%A2n%20B%C3%ACnh,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div
              style={{
                marginTop: '14px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#c88a58" />
                <span style={{ fontSize: '0.88rem', color: '#2c180f', fontWeight: 600 }}>
                  156 Đ. Trần Thị Trọng, Tân Sơn, Hồ Chí Minh
                </span>
              </div>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.85rem',
                  color: '#2a5a34',
                  fontWeight: 700,
                  textDecoration: 'underline'
                }}
              >
                Mở Bản Đồ Lớn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
