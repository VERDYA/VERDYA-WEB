'use client';

import { useEffect, useRef } from 'react';
import BlurText from '../ui/BlurText';

export default function HeroSection() {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inicializa a animação Lottie quando o componente montar
    if (lottieRef.current && typeof window !== 'undefined') {
      import('lottie-web').then((lottie) => {
        lottie.default.loadAnimation({
          container: lottieRef.current!,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets2.lottiefiles.com/packages/lf20_kyu7xb1v.json'
        });
      });
    }
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animação do texto concluída!');
  };

  return (
    <section className="hero-bg pt-32 pb-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <BlurText
              text="Inovação e Tecnologia Simplificadas para o seu Negócio"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-6xl font-bold leading-tight"
              specialWords={[
                { word: 'Simplificadas', className: 'main-green' }
              ]}
            />
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Bem-vindo à Verdya. Nós transformamos ideias complexas em soluções digitais eficientes e intuitivas que impulsionam o seu crescimento.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="#tecnologias" 
              className="bg-main-green text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition-transform transform hover:scale-105"
            >
              Nossos Serviços
            </a>
            <a 
              href="#contact" 
              className="border-2 border-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-transform transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
        <div className="relative hidden md:block" data-aos="fade-left" data-aos-duration="1000">
          {/* Container da animação Lottie */}
          <div 
            ref={lottieRef} 
            className="rounded-2xl shadow-2xl mx-auto w-full h-full min-h-[350px] min-w-[350px] max-w-[420px] max-h-[420px]"
          />
        
        </div>
      </div>
    </section>
  );
} 