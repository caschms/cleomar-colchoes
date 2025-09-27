import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link will be added later when contact info is provided
    alert('WhatsApp será configurado em breve!');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 text-yellow-400 px-4 py-2 rounded-lg font-bold text-xl md:text-2xl">
              C CLEOMAR
              <div className="text-sm md:text-base font-semibold border-t border-yellow-400 pt-1">
                COLCHÕES
              </div>
            </div>
          </div>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#produtos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Produtos
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* WhatsApp Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Fale Conosco</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export const Header;