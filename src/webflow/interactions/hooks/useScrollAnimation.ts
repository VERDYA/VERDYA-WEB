/**
 * useScrollAnimation Hook
 * Estilo Webflow: Hook para detectar scroll e animar elementos
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import type { AnimationType } from '../scroll-animations';

export interface UseScrollAnimationOptions {
  animation?: AnimationType;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

/**
 * Hook para animar elementos ao scroll
 * 
 * @example
 * ```tsx
 * const ref = useScrollAnimation({ animation: 'fadeInUp', threshold: 0.1 });
 * return <div ref={ref}>Animated content</div>;
 * ```
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>({
  animation = 'fadeInUp',
  threshold = 0.1,
  delay = 0,
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              element.classList.add('animate-in');
              element.setAttribute('data-animation', animation);
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
            element.classList.remove('animate-in');
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, threshold, delay, once]);

  return { ref, isVisible };
}
