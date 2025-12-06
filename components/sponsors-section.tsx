'use client';

export function SponsorsSection() {
  const sponsors = [
    { id: 1, name: 'Real Estate Alliance', image: '/trrg.webp' },
    { id: 2, name: 'Nevada Board', image: '/eho.webp' },
    { id: 3, name: 'Local Partners', image: '/realtor.webp' },
    { id: 4, name: 'Community Trust', image: '/pahrump-valley.webp' },
  ];

  return (
    <section className="py-8 bg-muted/40 border-y border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <p className="text-accent text-lg font-semibold mb-2">
            Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trusted Organizations
          </h2>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-10 opacity-80">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.id}
              src={sponsor.image}
              alt={sponsor.name}
              className="
                h-25 md:h-35 
                w-auto 
                object-contain 
                grayscale 
                hover:grayscale-0 
                hover:scale-105 
                transition-all 
                duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
