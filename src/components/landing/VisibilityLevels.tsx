import { Pause, Eye, Star, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const levels = [
  {
    id: "paused",
    name: "Pausado",
    icon: Pause,
    description: "No visible, pero editable",
    features: ["Edita cuando quieras", "Sin consumo de leads", "Se reactiva con recarga"],
    visibility: 0,
    color: "bg-gray-100 border-gray-200",
    iconColor: "text-gray-400",
    isPremium: false,
  },
  {
    id: "simple",
    name: "Anuncio Simple",
    icon: Eye,
    description: "Visible, consume leads",
    features: ["Aparece en búsquedas", "Leads verificados", "Bolsa compartida"],
    visibility: 25,
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-500",
    isPremium: false,
  },
  {
    id: "featured",
    name: "Destacado",
    icon: Star,
    description: "Segunda posición + distintivo",
    features: ["Posición privilegiada", "Badge destacado", "Leads NO restan de bolsa"],
    visibility: 75,
    color: "bg-emerald-100 border-emerald-300",
    iconColor: "text-emerald-600",
    isPremium: true,
  },
  {
    id: "prime",
    name: "Prime",
    icon: Crown,
    description: "Máxima exposición",
    features: ["Primera posición", "Máxima visibilidad", "Leads ilimitados"],
    visibility: 100,
    color: "bg-amber-50 border-amber-300",
    iconColor: "text-amber-500",
    isPremium: true,
  },
];

const VisibilityLevels = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Niveles de <span className="text-emerald-600">visibilidad</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el nivel de exposición que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`relative rounded-2xl border-2 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${level.color} ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              } ${level.isPremium ? 'hover:shadow-emerald-200' : ''}`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: isVisible ? `translateY(${(3 - index) * -8}px)` : 'translateY(0)',
              }}
            >
              {/* Premium badge */}
              {level.isPremium && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white animate-shimmer">
                  PREMIUM
                </Badge>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${level.isPremium ? 'bg-white' : 'bg-white/80'} flex items-center justify-center mx-auto mb-4 shadow-md ${level.id === 'prime' ? 'animate-glow' : ''}`}>
                <level.icon className={`w-8 h-8 ${level.iconColor} ${level.id === 'paused' ? 'animate-pulse' : ''}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{level.name}</h3>
              <p className="text-gray-600 text-center text-sm mb-4">{level.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {level.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className={`w-1.5 h-1.5 rounded-full ${level.isPremium ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Visibility bar */}
              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Visibilidad</span>
                  <span>{level.visibility}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      level.id === 'prime' ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 
                      level.id === 'paused' ? 'bg-gray-300' : 'bg-emerald-500'
                    }`}
                    style={{ 
                      width: isVisible ? `${level.visibility}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          ⭐ Los niveles Destacado y Prime están disponibles en los planes de pago
        </p>
      </div>
    </section>
  );
};

export default VisibilityLevels;
