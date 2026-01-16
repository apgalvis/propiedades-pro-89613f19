import { Infinity, Eye, Trophy, Smartphone, BarChart3, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

interface PremiumBenefitsProps {
  cartUrl: string;
  whatsappUrl: string;
}

const benefits = [
  { icon: Infinity, title: "Leads ilimitados", description: "Sin tope de contactos mensuales" },
  { icon: Eye, title: "Visibilidad 24/7", description: "Sin pausas ni interrupciones" },
  { icon: Trophy, title: "Destacados y Prime", description: "Máxima exposición en búsquedas" },
  { icon: Smartphone, title: "WhatsApp ilimitado", description: "Leads directo a tu celular" },
  { icon: BarChart3, title: "Métricas avanzadas", description: "Analytics detallados de rendimiento" },
  { icon: Headphones, title: "Soporte prioritario", description: "Atención preferencial" },
];

const PremiumBenefits = ({ cartUrl, whatsappUrl }: PremiumBenefitsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Desbloquea tu{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent animate-gradient">
              potencial
            </span>
          </h2>
          <p className="text-emerald-100/80 max-w-2xl mx-auto text-lg">
            Con Premium, tu negocio inmobiliario alcanza otro nivel de resultados
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
              <p className="text-emerald-100/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className={`max-w-xl mx-auto mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-center text-white font-semibold mb-6">Comparativa de resultados</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-white/80 mb-1">
                  <span>Visibilidad Gratuita</span>
                  <span>25%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-400 rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? '25%' : '0%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-white mb-1">
                  <span className="font-semibold">Visibilidad Premium</span>
                  <span className="text-amber-300 font-bold">100%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? '100%' : '0%', transitionDelay: '200ms' }}
                  />
                </div>
              </div>
            </div>
            <p className="text-center text-amber-300 font-bold text-xl mt-6 animate-pulse">
              4× más visibilidad
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-emerald-900 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
          >
            <a href={cartUrl} target="_blank" rel="noopener noreferrer">
              Ver planes y precios
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              💬 Cotizar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumBenefits;
