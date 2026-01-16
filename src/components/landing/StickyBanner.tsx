import { ShoppingCart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyBannerProps {
  cartUrl: string;
}

const StickyBanner = ({ cartUrl }: StickyBannerProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-900/90 backdrop-blur-md border-b border-emerald-700/50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-emerald-300 animate-bounce" />
          <span className="text-white text-sm font-medium hidden sm:inline">
            Haz crecer tu cartera de clientes hoy mismo
          </span>
          <span className="text-white text-sm font-medium sm:hidden">
            Crece tu cartera hoy
          </span>
        </div>
        <Button
          asChild
          size="sm"
          className="bg-emerald-500 hover:bg-emerald-400 text-white animate-pulse hover:animate-none"
        >
          <a href={cartUrl} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Ir al carrito
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyBanner;
