import StickyBanner from "@/components/landing/StickyBanner";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import VisibilityLevels from "@/components/landing/VisibilityLevels";
import PremiumPlansSection from "@/components/landing/PremiumPlansSection";
import PremiumBenefits from "@/components/landing/PremiumBenefits";
import FAQSection from "@/components/landing/FAQSection";
import GlossarySection from "@/components/landing/GlossarySection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

// Configuración de URLs externas
const CART_URL = "https://propiedades.com/carrito"; // Cambiar por la URL real del carrito
const WHATSAPP_URL = "https://wa.me/5215512345678?text=Hola,%20quiero%20cotizar%20un%20plan%20Premium"; // Cambiar por el número real

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyBanner cartUrl={CART_URL} />
      <HeroSection cartUrl={CART_URL} whatsappUrl={WHATSAPP_URL} />
      <HowItWorksSection />
      <VisibilityLevels />
      <PremiumPlansSection cartUrl={CART_URL} whatsappUrl={WHATSAPP_URL} />
      <PremiumBenefits cartUrl={CART_URL} whatsappUrl={WHATSAPP_URL} />
      <FAQSection />
      <GlossarySection />
      <FinalCTA cartUrl={CART_URL} whatsappUrl={WHATSAPP_URL} />
      <Footer />
    </div>
  );
};

export default Index;
