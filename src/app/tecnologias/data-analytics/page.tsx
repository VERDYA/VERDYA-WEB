'use client';

import Link from 'next/link';
import TechHeader from '../../../components/layout/TechHeader';
import Footer from '../../../components/layout/Footer';
import { useAOS } from '../../../hooks/useAOS';
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme';
import { usePageReset } from '../../../hooks/usePageReset';

export default function DataAnalyticsPage() {
  useAOS();
  useScrollbarTheme('teal');
  usePageReset();

  const analyticsIcon = (
    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
      <path d="M7 17h2v-6H7v6zm4 0h2v-10h-2v10zm4 0h2v-4h-2v4z"/>
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen theme-teal">
      <TechHeader 
        themeColor="teal" 
        techName="Data Analytics" 
        subtitle="Análise de Dados e BI"
        icon={analyticsIcon}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-900/20 to-blue-900/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" data-aos="zoom-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Data Analytics & BI
              </h1>
              
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Business Intelligence, dashboards interativos e análise preditiva com machine learning
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar Orçamento
                  </button>
                </Link>
                <Link href="/#services">
                  <button className="border border-teal-500 text-teal-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-teal-500/10">
                    Ver Outros Serviços
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Nossos Serviços de Data Analytics
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Intelligence",
                  description: "Dashboards executivos e relatórios inteligentes para tomada de decisão",
                  icon: (
                    <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
                    </svg>
                  )
                },
                {
                  title: "Data Warehousing",
                  description: "Estruturação e organização de dados para análises avançadas",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,6V10H8V6H4M10,6V10H14V6H10M16,6V10H20V6H16M4,12V16H8V12H4M4,18V20H8V18H4M10,12V16H14V12H10M10,18V20H14V18H10M16,12V20H20V12H16Z"/>
                    </svg>
                  )
                },
                {
                  title: "Machine Learning",
                  description: "Modelos preditivos e análise de padrões com IA",
                  icon: (
                    <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2L13.09,8.26L20,9L13.09,9.74L12,16L10.91,9.74L4,9L10.91,8.26L12,2Z"/>
                    </svg>
                  )
                },
                {
                  title: "Data Visualization",
                  description: "Visualizações interativas e dashboards personalizados",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                    </svg>
                  )
                },
                {
                  title: "ETL Processes",
                  description: "Extração, transformação e carregamento de dados automatizado",
                  icon: (
                    <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6V4l-8 8 8 8v-2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"/>
                      <circle cx="16" cy="10" r="1"/>
                      <circle cx="16" cy="14" r="1"/>
                    </svg>
                  )
                },
                {
                  title: "Real-time Analytics",
                  description: "Análise de dados em tempo real com alertas automáticos",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
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

        {/* Analytics Solutions Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Soluções Analytics Avançadas
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Transformamos dados brutos em insights estratégicos que impulsionam decisões de negócio
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Data Science & Machine Learning",
                  description: "Modelos preditivos e algoritmos de IA para identificar padrões e tendências futuras",
                  features: ["Análise Preditiva", "Classificação e Clustering", "Processamento de Linguagem Natural", "Recomendação Inteligente"],
                  icon: (
                    <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Business Intelligence Executivo",
                  description: "Dashboards estratégicos para alta gestão com KPIs críticos do negócio",
                  features: ["Executive Dashboards", "KPI Monitoring", "Scorecard Estratégico", "Alertas Automáticos"],
                  icon: (
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Analytics em Tempo Real",
                  description: "Monitoramento contínuo de métricas críticas com alertas instantâneos",
                  features: ["Streaming Analytics", "Alertas Inteligentes", "Dashboards Live", "Anomaly Detection"],
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Data Governance & Quality",
                  description: "Governança completa de dados com qualidade, segurança e compliance",
                  features: ["Data Quality Management", "Master Data Management", "Data Lineage", "Compliance LGPD"],
                  icon: (
                    <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((solution, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Analytics Benefits */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Impacto nos Resultados
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Veja como a análise de dados pode transformar a performance do seu negócio
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Decisões Baseadas em Dados",
                  description: "Eliminação de suposições com insights fundamentados em evidências reais",
                  impact: "85% melhoria na precisão",
                  icon: (
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Redução de Custos",
                  description: "Identificação de ineficiências e oportunidades de otimização operacional",
                  impact: "30% redução de custos",
                  icon: (
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                {
                  title: "Aumento de Receita",
                  description: "Identificação de novas oportunidades e otimização de estratégias comerciais",
                  impact: "25% crescimento médio",
                  icon: (
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                {
                  title: "Previsão de Tendências",
                  description: "Antecipação de cenários futuros para planejamento estratégico",
                  impact: "90% precisão preditiva",
                  icon: (
                    <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )
                },
                {
                  title: "Experiência do Cliente",
                  description: "Personalização e melhoria contínua da jornada do cliente",
                  impact: "40% melhoria satisfação",
                  icon: (
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: "Vantagem Competitiva",
                  description: "Insights únicos que diferenciam sua empresa no mercado",
                  impact: "60% mais competitivo",
                  icon: (
                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold ml-3 text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 px-4 py-2 rounded-lg border border-teal-500/20">
                    <span className="text-sm font-semibold text-teal-300">{benefit.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Analytics Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Metodologia Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Processo estruturado para extrair máximo valor dos seus dados
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Data Discovery",
                  description: "Mapeamento e auditoria completa dos dados disponíveis",
                  
                },
                {
                  step: "02",
                  title: "Data Engineering",
                  description: "Limpeza, transformação e estruturação dos dados",
                },
                {
                  step: "03",
                  title: "Analytics Development",
                  description: "Criação de modelos, dashboards e relatórios",
                
                },
                {
                  step: "04",
                  title: "Deployment & Training",
                  description: "Implementação e capacitação das equipes",
                  
                }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="card-bg p-6 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-400 mb-4">{phase.description}</p>
                    
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Casos de Uso por Setor
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Soluções personalizadas para diferentes segmentos de mercado
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  sector: "Varejo & E-commerce",
                  useCases: ["Análise de Comportamento", "Otimização de Preços", "Gestão de Estoque", "Recomendação de Produtos"],
                  color: "from-teal-500 to-blue-500",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  )
                },
                {
                  sector: "Financeiro",
                  useCases: ["Credit Scoring", "Detecção de Fraudes", "Risk Management", "Análise de Portfólio"],
                  color: "from-teal-600 to-cyan-500",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                {
                  sector: "Saúde",
                  useCases: ["Análise Epidemiológica", "Otimização de Recursos", "Predictive Healthcare", "Gestão de Qualidade"],
                  color: "from-blue-500 to-teal-500",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  sector: "Manufatura",
                  useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Performance Analytics"],
                  color: "from-cyan-500 to-blue-600",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  sector: "Marketing",
                  useCases: ["Customer Segmentation", "Campaign ROI", "Attribution Modeling", "Lifetime Value"],
                  color: "from-teal-400 to-blue-500",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  )
                },
                {
                  sector: "Logística",
                  useCases: ["Route Optimization", "Demand Forecasting", "Inventory Analytics", "Performance KPIs"],
                  color: "from-blue-600 to-teal-600",
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  )
                }
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{useCase.sector}</h3>
                  
                  <div className="space-y-2">
                    {useCase.useCases.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-blue-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
              Transforme Dados em Vantagem Competitiva
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Descubra insights ocultos nos seus dados e tome decisões estratégicas baseadas em evidências reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link href="/#contact">
                <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Agendar Consultoria Gratuita
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer themeColor="teal" />
    </div>
  );
}
