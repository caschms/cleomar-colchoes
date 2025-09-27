// Mock data for Cleomar Colchões website
// This file contains all mock data that will be replaced with real data later

export const mockData = {
  // Company Information
  company: {
    name: 'Cleomar Colchões',
    slogan: 'Levando qualidade para um sono perfeito!',
    foundedYear: 1982,
    description: 'Há mais de 40 anos oferecendo o melhor em colchões, camas box e móveis para o seu descanso.',
    mission: 'Proporcionar o sono perfeito que cada família merece.'
  },

  // Contact Information (to be filled later)
  contact: {
    whatsapp: null, // Will be configured later
    phone: null, // Will be configured later  
    email: null, // Will be configured later
    address: {
      street: 'Endereço será adicionado',
      city: 'Cidade',
      state: 'Estado',
      zipCode: null
    },
    socialMedia: {
      instagram: null, // Will be configured later
      facebook: null // Will be configured later
    }
  },

  // Store Hours (to be configured later)
  hours: {
    weekdays: 'Segunda à Sexta: A definir',
    saturday: 'Sábados: A definir', 
    sunday: 'Domingos: A definir'
  },

  // Company History Timeline
  history: [
    {
      year: '1982',
      title: 'O Início',
      description: 'Tudo começou na Avenida Carlos Lindemberg com uma loja de móveis e a visão de um homem em liderar seu próprio negócio.'
    },
    {
      year: '1990s',
      title: 'Expansão',
      description: 'Expandimos para Itapuã, sempre com o foco em melhor atender nossos clientes.'
    },
    {
      year: '2000s', 
      title: 'Crescimento',
      description: 'Tivemos lojas na Glória, Centro de Vila Velha e Vitória, crescendo graças aos nossos clientes.'
    },
    {
      year: 'Hoje',
      title: 'Tradição',
      description: 'Continuamos crescendo e evoluindo, sempre mantendo nosso compromisso com a qualidade e atendimento.'
    }
  ],

  // Products Catalog
  products: [
    {
      id: 1,
      name: 'Colchões Premium',
      description: 'Colchões de alta qualidade com tecnologia avançada para o máximo conforto e suporte.',
      features: ['Molas ensacadas', 'Espuma viscoelástica', 'Tecido antialérgico', 'Garantia estendida'],
      category: 'Colchões',
      popular: true,
      image: null // Placeholder for product images
    },
    {
      id: 2,
      name: 'Camas Box Completas',
      description: 'Conjuntos completos com base, colchão e cabeceira para seu quarto dos sonhos.',
      features: ['Base reforçada', 'Colchão incluso', 'Cabeceira estofada', 'Montagem gratuita'],
      category: 'Camas Box',
      popular: false,
      image: null
    },
    {
      id: 3,
      name: 'Poltronas de Descanso',
      description: 'Poltronas confortáveis e elegantes para momentos de relaxamento e descanso.',
      features: ['Estofado premium', 'Sistema reclinável', 'Design ergonômico', 'Várias cores'],
      category: 'Poltronas',
      popular: false,
      image: null
    },
    {
      id: 4,
      name: 'Travesseiros Especiais',
      description: 'Travesseiros desenvolvidos para diferentes perfis de sono e necessidades.',
      features: ['Altura regulável', 'Material hipoalergênico', 'Fácil manutenção', 'Diversos modelos'],
      category: 'Travesseiros',
      popular: false,
      image: null
    },
    {
      id: 5,
      name: 'Colchões Ortopédicos',
      description: 'Especialmente desenvolvidos para cuidar da sua coluna e proporcionar alívio.',
      features: ['Suporte ortopédico', 'Zonas diferenciadas', 'Tecido respirável', 'Recomendação médica'],
      category: 'Colchões',
      popular: true,
      image: null
    },
    {
      id: 6,
      name: 'Sofás-Cama',
      description: 'Praticidade e conforto em um só móvel. Perfeito para receber visitas.',
      features: ['Dupla funcionalidade', 'Mecanismo fácil', 'Tecidos resistentes', 'Vários tamanhos'],
      category: 'Estofados',
      popular: false,
      image: null
    }
  ],

  // Product Categories
  categories: ['Todos', 'Colchões', 'Camas Box', 'Poltronas', 'Travesseiros', 'Estofados'],

  // Company Values
  values: [
    {
      title: 'Atendimento Personalizado',
      description: 'Nosso foco sempre foi e sempre será em melhor atendê-los. Cada cliente é único e merece atenção especial.',
      icon: 'Users'
    },
    {
      title: 'Qualidade Comprovada',
      description: 'Mais de 40 anos no mercado nos deram a experiência necessária para oferecer apenas produtos de alta qualidade.',
      icon: 'Trophy'
    },
    {
      title: 'Tradição Local',
      description: 'Somos uma empresa local, que conhece as necessidades da nossa região e trabalha para atender cada família com carinho.',
      icon: 'MapPin'
    }
  ],

  // Trust Indicators
  stats: {
    yearsOfExperience: '40+',
    customersServed: '1000+',
    satisfactionRate: '100%'
  },

  // Testimonials (structure ready, but no examples as requested)
  testimonials: {
    enabled: true,
    submissions: [], // Empty array - testimonials will be added later
    submissionForm: {
      enabled: true,
      fields: ['name', 'rating', 'comment', 'product']
    }
  },

  // Website Configuration
  config: {
    showPopularBadge: true,
    enableCategoryFilter: true,
    enableTestimonialSubmission: true,
    primaryColor: '#2563eb', // Blue-600
    secondaryColor: '#fcd34d', // Yellow-400
    accentColor: '#10b981' // Green-500 for WhatsApp
  }
};

// Helper functions for mock data
export const getMockProducts = (category = 'Todos') => {
  if (category === 'Todos') {
    return mockData.products;
  }
  return mockData.products.filter(product => product.category === category);
};

export const getMockProductById = (id) => {
  return mockData.products.find(product => product.id === parseInt(id));
};

export const getMockCategories = () => {
  return mockData.categories;
};

export const getMockCompanyInfo = () => {
  return mockData.company;
};

export const getMockContactInfo = () => {
  return mockData.contact;
};

export const getMockHistory = () => {
  return mockData.history;
};

export const getMockValues = () => {
  return mockData.values;
};

export const getMockStats = () => {
  return mockData.stats;
};

// WhatsApp message generators (will use real WhatsApp number when available)
export const generateWhatsAppLink = (message = '', productName = '') => {
  const baseMessage = message || 'Olá! Gostaria de saber mais sobre os produtos da Cleomar Colchões.';
  const fullMessage = productName ? `${baseMessage} Tenho interesse em: ${productName}` : baseMessage;
  
  // This will be updated when WhatsApp number is provided
  const whatsappNumber = mockData.contact.whatsapp || 'WHATSAPP_TO_BE_CONFIGURED';
  
  if (whatsappNumber === 'WHATSAPP_TO_BE_CONFIGURED') {
    return null; // Will show alert instead
  }
  
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
};

export default mockData;