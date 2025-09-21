import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                <MapPin className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="font-serif font-bold text-xl">
                Jharkhand<span className="text-secondary">Tour</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering sustainable tourism in Jharkhand through AI-powered digital experiences and community-driven services.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#destinations" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Popular Destinations
              </a>
              <a href="#guides" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Local Guides
              </a>
              <a href="#marketplace" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Marketplace
              </a>
              <a href="#experiences" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Cultural Experiences
              </a>
              <a href="#ar-tours" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                AR/VR Tours
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <a href="#itinerary" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                AI Itinerary Planning
              </a>
              <a href="#booking" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Secure Booking
              </a>
              <a href="#multilingual" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Multilingual Support
              </a>
              <a href="#analytics" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Tourism Analytics
              </a>
              <a href="#blockchain" className="block text-primary-foreground/80 hover:text-secondary transition-smooth">
                Blockchain Verification
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">contact@jharkhandtour.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm">Available in 12 languages</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Badge variant="secondary" className="mr-2">
                AI Powered
              </Badge>
              <Badge variant="outline" className="bg-transparent border-secondary text-secondary">
                Blockchain Secured
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 JharkhhandTour. All rights reserved. Built for sustainable tourism.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                Terms of Service
              </a>
              <div className="flex items-center space-x-1 text-primary-foreground/60">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-accent fill-current" />
                <span>for Jharkhand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}