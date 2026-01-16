import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, CheckCircle } from "lucide-react";

interface FinalCTAProps {
  cartUrl: string;
  whatsappUrl: string;
}

const FinalCTA = ({ cartUrl, whatsappUrl }: FinalCTAProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(6, 78, 59, 0.9), rgba(6, 78, 59, 0.95)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Da el salto a{" "}
            <span className="text-amber-300">visibilidad continua</span>
          </h2>
          <p className="text-emerald-100/80 text-lg mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Únete a miles de agentes que ya multiplicaron sus resultados con Premium
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-emerald-900 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
            >
              <a href={cartUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ir al carrito y activar Premium
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar con un asesor
              </a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-emerald-100/70 text-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Sin permanencia
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Cancela cuando quieras
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Soporte incluido
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
