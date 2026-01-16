import { Upload, Eye, CheckCircle, PauseCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Upload,
    title: "Publica tu inmueble",
    description: "Sube tus propiedades sin límite. Siempre editables.",
    color: "bg-emerald-500",
  },
  {
    icon: Eye,
    title: "Activa la visibilidad",
    description: "Tu propiedad se muestra y consume leads de tu bolsa gratuita.",
    color: "bg-emerald-600",
  },
  {
    icon: CheckCircle,
    title: "Recibe contactos verificados",
    description: "Leads únicos y verificados llegan directo a ti.",
    color: "bg-emerald-700",
  },
  {
    icon: PauseCircle,
    title: "Pausa de 30 días",
    description: "Cuando se agota la bolsa, pausa temporal. Se recarga automáticamente.",
    color: "bg-gray-500",
  },
];

const HowItWorksSection = () => {
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
    <section ref={sectionRef} className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            ¿Cómo funciona la versión <span className="text-emerald-600">gratuita</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Un modelo transparente que te permite comenzar sin inversión inicial
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block">
            <div 
              className={`absolute top-0 left-0 w-full bg-emerald-500 transition-all duration-1000 ease-out ${
                isVisible ? 'h-full' : 'h-0'
              }`}
            />
          </div>

          {/* Steps */}
          <div className="space-y-6 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-md`}>
                  <step.icon className="w-6 h-6 text-white" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow">
                    {index + 1}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-500 mt-8 max-w-xl mx-auto">
          💡 Durante la pausa, tus propiedades siguen editables y listas para reactivarse cuando tu bolsa se recargue.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
