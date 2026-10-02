import { MenuItem } from "@/types";

export const MENU_CATEGORIES = [
  { id: "all", label: "Tất Cả Món", icon: "Utensils" },
  { id: "coffee", label: "Cà Phê & Cacao", icon: "Coffee" },
  { id: "daxay", label: "Đá Xay Kem Tươi", icon: "IceCream" },
  { id: "sinhto", label: "Sinh Tố Trái Cây", icon: "Apple" },
  { id: "suachua", label: "Sữa Chua Đặc Biệt", icon: "Milk" },
  { id: "trasua", label: "Trà Sữa & Trà Trái Cây", icon: "CupSoda" },
  { id: "soda", label: "Soda & Giải Khát", icon: "GlassWater" }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. CÀ PHÊ & CACAO
  {
    id: "cf-den-phin",
    name: "Cà Phê Đen Phin Truyền Thống",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 18000,
    description: "Cà phê phin nguyên chất rang mộc đượm đà, bọt mịn sánh mượt, đậm chất Sài Gòn.",
    image: "/images/coffee-den-da.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "cf-sua-phin",
    name: "Cà Phê Sữa Đá Phin",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 22000,
    description: "Hương vị cà phê phin đậm quyện cùng sữa đặc béo ngậy chuẩn gu truyền thống.",
    image: "/images/coffee-sua-barista.jpg",
    isBestSeller: true
  },
  {
    id: "cf-bac-xiu",
    name: "Bạc Xỉu 3 Tầng Ông Mập",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 25000,
    description: "Phần sữa đặc ngọt béo, sữa tươi thanh mát và lớp cà phê phin thơm lừng phủ bọt.",
    image: "/images/coffee-bac-xiu.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "cf-phin-nong",
    name: "Cà Phê Phin Nhỏ Giọt Tại Bàn",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 20000,
    description: "Ngồi ngắm từng giọt cà phê tí tách rơi, tận hưởng khoảng lặng bình yên đầu ngày.",
    image: "/images/coffee-phin-drip.jpg",
    isSignature: true
  },
  {
    id: "cacao-nong-da",
    name: "Cacao Nóng / Cacao Đá Béo Ngậy",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 25000,
    description: "Bột cacao nguyên chất thơm bùi, pha cùng sữa đặc sánh mịn làm ấm lòng.",
    image: "/images/drink-hot-cocoa.jpg"
  },

  // 2. ĐÁ XAY KEM TƯƠI
  {
    id: "dx-cacao",
    name: "Cacao Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 30000,
    description: "Cacao xay nhuyễn mịn cùng sữa đá, phủ lớp whipping cream béo ngậy thơm ngon.",
    image: "/images/drink-hot-cocoa.jpg",
    isBestSeller: true
  },
  {
    id: "dx-matcha",
    name: "Matcha Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 32000,
    description: "Bột trà xanh thơm dịu hòa quyện cùng sữa tươi mát lạnh và bông kem mịn màng.",
    image: "/images/drink-smoothie-coffee.jpg"
  },
  {
    id: "dx-oreo-socola",
    name: "Oreo Socola Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 35000,
    description: "Bánh cookie Oreo giòn rụm xay cùng socola thơm nồng, món ruột của giới trẻ.",
    isBestSeller: true
  },
  {
    id: "dx-viet-quat",
    name: "Việt Quất Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 32000,
    description: "Sốt việt quất chua ngọt tự nhiên đá xay mát lạnh kết hợp lớp kem bông mịn."
  },
  {
    id: "dx-phuc-bon-tu",
    name: "Phúc Bồn Tử Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 32000,
    description: "Hương vị raspberry đỏ mọng chua ngọt sảng khoái, điểm xuyết kem tươi thơm béo."
  },
  {
    id: "dx-chanh-tuyet",
    name: "Chanh Tuyết Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 28000,
    description: "Nước cốt chanh tươi xay tuyết đá mát rười rượi giải nhiệt tức thì ngày nắng hè."
  },
  {
    id: "dx-phuc-bon-tu-dau",
    name: "Phúc Bồn Tử Dâu Đá Xay",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 35000,
    description: "Sự hòa quyện tuyệt vời giữa mâm xôi và dâu tây tươi mát lịm sảng khoái.",
    isNew: true
  },
  {
    id: "dx-socola-dau",
    name: "Socola Dâu Đá Xay Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 35000,
    description: "Đậm vị socola nồng nàn kết hợp hương dâu tây quyến rũ phủ ngập kem tươi."
  },
  {
    id: "dx-chanh-leo-tuyet",
    name: "Chanh Leo Tuyết Kem Tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 30000,
    description: "Vị chua thanh thơm lừng của chanh dây tươi nhiệt đới kết hợp đá tuyết và kem sữa."
  },

  // 3. SINH TỐ TRÁI CÂY TƯƠI
  {
    id: "st-bo",
    name: "Sinh Tố Bơ Đắk Lắk",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 32000,
    description: "Bơ sáp loại 1 dẻo quánh, béo ngậy tự nhiên hòa cùng sữa đặc sánh mịn thơm bùi.",
    image: "/images/drink-smoothie-coffee.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "st-map-dac-biet",
    name: "Sinh Tố Mập Đặc Biệt",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 38000,
    description: "Công thức độc quyền mix 3 loại trái cây tươi ngon bổ dưỡng tràn đầy năng lượng.",
    image: "/images/drink-strawberry-smoothie.jpg",
    isSignature: true,
    isBestSeller: true
  },
  {
    id: "st-mang-cau",
    name: "Sinh Tố Mãng Cầu Chua Ngọt",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 30000,
    description: "Mãng cầu xiêm tuyển chọn dầm xay thơm lừng, vị chua ngọt kích thích vị giác."
  },
  {
    id: "st-xoai",
    name: "Sinh Tố Xoài Cát Chín Mọng",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 28000,
    description: "Xoài cát chín vàng tự nhiên xay nhuyễn thơm lừng, ngọt thanh dịu mát.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "st-dau-tay",
    name: "Sinh Tố Dâu Tây Đà Lạt",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 32000,
    description: "Dâu tây Đà Lạt đỏ au chua ngọt thanh tao, màu sắc quyến rũ và giàu vitamin C.",
    image: "/images/drink-strawberry-smoothie.jpg",
    isBestSeller: true
  },
  {
    id: "st-sapoche",
    name: "Sinh Tố Sapoche (Hồng Xiêm)",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 28000,
    description: "Sapoche miền Tây chín ngọt bùi đậm đà, vị thơm ngậy đặc trưng khó quên."
  },
  {
    id: "st-chuoi",
    name: "Sinh Tố Chuối Sữa Dinh Dưỡng",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 25000,
    description: "Chuối chín ngọt tự nhiên kết hợp sữa tươi, bổ dưỡng và phục hồi sức khỏe nhanh."
  },
  {
    id: "st-ca-chua-ca-rot",
    name: "Sinh Tố Cà Chua / Cà Rốt Tươi",
    category: "sinhto",
    categoryName: "Sinh Tố Trái Cây",
    price: 25000,
    description: "Thức uống healthy đẹp da, giữ dáng, thanh lọc cơ thể từ rau củ quả tươi sạch."
  },

  // 4. SỮA CHUA ĐẶC BIỆT
  {
    id: "sc-danh-da",
    name: "Sữa Chua Tươi Đánh Đá Truyền Thống",
    category: "suachua",
    categoryName: "Sữa Chua Đặc Biệt",
    price: 22000,
    description: "Sữa chua lên men tự nhiên đánh cùng đá tuyết mát lạnh, giải khát sảng khoái.",
    image: "/images/drink-mango-yogurt.jpg",
    isBestSeller: true
  },
  {
    id: "sc-dua-non",
    name: "Sữa Chua Dừa Non Dẻo Quánh",
    category: "suachua",
    categoryName: "Sữa Chua Đặc Biệt",
    price: 28000,
    description: "Cơm dừa non giòn sần sật quyện vị chua thanh béo ngậy của sữa chua tươi.",
    isSignature: true
  },
  {
    id: "sc-mit-hat-dac",
    name: "Sữa Chua Mít Hạt Đác Rim",
    category: "suachua",
    categoryName: "Sữa Chua Đặc Biệt",
    price: 30000,
    description: "Mít thơm xé sợi kết hợp hạt đác dẻo dai rim đường thốt nốt độc đáo.",
    isBestSeller: true
  },
  {
    id: "sc-xoai-hat-dac",
    name: "Sữa Chua Xoài Hạt Đác",
    category: "suachua",
    categoryName: "Sữa Chua Đặc Biệt",
    price: 30000,
    description: "Xoài chín ngọt thanh cùng hạt đác dẻo dai sần sật thơm nức mũi."
  },
  {
    id: "sc-dao-vai",
    name: "Sữa Chua Đào / Vải Mọng Nước",
    category: "suachua",
    categoryName: "Sữa Chua Đặc Biệt",
    price: 28000,
    description: "Miếng đào giòn tan hoặc trái vải mọng nước kết hợp sữa chua thanh mát."
  },
  {
    id: "sc-nho-den",
    name: "Sữa Chua Nho Đen Mỹ",
    category: "suachua",
    categoryName: "Sữa Chua Đặc Biệt",
    price: 30000,
    description: "Nho đen ngọt đậm quyện cùng vị chua dịu thanh tao của sữa chua ủ men truyền thống."
  },

  // 5. TRÀ SỮA & TRÀ TRÁI CÂY
  {
    id: "ts-truyen-thong",
    name: "Trà Sữa Truyền Thống Full Thạch",
    category: "trasua",
    categoryName: "Trà Sữa & Trà Trái Cây",
    price: 28000,
    description: "Vị trà đậm đà quyện sữa béo thơm, đầy ắp trân châu hoàng kim, thạch dừa và pudding.",
    isBestSeller: true
  },
  {
    id: "ts-pho-mai-tuoi",
    name: "Trà Sữa Trân Châu Phô Mai Tươi",
    category: "trasua",
    categoryName: "Trà Sữa & Trà Trái Cây",
    price: 32000,
    description: "Viên phô mai tươi béo ngậy núng nính tan chảy ngay trong miệng khi uống.",
    isSignature: true
  },
  {
    id: "ts-kem-trung-nuong",
    name: "Trà Sữa Kem Trứng Nướng Hoàng Kim",
    category: "trasua",
    categoryName: "Trà Sữa & Trà Trái Cây",
    price: 35000,
    description: "Lớp kem trứng thơm ngậy được khò cháy caramel thơm phức mê mẩn.",
    isBestSeller: true
  },
  {
    id: "tra-trai-cay",
    name: "Trà Trái Cây Nhiệt Đới Ông Mập",
    category: "trasua",
    categoryName: "Trà Sữa & Trà Trái Cây",
    price: 32000,
    description: "Trà lài thanh mát ngâm cùng cam vàng, chanh tươi và các loại trái cây tươi ngon mọng nước.",
    image: "/images/drink-fruit-tea.jpg",
    isSignature: true,
    isBestSeller: true
  },
  {
    id: "tra-dao-cam-sa",
    name: "Trà Đào Cam Sả Thanh Nhiệt",
    category: "trasua",
    categoryName: "Trà Sữa & Trà Trái Cây",
    price: 28000,
    description: "Miếng đào ngâm giòn sần sật, sả thơm ngào ngạt và tép cam tươi mọng nước."
  },

  // 6. SODA GIẢI NHIỆT
  {
    id: "soda-bac-ha",
    name: "Soda Bạc Hà Mát Lạnh (Blue Ocean)",
    category: "soda",
    categoryName: "Soda & Giải Khát",
    price: 25000,
    description: "Màu xanh mát mắt, vị the the của lá bạc hà bùng nổ sảng khoái với bọt ga li ti."
  },
  {
    id: "soda-dau",
    name: "Soda Dâu Tây Ngọt Ngào",
    category: "soda",
    categoryName: "Soda & Giải Khát",
    price: 25000,
    description: "Hương dâu tự nhiên ngọt thơm kết hợp soda sủi tăm mát lạnh tức thì."
  },
  {
    id: "soda-chanh-leo",
    name: "Soda Chanh Leo Chua Thanh",
    category: "soda",
    categoryName: "Soda & Giải Khát",
    price: 25000,
    description: "Chanh dây tươi giòn hạt, vị chua thanh sảng khoái giúp giải tỏa căng thẳng."
  },
  {
    id: "soda-viet-quat",
    name: "Soda Việt Quất Tím Mộng Mơ",
    category: "soda",
    categoryName: "Soda & Giải Khát",
    price: 28000,
    description: "Sắc tím kiêu kỳ của quả việt quất xay kết hợp chanh tươi và soda có ga mát lịm."
  }
];
