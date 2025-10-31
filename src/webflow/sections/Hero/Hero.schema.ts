/**
 * Hero Section Schema
 * Define a estrutura de dados para a seção Hero
 */

export interface HeroSchema {
  id: string;
  type: 'hero';
  content: {
    eyebrow?: string;
    headline: string;
    subheadline?: string;
    description?: string;
    cta?: {
      primary?: {
        text: string;
        href: string;
        variant?: 'solid' | 'outline' | 'ghost';
      };
      secondary?: {
        text: string;
        href: string;
        variant?: 'solid' | 'outline' | 'ghost';
      };
    };
    image?: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
    video?: {
      src: string;
      poster?: string;
    };
  };
  settings: {
    theme?: 'light' | 'dark' | 'gradient';
    layout?: 'centered' | 'split' | 'fullscreen' | 'minimal';
    animation?: 'fade' | 'slide' | 'scale' | 'none';
    height?: 'auto' | 'screen' | 'large' | 'medium' | 'small';
    align?: 'left' | 'center' | 'right';
    background?: {
      type?: 'color' | 'gradient' | 'image' | 'video';
      value?: string;
    };
  };
}
