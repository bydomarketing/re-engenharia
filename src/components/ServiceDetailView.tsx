/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { SERVICES_DETAILS_DATA, REAL_PROJECTS } from '../data';
import * as Icons from 'lucide-react';
import { ProjectGalleryCard } from './ProjectGalleryCard';

interface ServiceDetailViewProps {
  serviceId: ActivePage;
  onNavigate: (page: ActivePage) => void;
  scrollToSection?: string;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ serviceId, onNavigate, scrollToSection }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  useEffect(() => {
    if (scrollToSection) {
      const element = document.getElementById(scrollToSection);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollToSection, serviceId]);

  // Fallback to avoid crashes
  const details = SERVICES_DETAILS_DATA[serviceId as keyof typeof SERVICES_DETAILS_DATA] || SERVICES_DETAILS_DATA[ActivePage.ProjetosInstalacoes];

  // Map serviceId to simple visual descriptions
  const getServiceTypeLabel = () => {
    switch (serviceId) {
      case ActivePage.ProjetosInstalacoes: return 'Engenharia de Planejamento';
      case ActivePage.ExecucaoObras: return 'Engenharia de Campo';
      case ActivePage.ManutencaoEletrica: return 'Conformidade e Prevenção';
      case ActivePage.CabinesMedia: return 'Conexão e Média Tensão';
      case ActivePage.SPDAAterramento: return 'Sistemas de Segurança Física';
      case ActivePage.AdequacoesModernizacoes: return 'Retrofit e Atualizações';
      case ActivePage.SistemasIncendio: return 'Sistemas de Monitoramento';
      case ActivePage.EnergiaSolar: return 'Microgeração Sustentável';
      default: return 'Solução Especializada';
    }
  };

  const getServiceLabel = () => {
    switch (serviceId) {
      case ActivePage.ProjetosInstalacoes: return 'Projetos e Instalações Elétricas';
      case ActivePage.ExecucaoObras: return 'Execução de Obras Elétricas';
      case ActivePage.ManutencaoEletrica: return 'Manutenção Elétrica';
      case ActivePage.CabinesMedia: return 'Cabines Primárias e Média Tensão';
      case ActivePage.SPDAAterramento: return 'SPDA e Sistemas de Aterramento';
      case ActivePage.AdequacoesModernizacoes: return 'Adequações e Modernizações Elétricas';
      case ActivePage.SistemasIncendio: return 'Sistemas de Detecção e Alarme de Incêndio';
      case ActivePage.EnergiaSolar: return 'Energia Solar';
      default: return 'Serviços Especializados';
    }
  };

  // Find related projects belonging to this service domain
  const getRelatedProjects = () => {
    if (serviceId === ActivePage.ProjetosInstalacoes) {
      return REAL_PROJECTS.slice(0, 3);
    } else if (serviceId === ActivePage.ExecucaoObras) {
      return REAL_PROJECTS.slice(3, 6);
    } else if (serviceId === ActivePage.ManutencaoEletrica) {
      return REAL_PROJECTS.slice(6, 9);
    } else if (serviceId === ActivePage.CabinesMedia) {
      return REAL_PROJECTS.filter(p => p.scope.toLowerCase().includes('média') || p.scope.toLowerCase().includes('subestação'));
    } else if (serviceId === ActivePage.SPDAAterramento) {
      return REAL_PROJECTS.filter(p => p.highlights.some(h => h.toLowerCase().includes('spda')));
    } else if (serviceId === ActivePage.AdequacoesModernizacoes) {
      return REAL_PROJECTS.filter(p => p.scope.toLowerCase().includes('retrofit') || p.scope.toLowerCase().includes('adequação'));
    } else {
      return REAL_PROJECTS.slice(2, 5);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const related = getRelatedProjects();

  if (serviceId === ActivePage.ProjetosInstalacoes) {
    const relatedProjects = REAL_PROJECTS.filter(p => 
      ['proj-sesi-sp', 'proj-ceu-carmo', 'proj-upas-sp', 'proj-escola-guaruja'].includes(p.id)
    );
    return (
      <div className="animate-fadeIn bg-white">
        {/* SECTION 1: BANNER PRINCIPAL */}
        <section className="relative min-h-[55vh] flex items-center bg-slate-900 text-white overflow-hidden pt-36 pb-24 select-none">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80" 
              alt="Projetos e Instalações Elétricas" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/90 to-[#123C73]/65" />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs uppercase block mb-3 animate-fadeIn">
                ENGENHARIA E CONFIANÇA
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-white uppercase animate-fadeIn">
                Projetos e Instalações Elétricas
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 animate-fadeIn">
                Projetos, instalações e soluções elétricas para indústrias, empresas, hospitais, instituições de ensino, centros corporativos e obras de diversos portes.
              </p>
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="inline-block bg-[#D62828] hover:bg-[#b52020] text-white font-extrabold tracking-wider text-xs lg:text-sm px-8 py-4.5 rounded transition-all duration-300 uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Solicitar Avaliação Técnica
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXTO INSTITUCIONAL */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">AUTORIDADE COMPROVADA</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight mb-6">
                  Mais de três décadas projetando o futuro da infraestrutura nacional
                </h2>
                <div className="h-1 w-12 bg-[#D62828] mb-6" />
                <p className="text-xs text-[#6F7782] leading-relaxed">
                  RE Engenharia Elétrica Ltda.<br />
                  Responsabilidade Técnica Certificada no CREA-SP.
                </p>
              </div>
              <div className="lg:col-span-8 text-[#2B2B2B] text-sm lg:text-base leading-relaxed space-y-6 lg:space-y-8 font-normal">
                <p>
                  O desenvolvimento sólido de um <strong>projeto elétrico industrial</strong> ou predial é o pilar mais crítico para asseverar a estabilidade operacional e a segurança de qualquer planta produtiva ou edifício de grande fluxo. Na RE Engenharia Elétrica, atuamos como uma consolidada <strong>empresa de engenharia elétrica</strong> nacional, integrando metodologias de análise tridimensional avançada, software de ponta e rigor construtivo nas fases de planejamento e implantação física.
                </p>
                <p>
                  Nossa especialidade compreende desde estudos analíticos prévios de viabilidade técnica até a instalação mecânica e a respectiva <strong>execução elétrica</strong> em campo. Projetamos e ativamos sistemas de distribuição com profundo know-how de engenharia em <strong>instalações elétricas</strong> de baixa e média tensão, fornecendo soluções refinadas sob medida para <strong>instalações industriais</strong> pesadas, grandes complexos de saúde, estabelecimentos educativos e prédios públicos de alta criticidade.
                </p>
                <p>
                  Com uma experiência sólida acumulada de mais de 30 anos no mercado nacional de <strong>engenharia elétrica</strong>, registramos a marca de <strong>mais de 500 grandes obras executadas</strong> e entregues de ponta a ponta com rigor normativo inabalável. Toda a nossa infraestrutura corporativa civil e comercial está plenamente capacitada para prestar suporte, consultoria e execução em qualquer município do país, com total emissão de laudo técnico de conformidade jurídica respaldado com guias de ART (Anotação de Responsabilidade Técnica).
                </p>
                <p>
                  Nossos engenheiros lideram a instalação de circuitos secundários, montagem física de painéis estruturados gerais de distribuição de força (QGBTs) e <strong>instalações prediais</strong> que privilegiam a segurança humana, a durabilidade civil do cabeamento e a eficiência tarifária sustentável de longo prazo. Seja na modernização construtiva (Retrofit) ou no início de novas redes, providenciamos toda a <strong>infraestrutura elétrica</strong> resiliente e adequada às normas vigentes para propiciar a tranquila continuidade do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVIÇOS RELACIONADOS */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">ESPECIALIDADES DO SETOR</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Nossas Soluções Especializadas
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Atendemos toda a esteira do ciclo construtivo e comercial sob rígidas diretrizes normativas das concessionárias nacionais.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "Projetos de Instalações Elétricas",
                  desc: "Desenvolvimento técnico completo de diagramas unifilares e trifilares, estudos de seletividade lógica de disjuntores, dimensionamento térmico rigoroso de cargas e modelagem luminotécnica detalhada. Perfeitamente otimizados para evitar oscilações, quedas de tensão e sobreaquecimento em conformidade estrita com as normas regulamentadoras ABNT NBR 5410 e NBR 14039."
                },
                {
                  title: "Leitura e Interpretação de Projetos Elétricos",
                  id: "leitura-projetos",
                  desc: "Análise profunda e interpretação crítica de projetos de terceiros, realizando auditoria de interferências espaciais estruturais (civil/hidráulica/HVAC). Mapeamos divergências de dimensionamento preventivamente em campo para evitar prejuízos, desperdícios de materiais de fiação de cobre e retrabalho durante a montagem das infraestruturas."
                },
                {
                  title: "Instalações Prediais",
                  desc: "Montagem física e infraestrutração vertical e horizontal de rede de força e luz (luz de emergência, lógica e detecção) para torres residenciais, condomínios corporativos e hotéis de alta densidade. Emprego absoluto de materiais retardantes de chama livres de halogênio (cabos LSZH) para garantir máxima incolumidade física aos usuários."
                },
                {
                  title: "Instalações Comerciais",
                  desc: "Estruturação sob eletrocalhas metálicas aéreas suspensas, perfilados galvanizados de alto curso e leitos fechados para shopping centers, supermercados e reuniões comerciais. Projetado com sistemas modulares flexíveis para rápidos arranjos comerciais e manutenções simplificadas sem suspensão de atividades comerciais."
                },
                {
                  title: "Instalações Industriais",
                  desc: "Pátio fabril e montagens eletromecânicas pesadas. Cabos trifásicos de grande bitola em leitos suspensos reforçados, montagem de quadros de distribuição setoriais de controle de força (CCMs), acoplamento mecânico de motores de indução de alta potência e comutadores sob regime contínuo de trabalho severo sob as mais duras contingências de campo."
                },
                {
                  title: "Consultoria em Engenharia Elétrica",
                  desc: "Estudos analíticos para redução inteligente de perdas elétricas de energia, auditoria profunda de conformidade com a norma NR-10 e emissão formal de Prontuários de Instalações Elétricas (PIE). Auxílio especializado no planejamento espacial para aumento comissionado de carga de fábrica perante concessionárias corporativas regionais."
                }
              ].map((item, idx) => (
                <div key={idx} id={'id' in item ? (item as any).id : undefined} className="py-8 scroll-mt-28 border-b border-[#C9CDD3]/60 last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <span className="font-mono text-[#D62828] text-xs font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] leading-snug group-hover:text-[#123C73] transition-colors uppercase tracking-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OBRAS EXECUTADAS */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                  Obras Relacionadas
                </h2>
                <p className="text-xs lg:text-sm text-[#6F7782] mt-1">Conheça algumas das execuções de grande porte que atestam nossa autoridade.</p>
              </div>
              <button
                onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
                className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2.5 px-6 rounded transition-all uppercase whitespace-nowrap cursor-pointer"
              >
                Ver Todas as Obras
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectGalleryCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-3xl md:w-[75%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Respostas completas sobre projetos elétricos e instalações técnicas para esclarecer suas decisões.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Quem faz projetos e instalações elétricas industriais?",
                  a: "A execução de projetos e instalações elétricas industriais deve ser obrigatoriamente realizada por engenheiros eletricistas e técnicos devidamente credenciados perante o CREA (Conselho Regional de Engenharia e Agronomia). A RE Engenharia Elétrica atua diretamente no desenvolvimento científico de diagramas, estudos de curto-circuito de fases, modelagens tridimensionais, bem como montagem mecânica e comissionamento técnico amplo de pátios fabris sob normas internacionais."
                },
                {
                  q: "Qual a diferença entre projeto elétrico e instalação elétrica?",
                  a: "O projeto elétrico é o planejamento intelectual e analítico prévio da obra, contendo memórias técnicas de cálculo, diagrama unifilar, bitolas de cabos fiação elétrica, trajetórias e dimensionamento de cargas sob normas ABNT. Por outro lado, a instalação elétrica corresponde à execução corporal prática em campo do projeto de engenharia, abrangendo o lançamento mecânico de fiação trifásica de alta pureza, conexões de barramentos e fixação física de eletrocalhas metálicas suspensas."
                },
                {
                  q: "Como escolher uma empresa de engenharia elétrica?",
                  a: "Para fazer a escolha segura de uma empresa de engenharia elétrica, verifique o registro regular ativo da entidade no conselho de classe (CREA), exija comprovação através de Acervo Técnico (certidões de ARTs averbadas de grandes obras), certifique-se de que a equipe operacional possui exames de aptidão ocupacional e certificações compulsórias NR-10 e NR-35 ativas, e certifique-se de que dispõem de equipamentos homologados com laudos de calibração vigentes (RBC)."
                },
                {
                  q: "Quem executa instalações elétricas para hospitais e empresas?",
                  a: "A RE Engenharia Elétrica executa infraestruturas de altíssima complexidade e criticidade para complexos hospitalares, redes comerciais e grandes plantas industriais de manufatura. Nossos profissionais estão plenamente habilitados para projetar e comissionar sistemas adequados a normas hospitalares rigorosas (NBR 13534 - IT-Médico), instalando quadros integrados de acionamentos de geradores, gerando energia redundante e ininterrupta."
                },
                {
                  q: "O que está incluso em um projeto de instalação elétrica?",
                  a: "Um projeto completo provido pela RE Engenharia Elétrica contempla os diagramas lógicos unifilares e multifilares de força e comandos, memorial descritivo completo justificando cálculos técnicos de cargas e disjuntores, plantas de encaminhamento tridimensional espacial de tubulações estruturadas, lista de detalhamento e especificações de materiais homologados para orçamento fidedigno de compra, ensaios luminotécnicos analíticos sob software Dialux e a indispensável ART recolhida."
                }
              ].map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#123C73] font-black shrink-0 text-sm">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA FINAL */}
        <section className="bg-[#123C73] text-white py-24 px-6 lg:px-12 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
              alt="Fundo Projetos Elétricos" 
              className="w-full h-full object-cover opacity-25 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
          </div>
          <div className="relative z-10 max-w-3xl md:w-[75%] mx-auto">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4 uppercase leading-tight">
              Precisa de uma empresa especializada em projetos e instalações elétricas?
            </h2>
            <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Entre em contato hoje mesmo com os engenheiros consultores da RE Engenharia Elétrica. Estamos prontos para avaliar detalhadamente sua infraestrutura existente ou planejar com absoluta precisão o seu novo empreendimento de baixa ou média tensão em qualquer localidade do país.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4.5 rounded transition-all uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Fale com a RE Engenharia Elétrica
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (serviceId === ActivePage.ExecucaoObras) {
    const relatedProjects = REAL_PROJECTS.filter(p => 
      ['proj-hospital-unimed', 'proj-posto-pesqueira', 'proj-sesi-sp', 'proj-escola-guaruja'].includes(p.id)
    );
    return (
      <div className="animate-fadeIn bg-white">
        {/* SECTION 1: BANNER PRINCIPAL */}
        <section className="relative min-h-[55vh] flex items-center bg-slate-900 text-white overflow-hidden pt-36 pb-24 select-none">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80" 
              alt="Execução de Obras Elétricas" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/90 to-[#123C73]/65" />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs uppercase block mb-3 animate-fadeIn">
                ENGENHARIA DE CAMPO E CONFIABILIDADE
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-white uppercase animate-fadeIn">
                EXECUÇÃO DE OBRAS ELÉTRICAS
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 animate-fadeIn">
                Execução, implantação e gerenciamento de obras elétricas para empresas, indústrias, hospitais, instituições de ensino, centros corporativos e empreendimentos de diversos portes.
              </p>
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="inline-block bg-[#D62828] hover:bg-[#b52020] text-white font-extrabold tracking-wider text-xs lg:text-sm px-8 py-4.5 rounded transition-all duration-300 uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Solicitar Avaliação Técnica
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXTO INSTITUCIONAL */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">AUTORIDADE INDUSTRIAL</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight mb-6">
                  Mais de três décadas liderando a implantação de infraestrutura técnica de alta performance
                </h2>
                <div className="h-1 w-12 bg-[#D62828] mb-6" />
                <p className="text-xs text-[#6F7782] leading-relaxed">
                  RE Engenharia Elétrica Ltda.<br />
                  Responsabilidade Técnica de Campo Certificada no CREA-SP.
                </p>
              </div>
              <div className="lg:col-span-8 text-[#2B2B2B] text-sm lg:text-base leading-relaxed space-y-6 lg:space-y-8 font-normal">
                <p>
                  A <strong>execução de obras elétricas</strong> de grande porte é um processo crítico que exige rigorosa competência de engenharia de campo. Cada etapa construtiva — desde a interpretação precisa de diagramas e dimensionamentos até o comissionamento técnico final — impacta diretamente a longevidade dos equipamentos e a segurança operacional de qualquer planta ou edifício de grande porte. Como uma <strong>empresa de engenharia elétrica</strong> consolidadamente estabelecida no território nacional, a RE Engenharia Elétrica atua de forma integral, garantindo que o planejamento saia do papel e seja materializado com absoluto zelo, rapidez e segurança técnica.
                </p>
                <p>
                  Nossas equipes construtivas coordenam a <strong>implantação elétrica</strong> de ponta a ponta com elevado domínio empírico, assumindo a liderança na instalação de barramentos isolados, blindagem contra poeira e umidade de quadros secundários e passagem mecânica de fiação de cobre de alta pureza. Executamos <strong>instalações elétricas industriais</strong> sob as diretrizes mais rigorosas da Associação Brasileira de Normas Técnicas (como a ABNT NBR 5410 de baixa tensão e a NBR 14039 de média tensão). Fornecemos <strong>infraestrutura elétrica</strong> resiliente e adequada às normas vigentes, assegurando que o cronograma físico estabelecido do empreendimento transcorra perfeitamente.
                </p>
                <p>
                  Ao longo de mais de 30 anos de atuação especializada, celebramos a marca histórica de <strong>mais de 500 grandes obras executadas</strong> e entregues de ponta a ponta com rigor normativo inabalável. Nossa expertise abrange desde a complexa <strong>montagem elétrica industrial</strong> pesada em plantas fabris até a cuidadosa <strong>obra elétrica corporativa</strong>, incluindo redes de distribuição estruturadas e sistemas críticos para complexos de saúde sob a norma NBR 13534 (IT-Médico). Toda a nossa mobilização técnica de campo está plenamente apta a atender demandas de <strong>engenharia elétrica para indústrias</strong> em qualquer município do país, com emissão de laudo técnico de conformidade jurídica respaldado com guias de ART (Anotação de Responsabilidade Técnica).
                </p>
                <p>
                  Atuamos como uma legítima <strong>empresa especializada em obras elétricas</strong> sob regime contínuo de contingência rigorosa. Seus engenheiros seniores gerenciam com excelência a <strong>execução elétrica</strong> completa de rotas de cabeamento subterrâneo blindado, acoplamento mecânico de motores de indução de grande potência e modernizações retroativas de sistemas com total tranquilidade operacional e civil permanente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVIÇOS RELACIONADOS */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">ESPECIALIDADES DO SETOR</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Nossas Soluções Especializadas de Execução
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Qualidade técnica, conformidade regulatória e cronograma assegurado em todas as frentes de montagem elétrica.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "EXECUÇÃO DE OBRAS ELÉTRICAS",
                  desc: "Serviços dedicados de implantação física e gerenciamento contínuo de obras de energia no canteiro de campo. A RE Engenharia Elétrica mobiliza técnicos seniores e instrumentação de teste calibrada com laudo RBC para garantir que cada cabo de força seja lançado com isolação irretocável, sem dobras perigosas e com completo comissionamento lógico final com emissão compulsória de guias de ART."
                },
                {
                  title: "MONTAGEM DE PAINÉIS ELÉTRICOS",
                  desc: "Estruturação interna detalhada e conexões de barramentos principais de força e controle para distribuição de baixa e média tensão. Realizada sob rígido projeto tridimensional com bitolas precisamente dimensionadas de barramentos de cobre eletrolítico de alta condutividade e disjuntores de alta corrente em pleno equilíbrio dinâmico e térmico de fases, mitigando surtos d'água mecânicos e vibrações."
                },
                {
                  title: "MONTAGEM DE QUADROS ELÉTRICOS",
                  desc: "Montagem estruturada de quadros gerais de distribuição de força (QGBTs), quadros lógicos de comandos e transferência integrada (QTA). Nossos quadros de fiação interna são devidamente equipados com dispositivos supressores de surtos (DPS), interruptores diferenciais residuais (DR) e disjuntores de ação rápida, fornecendo plena blindagem contra intempéries graves e proteção sob a norma NR-10."
                },
                {
                  title: "MONTAGENS INDUSTRIAIS",
                  desc: "Pátio fabril e instalações mecânicas pesadas em ambientes industriais sob as mais rigorosas restrições em todo o país. Lançamento e amarração de cabeamento trifásico de grande bitola em leitos suspensos de perfilados metálicos reforçados e interligação de motores de indução de grande potência sob regime de acionamento contínuo."
                },
                {
                  title: "INFRAESTRUTURA ELÉTRICA",
                  desc: "Preparo de caminhos físicos seguros compostos por barramentos blindados busways suspensos, eletrocalhas perfuradas zincadas a fogo e tubulações corrugadas de alta resistência enterradas no solo. O correto dimensionamento de rotas evita a asfixia térmica, melhora a dissipação estática do terreno e projeta espaços de reserva para expansões dinâmicas de carga fabril futuras."
                }
              ].map((item, idx) => (
                <div key={idx} className="py-8 border-b border-[#C9CDD3]/60 last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <span className="font-mono text-[#D62828] text-xs font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] leading-snug group-hover:text-[#123C73] transition-colors uppercase tracking-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OBRAS EXECUTADAS */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                  Obras Relacionadas
                </h2>
                <p className="text-xs lg:text-sm text-[#6F7782] mt-1">
                  Conheça algumas das execuções de grande porte que atestam nossa autoridades em instalações, montagens e implantação.
                </p>
              </div>
              <button
                onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
                className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2.5 px-6 rounded transition-all uppercase whitespace-nowrap cursor-pointer"
              >
                Ver Todas as Obras
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectGalleryCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-3xl md:w-[75%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Respostas completas e naturalmente orientadas sobre dúvidas no planejamento e execução de infraestrutura de grande porte.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Preciso de uma empresa para executar a instalação elétrica de uma nova fábrica.",
                  a: "A RE Engenharia Elétrica assume a execução integral de frentes para instalações elétricas de novas plantas fabris no Brasil. Responsabilizamo-nos pelo preparo físico de fiação de leitos suspensos, passagem tridimensional de cabos blindados de média tensão, aterramentos de extrema condutividade perante o CREA, montagem de subestações e QGBTs com pleno equilíbrio de fases térmicas e comissionamento técnico final, isentando o cliente de qualquer impedimento operacional ou cível perante concessionárias regionais."
                },
                {
                  q: "Quem faz projeto e execução elétrica para galpões industriais?",
                  a: "Desenvolvemos diagramas unifilares completos de carga e realizamos a montagem eletromecânica de galpões, armazéns logísticos e galpões comerciais industriais. Nosso escopo inclui o lançamento mecânico de eletrocalhas perfuradas galvanizadas a fogo, fixação de perfilados aéreos pesados de alto vão, implantação de redes trifásicas seguras para força de máquinas industriais e fiação de iluminação em LED industrial de alto desempenho."
                },
                {
                  q: "Quem pode assumir toda a infraestrutura elétrica de um empreendimento?",
                  a: "A equipe de engenheiros seniores de campo da RE Engenharia Elétrica detém competência e capital técnico para assumir a integralidade física de fiação, eletrodutos, leitos e subestações do seu empreendimento de baixa ou média tensão. Atuamos como fornecedor único que gere o fluxo construtivo diário de ponta a ponta, coordenando materiais certificados e profissionais providos de todas as autorizações cíveis necessárias perante as vistorias."
                },
                {
                  q: "Qual empresa pode assumir projeto, instalação e execução elétrica da obra?",
                  a: "A RE Engenharia Elétrica é uma empresa altamente integrada que unifica toda a esteira de projetos, submissão junto ao portal integrado de distribuidoras distribuidoras nacionais, vistoria, instalação de cabeamento e execução física final de montagem pesada com emissão compulsória de guias de ART. Essa centralização técnica mitiga divergências de interpretação no campo, evita desperdício cível de cobre da fiação e garante custos significativamente reduzidos."
                },
                {
                  q: "Preciso de uma empresa confiável para executar uma obra elétrica de grande porte.",
                  a: "A RE Engenharia Elétrica consolida-se como a parceira definitiva com mais de 30 anos de atuação especializada de alta reputação e mais de 500 grandes obras ativadas em todas as regiões brasileiras. Contamos com equipes próprias de profissionais munidos de certificações NR-10 e NR-35 em dia de extrema severidade ocupacional, guias de ART assinadas por engenheiros credenciados ativos perante o CREA-SP, e laboratório próprio de teste preditivo de alto padrão térmico e resistência de aterramentos."
                }
              ].map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#123C73] font-black shrink-0 text-sm">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA FINAL */}
        <section className="bg-[#123C73] text-white py-24 px-6 lg:px-12 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
              alt="Fundo Construção Elétrica" 
              className="w-full h-full object-cover opacity-25 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
          </div>
          <div className="relative z-10 max-w-3xl md:w-[75%] mx-auto">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4 uppercase leading-tight">
              PRECISA DE UMA EMPRESA ESPECIALIZADA EM EXECUÇÃO DE OBRAS ELÉTRICAS?
            </h2>
            <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Entre em contato hoje mesmo com os engenheiros de campo da RE Engenharia Elétrica. Estamos prontos para planejar e executar a infraestrutura ou montagem elétrica de alta tensão do seu empreendimento com total segurança e experiência comprovada em todo o Brasil.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4.5 rounded transition-all uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                FALE COM A RE ENGENHARIA ELÉTRICA
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  if (serviceId === ActivePage.CabinesMedia) {
    const relatedProjects = REAL_PROJECTS.filter(p => 
      ['proj-ceu-carmo', 'proj-unimed-hospital', 'proj-sesi-sp'].includes(p.id)
    );
    return (
      <div className="animate-fadeIn bg-white">
        {/* SECTION 1: BANNER PRINCIPAL */}
        <section className="relative min-h-[55vh] flex items-center bg-slate-900 text-white overflow-hidden pt-36 pb-24 select-none">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80" 
              alt="Cabines Primárias e Média Tensão" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/90 to-[#123C73]/65" />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs uppercase block mb-3 animate-fadeIn">
                SUPRIMENTO SEGURO DE ENERGIA
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-white uppercase animate-fadeIn">
                CABINES PRIMÁRIAS E MÉDIA TENSÃO
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 animate-fadeIn">
                Projetos, execução, manutenção e adequação de cabines primárias e subestações de média tensão para indústrias, comércios, hospitais e condomínios de diversos portes.
              </p>
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="inline-block bg-[#D62828] hover:bg-[#b52020] text-white font-extrabold tracking-wider text-xs lg:text-sm px-8 py-4.5 rounded transition-all duration-300 uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Solicitar Avaliação Técnica
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXTO INSTITUCIONAL */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">CONFIABILIDADE OPERACIONAL</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight mb-6">
                  Soluções integradas de média tensão para assegurar o crescimento do seu negócio
                </h2>
                <div className="h-1 w-12 bg-[#D62828] mb-6" />
                <p className="text-xs text-[#6F7782] leading-relaxed">
                  RE Engenharia Elétrica Ltda.<br />
                  Ampla Experiência em Subestações e Concessionárias no Brasil.
                </p>
              </div>
              <div className="lg:col-span-8 text-[#2B2B2B] text-sm lg:text-base leading-relaxed space-y-6 lg:space-y-8 font-normal">
                <p>
                  As <strong>cabines primárias</strong> exercem o papel de maior relevância na infraestrutura elétrica de empreendimentos que necessitam de elevada carga energética. Trata-se do ponto central de conexão entre a rede aérea de distribuição da <strong>concessionária de energia</strong> e a rede de distribuição privada interna do cliente. Operar em <strong>média tensão</strong> possibilita às indústrias, shoppings e hospitais obter tarifas tarifárias sobremaneira baratas, mas impõe a obrigatoriedade de gerenciar ativos críticos sob extrema competência. A RE Engenharia Elétrica, atuando há mais de 30 anos no segmento, fornece soluções de altíssimo nível para garantir suprimento elétrico confiável desde a etapa conceitual.
                </p>
                <p>
                  Desenvolver uma <strong>subestação de energia</strong> segura requer completo alinhamento operacional e jurídico. Atuamos integralmente na esteira de legalização e <strong>entrada de energia</strong> de cada cliente. Elaboramos os correspondentes estudos de curto-circuito, diagramas de proteção relística e submetemos toda a documentação construtiva para a obtenção do <strong>direito de uso de energia</strong> diretamente perante as principais distribuidoras de energia do território nacional. Nosso corpo técnico comanda a correta <strong>instalação de cubículos</strong> blindados blindados e convencionais com rigor construtivo absoluto para resguardar a incolumidade dos operadores em campo.
                </p>
                <p>
                  Com o prestígio de termos superado a marca de <strong>mais de 500 grandes obras executadas</strong> em todo o Brasil, firmamos nossa autoridade como uma legítima <strong>empresa especializada em cabines primárias</strong>. Realizamos desde montagens eletromecânicas complexas turnkey (em alvenaria ou cubículos metálicos estanques de última geração) até manutenções preditivas críticas. Uma <strong>cabine de alta tensão</strong> ou média tensão necessita de fiscalizações rigorosas conduzidas por especialistas munidos de ferramentas de ponta.
                </p>
                <p>
                  Da mesma forma, providenciamos toda a assessoria para a <strong>manutenção de cabines</strong> com ensaios de isolamento térmico, coletas e análises físico-químicas de óleo isolante de transformadores de potência de grande escala e inspeções termográficas de barramentos sob carga sob termos da NR-10. Atuamos com responsabilidade cível absoluta e dedicação técnica irrepreensível, assegurando que sua subestação permaneça operando com a máxima eficiência energética e conformidade legal de ponta a ponta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVIÇOS RELACIONADOS */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">ESPECIALIDADES DO SETOR</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Nossas Soluções em Cubículos e Subestações
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Engenharia de conexão e média tensão sob estritas normas das distribuidoras de energia do país.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "PROJETO E ENTRADA DE ENERGIA EM MÉDIA TENSÃO",
                  desc: "Dimensionamento técnico detalhado de diagramas unifilares, malha de terra estruturada e cálculo de parametrização lógica de relés de proteção de sobrecorrente. Cuidamos de todo o trâmite consultivo junto à concessionária de energia local para a obtenção do direito de uso de demanda e homologação do ponto de entrega física em média tensão."
                },
                {
                  title: "INSTALAÇÃO E MONTAGEM DE CABINES PRIMÁRIAS",
                  desc: "Implantação eletromecânica completa (turnkey) de subestações em alvenaria convencional ou sistemas portáteis de cubículos metálicos blindados compactos. Nossos profissionais ativam disjuntores a vácuo ou gás SF6, instalando cabos isolados de alta bitola e transformadores de potência sob total rigor construtivo cível."
                },
                {
                  title: "MANUTENÇÃO PREVENTIVA E CORRETIVA DE CABINES",
                  desc: "Intervenções cirúrgicas planejadas para prevenir desligamentos acidentais caros. Realizamos a coleta cromatográfica de gás e ensaios físico-químicos em óleo mineral de transformadores, medições de resistência de contato de contatos e disjuntores, limpeza geral de cubículos e calibração periódica certificada de relés de proteção."
                },
                {
                  title: "ADEQUAÇÃO ÀS NORMAS DAS CONCESSIONÁRIAS",
                  desc: "Diagnósticos e correções técnicas em subestações existentes para eliminar riscos de interdições e multas regulatórias das distribuidoras. Substituição de ramais antigos de fiação expostos a umidade excessiva e adequações estruturais para conformidade com normas reguladoras municipais e estaduais vigentes."
                },
                {
                  title: "REFORMA E RETROFIT DE SUBESTAÇÕES",
                  desc: "Modernização lógica completa de cabines obsoletas sem a necessidade de reconstrução civil onerosa. Realizamos a modernização de disjuntores antigos em óleo por chaves modernas, inclusão de painéis modernos de medição eletrônica automática de dados e redimensionamento completo de capacidade térmica de potência ativa de trabalho."
                }
              ].map((item, idx) => (
                <div key={idx} className="py-8 border-b border-[#C9CDD3]/60 last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <span className="font-mono text-[#D62828] text-xs font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] leading-snug group-hover:text-[#123C73] transition-colors uppercase tracking-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OBRAS EXECUTADAS */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                  Obras Relacionadas
                </h2>
                <p className="text-xs lg:text-sm text-[#6F7782] mt-1">
                  Evidência visual do nosso domínio construtivo em subestações de alta robustez e comissionamento técnico amplo.
                </p>
              </div>
              <button
                onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
                className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2.5 px-6 rounded transition-all uppercase whitespace-nowrap cursor-pointer"
              >
                Ver Todas as Obras
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectGalleryCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-3xl md:w-[75%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Respostas estruturadas para tomadores de decisão sobre migração e confiabilidade de instalações de média tensão.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "O que é uma cabine primária e quando ela é necessária?",
                  a: "A cabine primária (ou subestação de média tensão) é o conjunto de equipamentos e cubículos protetores destinados a receber o suprimento elétrico diretamente da rede em média tensão (geralmente entre 13.8kV e 34.5kV) da concessionária de energia e rebaixá-lo comercialmente para as tensões internas de trabalho (tais como 220V/380V/440V). Ela torna-se técnica e financeiramente necessária para empresas e indústrias cuja demanda contratada de potência ultrapasse 75 kW, proporcionando economia substancial de custos de consumo de tarifa mensal de energia."
                },
                {
                  q: "Como funciona a manutenção de cabines primárias e média tensão?",
                  a: "A manutenção deve conter caráter essencialmente preventivo e preditivo, sendo dividida em intervenções periódicas anuais planejadas com a concessionária de energia. Contempla a coleta mecânica de fluido isolante do transformador para correspondente ensaio dielétrico e cromatográfico, limpeza profunda de barramentos de cobre e isoladores cerâmicos para eliminar poeira e teias associadas, reaperto geral de contatos elétricos de chaves seccionadoras, além de medições e ensaios físico-químicos minuciosos em disjuntores de força."
                },
                {
                  q: "Qual a diferença entre cabine primária convencional e blindada?",
                  a: "A cabine convencional é construída em compartimento físico de alvenaria onde os barramentos, transformador de força e cubículos de disjuntores são distribuídos de maneira aberta em áreas cercadas por grades. Já a cabine blindada compacta (metalclad) associa todos os seus ativos técnicos alojados hermeticamente em compartimentos metálicos de alta estanqueidade IP contra infiltrações severas d'água, oferecendo dimensões físicas consideravelmente reduzidas e maior proteção contra riscos mecânicos de faíscas aos trabalhadores."
                },
                {
                  q: "A RE Engenharia Elétrica faz a aprovação de cabines primárias junto à concessionária?",
                  a: "Sim, a atuação da RE Engenharia Elétrica engloba toda a esteira documental de estudos analíticos preliminares e submissão aos portais integrados das distribuidoras regionais de energia do Brasil (como Enel, CPFL, Neoenergia, Cemig, entre outras). Providenciamos as memórias técnicas de cálculo térmico vigentes de proteção relística, plantas DWG arquitetônicas detalhadas detalhadas e assumimos a responsabilidade técnica civil total de aprovação e comissionamento terminal na vistoria operacional de ligação."
                },
                {
                  q: "Quais são os riscos de ficar sem manutenção na cabine de média tensão?",
                  a: "Ficar sem a devida manutenção preventiva acarreta graves consequências para indústrias e empreendimentos comerciais. Os principais riscos incluem explosões por falha na isolação dielétrica de óleos obsoletos, incêndios catastróficos causados por sobreaquecimento de conexões (pontos quentes identificáveis apenas via termografia), desligamentos repentinos de toda a sua fábrica com prejuízos produtivos de alta escala e severas autuações fiscais do Ministério do Trabalho pela não conformidade com a norma reguladora NR-10."
                }
              ].map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#123C73] font-black shrink-0 text-sm">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA FINAL */}
        <section className="bg-[#123C73] text-white py-24 px-6 lg:px-12 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
              alt="Fundo Substações Cabines" 
              className="w-full h-full object-cover opacity-25 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
          </div>
          <div className="relative z-10 max-w-3xl md:w-[75%] mx-auto">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4 uppercase leading-tight">
              PRECISA DE UMA EMPRESA ESPECIALIZADA EM CABINES PRIMÁRIAS E MÉDIA TENSÃO?
            </h2>
            <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Entre em contato hoje mesmo com os engenheiros consultores de média tensão da RE Engenharia Elétrica. Estamos plenamente preparados para diagnosticar as suas cabines existentes, planejar retrofits em chaves obsoletas ou aprovar a sua nova planta de entrada com garantia e experiência comprovada em todo o Brasil.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4.5 rounded transition-all uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                FALE COM A RE ENGENHARIA ELÉTRICA
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  if (serviceId === ActivePage.SPDAAterramento) {
    const relatedProjects = REAL_PROJECTS.filter(p => 
      ['proj-sesi-sp', 'proj-etec-garca', 'proj-escola-ramaciote'].includes(p.id)
    );
    return (
      <div className="animate-fadeIn bg-white">
        {/* SECTION 1: BANNER PRINCIPAL */}
        <section className="relative min-h-[55vh] flex items-center bg-slate-900 text-white overflow-hidden pt-36 pb-24 select-none">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1600&q=80" 
              alt="SPDA e Sistemas de Aterramento" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/90 to-[#123C73]/65" />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs uppercase block mb-3 animate-fadeIn">
                SEGURANÇA FÍSICA E PATRIMONIAL
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-white uppercase animate-fadeIn">
                SPDA E SISTEMAS DE ATERRAMENTO
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 animate-fadeIn">
                Soluções para proteção de pessoas, equipamentos, edificações e instalações elétricas contra descargas atmosféricas e falhas elétricas.
              </p>
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="inline-block bg-[#D62828] hover:bg-[#b52020] text-white font-extrabold tracking-wider text-xs lg:text-sm px-8 py-4.5 rounded transition-all duration-300 uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Solicitar Avaliação Técnica
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXTO INSTITUCIONAL */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">PROTEÇÃO AVANÇADA</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight mb-6">
                  Inteligência normativa e engenharia de solo para salvaguardar vidas e ativos de alto valor
                </h2>
                <div className="h-1 w-12 bg-[#D62828] mb-6" />
                <p className="text-xs text-[#6F7782] leading-relaxed">
                  RE Engenharia Elétrica Ltda.<br />
                  Laudos Técnicos e Projetos em Estrita Adequação com a NBR 5419:2015.
                </p>
              </div>
              <div className="lg:col-span-8 text-[#2B2B2B] text-sm lg:text-base leading-relaxed space-y-6 lg:space-y-8 font-normal">
                <p>
                  A implementação de um robusto <strong>SPDA</strong> (Sistema de Proteção contra Descargas Atmosféricas) é indispensável para indústrias, galpões logísticos e edifícios comerciais de alta densidade no Brasil. Mais do que meramente dispor de um <strong>para-raios</strong> instalado no terraço, a proteção sistêmica contra intempéries graves necessita de uma abordagem integrada que contemple caminhos de descida de baixíssima indutância e anéis coletores perfeitamente equilibrados térmicamente. Como uma tradicional e homologada empresa de <strong>engenharia elétrica</strong>, a RE Engenharia Elétrica desenvolve soluções analíticas que blindam permanentemente estruturas civis inteiras e mitigam riscos de sinistros graves e incidentes elétricos sérios.
                </p>
                <p>
                  Os <strong>sistemas de aterramento</strong> desempenham o principal papel de sustentação de toda a integridade eletromecânica e humana operacional. É através de uma dissipação de corrente pelo solo de extrema eficiência — projetada a partir de testes prévios de resistividade do solo em múltiplas camadas via método de Wenner — que garantimos o correto acoplamento equipotencial da planta. Este processo de dreno de energia estática protege máquinas automatizadas caríssimas contra queimas térmicas irreparáveis ocorridas em surtos atmosféricos, garantindo uma operação contínua e a devida <strong>proteção elétrica</strong> para que o seu maquinário opere sem perigosos riscos de flutuação de potencial elétrico.
                </p>
                <p>
                  Com o prestígio de termos superado a marca de <strong>mais de 500 grandes obras executadas</strong> e mais de 30 anos de atuação no mercado nacional especializado, a RE Engenharia Elétrica atua na frentes de projetos integrados, <strong>instalação de para-raios</strong> estruturais (métodos Franklin, Gaiola de Faraday e Eletrogeométrico) e <strong>adequação de SPDA</strong> para seguradoras patrimoniais e vistorias sanitárias estaduais. Nossos engenheiros credenciados realizam o mapeamento termográfico sob carga e medições analíticas de resistência ôhmica de contato, emitindo laudos técnicos definitivos e certificações em total conformidade regulatória junto às normas do Ministério do Trabalho (NR-10) e do Corpo de Bombeiros (AVCB).
                </p>
                <p>
                  A negligência na preservação da malha de aterramento ou na conformidade do <strong>sistema de proteção contra descargas atmosféricas</strong> expõe tomadores de decisão a significativos riscos jurídicos e prejuízos bilionários imediatos em toda a cadeia produtiva comercial de alta tensão. Seja no desenvolvimento de novos sistemas, diagnósticos preventivos anuais ou retrofit completo de conexões oxidadas pelo tempo em qualquer município, conte com a confiabilidade irretocável e atendimento proativo em todo o Brasil que somente a equipe técnica de campo especializada da RE Engenharia Elétrica assegura com total precisão normativa de ponta a ponta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVIÇOS RELACIONADOS */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">ESPECIALIDADES DO SETOR</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Nossas Soluções em Proteção Atmosférica e de Solo
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Conformidade técnica sob a égide da norma ABNT NBR 5419 e NR-10 para mitigar paradas de produção não planejadas.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "SPDA – SISTEMA DE PROTEÇÃO CONTRA DESCARGAS ATMOSFÉRICAS",
                  desc: "Desenvolvimento tridimensional e montagem completa de captores, condutores de descida isolados de alta seção e anéis de equalização equipotencial sob as diretrizes vigentes da NBR 5419. Realizamos detalhados mapeamentos de densidade de raios na região para estabelecer o método construtivo ideal, garantindo plena proteção contra danos mecânicos e térmicos indiretos no canteiro residencial."
                },
                {
                  title: "SISTEMAS DE ATERRAMENTO",
                  desc: "Estudo analítico de estratificação do solo visando à implantação física de malhas de terra eficientes, utilizando conexões por solda exotérmica de alta pureza e hastes de cobre eletrolítico profundas. Nossas malhas mantêm a impedância estável em todas as estações climáticas do ano, dissipando cargas transientes sem provocar perigosos potenciais de passo ou toque na planta."
                },
                {
                  title: "PROTEÇÃO DE EQUIPAMENTOS E INSTALAÇÕES",
                  desc: "Dimensionamento e instalação estratégica de Dispositivos Supressores de Surtos de Tensão (DPS) das classes I, II e III integrados a quadros secundários e painéis QGBT. Essa barreira lógica protege microprocessadores vulneráveis, computadores e computadores de força industrial contra queimas estáticas provocadas por descargas elétricas em redes vizinhas de transmissão."
                },
                {
                  title: "ADEQUAÇÕES E MODERNIZAÇÕES DE SISTEMAS DE PROTEÇÃO",
                  desc: "Laudos técnicos completos, manutenções em captores corroídos severamente, substituição de ramais expostos vulneráveis a centelhamento e eliminação geral de oxidações em conexões subterrâneas antigas. Modernizamos integralmente o seu sistema de para-raios existente à luz das normas em vigor, assegurando renovações ágeis de licenças do Corpo de Bombeiros e seguradoras patrimoniais."
                }
              ].map((item, idx) => (
                <div key={idx} className="py-8 border-b border-[#C9CDD3]/60 last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <span className="font-mono text-[#D62828] text-xs font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] leading-snug group-hover:text-[#123C73] transition-colors uppercase tracking-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OBRAS EXECUTADAS */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                  Obras Relacionadas
                </h2>
                <p className="text-xs lg:text-sm text-[#6F7782] mt-1">
                  Portfólio comprovado de frentes industriais e públicas protegidas contra raios e curtos através de nossa engenharia de campo.
                </p>
              </div>
              <button
                onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
                className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2.5 px-6 rounded transition-all uppercase whitespace-nowrap cursor-pointer"
              >
                Ver Todas as Obras
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectGalleryCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-3xl md:w-[75%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Respostas detalhadas fornecendo inteligência regulatória e orientações reais e diretas no domínio de descargas e solo.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Quem faz SPDA e aterramento para indústrias e prédios comerciais?",
                  a: "A equipe técnica e engenheiros credenciados da RE Engenharia Elétrica possui mais de 30 anos de expertise em sistemas industriais e prediais no Brasil. Concebemos o projeto completo de malhas de dissipação do zero, executamos passagens de cabos de descida estruturados, aterramos equipamentos de alta escala e emitimos o correspondente laudo técnico consubstanciado com ART perante o CREA."
                },
                {
                  q: "SPDA é obrigatório para empresas?",
                  a: "Sim, a implantação e constante atestado de conformidade do SPDA é compulsória no Brasil segundo mandamentos das normas NR-10 do Ministério do Trabalho, exigências municipais locais do Corpo de Bombeiros Militar para a concessão do AVCB e por imposição legal de todas as seguradoras nacionais de patrimônio privado para validar indenizações em caso de acidentes severos."
                },
                {
                  q: "Como saber se o aterramento da empresa está adequado?",
                  a: "Apenas por meio de criteriosas vistorias de engenharia e ensaios técnicos qualificados de campo. É fundamental utilizar terrômetros calibrados (com certificados emitidos por laboratórios da Rede Brasileira de Calibração - RBC) que aferem a resistência em múltiplos quadrantes, além de mapear térmicamente todas as juntas e verificar a integridade física de conexões exotérmicas enterradas na terra firme."
                },
                {
                  q: "Quando revisar um sistema de para-raios?",
                  a: "Em obediência estrita aos termos técnicos da norma reguladora ABNT NBR 5419, a inspeção visual completa deve ser realizada semestralmente. No entanto, o laudo técnico completo e ensaios dielétricos de solo com emissão de ART devem ser obrigatoriamente refeitos de forma anual para plantas que acondicionem substâncias explosivas ou inflamáveis de alta severidade operacional, ou a cada 3 anos para demais riscos padrão."
                },
                {
                  q: "Quais riscos uma empresa corre sem um sistema de proteção adequado?",
                  a: "Ficar à mercê de descargas elétricas acarreta risco iminente de mortes por choque térmico ou eletrocussão direta de trabalhadores fabris, incêndios civis generalizados nas estruturas construídas, queima instantânea de computadores e geradores caros, recusa de pagamento de apólice de cobertura de seguro patrimonial empresarial por negligência cível declarada e pesadas sanções fiscais com paralisação judicial da sua planta produtiva."
                },
                {
                  q: "Qual a diferença entre SPDA e aterramento?",
                  a: "O SPDA é o arranjo total de equipamentos aéreos compostos por captores Franklin e condutores estruturados de descida voltados para guiar e capturar com segurança os raios que atingem diretamente a cobertura do edifício. Por outro lado, o sistema de aterramento é o subsistema de solo responsável por dissipar essa torrente de elétrons de alta corrente vinda do raio diretamente na terra firme de forma amigável, servindo também para escoar descargas internas de motores e estabilizar o zero elétrico de toda a rede."
                }
              ].map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#123C73] font-black shrink-0 text-sm">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA FINAL */}
        <section className="bg-[#123C73] text-white py-24 px-6 lg:px-12 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
              alt="Fundo Proteção SPDA" 
              className="w-full h-full object-cover opacity-25 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
          </div>
          <div className="relative z-10 max-w-3xl md:w-[75%] mx-auto">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4 uppercase leading-tight">
              PRECISA DE UMA EMPRESA ESPECIALIZADA EM SPDA E SISTEMAS DE ATERRAMENTO?
            </h2>
            <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Fale hoje mesmo com os engenheiros de campo do departamento de segurança patrimonial da RE Engenharia Elétrica. Estamos plenamente preparados para diagnosticar o seu cabo terra, calibrar relés, modernizar para-raios existentes ou projetar uma blindagem robusta sob as mais severas condições climáticas brasileiras.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4.5 rounded transition-all uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                FALE COM A RE ENGENHARIA ELÉTRICA
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (serviceId === ActivePage.SistemasIncendio) {
    const relatedProjects = REAL_PROJECTS.filter(p => 
      ['proj-ceu-carmo', 'proj-ci-osasco', 'proj-cenforpe'].includes(p.id)
    );
    return (
      <div className="animate-fadeIn bg-white">
        {/* SECTION 1: BANNER PRINCIPAL */}
        <section className="relative min-h-[55vh] flex items-center bg-slate-900 text-white overflow-hidden pt-36 pb-24 select-none">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80" 
              alt="Sistemas de Detecção e Alarme de Incêndio" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/90 to-[#123C73]/65" />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs uppercase block mb-3 animate-fadeIn">
                SEGURANÇA PREDIAL E INFRAESTRUTURA CRÍTICA
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-white uppercase animate-fadeIn">
                SISTEMAS DE DETECÇÃO E ALARME DE INCÊNDIO
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 animate-fadeIn">
                Projetos, instalações e adequações de sistemas de detecção e alarme de incêndio para proteção de pessoas, patrimônio e continuidade das operações.
              </p>
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="inline-block bg-[#D62828] hover:bg-[#b52020] text-white font-extrabold tracking-wider text-xs lg:text-sm px-8 py-4.5 rounded transition-all duration-300 uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Solicitar Avaliação Técnica
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXTO INSTITUCIONAL */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">CONFORMIDADE E PREVENÇÃO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight mb-6">
                  Soluções inteligentes de resposta ágil para proteger vidas e resguardar a infraestrutura de sua planta
                </h2>
                <div className="h-1 w-12 bg-[#D62828] mb-6" />
                <p className="text-xs text-[#6F7782] leading-relaxed">
                  RE Engenharia Elétrica Ltda.<br />
                  Segurança Predial e Rigor Normativo sob a NBR 17240 e Instruções Técnicas do Corpo de Bombeiros.
                </p>
              </div>
              <div className="lg:col-span-8 text-[#2B2B2B] text-sm lg:text-base leading-relaxed space-y-6 lg:space-y-8 font-normal">
                <p>
                  A instalação de um moderno e ágil <strong>sistema de detecção de incêndio</strong> e <strong>sistema de alarme de incêndio</strong> constitui um pilar vital de sobrevivência, segurança física e estrita conformidade regulatória em qualquer ambiente fabril ou corporativo de alta complexidade. Em edifícios de múltiplos pavimentos, centros hospitalares, galpões logísticos ou escolas com alta densidade populacional, as primeiras frações de segundos após o surgimento de um foco de sinistro definem a extensão total do dano patrimonial e cível. Como uma consolidada e respeitada <strong>empresa especializada em sistemas de incêndio</strong>, concebemos topologias eletrônicas analógicas inteligentes e digitais que alertam instantaneamente equipes de atendimento e acionam defesas do canteiro.
                </p>
                <p>
                  Atuando ativamente com foco técnico em <strong>proteção contra incêndio</strong> e de solo, a RE Engenharia Elétrica projeta e executa toda a <strong>infraestrutura para sistemas de incêndio</strong> na edificação comercial. Isto compreende desde o caminhamento específico com eletrodutos metálicos rígidos galvanizados pesados e caixas estanques de passagem, até a conectorização de cabos de sinal shieldados contra ruídos eletromagnéticos industriais graves e fiação com isolamentos termoplásticos especiais que não propagam fumaça tóxica (LSZH). Nossas soluções de <strong>segurança contra incêndio</strong> garantem que o link de transmissão permaneça íntegro mesmo nos cenários mais hostis.
                </p>
                <p>
                  Com o prestígio de termos vencido a marca de <strong>mais de 500 grandes obras executadas</strong> e acumulado <strong>mais de 30 anos de atuação especializada</strong> de mercado de alta tensão no Brasil, a RE Engenharia Elétrica desenvolve de forma robusta e integrada frentes de <strong>instalação de alarme de incêndio</strong> e outros sistemas correlatos de <strong>sistemas de segurança predial</strong>. Nosso experiente corpo de engenheiros de campo formula mapeamento de captores térmicos e fotoelétricos analógicos em total sintonia técnica com as exigências vigentes da NBR 17240, as Instruções Técnicas (IT) estaduais do Corpo de Bombeiros para emissão de AVCB, e diretrizes rigorosas internacionais exigidas por seguradoras mundiais de renome (como a NFPA e FM Global).
                </p>
                <p>
                  Zelar pela manutenção do sistema e providenciar o ensaio semestral de baterias e testes de acionadores manuais constitui um ato de máxima responsabilidade corporativa para qualquer gestor industrial. Seja desenvolvendo comissionamentos novos, diagnósticos minuciosos preventivos ou promovendo o retrofit de redes e centrais antigas e problemáticas, a equipe técnica especializada da RE Engenharia Elétrica oferece segurança construtiva integral de ponta a ponta. Junte o rigor técnico especializado da <strong>engenharia elétrica</strong> ao profissionalismo exemplar que o seu empreendimento em qualquer município brasileiro exige para operar com plena tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVIÇOS RELACIONADOS */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">ESPECIALIDADES DO SETOR</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Nossas Soluções em Prevenção e Combate Tecnológico
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Conformidade técnica sob as diretrizes da norma ABNT NBR 17240 para resguardar a integridade ocupacional física.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "SISTEMAS DE DETECÇÃO DE INCÊNDIO",
                  desc: "Desenvolvimento técnico e implantação precisa de captores ópticos lineares de fumaça, sensores de fumaça endereçáveis de alto rendimento com isolador de curto-circuito integrado e sensores térmicos para laboratórios de temperatura oscilante. Integramos centrais microprocessadas capazes de acusar a localização exata de qualquer anormalidade na planta."
                },
                {
                  title: "SISTEMAS DE ALARME DE INCÊNDIO",
                  desc: "Instalação de acionadores manuais analógicos ergonômicos, sirenes audiovisuais estroboscópicas de alta potência calibradas em decibéis seguros e painéis repetidores remotos para portarias ou salas de comando 24 horas. Configuração de lógicas inteligentes de intertravamento para desligar sistemas de ar condicionado e liberar saídas de segurança."
                },
                {
                  title: "INFRAESTRUTURA PARA SISTEMAS DE INCÊNDIO",
                  desc: "Montagem física dedicada de redes de eletrodutos blindados pesados, caixas de passagem vedadas de alta resistência mecânica e cabos blindados de pares trançados de altíssima pureza com blindagem eletromagnética contra interferência mútua de conversores de frequência ou quadros elétricos vizinhos."
                },
                {
                  title: "ADEQUAÇÕES E MODERNIZAÇÕES DE SISTEMAS EXISTENTES",
                  desc: "Serviço de readequação total (retrofit) de sistemas convencionais problemáticos ou obsoletos para redes microprocessadas modernas endereçáveis de última geração. Substituição ágil de sensores inoperantes, eliminação de loops de terra, vistorias diagnósticas profundas e adequações necessárias para aprovação de vistorias do Corpo de Bombeiros e auditorias."
                }
              ].map((item, idx) => (
                <div key={idx} className="py-8 border-b border-[#C9CDD3]/60 last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <span className="font-mono text-[#D62828] text-xs font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] leading-snug group-hover:text-[#123C73] transition-colors uppercase tracking-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OBRAS EXECUTADAS */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                  Obras Relacionadas
                </h2>
                <p className="text-xs lg:text-sm text-[#6F7782] mt-1">
                  Portfólio comprovado de frentes públicas e privadas equipadas com a melhor engenharia de segurança de campo e conformidade rígida.
                </p>
              </div>
              <button
                onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
                className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2.5 px-6 rounded transition-all uppercase whitespace-nowrap cursor-pointer"
              >
                Ver Todas as Obras
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectGalleryCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-3xl md:w-[75%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Respostas completas fornecendo inteligência regulatória e orientações reais e diretas no domínio de detecção de incêndio.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Quem instala sistemas de detecção e alarme de incêndio?",
                  a: "Os sistemas de detecção e alarme de incêndio devem ser instalados obrigatoriamente por equipes técnicas gabaritadas de empresas de engenharia especializadas sob a responsabilidade de profissionais credenciados no CREA, como a RE Engenharia Elétrica. Dispomos de pessoal certificado nas disposições da NR-10 e NR-35, instrumental completo para calibração, e capacitado a emitir toda a documentação, relatórios de medição e a correspondente ART para homologações civis regulamentares."
                },
                {
                  q: "Quais empresas precisam de sistemas de detecção de incêndio?",
                  a: "A obrigatoriedade física legal é regulada a partir das especificações de área útil construída, altura do pé-direito, ocupação de pessoas na edificação e a carga térmica calculada de incêndio definida pelas Instruções Técnicas (IT) do Corpo de Bombeiros. Em linhas gerais, galpões de transporte e estocagem fechados, indústrias manufatureiras e químicas, clínicas hospitalares de repouso ou internação, shoppings de alta circulação, escolas, pavilhões e edifícios corporativos comerciais de alta concentração exigem regulamentarmente estes recursos de prevenção ativa."
                },
                {
                  q: "Qual a diferença entre detecção e alarme de incêndio?",
                  a: "O sistema de detecção constitui a inteligência sensorial inteligente do ecossistema, composto por captores fotoelétricos de fumaça, termovelocimétricos analógicos combinados e centrais supervisoras digitais programadas para monitorar a planta interna. O sistema de alarme consiste na engenharia de resposta de emergência, compreendendo as sirenes sonoras de múltiplos tons, sinalizadores estroboscópicos visuais fortes em rotas pré-configuradas e acionadores manuais para escoamento rápido de pessoas."
                },
                {
                  q: "Como saber se meu sistema de incêndio precisa de atualização?",
                  a: "Identifica-se a necessidade de retrofit técnico imediato quando os sensores começam a emitir alarmes falsos excessivos e interrupções crônicas na planta central, a central indica panes em laço constantes de difícil isolamento físico, quando há peças ou componentes oxidados ou danificados pelo tempo, falta de componentes de reposição devido ao fabricante descontinuar a linha de produtos ou quando o Corpo de Bombeiros ou seguradora patrimonial indica inconformidades à norma NBR 17240 em vistorias oficiais preventivas."
                },
                {
                  q: "Quem pode executar a infraestrutura elétrica para sistemas de incêndio?",
                  a: "A execução material destas redes deve ser efetuada exclusivamente por pessoal técnico qualificado sob as orientações de uma empresa consolidada de engenharia elétrica. A RE Engenharia Elétrica realiza o desenvolvimento montado de toda a fiação blindada dedicada sob rígidos leitos ou calhas metálicas independentes, assegurando que o sinal trafegue sem riscos de interrupções por esmagamento ou sinistros térmicos localizados."
                },
                {
                  q: "Como escolher uma empresa especializada em sistemas de detecção e alarme de incêndio?",
                  a: "A escolha deve recair sobre empresas brasileiras que apresentem corpo técnico de engenharia estável e próprio, portfólio físico comprovado via Acervo Técnico com registros de ART de obras similares anteriores homologadas pelo Corpo de Bombeiros, e amplo amparo legal de segurança. Com mais de 30 anos de atuação especializada, a RE Engenharia Elétrica preenche e excede esses preceitos fornecendo soluções sob medida, de alta durabilidade operacional e excelente custo-benefício construtivo."
                }
              ].map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#123C73] font-black shrink-0 text-sm">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA FINAL */}
        <section className="bg-[#123C73] text-white py-24 px-6 lg:px-12 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
              alt="Fundo Proteção Prevenção Incêndio" 
              className="w-full h-full object-cover opacity-25 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
          </div>
          <div className="relative z-10 max-w-3xl md:w-[75%] mx-auto">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4 uppercase leading-tight">
              PRECISA DE UMA EMPRESA ESPECIALIZADA EM SISTEMAS DE DETECÇÃO E ALARME DE INCÊNDIO?
            </h2>
            <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Entre em contato hoje mesmo com os engenheiros de campo do departamento de segurança predial da RE Engenharia Elétrica. Estamos prontos para projetar a sua planta do absoluto zero, testar acionadores analógicos ou realizar um retrofit profundo de forma normatizada em conformidade com as legislações vigentes nacionais.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4.5 rounded transition-all uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                FALE COM A RE ENGENHARIA ELÉTRICA
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (serviceId === ActivePage.EnergiaSolar) {
    const relatedProjects = REAL_PROJECTS.filter(p => 
      ['proj-sesi-sp', 'proj-ceu-carmo', 'proj-etec-garca'].includes(p.id)
    );
    return (
      <div className="animate-fadeIn bg-white">
        {/* SECTION 1: BANNER PRINCIPAL */}
        <section className="relative min-h-[55vh] flex items-center bg-slate-900 text-white overflow-hidden pt-36 pb-24 select-none">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" 
              alt="Sistemas de Geração Fotovoltaica" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-35 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/90 to-[#123C73]/65" />
          </div>
          
          <div className="relative z-10 w-full max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs uppercase block mb-3 animate-fadeIn">
                MICROGERAÇÃO E SUSTENTABILIDADE ENERGÉTICA
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-white uppercase animate-fadeIn">
                ENERGIA SOLAR
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-8 animate-fadeIn">
                Soluções em energia solar para redução de custos, eficiência energética e sustentabilidade.
              </p>
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="inline-block bg-[#D62828] hover:bg-[#b52020] text-white font-extrabold tracking-wider text-xs lg:text-sm px-8 py-4.5 rounded transition-all duration-300 uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Solicitar Avaliação Técnica
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXTO INSTITUCIONAL */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">AUTONOMIA E ECONOMIA</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight mb-6">
                  Autonomia de geração e tecnologia fotovoltaica de alto rendimento para blindar suas despesas elétricas
                </h2>
                <div className="h-1 w-12 bg-[#D62828] mb-6" />
                <p className="text-xs text-[#6F7782] leading-relaxed">
                  RE Engenharia Elétrica Ltda.<br />
                  Projetos Regulamentados, Estudos de Viabilidade Técnica-Financeira e Eficiência sob Contrato.
                </p>
              </div>
              <div className="lg:col-span-8 text-[#2B2B2B] text-sm lg:text-base leading-relaxed space-y-6 lg:space-y-8 font-normal">
                <p>
                  A <strong>energia solar fotovoltaica</strong> representa na atualidade uma das mais revolucionárias e inteligentes escolhas de investimento estratégico para qualquer corporação industrial, estabelecimento comercial ou residência de alto padrão que deseja atenuar suas despesas administrativas crônicas de forma sustentável. Baseando-se no efeito de conversão da luz natural do Sol em energia elétrica pura em corrente contínua pelos painéis de silício, a <strong>energia solar</strong> propicia a emancipação parcial ou total das constantes flutuações tarifárias e elevações de bandeiras que encarecem severamente o custo logístico brasileiro. Como uma tradicional e homologada empresa especializada em <strong>engenharia elétrica</strong>, a RE Engenharia Elétrica elabora estudos integrados de viabilidade que definem a melhor arquitetura de geração para cada perfil de consumo.
                </p>
                <p>
                  Os benefícios operacionais de se investir em um <strong>sistema fotovoltaico</strong> ultrapassam a esfera da simples conformidade fiscal de balanço anual. A autogeração de energia concede sustentabilidade sistêmica à operação de máquinas, reduzindo drasticamente as demandas sob carga em horários de pico comercial regulamentar e possibilitando economias reais que podem vir a abater até 95% do valor histórico das faturas de eletricidade recorrentes. Esse processo de <strong>sustentabilidade energética</strong> age liberando fluxo de caixa para reinvestimentos internos, conferindo diferencial econômico imediato frente aos principais concorrentes regionais e posicionando a sua marca como uma organização socialmente responsável alinhada a práticas ecológicas e <strong>energia renovável</strong> de baixo impacto global.
                </p>
                <p>
                  Com a bagagem histórica de termos ultrapassado a meta de <strong>mais de 500 grandes obras executadas</strong> e computando <strong>mais de 30 anos de atuação especializada</strong> de mercado de média e alta tensão, a RE Engenharia Elétrica desenvolve com primor técnico absoluto frentes de projeto, homologação junto a concessionárias locais, <strong>instalação de energia solar</strong> física em telhados de todos os formatos e suporte continuado. Como uma renomada <strong>empresa de energia solar</strong> consolidada, operamos sob rigoroso critério normativo, estruturando as fixações das placas com elementos estruturais que asseguram integridade mecânica contra intempéries graves sem interferir em termos de impermeabilização no local de apoio.
                </p>
                <p>
                  Investir na correta estruturação da sua <strong>geração de energia solar</strong> sob o acompanhamento de uma assessoria de engenharia idônea é o único caminho seguro para usufruir de um retorno financeiro consistente sem os recorrentes dissabores de quebras prematuras de microinversores ou falhas sistêmicas na rede distribuidora privada. Seja projetando do início, expandindo capacidades ativas ou implementando planos de manutenção preditiva com limpezas químicas e medições analíticas de isolamento, a RE Engenharia Elétrica assegura excelência construtiva de altíssima confiabilidade e atendimento ágil em todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SOLUÇÕES EM ENERGIA SOLAR */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">NOSSAS SOLUÇÕES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Modelos de Atendimento em Tecnologia de Geração Solar
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Arquiteturas robustas projetadas sob premissas de alta eficiência linear e rigor estrutural de engenharia.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  title: "ENERGIA SOLAR PARA EMPRESAS",
                  desc: "Desenvolvimento técnico refinado de microgeradoras comerciais projetadas para amortizar despesas tributárias e otimizar margens em shopping centers, sedes administrativas, concessionárias e varejistas de alta escala operacional. Garantimos payback acelerado e lógicas eficientes de compensação de crédito por autoconsumo remoto em múltiplos endereços sob a mesma titularidade de rede."
                },
                {
                  title: "ENERGIA SOLAR PARA INDÚSTRIAS",
                  desc: "Sistemas robustos de solo ou integrados a coberturas metálicas industriais de grande porte, dimensionados para atender as mais rígidas exigências técnicas operacionais de maquinários fabris pesados. Nossos projetos minimizam custos de demanda contratada sob carga primária, equilibram distorções harmônicas locais e utilizam inversores de renome com altos índices de eficiência nominal linear sob condições térmicas extremas."
                },
                {
                  title: "ENERGIA SOLAR PARA RESIDÊNCIAS",
                  desc: "Sistemas residenciais de alta qualidade estética e arquitetônica para casas térreas ou condomínios verticais sofisticados. Nossos procedimentos de montagem utilizam garras e perfis de alumínio anodizado de altíssima durabilidade estrutural e estanqueidade mecânica completa contra infiltrações severas de umidade, garantindo segurança ao imóvel e autossuficiência contínua geracional imediata."
                },
                {
                  title: "PROJETOS E INSTALAÇÕES FOTOVOLTAICAS",
                  desc: "Estudos técnicos de sombreamento 3D via softwares avançados, diagramas unifilares detalhados, submissão da documentação regulamentar e aprovação integral do parecer de acesso perante a distribuidora de energia elétrica regional (como Enel, CPFL, Neoenergia). Comissionamos fisicamente a obra com equipes técnicas próprias de engenharia de campo, emitindo ART e assumindo responsabilidades civis."
                }
              ].map((item, idx) => (
                <div key={idx} className="py-8 border-b border-[#C9CDD3]/60 last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <span className="font-mono text-[#D62828] text-xs font-bold block mb-2">0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-base lg:text-lg text-[#2B2B2B] leading-snug group-hover:text-[#123C73] transition-colors uppercase tracking-tight text-left">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OBRAS EXECUTADAS */}
        <section className="py-24 bg-white border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-7xl md:w-[75%] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
                <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                  Obras Relacionadas
                </h2>
                <p className="text-xs lg:text-sm text-[#6F7782] mt-1">
                  Portfólio de projetos estruturais, retrofits e instalações civis de ponta onde implementamos alta infraestrutura de energia.
                </p>
              </div>
              <button
                onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
                className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2.5 px-6 rounded transition-all uppercase whitespace-nowrap cursor-pointer"
              >
                Ver Todas as Obras
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectGalleryCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-[#F7F8FA] border-b border-[#C9CDD3] px-6 lg:px-12">
          <div className="max-w-3xl md:w-[75%] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
              <h2 className="font-sans font-bold text-3xl text-[#2B2B2B] tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-xs lg:text-sm text-[#6F7782] mt-2">
                Respostas completas fornecendo inteligência regulatória e orientações reais e diretas no domínio de autogeração de energia.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Energia solar vale a pena para empresas?",
                  a: "Sem dúvida alguma. Para corporações privadas e indústrias de consumo volumoso contínuo sob contratos comerciais, a energia solar fotovoltaica representa uma das vias mais consistentes para reduzir substancialmente as contas correntes de eletricidade. O abatimento financeiro drástico liberta capital produtivo estratégico para ser realocado nas operações fundamentais, além de resguardar o planejamento orçamentário anual das frequentes oscilações inflacionárias e de bandeiras acionadas de forma imprevista pela concessionária."
                },
                {
                  q: "Quanto é possível economizar com energia solar?",
                  a: "A redução física na despesa mensal com energia elétrica pode alcançar até 95% do montante original das faturas faturadas pela concessionária de distribuição. A cobrança residual permanecerá vinculada apenas aos impostos padrão obrigatórios locais (como a COSIP) e à modalidade de taxa de disponibilidade mínima regulamentadora da concessionária (monofásica, bifásica ou trifásica), garantindo excelente retorno econômico ao longo do ciclo de vida dos módulos."
                },
                {
                  q: "Como funciona a instalação de um sistema fotovoltaico?",
                  a: "Todo o processo inicia-se com um robusto e detalhado estudo unifilar tridimensional de sombreamento e análise mecânica estrutural das calhas e coberturas. Em seguida, após a anuência técnica formal e obtenção do Parecer de Acesso perante a distribuidora local de eletricidade, realizamos a montagem física segura dos perfis estruturais de fixação suporte, fixação ordenada dos painéis fotovoltaicos de alta secção, conectorização inteligente dos microinversores digitais e cabeamento blindado dedicado de condução até a caixa de controle principal de entrada."
                },
                {
                  q: "Quem faz projetos e instalação de energia solar?",
                  a: "Projetos e montagens estruturais qualificadas de geração solar devem ser obrigatoriamente desenvolvidos por companhias sólidas e devidamente constituídas de engenharia elétrica que disponham de profissionais técnicos devidamente habilitados junto ao conselho regional do CREA, como a RE Engenharia Elétrica. Nossa equipe própria é altamente especializada em trabalhos em altura sob as diretrizes das NBRs reguladoras e executa cada etapa portiva do início até a ligação terminal com emissão ativa de ART."
                },
                {
                  q: "Quanto tempo leva para obter retorno do investimento?",
                  a: "Em obediência direta às taxas de irradiação solar características das regiões Sudeste e Nordeste do Brasil, o payback (retorno de investimento total corrigido) para frentes comerciais e industriais de porte costuma se consolidar predominantemente em uma média entre 3 a 5 anos de geração plena ininterrupta do ecossistema. Considerando que a garantia linear de eficiência das células de qualidade superior que especificamos excede com folga 25 anos, o cliente usufruirá de mais de duas décadas inteiras de eletricidade praticamente gratuita no canteiro."
                },
                {
                  q: "Energia solar funciona em dias nublados?",
                  a: "Sim, opera de forma perfeitamente contínua sob o solo brasileiro. Embora a produtividade nominal sofra quedas naturais proporcionais à redução do fluxo direto, as células de silício modernas captam de forma analítica a irradiação solar difusa que ultrapassa a barreira do nevoeiro na atmosfera para dar continuidade à autogeração continuada. Nossos softwares de dimensionamento meteorológico computam previamente essas sazonalidades anuais de cobertura de nuvens antes do início dos serviços, garantindo simulações anuais altamente confiáveis."
                }
              ].map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50/60 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <span className="text-[#123C73] font-black shrink-0 text-sm">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed text-left font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA FINAL */}
        <section className="bg-[#123C73] text-white py-24 px-6 lg:px-12 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
              alt="Fundo Solar Soluções" 
              className="w-full h-full object-cover opacity-25 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
          </div>
          <div className="relative z-10 max-w-3xl md:w-[75%] mx-auto">
            <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4 uppercase leading-tight">
              QUER REDUZIR SEUS CUSTOS COM ENERGIA?
            </h2>
            <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Entre em contato hoje mesmo com os engenheiros de campo do departamento de soluções fotovoltaicas e geração distribuída da RE Engenharia Elétrica. Estamos prontos para prever toda a sua curva real de economia, orientar a aprovação nas distribuidoras e executar uma instalação premium para garantir a máxima sustentabilidade do seu negócio.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate(ActivePage.Contato)}
                className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4.5 rounded transition-all uppercase shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                FALE COM A RE ENGENHARIA ELÉTRICA
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn bg-white">
      <section className="bg-[#123C73] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Soluções Gerais" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block mb-3">{getServiceTypeLabel()}</span>
            <h1 className="font-sans font-bold text-3xl lg:text-5xl tracking-tight leading-tight mb-4">
              {getServiceLabel()}
            </h1>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
              {details.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. NOSSA ATUAÇÃO / DETAILED EXPLANATION */}
      <section className="py-16 px-6 lg:px-12 border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-6">
                Como Trabalhamos
              </h2>
              <div className="text-sm lg:text-base text-[#6F7782] leading-relaxed space-y-4">
                <p>
                  Atuando com rigor construtivo absoluto, a RE Engenharia Elétrica formula soluções que protegem ativos comerciais e garantem conformidade com normas concessionárias e exigências legais nacionais.
                </p>
                <p>
                  Nossas atuações de linha de frente cobrem cálculos estruturais robustos, estudos preditivos detalhados de desvio elétrico de fase, instalação mecânica de eletrocalhas metálicas galvanizadas pesadas de longo curso, vedações térmicas e inspeções periódicas. Todo o progresso de ponta a ponta é documentado via Diários de Obra que atestam a qualidade civil da entrega.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#F7F8FA] p-6 rounded-xl border border-[#C9CDD3]">
              <h4 className="font-sans font-bold text-sm lg:text-base text-[#2B2B2B] mb-4 flex items-center gap-2 border-b border-[#C9CDD3] pb-2">
                <Icons.ShieldCheck className="text-[#123C73] w-5 h-5" />
                Garantias Técnicas RE:
              </h4>
              <ul className="space-y-3 text-xs text-[#2B2B2B]">
                <li className="flex gap-2">
                  <span className="text-[#D62828] font-extrabold">✓</span>
                  Respaldado com emissão de ART ativa no CREA-SP.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D62828] font-extrabold">✓</span>
                  Técnicos próprios equipados e certificados em NR-10 e NR-35.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D62828] font-extrabold">✓</span>
                  Emprego de materiais homologados rastreáveis.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#D62828] font-extrabold">✓</span>
                  Ensaios dielétricos executados com maquinário certificado RBC.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÕES DESENVOLVIDAS */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F8FA] border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">CONHEÇA AS DIVISÕES</span>
            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight">
              Nossas Soluções em Detalhes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {details.subsections.map((sub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-[#C9CDD3] shadow-xs hover:border-[#123C73] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#123C73]/5 flex items-center justify-center font-bold text-[#123C73] text-xs">
                    0{index + 1}
                  </span>
                  <h3 className="font-sans font-bold text-sm lg:text-base text-[#2B2B2B] leading-snug">
                    {sub.title}
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed pl-11">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEGMENTOS ATENDIDOS (SQUARES ROW) */}
      <section className="py-12 px-6 lg:px-12 border-b border-[#C9CDD3] bg-white text-center">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <h3 className="font-sans font-semibold text-xs lg:text-sm text-[#6F7782] uppercase tracking-[0.2em] mb-6">
            SETORS QUE MAIS DEMANDAM ESSE SERVIÇO
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Indústrias', 'Hospitais', 'Escolas e Ensino', 'Agências Bancárias', 'Lajes Corporativas', 'Obras do Governo', 'Utilidades Públicas'].map((seg, idx) => (
              <span key={idx} className="bg-[#F7F8FA] border border-[#C9CDD3] text-xs font-semibold text-[#123C73] py-2 px-4 rounded-full">
                {seg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OBRAS RELACIONADAS */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-2">COMPROVADO EM CAMPO</span>
              <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight">
                Obras Relacionadas Realizadas
              </h2>
            </div>
            <button
              onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
              className="text-xs font-bold text-[#123C73] hover:text-[#D62828] border-2 border-[#123C73] hover:border-[#D62828] py-2 px-5 rounded transition-all uppercase whitespace-nowrap"
            >
              Ver Todas as Obras
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((proj) => (
              <ProjectGalleryCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F8FA] border-b border-[#C9CDD3]">
        <div className="max-w-3xl md:w-[75%] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#123C73] font-bold tracking-widest text-xs uppercase block mb-3">DÚVIDAS FREQUENTES</span>
            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {details.faqs.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div key={index} className="bg-white border border-[#C9CDD3] rounded-lg overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[#123C73] font-extrabold shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 border-t border-[#C9CDD3] bg-slate-50 text-xs lg:text-sm text-[#6F7782] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-[#123C73] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Soluções Gerais CTA" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4">
            Fale com nossos especialistas e inicie seu escopo
          </h2>
          <p className="text-sm lg:text-base text-slate-200 leading-relaxed mb-8">
            Nossa divisão de engenharia está pronta para elaborar propostas de serviços customizadas para sua empresa.
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
