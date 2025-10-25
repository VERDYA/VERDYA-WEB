'use client';

import { useEffect } from 'react';

export function useSimplePageReset() {
  useEffect(() => {
    // Reset simples apenas para o topo
    window.scrollTo(0, 0);
  }, []);
}
