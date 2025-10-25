'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { NAVIGATION } from '../../config/constants';

interface HeaderProps {
  themeColor?: string;
}

export default function Header({ themeColor = 'lime' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define cores baseadas no tema
  const colorClasses = {
    lime: {
      text: 'text-lime-400',
      hover: 'hover:text-lime-400',
      button: 'bg-lime-500 hover:bg-lime-600 text-black',
      border: 'border-lime-500'
    },
    purple: {
      text: 'text-purple-400',
      hover: 'hover:text-purple-400',
      button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
      border: 'border-purple-500'
    },
    blue: {
      text: 'text-blue-400',
      hover: 'hover:text-blue-400',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white',
      border: 'border-blue-500'
    },
    green: {
      text: 'text-green-400',
      hover: 'hover:text-green-400',
      button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white',
      border: 'border-green-500'
    },
    orange: {
      text: 'text-orange-400',
      hover: 'hover:text-orange-400',
      button: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white',
      border: 'border-orange-500'
    },
    indigo: {
      text: 'text-indigo-400',
      hover: 'hover:text-indigo-400',
      button: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white',
      border: 'border-indigo-500'
    },
    teal: {
      text: 'text-teal-400',
      hover: 'hover:text-teal-400',
      button: 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white',
      border: 'border-teal-500'
    }
  };

  const currentTheme = colorClasses[themeColor as keyof typeof colorClasses] || colorClasses.lime;

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu quando clica em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <Logo size="md" />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-gray-300 ${currentTheme.hover} transition-colors duration-300 font-medium`}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className={`${currentTheme.button} px-6 py-2 rounded-lg font-semibold transition-all duration-300`}
            >
              Entrar em contato
            </Link>
          </div>

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
              {NAVIGATION.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 text-gray-300 ${currentTheme.hover} transition-colors duration-300 font-medium`}
                >
                  {item.text}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={handleLinkClick}
                  className={`block w-full text-center ${currentTheme.button} px-6 py-2 rounded-lg font-semibold transition-all duration-300`}
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