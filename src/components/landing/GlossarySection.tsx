const glossaryTerms = [
  {
    term: "Bolsa de leads",
    definition: "Cantidad de contactos gratuitos por ciclo. Se recarga tras 30 días de pausa.",
  },
  {
    term: "Lead único",
    definition: "Contacto verificado que cuenta una sola vez, sin importar cuántos canales use para contactarte.",
  },
  {
    term: "Anuncio pausado",
    definition: "Tu propiedad no aparece en búsquedas pero sigue siendo editable.",
  },
  {
    term: "Anuncio simple",
    definition: "Visibilidad básica que consume leads de tu bolsa gratuita.",
  },
  {
    term: "Destacado",
    definition: "Segunda posición con badge distintivo y leads que no restan de tu bolsa.",
  },
  {
    term: "Prime",
    definition: "Máxima visibilidad en primera posición con leads ilimitados.",
  },
];

const GlossarySection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            <span className="text-emerald-600">Glosario</span> de términos
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {glossaryTerms.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 cursor-help hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  {item.term}
                </span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-center z-10 shadow-lg">
                  {item.definition}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossarySection;
