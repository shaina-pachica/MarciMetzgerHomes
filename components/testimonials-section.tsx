"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Home Buyer",
      content:
        "Marci went above and beyond to help us find our dream home. Her expertise in the Pahrump market was invaluable. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      author: "Robert Martinez",
      role: "Home Seller",
      content:
        "Professional, knowledgeable, and results-driven. Marci sold our property in record time for an excellent price. Thank you!",
      rating: 5,
    },
    {
      id: 3,
      author: "Jennifer Lee",
      role: "Investment Client",
      content:
        "Working with Marci for our investment properties has been a game-changer. Her market insights helped us make smart decisions.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-lg font-semibold mb-2">Client Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by hundreds of satisfied homeowners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 border-0 bg-muted/30 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-primary">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
