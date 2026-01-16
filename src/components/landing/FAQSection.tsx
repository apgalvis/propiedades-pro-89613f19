import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Package, CreditCard, Zap } from "lucide-react";

const faqCategories = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    faqs: [
      {
        question: "¿Cómo funciona la publicación gratuita?",
        answer: "Puedes publicar inmuebles sin costo. Cada propiedad activa consume leads de tu bolsa gratuita cuando recibes contactos. Tus anuncios permanecen publicados y editables incluso cuando están pausados.",
      },
      {
        question: "¿Qué es un lead único?",
        answer: "Un lead único es un contacto verificado que cuenta una sola vez, sin importar cuántos canales use para contactarte (correo, WhatsApp, teléfono). Esto te protege de consumir múltiples leads por el mismo interesado.",
      },
      {
        question: "¿Puedo seguir publicando y editando durante la pausa?",
        answer: "¡Sí! Durante la pausa puedes seguir publicando nuevas propiedades y editando las existentes. Simplemente no estarán visibles en búsquedas hasta que tu bolsa se recargue o actives un plan premium.",
      },
      {
        question: "¿Cuántas propiedades puedo publicar?",
        answer: "No hay límite en la cantidad de propiedades que puedes publicar. La limitación está en la visibilidad: la bolsa gratuita tiene leads limitados, mientras que los planes premium ofrecen visibilidad ilimitada.",
      },
    ],
  },
  {
    id: "bolsa",
    label: "Bolsa de leads",
    icon: Package,
    faqs: [
      {
        question: "¿Qué pasa si se agota mi bolsa de leads?",
        answer: "Cuando tu bolsa se agota, tus propiedades entran en pausa de 30 días. No aparecerán en búsquedas pero seguirán siendo editables. Después de 30 días, tu bolsa se recarga automáticamente.",
      },
      {
        question: "¿Los leads que no uso desaparecen?",
        answer: "No, los leads de tu bolsa no tienen fecha de expiración dentro del ciclo activo. Solo se consumen cuando recibes contactos reales. Al terminar el ciclo y entrar en pausa, el contador se reinicia.",
      },
      {
        question: "¿Cómo recupero visibilidad antes de la recarga?",
        answer: "Puedes activar un plan Premium en cualquier momento para recuperar visibilidad inmediata con leads ilimitados y sin pausas de 30 días.",
      },
      {
        question: "¿Cómo se consume mi bolsa de leads?",
        answer: "Cada vez que un usuario interesado te contacta a través de tus propiedades activas, se descuenta un lead de tu bolsa. Los contactos duplicados (mismo usuario, diferentes canales) cuentan como uno solo.",
      },
    ],
  },
  {
    id: "premium",
    label: "Planes Premium",
    icon: Zap,
    faqs: [
      {
        question: "¿Qué incluye el Plan Pro?",
        answer: "Plan Pro incluye: anuncios siempre visibles sin pausas, leads por correo y WhatsApp ilimitados, y visibilidad continua 24/7 en el portal.",
      },
      {
        question: "¿Qué son los Destacados?",
        answer: "Los Destacados son posiciones premium que colocan tus anuncios por encima de los simples en los resultados de búsqueda. Incluyen un badge distintivo que genera mayor confianza y más clics.",
      },
      {
        question: "¿Puedo cambiar de plan en cualquier momento?",
        answer: "Sí, puedes actualizar o cambiar tu plan cuando quieras. El cambio se aplica inmediatamente y se prorratea el costo según los días restantes de tu ciclo actual.",
      },
      {
        question: "¿Qué diferencia hay entre Destacado y Prime?",
        answer: "Destacado aparece en segunda posición con badge distintivo. Prime es la máxima visibilidad: primera posición, diseño más llamativo y prioridad absoluta en resultados.",
      },
    ],
  },
  {
    id: "pagos",
    label: "Pagos",
    icon: CreditCard,
    faqs: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos tarjeta de crédito, débito, transferencia bancaria y PayPal. También ofrecemos opciones de pago en mensualidades para planes de 3 y 6 meses.",
      },
      {
        question: "¿Puedo cancelar mi plan en cualquier momento?",
        answer: "Sí, puedes cancelar cuando quieras. Tu plan seguirá activo hasta el final del período pagado y no se realizarán cobros adicionales.",
      },
      {
        question: "¿Hay reembolsos?",
        answer: "Ofrecemos reembolso proporcional dentro de los primeros 7 días si no estás satisfecho con el servicio. Después de este período, puedes cancelar pero el plan seguirá activo hasta su vencimiento.",
      },
    ],
  },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Preguntas <span className="text-emerald-600">frecuentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Resolvemos tus dudas sobre el modelo de publicación y los planes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {currentCategory?.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl border border-gray-100 px-5 data-[state=open]:bg-emerald-50 data-[state=open]:border-emerald-200 transition-all duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 text-gray-900 font-medium text-sm hover:text-emerald-700 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Help CTA */}
        <p className="text-center text-gray-500 text-xs mt-8">
          ¿No encuentras tu respuesta?{" "}
          <a href="#" className="text-emerald-600 hover:underline font-medium">
            Contáctanos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
