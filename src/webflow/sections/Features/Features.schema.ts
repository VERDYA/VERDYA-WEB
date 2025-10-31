/**
 * Features Section Schema
 * Define a estrutura de dados para a seção de Features/Recursos
 */

export interface Feature {
  id: string;
  icon?: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export interface FeaturesSchema {
  id: string;
  type: 'features';
  content: {
    eyebrow?: string;
    headline: string;
    subheadline?: string;
    features: Feature[];
    cta?: {
      text: string;
      href: string;
    };
  };
  settings: {
    theme?: 'light' | 'dark';
    layout?: 'grid' | 'list' | 'carousel';
    columns?: 2 | 3 | 4;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
    align?: 'left' | 'center';
  };
}
