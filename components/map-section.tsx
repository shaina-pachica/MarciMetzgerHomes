'use client';

import { MapPin } from 'lucide-react';

export function MapSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-lg font-semibold mb-2">LOCATION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Find Us on the Map
          </h2>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.8169383850636!2d-115.94732!3d36.20584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6fef1d1d1d1d1%3A0x0!2sParump%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 max-w-xs animate-in slide-up duration-500">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">Our Office</h3>
                <p className="text-sm text-muted-foreground">
                  3190 HW 160, Suite F<br />
                  Pahrump, NV
                  <br />
                  United States, Nevada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
