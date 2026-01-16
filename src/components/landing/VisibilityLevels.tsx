import { Pause, Eye, Star, TrendingUp, Info, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const levels = [
  {
    id: "paused",
    name: "Pausado",
    icon: Pause,
    tagline: "Sin visibilidad",
    color: "bg-gray-200",
    gradientColor: "from-gray-300 to-gray-400",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-500",
    height: "h-20 md:h-28",
  },
  {
    id: "simple",
    name: "Anuncio Simple",
    icon: Eye,
    tagline: "Visible en búsquedas",
    color: "bg-emerald-400",
    gradientColor: "from-emerald-400 to-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    height: "h-32 md:h-44",
  },
  {
    id: "destacado",
    name: "Destacado",
    icon: Star,
    tagline: "Mayor alcance",
    color: "bg-gradient-to-b from-amber-400 to-orange-500",
    gradientColor: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    height: "h-44 md:h-60",
    isPremium: true,
  },
  {
    id: "prime",
    name: "Prime",
    icon: Sparkles,
    tagline: "Máxima exposición",
    subtitle: "Destacado mejorado",
    color: "bg-gradient-to-b from-violet-500 to-purple-600",
    gradientColor: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    height: "h-56 md:h-80",
    isPremium: true,
    isTopTier: true,
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
      { threshold: 0.1 }
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
            Cada plan desbloquea más niveles de exposición para tu anuncio
          </p>
        </div>

        {/* Main Illustration */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Exposure indicator */}
          <div 
            className={`flex justify-end mb-4 pr-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-primary text-primary-foreground text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>Más exposición</span>
            </div>
          </div>

          {/* Columns Container */}
          <div className="relative flex items-end justify-center gap-4 sm:gap-6 md:gap-10 pb-4">
            {levels.map((level, index) => (
              <div
                key={level.id}
                className={`flex flex-col items-center transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Column */}
                <div 
                  className={`relative w-14 sm:w-18 md:w-24 lg:w-28 ${level.height} rounded-2xl bg-gradient-to-b ${level.gradientColor} shadow-xl transition-all duration-500 flex flex-col items-center justify-start pt-3 md:pt-5 group hover:scale-105 hover:-translate-y-1`}
                >
                  {/* Glow for premium */}
                  {level.isPremium && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${level.gradientColor} blur-2xl opacity-40 -z-10 scale-110`} />
                  )}
                  
                  {/* Icon container */}
                  <div 
                    className={`w-8 h-8 md:w-12 md:h-12 rounded-xl ${level.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <level.icon className={`w-4 h-4 md:w-6 md:h-6 ${level.iconColor}`} />
                  </div>

                  {/* Shine effect for Prime */}
                  {level.isTopTier && isVisible && (
                    <>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-3 bg-gradient-to-t from-violet-400 to-transparent rounded-full animate-pulse" />
                      <div className="absolute -top-3 left-1/3 w-0.5 h-2 bg-gradient-to-t from-violet-300 to-transparent rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                      <div className="absolute -top-3 right-1/3 w-0.5 h-2 bg-gradient-to-t from-violet-300 to-transparent rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                    </>
                  )}
                </div>

                {/* Label */}
                <div className="mt-2 md:mt-3 text-center max-w-[70px] md:max-w-[100px]">
                  <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-foreground leading-tight">
                    {level.name}
                  </h3>
                  <p className="text-[8px] sm:text-[9px] md:text-[11px] text-muted-foreground mt-0.5 leading-tight">
                    {level.tagline}
                  </p>
                  
                  {/* Subtitle for Prime */}
                  {level.isTopTier && (
                    <p className="text-[7px] sm:text-[8px] md:text-[9px] text-violet-500 mt-0.5 italic">
                      Destacado mejorado
                    </p>
                  )}
                  
                  {/* Additional info for Pausado */}
                  {level.id === 'paused' && (
                    <div className="mt-1 text-[7px] sm:text-[8px] text-muted-foreground/70 hidden sm:block">
                      <p>No visible · Editable</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Plan Coverage Brackets */}
          <div 
            className={`relative mt-8 md:mt-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Grid container for brackets */}
            <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-[280px] sm:max-w-[360px] md:max-w-[480px] lg:max-w-[560px] mx-auto">
              
              {/* Plan Gratis - Pausado + Anuncio Simple (columns 1-2) */}
              <div className="col-span-2 relative">
                <div className="h-1 bg-emerald-400 rounded-full" />
                <div className="absolute left-0 top-0 w-1 h-3 bg-emerald-400 rounded-b-full" />
                <div className="absolute right-0 top-0 w-1 h-3 bg-emerald-400 rounded-b-full" />
                <div className="text-center mt-4">
                  <span className="inline-block bg-emerald-500 text-white text-[9px] sm:text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                    Plan Gratis
                  </span>
                </div>
              </div>
              
              {/* Spacer for alignment */}
              <div className="col-span-2" />
            </div>

            {/* Plan Pro - Solo Anuncio Simple (column 2 only) */}
            <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-[280px] sm:max-w-[360px] md:max-w-[480px] lg:max-w-[560px] mx-auto mt-4">
              {/* Spacer for Pausado */}
              <div className="col-span-1" />
              
              <div className="col-span-1 relative">
                <div className="h-1 bg-blue-500 rounded-full" />
                <div className="absolute left-0 top-0 w-1 h-3 bg-blue-500 rounded-b-full" />
                <div className="absolute right-0 top-0 w-1 h-3 bg-blue-500 rounded-b-full" />
                <div className="text-center mt-4">
                  <span className="inline-block bg-blue-500 text-white text-[9px] sm:text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                    Plan Pro
                  </span>
                </div>
              </div>
              
              {/* Spacer */}
              <div className="col-span-2" />
            </div>

            {/* Plan Pro + Destacados - Anuncio Simple + Destacado (columns 2-3) */}
            <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-[280px] sm:max-w-[360px] md:max-w-[480px] lg:max-w-[560px] mx-auto mt-4">
              {/* Spacer for Pausado */}
              <div className="col-span-1" />
              
              <div className="col-span-2 relative">
                <div className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                <div className="absolute left-0 top-0 w-1 h-3 bg-amber-500 rounded-b-full" />
                <div className="absolute right-0 top-0 w-1 h-3 bg-orange-500 rounded-b-full" />
                <div className="text-center mt-4">
                  <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] sm:text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                    Plan Pro + Destacados
                  </span>
                </div>
              </div>
              
              {/* Spacer */}
              <div className="col-span-1" />
            </div>

            {/* Prime - Compra adicional (column 4 only) */}
            <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-[280px] sm:max-w-[360px] md:max-w-[480px] lg:max-w-[560px] mx-auto mt-4">
              {/* Spacers */}
              <div className="col-span-3" />
              
              <div className="col-span-1 relative">
                <div className="h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
                <div className="absolute left-0 top-0 w-1 h-3 bg-violet-500 rounded-b-full" />
                <div className="absolute right-0 top-0 w-1 h-3 bg-purple-600 rounded-b-full" />
                <div className="text-center mt-4">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-[9px] sm:text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                    <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    Compra adicional
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div 
            className={`flex flex-wrap justify-center gap-6 md:gap-10 mt-10 md:mt-14 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-emerald-500" />
              <span className="text-xs md:text-sm text-muted-foreground">Niveles básicos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-violet-600" />
              <span className="text-xs md:text-sm text-muted-foreground">Niveles premium</span>
            </div>
          </div>

          {/* Pausado Note */}
          <div 
            className={`mt-10 md:mt-14 max-w-lg mx-auto transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4 md:p-5 border border-border/50">
              <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Pause className="w-4 h-4 text-gray-500" />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-1">Sobre el estado Pausado</p>
                <p className="leading-relaxed">
                  Este estado puede ser temporal (hasta 30 días) o activado manualmente por el usuario. 
                  Al finalizar el periodo, el anuncio se reactiva automáticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilityLevels;
