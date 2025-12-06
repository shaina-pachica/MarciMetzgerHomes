'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ListingsSection } from '@/components/listings-section';
import { GetItSoldSection } from '@/components/get-it-sold-section';
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
      <section id="hero">
        <HeroSection />
      </section>
      <section id="listings">
        <ListingsSection />
      </section>
      <section id="get-it-sold">
        <GetItSoldSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="sponsors">
        <SponsorsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactVisitSection />
      </section>
      <section id="social">
        <SocialMediaSection />
      </section>
      <section id="map">
        <MapSection />
      </section>
      <Footer />
    </main>
  );
}
