import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      avatar: "/placeholder-avatar-1.jpg",
      rating: 5,
      text: "The AI-powered recommendations were spot-on! Discovered hidden waterfalls in Netarhat that weren't in any guidebook. The local guide was incredibly knowledgeable about tribal culture.",
      experience: "Cultural Heritage Tour"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      avatar: "/placeholder-avatar-2.jpg", 
      rating: 5,
      text: "Booking was seamless, weather updates were accurate, and the multilingual support made everything so easy. Jharkhand's natural beauty exceeded all expectations!",
      experience: "Eco-Tourism Package"
    },
    {
      name: "Sarah Johnson",
      location: "California, USA",
      avatar: "/placeholder-avatar-3.jpg",
      rating: 5,
      text: "As an international tourist, the platform made exploring Jharkhand incredibly accessible. The AR previews of monuments helped plan our itinerary perfectly.",
      experience: "Historical Sites Tour"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)] opacity-3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Tourist Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            What Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from tourists who discovered Jharkhand's beauty through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-[1.02] bg-card/80 backdrop-blur-sm group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20 fill-current" />
                  <p className="text-muted-foreground leading-relaxed pl-6 mb-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <Badge 
                  variant="secondary" 
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {testimonial.experience}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary fill-current" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">2,500+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}