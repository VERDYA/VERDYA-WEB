'use client';

import Link from 'next/link';
import Image from 'next/image';
import TechHeader from '../../../components/layout/TechHeader';
import Footer from '../../../components/layout/Footer';
import { useAOS } from '../../../hooks/useAOS';
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme';
import { usePageReset } from '../../../hooks/usePageReset';

export default function CloudPage() {
  useAOS();
  useScrollbarTheme('blue');
  usePageReset();

  const cloudIcon = (
    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen theme-blue">
      <TechHeader 
        themeColor="blue" 
        techName="Cloud Computing" 
        subtitle="Migração e Infraestrutura em Nuvem"
        icon={cloudIcon}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" data-aos="zoom-in">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                Cloud Computing
              </h1>
              
              <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Migre para a nuvem com segurança e escale seu negócio sem limites
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar Orçamento
                  </button>
                </Link>
                <Link href="/#services">
                  <button className="border border-blue-500 text-blue-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-blue-500/10">
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
              Nossos Serviços de Cloud
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Migração para Cloud",
                  description: "Migração segura e eficiente dos seus sistemas para AWS, Azure ou GCP",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-6.91 1.01L12 16l-3.09-6.99L2 9l6.91-.74L12 2z"/>
                    </svg>
                  )
                },
                {
                  title: "Arquitetura Escalável",
                  description: "Design de infraestrutura que cresce com seu negócio",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zM2 12l6-4v8l-6-4zm20 0l-6-4v8l6-4z"/>
                    </svg>
                  )
                },
                {
                  title: "DevOps & CI/CD",
                  description: "Automação de deploy e integração contínua",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6V4l-8 8 8 8v-2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"/>
                      <circle cx="16" cy="10" r="1"/>
                      <circle cx="16" cy="14" r="1"/>
                    </svg>
                  )
                },
                {
                  title: "Monitoramento 24/7",
                  description: "Monitoramento proativo e alertas em tempo real",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  )
                },
                {
                  title: "Backup e Disaster Recovery",
                  description: "Estratégias robustas de backup e recuperação de desastres",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                    </svg>
                  )
                },
                {
                  title: "Otimização de Custos",
                  description: "Reduza custos com otimização inteligente de recursos",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
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

        {/* Cloud Providers */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Trabalhamos com os Principais Provedores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Amazon Web Services", 
                  logo: (
                    <Image 
                      src="/icons8-amazon-aws-48.png" 
                      alt="AWS Logo" 
                      width={48}
                      height={80}
                      className="object-contain"
                    />
                  ),
                  services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"]
                },
                { 
                  name: "Microsoft Azure", 
                  logo: (
                    <Image 
                      src="/icons8-azure-48.png" 
                      alt="Azure Logo" 
                      width={48}
                      height={80}
                      className="object-contain"
                    />
                  ),
                  services: ["Virtual Machines", "App Service", "SQL Database", "Functions", "CDN"]
                },
                { 
                  name: "Google Cloud Platform", 
                  logo: (
                    <Image 
                      src="/icons8-google-cloud-platform-48.png" 
                      alt="Google Cloud Logo" 
                      width={48}
                      height={80}
                      className="object-contain"
                    />
                  ),
                  services: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "Firebase"]
                }
              ].map((provider, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-4 text-center flex justify-center">{provider.logo}</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{provider.name}</h3>
                  <ul className="space-y-2">
                    {provider.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-400">
                        <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
              Benefícios da Computação em Nuvem para Empresas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div data-aos="fade-right">
                <h3 className="text-2xl font-bold mb-8 text-blue-400">
                  Transforme Seu Negócio com Cloud Computing
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  A migração para a nuvem não é apenas uma mudança tecnológica, é uma transformação estratégica 
                  que revoluciona a forma como sua empresa opera, escala e compete no mercado digital.
                </p>
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl border border-blue-500/20">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">Estatística Importante</h4>
                  <p className="text-gray-300">
                    <span className="text-3xl font-bold text-blue-400">94%</span> das empresas que migraram para a nuvem 
                    relataram melhorias significativas em segurança, e <span className="text-2xl font-semibold text-cyan-400">87%</span> 
                    reduziram custos operacionais em até 40%.
                  </p>
                </div>
              </div>
              
              <div data-aos="fade-left">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">Crescimento Empresarial</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">5x</div>
                      <p className="text-sm text-gray-400">Mais Agilidade</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">60%</div>
                      <p className="text-sm text-gray-400">Menos Custos IT</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                      <p className="text-sm text-gray-400">Disponibilidade</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                      <p className="text-sm text-gray-400">Suporte Global</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Redução de Custos",
                  description: "Elimine gastos com hardware, manutenção e energia. Pague apenas pelo que usar com modelo pay-as-you-go.",
                  icon: (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  ),
                  benefits: ["Sem CAPEX inicial", "Redução de 40-60% em custos IT", "Previsibilidade financeira"],
                  color: "blue"
                },
                {
                  title: "Escalabilidade Automática",
                  description: "Recursos que se ajustam automaticamente à demanda do seu negócio, sem interrupções ou limitações.",
                  icon: (
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  ),
                  benefits: ["Auto-scaling inteligente", "Suporte a picos de tráfego", "Crescimento sem limites"],
                  color: "cyan"
                },
                {
                  title: "Segurança Avançada",
                  description: "Proteção enterprise com criptografia, backup automático e compliance com regulamentações internacionais.",
                  icon: (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  ),
                  benefits: ["Criptografia end-to-end", "Backup automático", "Compliance LGPD/GDPR"],
                  color: "blue"
                },
                {
                  title: "Agilidade e Inovação",
                  description: "Deploy de novas aplicações em minutos, não meses. Acelere seu time-to-market drasticamente.",
                  icon: (
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  ),
                  benefits: ["Deploy em minutos", "CI/CD automatizado", "Ambiente de testes ilimitado"],
                  color: "cyan"
                },
                {
                  title: "Acesso Global",
                  description: "Trabalhe de qualquer lugar com acesso seguro aos seus sistemas e dados, 24/7 disponibilidade.",
                  icon: (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  ),
                  benefits: ["Acesso de qualquer lugar", "Colaboração remota", "CDN global"],
                  color: "blue"
                },
                {
                  title: "Business Continuity",
                  description: "Disaster recovery automático e backup em múltiplas regiões garantem que seu negócio nunca pare.",
                  icon: (
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  ),
                  benefits: ["RTO < 15 minutos", "Backup multi-região", "99.99% uptime SLA"],
                  color: "cyan"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="card-bg p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className={`text-xl font-bold mb-4 ${benefit.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{benefit.description}</p>
                  
                  <div className="space-y-2">
                    {benefit.benefits.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm">
                        <svg className={`w-4 h-4 mr-3 ${benefit.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Calculator Preview */}
            <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20" data-aos="fade-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Calcule o ROI da Sua Migração</h3>
                <p className="text-gray-300 mb-6">
                  Em média, empresas recuperam o investimento em migração para nuvem em 6-12 meses
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">30-50%</div>
                    <p className="text-sm text-gray-400">Redução em Custos de Infraestrutura</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">3-5x</div>
                    <p className="text-sm text-gray-400">Mais Rápido para Deploy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                    <p className="text-sm text-gray-400">Menos Tempo de Manutenção</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">24x</div>
                    <p className="text-sm text-gray-400">Mais Uptime Garantido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
              Pronto para Migrar para a Nuvem?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Nossa equipe especializada garante uma migração segura e eficiente, com zero downtime.
            </p>
            <Link href="/#contact">
              <button 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Agendar Consultoria Gratuita
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer themeColor="blue" />
    </div>
  );
}
