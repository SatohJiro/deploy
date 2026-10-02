import type { Metadata, Viewport } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { CAFE_INFO } from "@/data/cafeInfo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#120905",
};

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ongmapcoffee.vn"),
  title: {
    default: "Ông Mập Coffee - Cà Phê Sân Vườn Phun Sương Mát Lạnh | 156 Trần Thị Trọng, Tân Bình",
    template: "%s | Ông Mập Coffee"
  },
  description:
    "Quán cà phê sân vườn Ông Mập tại 156 Đ. Trần Thị Trọng, Tân Sơn, Tân Bình, TP.HCM. Cà phê phin nguyên chất rang mộc, không gian rợp bóng cây, phun sương mát rượi, đá xay, sinh tố trái cây tươi từ 18k - 38k.",
  keywords: [
    "Ông Mập Coffee",
    "cà phê Tân Bình",
    "cà phê Trần Thị Trọng",
    "cafe sân vườn Tân Sơn",
    "cà phê phun sương",
    "cà phê phin truyền thống Tân Bình",
    "bạc xỉu 3 tầng",
    "quán cafe làm việc Tân Bình",
    "quán nước gần sân bay Tân Sơn Nhất"
  ],
  authors: [{ name: "Ông Mập Coffee" }],
  creator: "Ông Mập Coffee",
  publisher: "Ông Mập Coffee",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://ongmapcoffee.vn",
    title: "Ông Mập Coffee - Cà Phê Mộc Sân Vườn Phun Sương Mát Lạnh",
    description:
      "Thưởng thức cà phê phin nguyên chất, đá xay, sinh tố tươi trong không gian xanh mát rượi tại 156 Trần Thị Trọng, Tân Bình. Phục vụ 06:00 - 22:30 mỗi ngày.",
    siteName: "Ông Mập Coffee",
    images: [
      {
        url: "/images/cafe-exterior-mist.jpg",
        width: 1200,
        height: 630,
        alt: "Không gian mặt tiền sân vườn phun sương mát rượi tại Ông Mập Coffee"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ông Mập Coffee - 156 Trần Thị Trọng, Tân Bình",
    description: "Cà phê sân vườn mát lạnh, đá xay, sinh tố trái cây tươi giá chỉ từ 18k.",
    images: ["/images/cafe-exterior-mist.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://ongmapcoffee.vn"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: CAFE_INFO.name,
    image: "https://ongmapcoffee.vn/images/cafe-exterior-mist.jpg",
    description: CAFE_INFO.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: CAFE_INFO.streetAddress,
      addressLocality: CAFE_INFO.addressLocality,
      addressRegion: CAFE_INFO.addressRegion,
      postalCode: "700000",
      addressCountry: CAFE_INFO.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CAFE_INFO.coordinates.latitude,
      longitude: CAFE_INFO.coordinates.longitude
    },
    url: "https://ongmapcoffee.vn",
    telephone: "+84907710799",
    priceRange: CAFE_INFO.priceRange,
    servesCuisine: ["Cà phê Việt Nam", "Trà trái cây", "Sinh tố", "Đá xay", "Sữa chua"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "06:00",
        closes: "22:30"
      }
    ],
    hasMenu: "https://ongmapcoffee.vn/#menu",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Misting Cooling System", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking Area", value: true }
    ]
  };

  return (
    <html lang="vi" className={`${playfair.variable} ${beVietnam.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
