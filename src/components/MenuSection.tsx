'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Search,
  Phone,
  Eye,
  X,
  Check,
  Coffee,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menuData';
import { CAFE_INFO } from '@/data/cafeInfo';
import { MenuItem } from '@/types';

const INITIAL_VISIBLE_COUNT = 9;

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterBestSeller, setFilterBestSeller] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showOriginalMenuModal, setShowOriginalMenuModal] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  // Handlers that reset pagination to initial count when changing criteria
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleToggleBestSeller = () => {
    setFilterBestSeller((prev) => !prev);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  // Filter items based on active category, search query and best seller flag
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchBestSeller = !filterBestSeller || item.isBestSeller || item.isSignature;
      return matchCategory && matchSearch && matchBestSeller;
    });
  }, [activeCategory, searchQuery, filterBestSeller]);

  // Paginated/Visible subset of items
  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <section
      id="menu"
      style={{
        padding: '90px 0',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Thực Đơn Đầy Đủ</span>
          <h2 className="section-title">Khám Phá Menu Ông Mập Coffee</h2>
          <p className="section-desc">
            Từ những giọt cà phê phin rang mộc đậm đà truyền thống đến ly sinh tố trái cây tươi xay
            mỗi ngày, tất cả đều được chế biến với tâm huyết và mức giá bình dân từ 18k - 38k.
          </p>

          {/* Action to View Original Wooden Board Menu */}
          <div style={{ marginTop: '18px' }}>
            <button
              onClick={() => setShowOriginalMenuModal(true)}
              className="btn btn-wood-menu"
              style={{
                fontSize: '0.92rem',
                padding: '10px 24px',
                cursor: 'pointer'
              }}
            >
              <Eye size={17} />
              <span>Xem Bảng Menu Gỗ Khắc Gốc Tại Quán</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          {/* Top Row: Search Input & Quick Toggle */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {/* Search Bar */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 300px',
                maxWidth: '480px'
              }}
            >
              <input
                type="text"
                placeholder="Tìm món: Cà phê phin, Bạc xỉu, Sinh tố bơ, Oreo..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 20px 13px 44px',
                  borderRadius: '9999px',
                  border: '1.5px solid #ebdcd0',
                  backgroundColor: '#fbf8f3',
                  fontSize: '0.95rem',
                  color: '#2c180f',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#c88a58')}
                onBlur={(e) => (e.target.style.borderColor = '#ebdcd0')}
              />
              <Search
                size={18}
                color="#8b796f"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#8b796f'
                  }}
                  aria-label="Xóa tìm kiếm"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Quick Filter: Best Sellers */}
            <button
              onClick={handleToggleBestSeller}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 20px',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: filterBestSeller ? '1.5px solid #c88a58' : '1.5px solid #ebdcd0',
                backgroundColor: filterBestSeller ? '#f7e6d4' : '#ffffff',
                color: filterBestSeller ? '#2c180f' : '#5f4e44',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!filterBestSeller) {
                  e.currentTarget.style.borderColor = '#c88a58';
                  e.currentTarget.style.backgroundColor = '#fbf8f3';
                }
              }}
              onMouseLeave={(e) => {
                if (!filterBestSeller) {
                  e.currentTarget.style.borderColor = '#ebdcd0';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }
              }}
            >
              <span>Chỉ hiện món Bán Chạy / Đặc Sản</span>
              {filterBestSeller && <Check size={14} color="#2c180f" />}
            </button>
          </div>

          {/* Clean Category Tabs (Pure, Elegant Typography) */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '8px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            className="category-tabs"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    borderRadius: '9999px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive ? '#1c0e08' : '#f4ede2',
                    color: isActive ? '#ffffff' : '#3f2216',
                    border: isActive ? '1px solid #1c0e08' : '1px solid transparent',
                    boxShadow: isActive ? '0 4px 14px rgba(28, 14, 8, 0.2)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#ebe0d5';
                      e.currentTarget.style.color = '#1c0e08';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#f4ede2';
                      e.currentTarget.style.color = '#3f2216';
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.92rem', color: '#6e5d53' }}>
            Hiển thị <strong>{displayedItems.length}</strong> / <strong>{filteredItems.length}</strong> món trong thực đơn
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => handleCategoryChange('all')}
              style={{ fontSize: '0.85rem', color: '#c88a58', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}
            >
              Xem tất cả danh mục
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <>
            <div
              className="menu-items-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
                gap: '20px'
              }}
            >
              {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="menu-card"
              >
                {/* Thumbnail */}
                <div className="menu-card-thumb">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ color: '#c88a58' }}>
                      <Coffee size={32} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="menu-card-info">
                  <div>
                    {/* Tags (Clean typography) */}
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      {item.isBestSeller && (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            backgroundColor: '#fee2e2',
                            color: '#b91c1c',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            letterSpacing: '0.3px'
                          }}
                        >
                          Bán Chạy
                        </span>
                      )}
                      {item.isSignature && (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            backgroundColor: '#fef3c7',
                            color: '#92400e',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            letterSpacing: '0.3px'
                          }}
                        >
                          Đặc Sản Quán
                        </span>
                      )}
                      {item.isNew && (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            backgroundColor: '#dcfce7',
                            color: '#15803d',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            letterSpacing: '0.3px'
                          }}
                        >
                          Món Mới
                        </span>
                      )}
                    </div>

                    <h4 className="menu-card-title">
                      {item.name}
                    </h4>

                    <p className="menu-card-desc">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Free Tea Badge */}
                  <div className="menu-card-price-row">
                    <span className="menu-card-price">
                      {formatPrice(item.price)}
                    </span>
                    <span className="menu-card-badge">
                      Kèm trà đá free
                    </span>
                  </div>
                </div>
              </div>
            ))}
            </div>

            {/* Load More / Expand Controls */}
            {filteredItems.length > INITIAL_VISIBLE_COUNT && (
              <div
                style={{
                  marginTop: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                {visibleCount < filteredItems.length ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                    <button
                      onClick={() => setVisibleCount((prev) => Math.min(prev + 9, filteredItems.length))}
                      className="btn btn-primary"
                      style={{
                        padding: '13px 28px',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 6px 20px rgba(200, 138, 88, 0.3)',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Xem Thêm Món ({filteredItems.length - visibleCount} món nữa)</span>
                      <ChevronDown size={18} />
                    </button>
                    <button
                      onClick={() => setVisibleCount(filteredItems.length)}
                      className="btn btn-outline"
                      style={{
                        padding: '13px 24px',
                        fontSize: '0.92rem',
                        borderRadius: '9999px',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Xem Toàn Bộ ({filteredItems.length} món)</span>
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#7a675d', fontWeight: 500 }}>
                      ✓ Đã hiển thị trọn vẹn toàn bộ {filteredItems.length} món trong danh mục
                    </span>
                    <button
                      onClick={() => {
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                        const menuEl = document.getElementById('menu');
                        if (menuEl) {
                          menuEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="btn btn-outline"
                      style={{
                        padding: '9px 20px',
                        fontSize: '0.88rem',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      <ChevronUp size={16} />
                      <span>Thu Gọn Lại</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#fbf8f3',
              borderRadius: '20px',
              border: '1px dashed #ebdcd0'
            }}
          >
            <Coffee size={44} color="#c88a58" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#2c180f', marginBottom: '8px' }}>
              Không tìm thấy món phù hợp với từ khóa &quot;{searchQuery}&quot;
            </h3>
            <p style={{ color: '#6e5d53', marginBottom: '18px' }}>
              Vui lòng thử tìm kiếm với tên khác hoặc chọn lại danh mục.
            </p>
            <button
              onClick={() => {
                handleSearchChange('');
                handleCategoryChange('all');
                setFilterBestSeller(false);
              }}
              className="btn btn-primary"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

        {/* Bottom Menu CTA & Takeaway Note */}
        <div
          style={{
            marginTop: '56px',
            backgroundColor: '#1f110b',
            borderRadius: '24px',
            padding: '36px 32px',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            boxShadow: '0 16px 40px rgba(28, 14, 8, 0.25)',
            border: '1px solid rgba(200, 138, 88, 0.3)'
          }}
        >
          <div>
            <span
              style={{
                color: '#e29d62',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Giao Hàng & Mang Đi Tiện Lợi
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.65rem',
                color: '#ffffff',
                marginTop: '6px',
                marginBottom: '8px'
              }}
            >
              Muốn Thưởng Thức Cà Phê Ông Mập Tại Nhà / Công Ty?
            </h3>
            <p style={{ color: '#d1beaf', fontSize: '0.96rem', maxWidth: '600px' }}>
              Gọi hotline quán để đặt mang đi hoặc chuẩn bị trước, đến nơi lấy liền không cần chờ
              đợi. Miễn phí trà đá và đóng gói cẩn thận!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              <Phone size={18} />
              <span>Gọi Đặt Nước: {CAFE_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => setShowOriginalMenuModal(true)}
              className="btn btn-white"
              style={{ padding: '14px 24px', fontSize: '0.96rem' }}
            >
              Xem Bảng Giá Gốc
            </button>
          </div>
        </div>
      </div>

      {/* Modal: Item Details */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(15, 8, 4, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '520px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', height: '260px', backgroundColor: '#2c180f' }}>
              {selectedItem.image ? (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: '#e29d62'
                  }}
                >
                  <Coffee size={64} />
                </div>
              )}
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Đóng"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', color: '#c88a58', fontWeight: 700, textTransform: 'uppercase' }}>
                    {selectedItem.categoryName}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: '#1f110b', marginTop: '2px' }}>
                    {selectedItem.name}
                  </h3>
                </div>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#c88a58' }}>
                  {formatPrice(selectedItem.price)}
                </span>
              </div>

              <p style={{ color: '#5f4e44', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '22px' }}>
                {selectedItem.description}
              </p>

              <div
                style={{
                  backgroundColor: '#fbf8f3',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  marginBottom: '24px',
                  border: '1px solid #ebdcd0',
                  fontSize: '0.88rem',
                  color: '#4a3b32',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div>✓ Phục vụ tại quán kèm trà lài thơm mát miễn phí</div>
                <div>✓ Có thể điều chỉnh lượng ngọt, đá hoặc sữa theo ý thích</div>
                <div>✓ Nguyên liệu tuyển chọn tươi mới mỗi ngày</div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '13px' }}
                >
                  <Phone size={18} />
                  <span>Gọi Đặt Món Này</span>
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn btn-outline"
                  style={{ padding: '13px 20px' }}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Original Wooden Board Menu Photo */}
      {showOriginalMenuModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(15, 8, 4, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setShowOriginalMenuModal(false)}
        >
          <div
            className="modal-box"
            style={{
              backgroundColor: '#1f110b',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              padding: '24px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              border: '1px solid rgba(200, 138, 88, 0.4)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>
                  Bảng Menu Gỗ Khắc Truyền Thống
                </h3>
                <p style={{ color: '#c0afa3', fontSize: '0.85rem' }}>
                  Bảng giá niêm yết trực tiếp tại quán Ông Mập Coffee
                </p>
              </div>
              <button
                onClick={() => setShowOriginalMenuModal(false)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Wooden Menu Preview Container */}
            <div
              className="wooden-menu-container"
              style={{
                backgroundColor: '#fbf4ea',
                borderRadius: '16px',
                padding: '24px',
                border: '4px solid #8b5a2b',
                boxShadow: 'inset 0 0 20px rgba(139, 90, 43, 0.25)',
                color: '#2c180f'
              }}
            >
              <div style={{ textAlign: 'center', borderBottom: '2px dashed #8b5a2b', paddingBottom: '16px', marginBottom: '18px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#3f2216', letterSpacing: '1px' }}>
                  ÔNG MẬP COFFEE
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#68452b', fontWeight: 600 }}>
                  156 Trần Thị Trọng, Tân Sơn, Tân Bình • ĐT: {CAFE_INFO.phoneDisplay} - {CAFE_INFO.altPhoneDisplay}
                </p>
              </div>

              {/* Condensed Categories List */}
              <div className="wooden-menu-scroll">
                <div className="wooden-menu-grid">
                  <div>
                    <h4 style={{ color: '#8b5a2b', fontSize: '1.05rem', fontWeight: 800, borderBottom: '1.5px solid #d4b895', paddingBottom: '4px', marginBottom: '8px' }}>
                      CÀ PHÊ & CACAO
                    </h4>
                    <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Cà phê đen (đá/nóng)</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>25k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Cà phê sữa (đá/nóng)</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>29k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Cafe muối</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>36k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Cà phê sữa lắc</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>33k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Bạc xỉu (đá/nóng)</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>33k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Bạc Xỉu Milo</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Cà phê kem</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>40k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Cacao kem muối</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Coffee sữa mang đi</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>25k</strong></div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: '#8b5a2b', fontSize: '1.05rem', fontWeight: 800, borderBottom: '1.5px solid #d4b895', paddingBottom: '4px', marginBottom: '8px' }}>
                      ĐÁ XAY & SỮA CHUA
                    </h4>
                    <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Oreo đá xay kem tươi</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>45k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Chocolate đá xay</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>40k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Matcha đá xay kem</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>40k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sữa chua đánh đá</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>30k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sữa chua đánh cà phê</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>35k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sữa chua việt quất</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Soda việt quất / chanh leo</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: '#8b5a2b', fontSize: '1.05rem', fontWeight: 800, borderBottom: '1.5px solid #d4b895', paddingBottom: '4px', marginBottom: '8px' }}>
                      TRÀ & TRÀ SỮA
                    </h4>
                    <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Trà sữa kem trứng</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>40k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sữa tươi trân châu đường đen</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>35k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Trà đào cam sả</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Trà đào nhài / hạt chia</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Trà dâu xí muội</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Trà vải thanh mát</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>35k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Trà tắc mật ong trân châu</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: '#8b5a2b', fontSize: '1.05rem', fontWeight: 800, borderBottom: '1.5px solid #d4b895', paddingBottom: '4px', marginBottom: '8px' }}>
                      SINH TỐ & GIẢI KHÁT
                    </h4>
                    <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sữa bắp thạch lá dứa</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sữa dừa lá nếp</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sinh tố Bơ sầu riêng</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>45k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sinh tố Bơ xoài</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>40k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Chanh Tuyết mát lạnh</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>35k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Đá me hạt đác chanh dây</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Sương sáo bí đao hạt chia</span><strong style={{ color: '#8b5a2b', minWidth: '32px', textAlign: 'right' }}>38k</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '18px', textAlign: 'center' }}>
              <button
                onClick={() => setShowOriginalMenuModal(false)}
                className="btn btn-primary"
                style={{ padding: '10px 24px' }}
              >
                Đã hiểu, quay lại xem chi tiết
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
