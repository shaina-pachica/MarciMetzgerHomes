'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { SearchListingsForm } from './search-listings-form';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
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
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
                Discover Your Dream Home
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                Expert real estate guidance for the Pahrump market. Let Marci
                Metzger help you find the perfect home with nearly 30 years of
                experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Explore Listings
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <SearchListingsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
