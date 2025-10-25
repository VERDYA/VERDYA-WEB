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
