/**
 * Home Page Content
 * CMS-Ready: Todo o conteúdo da página inicial
 */

import type { SectionSchema } from '@/webflow/PageBuilder';

export const homePageContent: { sections: SectionSchema[] } = {
  sections: [
    // Hero Section
    {
      id: 'hero-home',
      type: 'hero',
      content: {
        eyebrow: 'Verdya - Inovação Digital',
        headline: 'Transformamos suas ideias em soluções digitais inteligentes',
        subheadline: 'Desenvolvimento web moderno, IA Generativa e automação para empresas que querem ir além',
        cta: {
          primary: {
            text: 'Começar Projeto',
            href: '#contato',
            variant: 'solid',
          },
          secondary: {
            text: 'Ver Tecnologias',
            href: '#tecnologias',
            variant: 'outline',
          },
        },
      },
      settings: {
        theme: 'dark',
        layout: 'centered',
        animation: 'fade',
        height: 'screen',
        align: 'center',
        background: {
          type: 'gradient',
          value: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
        },
      },
    },

    // About Section (Features)
    {
      id: 'about-section',
      type: 'features',
      content: {
        eyebrow: 'Sobre Nós',
        headline: 'Inovação que transforma negócios',
        subheadline: 'Somos especialistas em criar experiências digitais memoráveis, combinando tecnologias de ponta com design excepcional.',
        features: [
          {
            id: 'feature-1',
            icon: '🚀',
            title: 'Performance',
            description: 'Sites e aplicações ultra-rápidos, otimizados para conversão e experiência do usuário.',
          },
          {
            id: 'feature-2',
            icon: '🤖',
            title: 'IA Generativa',
            description: 'Integramos inteligência artificial para automatizar processos e criar experiências personalizadas.',
          },
          {
            id: 'feature-3',
            icon: '☁️',
            title: 'Cloud Native',
            description: 'Infraestrutura escalável e segura na nuvem, preparada para crescer com seu negócio.',
          },
          {
            id: 'feature-4',
            icon: '📱',
            title: 'Mobile First',
            description: 'Design responsivo e otimizado para dispositivos móveis, onde seus usuários estão.',
          },
          {
            id: 'feature-5',
            icon: '🔒',
            title: 'Segurança',
            description: 'Proteção de dados e conformidade com as melhores práticas de segurança da indústria.',
          },
          {
            id: 'feature-6',
            icon: '📊',
            title: 'Data Analytics',
            description: 'Dashboards e relatórios inteligentes para tomada de decisões baseadas em dados.',
          },
        ],
      },
      settings: {
        theme: 'light',
        layout: 'grid',
        columns: 3,
        animation: 'fade',
        align: 'center',
      },
    },

    // Technologies Section (Features)
    {
      id: 'technologies-section',
      type: 'features',
      content: {
        eyebrow: 'Tecnologias',
        headline: 'Stack moderno e escalável',
        subheadline: 'Utilizamos as melhores tecnologias do mercado para entregar soluções robustas e de alto desempenho.',
        features: [
          {
            id: 'tech-1',
            title: 'IA Generativa',
            description: 'ChatGPT, Claude, Gemini e outras ferramentas de IA para automação inteligente.',
            link: {
              text: 'Saiba mais',
              href: '/tecnologias/ia-generativa',
            },
          },
          {
            id: 'tech-2',
            title: 'Cloud Computing',
            description: 'AWS, Google Cloud, Azure - infraestrutura escalável e confiável.',
            link: {
              text: 'Saiba mais',
              href: '/tecnologias/cloud',
            },
          },
          {
            id: 'tech-3',
            title: 'Mobile Development',
            description: 'React Native, Flutter - aplicativos nativos para iOS e Android.',
            link: {
              text: 'Saiba mais',
              href: '/tecnologias/mobile',
            },
          },
          {
            id: 'tech-4',
            title: 'Data Analytics',
            description: 'Power BI, Tableau, análise de dados e business intelligence.',
            link: {
              text: 'Saiba mais',
              href: '/tecnologias/data-analytics',
            },
          },
          {
            id: 'tech-5',
            title: 'Automation',
            description: 'RPA, integração de APIs, workflows automatizados.',
            link: {
              text: 'Saiba mais',
              href: '/tecnologias/automation',
            },
          },
          {
            id: 'tech-6',
            title: 'Architecture',
            description: 'Microserviços, serverless, event-driven architecture.',
            link: {
              text: 'Saiba mais',
              href: '/tecnologias/reference-architecture',
            },
          },
        ],
      },
      settings: {
        theme: 'dark',
        layout: 'grid',
        columns: 3,
        animation: 'slide',
        align: 'center',
      },
    },

    // DNA Section (Features)
    {
      id: 'dna-section',
      type: 'features',
      content: {
        eyebrow: 'Nosso DNA',
        headline: 'Valores que nos definem',
        subheadline: 'Nossa cultura é baseada em princípios sólidos que guiam cada projeto e decisão.',
        features: [
          {
            id: 'value-1',
            icon: '💡',
            title: 'Inovação',
            description: 'Buscamos constantemente novas tecnologias e metodologias para entregar o melhor.',
          },
          {
            id: 'value-2',
            icon: '🎯',
            title: 'Foco no Cliente',
            description: 'Seu sucesso é nosso sucesso. Trabalhamos lado a lado para alcançar seus objetivos.',
          },
          {
            id: 'value-3',
            icon: '⚡',
            title: 'Agilidade',
            description: 'Metodologias ágeis para entregas rápidas e iterativas, com feedback constante.',
          },
          {
            id: 'value-4',
            icon: '🤝',
            title: 'Transparência',
            description: 'Comunicação clara e honesta em todas as etapas do projeto.',
          },
        ],
      },
      settings: {
        theme: 'light',
        layout: 'grid',
        columns: 4,
        animation: 'scale',
        align: 'center',
      },
    },

    // CTA Section
    {
      id: 'cta-section',
      type: 'cta',
      content: {
        headline: 'Pronto para transformar seu negócio?',
        subheadline: 'Vamos conversar sobre como podemos ajudar sua empresa a alcançar novos patamares.',
        cta: {
          primary: {
            text: 'Iniciar Conversa',
            href: '#contato',
          },
          secondary: {
            text: 'Ver Portfólio',
            href: '#portfolio',
          },
        },
      },
      settings: {
        theme: 'gradient',
        layout: 'centered',
        animation: 'fade',
        background: {
          type: 'gradient',
          value: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        },
      },
    },
  ],
};
