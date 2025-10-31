/**
 * Global Navigation Content
 * CMS-Ready: Conteúdo da navegação
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationContent: {
  logo: {
    text: string;
    href: string;
  };
  mainNav: NavItem[];
  mobileNav?: NavItem[];
} = {
  logo: {
    text: 'Verdya',
    href: '/',
  },
  mainNav: [
    {
      label: 'Início',
      href: '/',
    },
    {
      label: 'Tecnologias',
      href: '#tecnologias',
      children: [
        {
          label: 'IA Generativa',
          href: '/tecnologias/ia-generativa',
        },
        {
          label: 'Cloud Computing',
          href: '/tecnologias/cloud',
        },
        {
          label: 'Mobile Development',
          href: '/tecnologias/mobile',
        },
        {
          label: 'Data Analytics',
          href: '/tecnologias/data-analytics',
        },
        {
          label: 'Automation',
          href: '/tecnologias/automation',
        },
        {
          label: 'Architecture',
          href: '/tecnologias/reference-architecture',
        },
      ],
    },
    {
      label: 'Sobre',
      href: '#sobre',
    },
    {
      label: 'Contato',
      href: '#contato',
    },
  ],
};
