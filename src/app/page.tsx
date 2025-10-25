'use client';

import Script from 'next/script';
import { useAOS } from '../hooks/useAOS';
import { useAppInit } from '../hooks/useAppInit';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import TechCardsSection from '../components/sections/TechCardsSection';
import DNASection from '../components/sections/DNASection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import { HomeStructuredData } from '../components/SEO/StructuredData';

export default function Home() {
  // Inicialização da aplicação
  useAppInit();
  
  // Inicializa as animações AOS
  useAOS();

  return (
    <div className="bg-gray-900 text-white">
      <Script src="https://unpkg.com/imask" strategy="beforeInteractive" />
      
      {/* SEO - Structured Data */}
      <HomeStructuredData />
      
      {/* Componentes de Layout */}
      <Header />
      
      <main>
        {/* Componentes de Seção */}
        <HeroSection />
        <AboutSection />
        <TechCardsSection />
        <DNASection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
