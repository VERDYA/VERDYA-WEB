// Configurações de SEO para diferentes páginas
export const SEO_CONFIG = {
  // Página inicial
  home: {
    title: 'VERDYA - Especialistas em Transformação Digital',
    description: 'Transformação digital completa com especialistas em IA Generativa, Cloud Computing, Mobile Development e Automação. Consultoria estratégica para empresas que querem inovar.',
    keywords: [
      'transformação digital',
      'consultoria tecnológica',
      'IA generativa',
      'cloud computing',
      'desenvolvimento mobile',
      'automação empresarial',
      'consultoria estratégica',
      'inovação digital',
      'VERDYA'
    ],
    canonicalUrl: '/'
  },

  // Seção Sobre
  about: {
    title: 'Sobre a VERDYA - Nossa História e Metodologia',
    description: 'Conheça a VERDYA, empresa especializada em transformação digital com metodologia própria e foco em resultados mensuráveis para empresas brasileiras.',
    keywords: [
      'sobre verdya',
      'metodologia transformação digital',
      'empresa consultoria',
      'equipe especialistas',
      'história verdya'
    ],
    canonicalUrl: '/#about'
  },

  // Tecnologias - IA Generativa
  iaGenerativa: {
    title: 'IA Generativa - ChatGPT, Claude e Automação Inteligente',
    description: 'Soluções avançadas com IA Generativa: ChatGPT, Claude, LLMs para automação inteligente e transformação de processos empresariais.',
    keywords: [
      'IA generativa',
      'ChatGPT empresarial',
      'Claude AI',
      'GPT-4',
      'automação inteligente',
      'LLM',
      'inteligência artificial',
      'chatbot empresarial',
      'processamento linguagem natural'
    ],
    canonicalUrl: '/tecnologias/ia-generativa'
  },

  // Tecnologias - Cloud Computing
  cloud: {
    title: 'Cloud Computing - AWS, Azure, Google Cloud | Migração e Otimização',
    description: 'Especialistas em migração para nuvem, otimização AWS, Azure e Google Cloud. Arquiteturas escaláveis e seguras para sua empresa.',
    keywords: [
      'cloud computing',
      'AWS',
      'Microsoft Azure',
      'Google Cloud Platform',
      'migração nuvem',
      'arquitetura cloud',
      'DevOps',
      'infraestrutura',
      'escalabilidade'
    ],
    canonicalUrl: '/tecnologias/cloud'
  },

  // Tecnologias - Mobile Development
  mobile: {
    title: 'Desenvolvimento Mobile - Apps iOS e Android Nativos e Híbridos',
    description: 'Desenvolvimento de aplicativos mobile premium para iOS e Android. Apps nativos, híbridos e PWAs com experiência superior.',
    keywords: [
      'desenvolvimento mobile',
      'app iOS',
      'app Android',
      'React Native',
      'Flutter',
      'aplicativo nativo',
      'PWA',
      'mobile híbrido',
      'UX mobile'
    ],
    canonicalUrl: '/tecnologias/mobile'
  },

  // Tecnologias - Reference Architecture
  referenceArchitecture: {
    title: 'Arquitetura de Referência - Sistemas Escaláveis e Seguros',
    description: 'Desenho de arquiteturas escaláveis, seguras e resilientes. Modernização de sistemas legados e transformação digital estruturada.',
    keywords: [
      'arquitetura software',
      'sistemas escaláveis',
      'modernização sistemas',
      'arquitetura microserviços',
      'design patterns',
      'sistemas distribuídos',
      'segurança digital',
      'performance'
    ],
    canonicalUrl: '/tecnologias/reference-architecture'
  },

  // Tecnologias - Automação & RPA
  automation: {
    title: 'Automação & RPA - Robotic Process Automation Empresarial',
    description: 'Robotic Process Automation (RPA) para otimizar processos repetitivos. Aumente eficiência operacional com automação inteligente.',
    keywords: [
      'RPA',
      'automação processos',
      'robotic process automation',
      'eficiência operacional',
      'bot automação',
      'workflow automation',
      'redução custos',
      'otimização processos'
    ],
    canonicalUrl: '/tecnologias/automation'
  },

  // Tecnologias - Data Analytics
  dataAnalytics: {
    title: 'Data Analytics & BI - Business Intelligence e Machine Learning',
    description: 'Soluções de Business Intelligence, dashboards interativos e análise preditiva com machine learning para decisões data-driven.',
    keywords: [
      'business intelligence',
      'data analytics',
      'machine learning',
      'análise preditiva',
      'dashboard',
      'big data',
      'data science',
      'visualização dados',
      'KPI'
    ],
    canonicalUrl: '/tecnologias/data-analytics'
  },

  // Contato
  contact: {
    title: 'Contato - Agende sua Consultoria Gratuita | VERDYA',
    description: 'Entre em contato com a VERDYA para uma consultoria gratuita. Descubra como podemos transformar digitalmente sua empresa.',
    keywords: [
      'contato verdya',
      'consultoria gratuita',
      'agendar consultoria',
      'transformação digital',
      'orçamento consultoria',
      'fale conosco'
    ],
    canonicalUrl: '/#contact'
  }
};

// Schema.org structured data templates
export const SCHEMA_TEMPLATES = {
  // Organização
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VERDYA",
    "alternateName": "VERDYA Consultoria",
    "description": "Especialistas em transformação digital com foco em IA Generativa, Cloud Computing, Mobile Development e Automação.",
    "url": "https://verdya.com.br",
    "logo": "https://verdya.com.br/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/verdya",
      "https://www.instagram.com/verdya"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-96933-0937",
      "contactType": "customer service",
      "availableLanguage": ["Portuguese", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "São Paulo",
      "addressRegion": "SP"
    },
    "foundingDate": "2023",
    "numberOfEmployees": "10-50",
    "industry": "Technology Consulting"
  },

  // Serviço profissional
  professionalService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VERDYA - Consultoria em Transformação Digital",
    "description": "Consultoria especializada em transformação digital, IA Generativa, Cloud Computing e automação empresarial.",
    "provider": {
      "@type": "Organization",
      "name": "VERDYA"
    },
    "areaServed": "Brasil",
    "serviceType": "Technology Consulting",
    "priceRange": "Sob consulta",
    "category": ["Digital Transformation", "AI Consulting", "Cloud Computing", "Mobile Development"]
  },

  // FAQ Schema
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é transformação digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transformação digital é o processo de integração de tecnologias digitais em todas as áreas de uma empresa, mudando fundamentalmente como você opera e entrega valor aos clientes."
        }
      },
      {
        "@type": "Question", 
        "name": "Como a IA Generativa pode ajudar minha empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A IA Generativa pode automatizar processos, melhorar atendimento ao cliente, gerar conteúdo, otimizar operações e criar novas oportunidades de negócio através de tecnologias como ChatGPT e Claude."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva um projeto de transformação digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tempo varia conforme a complexidade e escopo do projeto, geralmente entre 3 a 12 meses. Realizamos uma análise inicial gratuita para estimar prazos específicos."
        }
      }
    ]
  }
};

// Função para gerar breadcrumbs schema
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://verdya.com.br${item.url}`
    }))
  };
}