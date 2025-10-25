'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

// Interface para métricas Web Vitals
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

// Interface para gtag no window
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Função para enviar métricas para analytics
function sendToAnalytics(metric: WebVitalMetric) {
  const { name, value, id } = metric;
  
  // Enviar para Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  }
  
  // Log para desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}:`, value);
  }
}

export default function WebVitals() {
  useReportWebVitals(sendToAnalytics);
  
  useEffect(() => {
    // Performance observer para métricas customizadas
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Observer para Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (lastEntry && process.env.NODE_ENV === 'development') {
          console.log('[LCP] Largest Contentful Paint:', lastEntry);
        }
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Browser doesn't support LCP
      }

      // Observer para First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('[FID] First Input Delay:', entry);
          }
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch {
        // Browser doesn't support FID
      }

      // Cleanup
      return () => {
        lcpObserver?.disconnect();
        fidObserver?.disconnect();
      };
    }
  }, []);

  return null; // Este componente não renderiza nada
}

// Hook para monitorar performance customizada
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitorar tempo de carregamento da página
      const handleLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            connection: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            domProcessing: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          };

          if (process.env.NODE_ENV === 'development') {
            console.table(metrics);
          }

          // Enviar para analytics se necessário
          if (window.gtag) {
            window.gtag('event', 'page_load_performance', {
              event_category: 'Performance',
              custom_map: metrics
            });
          }
        }
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);
}