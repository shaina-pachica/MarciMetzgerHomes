'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ListingsSection } from '@/components/listings-section';
import { GallerySection } from '@/components/gallery-section';
import { ServicesSection } from '@/components/services-section';
import { SponsorsSection } from '@/components/sponsors-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactVisitSection } from '@/components/contact-visit-section';
import { SocialMediaSection } from '@/components/social-media-section';
import { MapSection } from '@/components/map-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ListingsSection />
      <GallerySection />
      <ServicesSection />
      <SponsorsSection />
      <TestimonialsSection />
      <ContactVisitSection />
      <SocialMediaSection />
      <MapSection />
      <Footer />
    </main>
  );
}
