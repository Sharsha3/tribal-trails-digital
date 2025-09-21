import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Cloud, Bot, Star, MapPin, Clock, Users, Zap } from "lucide-react"

export const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Book tours, guides, and accommodations with AI-powered recommendations and instant confirmations.",
      highlights: ["Instant Booking", "Flexible Cancellation", "Best Price Guarantee"],
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Live Weather & Travel Updates",
      description: "Real-time weather forecasts, road conditions, and travel advisories for all Jharkhand destinations.",
      highlights: ["7-Day Forecast", "Traffic Updates", "Safety Alerts"],
      color: "sky"
    },
    {
      icon: Bot,
      title: "AI Travel Assistant",
      description: "Multilingual AI chatbot providing personalized itineraries and 24/7 travel support.",
      highlights: ["Multilingual Support", "Custom Itineraries", "24/7 Assistance"],
      color: "secondary"
    },
    {
      icon: Star,
      title: "Community Reviews & Ratings",
      description: "Authentic reviews from verified travelers with photo galleries and detailed experiences.",
      highlights: ["Verified Reviews", "Photo Galleries", "Local Insights"],
      color: "accent"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary))_0%,transparent_50%)] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            Advanced Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Professional Tourism Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience Jharkhand through cutting-edge technology and comprehensive digital services designed for modern travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-[1.02] bg-card/80 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                      <Icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Available across Jharkhand</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.highlights.map((highlight) => (
                      <Badge 
                        key={highlight} 
                        variant="secondary" 
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Tourist Destinations", icon: MapPin },
            { value: "1000+", label: "Verified Guides", icon: Users },
            { value: "24/7", label: "AI Support", icon: Bot },
            { value: "4.9★", label: "Average Rating", icon: Star }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold font-serif text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}