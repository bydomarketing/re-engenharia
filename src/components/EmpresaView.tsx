/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActivePage } from '../types';
import { ABOUT_US, CORE_DIFFERENTIALS } from '../data';
import * as Icons from 'lucide-react';

const ceoGilberto = 'https://res.cloudinary.com/dplhygs4v/image/upload/v1781911604/RE_ENGENHARIA_ELETRICA_GILBERTO_c2zchb.png';

interface EmpresaViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const EmpresaView: React.FC<EmpresaViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero / Intro Header */}
      <section className="bg-[#123C73] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Corporativo" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block mb-3">CONFIABILIDADE CORPORATIVA</span>
            <h1 className="font-sans font-bold text-3xl lg:text-5xl tracking-tight leading-tight mb-4">
              Sobre a RE Engenharia Elétrica
            </h1>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
              Profissionais dedicados a prover soluções e infraestrutura de energia com garantia civil, alto rigor normativo e responsabilidade profissional.
            </p>
          </div>
        </div>
      </section>

      {/* 1. QUEM SOMOS */}
      <section className="py-16 px-6 lg:px-12 border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Coluna Esquerda: Conteúdo */}
            <div className="lg:col-span-7">
              <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-6">
                Quem Somos
              </h2>
              <div className="text-sm lg:text-base text-[#2B2B2B] leading-relaxed space-y-6">
                <p>{ABOUT_US.quemSomos}</p>
                <p>
                  Trabalhamos sob a premissa de que sistemas de fornecimento elétrico de alta potência não toleram amadorismo. Por isso, de projetos luminotécnicos computadorizados ou ensaios térmicos preditivos, tudo é submetido a rigorosos testes por instrumentos calibrados, gerando relatórios as-built cristalinos para assegurar que a planta funcione de maneira ininterrupta.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Fotografia do Fundador/CEO */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[320px]">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={ceoGilberto}
                    alt="Gilberto Teixeira - Fundador e Responsável Técnico"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-sans font-black text-xl text-[#123C73] leading-tight mb-1">
                    Gilberto Teixeira
                  </h3>
                  <p className="text-xs text-[#6F7782] font-semibold mb-3">
                    Fundador e Responsável Técnico
                  </p>
                  <span className="inline-block text-[10px] text-[#123C73] font-bold font-mono tracking-wider bg-[#123C73]/5 border border-[#123C73]/10 px-3 py-1 rounded-full">
                    CREA-SP
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NOSSA HISTÓRIA */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F8FA] border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-4">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">HISTÓRICO ESTÁVEL</span>
              <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-4">
                Nossa História: Três Décadas de Engenharia
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed">
                Nossa trajetória é marcada pela solidez e compromisso inarredável com o desenvolvimento da infraestrutura de energia nacional.
              </p>
            </div>

            {/* Right Paragraphs Content */}
            <div className="lg:col-span-8 space-y-6 text-[#2B2B2B] text-sm lg:text-base leading-relaxed font-normal">
              <p className="border-l-4 border-[#D62828] pl-4 italic text-slate-600 font-medium">
                Desde a nossa fundação em <strong className="text-[#123C73]">1996</strong> em São Paulo, iniciamos nossa jornada focados em consultoria técnica de altíssimo nível e projetos estruturais elétricos prediais com máxima exatidão matemática.
              </p>
              <p>
                Com o amadurecimento operacional, em <strong className="text-[#123C73]">2004</strong> consolidamos a nossa expansão de escopo para montagens eletromecânicas complexas e a execução direta de grandes obras de instalações industriais por todo o território nacional.
              </p>
              <p>
                No ano de <strong className="text-[#123C73]">2010</strong>, alcançamos a certificação rigorosa de nossos processos corporativos, estruturando o fornecimento de engenharia especializada de alta criticidade para hospitais, maternidades e complexos de saúde. 
              </p>
              <p>
                Prosseguindo com inovação tecnológica contínua, em <strong className="text-[#123C73]">2018</strong> equipamos nosso corpo de engenharia com termografia infravermelha de alta sensibilidade e analisadores de harmônicas calibrados RBC de última geração.
              </p>
              <p className="bg-white p-5 rounded-lg border border-[#C9CDD3] shadow-xs">
                Chegando a <strong className="text-[#123C73]">2026</strong>, celebramos a marca histórica de mais de <strong className="text-[#D62828]">500 grandes obras concluídas</strong>, consolidando de vez a RE Engenharia Elétrica entre as referências mais absolutas e seguras do setor elétrico do país.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NOSSOS PILARES */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">DIRETRIZES FUNDAMENTAIS</span>
            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight">
              Nossos Pilares Corporativos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_DIFFERENTIALS.map((pilar, index) => (
              <div key={index} className="bg-[#F7F8FA] border border-[#C9CDD3] p-6 rounded-lg shadow-sm">
                <div className="text-[#123C73] mb-4">
                  <Icons.Award className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-sans font-bold text-sm lg:text-base text-[#2B2B2B] mb-2">
                  {pilar.title}
                </h3>
                <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CERTIFICAÇÕES E RESPONSABILIDADE TÉCNICA */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F8FA] border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">QUALIFICAÇÕES E LEIS</span>
              <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-6">
                Certificações e Responsabilidade Técnica
              </h2>
              <p className="text-sm lg:text-base text-[#6F7782] leading-relaxed mb-6">
                Assegurar a legalidade de suas instalações industriais e prediais é um compromisso ético e civil. Emitimos Anotação de Responsabilidade Técnica (ART) sob certidão expedida e regular perante o CREA-SP de todas as fases contratadas, prestando contas de forma cristalina.
              </p>
              <div className="bg-white p-4 rounded border border-[#C9CDD3] text-xs font-mono text-[#2B2B2B]">
                <span className="text-[#D62828] font-bold">REGISTRO CREA-SP:</span> Nº 024-5231-SP (Ativo e Autorizado)
              </div>
            </div>
            <div className="lg:col-span-6 bg-white p-8 rounded-xl border border-[#C9CDD3] shadow-md">
              <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] mb-6 flex items-center gap-2 border-b border-[#C9CDD3] pb-3">
                <Icons.ShieldCheck className="text-[#123C73] w-5 h-5" />
                Nossas Credenciais Técnicas
              </h3>
              <ul className="space-y-4">
                {ABOUT_US.certificacoes.map((cert, index) => (
                  <li key={index} className="flex gap-3 text-xs lg:text-sm text-[#6F7782] leading-relaxed">
                    <Icons.CheckCircle2 className="text-[#D62828] w-5 h-5 shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="bg-[#123C73] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Corporativo CTA" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-6">
            Vamos construir o próximo grande projeto juntos
          </h2>
          <p className="text-sm lg:text-base text-slate-200 leading-relaxed mb-8">
            Entre em contato hoje e alinhe os seus escopos industriais e prediais com engenheiros qualificados.
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
