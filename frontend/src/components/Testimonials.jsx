import React from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Testimonials = () => {
  const handleWhatsAppClick = () => {
    alert('WhatsApp será configurado em breve!');
  };

  const handleShareTestimonial = () => {
    alert('Funcionalidade de compartilhar depoimento será implementada!');
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-blue-600">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 40 anos conquistando a confiança de famílias inteiras. 
            Confira alguns depoimentos de quem já escolheu a Cleomar Colchões.
          </p>
        </div>

        {/* Testimonials Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder cards for future testimonials */}
          {[1, 2, 3].map((index) => (
            <Card key={index} className="p-6 bg-white shadow-lg border-2 border-dashed border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Depoimento {index}
              </h3>
              <p className="text-gray-500 text-sm">
                Espaço reservado para depoimentos de clientes satisfeitos.
              </p>
              <div className="flex justify-center mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-gray-300" />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Share Testimonial Section */}
        <div className="text-center">
          <Card className="p-8 bg-blue-600 text-white shadow-xl max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Você é nosso cliente?
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Compartilhe sua experiência conosco! Seu depoimento é muito importante 
                  e ajuda outras pessoas a conhecerem a qualidade dos nossos produtos e serviços.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleShareTestimonial}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Compartilhar Depoimento
                </Button>
                
                <span className="text-blue-200 hidden sm:block">ou</span>
                
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl flex items-center gap-3 font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale conosco pelo WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">40+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-yellow-500">1000+</div>
            <div className="text-gray-600">Clientes Atendidos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-gray-600">Satisfação Garantida</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };