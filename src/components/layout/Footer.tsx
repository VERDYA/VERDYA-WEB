'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { FOOTER_SECTIONS } from '../../config/constants';

interface FooterProps {
  themeColor?: string;
}

export default function Footer({ themeColor = 'lime' }: FooterProps) {
  const [email, setEmail] = useState('');

  // Define cores baseadas no tema
  const colorClasses = {
    lime: {
      text: 'text-lime-400',
      hover: 'hover:text-lime-400',
      button: 'bg-lime-500 hover:bg-lime-600 text-gray-900',
      socialHover: 'hover:bg-lime-500',
      ring: 'focus:ring-lime-500'
    },
    purple: {
      text: 'text-purple-400',
      hover: 'hover:text-purple-400',
      button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
      socialHover: 'hover:bg-purple-500',
      ring: 'focus:ring-purple-500'
    },
    blue: {
      text: 'text-blue-400',
      hover: 'hover:text-blue-400',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white',
      socialHover: 'hover:bg-blue-500',
      ring: 'focus:ring-blue-500'
    },
    green: {
      text: 'text-green-400',
      hover: 'hover:text-green-400',
      button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white',
      socialHover: 'hover:bg-green-500',
      ring: 'focus:ring-green-500'
    },
    orange: {
      text: 'text-orange-400',
      hover: 'hover:text-orange-400',
      button: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white',
      socialHover: 'hover:bg-orange-500',
      ring: 'focus:ring-orange-500'
    },
    indigo: {
      text: 'text-indigo-400',
      hover: 'hover:text-indigo-400',
      button: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white',
      socialHover: 'hover:bg-indigo-500',
      ring: 'focus:ring-indigo-500'
    },
    teal: {
      text: 'text-teal-400',
      hover: 'hover:text-teal-400',
      button: 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white',
      socialHover: 'hover:bg-teal-500',
      ring: 'focus:ring-teal-500'
    }
  };

  const currentTheme = colorClasses[themeColor as keyof typeof colorClasses] || colorClasses.lime;

  // Função para enviar newsletter
  const submitNewsletter = () => {
    if (!email) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
    
    alert('Inscrição realizada com sucesso! Você receberá nossas novidades em breve.');
    setEmail('');
  };

  // Função para lidar com a tecla Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitNewsletter();
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Seção Principal do Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="cursor-pointer inline-block">
                <Logo size="md" />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em transformação digital com foco em IA Generativa, Cloud, Mobile e automação inteligente. 
              Transformamos desafios empresariais em oportunidades digitais com soluções inovadoras e human-centric.
            </p>
            {/* Links de redes sociais */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/verdya.sh/" className={`bg-gray-800 ${currentTheme.socialHover} hover:text-gray-900 text-gray-400 p-3 rounded-lg transition-all duration-300 transform hover:scale-110`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              <a href="#" className={`bg-gray-800 ${currentTheme.socialHover} hover:text-gray-900 text-gray-400 p-3 rounded-lg transition-all duration-300 transform hover:scale-110`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Colunas de Links */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className={`text-gray-400 ${currentTheme.hover} transition-colors duration-300 flex items-center`}>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Newsletter */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Fique por dentro das novidades</h3>
              <p className="text-gray-400">Receba insights sobre transformação digital e tecnologias emergentes</p>
            </div>
            {/* Formulário de newsletter */}
            <div className="flex flex-col gap-2 w-full lg:flex-row lg:w-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Seu e-mail" 
                className={`bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${currentTheme.ring} w-full lg:w-80`}
              />
              <button 
                onClick={submitNewsletter}
                className={`${currentTheme.button} px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full lg:w-auto`}
              >
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Final do Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2025 Verdya. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 