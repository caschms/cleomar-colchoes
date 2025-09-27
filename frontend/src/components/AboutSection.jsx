import React from "react";
import { MapPin, Users, Trophy } from "lucide-react";
import { Card } from "./ui/card";

const historyMilestones = [
  {
    year: "1982",
    title: "O Início",
    description:
      "Tudo começou na Avenida Carlos Lindemberg com uma loja de móveis e a visão de um homem em liderar seu próprio negócio."
  },
  {
    year: "1990s",
    title: "Expansão",
    description: "Expandimos para Itapuã, sempre com o foco em melhor atender nossos clientes."
  },
  {
    year: "2000s",
    title: "Crescimento",
    description: "Tivemos lojas na Glória, Centro de Vila Velha e Vitória, crescendo graças aos nossos clientes."
  },
  {
    year: "Hoje",
    title: "Tradição",
    description:
      "Continuamos crescendo e evoluindo, sempre mantendo nosso compromisso com a qualidade e atendimento."
  }
];

const companyValues = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Nosso foco sempre foi e sempre será em melhor atendê-los. Cada cliente é único e merece atenção especial."
  },
  {
    icon: Trophy,
    title: "Qualidade Comprovada",
    description:
      "Mais de 40 anos no mercado nos deram a experiência necessária para oferecer apenas produtos de alta qualidade."
  },
  {
    icon: MapPin,
    title: "Tradição Local",
    description:
      "Somos uma empresa local, que conhece as necessidades da nossa região e trabalha para atender cada família com carinho."
  }
];

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nossa <span className="text-blue-600">História</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Era uma vez... uma visão! Conheça a trajetória da Cleomar Colchões, uma empresa que cresceu junto com seus clientes ao longo de mais de 40 anos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {historyMilestones.map((milestone, index) => (
          <Card key={milestone.title} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-yellow-400 rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-1">{milestone.year}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {companyValues.map((value) => (
          <Card key={value.title} className="p-8 bg-white shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <value.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Card className="p-8 bg-blue-600 text-white shadow-xl">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
            "E justamente por vocês e também devido a todos vocês, seguimos crescendo. Nossa missão é proporcionar o"
            <span className="text-yellow-400 font-bold"> sono perfeito </span>
            "que cada família merece."
          </blockquote>
          <cite className="block mt-4 text-yellow-400 font-semibold">- Cleomar Colchões</cite>
        </Card>
      </div>
    </div>
  </section>
);

export { AboutSection };
