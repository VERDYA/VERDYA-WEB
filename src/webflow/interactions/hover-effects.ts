/**
 * Hover Effects
 * Estilo Webflow: Efeitos de hover reutilizáveis
 */

export const hoverEffects = {
  // Lift effect
  lift: {
    default: {
      transform: 'translateY(0)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    hover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)',
    },
  },
  
  // Scale effect
  scale: {
    default: {
      transform: 'scale(1)',
      transition: 'transform 0.3s ease',
    },
    hover: {
      transform: 'scale(1.05)',
    },
  },
  
  // Rotate effect
  rotate: {
    default: {
      transform: 'rotate(0deg)',
      transition: 'transform 0.3s ease',
    },
    hover: {
      transform: 'rotate(5deg)',
    },
  },
  
  // Glow effect
  glow: {
    default: {
      boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
      transition: 'box-shadow 0.3s ease',
    },
    hover: {
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
    },
  },
  
  // Shine effect
  shine: {
    default: {
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },
    before: {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      transition: 'left 0.5s ease',
    },
    hover: {
      before: {
        left: '100%',
      },
    },
  },
  
  // Border grow effect
  borderGrow: {
    default: {
      position: 'relative' as const,
    },
    before: {
      content: '""',
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: '#3b82f6',
      transition: 'width 0.3s ease',
    },
    hover: {
      before: {
        width: '100%',
      },
    },
  },
  
  // Tilt effect
  tilt: {
    default: {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease',
    },
    hover: {
      transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
    },
  },
  
  // Fade effect
  fade: {
    default: {
      opacity: 1,
      transition: 'opacity 0.3s ease',
    },
    hover: {
      opacity: 0.8,
    },
  },
  
  // Blur effect
  blur: {
    default: {
      filter: 'blur(0px)',
      transition: 'filter 0.3s ease',
    },
    hover: {
      filter: 'blur(2px)',
    },
  },
  
  // Color shift effect
  colorShift: {
    default: {
      filter: 'hue-rotate(0deg)',
      transition: 'filter 0.3s ease',
    },
    hover: {
      filter: 'hue-rotate(30deg)',
    },
  },
} as const;

export type HoverEffectType = keyof typeof hoverEffects;

/**
 * Gera CSS para efeito de hover
 */
export function generateHoverCSS(effect: HoverEffectType) {
  const config = hoverEffects[effect];
  
  const defaultStyles = Object.entries(config.default)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
  
  const hoverStyles = Object.entries(config.hover)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
  
  return `
    ${defaultStyles}
    
    &:hover {
      ${hoverStyles}
    }
  `;
}
