/**
 * CTA (Call to Action) Section Schema
 * Define a estrutura de dados para a seção de CTA
 */

export interface CTASchema {
  id: string;
  type: 'cta';
  content: {
    headline: string;
    subheadline?: string;
    cta: {
      primary?: {
        text: string;
        href: string;
      };
      secondary?: {
        text: string;
        href: string;
      };
    };
  };
  settings: {
    theme?: 'light' | 'dark' | 'gradient' | 'primary';
    layout?: 'centered' | 'split';
    animation?: 'fade' | 'scale' | 'none';
    background?: {
      type?: 'color' | 'gradient' | 'image';
      value?: string;
    };
  };
}
