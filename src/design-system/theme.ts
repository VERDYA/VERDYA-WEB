/**
 * Design System Theme
 * Estilo Webflow: Configuração central do tema
 */

import { colors, typography, spacing, breakpoints } from './tokens';

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  
  // Configurações de animação
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  
  // Configurações de sombra
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },
  
  // Configurações de border radius
  radius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
} as const;

export type Theme = typeof theme;

// Helper para gerar CSS variables
export function generateCSSVariables(themeObj: typeof theme) {
  const cssVars: Record<string, string> = {};
  
  // Colors
  Object.entries(themeObj.colors).forEach(([colorKey, colorValues]) => {
    if (typeof colorValues === 'string') {
      cssVars[`--color-${colorKey}`] = colorValues;
    } else {
      Object.entries(colorValues).forEach(([shade, value]) => {
        cssVars[`--color-${colorKey}-${shade}`] = value;
      });
    }
  });
  
  // Typography
  Object.entries(themeObj.typography.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value;
  });
  
  Object.entries(themeObj.typography.fontWeight).forEach(([key, value]) => {
    cssVars[`--font-weight-${key}`] = String(value);
  });
  
  Object.entries(themeObj.typography.lineHeight).forEach(([key, value]) => {
    cssVars[`--line-height-${key}`] = value;
  });
  
  Object.entries(themeObj.typography.letterSpacing).forEach(([key, value]) => {
    cssVars[`--letter-spacing-${key}`] = value;
  });
  
  // Spacing
  Object.entries(themeObj.spacing.section).forEach(([key, value]) => {
    cssVars[`--spacing-section-${key}`] = value;
  });
  
  Object.entries(themeObj.spacing.container).forEach(([key, value]) => {
    cssVars[`--container-${key}`] = value;
  });
  
  // Animation
  Object.entries(themeObj.animation.duration).forEach(([key, value]) => {
    cssVars[`--duration-${key}`] = value;
  });
  
  Object.entries(themeObj.animation.easing).forEach(([key, value]) => {
    cssVars[`--easing-${key}`] = value;
  });
  
  // Shadow
  Object.entries(themeObj.shadow).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value;
  });
  
  // Radius
  Object.entries(themeObj.radius).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value;
  });
  
  return cssVars;
}
