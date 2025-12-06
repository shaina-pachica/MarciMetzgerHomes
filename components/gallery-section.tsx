'use client';

export function GallerySection() {
  const galleryImages = [
    { id: 1, title: 'Desert Landscape', image: '/vast-desert.png' },
    {
      id: 2,
      title: 'Modern Home Interior',
      image: '/modern-home-interior.jpg',
    },
    { id: 3, title: 'Mountain View', image: '/scenic-mountain-vista.png' },
    { id: 4, title: 'Home Exterior', image: '/luxury-home-exterior.png' },
    { id: 5, title: 'Living Room', image: '/luxury-living-room.png' },
    { id: 6, title: 'Backyard Pool', image: '/luxury-backyard-pool.jpg' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-semibold mb-2">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Beautiful Homes Showcase
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore stunning properties in Pahrump
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.image || '/placeholder.svg'}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
