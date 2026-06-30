/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { SERVICES_SUMMARY } from '../data';
import * as Icons from 'lucide-react';

interface ServicosCatalogViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const ServicosCatalogView: React.FC<ServicosCatalogViewProps> = ({ onNavigate }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveCard(null);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Header */}
      <section className="bg-[#123C73] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Serviços" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block mb-3">CATÁLOGO DE SOLUÇÕES</span>
            <h1 className="font-sans font-bold text-3xl lg:text-5xl tracking-tight leading-tight mb-4">
              Nossos Serviços
            </h1>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
              Soluções completas e integradas de engenharia de energia elétrica e infraestrutura técnica de média e baixa tensão para variados setores.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Atuação Intro */}
      <section className="py-16 px-6 lg:px-12 border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-4">
              Nossa Atuação
            </h2>
            <p className="text-sm lg:text-base text-[#6F7782] leading-relaxed mb-6">
              A RE Engenharia Elétrica executa serviços com profundo domínio de normas construtivas. Nossos empreendimentos cobrem toda a esteira do ciclo comercial e construtivo, asseverando segurança elétrica desde o planejamento inicial da demanda, dimensionamento técnico de cubículos, comissionamento e manutenção e ensaios periódicos. 
            </p>
            <p className="text-sm lg:text-base text-[#6F7782] leading-relaxed">
              Toda a entrega é amparada por Diários de Obras atualizados, engenheiros residentes capacitados e rigorosa conformidade com as diretivas das concessionárias locais.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Solutions */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-8">
            Nossas Soluções Técnicas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {SERVICES_SUMMARY.map((srv) => {
               const IconComponent = (Icons as any)[srv.iconName] || Icons.Cpu;
               return (
                 <div
                   key={srv.id}
                   className="bg-[#F7F8FA] border border-[#C9CDD3] p-6 rounded-lg transition-all shadow-xs hover:border-[#123C73] flex flex-col justify-between"
                 >
                   <div>
                     <div className="text-[#123C73] mb-4">
                       <IconComponent className="w-8 h-8 stroke-[1.5]" />
                     </div>
                     <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] mb-2 leading-snug">
                       {srv.title}
                     </h3>
                     <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed mb-6">
                       {srv.description}
                     </p>
                   </div>
                   <button
                     onClick={() => onNavigate(srv.id)}
                     className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C73] hover:text-[#D62828] uppercase tracking-wider transition-colors"
                   >
                     Explorar Serviço
                     <span>→</span>
                   </button>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Por que escolher a RE Engenharia Elétrica */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F8FA] border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">CONFIABILIDADE OPERACIONAL</span>
            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight">
              Por Que Escolher a RE Engenharia Elétrica?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '30+ Anos de Sólida Experiência',
                desc: 'Com mais de 30 anos no mercado nacional, conhecemos de perto os meandros das instalações críticas.'
              },
              {
                title: 'Rigor Técnico e Normativo',
                desc: 'Garantimos obediência estrita às normas regulamentares ABNT e NR (NBR 5410, 14039, 5419, NR-10 e NR-35).'
              },
              {
                title: 'Ferramental Próprio de Ponta',
                desc: 'Utilizamos softwares avançados e instrumentos calibrados RBC para diagnósticos precisos e simulações em 3D.'
              },
              {
                title: 'Laudos de Responsabilidade ART',
                desc: 'Emitimos Anotação de Responsabilidade Técnica perante o CREA-SP de todas as etapas e escopos assumidos.'
              }
            ].map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div 
                  key={index} 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(index);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveCard(index);
                    }
                  }}
                  tabIndex={0}
                  className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer group outline-none ${
                    isActive 
                      ? 'bg-[#123C73] border-[#123C73] text-white shadow-md scale-[1.02]' 
                      : 'bg-white border-[#C9CDD3] text-[#2B2B2B] hover:bg-[#123C73] hover:border-[#123C73] hover:text-white hover:scale-[1.02] hover:shadow-md focus:bg-[#123C73] focus:border-[#123C73] focus:text-white focus:scale-[1.02] focus:shadow-md'
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-2 transition-colors duration-300 ${
                    isActive ? 'text-[#D62828]' : 'text-[#D62828] group-hover:text-red-400 group-focus:text-red-400'
                  }`}>0{index + 1}.</span>
                  <h4 className={`font-sans font-bold text-sm lg:text-base mb-2 leading-snug transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#2B2B2B] group-hover:text-white group-focus:text-white'
                  }`}>{item.title}</h4>
                  <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-slate-200' : 'text-[#6F7782] group-hover:text-slate-200 group-focus:text-slate-200'
                  }`}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#123C73] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Serviços CTA" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
          <h2 className="font-sans font-bold text-2xl lg:text-4xl tracking-tight mb-6">
            Solicite um orçamento e conte com nossa experiência
          </h2>
          <p className="text-sm lg:text-base text-slate-200 leading-relaxed mb-8">
            Nossa equipe técnica e comercial está perfeitamente preparada para formular propostas assertivas de engenharia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase shadow-lg"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase"
            >
              Falar com Nossa Equipe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
