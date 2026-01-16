import { Eye, TrendingUp, Zap } from "lucide-react";

const VisibilityCallout = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full opacity-60" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-50 to-transparent rounded-tr-full opacity-60" />
            
            <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              {/* Illustration */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  {/* Animated pulse rings */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 animate-ping opacity-20" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Si te ven más, <span className="text-emerald-600">te contactan más</span>
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  La visibilidad gratuita es temporal.
                </p>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Mantén tu anuncio activo y visible con el nivel adecuado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilityCallout;
