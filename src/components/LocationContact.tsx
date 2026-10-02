'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    time: '',
    note: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', guests: '2', time: '', note: '' });
    }, 5000);
  };

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
            gap: '40px',
            alignItems: 'stretch'
          }}
          className="contact-grid"
        >
          {/* Left: Info Cards & Quick Booking */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Info Box */}
            <div
              style={{
                backgroundColor: '#fbf8f3',
                borderRadius: '24px',
                padding: '36px 30px',
                border: '1.5px solid rgba(63, 34, 22, 0.08)'
              }}
            >
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                      Hotline Đặt Chỗ & Mang Đi
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
              </div>

              {/* Direct Maps Link Button */}
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #ebdcd0' }}>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  <Navigation size={18} />
                  <span>Mở Ứng Dụng Google Maps Chỉ Đường</span>
                </a>
              </div>
            </div>

            {/* Quick Reservation Form */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '32px 30px',
                border: '1.5px solid rgba(63, 34, 22, 0.08)',
                boxShadow: '0 4px 20px rgba(33, 16, 8, 0.04)'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', color: '#1f110b', marginBottom: '8px' }}>
                Đặt Bàn Trước Hoặc Đặt Nước Sớm
              </h3>
              <p style={{ color: '#68564c', fontSize: '0.88rem', marginBottom: '20px' }}>
                Đi nhóm đông hoặc cần giữ bàn làm việc/xem bóng đá? Hãy để lại thông tin, quán sẽ chuẩn bị chu đáo!
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#eaf4ed',
                    border: '1.5px solid #2a5a34',
                    borderRadius: '16px',
                    padding: '20px',
                    color: '#1e4626',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <CheckCircle2 size={24} color="#2a5a34" style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, display: 'block' }}>Gửi Yêu Cầu Thành Công!</span>
                    <span style={{ fontSize: '0.86rem' }}>Ông Mập Coffee đã nhận thông tin và sẽ chuẩn bị sẵn sàng đón bạn.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3f2216', display: 'block', marginBottom: '4px' }}>
                        Tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Anh Tuấn..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1px solid #ebdcd0',
                          backgroundColor: '#fbf8f3',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3f2216', display: 'block', marginBottom: '4px' }}>
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09xx..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1px solid #ebdcd0',
                          backgroundColor: '#fbf8f3',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3f2216', display: 'block', marginBottom: '4px' }}>
                        Số lượng người
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1px solid #ebdcd0',
                          backgroundColor: '#fbf8f3',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      >
                        <option value="1-2">1 - 2 người</option>
                        <option value="3-5">3 - 5 người</option>
                        <option value="6-10">6 - 10 người</option>
                        <option value="10+">Nhóm trên 10 người</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3f2216', display: 'block', marginBottom: '4px' }}>
                        Thời gian dự kiến
                      </label>
                      <input
                        type="text"
                        placeholder="VD: 09h sáng nay"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1px solid #ebdcd0',
                          backgroundColor: '#fbf8f3',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3f2216', display: 'block', marginBottom: '4px' }}>
                      Ghi chú thêm (Món uống đặt trước / Bàn có ổ điện...)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="VD: Cho mình 2 ly bạc xỉu ít ngọt, bàn gần quạt mát..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid #ebdcd0',
                        backgroundColor: '#fbf8f3',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{
                      padding: '12px',
                      fontSize: '0.95rem',
                      marginTop: '6px'
                    }}
                  >
                    <Send size={16} />
                    <span>Xác Nhận Gửi Yêu Cầu</span>
                  </button>
                </form>
              )}
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

      <style jsx>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
