/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActivePage } from '../types';
import { AREAS_SEGMENTS_DATA, REAL_PROJECTS } from '../data';
import * as Icons from 'lucide-react';
import { ProjectGalleryCard } from './ProjectGalleryCard';

interface AreasAtuacoViewProps {
  onNavigate: (page: ActivePage) => void;
}

const EDITORIAL_DATA: Record<string, { title: string; paragraphs: string[]; servicesTitle: string; servicesList: string[] }> = {
  industrial: {
    title: "Engenharia Elétrica para o Segmento Industrial",
    paragraphs: [
      "Ambientes industriais modernos exigem sistemas elétricos de altíssima confiabilidade e total conformidade com as normas regulamentadoras nacionais. A RE Engenharia Elétrica atua na vanguarda deste setor, oferecendo soluções integradas que vão desde o projeto conceitual de engenharia até a execução física e o comissionamento de cabines primárias, painéis CCM e subestações de média tensão. Entendemos que cada minuto de máquina inativa representa prejuízos substanciais para a linha de produção, por isso trabalhamos em campo para mitigar quaisquer riscos de interrupção operacional com segurança absoluta.",
      "Nosso escopo de atuação abrange a análise minuciosa de qualidade de energia, identificação e mitigação de distorções harmônicas críticas e o completo redimensionamento técnico de quadros de transferência automática e centros de controle de motores (CCM). Através de instrumentação de ponta e uma equipe de especialistas de campo contínuos, garantimos que a infraestrutura de força e iluminação de plantas fabris opere de forma energeticamente otimizada, prevenindo falhas térmicas catastróficas e gerando expressivas reduções de custos operacionais acumulados.",
      "Todas as intervenções elétricas industriais conduzidas pela nossa equipe obedecem estritamente às diretrizes estabelecidas pelas normas reguladoras federais. Isso assegura que ampliações de capacidade de cargas de motores pesados, conexões mecânicas de comutadores e instalações de novos barramentos elétricos ocorram sob estritos protocolos certificados."
    ],
    servicesTitle: "Serviços Mais Utilizados no Setor Industrial",
    servicesList: [
      "Laudos, medições e estudos técnicos de Fator de Potência e distorção harmônica das chaves",
      "Projetos, montagem integrada e redimensionamento completo de Redes de Média Tensão",
      "Montagem, instalação eletromecânica e comissionamento de Cabines Primárias de entrada de energia",
      "Adequação técnica completa, Retrofit geral e reforma estruturada de CCMs e quadros gerais"
    ]
  },
  hospitalar: {
    title: "Engenharia Elétrica para Hospitais e Unidades de Saúde",
    paragraphs: [
      "Na engenharia hospitalar de alta complexidade, a estabilidade e a segurança absoluta da rede de distribuição elétrica traduzem-se diretamente na conservação de vidas humanas. Unidades de Terapia Intensiva (UTIs), alas cirúrgicas avançadas e laboratórios de terapia especializada necessitam de soluções de altíssima redundância operacional, com a implantação automatizada de geradores de resgate e comissionamento cirúrgico de sistemas de no-break ininterruptos com distorção harmônica zero.",
      "Projetamos e executamos a montagem rigorosa de esquemas de aterramento IT-Médico em total conformidade técnica com as prescrições da norma ABNT NBR 13534. Este protocolo de engenharia elimina correntes de fuga residuais prejudiciais aos sistemas eletrônicos de monitoramento clínico dos pacientes, assegurando imunidade eletromagnética blindada e imunidade contra interrupções desastrosas de monitoração vital.",
      "Garantimos que as áreas de atendimento emergencial recebam cabeamentos de alimentação sob redundância de fase, quadros de distribuição exclusivos dotados de intertravamento de segurança e comissionamento assistido contínuo, outorgando previsibilidade máxima à equipe médica de plantão."
    ],
    servicesTitle: "Serviços Mais Utilizados no Setor de Saúde",
    servicesList: [
      "Estudos técnicos aprofundados para IT-Médico em total conformidade com a norma NBR 13534",
      "Execução e comissionamento completo de sistemas robustos de geradores e quadros de reversão",
      "Montagem qualificada de blindagem eletromagnética para cubículos de exames de radiofrequência",
      "Retrofit e manutenção termográfica contínua em Quadros Gerais de Distribuição de forças críticas"
    ]
  },
  educacao: {
    title: "Engenharia Elétrica para Grandes Instituições de Ensino",
    paragraphs: [
      "Instituições de ensino, universidades, colégios de grande dimensão e ginásios poliesportivos concentram fluxos elevados de circulação pública diariamente. O planejamento de redes e soluções elétricas para estes complexos arquitetônicos exige engenharia focada no conforto ergonômico sustentável, integrada a sistemas de proteção patrimonial ativos contra incêndio e descargas atmosféricas.",
      "Trabalhamos focados na implementação de fiações com isolamento termoplástico atóxico livre de halogênio, garantindo que as rotas de escape de fiação permaneçam perfeitamente limpas e sem fumaças escuras em caso de sobreelevação térmica predial. Através de simulações computadorizadas, estruturamos laudos de conforto luminoso projetando economia de consumo.",
      "Desenvolvemos e atestamos anéis de captação e descida de SPDA (Sistemas de Proteção contra Descargas Atmosféricas) calibrados, minimizando o risco físico de queima de instalações computacionais e blindando as estruturas prediais escolares contra picos induzidos por descargas de nuvem para a terra."
    ],
    servicesTitle: "Serviços Mais Utilizados no Setor de Ensino",
    servicesList: [
      "Lançamento e montagem integrada do prédio de Cabines Primárias de média tensão",
      "Estudos e mapeamentos luminotécnicos otimizados de sustentabilidade energética Dialux",
      "Instalação e renovação técnica de malhas de SPDA com ensaios e emissões de laudos ART",
      "Montagem e organização de redes elétricas de passagem subterrânea e quadros de laboratórios"
    ]
  },
  bancario: {
    title: "Engenharia Elétrica para o Setor Bancário e Financeiro",
    paragraphs: [
      "No universo transacional bancário, a indisponibilidade física ou lógica de um único terminal de servidores e sistemas de rede gera impactos financeiros irreversíveis. Fornecer estabilidade dielétrica e proteção rápida é o alicerce fundamental para a integridade da comunicação operacional bancária.",
      "A RE Engenharia Elétrica atua na estruturação de barramentos isolados, no-breaks trifásicos e comutadores manuais ou pneumáticos de bypass estáticos, minimizando ruídos na fiação de comunicação causados por distúrbios da rede aérea externa e garantindo circulação redundante.",
      "Através de rotinas de auditoria térmica infravermelha periódicas, analisamos barramentos internos de quadros elétricos mestre, identificando frouxidões ocultas de reaperto para conter incidentes térmicos antes de sua ocorrência em ambiente operacional sensível."
    ],
    servicesTitle: "Serviços Mais Utilizados no Setor Bancário",
    servicesList: [
      "Manutenção preventiva rigorosa de barramentos por meio de vistorias termográficas",
      "Instalação e adequação de Quadros de Distribuição redundantes com bypass e no-breaks",
      "Estudos dedicados de equilíbrio de rede de alimentação elétrica para salas de computadores",
      "Adequação comissionada de rede elétrica para conformação do perfil de demanda junto à concessionária"
    ]
  },
  corporativo: {
    title: "Engenharia Elétrica para Lajes e Edifícios Corporativos",
    paragraphs: [
      "Lajes corporativas contemporâneas demandam infraestrutura elétrica versátil, perfeitamente organizada e capacitada a suportar cargas térmicas de climatização automatizada conjugadas a equipamentos de informática distribuídos globalmente.",
      "Desenvolvemos retrofits construtivos modernos que organizam o encaminhamento de centenas de cabos de força sob dutos metálicos e pisos elevados de forma esteticamente impecável e sem interrupção na dinâmica comercial interna dos trabalhadores administrativos das lajes corporativas.",
      "Asseguramos que os circuitos internos disponham de proteções coordenadas contra surtos industriais gerados por manobras de concessionárias regionais ou estática climática, prolongando visivelmente a longevidade dos servidores e sistemas de comunicação centralizada das empresas."
    ],
    servicesTitle: "Serviços Mais Utilizados no Segmento Corporativo",
    servicesList: [
      "Projetos e montagem física de redes elétricas de infraestrutura sob piso e teto",
      "Implantação e retrofits estruturais completos de ampliações de cargas e trocas de fita condutora",
      "Organização, ajustes e montagens integradas de Quadros Gerais de Força (QGF)",
      "Vistoria técnica detalhada e medição de SPDA com proteção coordenada contra surtos"
    ]
  },
  "obras-publicas": {
    title: "Engenharia Elétrica para Órgãos Públicos e Estatais",
    paragraphs: [
      "A contratação de engenharia por entes públicos em todas as esferas administrativas exige um compromisso irrepreensível com orçamentos rigorosos, cumprimento de cronogramas estritos e clareza documental de alto padrão operacional.",
      "Nossos profissionais conduzem obras e instalações amparados por relatórios de Diários de Obra de preenchimento atualizado, medições analíticas de metas físicas e observância total aos balizadores públicos oficiais vigentes de mercado.",
      "Garantimos mobilização de equipe logística assertiva para finalizar obras de complexidades municipais como postos de atenção básica, complexos recreativos (CEUs) e reformas em prédios de interesse estatal, outorgando as respectivas Anotações de Responsabilidade Técnica (ART) de forma ágil."
    ],
    servicesTitle: "Serviços Mais Utilizados no Setor Público",
    servicesList: [
      "Projetos executivos detalhados de distribuição de força, tomadas de uso técnico e iluminação robusta",
      "Submissão de planos técnicos de entrada de energia para aprovações em concessionárias reguladas",
      "Instalação e ajustes amplificados de sistemas de proteção contra descargas atmosféricas (SPDA)",
      "Laudos técnicos, ensaios de continuidade dielétrica e comissionamentos assistidos sob termo legal"
    ]
  },
  infraestrutura: {
    title: "Engenharia Elétrica para Infraestrutura Urbana e Saneamento",
    paragraphs: [
      "Sistemas elétricos posicionados ao tempo livre demandam a formulação de projetos extremamente robustos para tolerar severas flutuações atmosféricas, ataque agressivo de oxidação e os efeitos transitórios de raios diretos sobre linhas aéreas de transmissão.",
      "A RE Engenharia Elétrica atua na engenharia externa, projetando e executando redes elétricas e distribuições subterrâneas isoladas de alta qualidade do solo, malhas estruturadas de aterramento profundo de subestações e comandos de força voltados a motores de recalque elétricos pesados de bombeamento de fluidos de saneamento.",
      "Apenas especificamos painéis fabricados com ligas nobres de alta isolação física IP65/IP66 para asseverar que chaves mecânicas operem blindadas de contaminantes climáticos corrosivos. Realizamos ensaios frequentes de continuidade elétrica na subestação e calibração de aterramento, mitigando acidentes por choque elétrico."
    ],
    servicesTitle: "Serviços Mais Utilizados em Infraestrutura",
    servicesList: [
      "Cálculo de malha de terra e projetos de aterramento de alto desempenho sob ensaios certificados",
      "Lançamento e comissionamento integrado de redes estruturadas subterrâneas blindadas",
      "Instalação eletromecânica de Cabines Primárias externas de alvenaria e cubículos de força",
      "Termografia geral preditiva, reformas corretivas de barramento e manutenção em média tensão"
    ]
  }
};

export const AreasAtuacoView: React.FC<AreasAtuacoViewProps> = ({ onNavigate }) => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>('industrial');

  const activeSegment = AREAS_SEGMENTS_DATA.find(s => s.id === selectedSegmentId) || AREAS_SEGMENTS_DATA[0];
  const editorialData = EDITORIAL_DATA[selectedSegmentId] || EDITORIAL_DATA['industrial'];

  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Header */}
      <section className="bg-[#123C73] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Áreas de Atuação" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block mb-3">ESPECIALIZAÇÕES SETORIAIS</span>
            <h1 className="font-sans font-bold text-3xl lg:text-5xl tracking-tight leading-tight mb-4">
              Áreas de Atuação
            </h1>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
              Soluções integradas e engenharia customizada para segmentos complexos que demandam estabilidade técnica e compromisso normativo.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs list of segments */}
      <section className="py-8 bg-slate-50 border-b border-[#C9CDD3] px-6 lg:px-12 sticky top-[72px] z-20">
        <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-center max-w-7xl md:w-[75%] mx-auto font-sans">
          {AREAS_SEGMENTS_DATA.map((seg) => {
            const isSelected = seg.id === selectedSegmentId;
            return (
              <button
                key={seg.id}
                onClick={() => setSelectedSegmentId(seg.id)}
                className={`flex-1 py-3 px-4 text-xs font-bold rounded-md uppercase tracking-wider text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#123C73] text-white shadow-md'
                    : 'bg-white text-[#6F7782] border border-[#C9CDD3] hover:bg-slate-200/40'
                }`}
              >
                {seg.title.replace('Segmento ', '')}
              </button>
            );
          })}
        </div>
      </section>

      {/* Detail view of active segment */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 1. TÍTULO E TEXTO DESCRITIVO COMPLETO COM MÚLTIPLOS PARÁGRAFOS - FORMATO EDITORIAL */}
          <div className="space-y-6 animate-fadeIn">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block">DIVISÃO ESPECIALIZADA</span>
            <h2 className="font-sans font-black text-3xl lg:text-5xl text-[#123C73] tracking-tight leading-tight mb-6">
              {editorialData.title}
            </h2>
            
            <div className="space-y-6 text-sm lg:text-base text-[#2B2B2B] leading-relaxed font-normal">
              {editorialData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* 2. LISTA SIMPLES DE SERVIÇOS MAIS UTILIZADOS NO SEGMENTO */}
          <div className="pt-10 border-t border-slate-100 animate-fadeIn">
            <h3 className="font-sans font-extrabold text-xl lg:text-2xl text-[#2B2B2B] tracking-tight mb-6 flex items-center gap-2">
              <Icons.ShieldCheck className="w-6 h-6 text-[#123C73]" />
              {editorialData.servicesTitle}
            </h3>
            <ul className="space-y-3.5 pl-1.5 list-none">
              {editorialData.servicesList.map((serviceName, index) => (
                <li key={index} className="flex gap-3 text-sm lg:text-base text-[#2B2B2B] font-medium items-center">
                  <Icons.CheckCircle2 className="text-emerald-600 w-5 h-5 shrink-0" />
                  <span>{serviceName}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. OBRAS RELACIONADAS AO SEGMENTO */}
          <div className="pt-10 border-t border-slate-100 animate-fadeIn">
            <div className="mb-8">
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-1">COMPROVADO EM CAMPO</span>
              <h3 className="font-sans font-extrabold text-xl lg:text-2xl text-[#2B2B2B] tracking-tight leading-tight">
                Obras Relacionadas ao Segmento
              </h3>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-1 font-normal">
                Verifique projetos reais homologados que atestam a nossa capacidade prática e conformidade nacional neste segmento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {activeSegment.relatedProjects.map((pName, index) => {
                const projectItem = REAL_PROJECTS.find(p => p.title === pName);
                if (!projectItem) return null;
                return (
                  <ProjectGalleryCard key={projectItem.id || index} project={projectItem} />
                );
              }).filter(Boolean)}
            </div>
          </div>

          {/* 4. BOTÃO DE CONTATO OU ORÇAMENTO */}
          <div className="pt-12 border-t border-slate-100 text-center flex flex-col items-center space-y-4">
            <div className="max-w-xl">
              <h4 className="font-sans font-extrabold text-[#123C73] text-lg lg:text-xl leading-tight">
                Precisa de engenharia especializada para este segmento?
              </h4>
              <p className="text-xs text-[#6F7782] mt-1.5 leading-relaxed font-normal">
                Nossos engenheiros dominam rigorosamente as normas regulamentadoras aplicadas. Entre em contato para obtermos uma proposta técnica direcionada.
              </p>
            </div>
            
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="mt-2 bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-10 py-4 rounded-xl transition-all uppercase shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Solicitar Orçamento para este Segmento
            </button>
          </div>

        </div>
      </section>

      {/* Atuação Completa CTA section */}
      <section className="bg-[#123C73] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Áreas Atuação CTA" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4">
            Atuação de engenharia completa para o seu segmento
          </h2>
          <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8">
            Nossos engenheiros dominam as rotinas e gargalos técnicos de seu setor de negócio, assegurando propostas de escopo precisas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase shadow-lg cursor-pointer"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase cursor-pointer"
            >
              Falar com Nosso Time
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
