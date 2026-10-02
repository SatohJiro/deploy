import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Only search within MENU_ITEMS array
menu_items_section = content.split('export const MENU_ITEMS: MenuItem[] = [')[1]

# Split by items
item_blocks = re.findall(r'(\{[^{}]*id:\s*"([^"]+)"[^{}]*\})', menu_items_section, re.DOTALL)

pos_files = set(os.listdir('public/images/pos'))

print(f"Total menu items found: {len(item_blocks)}")
print("-" * 110)
print(f"{'ID':26} | {'NAME':32} | {'POS FILE':28} | {'CURRENT IMAGE'}")
print("-" * 110)

missing_pos = []
for full_block, item_id in item_blocks:
    name_m = re.search(r'name:\s*"([^"]+)"', full_block)
    name = name_m.group(1) if name_m else item_id
    
    img_m = re.search(r'image:\s*([^\n,]+)', full_block)
    current_img = img_m.group(1).strip() if img_m else "None"
    
    pos_match = f"{item_id}.jpg" if f"{item_id}.jpg" in pos_files else "MISSING"
    if pos_match == "MISSING":
        missing_pos.append((item_id, name, current_img))
    print(f"{item_id:26} | {name:32} | {pos_match:28} | {current_img}")

print("\n" + "=" * 50)
print(f"ITEMS WITHOUT EXACT ID MATCH IN POS ({len(missing_pos)}):")
for item_id, name, current_img in missing_pos:
    print(f"  {item_id:25} | {name:30} | current: {current_img}")
