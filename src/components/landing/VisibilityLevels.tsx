import { Pause, Eye, Star, Crown, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const levels = [
  {
    id: "paused",
    name: "Pausado",
    icon: Pause,
    tagline: "Sin visibilidad",
    color: "from-gray-200 to-gray-300",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-400",
    glowColor: "",
    height: "h-20",
    opacity: "opacity-50",
  },
  {
    id: "simple",
    name: "Anuncio Simple",
    icon: Eye,
    tagline: "Visible en búsquedas",
    color: "from-emerald-400 to-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    glowColor: "shadow-emerald-200/50",
    height: "h-32",
    opacity: "opacity-75",
  },
  {
    id: "featured",
    name: "Destacado",
    icon: Star,
    tagline: "Mayor alcance",
    color: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    glowColor: "shadow-amber-300/60",
    height: "h-48",
    opacity: "opacity-90",
    isPremium: true,
  },
  {
    id: "prime",
    name: "Prime",
    icon: Crown,
    tagline: "Máxima exposición",
    color: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    glowColor: "shadow-blue-400/60",
    height: "h-64",
    opacity: "opacity-100",
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Niveles de visibilidad
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Mientras más alto, <span className="text-primary">más te ven</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Cada nivel te acerca más a tus clientes potenciales
          </p>
        </div>

        {/* Staircase Illustration */}
        <div className="relative max-w-4xl mx-auto">
          {/* Base line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Visibility arrow on the side */}
          <div 
            className={`absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="w-0.5 h-32 md:h-48 bg-gradient-to-t from-gray-300 via-primary/50 to-primary rounded-full" />
            <span className="text-[10px] md:text-xs text-muted-foreground mt-2 writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
              + Visibilidad
            </span>
          </div>

          {/* Steps container */}
          <div className="flex items-end justify-center gap-3 md:gap-6 pt-8 pb-4 pl-8 md:pl-16">
            {levels.map((level, index) => (
              <div
                key={level.id}
                className={`flex flex-col items-center transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step pillar */}
                <div 
                  className={`relative w-16 sm:w-20 md:w-28 ${level.height} rounded-t-2xl bg-gradient-to-t ${level.color} ${level.glowColor} shadow-xl transition-all duration-500 flex flex-col items-center justify-start pt-3 md:pt-4 group hover:scale-105 hover:-translate-y-2`}
                >
                  {/* Premium glow effect */}
                  {level.isPremium && (
                    <div className={`absolute inset-0 rounded-t-2xl bg-gradient-to-t ${level.color} blur-xl opacity-40 -z-10 scale-110`} />
                  )}
                  
                  {/* Icon container */}
                  <div 
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-xl ${level.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <level.icon className={`w-5 h-5 md:w-7 md:h-7 ${level.iconColor}`} />
                  </div>

                  {/* Premium badge */}
                  {level.isPremium && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md text-foreground">
                      PREMIUM
                    </span>
                  )}

                  {/* Light rays for Prime */}
                  {level.id === 'prime' && isVisible && (
                    <>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-blue-400 to-transparent rounded-full animate-pulse" />
                      <div className="absolute -top-4 left-1/4 w-0.5 h-3 bg-gradient-to-t from-blue-300 to-transparent rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                      <div className="absolute -top-4 right-1/4 w-0.5 h-3 bg-gradient-to-t from-blue-300 to-transparent rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                    </>
                  )}
                </div>

                {/* Label below step */}
                <div className="mt-3 md:mt-4 text-center">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground whitespace-nowrap">
                    {level.name}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5 max-w-[80px] md:max-w-[100px]">
                    {level.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated indicator */}
          <div 
            className={`absolute bottom-20 md:bottom-28 right-4 md:right-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-primary text-primary-foreground text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Más exposición</span>
              <span className="sm:hidden">+</span>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <p 
          className={`text-center text-xs md:text-sm text-muted-foreground mt-10 md:mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          ⭐ Los niveles <span className="font-semibold text-amber-600">Destacado</span> y <span className="font-semibold text-blue-600">Prime</span> están disponibles en los planes de pago
        </p>
      </div>
    </section>
  );
};

export default VisibilityLevels;
