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
    height: "h-24",
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
    height: "h-36",
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
    height: "h-52",
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
    height: "h-72",
  },
];

const plans = [
  {
    name: "Plan Gratis",
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    range: [0, 1], // Covers Pausado and Anuncio Simple
    arrowEnd: 1,
  },
  {
    name: "Plan Pro",
    color: "bg-orange-500",
    textColor: "text-orange-700",
    range: [0, 2], // Covers up to Destacado
    arrowEnd: 2,
  },
  {
    name: "Plan Premium",
    color: "bg-blue-600",
    textColor: "text-blue-700",
    range: [0, 3], // Covers all including Prime
    arrowEnd: 3,
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
            Cada plan desbloquea más niveles de exposición para tu anuncio
          </p>
        </div>

        {/* Main Illustration Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Columns and Arrows Layout */}
          <div className="flex flex-col">
            {/* Columns Row */}
            <div className="flex items-end justify-center gap-4 md:gap-8 pt-8 pb-6">
              {levels.map((level, index) => (
                <div
                  key={level.id}
                  className={`flex flex-col items-center transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Column pillar */}
                  <div 
                    className={`relative w-16 sm:w-20 md:w-28 ${level.height} rounded-t-2xl bg-gradient-to-t ${level.color} ${level.glowColor || ''} shadow-xl transition-all duration-500 flex flex-col items-center justify-start pt-3 md:pt-4 group hover:scale-105 hover:-translate-y-2`}
                  >
                    {/* Glow effect for premium levels */}
                    {(level.id === 'featured' || level.id === 'prime') && (
                      <div className={`absolute inset-0 rounded-t-2xl bg-gradient-to-t ${level.color} blur-xl opacity-30 -z-10 scale-110`} />
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

                  {/* Label below column */}
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

            {/* Arrows Section */}
            <div 
              className={`relative mt-8 md:mt-12 space-y-3 md:space-y-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {plans.map((plan, planIndex) => {
                // Calculate arrow width based on levels covered
                const widthPercentages = ['32%', '58%', '100%'];
                const arrowWidth = widthPercentages[planIndex];
                
                return (
                  <div 
                    key={plan.name}
                    className="relative flex items-center"
                    style={{ 
                      transitionDelay: `${600 + planIndex * 150}ms`,
                    }}
                  >
                    {/* Arrow body */}
                    <div 
                      className={`relative h-8 md:h-10 ${plan.color} rounded-l-lg flex items-center transition-all duration-700`}
                      style={{ 
                        width: arrowWidth,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transitionDelay: `${600 + planIndex * 200}ms`,
                      }}
                    >
                      {/* Plan name inside arrow */}
                      <span className="text-white font-semibold text-xs md:text-sm pl-3 md:pl-4 whitespace-nowrap">
                        {plan.name}
                      </span>
                      
                      {/* Arrow head */}
                      <div 
                        className={`absolute right-0 translate-x-full w-0 h-0 
                          border-t-[16px] md:border-t-[20px] border-t-transparent 
                          border-b-[16px] md:border-b-[20px] border-b-transparent 
                          border-l-[12px] md:border-l-[16px] ${
                            plan.name === 'Plan Gratis' ? 'border-l-emerald-500' :
                            plan.name === 'Plan Pro' ? 'border-l-orange-500' : 'border-l-blue-600'
                          }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Group Labels */}
            <div 
              className={`flex justify-center gap-4 md:gap-8 mt-10 md:mt-14 transition-all duration-700 delay-1000 ${
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

          {/* Exposure indicator */}
          <div 
            className={`absolute top-8 right-0 md:right-4 transition-all duration-1000 delay-700 ${
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
      </div>
    </section>
  );
};

export default VisibilityLevels;
