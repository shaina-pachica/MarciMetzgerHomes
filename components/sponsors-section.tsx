'use client';

export function SponsorsSection() {
  const sponsors = [
    { id: 1, name: 'Real Estate Alliance', logo: 'RA' },
    { id: 2, name: 'Nevada Board', logo: 'NB' },
    { id: 3, name: 'Local Partners', logo: 'LP' },
    { id: 4, name: 'Community Trust', logo: 'CT' },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-lg font-semibold mb-2">Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Trusted Organizations
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="w-24 h-24 rounded-lg bg-muted/50 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-2xl font-bold text-primary">
                {sponsor.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
