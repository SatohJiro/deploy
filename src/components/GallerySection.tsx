'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { GalleryItem } from '@/types';

export default function GallerySection() {
  const [filter, setFilter] = useState<'all' | 'space' | 'drinks' | 'night'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section
      id="khong-gian"
      style={{
        padding: '90px 0',
        backgroundColor: '#fbf8f3',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Góc Ảnh Thực Tế</span>
          <h2 className="section-title">Không Gian & Thức Uống Quán</h2>
          <p className="section-desc">
            Hình ảnh thật 100% chụp tại Ông Mập Coffee - từ giàn cây leo xanh mướt mát rượi làn sương,
            những góc bàn gỗ mộc mạc đến từng ly cà phê phin sánh đậm và tách sinh tố thơm ngon.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              backgroundColor: filter === 'all' ? '#1c0e08' : '#ffffff',
              color: filter === 'all' ? '#ffffff' : '#3f2216',
              border: filter === 'all' ? '1px solid #1c0e08' : '1px solid #ebdcd0',
              boxShadow: filter === 'all' ? '0 4px 12px rgba(28, 14, 8, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Tất Cả Ảnh ({GALLERY_ITEMS.length})
          </button>

          <button
            onClick={() => setFilter('space')}
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              backgroundColor: filter === 'space' ? '#1c0e08' : '#ffffff',
              color: filter === 'space' ? '#ffffff' : '#3f2216',
              border: filter === 'space' ? '1px solid #1c0e08' : '1px solid #ebdcd0',
              boxShadow: filter === 'space' ? '0 4px 12px rgba(28, 14, 8, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            🌿 Không Gian Sân Vườn
          </button>

          <button
            onClick={() => setFilter('drinks')}
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              backgroundColor: filter === 'drinks' ? '#1c0e08' : '#ffffff',
              color: filter === 'drinks' ? '#ffffff' : '#3f2216',
              border: filter === 'drinks' ? '1px solid #1c0e08' : '1px solid #ebdcd0',
              boxShadow: filter === 'drinks' ? '0 4px 12px rgba(28, 14, 8, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            ☕ Thức Uống Thực Tế
          </button>

          <button
            onClick={() => setFilter('night')}
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              backgroundColor: filter === 'night' ? '#1c0e08' : '#ffffff',
              color: filter === 'night' ? '#ffffff' : '#3f2216',
              border: filter === 'night' ? '1px solid #1c0e08' : '1px solid #ebdcd0',
              boxShadow: filter === 'night' ? '0 4px 12px rgba(28, 14, 8, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            🏮 Lung Linh Về Đêm
          </button>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                height: '300px',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#2c180f',
                boxShadow: '0 6px 20px rgba(33, 16, 8, 0.08)'
              }}
              className="gallery-card"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                className="gallery-img"
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(20, 10, 5, 0.88) 0%, rgba(20, 10, 5, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  color: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: '#e29d62',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      {item.categoryLabel}
                    </span>
                    <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 600, lineHeight: 1.3 }}>
                      {item.title}
                    </h4>
                  </div>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0
                    }}
                  >
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 70,
            backgroundColor: 'rgba(10, 5, 2, 0.94)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 75
            }}
            aria-label="Đóng"
          >
            <X size={24} />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 75
            }}
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 75
            }}
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Content Container */}
          <div
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '65vh',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <Image
                src={filteredGallery[lightboxIndex].src}
                alt={filteredGallery[lightboxIndex].title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Caption & Counter */}
            <div
              style={{
                marginTop: '16px',
                textAlign: 'center',
                color: '#ffffff',
                maxWidth: '600px'
              }}
            >
              <span style={{ fontSize: '0.82rem', color: '#c88a58', fontWeight: 700, textTransform: 'uppercase' }}>
                Ảnh {lightboxIndex + 1} / {filteredGallery.length} • {filteredGallery[lightboxIndex].categoryLabel}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '4px', marginBottom: '6px' }}>
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#d1beaf' }}>
                {filteredGallery[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
