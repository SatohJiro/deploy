import os
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

output_dir = 'public/images/pos'
os.makedirs(output_dir, exist_ok=True)

# Mapping of screenshot index and rows to item id and name
# (None means placeholder or skip)
SCREENSHOT_MAP = {
    # 0: 1790944299727
    0: [
        ('nuoc-suoi', 'Nước suối'),
        ('coca', 'Coca'),
        ('7-up', '7 up'),
        ('sting', 'Sting'),
        ('bo-huc', 'Bò húc'),
        ('thuoc-la-meo-dieu', 'Thuốc lá mèo điếu'),
        ('thuoc-la-meo', 'Thuốc lá mèo gói'),
        ('thuoc-la-555-dieu', 'Thuốc lá 555 điếu'),
        ('thuoc-la-555', 'Thuốc lá 555 gói'),
    ],
    # 1: 1790944299798
    1: [
        ('sc-danh-da', 'Sữa chua đánh đá'),
        ('sc-danh-ca-phe', 'Sữa chua đánh cà phê'),
        ('sua-lac-chanh-leo', 'Sữa lắc chanh leo'),
        ('sc-matcha', 'Sữa chua matcha'),
        ('sc-dau', 'Sữa chua dâu'),
        ('sc-bac-ha', 'Sữa chua bạc hà'),
        ('soda-bac-ha', 'Soda bạc hà'),
        ('soda-dau', 'Soda dâu'),
        ('soda-chanh-leo', 'Soda chanh leo'),
        ('soda-viet-quat', 'Soda việt quất'),
    ],
    # 2: 1790944299866
    2: [
        ('chocolate-da-xay', 'Chocolate đá xay kem tươi'),
        ('matcha-da-xay', 'Matcha đá xay kem tươi'),
        ('viet-quat-da-xay', 'Việt quất đá xay kem tươi'),
        ('chanh-leo-da-xay', 'Chanh leo đá xay kem tươi'),
        ('dau-tay-da-xay', 'Dâu tây đá xay kem tươi'),
        ('cam-da-xay', 'Cam đá xay kem tươi'),
        ('dao-da-xay', 'Đào đá xay kem tươi'),
        ('thom-da-xay', 'Thơm đá xay kem tươi'),
        ('kiwi-da-xay', 'Kiwi đá xay kem tươi'),
        ('khoai-mon-da-xay', 'Khoai môn đá xay kem tươi'),
    ],
    # 3: 1790944300008
    3: [
        ('nuoc-ep-chanh-day', 'Nước ép chanh dây'),
        ('nuoc-ep-cam', 'Nước ép cam'),
        ('nuoc-ep-dua-hau', 'Nước ép dưa hấu'),
        ('nuoc-ep-thom', 'Nước ép thơm'),
        ('nuoc-ep-tao', 'Nước ép táo'),
        ('dua-tuoi', 'Dừa tươi'),
        ('st-bo', 'Sinh tố bơ'),
        ('st-mang-cau', 'Sinh tố mãng cầu'),
        ('st-xoai', 'Sinh tố xoài'),
        ('st-cot-dua', 'Sinh tố cốt dừa'),
    ],
    # 4: 1790944300121
    4: [
        ('cacao-sua', 'Cacao sữa'),
        ('tra-lipton', 'Trà lipton'),
        ('tra-gung-nong', 'Trà gừng nóng'),
        ('tra-dao', 'Trà đào'),
        ('tra-vai', 'Trà vải'),
        ('tra-dau', 'Trà dâu'),
        ('tra-chanh-truyen-thong', 'Trà chanh truyền thống'),
        ('tra-dao-nhai', 'Trà đào nhài'),
        ('tra-dao-cam-sa', 'Trà đào cam sả'),
        ('nuoc-chanh-tuoi', 'Nước chanh tươi'),
    ],
    # 5: 1790944300239
    5: [
        ('sc-chanh-day', 'Sữa chua chanh dây'),
        ('oreo-da-xay', 'Oreo đá xay kem tươi'),
        ('binh-tra-nong', 'Bình Trà Nóng'),
        ('lipton-mat-ong', 'Lipton mật ong'),
        ('cf-sua-lac-mang-di', 'Coffee Sữa Lắc Mang Đi'),
        ('st-bo-sau-rieng', 'Sinh Tố Bơ Sầu Riêng'),
        ('nuoc-ep-oi', 'Nước Ép Ổi'),
        ('nuoc-ep-ca-rot', 'Nước Ép Cà Rốt'),
        ('nuoc-ep-cam-ca-rot', 'Nước Ép Cam Cà Rốt'),
        ('tra-olong-chai', 'Trà OLong'),
    ],
    # 6: 1790944300316
    6: [
        ('st-sapoche', 'Sinh Tố Sapoche'),
        ('sc-viet-quat', 'Sữa Chua Việt Quất'),
        ('chanh-mat-ong', 'Chanh Mật Ong'),
        ('sua-nong', 'Sữa Nóng'),
        ('bac-xiu-mang-di', 'Bạc Xỉu Mang Đi'),
        ('cf-mang-di-sua', 'Coffee Sữa Mang Đi'),
        ('cf-mang-di-den', 'Coffee Mang Đi Đen'),
        ('nuoc-chanh-muoi', 'Nước Chanh Muối'),
        ('kem-vien', 'Kem Viên'),
        ('tra-gung-mat-ong', 'Trà Gừng Mật Ong'),
    ],
    # 7: 1790944300418
    7: [
        ('sua-tuoi-coffee', 'Sữa Tươi Coffee'),
        ('tra-khong-do', 'Trà Không Độ'),
        ('nuoc-ep-hon-hop', 'Nước Ép Hỗn Hợp'),
        ('khan-lanh', 'Khăn lạnh'),
        ('sua-tuoi', 'Sữa tươi'),
        (None, 'Nước ép ổi duplicate'),
        ('cf-den', 'Cà phê đen'),
        ('cf-sua', 'Cà phê sữa'),
        ('cf-sua-lac', 'Cà phê sữa lắc'),
        ('bac-xiu', 'Bạc xỉu'),
    ],
    # 8: 1790944300558
    8: [
        ('cafe-muoi', 'Cafe muối'),
        ('matcha-sua-dua', 'Matcha sữa dừa'),
        ('tra-xoai-chanh-leo', 'Trà xoài chanh leo'),
        ('tra-thach-dao', 'Trà thạch đào'),
        ('tra-olong-dao-cam', 'Trà olong đào cam'),
        ('cf-sua-tuoi-suong-sao', 'Cafe sữa tươi sương sáo'),
        ('sua-tuoi-tc-duong-den', 'Sữa tươi trân châu đường đen'),
        ('tra-sua-tran-chau', 'Trà sữa trân châu'),
        (None, 'Sinh tố dâu duplicate'),
        ('lipton-sua', 'Lipton sữa'),
    ],
    # 9: 1790944300654
    9: [
        ('ca-phe-hat', 'Cà phê hạt'),
        ('cacao-kem-muoi', 'Cacao kem muối'),
        ('ca-phe-kem', 'Cà phê kem'),
        ('sc-hu', 'Sữa chua hủ'),
        ('nuoc-ep-dac-biet', 'Nước ép đặc biệt'),
        ('tra-tac-mat-ong-tc', 'Trà tắc mật ong trân châu'),
        ('lipton-cam-tc', 'Lipton cam trân châu'),
        ('tra-sua-kem-trung', 'Trà sữa trân châu kem trứng'),
        ('tra-dau-xi-muoi', 'Trà dâu xí muội'),
        ('suong-sao-bi-dao', 'Sương sáo bí đao hạt chia'),
    ],
    # 10: 1790944300740
    10: [
        (None, 'Xá xị - placeholder XA'),
        (None, 'Ép cà rốt mang đi - placeholder EP'),
        (None, 'Sữa tươi cà phê mang đi - placeholder SU'),
        ('bac-xiu-nong-nho', 'Bạc Xĩu Nóng Size Nhỏ'),
        ('chanh-tuyet', 'Chanh Tuyết'),
        ('da-me-hat-dac', 'Đá Me Hạt Đác'),
        ('cacao-sua-mang-di', 'Cacao sữa mang đi'),
        ('cf-muoi-mang-di', 'Cà phê muối mang đi'),
        ('tran-chau-them', 'Trân châu thêm'),
        ('hat-huong-duong', 'Hạt hướng dương'),
    ],
    # 11: 1790944300816
    11: [
        (None, 'Phụ thu - placeholder PH'),
        (None, 'Hạt dưa - placeholder HA'),
        (None, 'Thêm khác - placeholder TH'),
        ('sua-bap-thach-la-dua', 'Sữa Bắp Thạch Lá Dứa'),
        (None, 'Matcha Lattle - placeholder MA'),
        (None, 'Sinh Tố Bơ Xoài - placeholder SI'),
        (None, 'Trà Đào Hạt Chia - placeholder TR'),
        (None, 'Sữa Tươi Caranel Trân Châu - placeholder SU'),
        (None, 'Sữa Tươi Caramel - placeholder SU'),
        (None, 'Bạc Xỉu Milo - placeholder BA'),
    ],
}

files = sorted([f for f in os.listdir('public/images/new') if f.endswith('.jpg')])

extracted_count = 0

for idx, f in enumerate(files):
    if idx not in SCREENSHOT_MAP:
        continue
    items = SCREENSHOT_MAP[idx]
    im = Image.open(os.path.join('public/images/new', f)).convert('RGB')
    
    # Locate row dividers in this screenshot
    dividers = [258]
    for y in range(350, 2260):
        p1 = im.getpixel((300, y))
        p2 = im.getpixel((500, y))
        p3 = im.getpixel((700, y))
        if p1[0] < 250 and p2[0] < 250 and p3[0] < 250 and abs(p1[0] - p1[1]) < 5:
            prev = im.getpixel((500, y-1))
            if prev[0] > 250 and (not dividers or y - dividers[-1] > 150):
                dividers.append(y)
    dividers.append(2270)
    
    print(f"\n--- Screenshot {idx}: {f} (found {len(dividers)-1} row slots, {len(items)} items mapped) ---")
    
    for row_idx, item_info in enumerate(items):
        if item_info is None or item_info[0] is None:
            print(f"  Row {row_idx}: [Placeholder/Skip] {item_info[1] if item_info else ''}")
            continue
        
        item_id, item_name = item_info
        if row_idx >= len(dividers) - 1:
            print(f"  Row {row_idx}: OUT OF BOUNDS for {item_name}")
            continue
            
        y_top = dividers[row_idx]
        y_bottom = dividers[row_idx + 1]
        
        # Center of row:
        y_center = (y_top + y_bottom) // 2
        # Thumbnail is centered around y_center, size is ~146x146, x is from 54 to 200
        thumb_box = (54, y_center - 73, 200, y_center + 73)
        
        # Crop thumbnail
        thumb = im.crop(thumb_box)
        
        # Check if thumbnail is a grey placeholder (low color saturation)
        # Convert to HSV or check variance across RGB
        pixels = list(thumb.getdata())
        is_grey = True
        for rgb in pixels[::5]:
            max_c = max(rgb)
            min_c = min(rgb)
            if max_c - min_c > 25: # colorful pixel!
                is_grey = False
                break
                
        if is_grey:
            print(f"  Row {row_idx}: {item_name} ({item_id}) -> GREY PLACEHOLDER detected! Skipping.")
            continue
            
        # Clean upscale with high-quality Lanczos resampling to 300x300 for crisp display
        thumb_hi_res = thumb.resize((300, 300), Image.Resampling.LANCZOS)
        out_path = os.path.join(output_dir, f"{item_id}.jpg")
        thumb_hi_res.save(out_path, quality=95)
        extracted_count += 1
        print(f"  Row {row_idx}: Extracted {item_name} -> {out_path}")

print(f"\nTOTAL EXTRACTED REAL POS THUMBNAILS: {extracted_count}")
