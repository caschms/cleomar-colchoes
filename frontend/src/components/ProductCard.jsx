import React from "react";
import { MessageCircle, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const ProductCard = ({ product, onContact }) => (
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
    <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center relative">
      <div className="text-6xl text-blue-200 group-hover:text-blue-300 transition-colors">💤</div>
      {product.popular && (
        <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white">Popular</Badge>
      )}
    </div>

    <div className="p-6 space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {product.category}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900 text-sm">Características:</h4>
        <ul className="space-y-1">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        onClick={() => onContact(product.name)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors group"
      >
        <MessageCircle className="w-5 h-5" />
        Fale com nossos vendedores!
      </Button>
    </div>
  </Card>
);

export { ProductCard };
