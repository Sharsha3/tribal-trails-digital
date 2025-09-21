import { Navigation } from "@/components/layout/navigation"
import { HeroSection } from "@/components/home/hero-section"
import { DestinationsSection } from "@/components/home/destinations-section"
import { MarketplaceSection } from "@/components/home/marketplace-section"
import { Footer } from "@/components/layout/footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <DestinationsSection />
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
