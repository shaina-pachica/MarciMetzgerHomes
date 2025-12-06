'use client';

import { Home, TrendingUp, FileText, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Property Sales',
      description:
        "Expert guidance for buying and selling properties in Pahrump's competitive market.",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Market Analysis',
      description:
        'Comprehensive market insights to help you make informed real estate decisions.',
    },
    {
      id: 3,
      icon: FileText,
      title: 'Legal Assistance',
      description:
        'Support with contracts, documentation, and all legal aspects of your transaction.',
    },
    {
      id: 4,
      icon: Users,
      title: 'Investment Consulting',
      description:
        'Tailored strategies for real estate investment opportunities and portfolio growth.',
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="p-6 border-0 bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
