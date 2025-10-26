'use client';

import Link from 'next/link';
import TechHeader from '../../../components/layout/TechHeader';
import Footer from '../../../components/layout/Footer';
import { useAOS } from '../../../hooks/useAOS';
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme';
import { usePageReset } from '../../../hooks/usePageReset';

export default function AutomationPage() {
  useAOS();
  useScrollbarTheme('indigo');
  usePageReset();

  const automationIcon = (
    <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 6V4l-8 8 8 8v-2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"/>
      <circle cx="16" cy="10" r="2"/>
      <circle cx="16" cy="14" r="2"/>
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen theme-indigo">
      <TechHeader 
        themeColor="indigo" 
        techName="Automação de Processos" 
        subtitle="RPA e Otimização"
        icon={automationIcon}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" data-aos="zoom-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Automação & RPA
              </h1>
              
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Automatize processos repetitivos e libere sua equipe para atividades estratégicas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar Orçamento
                  </button>
                </Link>
                <Link href="/#services">
                  <button className="border border-indigo-500 text-indigo-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-indigo-500/10">
                    Ver Outros Serviços
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Por que Escolher RPA?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                A automação robótica de processos transforma operações manuais em fluxos eficientes e confiáveis
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Redução de Custos",
                  description: "Economia de até 80% em processos automatizados com ROI em 6-12 meses",
                  icon: (
                    <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  stat: "80%",
                  metric: "economia"
                },
                {
                  title: "Aumento de Produtividade",
                  description: "Processos executados 5x mais rápido que operação manual",
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  stat: "5x",
                  metric: "mais rápido"
                },
                {
                  title: "Zero Erros",
                  description: "Eliminação completa de erros humanos em tarefas repetitivas",
                  icon: (
                    <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  stat: "100%",
                  metric: "precisão"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 text-center hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">{benefit.stat}</div>
                  <div className="text-sm text-gray-400 mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Mockup Section */}
        <section className="py-20 bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Painel de Controle em Tempo Real
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitore todos os processos automatizados com visibilidade completa
              </p>
            </div>

            {/* Dashboard Interface */}
            <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              {/* Browser Window Frame */}
              <div className="bg-gray-900 rounded-t-2xl border border-gray-700 p-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-gray-800 rounded px-3 py-1 ml-4">
                    <span className="text-xs text-gray-500">dashboard.verdya.com.br</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-x border-b border-gray-700 rounded-b-2xl p-6">
                
                {/* Top Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Processos Ativos</div>
                    <div className="text-2xl font-bold text-white">127</div>
                    <div className="text-xs text-green-400 mt-1">+12% hoje</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Taxa de Sucesso</div>
                    <div className="text-2xl font-bold text-white">99.8%</div>
                    <div className="text-xs text-green-400 mt-1">+0.3%</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Tempo Economizado</div>
                    <div className="text-2xl font-bold text-white">2.4k</div>
                    <div className="text-xs text-gray-400 mt-1">horas/mês</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Custo Reduzido</div>
                    <div className="text-2xl font-bold text-white">R$ 180k</div>
                    <div className="text-xs text-green-400 mt-1">-24% vs manual</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Activity Chart */}
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-white">Atividade dos Bots</h3>
                      <span className="text-xs text-gray-400">Últimas 24h</span>
                    </div>
                    <div className="flex items-end justify-between h-32 gap-2">
                      {[65, 78, 82, 70, 85, 92, 88, 95, 90, 87, 93, 98].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div 
                            className="bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t transition-all hover:from-indigo-500 hover:to-purple-400"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>00h</span>
                      <span>12h</span>
                      <span>23h</span>
                    </div>
                  </div>

                  {/* Process Status */}
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-white">Status dos Processos</h3>
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Todos Operacionais</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Conciliação Bancária", status: "Executando", progress: 78 },
                        { name: "Processamento de NF", status: "Concluído", progress: 100 },
                        { name: "Validação de Dados", status: "Executando", progress: 45 },
                        { name: "Geração de Relatórios", status: "Aguardando", progress: 0 }
                      ].map((process, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">{process.name}</span>
                            <span className="text-xs text-gray-500">{process.status}</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${process.progress === 100 ? 'bg-green-500' : 'bg-indigo-500'} transition-all`}
                              style={{ width: `${process.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity Log */}
                <div className="mt-6 bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">Atividade Recente</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { time: "14:32", action: "Bot-Finance-01 processou 340 faturas", status: "success" },
                      { time: "14:28", action: "Bot-HR-03 completou onboarding de 5 funcionários", status: "success" },
                      { time: "14:15", action: "Bot-Support-02 respondeu 128 tickets", status: "success" },
                      { time: "14:02", action: "Bot-Data-05 validou 2.4k registros", status: "success" }
                    ].map((log, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-700/30 rounded transition-colors">
                        <span className="text-gray-500 font-mono text-xs">{log.time}</span>
                        <div className={`w-2 h-2 rounded-full ${log.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-gray-300">{log.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RPA Solutions Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Soluções de Automação
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Implementamos as melhores tecnologias RPA para transformar seus processos de negócio
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automação de Processos Financeiros",
                  description: "Automatização completa de conciliações, faturamento, contas a pagar e receber",
                  features: ["Conciliação Bancária", "Processamento de Faturas", "Controle de Fluxo de Caixa", "Relatórios Financeiros"],
                  icon: (
                    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                {
                  title: "Automação de RH",
                  description: "Processos de recrutamento, onboarding e gestão de funcionários automatizados",
                  features: ["Triagem de Currículos", "Onboarding Digital", "Gestão de Benefícios", "Relatórios de RH"],
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Automação de Atendimento",
                  description: "Chatbots inteligentes e automação de suporte ao cliente",
                  features: ["Chatbots com IA", "Classificação de Tickets", "Respostas Automáticas", "Escalação Inteligente"],
                  icon: (
                    <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )
                },
                {
                  title: "Processamento de Documentos",
                  description: "OCR avançado e extração inteligente de dados de documentos",
                  features: ["OCR com IA", "Classificação de Documentos", "Extração de Dados", "Validação Automática"],
                  icon: (
                    <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                }
              ].map((solution, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Tecnologias RPA
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Utilizamos as principais plataformas do mercado para garantir máxima eficiência
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "UiPath",
                  description: "Plataforma líder em RPA empresarial",
                  logo: "🤖",
                  color: "from-orange-500 to-red-500"
                },
                {
                  name: "Automation Anywhere",
                  description: "RPA inteligente com IA integrada",
                  logo: "⚡",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  name: "Blue Prism",
                  description: "Automação robusta para empresas",
                  logo: "🔷",
                  color: "from-blue-600 to-indigo-600"
                },
                {
                  name: "Microsoft Power Automate",
                  description: "Integração nativa com Office 365",
                  logo: "⚙️",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="card-bg p-6 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 text-center"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {tech.logo}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Automation Benefits */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Impacto nos Negócios
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Veja os resultados reais que a automação pode trazer para sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Economia de Tempo",
                  description: "Liberação de funcionários para atividades estratégicas e criativas",
                  impact: "70% redução em tempo manual",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Qualidade Consistente",
                  description: "Eliminação de variabilidade e erros humanos em processos",
                  impact: "99.9% precisão garantida",
                  icon: (
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Escalabilidade",
                  description: "Capacidade de processar volumes maiores sem contratar pessoal",
                  impact: "300% aumento de capacidade",
                  icon: (
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  )
                },
                {
                  title: "Disponibilidade 24/7",
                  description: "Processos executados continuamente, inclusive fora do horário comercial",
                  impact: "24h operação contínua",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )
                },
                {
                  title: "Compliance Automático",
                  description: "Aderência consistente a regulamentações e políticas internas",
                  impact: "100% conformidade regulatória",
                  icon: (
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "ROI Rápido",
                  description: "Retorno do investimento típico entre 6 a 12 meses",
                  impact: "ROI em 6-12 meses",
                  icon: (
                    <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold ml-3 text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 rounded-lg border border-indigo-500/20">
                    <span className="text-sm font-semibold text-indigo-300">{benefit.impact}</span>
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
                Processo de Implementação
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Metodologia comprovada para garantir sucesso na automação dos seus processos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Descoberta",
                  description: "Análise detalhada dos processos atuais e identificação de oportunidades",
                },
                {
                  step: "02", 
                  title: "Prova de Conceito",
                  description: "Desenvolvimento de piloto para validar viabilidade e ROI",
                },
                {
                  step: "03",
                  title: "Desenvolvimento",
                  description: "Criação dos bots de automação com testes rigorosos",
                },
                {
                  step: "04",
                  title: "Deploy & Suporte",
                  description: "Implementação em produção com monitoramento contínuo",
                }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="card-bg p-6 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-400 mb-4">{phase.description}</p>
                   
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                Casos de Sucesso
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Veja como transformamos operações em diferentes setores
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  sector: "Financeiro",
                  company: "Banco Regional",
                  challenge: "Conciliação manual de 50k transações/dia",
                  solution: "RPA para conciliação automática",
                  results: ["95% redução tempo", "Zero erros", "R$ 2M economia/ano"],
                },
                {
                  sector: "Varejo",
                  company: "E-commerce Nacional",
                  challenge: "Processamento manual de pedidos",
                  solution: "Automação completa do fulfillment",
                  results: ["80% mais rápido", "24/7 operação", "50% menos custos"],
                },
                {
                  sector: "Saúde",
                  company: "Hospital Privado",
                  challenge: "Agendamento e cobrança manual",
                  solution: "RPA para processos administrativos",
                  results: ["70% redução tempo", "99% precisão", "Melhor experiência"],
                }
              ].map((caseStudy, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    {caseStudy.sector}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{caseStudy.company}</h3>
                  <p className="text-gray-400 mb-4">{caseStudy.challenge}</p>
                  <p className="text-indigo-400 font-semibold mb-4">{caseStudy.solution}</p>
                  
                  <div className="space-y-2 mb-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
              Pronto para Automatizar seus Processos?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Identifique oportunidades de automação na sua empresa e calcule o ROI potencial com nossa análise gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link href="/#contact">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Análise Gratuita de Processos
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer themeColor="indigo" />
    </div>
  );
}
