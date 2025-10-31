/**
 * useParallax Hook
 * Estilo Webflow: Hook para efeito parallax
 */

'use client';

import { useEffect, useRef, useState } from 'react';

export interface UseParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
}

/**
 * Hook para criar efeito parallax
 * 
 * @example
 * ```tsx
 * const ref = useParallax({ speed: 0.5 });
 * return <div ref={ref}>Parallax content</div>;
 * ```
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.5,
  direction = 'vertical',
  disabled = false,
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Calcula o offset baseado na posição do scroll
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(parallaxOffset);
        
        if (direction === 'vertical') {
          element.style.transform = `translateY(${parallaxOffset}px)`;
        } else {
          element.style.transform = `translateX(${parallaxOffset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, disabled]);

  return { ref, offset };
}
