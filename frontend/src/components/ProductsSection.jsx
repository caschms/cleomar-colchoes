import React, { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ProductCard } from "./ProductCard";

const productCatalog = [
  {
    id: 1,
    name: "Colchões Premium",
    description:
      "Colchões de alta qualidade com tecnologia avançada para o máximo conforto e suporte.",
    features: ["Molas ensacadas", "Espuma viscoelástica", "Tecido antialérgico", "Garantia estendida"],
    category: "Colchões",
    popular: true
  },
  {
    id: 2,
    name: "Camas Box Completas",
    description: "Conjuntos completos com base, colchão e cabeceira para seu quarto dos sonhos.",
    features: ["Base reforçada", "Colchão incluso", "Cabeceira estofada", "Montagem gratuita"],
    category: "Camas Box",
    popular: false
  },
  {
    id: 3,
    name: "Poltronas de Descanso",
    description: "Poltronas confortáveis e elegantes para momentos de relaxamento e descanso.",
    features: ["Estofado premium", "Sistema reclinável", "Design ergonômico", "Várias cores"],
    category: "Poltronas",
    popular: false
  },
  {
    id: 4,
    name: "Travesseiros Especiais",
    description: "Travesseiros desenvolvidos para diferentes perfis de sono e necessidades.",
    features: ["Altura regulável", "Material hipoalergênico", "Fácil manutenção", "Diversos modelos"],
    category: "Travesseiros",
    popular: false
  },
  {
    id: 5,
    name: "Colchões Ortopédicos",
    description: "Especialmente desenvolvidos para cuidar da sua coluna e proporcionar alívio.",
    features: ["Suporte ortopédico", "Zonas diferenciadas", "Tecido respirável", "Recomendação médica"],
    category: "Colchões",
    popular: true
  },
  {
    id: 6,
    name: "Sofás-Cama",
    description: "Praticidade e conforto em um só móvel. Perfeito para receber visitas.",
    features: ["Dupla funcionalidade", "Mecanismo fácil", "Tecidos resistentes", "Vários tamanhos"],
    category: "Estofados",
    popular: false
  }
];

const productCategories = ["Todos", "Colchões", "Camas Box", "Poltronas", "Travesseiros", "Estofados"];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") {
      return productCatalog;
    }
    return productCatalog.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleWhatsAppClick = (productName) => {
    alert(`Interesse em: ${productName}. WhatsApp será configurado em breve!`);
  };

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de produtos para o seu conforto e bem-estar. Qualidade garantida em cada item.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onContact={handleWhatsAppClick} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-yellow-50 border-none shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Não encontrou o que procura?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Temos uma variedade muito maior de produtos em nossa loja física. Entre em contato conosco e descubra todas as opções disponíveis!
            </p>
            <Button
              onClick={() => handleWhatsAppClick("Consulta Geral")}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 mx-auto font-semibold transition-colors"
            >
              Fale com nossos vendedores!
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { ProductsSection };
