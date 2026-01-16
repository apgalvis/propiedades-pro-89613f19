import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface HeroSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const HeroSection = ({ cartUrl, whatsappUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-14">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(6, 78, 59, 0.85), rgba(6, 78, 59, 0.7)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main titles */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span className="block animate-fade-in">
            Publica <span className="text-emerald-300 relative inline-block">
              gratis
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400 animate-draw-line" />
            </span> tus inmuebles
          </span>
          <span className="block animate-fade-in" style={{ animationDelay: '150ms' }}>
            Recibe contactos <span className="text-amber-300">verificados</span> y <span className="text-amber-300">únicos</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-emerald-100/80 max-w-2xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          Publica sin límite, activa visibilidad con tu bolsa de leads gratuita y escala a premium cuando quieras más exposición.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: '450ms' }}>
          <Button 
            asChild
            size="lg" 
            className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={cartUrl} target="_blank" rel="noopener noreferrer">
              Ver planes y precios
              <span className="ml-2">→</span>
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="border-emerald-400/50 bg-emerald-600/30 text-white hover:bg-emerald-500/40 px-6 py-5"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Asesoría personalizada
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
