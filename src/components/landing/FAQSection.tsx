import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué pasa si se agota mi bolsa de leads?",
    answer: "Cuando tu bolsa de leads se agota, tus propiedades entran en una pausa de 30 días. Durante este período, no aparecerán en las búsquedas pero seguirán siendo editables. Después de 30 días, tu bolsa se recarga automáticamente y tus propiedades vuelven a estar visibles.",
  },
  {
    question: "¿Puedo seguir publicando y editando durante la pausa?",
    answer: "¡Sí! Durante la pausa puedes seguir publicando nuevas propiedades y editando las existentes. Simplemente no estarán visibles hasta que tu bolsa se recargue. Esto te permite tener todo listo para cuando vuelvas a estar activo.",
  },
  {
    question: "¿Cómo activo solo una propiedad sin pagar por todas?",
    answer: "En la versión gratuita, la visibilidad se activa por propiedad individual. Puedes elegir cuáles propiedades quieres tener activas y cuáles pausadas. Los leads consumidos se restan de tu bolsa compartida.",
  },
  {
    question: "¿Cómo recupero visibilidad antes de la recarga automática?",
    answer: "Si quieres recuperar la visibilidad antes de que pasen los 30 días, puedes activar un plan Premium. Con Premium tienes leads ilimitados y visibilidad continua sin pausas.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos pagos con tarjeta de crédito, débito, transferencia bancaria y PayPal. También ofrecemos opciones de pago en mensualidades dependiendo del plan que elijas.",
  },
  {
    question: "¿Los leads que no uso desaparecen?",
    answer: "No, los leads de tu bolsa no tienen fecha de expiración dentro del ciclo activo. Solo se consumen cuando recibes contactos reales. Al terminar el ciclo y entrar en pausa, el contador se reinicia para el próximo período.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-emerald-600">frecuentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre el modelo de publicación y los planes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl border border-gray-100 px-6 data-[state=open]:bg-emerald-50 data-[state=open]:border-emerald-200 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-gray-900 font-semibold hover:text-emerald-700 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
