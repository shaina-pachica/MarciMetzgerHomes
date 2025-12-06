"use client"

import { Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AgentProfile() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?key=p0ubu"
                alt="Marci Metzger, Realtor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-8">
            <div>
              <p className="text-accent text-lg font-semibold mb-2">Meet Your Expert</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Marci Metzger</h2>
              <p className="text-xl text-muted-foreground mb-6">The Ridge Realty Group | Pahrump Realtor</p>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">5.0 (48 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With nearly 30 years of experience in the Pahrump real estate market, Marci Metzger has helped hundreds
                of families find their perfect home. Her deep knowledge of the local market and personalized approach
                make her the ideal choice for your real estate journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're buying, selling, or investing, Marci is committed to providing exceptional service and
                expert guidance every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-secondary mb-2">30+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-secondary mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 rounded-lg text-lg transition-all">
                <Phone className="mr-2 h-5 w-5" />
                Call (206) 919-6886
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 rounded-lg text-lg bg-transparent"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
