'use client';

import Link from 'next/link';
import TechHeader from '../../../components/layout/TechHeader';
import Footer from '../../../components/layout/Footer';
import { useAOS } from '../../../hooks/useAOS';
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme';
import { usePageReset } from '../../../hooks/usePageReset';

export default function MobilePage() {
  useAOS();
  useScrollbarTheme('green');
  usePageReset();

  const mobileIcon = (
    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v13H7V4zm2 15h6v1H9v-1z"/>
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen theme-green">
      <TechHeader 
        themeColor="green" 
        techName="Desenvolvimento Mobile" 
        subtitle="Apps iOS e Android"
        icon={mobileIcon}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" data-aos="zoom-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Mobile Development
              </h1>
              
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Aplicativos móveis nativos e híbridos com experiência premium para iOS e Android
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar Orçamento
                  </button>
                </Link>
                <Link href="/#services">
                  <button className="border border-green-500 text-green-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-green-500/10">
                    Ver Outros Serviços
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section with Image */}
        <section className="py-20 bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Apps que Encantam Usuários
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Criamos experiências móveis que combinam design elegante, 
                  performance excepcional e funcionalidades que realmente importam para seu negócio.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                      title: "Performance Excepcional",
                      description: "Apps rápidos e responsivos, mesmo em conexões lentas"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      ),
                      title: "Design Intuitivo",
                      description: "Interface moderna que seus usuários vão adorar"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      ),
                      title: "Segurança Garantida",
                      description: "Proteção de dados e privacidade em primeiro lugar"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Phone Mockup Image */}
              <div className="relative" data-aos="fade-left">
                <div className="relative z-10">
                  {/* Phone Frame */}
                  <div className="relative mx-auto w-[280px] h-[570px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="absolute inset-2 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-12 bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex gap-1 items-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs">100%</span>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-6 space-y-4">
                        {/* Header */}
                        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-bold">Verdya App</h3>
                              <p className="text-white/80 text-xs">Bem-vindo de volta!</p>
                            </div>
                          </div>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: "Analytics", icon: "📊" },
                            { label: "Mensagens", icon: "💬" },
                            { label: "Projetos", icon: "📁" },
                            { label: "Equipe", icon: "👥" }
                          ].map((card, idx) => (
                            <div key={idx} className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 text-center">
                              <div className="text-2xl mb-1">{card.icon}</div>
                              <p className="text-white text-xs font-semibold">{card.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Stats Card */}
                        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                          <p className="text-white/80 text-xs mb-2">Performance Hoje</p>
                          <div className="flex items-end gap-1 h-16">
                            {[40, 70, 50, 90, 60, 80, 95].map((height, idx) => (
                              <div 
                                key={idx} 
                                className="flex-1 bg-white rounded-t"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/30">
                          <div className="flex justify-around items-center">
                            {[
                              <svg key="home" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>,
                              <svg key="search" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
                              <svg key="bell" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
                              <svg key="user" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            ].map((icon, idx) => (
                              <div key={idx} className="text-white p-2 rounded-xl hover:bg-white/10 transition-colors">
                                {icon}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Power Button */}
                    <div className="absolute -right-1 top-28 w-1 h-12 bg-gray-700 rounded-l"></div>
                    {/* Volume Buttons */}
                    <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-700 rounded-r"></div>
                    <div className="absolute -left-1 top-36 w-1 h-8 bg-gray-700 rounded-r"></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Nossos Serviços Mobile
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Apps Nativos iOS",
                  description: "Desenvolvimento nativo em Swift com máxima performance e recursos exclusivos",
                  icon: (
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  )
                },
                {
                  title: "Apps Nativos Android",
                  description: "Desenvolvimento em Kotlin/Java otimizado para dispositivos Android",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.523 15.341c-.479 0-.858-.383-.858-.852 0-.469.379-.852.858-.852.478 0 .858.383.858.852 0 .469-.38.852-.858.852zm-11.046 0c-.479 0-.858-.383-.858-.852 0-.469.379-.852.858-.852.478 0 .858.383.858.852 0 .469-.38.852-.858.852zm11.405-6.04l1.997-3.46a.416.416 0 00-.156-.567.424.424 0 00-.579.152L17.137 8.95c-1.548-.706-3.284-1.1-5.137-1.1s-3.589.394-5.137 1.1L4.856 5.426a.424.424 0 00-.579-.152.416.416 0 00-.156.567l1.997 3.46C2.968 11.108.5 14.567.5 18.5h23c0-3.933-2.468-7.392-5.618-9.199z"/>
                    </svg>
                  )
                },
                {
                  title: "Apps Híbridos",
                  description: "React Native e Flutter para desenvolvimento cross-platform eficiente",
                  icon: (
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7M9 3V4H15V3H9M7 6V19H17V6H7M9 8H15V18H9V8Z"/>
                    </svg>
                  )
                },
                {
                  title: "UX/UI Design",
                  description: "Design centrado no usuário com interfaces modernas e intuitivas",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  )
                },
                {
                  title: "Integração de APIs",
                  description: "Conecte seu app com sistemas existentes e serviços externos",
                  icon: (
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.59,13.41C11,13.8 11,14.4 10.59,14.81C10.2,15.2 9.6,15.2 9.19,14.81L7.77,13.39L9.19,12C9.6,11.6 10.2,11.6 10.59,12C11,12.4 11,13 10.59,13.41M14.81,9.19C14.4,8.8 14.4,8.2 14.81,7.81C15.2,7.4 15.8,7.4 16.21,7.81L17.63,9.23L16.21,10.64C15.8,11.05 15.2,11.05 14.81,10.64C14.4,10.23 14.4,9.6 14.81,9.19M21,7L15,1L13,3L15,5L5,15L3,13L1,15L7,21L9,19L7,17L17,7L19,9L21,7Z"/>
                    </svg>
                  )
                },
                {
                  title: "Deploy nas Stores",
                  description: "Publicação completa na App Store e Google Play Store",
                  icon: (
                    <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17L18,12L17,11L12.5,15.5L11.5,14.5L7,10L6,11L12,17Z"/>
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Benefits Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Como Apps Mobile Transformam Sua Empresa
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Descubra como soluções mobile personalizadas podem revolucionar a eficiência operacional 
                e criar experiências excepcionais para seus usuários.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Acesso Instantâneo aos Dados",
                  description: "Equipes de campo acessam informações críticas em tempo real, eliminando atrasos e melhorando a tomada de decisões no local de trabalho.",
                  icon: (
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  impact: "75% mais rápido em consultas"
                },
                {
                  title: "Experiência do Cliente Personalizada",
                  description: "Apps intuitivos que se adaptam às preferências individuais, aumentando o engajamento e fidelizando clientes através de interações relevantes.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  impact: "85% melhoria na satisfação"
                },
                {
                  title: "Produtividade em Movimento",
                  description: "Funcionários executam tarefas críticas de qualquer lugar, mantendo a continuidade dos negócios e otimizando fluxos de trabalho remotos.",
                  icon: (
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  impact: "60% aumento na produtividade"
                },
                {
                  title: "Automação de Processos Manuais",
                  description: "Digitalize formulários, relatórios e aprovações com workflows inteligentes que reduzem erros e aceleram operações empresariais.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  impact: "90% menos paperwork"
                },
                {
                  title: "Insights em Tempo Real",
                  description: "Dashboards móveis com analytics avançados fornecem métricas instantâneas para decisões estratégicas baseadas em dados atualizados.",
                  icon: (
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  impact: "70% decisões mais rápidas"
                },
                {
                  title: "Comunicação Integrada",
                  description: "Centralize notificações, mensagens e colaboração em uma plataforma única, melhorando a coordenação entre equipes e departamentos.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  impact: "50% melhoria na comunicação"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border border-green-500/30">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 px-4 py-2 rounded-lg border border-green-500/20">
                      <span className="text-sm font-semibold text-green-300">{benefit.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           

            {/* User Experience Focus */}
            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Experiência do Usuário Excepcional</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Interface Intuitiva",
                      description: "Design centrado no usuário com navegação fluida e funcionalidades acessíveis"
                    },
                    {
                      title: "Performance Otimizada",
                      description: "Apps responsivos com carregamento rápido e funcionamento offline"
                    },
                    {
                      title: "Segurança Avançada",
                      description: "Proteção de dados com criptografia e autenticação biométrica"
                    },
                    {
                      title: "Integração Completa",
                      description: "Conectividade perfeita com sistemas existentes e APIs externas"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-gray-700">
                      <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div data-aos="fade-left">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Eficiência Empresarial</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Redução de Custos",
                      description: "Diminuição de paperwork e processos manuais em até 80%"
                    },
                    {
                      title: "Escalabilidade",
                      description: "Soluções que crescem com seu negócio sem limites técnicos"
                    },
                    {
                      title: "Analytics Detalhados",
                      description: "Métricas precisas sobre uso, performance e comportamento"
                    },
                    {
                      title: "Manutenção Simples",
                      description: "Updates automáticos e suporte técnico especializado"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-gray-700">
                      <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Recursos Avançados dos Nossos Apps
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold mb-6">Funcionalidades Premium</h3>
                <ul className="space-y-4">
                  {[
                    "Push Notifications inteligentes",
                    "Integração com câmera e galeria",
                    "Geolocalização e mapas",
                    "Pagamentos in-app seguros",
                    "Sincronização offline/online",
                    "Biometria e autenticação",
                    "Analytics e métricas",
                    "Dark mode automático"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center" data-aos="fade-left">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">Apps de Alta Performance</h4>
                  <p className="text-gray-400">
                    Desenvolvemos aplicativos que combinam design moderno, 
                    performance superior e funcionalidades avançadas para 
                    oferecer a melhor experiência aos seus usuários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
              Pronto para Criar Seu App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Transforme sua ideia em um aplicativo móvel de sucesso com nossa expertise em desenvolvimento mobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link href="/#contact">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Agendar Consultoria Gratuita
                </button>
              </Link>
             
            </div>
          </div>
        </section>
      </main>

      <Footer themeColor="green" />
    </div>
  );
}
