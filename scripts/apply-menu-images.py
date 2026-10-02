import os
import re
import sys

mapping = {
    'cf-den': '"/images/coffee-den-da.jpg"',
    'cf-sua': '"/images/coffee-sua-barista.jpg"',
    'cafe-muoi': '"/images/pos/cafe-muoi.jpg"',
    'cf-sua-lac': '"/images/pos/cf-sua-lac.jpg"',
    'bac-xiu': '"/images/coffee-bac-xiu.jpg"',
    'bac-xiu-nong-nho': '"/images/pos/bac-xiu-nong-nho.jpg"',
    'bac-xiu-milo': 'undefined',
    'ca-phe-kem': '"/images/pos/ca-phe-kem.jpg"',
    'cf-sua-tuoi-suong-sao': '"/images/cf-suong-sao.jpg"',
    'sua-tuoi-coffee': '"/images/pos/sua-tuoi-coffee.jpg"',
    'sua-tuoi-caramel': 'undefined',
    'sua-tuoi-caramel-tran-chau': 'undefined',
    'cacao-sua': '"/images/pos/cacao-sua.jpg"',
    'cacao-kem-muoi': '"/images/pos/cacao-kem-muoi.jpg"',
    'sua-nong': '"/images/pos/sua-nong.jpg"',
    'sua-tuoi': '"/images/pos/sua-tuoi.jpg"',
    
    'oreo-da-xay': '"/images/pos/oreo-da-xay.jpg"',
    'chocolate-da-xay': '"/images/pos/chocolate-da-xay.jpg"',
    'matcha-da-xay': '"/images/pos/matcha-da-xay.jpg"',
    'viet-quat-da-xay': '"/images/pos/viet-quat-da-xay.jpg"',
    'chanh-leo-da-xay': '"/images/chanh-leo-da-xay.jpg"',
    'dau-tay-da-xay': '"/images/pos/dau-tay-da-xay.jpg"',
    'cam-da-xay': '"/images/pos/cam-da-xay.jpg"',
    'dao-da-xay': '"/images/pos/dao-da-xay.jpg"',
    'thom-da-xay': '"/images/pos/thom-da-xay.jpg"',
    'kiwi-da-xay': '"/images/pos/kiwi-da-xay.jpg"',
    'khoai-mon-da-xay': '"/images/khoai-mon-da-xay.jpg"',
    
    'tra-sua-kem-trung': '"/images/pos/tra-sua-kem-trung.jpg"',
    'tra-sua-tran-chau': '"/images/pos/tra-sua-tran-chau.jpg"',
    'sua-tuoi-tc-duong-den': '"/images/pos/sua-tuoi-tc-duong-den.jpg"',
    'matcha-latte': 'undefined',
    'tra-dao-cam-sa': '"/images/pos/tra-dao-cam-sa.jpg"',
    'tra-dao-nhai': '"/images/pos/tra-dao-nhai.jpg"',
    'tra-dao-hat-chia': 'undefined',
    'tra-dao': '"/images/pos/tra-dao.jpg"',
    'tra-thach-dao': '"/images/pos/tra-thach-dao.jpg"',
    'tra-dau-xi-muoi': '"/images/pos/tra-dau-xi-muoi.jpg"',
    'tra-dau': '"/images/pos/tra-dau.jpg"',
    'tra-vai': '"/images/pos/tra-vai.jpg"',
    'tra-xoai-chanh-leo': '"/images/pos/tra-xoai-chanh-leo.jpg"',
    'tra-olong-dao-cam': '"/images/pos/tra-olong-dao-cam.jpg"',
    'tra-tac-mat-ong-tc': '"/images/pos/tra-tac-mat-ong-tc.jpg"',
    'lipton-cam-tc': '"/images/pos/lipton-cam-tc.jpg"',
    'tra-chanh-truyen-thong': '"/images/pos/tra-chanh-truyen-thong.jpg"',
    'lipton-sua': '"/images/pos/lipton-sua.jpg"',
    'lipton-mat-ong': '"/images/pos/lipton-mat-ong.jpg"',
    'tra-lipton': '"/images/pos/tra-lipton.jpg"',
    'tra-gung-nong': '"/images/pos/tra-gung-nong.jpg"',
    'tra-gung-mat-ong': '"/images/pos/tra-gung-mat-ong.jpg"',
    'binh-tra-nong': '"/images/pos/binh-tra-nong.jpg"',
    
    'sua-bap-thach-la-dua': '"/images/sua-bap-thach-la-dua.jpg"',
    'sua-dua-la-nep': '"/images/sua-dua-la-nep.jpg"',
    'matcha-sua-dua': '"/images/pos/matcha-sua-dua.jpg"',
    'st-bo-sau-rieng': '"/images/st-bo-sau-rieng.jpg"',
    'st-bo-xoai': 'undefined',
    'st-bo': '"/images/pos/st-bo.jpg"',
    'st-dau': '"/images/pos/st-dau.jpg"',
    'st-mang-cau': '"/images/pos/st-mang-cau.jpg"',
    'st-xoai': '"/images/pos/st-xoai.jpg"',
    'st-cot-dua': '"/images/pos/st-cot-dua.jpg"',
    'st-sapoche': '"/images/pos/st-sapoche.jpg"',
    
    'chanh-tuyet': '"/images/pos/chanh-tuyet.jpg"',
    'nuoc-ep-dac-biet': '"/images/pos/nuoc-ep-dac-biet.jpg"',
    'nuoc-ep-cam-ca-rot': '"/images/pos/nuoc-ep-cam-ca-rot.jpg"',
    'nuoc-ep-hon-hop': '"/images/pos/nuoc-ep-hon-hop.jpg"',
    'nuoc-ep-tao': '"/images/pos/nuoc-ep-tao.jpg"',
    'nuoc-ep-cam': '"/images/pos/nuoc-ep-cam.jpg"',
    'nuoc-ep-dua-hau': '"/images/pos/nuoc-ep-dua-hau.jpg"',
    'nuoc-ep-thom': '"/images/pos/nuoc-ep-thom.jpg"',
    'nuoc-ep-oi': '"/images/pos/nuoc-ep-oi.jpg"',
    'nuoc-ep-ca-rot': '"/images/pos/nuoc-ep-ca-rot.jpg"',
    'nuoc-ep-chanh-day': '"/images/pos/nuoc-ep-chanh-day.jpg"',
    'nuoc-chanh-tuoi': '"/images/pos/nuoc-chanh-tuoi.jpg"',
    'chanh-mat-ong': '"/images/pos/chanh-mat-ong.jpg"',
    'nuoc-chanh-muoi': '"/images/pos/nuoc-chanh-muoi.jpg"',
    'dua-tuoi': '"/images/pos/dua-tuoi.jpg"',
    'da-me-hat-dac': '"/images/da-me-hat-dac.jpg"',
    'suong-sao-bi-dao': '"/images/suong-sao-bi-dao.jpg"',
    
    'sc-danh-da': '"/images/pos/sc-danh-da.jpg"',
    'sc-danh-ca-phe': '"/images/sc-danh-ca-phe.jpg"',
    'sua-lac-chanh-leo': '"/images/pos/sua-lac-chanh-leo.jpg"',
    'sc-viet-quat': '"/images/pos/sc-viet-quat.jpg"',
    'sc-chanh-day': '"/images/pos/sc-chanh-day.jpg"',
    'sc-dau': '"/images/pos/sc-dau.jpg"',
    'sc-matcha': '"/images/pos/sc-matcha.jpg"',
    'sc-bac-ha': '"/images/pos/sc-bac-ha.jpg"',
    'sc-hu': '"/images/pos/sc-hu.jpg"',
    'soda-viet-quat': '"/images/soda-viet-quat.jpg"',
    'soda-chanh-leo': '"/images/pos/soda-chanh-leo.jpg"',
    'soda-dau': '"/images/soda-dau.jpg"',
    'soda-bac-ha': '"/images/soda-bac-ha.jpg"',
    'kem-vien': '"/images/pos/kem-vien.jpg"',
    
    'bo-huc': '"/images/pos/bo-huc.jpg"',
    'sting': '"/images/pos/sting.jpg"',
    'coca': '"/images/pos/coca.jpg"',
    '7-up': '"/images/pos/7-up.jpg"',
    'xa-xi': 'undefined',
    'tra-khong-do': '"/images/pos/tra-khong-do.jpg"',
    'tra-olong-chai': '"/images/pos/tra-olong-chai.jpg"',
    'nuoc-suoi': '"/images/pos/nuoc-suoi.jpg"',
    'hat-dua': 'undefined',
    'hat-huong-duong': '"/images/pos/hat-huong-duong.jpg"',
    'ca-phe-hat': '"/images/pos/ca-phe-hat.jpg"',
    'tran-chau-them': '"/images/pos/tran-chau-them.jpg"',
    'them-khac': 'undefined',
    'khan-lanh': '"/images/pos/khan-lanh.jpg"',
    'phu-thu-nuoc-ngoai': 'undefined',
    'thuoc-la-555': '"/images/pos/thuoc-la-555.jpg"',
    'thuoc-la-555-dieu': '"/images/pos/thuoc-la-555-dieu.jpg"',
    'thuoc-la-meo': '"/images/pos/thuoc-la-meo.jpg"',
    'thuoc-la-meo-dieu': '"/images/pos/thuoc-la-meo-dieu.jpg"',
    
    'cf-mang-di-den': '"/images/pos/cf-mang-di-den.jpg"',
    'cf-mang-di-sua': '"/images/pos/cf-mang-di-sua.jpg"',
    'bac-xiu-mang-di': '"/images/pos/bac-xiu-mang-di.jpg"',
    'cf-sua-lac-mang-di': '"/images/pos/cf-sua-lac-mang-di.jpg"',
    'sua-tuoi-cf-mang-di': '"/images/pos/sua-tuoi-coffee.jpg"',
    'cf-muoi-mang-di': '"/images/pos/cf-muoi-mang-di.jpg"',
    'cacao-sua-mang-di': '"/images/pos/cacao-sua-mang-di.jpg"',
    'ep-ca-rot-mang-di': '"/images/pos/nuoc-ep-ca-rot.jpg"'
}

with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_id = None

for line in lines:
    id_m = re.search(r'id:\s*"([^"]+)"', line)
    if id_m:
        current_id = id_m.group(1)
        new_lines.append(line)
        continue
    
    if current_id and current_id in mapping and re.search(r'image:\s*', line):
        new_img = mapping[current_id]
        indent = line[:len(line) - len(line.lstrip())]
        # Preserve comma if present
        has_comma = ',' in line
        comma = ',' if has_comma else ''
        new_lines.append(f"{indent}image: {new_img}{comma}\n")
        continue
        
    new_lines.append(line)

with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Updated menuData.ts successfully!")
