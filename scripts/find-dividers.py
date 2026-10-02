import os
from PIL import Image

files = sorted([f for f in os.listdir('public/images/new') if f.endswith('.jpg')])

for f in files:
    im = Image.open(os.path.join('public/images/new', f)).convert('RGB')
    w, h = im.size
    
    # Check horizontal dividers across x=300 to 800 (where divider line is grey #e2e8f0 or similar)
    # The divider lines in Sapo are 1px tall grey lines #e0e0e0 (around 220-230 grey)
    dividers = []
    for y in range(240, 2300):
        # Sample points on the divider line
        p1 = im.getpixel((300, y))
        p2 = im.getpixel((500, y))
        p3 = im.getpixel((700, y))
        # Divider line is typically grayish (e.g. all components near equal and between 220 and 245)
        # while background is pure white (255, 255, 255)
        if p1[0] < 250 and p2[0] < 250 and p3[0] < 250 and abs(p1[0] - p1[1]) < 5:
            # Check if previous row was white
            prev = im.getpixel((500, y-1))
            if prev[0] > 250:
                dividers.append(y)
    
    print(f"{f}: found {len(dividers)} dividers: {dividers}")
