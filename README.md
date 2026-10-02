# ☕ Ông Mập Coffee - Website Giới Thiệu Quán & Menu

Website chính thức của quán cà phê sân vườn **Ông Mập Coffee** tại **156 Đ. Trần Thị Trọng, Tân Sơn, Hồ Chí Minh**.

Được xây dựng với **Next.js (App Router)**, tối ưu chuẩn SEO (Local Business Schema JSON-LD), giao diện Responsive chuẩn UX/UI cho Mobile & Desktop, tích hợp ảnh thực tế của quán và hệ thống tìm kiếm menu tức thì.

---

## 🎨 Tông Màu & Ngôn Ngữ Thiết Kế
* **Nâu Cà Phê Mộc & Espresso (`#120905`, `#1f110b`, `#2c180f`)**: Đại diện cho hạt cà phê rang mộc nguyên chất, bàn ghế gỗ mộc tự nhiên.
* **Hổ Phách & Caramel Ấm (`#c88a58`, `#e29d62`)**: Sắc bọt cà phê phin, sữa đặc và ánh đèn lồng ấm cúng về đêm.
* **Xanh Sân Vườn Nhiệt Đới (`#2a5a34`, `#eaf4ed`)**: Điểm nhấn cho giàn cây leo xanh mướt và hệ thống phun sương làm mát đặc trưng của quán.
* **Kem Sữa Tự Nhiên (`#fbf8f3`, `#f4ede2`)**: Nền thanh lịch, thoáng mắt, dễ chịu khi đọc menu.

---

## 🚀 Tính Năng Chính
1. **Hero Section Ấn Tượng**:
   - Hình ảnh mặt tiền giàn cây leo & hệ thống phun sương mát rượi.
   - Badge trạng thái trực tiếp: `🟢 Đang mở cửa • 06:00 - 22:30`.
   - Nút gọi nhanh hotline và mở Google Maps chỉ đường.
2. **Câu Chuyện Về Ông Mập**:
   - Nguồn gốc cái tên thân thương, tinh thần hào sảng của người Sài Gòn.
   - Hệ thống phun sương giảm 3-5°C nhiệt độ giữa trưa hè.
3. **Thực Đơn (Menu) Tương Tác Đầy Đủ**:
   - Đầy đủ 6 danh mục: Cà phê & Cacao, Đá xay kem tươi, Sinh tố trái cây, Sữa chua đặc biệt, Trà sữa & Trà thanh nhiệt, Soda giải khát.
   - Tìm kiếm món theo tên (Real-time dynamic search).
   - Bộ lọc món Bán chạy (Best Seller) / Signature.
   - Modal xem bảng menu gỗ khắc gốc tại quán.
4. **Gallery 12 Ảnh Thực Tế Kèm Lightbox**:
   - Bộ lọc ảnh: Tất cả, Sân vườn, Đồ uống thật, Không gian đêm lung linh.
   - Trình xem ảnh phóng to toàn màn hình với nút Prev / Next.
5. **Tiện Ích & Đánh Giá Khách Hàng**:
   - Phun sương mát, Wifi cáp quang, ổ cắm từng bàn, bãi xe an toàn, trà đá thơm miễn phí.
   - Đánh giá từ khách quen khu vực Tân Bình.
6. **Vị Trí, Bản Đồ & Đặt Bàn Nhanh**:
   - Nhúng Google Maps tương tác.
   - Nút mở ứng dụng Google Maps điều hướng thẳng tới 156 Trần Thị Trọng.
   - Form đặt chỗ / đặt nước trước.
7. **Thanh Thao Tác Nhanh Trên Mobile (Bottom Action Bar)**:
   - 4 nút ghim dưới đáy màn hình điện thoại: Gọi Quán • Xem Menu • Chỉ Đường • Đặt Bàn.
8. **SEO Chuẩn Senior**:
   - Next.js Metadata API, OpenGraph preview, Twitter card.
   - JSON-LD Structured Data Schema cho `CafeOrCoffeeShop` & `LocalBusiness`.
   - Sitemap tự động (`sitemap.xml`) và `robots.txt`.

---

## 💻 Hướng Dẫn Chạy Local
```bash
# 1. Cài đặt dependencies (nếu chưa có)
npm install

# 2. Chạy server phát triển
npm run dev

# 3. Mở trình duyệt truy cập:
http://localhost:3000
```

---

## ☁️ Hướng Dẫn Deploy Miễn Phí 0đ Lên Cloudflare Pages
Đúng với tinh thần **Vibe Code -> Push GitHub -> Cloudflare tự build**:

1. Tạo một repository mới trên **GitHub** và push code lên:
   ```bash
   git remote add origin https://github.com/<tai-khoan-cua-ban>/ong-map-coffee.git
   git branch -M main
   git push -u origin main
   ```
2. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Vào mục **Workers & Pages** → Chọn **Create application** → Chọn tab **Pages** → Bấm **Connect to Git**.
4. Chọn repo vừa push.
5. Thiết lập Build Settings:
   - **Framework preset**: `Next.js`
   - **Build command**: `npx @cloudflare/next-on-pages@1` hoặc `npm run build`
   - **Build output directory**: `.vercel/output/static` hoặc `out`
6. Bấm **Save and Deploy**. Cloudflare sẽ tự động build và cấp cho bạn một tên miền miễn phí dạng: `ong-map-coffee.pages.dev` có sẵn SSL, CDN toàn cầu và bảo mật DDoS!
