/**
 * useHoverEffect Hook
 * Estilo Webflow: Hook para efeitos de hover customizados
 */

'use client';

import { useRef, useState } from 'react';
import type { HoverEffectType } from '../hover-effects';

export interface UseHoverEffectOptions {
  effect?: HoverEffectType;
  disabled?: boolean;
}

/**
 * Hook para adicionar efeitos de hover
 * 
 * @example
 * ```tsx
 * const { ref, isHovered } = useHoverEffect({ effect: 'lift' });
 * return <div ref={ref}>Hover me</div>;
 * ```
 */
export function useHoverEffect<T extends HTMLElement = HTMLDivElement>({
  effect = 'lift',
  disabled = false,
}: UseHoverEffectOptions = {}) {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
      if (ref.current) {
        ref.current.setAttribute('data-hover-effect', effect);
        ref.current.classList.add('hover-active');
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (ref.current) {
      ref.current.classList.remove('hover-active');
    }
  };

  // Adiciona event listeners ao elemento
  if (ref.current && !disabled) {
    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);
  }

  return { ref, isHovered };
}
