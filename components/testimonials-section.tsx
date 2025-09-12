import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "StreamLine transformed our operations completely. We've seen a 40% increase in productivity since implementation.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCorp",
    content:
      "The automation features saved us countless hours. Our team can now focus on strategic initiatives instead of manual tasks.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, InnovateLab",
    content:
      "Exceptional platform with outstanding support. The analytics dashboard gives us insights we never had before.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            See what our customers are saying about StreamLine
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 text-pretty">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
