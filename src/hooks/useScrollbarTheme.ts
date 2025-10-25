'use client';

import { useEffect } from 'react';

type ThemeColor = 'lime' | 'purple' | 'blue' | 'green' | 'orange' | 'indigo' | 'teal';

const scrollbarThemes = {
  lime: {
    thumb: '#84cc16',
    thumbHover: '#6a9b12',
    thumbActive: '#5a8a0f',
  },
  purple: {
    thumb: '#a855f7',
    thumbHover: '#9333ea',
    thumbActive: '#7c3aed',
  },
  blue: {
    thumb: '#3b82f6',
    thumbHover: '#2563eb',
    thumbActive: '#1d4ed8',
  },
  green: {
    thumb: '#10b981',
    thumbHover: '#059669',
    thumbActive: '#047857',
  },
  orange: {
    thumb: '#f97316',
    thumbHover: '#ea580c',
    thumbActive: '#c2410c',
  },
  indigo: {
    thumb: '#6366f1',
    thumbHover: '#4f46e5',
    thumbActive: '#4338ca',
  },
  teal: {
    thumb: '#14b8a6',
    thumbHover: '#0d9488',
    thumbActive: '#0f766e',
  },
};

export function useScrollbarTheme(themeColor: ThemeColor) {
  useEffect(() => {
    const theme = scrollbarThemes[themeColor];
    const root = document.documentElement;
    
    if (theme) {
      root.style.setProperty('--scrollbar-thumb-color', theme.thumb);
      root.style.setProperty('--scrollbar-thumb-hover', theme.thumbHover);
      root.style.setProperty('--scrollbar-thumb-active', theme.thumbActive);
    }

    // Cleanup function para resetar ao tema padrão quando o componente for desmontado
    return () => {
      const defaultTheme = scrollbarThemes.lime;
      root.style.setProperty('--scrollbar-thumb-color', defaultTheme.thumb);
      root.style.setProperty('--scrollbar-thumb-hover', defaultTheme.thumbHover);
      root.style.setProperty('--scrollbar-thumb-active', defaultTheme.thumbActive);
    };
  }, [themeColor]);
}
