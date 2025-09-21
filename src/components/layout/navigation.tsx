import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AuthModal } from "@/components/auth/auth-modal"
import { 
  Menu, 
  X, 
  MapPin, 
  Compass, 
  ShoppingBag, 
  Users, 
  Globe,
  User,
  Settings
} from "lucide-react"

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; userType: "tourist" | "guide" | null }>({
    isOpen: false,
    userType: null
  })

  const openAuthModal = (userType: "tourist" | "guide") => {
    setAuthModal({ isOpen: true, userType })
    setIsMenuOpen(false)
  }

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, userType: null })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/20 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div className="font-serif font-bold text-xl text-foreground">
                Jharkhand<span className="text-primary">Tour</span>
              </div>
              <Badge variant="outline" className="text-xs">Beta</Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-foreground hover:text-primary transition-smooth font-medium">
                Destinations
              </a>
              <a href="#experiences" className="text-foreground hover:text-primary transition-smooth font-medium">
                Experiences
              </a>
              <a href="#marketplace" className="text-foreground hover:text-primary transition-smooth font-medium">
                Marketplace
              </a>
              <a href="#guides" className="text-foreground hover:text-primary transition-smooth font-medium">
                Guides
              </a>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-foreground">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => openAuthModal("tourist")}
              >
                <User className="h-4 w-4 mr-2" />
                Tourist Login
              </Button>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => openAuthModal("guide")}
              >
                <Users className="h-4 w-4 mr-2" />
                Guide Portal
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/20">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#destinations" 
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Compass className="h-4 w-4" />
                  <span>Destinations</span>
                </a>
                <a 
                  href="#experiences" 
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Experiences</span>
                </a>
                <a 
                  href="#marketplace" 
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Marketplace</span>
                </a>
                <a 
                  href="#guides" 
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="h-4 w-4" />
                  <span>Guides</span>
                </a>
                
                <div className="pt-4 border-t border-border/20 space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => openAuthModal("tourist")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Tourist Login
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => openAuthModal("guide")}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Guide Portal
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Language: English
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      {authModal.userType && (
        <AuthModal 
          isOpen={authModal.isOpen}
          onClose={closeAuthModal}
          userType={authModal.userType}
        />
      )}
    </>
  )
}