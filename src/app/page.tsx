import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Features from '@/components/Features';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import Reviews from '@/components/Reviews';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Showcase with Misting & Ambience */}
      <Hero />

      {/* Story: The Rustic Vibe & Misting Garden */}
      <Story />

      {/* Interactive Menu Section with Real Wooden Board details */}
      <MenuSection />

      {/* Authentic Photo Gallery with Lightbox */}
      <GallerySection />

      {/* Core Advantages & Amenities */}
      <Features />

      {/* Customer Testimonials & Reviews */}
      <Reviews />

      {/* Location, Google Maps & Reservation */}
      <LocationContact />

      {/* Brand Footer */}
      <Footer />

      {/* Floating Bottom Bar for Mobile Devices */}
      <MobileActionBar />
    </main>
  );
}
