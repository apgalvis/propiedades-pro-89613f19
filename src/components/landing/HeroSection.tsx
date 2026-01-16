import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  cartUrl: string;
}

const HeroSection = ({ cartUrl }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-14">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(6, 78, 59, 0.85), rgba(6, 78, 59, 0.7)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <Badge 
          variant="secondary" 
          className="mb-5 bg-emerald-500/20 text-emerald-100 border-emerald-400/30"
        >
          🔥 +2,500 agentes activos
        </Badge>

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
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-5 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 transition-all duration-300"
          >
            Publicar gratis
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-6 py-5 group"
          >
            <a href={cartUrl} target="_blank" rel="noopener noreferrer">
              Ver planes Premium
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
