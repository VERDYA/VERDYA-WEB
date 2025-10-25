'use client';

import Link from 'next/link';
import TechHeader from '../../../components/layout/TechHeader';
import Footer from '../../../components/layout/Footer';
import { useAOS } from '../../../hooks/useAOS';
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme';
import { usePageReset } from '../../../hooks/usePageReset';

export default function ReferenceArchitecturePage() {
  useAOS();
  useScrollbarTheme('orange');
  usePageReset();

  const architectureIcon = (
    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen theme-orange">
      <TechHeader 
        themeColor="orange" 
        techName="Reference Architecture" 
        subtitle="Arquiteturas Escaláveis"
        icon={architectureIcon}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900/20 to-red-900/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" data-aos="zoom-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Reference Architecture
              </h1>
              
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Desenho de arquiteturas escaláveis, seguras e resilientes para apoiar a modernização e a transformação digital de negócios
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar Orçamento
                  </button>
                </Link>
                <Link href="/#services">
                  <button className="border border-orange-500 text-orange-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-orange-500/10">
                    Ver Outros Serviços
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Principles Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Princípios de Arquitetura
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Seguimos os melhores padrões da indústria para criar arquiteturas robustas e eficientes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Escalabilidade",
                  description: "Sistemas que crescem junto com seu negócio, suportando aumentos de demanda sem perda de performance",
                  icon: (
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  )
                },
                {
                  title: "Resiliência",
                  description: "Arquiteturas tolerantes a falhas com recuperação automática e continuidade de negócio",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Segurança",
                  description: "Controles de segurança integrados em todas as camadas da arquitetura empresarial",
                  icon: (
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "Modularidade",
                  description: "Componentes independentes que facilitam manutenção, evolução e reutilização",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )
                },
                {
                  title: "Performance",
                  description: "Otimização contínua para garantir máxima eficiência e tempos de resposta rápidos",
                  icon: (
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Observabilidade",
                  description: "Monitoramento completo com métricas, logs e traces para visibilidade total do sistema",
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )
                }
              ].map((principle, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Nossos Serviços de Arquitetura
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Design de Arquitetura",
                  description: "Criação de arquiteturas de referência escaláveis e robustas para sistemas complexos empresariais",
                  features: ["Diagramas de Arquitetura", "Padrões de Design", "Tecnologias Recomendadas", "Roadmap de Implementação"],
                  icon: (
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  title: "Modernização de Sistemas",
                  description: "Transformação de arquiteturas legadas em soluções modernas e escaláveis",
                  features: ["Assessment Técnico", "Estratégia de Migração", "Refactoring Gradual", "Migração Cloud"],
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                },
                {
                  title: "Arquitetura em Nuvem",
                  description: "Soluções nativas em nuvem com alta disponibilidade e escalabilidade automática",
                  features: ["Multi-Cloud Strategy", "Containers & Kubernetes", "Serverless Computing", "DevOps Integration"],
                  icon: (
                    <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  )
                },
                {
                  title: "Segurança e Compliance",
                  description: "Implementação de padrões de segurança e conformidade regulatória empresarial",
                  features: ["Security by Design", "Compliance Frameworks", "Identity Management", "Threat Modeling"],
                  icon: (
                    <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Patterns Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Padrões de Arquitetura
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Implementamos os padrões mais modernos e eficazes da indústria
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Microserviços",
                  description: "Arquitetura distribuída com serviços independentes",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Event-Driven",
                  description: "Comunicação assíncrona baseada em eventos",
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "CQRS",
                  description: "Segregação de responsabilidade entre leitura e escrita",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  title: "Hexagonal",
                  description: "Isolamento da lógica de negócio das dependências externas",
                  color: "from-red-500 to-orange-500"
                }
              ].map((pattern, index) => (
                <div
                  key={index}
                  className="card-bg p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 text-center"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${pattern.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pattern.title}</h3>
                  <p className="text-gray-400 text-sm">{pattern.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Benefícios da Reference Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Uma arquitetura bem planejada é a base para o sucesso de qualquer transformação digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Escalabilidade Garantida",
                  description: "Sistemas preparados para crescer junto com seu negócio sem limitações técnicas",
                  impact: "95% maior capacidade de escala",
                  icon: (
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  )
                },
                {
                  title: "Redução de Custos",
                  description: "Otimização de recursos e eliminação de redundâncias operacionais",
                  impact: "40% redução em custos operacionais",
                  icon: (
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                {
                  title: "Alta Disponibilidade",
                  description: "Arquiteturas resilientes com continuidade de negócio garantida",
                  impact: "99.9% de uptime garantido",
                  icon: (
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Agilidade de Entrega",
                  description: "Padrões e frameworks que aceleram o desenvolvimento de soluções",
                  impact: "60% mais rápido time-to-market",
                  icon: (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Governança de TI",
                  description: "Controles e processos estruturados para gestão eficiente de recursos",
                  impact: "80% melhora na governança",
                  icon: (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Facilidade de Manutenção",
                  description: "Documentação e padrões que simplificam operação e suporte",
                  impact: "50% menos tempo de manutenção",
                  icon: (
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold ml-3 text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 px-4 py-2 rounded-lg border border-orange-500/20">
                    <span className="text-sm font-semibold text-orange-300">{benefit.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Processo de Arquitetura
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Metodologia estruturada para design e implementação de arquiteturas de referência
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description: "Análise completa do ambiente atual, requisitos de negócio e restrições técnicas",
                  deliverables: ["Current State Assessment", "Requirements Analysis", "Technology Inventory"]
                },
                {
                  step: "02",
                  title: "Architecture Design",
                  description: "Criação da arquitetura de referência com padrões, componentes e integrações",
                  deliverables: ["Reference Architecture", "Component Diagrams", "Integration Patterns"]
                },
                {
                  step: "03",
                  title: "Validation & Prototyping",
                  description: "Validação dos conceitos através de provas de conceito e protótipos",
                  deliverables: ["PoC Implementation", "Performance Tests", "Security Validation"]
                },
                {
                  step: "04",
                  title: "Documentation & Handover",
                  description: "Documentação completa e transferência de conhecimento para as equipes",
                  deliverables: ["Architecture Documentation", "Implementation Guide", "Training Sessions"]
                }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="card-bg p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-400 mb-6">{phase.description}</p>
                    
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20" data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-4">Entregáveis Principais</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Architecture Blueprint",
                      description: "Documentação completa da arquitetura com diagramas e especificações técnicas"
                    },
                    {
                      title: "Implementation Roadmap",
                      description: "Plano detalhado de implementação com marcos e dependências"
                    },
                    {
                      title: "Standards & Guidelines",
                      description: "Padrões de desenvolvimento e diretrizes de governança técnica"
                    }
                  ].map((deliverable, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold mb-2">{deliverable.title}</h4>
                      <p className="text-gray-400 text-sm">{deliverable.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
              Pronto para Modernizar sua Arquitetura?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Transforme seu negócio com arquiteturas modernas, escaláveis e seguras que suportam o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link href="/#contact">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Agendar Consultoria Gratuita
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer themeColor="orange" />
    </div>
  );
}
