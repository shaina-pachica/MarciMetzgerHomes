'use client';

import { TrendingUp, Send, Users } from 'lucide-react';
import { useState } from 'react';

export function GetItSoldSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Top Residential Sales Last 5 Years',
      description:
        'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.',
      image: '/gis1.webp',
    },
    {
      id: 2,
      icon: Send,
      title: "Don't Just List it...Get it SOLD!",
      description:
        'We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
      image: '/gis2.webp',
    },
    {
      id: 3,
      icon: Users,
      title: 'Guide to Buyers',
      description:
        'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
      image: '/gis3.webp',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get it Sold
          </h2>
          <p className="text-lg text-muted-foreground">
            Proven strategies to maximize your property's value
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-in fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className={`${isEven ? 'order-1' : 'order-2'}`}>
                  <div className="relative overflow-hidden rounded-lg h-80 shadow-lg group cursor-pointer">
                    <img
                      src={feature.image || '/placeholder.svg'}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Container */}
                <div className={`${isEven ? 'order-2' : 'order-1'}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
