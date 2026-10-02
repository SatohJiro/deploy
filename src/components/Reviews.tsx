'use client';

import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '@/data/galleryData';

export default function Reviews() {
  return (
    <section
      id="danh-gia"
      style={{
        padding: '90px 0',
        backgroundColor: '#fbf8f3',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Cảm Nhận Khách Hàng</span>
          <h2 className="section-title">Khách Hàng Nói Gì Về Ông Mập Coffee?</h2>
          <p className="section-desc">
            Sự hài lòng của khách quen tại khu vực Tân Bình và Tân Sơn là niềm động lực lớn nhất để
            chúng tôi nỗ lực mỗi ngày.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 48px auto',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 6px 20px rgba(33, 16, 8, 0.05)',
            border: '1px solid rgba(63, 34, 22, 0.08)',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 900, color: '#1f110b', lineHeight: 1 }}>
              4.8
            </span>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#6e5d53' }}>
                Dựa trên hơn 500+ lượt đánh giá hài lòng
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#eaf4ed',
              color: '#2a5a34',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700
            }}
          >
            <ThumbsUp size={16} />
            <span>98% Khách Hứa Hẹn Quay Lại</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px'
          }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '28px 24px',
                border: '1px solid rgba(63, 34, 22, 0.08)',
                boxShadow: '0 4px 18px rgba(33, 16, 8, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#9d8b80' }}>{review.date}</span>
                </div>

                <p
                  style={{
                    color: '#4e3f36',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}
                >
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingTop: '16px',
                  borderTop: '1px solid #f1e7dc'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#f7e6d4',
                    color: '#8b5a2b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}
                >
                  {review.avatarText}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1f110b', marginBottom: '2px' }}>
                    {review.author}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: '#887467' }}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
