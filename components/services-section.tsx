'use client';

import { Home, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Real Estate Done Right',
      description:
        "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: '/service1.webp',
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Commercial & Residential',
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
      image: '/service2.webp',
    },
    {
      id: 3,
      icon: Users,
      title: 'Rely on Expertise',
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      image: '/service3.webp',
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive real estate solutions tailored for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
