'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useNavigation() {
  const router = useRouter();

  useEffect(() => {
    // Função para lidar com navegação de âncora entre páginas
    const handleAnchorNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        // Aguardar um pouco para garantir que a página carregou completamente
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 300);
      } else {
        // Se não há hash, garantir que a página comece no topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Executar quando a página carregar
    handleAnchorNavigation();

    // Escutar mudanças na hash
    const handleHashChange = () => {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Função para navegar com âncora
  const navigateToSection = (href: string) => {
    if (href.startsWith('/#')) {
      // Se estamos em uma página de tecnologia, navegar para a página principal primeiro
      if (window.location.pathname !== '/') {
        router.push(href);
      } else {
        // Se já estamos na página principal, apenas fazer scroll
        const hash = href.substring(1); // remove o /
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      router.push(href);
    }
  };

  return { navigateToSection };
}
