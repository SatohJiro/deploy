'use client';

import React from 'react';
import { Droplets, Coffee, Wifi, ShieldCheck, HeartHandshake, Tv } from 'lucide-react';
import { CAFE_INFO } from '@/data/cafeInfo';

export default function Features() {
  const amenities = [
    {
      icon: <Droplets size={28} color="#2a5a34" />,
      bg: '#eaf4ed',
      title: 'Hệ Thống Phun Sương Mát Lạnh',
      desc: 'Dàn vòi phun sương bao phủ khắp mái hiên và sân cây, làm dịu cái nóng oi ả của trưa hè Sài Gòn tức thì.'
    },
    {
      icon: <Coffee size={28} color="#c88a58" />,
      bg: '#f7e6d4',
      title: 'Cà Phê Rang Mộc Nguyên Chất',
      desc: 'Pha phin truyền thống thơm đượm nồng nàn, hạt sạch không tẩm hương liệu công nghiệp, vị êm ái hậu ngọt.'
    },
    {
      icon: <Wifi size={28} color="#2563eb" />,
      bg: '#eff6ff',
      title: 'Wifi Tốc Độ Cao & Ổ Cắm Điện',
      desc: 'Băng thông rộng ổn định, bố trí ổ điện tại các khu vực bàn gỗ, thoải mái làm việc từ xa, học tập cả ngày.'
    },
    {
      icon: <HeartHandshake size={28} color="#d97706" />,
      bg: '#fef3c7',
      title: 'Trà Lài Ướp Lạnh Miễn Phí',
      desc: 'Ly trà đá thơm nức hương hoa lài/sen luôn được nhân viên quán châm liên tục miễn phí, hào sảng chuẩn Sài Gòn.'
    },
    {
      icon: <ShieldCheck size={28} color="#16a34a" />,
      bg: '#f0fdf4',
      title: 'Bãi Xe Rộng & Có Người Trông',
      desc: 'Khu vực đỗ xe ngay trước mặt tiền quán, nhân viên hỗ trợ dắt xe chu đáo, an tâm thưởng thức cà phê.'
    },
    {
      icon: <Tv size={28} color="#9333ea" />,
      bg: '#faf5ff',
      title: 'Trực Tiếp Bóng Đá Sôi Động',
      desc: 'Màn hình lớn sắc nét phục vụ các trận cầu đỉnh cao Ngoại Hạng Anh, Cúp C1 và Đội Tuyển Việt Nam.'
    }
  ];

  return (
    <section
      id="tien-ich"
      style={{
        padding: '90px 0',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Tiện Ích & Trải Nghiệm</span>
          <h2 className="section-title">Tại Sao Khách Hàng Yêu Thích Ông Mập?</h2>
          <p className="section-desc">
            Không chỉ là một quán cà phê, chúng tôi mong muốn mang đến một không gian thư thái,
            dễ chịu để bạn khởi đầu ngày mới hay nạp lại năng lượng sau giờ làm việc.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px'
          }}
        >
          {amenities.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fbf8f3',
                borderRadius: '20px',
                padding: '30px 26px',
                border: '1.5px solid rgba(63, 34, 22, 0.06)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(33, 16, 8, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(200, 138, 88, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(63, 34, 22, 0.06)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                {item.icon}
              </div>

              <h4
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#1f110b',
                  marginBottom: '10px'
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: '#655348',
                  fontSize: '0.94rem',
                  lineHeight: 1.65
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
