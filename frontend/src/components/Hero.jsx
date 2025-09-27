import React from 'react';
import { MessageCircle, Star, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Hero = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link will be added later
    alert('WhatsApp será configurado em breve!');
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Levando qualidade</span>
                <br />
                para um <span className="text-yellow-500">sono perfeito!</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Há mais de 40 anos oferecendo o melhor em colchões, camas box e móveis para o seu descanso. 
                Qualidade e atendimento que fazem a diferença.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Fale com nossos vendedores!
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Desde 1982</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Garantia de Qualidade</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Atendimento Especializado</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-blue-50 rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-yellow-400 text-3xl font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cleomar Colchões</h3>
                    <p className="text-gray-600">Tradição em qualidade e conforto</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">40+</div>
                      <div className="text-sm text-gray-600">Anos de experiência</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-500">1000+</div>
                      <div className="text-sm text-gray-600">Clientes satisfeitos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero;