import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Separator } from './ui/separator';

const Footer = () => {
  const handleWhatsAppClick = () => {
    alert('WhatsApp será configurado em breve!');
  };

  const handleContactClick = (type) => {
    alert(`${type} será configurado em breve!`);
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-600 text-yellow-400 px-4 py-2 rounded-lg font-bold text-xl">
                C CLEOMAR
                <div className="text-sm font-semibold border-t border-yellow-400 pt-1">
                  COLCHÕES
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Há mais de 40 anos oferecendo qualidade e conforto para o seu sono. 
              Tradição e inovação em cada produto.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 w-fit transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Endereço será adicionado</p>
                  <p className="text-gray-400 text-sm">Cidade, Estado</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <button 
                  onClick={() => handleContactClick('Telefone')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Telefone será adicionado
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp será adicionado
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <button 
                  onClick={() => handleContactClick('Email')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Email será adicionado
                </button>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Horário de Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Segunda à Sexta</p>
                  <p className="text-gray-400 text-sm">A definir</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sábados</p>
                  <p className="text-gray-400 text-sm">A definir</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Domingos</p>
                  <p className="text-gray-400 text-sm">A definir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-gray-300 hover:text-white transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-gray-300 hover:text-white transition-colors">
                Sobre Nós
              </a>
              <a href="#produtos" className="block text-gray-300 hover:text-white transition-colors">
                Produtos
              </a>
              <a href="#depoimentos" className="block text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="block text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
            </nav>
            
            {/* Social Media Placeholders */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Redes Sociais</h4>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleContactClick('Instagram')}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  📱
                </button>
                <button 
                  onClick={() => handleContactClick('Facebook')}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  📘
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />
      
      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Cleomar Colchões. Todos os direitos reservados. 
            Desde 1982 levando qualidade para um sono perfeito.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Desenvolvido com ❤️ para melhor atender você
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };