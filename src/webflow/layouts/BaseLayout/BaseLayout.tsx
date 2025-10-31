/**
 * Base Layout Component
 * Estilo Webflow: Layout base para todas as páginas
 */

import type { ReactNode } from 'react';

export interface BaseLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

/**
 * BaseLayout - Layout base do site
 * 
 * @example
 * ```tsx
 * <BaseLayout>
 *   <PageBuilder sections={sections} />
 * </BaseLayout>
 * ```
 */
export function BaseLayout({
  children,
  header,
  footer,
  className = '',
}: BaseLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Header */}
      {header && <header className="sticky top-0 z-50">{header}</header>}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      {footer && <footer>{footer}</footer>}
    </div>
  );
}
