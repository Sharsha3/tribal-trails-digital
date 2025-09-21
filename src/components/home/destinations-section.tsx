import { Button } from "@/components/ui/button"
import { HeroCard } from "@/components/ui/hero-card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Camera } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Netarhat",
    description: "The Queen of Chotanagpur, famous for sunrise and sunset views",
    category: "Hill Station",
    rating: 4.8,
    duration: "2-3 days",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    highlights: ["Sunrise Point", "Sunset Point", "Tribal Villages"]
  },
  {
    id: 2,
    name: "Betla National Park",
    description: "Wildlife sanctuary home to tigers, elephants, and rare species",
    category: "Wildlife",
    rating: 4.6,
    duration: "1-2 days",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop",
    highlights: ["Tiger Safari", "Elephant Rides", "Bird Watching"]
  },
  {
    id: 3,
    name: "Hundru Falls",
    description: "Spectacular 98-meter waterfall surrounded by dense forests",
    category: "Waterfall",
    rating: 4.7,
    duration: "Half day",
    image: "https://images.unsplash.com/photo-1508253478509-8d4b5e37f9f2?w=400&h=300&fit=crop",
    highlights: ["Natural Pool", "Trekking", "Photography"]
  },
  {
    id: 4,
    name: "Deoghar",
    description: "Sacred city famous for Baidyanath Temple and spiritual tourism",
    category: "Religious",
    rating: 4.9,
    duration: "2-3 days",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    highlights: ["Baidyanath Temple", "Spiritual Tours", "Local Festivals"]
  },
  {
    id: 5,
    name: "Patratu Valley",
    description: "Scenic valley with crystal clear lake and boating facilities",
    category: "Lake",
    rating: 4.5,
    duration: "1 day",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
    highlights: ["Boating", "Valley Views", "Photography"]
  },
  {
    id: 6,
    name: "Tribal Villages",
    description: "Experience authentic tribal culture and traditional lifestyle",
    category: "Cultural",
    rating: 4.4,
    duration: "2-4 days",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&h=300&fit=crop",
    highlights: ["Cultural Tours", "Traditional Dance", "Handicrafts"]
  }
]

export const DestinationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Jharkhand's most breathtaking locations, from pristine waterfalls to ancient temples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <HeroCard key={destination.id} variant="elevated" className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {destination.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-primary">{destination.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Jharkhand</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <Camera className="h-4 w-4 mr-1" />
                      Explore
                    </Button>
                    <Button variant="outline" size="sm">
                      AR View
                    </Button>
                  </div>
                </div>
              </div>
            </HeroCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <MapPin className="mr-2 h-5 w-5" />
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}