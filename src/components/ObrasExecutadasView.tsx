/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActivePage } from '../types';
import { REAL_PROJECTS, CORE_NUMBERS, CLIENT_LOGOS } from '../data';
import { ClientLogosGrid } from './ClientLogosGrid';
import * as Icons from 'lucide-react';
import { ProjectGalleryCard } from './ProjectGalleryCard';
import { ProjectDetailPage } from './ProjectDetailPage';

interface ObrasExecutadasViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const ObrasExecutadasView: React.FC<ObrasExecutadasViewProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todas as Obras');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filtersList = [
    'Todas as Obras',
    'Educação',
    'Saúde',
    'Obras Públicas',
    'Bancário',
    'Corporativo',
    'Industrial',
    'Infraestrutura'
  ];

  // Map filters to physical items in database
  const filteredProjects = REAL_PROJECTS.filter((proj) => {
    if (selectedFilter === 'Todas as Obras') return true;
    
    // Check match based on tag
    if (selectedFilter === 'Educação') return proj.segment === 'Educação';
    if (selectedFilter === 'Saúde') return proj.segment === 'Saúde';
    if (selectedFilter === 'Bancário') return proj.segment === 'Bancário';
    if (selectedFilter === 'Corporativo') return proj.segment === 'Corporativo';
    
    // Fallback classification
    if (selectedFilter === 'Obras Públicas') {
      return proj.title.includes('SESI') || proj.title.includes('UPA') || proj.title.includes('ETEC') || proj.title.includes('Guarujá') || proj.title.includes('Escola') || proj.title.includes('CEU') || proj.title.includes('CI') || proj.title.includes('Cenforpe') || proj.title.includes('Osasco') || proj.title.includes('CENTROS');
    }
    if (selectedFilter === 'Industrial') {
      return proj.segment === 'Industrial' || proj.title.includes('Lorena');
    }
    if (selectedFilter === 'Infraestrutura') {
      return proj.title.includes('Lorena') || proj.title.includes('COMTOP') || proj.segment === 'Infraestrutura';
    }

    return true;
  });

  const selectedProject = REAL_PROJECTS.find(p => p.id === selectedProjectId);
  if (selectedProject) {
    return (
      <ProjectDetailPage
        project={selectedProject}
        onBack={() => {
          setSelectedProjectId(null);
          // Gently scroll to top when coming back to portfolio
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />
    );
  }

  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Header */}
      <section className="bg-[#123C73] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Obras Executadas" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-3">
              PORTFÓLIO
            </span>
            <h1 className="font-sans font-bold text-3xl lg:text-5xl tracking-tight leading-tight mb-4">
              Algumas Obras Executadas
            </h1>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed mb-4">
              Ao longo de mais de 30 anos de atuação, a RE Engenharia Elétrica participou da execução de projetos em hospitais, indústrias, instituições de ensino, centros corporativos, empreendimentos públicos e obras de infraestrutura em diversas regiões do Brasil.
            </p>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
              Os projetos apresentados nesta página representam apenas uma parte da experiência construída em centenas de obras executadas com responsabilidade técnica, segurança operacional e conformidade com as normas vigentes.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Numbers Block */}
      <section className="bg-[#123C73] text-white py-10 px-6 lg:px-12">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {CORE_NUMBERS.map((num, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded">
                <div className="font-sans font-extrabold text-2xl lg:text-4xl text-white">
                  {num.value}{num.suffix}
                </div>
                <p className="text-[10px] lg:text-xs font-semibold uppercase tracking-wider text-slate-200 mt-1 leading-snug">
                  {num.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filter section */}
      <section className="py-12 border-b border-[#C9CDD3] px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-sans font-bold text-xl lg:text-2xl text-[#2B2B2B]">Filtros por Segmento</h2>
            <p className="text-xs lg:text-sm text-[#6F7782] mt-1">Navegue pelas nossas obras de acordo com seu setor de especialinteresse.</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {filtersList.map((filter) => {
              const isSelected = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`py-2 px-4 text-xs font-bold rounded-full border transition-all ${
                    isSelected
                      ? 'bg-[#D62828] text-white border-[#D62828] shadow-sm'
                      : 'bg-white text-[#6F7782] border-[#C9CDD3] hover:bg-slate-200/50'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Items Grid */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-[#C9CDD3]">
        <div className="max-w-7xl md:w-[75%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <ProjectGalleryCard 
                key={proj.id} 
                project={proj} 
                onViewProject={setSelectedProjectId} 
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Icons.Inbox className="w-12 h-12 text-[#C9CDD3] mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#6F7782]">Nenhuma obra cadastrada para esse filtro específico.</p>
              <button
                onClick={() => setSelectedFilter('Todas as Obras')}
                className="text-xs text-[#123C73] font-bold underline mt-2"
              >
                Voltar para Todas as Obras
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Companies and Client Institutional logos row */}
      <ClientLogosGrid />

      {/* Experiential CTA Final */}
      <section className="bg-[#123C73] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Obras Executadas CTA" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight mb-4">
            Sua obra com nossa experiência que gera absoluta confiança
          </h2>
          <p className="text-xs lg:text-sm text-slate-200 leading-relaxed mb-8">
            Coloque seu escopo técnico elétrico sob as decisões de um time preparado para prover total continuidade das suas operações sob prazos controlados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase shadow-lg"
            >
              Falar com Engenheiros
            </button>
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase"
            >
              Fazer uma Cotação
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
