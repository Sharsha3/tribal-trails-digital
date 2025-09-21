import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HeroCard } from "@/components/ui/hero-card"
import { AuthModal } from "@/components/auth/auth-modal"
import { MapPin, Users, Camera, Globe } from "lucide-react"
import heroImage from "@/assets/jharkhand-hero.jpg"

export const HeroSection = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; userType: "tourist" | "guide" | null }>({
    isOpen: false,
    userType: null
  })

  const openAuthModal = (userType: "tourist" | "guide") => {
    setAuthModal({ isOpen: true, userType })
  }

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, userType: null })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Jharkhand landscape with forests, hills and waterfalls" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Discover the Heart of
              <span className="block hero-gradient bg-clip-text text-transparent">
                Jharkhand
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience authentic eco-tourism, rich tribal culture, and breathtaking natural beauty through our AI-powered digital platform
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary"
              size="lg" 
              className="text-lg px-8 py-6 shadow-strong hover:shadow-glow transition-spring"
              onClick={() => openAuthModal("tourist")}
            >
              <Camera className="mr-2 h-5 w-5" />
              Explore as Tourist
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-strong hover:shadow-glow transition-spring"
              onClick={() => openAuthModal("guide")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join as Guide
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <HeroCard variant="glass" className="p-6 text-center">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Interactive Maps</h3>
              <p className="text-white/80">Discover hidden gems with AR/VR previews and real-time location data</p>
            </HeroCard>
            
            <HeroCard variant="glass" className="p-6 text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Local Guides</h3>
              <p className="text-white/80">Connect with verified local experts and tribal community members</p>
            </HeroCard>
            
            <HeroCard variant="glass" className="p-6 text-center">
              <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">Multilingual</h3>
              <p className="text-white/80">Experience Jharkhand in your preferred language with AI assistance</p>
            </HeroCard>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {authModal.userType && (
        <AuthModal 
          isOpen={authModal.isOpen}
          onClose={closeAuthModal}
          userType={authModal.userType}
        />
      )}
    </section>
  )
}