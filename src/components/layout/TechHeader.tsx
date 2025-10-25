'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

interface TechHeaderProps {
  themeColor: 'purple' | 'blue' | 'green' | 'orange' | 'indigo' | 'teal';
  techName: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function TechHeader({ themeColor, techName, subtitle, icon }: TechHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const colorClasses = {
    purple: {
      text: 'text-purple-400',
      border: 'border-purple-500/20',
      bg: 'bg-purple-500/10',
      gradient: 'from-purple-500 to-pink-500',
      hover: 'hover:bg-purple-500/20'
    },
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/10',
      gradient: 'from-blue-500 to-cyan-500',
      hover: 'hover:bg-blue-500/20'
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-500/20',
      bg: 'bg-green-500/10',
      gradient: 'from-green-500 to-emerald-500',
      hover: 'hover:bg-green-500/20'
    },
    orange: {
      text: 'text-orange-400',
      border: 'border-orange-500/20',
      bg: 'bg-orange-500/10',
      gradient: 'from-orange-500 to-red-500',
      hover: 'hover:bg-orange-500/20'
    },
    indigo: {
      text: 'text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-500/10',
      gradient: 'from-indigo-500 to-purple-500',
      hover: 'hover:bg-indigo-500/20'
    },
    teal: {
      text: 'text-teal-400',
      border: 'border-teal-500/20',
      bg: 'bg-teal-500/10',
      gradient: 'from-teal-500 to-blue-500',
      hover: 'hover:bg-teal-500/20'
    }
  };

  const currentTheme = colorClasses[themeColor];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <Logo />
            </Link>
          </div>

          {/* Tech Context Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`p-3 rounded-xl ${currentTheme.bg} ${currentTheme.border} border backdrop-blur-sm`}>
              <div className="w-6 h-6">
                {icon}
              </div>
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${currentTheme.text}`}>
                {techName}
              </h2>
              <p className="text-sm text-gray-400">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Início
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Sobre
            </Link>
            <Link href="/#tecnologias" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Serviços
            </Link>
            <Link href="/#contact">
              <button className={`bg-gradient-to-r ${currentTheme.gradient} text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                Agendar Consultoria
              </button>
            </Link>
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Início
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Sobre
              </Link>
              <Link
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Serviços
              </Link>
              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-center bg-gradient-to-r ${currentTheme.gradient} text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300`}
                >
                  Agendar Consultoria
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
