'use client';

import Link from 'next/link';
import Head from 'next/head';
import TechHeader from '../../../components/layout/TechHeader';
import Footer from '../../../components/layout/Footer';
import StructuredData from '../../../components/SEO/StructuredData';
import { useAOS } from '../../../hooks/useAOS';
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme';
import { usePageReset } from '../../../hooks/usePageReset';
import { SEO_CONFIG, generateBreadcrumbSchema } from '../../../config/seo';

export default function SolucoesIAPage() {
  useAOS();
  useScrollbarTheme('purple');
  usePageReset();

  const iaIcon = (
    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
      <path d="M19.5 3.5L20.4 6.5L23.5 7.4L20.4 8.3L19.5 11.3L18.6 8.3L15.5 7.4L18.6 6.5L19.5 3.5Z" />
      <path d="M6.5 17.5L7.4 20.5L10.5 21.4L7.4 22.3L6.5 25.3L5.6 22.3L2.5 21.4L5.6 20.5L6.5 17.5Z" />
    </svg>
  );

  // Schema específico para IA Generativa
  const iaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Soluções com IA Generativa",
    "description": "Soluções avançadas com ChatGPT, Claude e modelos de linguagem para automação inteligente e transformação de processos empresariais.",
    "provider": {
      "@type": "Organization",
      "name": "VERDYA"
    },
    "category": "Artificial Intelligence",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de IA Generativa",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Implementação ChatGPT Empresarial"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Automação com Claude AI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Chatbots Inteligentes"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tecnologias", url: "/#tecnologias" },
    { name: "IA Generativa", url: "/tecnologias/ia-generativa" }
  ]);

  return (
    <div className="bg-gray-900 text-white min-h-screen theme-purple">
      <Head>
        <title>{SEO_CONFIG.iaGenerativa.title}</title>
        <meta name="description" content={SEO_CONFIG.iaGenerativa.description} />
        <meta name="keywords" content={SEO_CONFIG.iaGenerativa.keywords.join(', ')} />
        <link rel="canonical" href={`https://verdya.com.br${SEO_CONFIG.iaGenerativa.canonicalUrl}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={SEO_CONFIG.iaGenerativa.title} />
        <meta property="og:description" content={SEO_CONFIG.iaGenerativa.description} />
        <meta property="og:url" content={`https://verdya.com.br${SEO_CONFIG.iaGenerativa.canonicalUrl}`} />
        <meta property="og:image" content="https://verdya.com.br/og-ia-generativa.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={SEO_CONFIG.iaGenerativa.title} />
        <meta name="twitter:description" content={SEO_CONFIG.iaGenerativa.description} />
        <meta name="twitter:image" content="https://verdya.com.br/og-ia-generativa.jpg" />
      </Head>
      
      {/* Structured Data */}
      <StructuredData schema={[iaSchema, breadcrumbSchema]} />
      <TechHeader 
        themeColor="purple" 
        techName="Soluções com IA" 
        subtitle="Inteligência Artificial Transformando Negócios"
        icon={iaIcon}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" data-aos="zoom-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Soluções com IA
              </h1>
              
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Transforme seu negócio com Inteligência Artificial: desde automação inteligente até insights preditivos
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar Orçamento
                  </button>
                </Link>
                <Link href="/#services">
                  <button className="border border-purple-500 text-purple-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-purple-500/10">
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
              Nossas Soluções de Inteligência Artificial
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "IA Generativa",
                  description: "Chatbots inteligentes, geração de conteúdo e assistentes virtuais com GPT-4 e Claude",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  )
                },
                {
                  title: "Machine Learning",
                  description: "Modelos preditivos, classificação e regressão para otimização de processos",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21Z"/>
                    </svg>
                  )
                },
                {
                  title: "Computer Vision",
                  description: "Reconhecimento de imagens, detecção de objetos e análise visual automatizada",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                    </svg>
                  )
                },
                {
                  title: "Processamento de Linguagem Natural",
                  description: "Análise de sentimentos, extração de entidades e tradução automática",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4A2,2 0 0,0 20,2Z"/>
                    </svg>
                  )
                },
                {
                  title: "IA Preditiva",
                  description: "Previsões de vendas, manutenção preditiva e análise de riscos",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                    </svg>
                  )
                },
                {
                  title: "Automação Inteligente",
                  description: "RPA com IA, workflow automático e tomada de decisão inteligente",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                    </svg>
                  )
                },
                {
                  title: "Análise de Dados com IA",
                  description: "Business Intelligence avançado, descoberta de padrões e insights automáticos",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,17H7V10H9V17M13,17H11V7H13V17M17,17H15V13H17V17M19.5,19.5H4.5V5.5H19.5V19.5M19.5,3.5H4.5C3.4,3.5 2.5,4.4 2.5,5.5V19.5C2.5,20.6 3.4,21.5 4.5,21.5H19.5C20.6,21.5 21.5,20.6 21.5,19.5V5.5C21.5,4.4 20.6,3.5 19.5,3.5Z"/>
                    </svg>
                  )
                },
                {
                  title: "IA Conversacional",
                  description: "Assistentes virtuais avançados, chatbots contextuais e interfaces de voz",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"/>
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
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

        {/* AI Benefits Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Principais Benefícios da IA para Empresas
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Descubra como a Inteligência Artificial pode revolucionar seus processos de negócio, 
                aumentar a eficiência e gerar vantagem competitiva sustentável.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Automação de Processos",
                  description: "Reduza até 80% do tempo gasto em tarefas repetitivas com automação inteligente que aprende e se adapta aos seus fluxos de trabalho.",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  impact: "80% menos tempo em tarefas manuais"
                },
                {
                  title: "Decisões Baseadas em Dados",
                  description: "Transforme dados em insights acionáveis com análises preditivas avançadas que antecipam tendências e oportunidades de mercado.",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  impact: "95% de precisão em previsões"
                },
                {
                  title: "Atendimento ao Cliente 24/7",
                  description: "Ofereça suporte instantâneo e personalizado com chatbots inteligentes que resolvem 90% das consultas automaticamente.",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                    </svg>
                  ),
                  impact: "90% de resolução automática"
                },
                {
                  title: "Redução de Custos Operacionais",
                  description: "Otimize recursos e minimize desperdícios com algoritmos que identificam ineficiências e sugerem melhorias em tempo real.",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  impact: "30-50% de redução em custos"
                },
                {
                  title: "Personalização em Escala",
                  description: "Crie experiências únicas para cada cliente usando machine learning para entender preferências e comportamentos individuais.",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  impact: "300% aumento no engajamento"
                },
                {
                  title: "Inovação Acelerada",
                  description: "Acelere o desenvolvimento de produtos e serviços com IA generativa que cria protótipos, testa hipóteses e gera soluções criativas.",
                  icon: (
                    <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  impact: "50% mais rápido ao mercado"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border border-purple-500/30">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-lg border border-purple-500/20">
                      <span className="text-sm font-semibold text-purple-300"> {benefit.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Statistics */}
            <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/20" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Retorno Sobre Investimento em IA</h3>
                <p className="text-gray-300">Empresas que implementam IA relatam resultados impressionantes em eficiência e crescimento</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3-5x</div>
                  <div className="text-sm text-gray-400">ROI médio em 2 anos</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-pink-400 mb-2">40%</div>
                  <div className="text-sm text-gray-400">Aumento na produtividade</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-sm text-gray-400">Melhoria na satisfação do cliente</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-pink-400 mb-2">80%</div>
                  <div className="text-sm text-gray-400">Redução em erros operacionais</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
              Pronto para Implementar IA em Seu Negócio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Transforme sua empresa com soluções de Inteligência Artificial personalizadas e de alta performance.
            </p>
            <Link href="/#contact">
              <button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Agendar Consultoria Gratuita
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer themeColor="purple" />
    </div>
  );
}
