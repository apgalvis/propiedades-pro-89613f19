const glossaryTerms = [
  {
    term: "Bolsa de leads",
    definition: "Cantidad de contactos gratuitos que puedes recibir en un ciclo. Se consume conforme recibes leads y se recarga automáticamente tras 30 días de pausa.",
  },
  {
    term: "Lead",
    definition: "Contacto de un posible comprador o arrendatario interesado en tu propiedad. Cada lead incluye datos verificados de contacto.",
  },
  {
    term: "Anuncio pausado",
    definition: "Estado en el que tu propiedad no está visible en búsquedas, pero puedes seguir editándola. Se activa cuando tu bolsa se agota o manualmente.",
  },
  {
    term: "Anuncio simple",
    definition: "Nivel básico de visibilidad donde tu propiedad aparece en las búsquedas y consume leads de tu bolsa gratuita.",
  },
  {
    term: "Anuncio destacado",
    definition: "Nivel premium donde tu propiedad aparece en segunda posición con un badge distintivo. Los leads recibidos no restan de tu bolsa gratuita.",
  },
  {
    term: "Anuncio Prime",
    definition: "Máximo nivel de visibilidad. Tu propiedad aparece en primera posición con diseño llamativo y leads ilimitados.",
  },
  {
    term: "Ciclo de visibilidad",
    definition: "Período durante el cual tu bolsa de leads está activa. Cuando se agota, inicia una pausa de 30 días antes de la recarga.",
  },
  {
    term: "Recarga automática",
    definition: "Proceso por el cual tu bolsa de leads se restablece automáticamente después de completar el período de pausa de 30 días.",
  },
];

const GlossarySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            <span className="text-emerald-600">Glosario</span> de términos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Familiarízate con los conceptos clave de nuestra plataforma
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryTerms.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  {item.term}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossarySection;
