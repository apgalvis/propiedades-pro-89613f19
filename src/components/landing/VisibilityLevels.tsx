import { Pause, Eye, Star, Crown, TrendingUp, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const levels = [
  {
    id: "paused",
    name: "Pausado",
    icon: Pause,
    tagline: "Sin visibilidad",
    color: "bg-gray-200",
    gradientColor: "from-gray-200 to-gray-300",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-400",
    height: "h-28 md:h-36",
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
    height: "h-40 md:h-52",
  },
  {
    id: "featured",
    name: "Destacado",
    icon: Star,
    tagline: "Mayor alcance",
    color: "bg-gradient-to-b from-amber-400 to-orange-500",
    gradientColor: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    height: "h-56 md:h-72",
  },
  {
    id: "prime",
    name: "Prime",
    icon: Crown,
    tagline: "Máxima exposición",
    color: "bg-gradient-to-b from-blue-500 to-indigo-600",
    gradientColor: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    height: "h-72 md:h-96",
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
        <div className="relative max-w-5xl mx-auto">
          {/* Columns Container */}
          <div className="relative flex items-end justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pb-8">
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
                  className={`relative w-16 sm:w-20 md:w-28 lg:w-32 ${level.height} rounded-2xl bg-gradient-to-b ${level.gradientColor} shadow-xl transition-all duration-500 flex flex-col items-center justify-start pt-4 md:pt-6 group hover:scale-105 hover:-translate-y-2`}
                >
                  {/* Glow for premium */}
                  {(level.id === 'featured' || level.id === 'prime') && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${level.gradientColor} blur-2xl opacity-30 -z-10 scale-110`} />
                  )}
                  
                  {/* Icon container */}
                  <div 
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-xl ${level.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <level.icon className={`w-5 h-5 md:w-7 md:h-7 ${level.iconColor}`} />
                  </div>

                  {/* Light rays for Prime */}
                  {level.id === 'prime' && isVisible && (
                    <>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-blue-400 to-transparent rounded-full animate-pulse" />
                      <div className="absolute -top-4 left-1/4 w-0.5 h-3 bg-gradient-to-t from-blue-300 to-transparent rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                      <div className="absolute -top-4 right-1/4 w-0.5 h-3 bg-gradient-to-t from-blue-300 to-transparent rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                    </>
                  )}
                </div>

                {/* Label */}
                <div className="mt-3 md:mt-4 text-center">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground">
                    {level.name}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5">
                    {level.tagline}
                  </p>
                  
                  {/* Additional info for Pausado */}
                  {level.id === 'paused' && (
                    <div className="mt-2 text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground/80">
                      <p>No visible · Editable · Reactivación automática</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Exposure badge */}
            <div 
              className={`absolute top-0 right-0 md:right-4 lg:right-8 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-primary text-primary-foreground text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                <span>Más exposición</span>
              </div>
            </div>
          </div>

          {/* Plan Arrows Section */}
          <div 
            className={`relative mt-6 md:mt-10 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* SVG Arrows */}
            <svg 
              className="w-full h-32 md:h-40" 
              viewBox="0 0 400 100" 
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Plan Gratis Arrow - covers Pausado & Anuncio Simple */}
              <g className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                <path
                  d="M 30 25 Q 80 60 145 25"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  markerEnd="url(#arrowGreen)"
                />
                <text x="50" y="55" fill="#10b981" fontSize="10" fontWeight="600">Plan Gratis</text>
              </g>

              {/* Plan Pro Arrow - covers up to Destacado */}
              <g className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                <path
                  d="M 30 50 Q 140 90 245 25"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  markerEnd="url(#arrowOrange)"
                />
                <text x="100" y="82" fill="#f97316" fontSize="10" fontWeight="600">Plan Pro</text>
              </g>

              {/* Plan Premium Arrow - covers all including Prime */}
              <g className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                <path
                  d="M 30 75 Q 200 110 345 25"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  markerEnd="url(#arrowBlue)"
                />
                <text x="160" y="105" fill="#3b82f6" fontSize="10" fontWeight="600">Plan Premium</text>
              </g>

              {/* Arrow markers */}
              <defs>
                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                </marker>
                <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
                </marker>
                <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Pausado Note */}
          <div 
            className={`mt-6 md:mt-8 max-w-md mx-auto transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-2 bg-muted/50 rounded-lg p-3 md:p-4 border border-border/50">
              <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="text-[10px] sm:text-xs text-muted-foreground">
                <p className="font-medium text-foreground/80 mb-1">Sobre el estado Pausado:</p>
                <p>Este estado puede ser temporal (hasta 30 días) o activado manualmente por el usuario. Al finalizar el periodo, el anuncio se reactiva automáticamente.</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div 
            className={`flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-10 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs md:text-sm text-muted-foreground">Niveles básicos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-blue-600" />
              <span className="text-xs md:text-sm text-muted-foreground">Niveles premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilityLevels;
