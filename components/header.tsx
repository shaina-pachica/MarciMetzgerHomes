'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', offset: 0 },
        { id: 'listings', offset: 800 },
        { id: 'get-it-sold', offset: 1600 },
        { id: 'gallery', offset: 2400 },
        { id: 'services', offset: 3200 },
        { id: 'sponsors', offset: 4000 },
        { id: 'testimonials', offset: 4800 },
        { id: 'contact', offset: 5600 },
        { id: 'social', offset: 6400 },
        { id: 'map', offset: 7200 },
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Listings', id: 'listings' },
    { label: 'Get It Sold', id: 'get-it-sold' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
    { label: 'About', id: 'map' },
  ];

  return (
    <header
      className={`z-50 transition-all duration-300 ${
        isScrolled && !isOpen ? 'sticky top-0 z-50 backdrop-blur' : `absolute top-0 w-full ${isOpen ? "backdrop-blur ":""}`
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/marci-metzger-homes.webp"
                alt="Marci Metzger Logo"
                width={200}
                height={40}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <nav className="hidden md:flex items-center gap-2 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 font-bold text-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-muted-foreground border-b-2 border-accent'
                    : 'text-accent hover:text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))} 
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-2 font-bold text-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 rounded'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
