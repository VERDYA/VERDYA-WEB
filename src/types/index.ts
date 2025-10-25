// Tipos para produtos
export interface Product {
  id: number;
  title: string;
  description: string;
  icon: string;
  isFeatured?: boolean;
}

// Tipos para planos de preço
export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
}

// Tipos para navegação
export interface NavigationItem {
  name: string;
  href: string;
}

// Tipos para links do rodapé
export interface FooterLink {
  id: number;
  text: string;
  href: string;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

// Tipos para configurações da empresa
export interface CompanyConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  social: {
    instagram: string;
    linkedin: string;
  };
}

// Tipos para configurações de cores
export interface ColorConfig {
  primary: string;
  primaryDark: string;
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
}

// Tipos para configurações de animação
export interface AnimationConfig {
  aos: {
    once: boolean;
    offset: number;
    duration: number;
    easing: string;
  };
}

// Tipos para propriedades do Logo
export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Tipos para formulários
export interface ContactForm {
  phone: string;
  email: string;
}

// Tipos para validação
export interface ValidationResult {
  isValid: boolean;
  message?: string;
} 