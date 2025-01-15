import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">ContaFácil</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;