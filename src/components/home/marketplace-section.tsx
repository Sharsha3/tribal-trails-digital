import { Button } from "@/components/ui/button"
import { HeroCard } from "@/components/ui/hero-card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, Star, Users } from "lucide-react"
import handicraftsImage from "@/assets/handicrafts.jpg"
import localGuideImage from "@/assets/local-guide.jpg"

const marketplaceItems = [
  {
    id: 1,
    title: "Traditional Tribal Handicrafts",
    description: "Authentic handwoven textiles, wooden carvings, and pottery",
    price: "₹500 - ₹5,000",
    rating: 4.8,
    reviews: 124,
    category: "Handicrafts",
    image: handicraftsImage,
    seller: "Santhal Artisan Collective"
  },
  {
    id: 2,
    title: "Local Guide Services",
    description: "Certified tribal guides for cultural and eco-tourism",
    price: "₹1,500/day",
    rating: 4.9,
    reviews: 89,
    category: "Services",
    image: localGuideImage,
    seller: "Local Guide Network"
  },
  {
    id: 3,
    title: "Eco-Friendly Homestays",
    description: "Experience authentic tribal lifestyle in traditional homes",
    price: "₹800 - ₹2,500/night",
    rating: 4.7,
    reviews: 156,
    category: "Accommodation",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    seller: "Tribal Homestay Network"
  },
  {
    id: 4,
    title: "Cultural Experience Tours",
    description: "Traditional dance, music, and tribal festivals",
    price: "₹2,000 - ₹8,000",
    rating: 4.6,
    reviews: 73,
    category: "Experiences",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    seller: "Cultural Experience Co."
  }
]

export const MarketplaceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Local Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Support local communities through authentic products, services, and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaceItems.map((item) => (
            <HeroCard key={item.id} variant="elevated" className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white text-primary h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary text-sm">{item.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-muted-foreground">{item.rating} ({item.reviews})</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{item.seller}</span>
                  </div>
                </div>

                <Button variant="default" size="sm" className="w-full">
                  <ShoppingBag className="h-3 w-3 mr-1" />
                  View Details
                </Button>
              </div>
            </HeroCard>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <Button variant="secondary" size="lg">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Explore Marketplace
          </Button>
          <p className="text-sm text-muted-foreground">
            100% authentic products • Blockchain verified • Direct from artisans
          </p>
        </div>
      </div>
    </section>
  )
}