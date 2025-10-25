'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
            Por que Escolher a <span className="text-lime-400">VERDYA</span>?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            Especialistas em transformação digital com metodologia ágil e foco em resultados mensuráveis.
          </p>
        </div>

        {/* Seção Principal com Imagem */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Imagem/Ilustração */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              {/* Imagem real */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                <Image
                  src="/imagens/pessoas-negocio-apertar-mao-junto.jpg"
                  alt="Parceria e colaboração em transformação digital - VERDYA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay sutil para combinar com a marca */}
                <div className="absolute inset-0 bg-gradient-to-tr from-lime-900/20 via-transparent to-transparent"></div>
              </div>
              {/* Borda decorativa */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-lime-500/20 rounded-3xl -z-10"></div>
            </div>
          </div>

          {/* Lista de Diferenciais (sem cards) */}
          <div className="space-y-10 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            {/* Item 1 */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center group-hover:bg-lime-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Especialização Digital</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Expertise profunda em tecnologias emergentes como IA Generativa, Cloud Computing e Mobile Development.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center group-hover:bg-lime-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Metodologia Comprovada</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Abordagem estruturada com KPIs claros e entregas que geram valor real para o negócio.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-lime-500/10 rounded-xl flex items-center justify-center group-hover:bg-lime-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Human Centricity</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Soluções desenvolvidas pensando na experiência do usuário e na jornada do cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metodologia - Timeline Horizontal */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-duration="1000">
              Nossa Metodologia
            </h3>
            <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Linha conectora */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-500/40 to-transparent"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  number: "01",
                  title: "Análise",
                  description: "Auditoria completa dos processos e identificação de oportunidades"
                },
                {
                  number: "02",
                  title: "Planejamento",
                  description: "Roadmap estratégico com cronograma e marcos definidos"
                },
                {
                  number: "03",
                  title: "Implementação",
                  description: "Execução ágil com acompanhamento contínuo e ajustes"
                },
                {
                  number: "04",
                  title: "Acompanhamento",
                  description: "Monitoramento de resultados e suporte contínuo"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative text-center"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                >
                  {/* Número circular */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto">
                    <div className="absolute inset-0 bg-lime-500/10 rounded-full"></div>
                    <span className="relative text-3xl font-bold text-lime-400">{step.number}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diferenciais - Grid Limpo sem cards */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-duration="1000">
              Nossos Diferenciais
            </h3>
            <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                ),
                title: "Agilidade",
                description: "Entregas rápidas sem comprometer qualidade"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "Qualidade",
                description: "Padrões internacionais e testes rigorosos"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                ),
                title: "Expertise",
                description: "Time especializado e certificado"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                ),
                title: "Inovação",
                description: "Sempre à frente do mercado"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-lime-500/10 rounded-2xl mb-5 text-lime-400 group-hover:bg-lime-500/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 