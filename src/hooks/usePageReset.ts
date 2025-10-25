'use client';

import { useEffect } from 'react';

export function usePageReset() {
  useEffect(() => {
    // Função mais simples para resetar a página
    const resetPage = () => {
      // Garantir que a página comece do topo
      window.scrollTo(0, 0);
      
      // Se há hash na URL, lidar com isso depois de um delay
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        setTimeout(() => {
          const element = document.querySelector(hash) as HTMLElement;
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.offsetTop - headerOffset;
            
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: 'smooth'
            });
          }
        }, 1000); // Aumentado o delay para garantir que a página carregou completamente
      }
    };

    // Reset apenas uma vez quando o componente monta
    const timer = setTimeout(resetPage, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Array vazio para executar apenas uma vez
}
