import { GalleryItem, ReviewItem } from "@/types";

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Mặt Tiền Quán & Hệ Thống Phun Sương Mát Lạnh",
    category: "space",
    categoryLabel: "Không Gian Quán",
    src: "/images/cafe-exterior-mist.jpg",
    description: "Giàn cây leo rủ bóng mát mẻ kết hợp làn sương làm dịu mát cả con phố Trần Thị Trọng."
  },
  {
    id: "g2",
    title: "Biển Hiệu & Đèn Lồng Ấm Cúng Về Đêm",
    category: "night",
    categoryLabel: "Không Gian Đêm",
    src: "/images/facade-lanterns.jpg",
    description: "Không gian lung linh với những chiếc đèn lồng đỏ, chụp đèn mây tre đan mộc mạc."
  },
  {
    id: "g3",
    title: "Góc Sân Vườn Gạch Mộc & Bàn Ghế Gỗ Thô",
    category: "space",
    categoryLabel: "Không Gian Quán",
    src: "/images/cafe-garden-patio.jpg",
    description: "Những trụ gạch thẻ đỏ mộc mạc, bàn ghế gỗ tối màu tạo cảm giác thư thái, yên tĩnh."
  },
  {
    id: "g4",
    title: "Cà Phê Phin Nhôm Truyền Thống Đậm Vị",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/coffee-phin-drip.jpg",
    description: "Từng giọt cà phê tí tách chảy qua phin nhôm trên tách gốm sứ trắng, phục vụ kèm ly đá và trà lài."
  },
  {
    id: "g5",
    title: "Bạc Xỉu 3 Tầng Ngọt Béo Hòa Quyện",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/coffee-bac-xiu.jpg",
    description: "Tầng sữa đặc ngọt dịu, sữa tươi thanh mát và lớp cà phê phin đậm đà thơm ngát bọt mịn."
  },
  {
    id: "g6",
    title: "Cà Phê Đen Đá & Ly Trà Đá Mộc Mạc",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/coffee-den-da.jpg",
    description: "Vị đắng êm ái, hậu ngọt sâu của hạt cà phê rang mộc nguyên chất trên mặt bàn gỗ vân tự nhiên."
  },
  {
    id: "g7",
    title: "Trà Trái Cây Nhiệt Đới Cam Chanh Tươi",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/drink-fruit-tea.jpg",
    description: "Ly trà mát lạnh với lát cam vàng, chanh tươi và lá dứa xanh tươi rực rỡ dưới ánh đèn."
  },
  {
    id: "g8",
    title: "Cà Phê Sữa Đá Tại Quầy Pha Chế",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/coffee-sua-barista.jpg",
    description: "Pha chế tỉ mỉ từng ly, đảm bảo độ sánh đậm và hương vị đồng đều nhất khi đến tay khách."
  },
  {
    id: "g9",
    title: "Cặp Đôi Bạc Xỉu & Sinh Tố Bơ Đắk Lắk",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/drink-smoothie-coffee.jpg",
    description: "Sự kết hợp hoàn hảo cho buổi hẹn hò hoặc trò chuyện cùng bạn bè bên bàn gỗ."
  },
  {
    id: "g10",
    title: "Tách Cacao Nóng Ấm Lòng Ngày Mưa Sài Gòn",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/drink-hot-cocoa.jpg",
    description: "Tách gốm xinh xắn đựng cacao nóng sánh mịn thơm phức hương bơ cacao tự nhiên."
  },
  {
    id: "g11",
    title: "Sinh Tố Xoài Vàng & Sữa Chua Đánh Đá Mát Lạnh",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/drink-mango-yogurt.jpg",
    description: "Thức uống giải nhiệt yêu thích của khách quen vào những ngày thời tiết oi bức."
  },
  {
    id: "g12",
    title: "Sinh Tố Dâu Tây Đà Lạt Hồng Phấn Ngọt Ngào",
    category: "drinks",
    categoryLabel: "Thức Uống",
    src: "/images/drink-strawberry-smoothie.jpg",
    description: "Dâu tây tươi xay nhuyễn cùng sữa đặc và kem béo, thơm ngào ngạt và bắt mắt."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Anh Tuấn Nguyễn",
    role: "Khách quen Tân Bình",
    rating: 5,
    comment:
      "Quán có giàn cây leo và phun sương cực kỳ mát mẻ. Trưa nắng ghé vào uống ly cà phê sữa đá 22k mà đã khát cả người. Nhân viên nhiệt tình, trà đá châm liên tục!",
    date: "1 tuần trước",
    avatarText: "TN"
  },
  {
    id: "r2",
    author: "Chị Minh Thư",
    role: "Dân văn phòng khu Tân Sơn",
    rating: 5,
    comment:
      "Bạc xỉu ở Ông Mập làm 3 tầng rất đẹp mắt và thơm ngon, không bị ngọt gắt. Buổi tối quán lên đèn lồng ấm cúng, ngồi tán gẫu với bạn bè rất chill.",
    date: "2 tuần trước",
    avatarText: "MT"
  },
  {
    id: "r3",
    author: "Hoàng Long",
    role: "Freelancer",
    rating: 5,
    comment:
      "Wifi mạnh, ổ điện bố trí thuận tiện, giá cả rất bình dân so với mặt bằng chung. Sinh tố bơ dẻo quánh chuẩn vị bơ sáp Đắk Lắk. Quán ruột mỗi tuần của mình!",
    date: "1 tháng trước",
    avatarText: "HL"
  },
  {
    id: "r4",
    author: "Bác Thanh Sơn",
    role: "Cư dân đường Trần Thị Trọng",
    rating: 5,
    comment:
      "Sáng nào cũng làm một ly cà phê phin tí tách ở đây trước khi đi làm. Cà phê rang mộc chuẩn vị, thơm nồng không hóa chất. Chúc quán luôn đông khách!",
    date: "3 tuần trước",
    avatarText: "TS"
  }
];
