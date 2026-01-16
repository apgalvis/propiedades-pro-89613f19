import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Crown, Shield, MessageCircle } from "lucide-react";

interface PremiumPlansSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const PremiumPlansSection = ({ cartUrl, whatsappUrl }: PremiumPlansSectionProps) => {
  const [period, setPeriod] = useState<"3" | "6">("6");

  const plans = {
    "3": {
      pro: { total: 3600, monthly: 1200, original: null },
      proPlus: { total: 4080, monthly: 1360, original: 4800, savings: "15%" },
    },
    "6": {
      pro: { total: 6000, monthly: 1000, original: null },
      proPlus: { total: 6800, monthly: 1133, original: 8000, savings: "15%" },
    },
  };

  const currentPlan = plans[period];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <p className="text-gray-600 text-center md:text-left text-sm md:text-base">
            Elige un periodo y un plan para impulsar<br className="hidden md:block" /> tus anuncios y obtener la mayor visibilidad
          </p>
          
          {/* Period Toggle */}
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setPeriod("3")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                period === "3"
                  ? "bg-emerald-700 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              3 meses
            </button>
            <button
              onClick={() => setPeriod("6")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                period === "6"
                  ? "bg-emerald-700 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              6 meses
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {/* Plan Pro */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Plan Pro</h3>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">
                  ${currentPlan.pro.total.toLocaleString()}
                </span>
                <span className="text-gray-500 text-sm">MXN</span>
              </div>
              <p className="text-gray-500 text-sm">
                ${currentPlan.pro.monthly.toLocaleString()} MXN por mes
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full mb-5 border-gray-300 hover:bg-gray-50"
            >
              <a href={cartUrl} target="_blank" rel="noopener noreferrer">
                Activar este plan
              </a>
            </Button>

            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                Anuncios simples ilimitados
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                Anuncios siempre visibles en el portal
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                Leads por correo y WhatsApp ilimitados
              </li>
            </ul>
          </div>

          {/* Plan Pro + Destacados */}
          <div className="bg-emerald-800 border border-emerald-700 rounded-2xl p-6 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-700/50 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Plan Pro + Destacados</h3>
              </div>
              <span className="bg-emerald-400/20 text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-400/30">
                Ahorras {currentPlan.proPlus.savings}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  ${currentPlan.proPlus.total.toLocaleString()}
                </span>
                <span className="text-emerald-200 text-sm">MXN</span>
                {currentPlan.proPlus.original && (
                  <span className="text-emerald-400/60 text-sm line-through ml-2">
                    ${currentPlan.proPlus.original.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-emerald-200 text-sm">
                ${currentPlan.proPlus.monthly.toLocaleString()} MXN por mes
              </p>
            </div>

            <Button
              asChild
              className="w-full mb-5 bg-white text-emerald-800 hover:bg-gray-100"
            >
              <a href={cartUrl} target="_blank" rel="noopener noreferrer">
                Activar este plan
              </a>
            </Button>

            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-emerald-100">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                TODOS LOS BENEFICIOS DEL PLAN PRO
              </li>
              <li className="flex items-start gap-2 text-sm text-emerald-100">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                10 Destacados: sube tus anuncios de posición
              </li>
              <li className="flex items-start gap-2 text-sm text-emerald-100">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                Mayor visibilidad frente a anuncios simples
              </li>
            </ul>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 text-xs mb-6">
          * Precio base, calculado a partir del volumen promedio de contactos al mes
        </p>

        {/* CTA Bar */}
        <div className="bg-emerald-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <p className="text-emerald-100 font-medium text-center sm:text-left">
            Contáctanos para un plan personalizado
          </p>
          <Button
            asChild
            className="bg-emerald-500 hover:bg-emerald-400 text-white whitespace-nowrap"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp
              <MessageCircle className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlansSection;
