import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <Building2 className="w-6 h-6 text-emerald-400" />
            <span className="font-bold text-lg">propiedades.com</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors relative group">
              Términos y Condiciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Política de Privacidad
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} propiedades.com. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
