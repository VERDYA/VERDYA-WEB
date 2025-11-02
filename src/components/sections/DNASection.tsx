'use client';

import { useRef, useEffect, useState } from 'react';
import { COMPANY_DNA } from '../../config/constants';

interface DNACardProps {
  dna: typeof COMPANY_DNA[0];
  index: number;
  sectionProgress: number;
}

function DNACard({ dna, index, sectionProgress }: DNACardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Calcula quando cada card deve aparecer baseado no scroll da seção
    const cardStartProgress = index * 0.12; // Cada card começa a aparecer com 12% de delay (mais rápido)
    const cardEndProgress = cardStartProgress + 0.25; // Animação dura 25% do scroll total (mais suave)

    if (sectionProgress >= cardStartProgress) {
      setIsVisible(true);
      
      // Calcula o progresso específico deste card
      const cardProgress = Math.min((sectionProgress - cardStartProgress) / 0.25, 1);
      
      // Easing suave (ease-out cubic)
      const easedProgress = 1 - Math.pow(1 - cardProgress, 3);
      
      // Animação suave de entrada com mais movimento
      const translateY = (1 - easedProgress) * 50; // Começa 50px abaixo (mais dramático)
      const opacity = easedProgress;
      const scale = 0.92 + (easedProgress * 0.08); // Leve zoom de 92% para 100% (mais perceptível)
      
      // Adiciona um leve deslocamento horizontal para efeito mais dinâmico
      const translateX = (1 - easedProgress) * 20; // Começa 20px à direita
      
      card.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`;
      card.style.opacity = opacity.toString();
      card.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out'; // Transição suave
    }
  }, [sectionProgress, index]);

  return (
    <div 
      ref={cardRef}
      className="group relative opacity-0"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Stacked Cards Effect - Card base */}
      <div className="absolute inset-0 bg-gray-800 rounded-2xl transform transition-all duration-500 translate-x-2 opacity-50 group-hover:translate-x-3 group-hover:opacity-30"></div>
      
      {/* Stacked Cards Effect - Card do meio */}
      <div className="absolute inset-0 bg-gray-800/80 rounded-2xl transform transition-all duration-500 translate-x-1 opacity-75 group-hover:translate-x-2 group-hover:opacity-50"></div>

      {/* Card Principal */}
      <div className="relative card-bg p-6 rounded-2xl border border-gray-700 hover:border-lime-500 transition-all duration-500 group-hover:-translate-x-2 group-hover:shadow-2xl group-hover:shadow-lime-500/30 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 bg-lime-500/10 text-lime-400 group-hover:bg-lime-500 group-hover:text-gray-900 group-hover:shadow-lg group-hover:shadow-lime-500/50 group-hover:scale-110">
            {getDNAIcon(dna.icon)}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-lime-400 transition-colors duration-300">
              {dna.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {dna.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DNASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [iconScale, setIconScale] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calcula o progresso do scroll dentro da seção (0 a 1)
      const start = rect.top;
      const end = rect.bottom - windowHeight;
      const progress = Math.max(0, Math.min(1, -start / (sectionHeight - windowHeight)));
      
      setScrollProgress(progress);
      
      // Efeito de pulsação no ícone baseado no scroll
      const pulse = 1 + Math.sin(progress * Math.PI * 4) * 0.05; // Pulsação suave
      setIconScale(pulse);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="dna" 
      className="min-h-screen snap-start snap-always flex items-center bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration com movimento */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-lime-500/5 via-purple-500/5 to-transparent"
        style={{ 
          transform: `translateY(${scrollProgress * 50}px)`,
          opacity: 1 - scrollProgress * 0.3 
        }}
      ></div>
      
      {/* Grid pattern animado */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg0Y2MxNiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">
            Nosso DNA
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Os valores e princípios que nos guiam na transformação digital e na entrega de soluções excepcionais.
          </p>
          
          {/* Progress indicator */}
          <div className="mt-8 mx-auto max-w-xs">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-lime-500 to-lime-400 transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Layout: DNA à esquerda + Cards à direita */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Lado Esquerdo - DNA Animado */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decoração de fundo animada */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-lime-500/30 via-transparent to-purple-500/30 blur-3xl"
                style={{ 
                  transform: `scale(${iconScale})`,
                  transition: 'transform 0.3s ease-out'
                }}
              ></div>
              
              {/* DNA Helix Animado */}
              <div className="relative h-[600px] flex items-center justify-center">
                <svg
                  viewBox="0 0 200 600"
                  className="w-full h-full"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(132, 204, 22, 0.3))'
                  }}
                >
                  {/* Definições de gradientes */}
                  <defs>
                    <linearGradient id="dnaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#84cc16" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#a3e635" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="dnaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Hélice Esquerda (Verde) */}
                  <g className="dna-helix-left">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const y = i * 30;
                      const x = 50 + Math.sin((i * Math.PI) / 3) * 40;
                      const delay = i * 0.1;
                      
                      return (
                        <circle
                          key={`left-${i}`}
                          cx={x}
                          cy={y}
                          r="8"
                          fill="url(#dnaGradient1)"
                          className="animate-pulse"
                          style={{
                            animationDelay: `${delay}s`,
                            animationDuration: '2s'
                          }}
                        />
                      );
                    })}
                  </g>
                  
                  {/* Hélice Direita (Roxo) */}
                  <g className="dna-helix-right">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const y = i * 30;
                      const x = 150 - Math.sin((i * Math.PI) / 3) * 40;
                      const delay = i * 0.1;
                      
                      return (
                        <circle
                          key={`right-${i}`}
                          cx={x}
                          cy={y}
                          r="8"
                          fill="url(#dnaGradient2)"
                          className="animate-pulse"
                          style={{
                            animationDelay: `${delay}s`,
                            animationDuration: '2s'
                          }}
                        />
                      );
                    })}
                  </g>
                  
                  {/* Conexões entre as hélices */}
                  <g className="dna-connections">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const y = i * 30;
                      const x1 = 50 + Math.sin((i * Math.PI) / 3) * 40;
                      const x2 = 150 - Math.sin((i * Math.PI) / 3) * 40;
                      const delay = i * 0.1;
                      
                      return (
                        <line
                          key={`connection-${i}`}
                          x1={x1}
                          y1={y}
                          x2={x2}
                          y2={y}
                          stroke={i % 2 === 0 ? '#84cc16' : '#a855f7'}
                          strokeWidth="2"
                          strokeOpacity="0.4"
                          className="animate-pulse"
                          style={{
                            animationDelay: `${delay}s`,
                            animationDuration: '2s'
                          }}
                        />
                      );
                    })}
                  </g>
                  
                  {/* Partículas flutuantes */}
                  <g className="dna-particles">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const x = 100 + Math.random() * 100 - 50;
                      const y = i * 75;
                      const delay = Math.random() * 2;
                      
                      return (
                        <circle
                          key={`particle-${i}`}
                          cx={x}
                          cy={y}
                          r="3"
                          fill="#84cc16"
                          opacity="0.6"
                          className="animate-ping"
                          style={{
                            animationDelay: `${delay}s`,
                            animationDuration: '3s'
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Lado Direito - Cards com Animação Sequencial */}
          <div className="space-y-6">
            {COMPANY_DNA.map((dna, index) => (
              <DNACard 
                key={dna.id} 
                dna={dna} 
                index={index}
                sectionProgress={scrollProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Função para retornar ícones baseados no tipo
function getDNAIcon(iconType: string) {
  switch (iconType) {
    case 'digital':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      );
    case 'passion':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      );
    case 'diversity':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      );
    case 'value':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
        </svg>
      );
    case 'human':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      );
    case 'engagement':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      );
  }
}
