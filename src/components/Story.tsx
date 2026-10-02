'use client';

import React from 'react';
import Image from 'next/image';
import { Droplets, Heart, Coffee, CheckCircle2 } from 'lucide-react';

export default function Story() {
  return (
    <section
      id="ve-ong-map"
      style={{
        padding: '90px 0',
        backgroundColor: '#fbf8f3',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Về Chúng Tôi</span>
          <h2 className="section-title">
            Chuyện Quán “Ông Mập” & Một Góc Xanh Yên Bình
          </h2>
          <p className="section-desc">
            Không màu mè hào nhoáng, Ông Mập Coffee ra đời với một mong muốn giản dị: mang lại một chốn
            ngồi mát mẻ, ly cà phê mộc đậm đà chuẩn vị và sự hiếu khách ấm áp như chính con người Sài Gòn.
          </p>
        </div>

        {/* 2-Column Story Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '60px'
          }}
          className="story-grid"
        >
          {/* Left Column: Image Collage */}
          <div
            className="story-collage"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}
          >
            {/* Image 1: Garden Patio */}
            <div
              className="story-img story-img-1"
              style={{
                position: 'relative',
                height: '320px',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 12px 28px rgba(33, 16, 8, 0.12)'
              }}
            >
              <Image
                src="/images/cafe-garden-patio.jpg"
                alt="Không gian sân vườn gạch mộc tại Ông Mập Coffee"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(20, 10, 5, 0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  color: '#f7dfca',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}
              >
                Góc vườn gạch mộc
              </div>
            </div>

            {/* Image 2: Night Lanterns */}
            <div
              className="story-img story-img-2"
              style={{
                position: 'relative',
                height: '320px',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 12px 28px rgba(33, 16, 8, 0.12)',
                marginTop: '28px'
              }}
            >
              <Image
                src="/images/facade-lanterns.jpg"
                alt="Đèn lồng ấm áp về đêm tại Ông Mập Coffee"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(20, 10, 5, 0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  color: '#f7dfca',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}
              >
                Ấm cúng về đêm
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              className="story-badge"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#ffffff',
                padding: '14px 18px',
                borderRadius: '16px',
                boxShadow: '0 16px 36px rgba(44, 24, 16, 0.18)',
                border: '2px solid #e29d62',
                textAlign: 'center',
                zIndex: 5,
                maxWidth: 'calc(100% - 24px)',
                boxSizing: 'border-box'
              }}
            >
              <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, color: '#2c180f' }}>
                100% Cà Phê Mộc
              </span>
              <span style={{ fontSize: '0.8rem', color: '#2a5a34', fontWeight: 600, display: 'block' }}>
                Phun Sương Mát Mẻ Quanh Năm
              </span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#c88a58',
                fontWeight: 700,
                fontSize: '0.86rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}
            >
              <span>Nét Đẹp Giản Dị Sài Gòn</span>
            </div>

            <h3
              style={{
                fontSize: '1.85rem',
                color: '#1f110b',
                marginBottom: '18px',
                lineHeight: 1.3
              }}
            >
              Vì Sao Lại Là “Ông Mập”?
            </h3>

            <p style={{ color: '#5a473c', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '16px' }}>
              Người Sài Gòn thường gọi nhau bằng những cái tên mộc mạc, thân tình. “Ông Mập” không chỉ
              là một cái tên, mà là biểu trưng cho sự phóng khoáng, xởi lởi, hào sảng. Đến đây, bạn luôn
              được chào đón bằng sự niềm nở, ly trà lài thơm mát lạnh luôn đầy ắp mà chẳng bao giờ
              tính thêm phụ phí.
            </p>

            <p style={{ color: '#5a473c', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '24px' }}>
              Giữa trưa hè oi ả của Tân Bình, khi bước vào quán, <strong>hệ thống phun sương tự động</strong> kết
              hợp cùng <strong>giàn cây leo xanh mát</strong> phủ quanh mái hiên sẽ làm dịu ngay cái nóng rát,
              trả lại cho bạn một không gian trong lành, dễ chịu như đang ở miền xanh yên ả.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={20} color="#2a5a34" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#2c180f', fontSize: '0.95rem', fontWeight: 500 }}>
                  <strong>Hạt cà phê nguyên chất:</strong> Rang mộc, không tẩm bột bắp hay chất tạo màu độc hại, hậu ngọt sâu lắng.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={20} color="#2a5a34" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#2c180f', fontSize: '0.95rem', fontWeight: 500 }}>
                  <strong>Hệ thống phun sương mát lạnh:</strong> Giảm 3-5°C nhiệt độ không gian, dễ chịu cho cả người lớn tuổi và trẻ nhỏ.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={20} color="#2a5a34" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#2c180f', fontSize: '0.95rem', fontWeight: 500 }}>
                  <strong>Menu phong phú giá bình dân:</strong> Hơn 30 món nước từ Cà phê phin, Đá xay, Sinh tố hoa quả đến Trà sữa.
                </span>
              </div>
            </div>

            <div className="story-cta-group" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="#menu" className="btn btn-primary" style={{ padding: '12px 26px' }}>
                Xem Menu Đồ Uống
              </a>
              <a href="#khong-gian" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                Xem Ảnh Không Gian
              </a>
            </div>
          </div>
        </div>

        {/* 3 Highlight Cards */}
        <div
          className="story-highlight-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '30px 26px',
              border: '1px solid rgba(63, 34, 22, 0.08)',
              boxShadow: '0 4px 20px rgba(33, 16, 8, 0.04)',
              transition: 'var(--ease-smooth)'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#eaf4ed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2a5a34',
                marginBottom: '18px'
              }}
            >
              <Droplets size={26} />
            </div>
            <h4 style={{ fontSize: '1.25rem', color: '#1f110b', marginBottom: '8px' }}>
              Không Gian Phun Sương Mát Lạnh
            </h4>
            <p style={{ color: '#68564c', fontSize: '0.93rem', lineHeight: 1.65 }}>
              Dàn vòi phun sương tự động bao phủ khắp mái hiên và sân cây, mang lại làn sương mát dịu,
              giữ ẩm tự nhiên cho cây cỏ và làm mát khách ngồi.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '30px 26px',
              border: '1px solid rgba(63, 34, 22, 0.08)',
              boxShadow: '0 4px 20px rgba(33, 16, 8, 0.04)'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#f7e6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c88a58',
                marginBottom: '18px'
              }}
            >
              <Coffee size={26} />
            </div>
            <h4 style={{ fontSize: '1.25rem', color: '#1f110b', marginBottom: '8px' }}>
              Bàn Ghế Gỗ Mộc & Gạch Thẻ
            </h4>
            <p style={{ color: '#68564c', fontSize: '0.93rem', lineHeight: 1.65 }}>
              Bàn ghế được đóng từ gỗ mộc tự nhiên với vân thô chắc chắn, xen kẽ những cột gạch đỏ
              và chụp đèn tre nứa tạo nên một không gian xưa cũ nhưng tràn đầy sức sống.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '30px 26px',
              border: '1px solid rgba(63, 34, 22, 0.08)',
              boxShadow: '0 4px 20px rgba(33, 16, 8, 0.04)'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#fdf2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#dc2626',
                marginBottom: '18px'
              }}
            >
              <Heart size={26} />
            </div>
            <h4 style={{ fontSize: '1.25rem', color: '#1f110b', marginBottom: '8px' }}>
              Hào Sảng Chuẩn Vị Sài Gòn
            </h4>
            <p style={{ color: '#68564c', fontSize: '0.93rem', lineHeight: 1.65 }}>
              Mức giá vô cùng bình dân chỉ từ 18.000đ - 38.000đ, trà đá mát lạnh châm không giới hạn,
              nhân viên vui vẻ niềm nở, chỗ giữ xe miễn phí an toàn chu đáo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
