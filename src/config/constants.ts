// Configurações da empresa
export const COMPANY_CONFIG = {
  name: 'VERDYA',
  tagline: 'Consultoria Estratégica em Tecnologia',
  description: 'Especialistas em transformação digital com foco em IA Generativa, Cloud, Mobile e automação inteligente. Transformamos desafios empresariais em oportunidades digitais através de soluções inovadoras e human-centric.',
  phone: '+55 11 96933-0937',
  whatsapp: '5511969330937',
  email: 'contato@verdya.com',
  social: {
    instagram: '#',
    linkedin: '#'
  },
  workingHours: 'Seg-Sex: 9h às 18h'
};

// Configurações de cores
export const COLORS = {
  primary: '#84cc16', // lime-500
  primaryDark: '#6a9b12', // lime-600
  background: '#111827', // gray-900
  cardBackground: '#1f2937', // gray-800
  text: '#ffffff',
  textSecondary: '#9ca3af' // gray-400
};

// Configurações de animação
export const ANIMATION_CONFIG = {
  aos: {
    once: true,
    offset: 100,
    duration: 1000,
    easing: 'ease-out-cubic'
  }
};





// Configurações de navegação
export const NAVIGATION = [
  { id: 1, text: "Início", href: "/" },
  { id: 2, text: "Sobre", href: "/#about" },
  { id: 3, text: "Serviços", href: "/#tecnologias" },
  { id: 4, text: "Agendar Consultoria", href: "/#contact" }
];

// Configurações do rodapé
export const FOOTER_SECTIONS = [
  {
    id: 1,
    title: "Tecnologias",
    links: [
      { id: 1, text: "IA Generativa", href: "/#tecnologias" },
      { id: 2, text: "Cloud Computing", href: "/#tecnologias" },
      { id: 3, text: "Mobile Development", href: "/#tecnologias" },
      { id: 4, text: "Automação & RPA", href: "/#tecnologias" }
    ]
  },
  {
    id: 2,
    title: "Empresa",
    links: [
      { id: 1, text: "Sobre Nós", href: "/#about" },
      { id: 2, text: "Nosso DNA", href: "/#dna" },
      { id: 3, text: "Metodologia", href: "/#about" },
      { id: 4, text: "Agendar Consultoria", href: "/#contact" }
    ]
  }
];

// Configurações de serviços
export const SERVICES = [
  {
    id: 1,
    title: "Consultoria Estratégica",
    description: "Análise profunda dos processos empresariais para identificar oportunidades de transformação digital e otimização operacional.",
    features: ["Auditoria de Processos", "Análise de Viabilidade", "Roadmap Estratégico", "Otimização de Custos"],
    isHighlighted: true
  },
  {
    id: 2,
    title: "Desenvolvimento de Soluções",
    description: "Criação de sistemas personalizados que se integram perfeitamente aos processos existentes da sua empresa.",
    features: ["Sistemas Web e Mobile", "Integração de APIs", "Migração de Dados", "Testes e Qualidade"]
  },
  {
    id: 3,
    title: "Implementação e Suporte",
    description: "Acompanhamento completo desde a implementação até a manutenção contínua, garantindo o sucesso do projeto.",
    features: ["Implementação Guiada", "Treinamento de Equipes", "Monitoramento Contínuo", "Suporte Especializado"]
  }
];

// DNA da empresa
export const COMPANY_DNA = [
  {
    id: 1,
    title: "Especialização Digital",
    description: "Somos especialistas focados exclusivamente em transformação digital, com expertise profunda em tecnologias emergentes.",
    icon: "digital"
  },
  {
    id: 2,
    title: "Paixão",
    description: "Movidos pela paixão pela tecnologia e inovação, entregamos soluções que superam expectativas.",
    icon: "passion"
  },
  {
    id: 3,
    title: "Pluralidade Técnica",
    description: "Equipe diversificada com expertise em múltiplas tecnologias e metodologias de desenvolvimento.",
    icon: "diversity"
  },
  {
    id: 4,
    title: "Entrega de Valor",
    description: "Focamos em resultados mensuráveis que geram valor real e ROI para nossos clientes.",
    icon: "value"
  },
  {
    id: 5,
    title: "Human Centricity",
    description: "Colocamos as pessoas no centro de tudo que fazemos, desde o design até a implementação.",
    icon: "human"
  },
  {
    id: 6,
    title: "Engajamento",
    description: "Compromisso total com o sucesso dos nossos clientes, mantendo relacionamentos duradouros.",
    icon: "engagement"
  }
];

// Configurações de depoimentos
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos Silva",
    company: "TechCorp Ltda",
    position: "Diretor de Tecnologia",
    text: "A VERDYA revolucionou nossa operação através de uma consultoria estratégica excepcional. O sistema de gestão implementado resultou em 40% de aumento na produtividade e redução significativa de custos operacionais.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Costa",
    company: "Inovação Digital",
    position: "CEO",
    text: "A equipe da VERDYA demonstrou profundo conhecimento técnico e estratégico. A consultoria nos ajudou a identificar oportunidades que não havíamos percebido, resultando em um ROI excepcional.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Santos",
    company: "StartupXYZ",
    position: "CTO",
    text: "O suporte técnico e a consultoria contínua da VERDYA foram fundamentais para nosso crescimento. Eles não apenas entregam soluções, mas se tornam verdadeiros parceiros estratégicos.",
    rating: 5
  }
]; 