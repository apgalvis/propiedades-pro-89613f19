import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Home, Building, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  cartUrl: string;
}

const FloatingIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute opacity-20 animate-float ${className}`}>
    {children}
  </div>
);

const HeroSection = ({ cartUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(6, 78, 59, 0.85), rgba(6, 78, 59, 0.7)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`
        }}
      />
      
      {/* Floating particles */}
      <FloatingIcon className="top-20 left-[10%] text-white">
        <Home className="w-8 h-8" />
      </FloatingIcon>
      <FloatingIcon className="top-40 right-[15%] text-white animation-delay-1000">
        <Building2 className="w-10 h-10" />
      </FloatingIcon>
      <FloatingIcon className="bottom-32 left-[20%] text-white animation-delay-2000">
        <Building className="w-6 h-6" />
      </FloatingIcon>
      <FloatingIcon className="bottom-40 right-[25%] text-white animation-delay-500">
        <TrendingUp className="w-8 h-8" />
      </FloatingIcon>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <Badge 
          variant="secondary" 
          className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400/30 animate-bounce-slow"
        >
          🔥 +2,500 agentes activos
        </Badge>

        {/* Main titles */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          <span className="block animate-slide-in-left">
            Publica <span className="text-emerald-300 relative inline-block">
              gratis
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400 animate-draw-line" />
            </span> tus inmuebles
          </span>
          <span className="block animate-slide-in-right animation-delay-300">
            Recibe contactos <span className="text-amber-300">verificados</span> y <span className="text-amber-300">únicos</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-600">
          Publica sin límite, activa visibilidad con tu bolsa de leads gratuita y escala a premium cuando quieras más exposición.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-900">
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-400 text-white text-lg px-8 py-6 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105 transition-all duration-300"
          >
            Publicar gratis
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 group"
          >
            <a href={cartUrl} target="_blank" rel="noopener noreferrer">
              Ver planes Premium
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
