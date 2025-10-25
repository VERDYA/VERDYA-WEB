'use client';

import Link from 'next/link';
import { useState } from 'react';

interface TechCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
  gradient: string;
}

const techCards: TechCard[] = [
  {
    id: 'ia-generativa',
    title: 'IA Generativa',
    description: 'Soluções avançadas com ChatGPT, Claude e modelos de linguagem para automação inteligente.',
    route: '/tecnologias/ia-generativa',
    gradient: 'from-purple-500 to-pink-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Migração e otimização para AWS, Azure e Google Cloud com arquitetura escalável.',
    route: '/tecnologias/cloud',
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    )
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Apps nativos e híbridos para iOS e Android com experiência premium.',
    route: '/tecnologias/mobile',
    gradient: 'from-green-500 to-emerald-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    id: 'reference-architecture',
    title: 'Reference Architecture',
    description: 'Desenho de arquiteturas escaláveis, seguras e resilientes para apoiar a modernização e a transformação digital de negócios.',
    route: '/tecnologias/reference-architecture',
    gradient: 'from-orange-500 to-red-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'automation',
    title: 'Automação & RPA',
    description: 'Robotic Process Automation para otimizar processos repetitivos e aumentar eficiência.',
    route: '/tecnologias/automation',
    gradient: 'from-indigo-500 to-purple-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Business Intelligence, dashboards interativos e análise preditiva com machine learning.',
    route: '/tecnologias/data-analytics',
    gradient: 'from-teal-500 to-blue-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function TechCardsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="tecnologias" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
            Nossas Especialidades Tecnológicas
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            Explore nossas áreas de expertise e descubra como podemos transformar seu negócio com as tecnologias mais avançadas do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative"
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay={100 + index * 100}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className={`
                card-bg p-8 rounded-2xl border border-gray-700 h-full
                transition-all duration-500 transform
                ${hoveredCard === card.id ? 'scale-105 border-lime-500 shadow-2xl shadow-lime-500/20' : 'hover:border-gray-600'}
                group-hover:-translate-y-2
              `}>
                {/* Gradient background on hover */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-br ${card.gradient}
                  ${hoveredCard === card.id ? 'opacity-5' : ''}
                `}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500
                    ${hoveredCard === card.id 
                      ? `bg-gradient-to-br ${card.gradient} text-white shadow-lg` 
                      : 'bg-lime-500/10 text-lime-400'
                    }
                  `}>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-lime-400 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {card.description}
                  </p>

                  {/* Button */}
                  <Link href={card.route}>
                    <button className={`
                      w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                      ${hoveredCard === card.id
                        ? `bg-gradient-to-r ${card.gradient} text-white shadow-lg transform scale-105`
                        : 'bg-lime-500/10 text-lime-400 border border-lime-500/30 hover:bg-lime-500/20'
                      }
                      group-hover:shadow-lg
                    `}>
                      <span className="flex items-center justify-center space-x-2">
                        <span>Saiba mais</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>

                {/* Hover effect border */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
                  bg-gradient-to-br ${card.gradient} opacity-0
                  ${hoveredCard === card.id ? 'opacity-20' : ''}
                `}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
