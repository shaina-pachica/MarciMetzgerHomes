'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function SocialMediaSection() {
  const socialLinks = [
    { id: 1, icon: Facebook, label: 'Facebook', url: '#' },
    { id: 2, icon: Instagram, label: 'Instagram', url: '#' },
    { id: 3, icon: Linkedin, label: 'LinkedIn', url: '#' },
    { id: 4, icon: Twitter, label: 'Twitter', url: '#' },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.id}
                href={social.url}
                aria-label={social.label}
                className="w-14 h-14 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group"
              >
                <IconComponent className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
