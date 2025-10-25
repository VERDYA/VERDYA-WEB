'use client';

import { useState } from 'react';
import { COMPANY_CONFIG } from '../../config/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
            Agende sua Consultoria
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-lime-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Agende uma consultoria gratuita e descubra como podemos evoluir digitalmente sua empresa. 
            Cada projeto é único e negociado individualmente para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulário de Contato */}
          <div className="card-bg p-8 rounded-2xl border border-gray-700" data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Conte-nos sobre seu projeto e objetivos..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition-colors duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8" data-aos="fade-left" data-aos-duration="1000">
            {/* WhatsApp 
            <div className="card-bg p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-green-500/10 text-green-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                  <p className="text-gray-400">Agendar Consultoria</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Olá! Gostaria de agendar uma consultoria para discutir a transformação digital da minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Agendar Consultoria
              </a>
              <p className="text-xs text-gray-400 mt-2 text-center">Via WhatsApp</p>
            </div>
            */}

            {/* Telefone */}
            <div className="card-bg p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-lime-500/10 text-lime-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">E-mail</h4>
                  <p className="text-gray-400">verdya.co@gmail.com</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Envie-nos um e-mail detalhando seu projeto e objetivos. Responderemos em até 24 horas.
              </p>
            </div>

            {/* Horário de Trabalho */}
            <div className="card-bg p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-lime-500/10 text-lime-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Horário de Atendimento</h4>
                  <p className="text-gray-400">{COMPANY_CONFIG.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios da Consultoria */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            Por que Agendar uma Consultoria?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="card-bg p-6 rounded-2xl border border-gray-700 text-center hover:border-lime-500 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="bg-lime-500/10 text-lime-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-lime-400">Consultoria Gratuita</h4>
              <p className="text-gray-400">
                Primeira consultoria sem custo para entender suas necessidades e objetivos.
              </p>
            </div>

            <div
              className="card-bg p-6 rounded-2xl border border-gray-700 text-center hover:border-lime-500 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="bg-lime-500/10 text-lime-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-lime-400">Análise Personalizada</h4>
              <p className="text-gray-400">
                Cada projeto é analisado individualmente para criar soluções sob medida.
              </p>
            </div>

            <div
              className="card-bg p-6 rounded-2xl border border-gray-700 text-center hover:border-lime-500 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="bg-lime-500/10 text-lime-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-lime-400">Proposta Customizada</h4>
              <p className="text-gray-400">
                Proposta personalizada baseada nas necessidades específicas do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 