import { Pause, Eye, Star, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const levels = [
  {
    id: "paused",
    name: "Pausado",
    icon: Pause,
    description: "No visible, pero editable",
    features: [
      "Edita cuando quieras",
      "Sin consumo de leads",
      "Se reactiva con recarga automática",
      "Activa visibilidad con un plan de pago"
    ],
    visibility: 0,
    color: "bg-gray-100 border-gray-200",
    iconColor: "text-gray-400",
    barColor: "bg-gray-300",
    isPremium: false,
  },
  {
    id: "simple",
    name: "Anuncio Simple",
    icon: Eye,
    description: "Visible, consume leads",
    features: ["Aparece en búsquedas", "Leads verificados"],
    visibility: 25,
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-500",
    barColor: "bg-emerald-500",
    isPremium: false,
  },
  {
    id: "featured",
    name: "Destacado",
    icon: Star,
    description: "Segunda posición + distintivo",
    features: [
      "Posición privilegiada",
      "Badge destacado",
      "Leads NO restan de tu bolsa gratuita",
      "Leads ilimitados"
    ],
    visibility: 85,
    color: "bg-amber-50 border-amber-300",
    iconColor: "text-amber-600",
    barColor: "bg-gradient-to-r from-amber-400 to-orange-500",
    isPremium: true,
  },
  {
    id: "prime",
    name: "Prime",
    icon: Crown,
    description: "Máxima exposición",
    features: [
      "Primera posición",
      "Máxima visibilidad",
      "Leads NO restan de tu bolsa gratuita",
      "Leads ilimitados"
    ],
    visibility: 100,
    color: "bg-blue-50 border-blue-300",
    iconColor: "text-blue-600",
    barColor: "bg-gradient-to-r from-blue-400 to-blue-600",
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
    <section ref={sectionRef} className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Niveles de <span className="text-emerald-600">visibilidad</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Elige el nivel de exposición que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`relative rounded-xl border-2 p-5 transition-all duration-300 hover:shadow-lg ${level.color} ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Premium badge */}
              {level.isPremium && (
                <Badge 
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-white text-xs ${
                    level.id === 'featured' 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}
                >
                  PREMIUM
                </Badge>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${level.isPremium ? 'bg-white' : 'bg-white/80'} flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                <level.icon className={`w-6 h-6 ${level.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 text-center mb-1">{level.name}</h3>
              <p className="text-gray-600 text-center text-xs mb-3">{level.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-4">
                {level.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                      level.id === 'featured' ? 'bg-amber-500' :
                      level.id === 'prime' ? 'bg-blue-500' :
                      level.isPremium ? 'bg-emerald-500' : 'bg-gray-400'
                    }`} />
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
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${level.barColor}`}
                    style={{ 
                      width: isVisible ? `${level.visibility}%` : '0%',
                      transitionDelay: `${index * 100 + 300}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          ⭐ Los niveles Destacado y Prime están disponibles en los planes de pago
        </p>
      </div>
    </section>
  );
};

export default VisibilityLevels;
