'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

export function ListingsSection() {
  const listings = [
    {
      id: 1,
      title: 'Modern Desert Oasis',
      price: '$450,000',
      location: 'North Pahrump, NV',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: '/sale1.png',
    },
    {
      id: 2,
      title: 'Mountain View Estate',
      price: '$385,000',
      location: 'Pahrump Valley, NV',
      beds: 3,
      baths: 2.5,
      sqft: '2,800',
      image: '/sale2.png',
    },
    {
      id: 3,
      title: 'Contemporary Family Home',
      price: '$375,000',
      location: '5341 E La Campana Dr, Pahrump, NV 89061',
      beds: 3,
      baths: 2,
      sqft: '1,153',
      image: '/sale3.png',
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-semibold mb-2">
            Featured Properties
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Available Listings
          </h2>
          <p className="text-lg text-muted-foreground">
            Handpicked homes in the Pahrump market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-background"
            >
              {/* Listing Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={listing.image || '/placeholder.svg'}
                  alt={listing.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold">
                  {listing.price}
                </div>
              </div>

              {/* Listing Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {listing.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <p className="text-sm">{listing.location}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      {listing.beds}
                    </p>
                    <p className="text-xs text-muted-foreground">Bedrooms</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      {listing.baths}
                    </p>
                    <p className="text-xs text-muted-foreground">Bathrooms</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">
                      {listing.sqft}
                    </p>
                    <p className="text-xs text-muted-foreground">Sq Ft</p>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg"
          >
            View All Listings
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
