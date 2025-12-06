'use client';

export function MapSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-lg font-semibold mb-2">
            Our Service Area
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Find Us on the Map
          </h2>
        </div>

        <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8169383850636!2d-115.94732!3d36.20584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6fef1d1d1d1d1%3A0x0!2sParump%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
