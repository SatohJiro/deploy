import { MenuItem } from "@/types";

export const MENU_CATEGORIES = [
  { id: "all", label: "Tất Cả Món" },
  { id: "coffee", label: "Cà Phê & Cacao" },
  { id: "daxay", label: "Đá Xay Kem Tươi" },
  { id: "trasua", label: "Trà Trái Cây & Trà Sữa" },
  { id: "sinhto", label: "Sinh Tố & Sữa Dừa" },
  { id: "nuocep", label: "Nước Ép & Giải Khát" },
  { id: "suachua", label: "Sữa Chua & Ăn Vặt" },
  { id: "takeaway", label: "Mang Đi (Take Away)" }
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. CÀ PHÊ & CACAO
  // ==========================================
  {
    id: "cf-den",
    name: "Cà phê đen (đá/nóng)",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 25000,
    description: "Cà phê nguyên chất rang mộc đượm đà, đậm đà chuẩn gu truyền thống Sài Gòn.",
    image: "/images/coffee-den-da.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "cf-sua",
    name: "Cà phê sữa (đá/nóng)",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 29000,
    description: "Cà phê pha phin sánh đậm hòa quyện cùng sữa đặc ngọt béo thơm lừng.",
    image: "/images/coffee-sua-barista.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "cafe-muoi",
    name: "Cafe muối",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 36000,
    description: "Cà phê đậm vị phủ lớp kem muối béo mặn sánh mịn, món signature được yêu thích.",
    image: "/images/cafe-muoi.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "bac-xiu",
    name: "Bạc xỉu (đá/nóng)",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 33000,
    description: "Sữa tươi thơm béo, sữa đặc ngọt dịu hòa cùng chút cà phê phin thơm ngát.",
    image: "/images/coffee-bac-xiu.jpg",
    isBestSeller: true
  },
  {
    id: "bac-xiu-nong-nho",
    name: "Bạc Xỉu Nóng Size Nhỏ",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 28000,
    description: "Bạc xỉu nóng hổi nhỏ gọn, ấm áp ngọt ngào thích hợp cho những buổi sớm se lạnh.",
    image: "/images/coffee-phin-drip.jpg"
  },
  {
    id: "ca-phe-kem",
    name: "Cà phê kem",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 40000,
    description: "Cà phê đậm đà kết hợp viên kem mát lạnh béo ngậy tan chảy sảng khoái.",
    image: "/images/ca-phe-kem.jpg",
    isNew: true
  },
  {
    id: "cacao-sua",
    name: "Cacao sữa (đá/nóng)",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 33000,
    description: "Bột cacao nguyên chất thơm bùi, pha cùng sữa đặc sánh mịn làm ấm lòng.",
    image: "/images/drink-hot-cocoa.jpg"
  },
  {
    id: "cacao-kem-muoi",
    name: "Cacao kem muối",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 38000,
    description: "Vị cacao đậm đà kết hợp cùng lớp kem muối béo ngậy mằn mặn siêu cuốn.",
    image: "/images/drink-hot-cocoa.jpg",
    isSignature: true
  },
  {
    id: "cf-sua-tuoi-suong-sao",
    name: "Cafe sữa tươi sương sáo",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 38000,
    description: "Cà phê sữa tươi thanh mát kết hợp sương sáo dai giòn thanh nhiệt cơ thể.",
    image: "/images/coffee-bac-xiu.jpg",
    isNew: true
  },
  {
    id: "sua-tuoi-coffee",
    name: "Sữa Tươi Coffee",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 33000,
    description: "Sữa tươi thanh trùng mát lạnh điểm chút cà phê thơm dịu nhẹ nhàng.",
    image: "/images/coffee-sua-barista.jpg"
  },
  {
    id: "sua-nong",
    name: "Sữa Nóng",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 29000,
    description: "Sữa đặc hoặc sữa tươi đánh nóng ấm bụng, bổ dưỡng.",
    image: "/images/coffee-phin-drip.jpg"
  },
  {
    id: "sua-tuoi",
    name: "Sữa tươi",
    category: "coffee",
    categoryName: "Cà Phê & Cacao",
    price: 29000,
    description: "Sữa tươi mát lạnh thanh khiết, lành mạnh mỗi ngày.",
    image: "/images/sua-dua-la-nep.jpg"
  },

  // ==========================================
  // 2. ĐÁ XAY KEM TƯƠI
  // ==========================================
  {
    id: "oreo-da-xay",
    name: "Oreo đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 45000,
    description: "Bánh quy Oreo giòn rụm xay nhuyễn cùng sữa đá, phủ lớp bông kem tươi béo mịn.",
    image: "/images/oreo-da-xay.jpg",
    isBestSeller: true
  },
  {
    id: "chocolate-da-xay",
    name: "Chocolate đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Socola nguyên chất xay mát lạnh quyện cùng lớp kem béo ngậy ngọt ngào.",
    image: "/images/drink-hot-cocoa.jpg",
    isBestSeller: true
  },
  {
    id: "matcha-da-xay",
    name: "Matcha đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Bột trà xanh Nhật Bản thơm thanh khiết hòa cùng sữa tươi đá xay và kem bông tuyết.",
    image: "/images/matcha-da-xay.jpg",
    isSignature: true
  },
  {
    id: "viet-quat-da-xay",
    name: "Việt quất đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Sốt việt quất chua ngọt tự nhiên đá xay mát lạnh kết hợp lớp kem bông mịn.",
    image: "/images/viet-quat-da-xay.jpg"
  },
  {
    id: "chanh-leo-da-xay",
    name: "Chanh leo đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Vị chua thanh thơm lừng của chanh dây tươi nhiệt đới kết hợp đá tuyết và kem sữa.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "dau-tay-da-xay",
    name: "Dâu tây đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Dâu tây đỏ au ngọt mát xay nhuyễn, phủ chóp kem whipping cream mềm mịn.",
    image: "/images/sinh-to-dau.jpg"
  },
  {
    id: "cam-da-xay",
    name: "Cam đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Cam tươi mọng nước đá xay thanh mát giải nhiệt, bổ sung vitamin C tức thì.",
    image: "/images/nuoc-ep-cam.jpg"
  },
  {
    id: "dao-da-xay",
    name: "Đào đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Hương vị đào thơm ngọt ngào xay tuyết mát lạnh kèm lớp kem tươi bồng bềnh.",
    image: "/images/tra-dao-cam-sa.jpg"
  },
  {
    id: "thom-da-xay",
    name: "Thơm (dứa) đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Dứa tươi chua ngọt nhiệt đới xay mịn mát rượi hòa cùng vị kem sữa béo nhẹ.",
    image: "/images/drink-fruit-tea.jpg"
  },
  {
    id: "kiwi-da-xay",
    name: "Kiwi đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Kiwi xanh chua ngọt tươi mát giàu dinh dưỡng, thức uống bắt mắt và sảng khoái.",
    image: "/images/drink-smoothie-coffee.jpg"
  },
  {
    id: "khoai-mon-da-xay",
    name: "Khoai môn đá xay kem tươi",
    category: "daxay",
    categoryName: "Đá Xay Kem Tươi",
    price: 40000,
    description: "Khoai môn thơm bùi béo ngậy màu tím dịu mắt phủ ngập lớp kem tươi thơm lừng.",
    image: "/images/drink-smoothie-coffee.jpg"
  },

  // ==========================================
  // 3. TRÀ TRÁI CÂY & TRÀ SỮA
  // ==========================================
  {
    id: "tra-sua-kem-trung",
    name: "Trà sữa trân châu kem trứng",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 40000,
    description: "Trà sữa đậm vị kết hợp trân châu dẻo dai và lớp kem trứng nướng béo ngậy thơm nức mũi.",
    image: "/images/tra-sua-kem-trung.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "tra-sua-tran-chau",
    name: "Trà sữa trân châu",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Trà sữa truyền thống đậm đà chuẩn vị Đài Loan cùng trân châu đen dai giòn.",
    image: "/images/tra-sua-kem-trung.jpg",
    isBestSeller: true
  },
  {
    id: "sua-tuoi-tc-duong-den",
    name: "Sữa tươi trân châu đường đen",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 35000,
    description: "Sữa tươi thanh trùng mát lạnh hòa cùng siro đường đen thơm lừng và trân châu dẻo dai.",
    image: "/images/sua-tuoi-tran-chau.jpg",
    isBestSeller: true
  },
  {
    id: "tra-dao-cam-sa",
    name: "Trà đào cam sả",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Miếng đào ngâm giòn sần sật, sả thơm ngào ngạt và tép cam tươi mọng nước giải nhiệt.",
    image: "/images/tra-dao-cam-sa.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "tra-dau-xi-muoi",
    name: "Trà dâu xí muội",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Vị dâu tây ngọt thanh hòa quyện vị xí muội mằn mặn chua ngọt kích thích vị giác.",
    image: "/images/tra-dau-xi-muoi.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "tra-vai",
    name: "Trà vải",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 35000,
    description: "Trà lài thanh tao ngâm cùng trái vải mọng nước giòn ngọt thanh khiết.",
    image: "/images/tra-vai.jpg",
    isSignature: true
  },
  {
    id: "tra-dau",
    name: "Trà dâu",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Trà hoa quả chua thanh hòa cùng mứt dâu tây tươi mát lành.",
    image: "/images/tra-dau-xi-muoi.jpg"
  },
  {
    id: "tra-dao",
    name: "Trà đào",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 35000,
    description: "Trà đào truyền thống thơm ngát kèm miếng đào giòn ngọt thơm ngon.",
    image: "/images/tra-dao-cam-sa.jpg"
  },
  {
    id: "tra-thach-dao",
    name: "Trà thạch đào",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Hương vị trà đào thanh mát kết hợp thạch đào dai giòn sần sật.",
    image: "/images/tra-dao-cam-sa.jpg"
  },
  {
    id: "tra-xoai-chanh-leo",
    name: "Trà xoài chanh leo",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Xoài chín ngọt dịu kết hợp chanh leo chua thơm mang đến hương vị nhiệt đới bùng nổ.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "tra-olong-dao-cam",
    name: "Trà olong đào cam",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Cốt trà Olong đậm vị thanh tao kết hợp hương đào ngọt ngào và cam mọng nước.",
    image: "/images/tra-dao-cam-sa.jpg"
  },
  {
    id: "tra-tac-mat-ong-tc",
    name: "Trà tắc mật ong trân châu",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Quả tắc thơm lừng ngâm mật ong nguyên chất, thêm trân châu dai mềm thanh nhiệt.",
    image: "/images/tra-tac-mat-ong.jpg"
  },
  {
    id: "lipton-cam-tc",
    name: "Lipton cam trân châu",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 38000,
    description: "Trà Lipton đậm vị chua ngọt cùng lát cam vàng tươi và trân châu dai giòn.",
    image: "/images/drink-fruit-tea.jpg"
  },
  {
    id: "tra-chanh-truyen-thong",
    name: "Trà chanh truyền thống",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 30000,
    description: "Trà chanh chuẩn vị góc phố, vị chua thanh mát lạnh đánh tan cơn khát.",
    image: "/images/chanh-tuyet.jpg"
  },
  {
    id: "lipton-sua",
    name: "Lipton sữa (đá/nóng)",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 33000,
    description: "Hương trà Lipton thanh đắng nhẹ hòa cùng sữa béo thơm dịu dàng.",
    image: "/images/coffee-sua-barista.jpg"
  },
  {
    id: "lipton-mat-ong",
    name: "Lipton mật ong ( Đá , Nóng )",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 33000,
    description: "Trà Lipton hòa quyện mật ong hoa rừng thanh ngọt, tốt cho sức khỏe và cổ họng.",
    image: "/images/tra-tac-mat-ong.jpg"
  },
  {
    id: "tra-lipton",
    name: "Trà lipton (nóng/đá)",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 30000,
    description: "Trà túi lọc Lipton vàng tươi thơm ngát giải khát sảng khoái.",
    image: "/images/drink-fruit-tea.jpg"
  },
  {
    id: "tra-gung-nong",
    name: "Trà gừng nóng",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 28000,
    description: "Gừng tươi cay nồng ấm bụng, thích hợp cho buổi tối mát trời hoặc ngày mưa.",
    image: "/images/coffee-phin-drip.jpg"
  },
  {
    id: "tra-gung-mat-ong",
    name: "Trà Gừng Mật Ong",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 33000,
    description: "Gừng tươi thơm nồng kết hợp mật ong ngọt dịu, làm ấm cơ thể và tăng sức đề kháng.",
    image: "/images/coffee-phin-drip.jpg"
  },
  {
    id: "binh-tra-nong",
    name: "Bình Trà Nóng",
    category: "trasua",
    categoryName: "Trà Trái Cây & Trà Sữa",
    price: 15000,
    description: "Ấm trà mạn nóng hổi để cùng nhâm nhi trò chuyện thong thả tại quán.",
    image: "/images/coffee-phin-drip.jpg"
  },

  // ==========================================
  // 4. SINH TỐ & SỮA DỪA
  // ==========================================
  {
    id: "sua-dua-la-nep",
    name: "Sữa dừa lá nếp",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Món mới đặc sắc: Cốt dừa béo ngậy hòa quyện cùng thạch lá nếp xanh ngọc thơm nức mũi.",
    image: "/images/sua-dua-la-nep.jpg",
    isNew: true,
    isSignature: true,
    isBestSeller: true
  },
  {
    id: "matcha-sua-dua",
    name: "Matcha sữa dừa",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Trà xanh thanh mát kết hợp vị béo ngậy quyến rũ của nước cốt dừa tươi nguyên chất.",
    image: "/images/matcha-da-xay.jpg",
    isSignature: true
  },
  {
    id: "st-bo-sau-rieng",
    name: "Sinh Tố Bơ Sầu Riêng",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 45000,
    description: "Bơ sáp dẻo quánh kết hợp cơm sầu riêng thơm nồng nàn béo ngậy ngất ngây.",
    image: "/images/sinh-to-bo.jpg",
    isSignature: true,
    isBestSeller: true
  },
  {
    id: "st-bo",
    name: "Sinh tố bơ",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Bơ sáp loại 1 dẻo mịn béo ngậy tự nhiên hòa cùng sữa đặc sánh thơm.",
    image: "/images/sinh-to-bo.jpg",
    isBestSeller: true
  },
  {
    id: "st-dau",
    name: "Sinh tố dâu",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Dâu tây tươi chua ngọt thanh tao, màu sắc quyến rũ và giàu vitamin C.",
    image: "/images/sinh-to-dau.jpg",
    isBestSeller: true
  },
  {
    id: "st-mang-cau",
    name: "Sinh tố mãng cầu",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Mãng cầu xiêm tuyển chọn dầm xay thơm lừng chua ngọt kích thích vị giác.",
    image: "/images/drink-smoothie-coffee.jpg"
  },
  {
    id: "st-xoai",
    name: "Sinh tố xoài",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Xoài cát chín vàng ươm ngọt thơm tự nhiên xay nhuyễn mát lạnh bổ dưỡng.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "st-cot-dua",
    name: "Sinh tố cốt dừa",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Cốt dừa béo bùi thơm ngậy xay cùng đá tuyết mịn màng mát lạnh.",
    image: "/images/sua-dua-la-nep.jpg"
  },
  {
    id: "st-sapoche",
    name: "Sinh Tố Sapoche",
    category: "sinhto",
    categoryName: "Sinh Tố & Sữa Dừa",
    price: 38000,
    description: "Sapoche (hồng xiêm) chín ngọt đậm đà, vị thơm ngậy đặc trưng khó quên.",
    image: "/images/drink-smoothie-coffee.jpg"
  },

  // ==========================================
  // 5. NƯỚC ÉP & GIẢI KHÁT
  // ==========================================
  {
    id: "chanh-tuyet",
    name: "Chanh Tuyết",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Cốt chanh tươi xay tuyết đá mát rười rượi, giải nhiệt tức thì ngày nắng nóng.",
    image: "/images/chanh-tuyet.jpg",
    isBestSeller: true,
    isSignature: true
  },
  {
    id: "nuoc-ep-dac-biet",
    name: "Nước ép đặc biệt",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 50000,
    description: "Mix các loại hoa quả tươi ngon cao cấp, thơm ngon và tràn đầy năng lượng.",
    image: "/images/nuoc-ep-cam.jpg",
    isSignature: true
  },
  {
    id: "nuoc-ep-cam-ca-rot",
    name: "Nước Ép Cam Cà Rốt",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 38000,
    description: "Cam tươi mọng nước phối cùng cà rốt giàu vitamin A, đẹp da bổ mắt.",
    image: "/images/nuoc-ep-cam.jpg"
  },
  {
    id: "nuoc-ep-hon-hop",
    name: "Nước Ép Hỗn Hợp",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 38000,
    description: "Sự kết hợp tinh túy từ nhiều loại trái cây nhiệt đới tươi mát.",
    image: "/images/drink-fruit-tea.jpg"
  },
  {
    id: "nuoc-ep-tao",
    name: "Nước ép táo",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 38000,
    description: "Táo tươi ép nguyên chất ngọt thanh tự nhiên, thức uống thanh lọc cơ thể.",
    image: "/images/nuoc-ep-cam.jpg"
  },
  {
    id: "nuoc-ep-cam",
    name: "Nước ép cam",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Cam sành tươi vắt nguyên chất tép mọng nước, giàu vitamin C đề kháng.",
    image: "/images/nuoc-ep-cam.jpg",
    isBestSeller: true
  },
  {
    id: "nuoc-ep-dua-hau",
    name: "Nước ép dưa hấu",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Dưa hấu đỏ ngọt lịm ép lạnh, giải khát tức thì sảng khoái.",
    image: "/images/nuoc-ep-dua-hau.jpg"
  },
  {
    id: "nuoc-ep-thom",
    name: "Nước ép thơm",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Dứa tươi ngọt sắc chua thanh, hỗ trợ tiêu hóa và bổ sung năng lượng.",
    image: "/images/drink-fruit-tea.jpg"
  },
  {
    id: "nuoc-ep-oi",
    name: "Nước Ép Ổi",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Ổi hồng tươi ép thơm mát, hàm lượng vitamin C dồi dào đẹp dáng sáng da.",
    image: "/images/chanh-tuyet.jpg"
  },
  {
    id: "nuoc-ep-ca-rot",
    name: "Nước Ép Cà Rốt",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Cà rốt tươi mát lành bồi bổ sức khỏe và tăng cường thị lực.",
    image: "/images/nuoc-ep-cam.jpg"
  },
  {
    id: "nuoc-ep-chanh-day",
    name: "Nước ép chanh dây",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 35000,
    description: "Chanh leo tươi chua thanh thơm ngát, món giải nhiệt mùa hè tuyệt đỉnh.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "nuoc-chanh-tuoi",
    name: "Nước chanh tươi",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 30000,
    description: "Nước chanh tươi vắt đá mát rượi thanh lọc cơ thể sảng khoái.",
    image: "/images/chanh-tuyet.jpg"
  },
  {
    id: "chanh-mat-ong",
    name: "Chanh Mật Ong (đá/nóng)",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 30000,
    description: "Chanh tươi thơm lừng hòa mật ong tự nhiên ngọt thanh, dễ chịu.",
    image: "/images/tra-tac-mat-ong.jpg"
  },
  {
    id: "nuoc-chanh-muoi",
    name: "Nước Chanh Muối",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 30000,
    description: "Chanh muối ngâm truyền thống mằn mặn chua ngọt giúp bù khoáng cực tốt.",
    image: "/images/chanh-tuyet.jpg"
  },
  {
    id: "dua-tuoi",
    name: "Dừa tươi",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 30000,
    description: "Trái dừa tươi ngọt nước thanh khiết giải nhiệt thiên nhiên.",
    image: "/images/sua-dua-la-nep.jpg"
  },
  {
    id: "da-me-hat-dac",
    name: "Đá Me Hạt Đác Sốt Chanh Dây",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 38000,
    description: "Me rim chua ngọt đậm đà kết hợp hạt đác dẻo dai và sốt chanh dây thơm lừng độc đáo.",
    image: "/images/drink-fruit-tea.jpg",
    isSignature: true,
    isBestSeller: true
  },
  {
    id: "suong-sao-bi-dao",
    name: "Sương sáo bí đao hạt chia",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 38000,
    description: "Nước sâm bí đao nấu lá dứa thơm mát, sương sáo dai mềm và hạt chia bổ dưỡng.",
    image: "/images/coffee-den-da.jpg",
    isSignature: true
  },
  {
    id: "tra-khong-do",
    name: "Trà Không Độ",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 23000,
    description: "Trà xanh đóng chai ướp lạnh tiện lợi.",
    image: "/images/drink-fruit-tea.jpg"
  },
  {
    id: "tra-olong-chai",
    name: "Trà OLong",
    category: "nuocep",
    categoryName: "Nước Ép & Giải Khát",
    price: 23000,
    description: "Trà ô long đóng chai thơm thanh mát lạnh tiện lợi.",
    image: "/images/drink-fruit-tea.jpg"
  },

  // ==========================================
  // 6. SỮA CHUA & ĂN VẶT
  // ==========================================
  {
    id: "sc-viet-quat",
    name: "Sữa Chua Việt Quất",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 38000,
    description: "Sữa chua lên men tự nhiên đánh đá mát lạnh quyện sốt việt quất chua ngọt đậm đà.",
    image: "/images/viet-quat-da-xay.jpg",
    isBestSeller: true
  },
  {
    id: "sc-chanh-day",
    name: "Sữa chua chanh dây",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 38000,
    description: "Vị chua thanh mát dịu của sữa chua hòa quyện sốt chanh dây tươi nhiệt đới thơm nức.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "sc-hu",
    name: "Sữa chua hủ",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 18000,
    description: "Hũ sữa chua nhà làm sánh mịn, chua dịu mát lành bổ sung lợi khuẩn.",
    image: "/images/drink-mango-yogurt.jpg"
  },
  {
    id: "kem-vien",
    name: "Kem Viên",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 25000,
    description: "Những viên kem mát lạnh nhiều vị thơm béo ngọt lành.",
    image: "/images/ca-phe-kem.jpg"
  },
  {
    id: "hat-huong-duong",
    name: "Hạt hướng dương",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 15000,
    description: "Hạt hướng dương rang giòn thơm bùi nhâm nhi cùng ly cà phê câu chuyện.",
    image: undefined
  },
  {
    id: "tran-chau-them",
    name: "Trân châu thêm",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 7000,
    description: "Topping trân châu dẻo dai giòn sần sật thêm vào mọi món trà hoặc sữa.",
    image: undefined
  },
  {
    id: "khan-lanh",
    name: "Khăn lạnh",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 3000,
    description: "Khăn ướt lạnh thơm dịu vệ sinh tiện lợi.",
    image: undefined
  },
  {
    id: "ca-phe-hat",
    name: "Cà phê hạt",
    category: "suachua",
    categoryName: "Sữa Chua & Ăn Vặt",
    price: 300000,
    description: "Cà phê Robusta & Arabica nguyên hạt rang mộc thượng hạng Ông Mập (Gói 1kg).",
    image: "/images/coffee-den-da.jpg"
  },

  // ==========================================
  // 7. MANG ĐI (TAKE AWAY SPECIAL)
  // ==========================================
  {
    id: "cf-mang-di-den",
    name: "Coffee Mang Đi Đen ( Đá,Nóng )",
    category: "takeaway",
    categoryName: "Mang Đi (Take Away)",
    price: 23000,
    description: "Cà phê đen nguyên chất đóng ly mang đi nhanh gọn, tiện lợi và tiết kiệm.",
    image: "/images/coffee-den-da.jpg",
    isBestSeller: true
  },
  {
    id: "cf-mang-di-sua",
    name: "Coffee Sữa Mang Đi ( Đá Nóng )",
    category: "takeaway",
    categoryName: "Mang Đi (Take Away)",
    price: 25000,
    description: "Cà phê sữa đá mang đi chuẩn vị béo thơm, đồng hành cùng bạn tới công sở.",
    image: "/images/coffee-sua-barista.jpg",
    isBestSeller: true
  },
  {
    id: "bac-xiu-mang-di",
    name: "Bạc Xỉu Mang Đi",
    category: "takeaway",
    categoryName: "Mang Đi (Take Away)",
    price: 30000,
    description: "Bạc xỉu thơm ngậy đóng ly nắp cầu tiện lợi mang đi làm, đi học.",
    image: "/images/coffee-bac-xiu.jpg"
  },
  {
    id: "cacao-sua-mang-di",
    name: "Cacao sữa mang đi",
    category: "takeaway",
    categoryName: "Mang Đi (Take Away)",
    price: 30000,
    description: "Cacao sữa béo ngọt đậm đà đóng ly take away tiện lợi mang theo cả ngày.",
    image: "/images/drink-hot-cocoa.jpg"
  },
  {
    id: "cf-muoi-mang-di",
    name: "Cà phê muối mang đi",
    category: "takeaway",
    categoryName: "Mang Đi (Take Away)",
    price: 33000,
    description: "Cà phê muối kem béo mặn yêu thích đóng ly riêng mang đi vẫn vẹn nguyên hương vị.",
    image: "/images/cafe-muoi.jpg",
    isBestSeller: true
  },
  {
    id: "cf-sua-lac-mang-di",
    name: "Coffee Sữa Lắc Mang Đi",
    category: "takeaway",
    categoryName: "Mang Đi (Take Away)",
    price: 30000,
    description: "Cà phê sữa lắc tạo bọt mịn màng bồng bềnh, thơm nức mũi đóng ly mang đi.",
    image: "/images/coffee-sua-barista.jpg"
  }
];
