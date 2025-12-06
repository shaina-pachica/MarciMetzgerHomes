"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
              MM
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-primary">Marci Metzger</h1>
              <p className="text-xs text-muted-foreground">Real Estate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Listings
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (206) 919-6886
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground hover:text-primary">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Home
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Listings
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              About
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Contact
            </a>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-4 rounded-lg">
              Call Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
