import { useEffect, useRef } from 'react';

export function useAOS() {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevenir múltiplas inicializações do AOS
    if (initialized.current || typeof window === 'undefined') return;

    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        
        // Inicializar apenas uma vez
        AOS.default.init({
          once: true, // Anima apenas uma vez
          offset: 100, // Offset para trigger da animação
          duration: 1000, // Duração da animação
          easing: 'ease-out-cubic', // Tipo de easing
          disable: false, // Não desabilitar em dispositivos móveis
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99
        });

        initialized.current = true;
      } catch (error) {
        console.error('Erro ao inicializar AOS:', error);
      }
    };

    initAOS();
  }, []);
} 