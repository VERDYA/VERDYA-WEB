/**
 * Webflow Demo Page
 * Demonstração do novo sistema Webflow
 */

'use client';

import { useAppInit } from '../../hooks/useAppInit';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { PageBuilder } from '../../webflow/PageBuilder';
import { homePageContent } from '../../content/pages/home';

export default function WebflowDemoPage() {
  // Inicialização da aplicação
  useAppInit();

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <Header />
      
      {/* Main Content - Webflow Page Builder */}
      <main>
        <PageBuilder sections={homePageContent.sections} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
