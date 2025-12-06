'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, title: 'Desert Landscape', image: '/pic1.webp' },
    {
      id: 2,
      title: 'Modern Home Interior',
      image: '/pic2.webp',
    },
    { id: 3, title: 'Mountain View', image: '/pic3.webp' },
    { id: 4, title: 'Home Exterior', image: '/pic4.webp' },
    { id: 5, title: 'Living Room', image: '/pic5.webp' },
    { id: 6, title: 'Backyard Pool', image: '/pic7.webp' },
  ];

  return (
    <>
      <section className="py-20 bg-primary">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-lg font-semibold mb-2">Gallery</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Beautiful Homes Showcase
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore stunning properties in Pahrump
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300 animate-in fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.image)}
              >
                <img
                  src={image.image || '/placeholder.svg'}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-96 animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage || '/placeholder.svg'}
              alt="Gallery preview"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors btn-hover"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
