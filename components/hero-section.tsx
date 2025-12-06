'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { SearchListingsForm } from './search-listings-form';
import Image from 'next/image';
import { Star } from 'lucide-react';


export function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover opacity-100 bg-center bg-[url('/hero-bg.jpg')]" />

        <div className="absolute inset-0 -z-10 opacity-75 bg-white"></div>

        {/* Decorative background element */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 flex flex-col items-start">
              {/* Profile Image */}
              <Image
                src="/marci.webp"
                alt="Marci Metzger"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />

              {/* Subheader */}
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                THE RIDGE REALTY GROUP
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">5.0 (48 reviews)</span>
              </div>

              {/* Header - Name */}
              <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">
                MARCI
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">
                METZGER
              </h1>

              {/* Subheader */}
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                Managing Broker / Owner
              </p>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-md">
                Marci was a REALTOR, then licensed Broker, in Washington State.
                Having helped buyers and sellers in many markets since 1995, she
                is a wealth of knowledge.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg p-4">
                  <p className="text-3xl font-bold text-secondary mb-2">30+</p>
                  <p className="text-sm text-muted-foreground">
                    Years of Experience
                  </p>
                </div>
                <div className="rounded-lg p-4">
                  <p className="text-3xl font-bold text-secondary mb-2">500+</p>
                  <p className="text-sm text-primary">Happy Clients</p>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
                >
                  <a
                    href="https://www.zillow.com/profile/marcimetzger?msockid=36883d4349a7623b2d8d2b07483a63df"
                    target="_blank"
                  >
                    Get to know Marci
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Search Form */}
            <div className="flex items-center justify-center">
              <SearchListingsForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
