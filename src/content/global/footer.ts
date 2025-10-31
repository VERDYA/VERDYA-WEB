/**
 * Global Footer Content
 * CMS-Ready: Conteúdo do rodapé
 */

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export const footerContent: {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  columns: FooterColumn[];
  social: SocialLink[];
  legal: {
    copyright: string;
    links: {
      label: string;
      href: string;
    }[];
  };
} = {
  brand: {
    name: 'Verdya',
    tagline: 'Inovação Digital',
    description: 'Transformamos ideias em soluções digitais inteligentes.',
  },
  columns: [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Portfólio', href: '#portfolio' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Tecnologias',
      links: [
        { label: 'IA Generativa', href: '/tecnologias/ia-generativa' },
        { label: 'Cloud', href: '/tecnologias/cloud' },
        { label: 'Mobile', href: '/tecnologias/mobile' },
        { label: 'Data Analytics', href: '/tecnologias/data-analytics' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { label: 'Contato', href: '#contato' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Documentação', href: '/docs' },
      ],
    },
  ],
  social: [
    { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { platform: 'GitHub', href: 'https://github.com', icon: 'github' },
    { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { platform: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  ],
  legal: {
    copyright: `© ${new Date().getFullYear()} Verdya. Todos os direitos reservados.`,
    links: [
      { label: 'Privacidade', href: '/privacidade' },
      { label: 'Termos', href: '/termos' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
};
