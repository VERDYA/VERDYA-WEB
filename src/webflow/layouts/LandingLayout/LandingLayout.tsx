/**
 * Landing Layout Component
 * Estilo Webflow: Layout otimizado para landing pages
 */

import type { ReactNode } from 'react';

export interface LandingLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  headerTransparent?: boolean;
  className?: string;
}

/**
 * LandingLayout - Layout para landing pages
 * 
 * @example
 * ```tsx
 * <LandingLayout headerTransparent={true}>
 *   <PageBuilder sections={sections} />
 * </LandingLayout>
 * ```
 */
export function LandingLayout({
  children,
  showHeader = true,
  showFooter = true,
  headerTransparent = false,
  className = '',
}: LandingLayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      {/* Header opcional com transparência */}
      {showHeader && (
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            headerTransparent
              ? 'bg-transparent'
              : 'bg-white shadow-md'
          }`}
        >
          {/* Header content seria inserido aqui */}
        </header>
      )}

      {/* Main Content */}
      <main className={showHeader ? 'pt-0' : ''}>
        {children}
      </main>

      {/* Footer opcional */}
      {showFooter && (
        <footer>
          {/* Footer content seria inserido aqui */}
        </footer>
      )}
    </div>
  );
}
