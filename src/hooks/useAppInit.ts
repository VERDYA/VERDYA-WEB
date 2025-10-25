'use client';

import { useEffect, useRef } from 'react';

// Hook global para gerenciar inicializações únicas
export function useAppInit() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    // Marcar como inicializado
    initialized.current = true;

    // Garantir scroll para o topo em navegação
    window.scrollTo(0, 0);

    // Lidar com hash se existir
    const hash = window.location.hash;
    if (hash && hash !== '#') {
      setTimeout(() => {
        const element = document.querySelector(hash) as HTMLElement;
        if (element) {
          const headerOffset = 80;
          const elementPosition = Math.max(0, element.offsetTop - headerOffset);
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 1500); // Delay maior para garantir que tudo carregou
    }

    // Reset ao sair da página
    return () => {
      initialized.current = false;
    };
  }, []);
}
