import React from 'react';
import { ActivePage } from '../../types';
import { SERVICES_SUMMARY } from '../../data';
import * as Icons from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (page: ActivePage | string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl md:w-[75%] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-4">
            Serviços Especializados de Engenharia Elétrica
          </h2>
          <p className="text-sm lg:text-base text-[#6F7782] leading-relaxed">
            Fornecemos suporte técnico integral, do início do traçado conceitual de engenharia à montagem e comISSIONamento de painéis em cabinas primárias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_SUMMARY.map((srv) => {
            const IconComponent = (Icons as any)[srv.iconName] || Icons.Settings;
            return (
              <div
                key={srv.id}
                onClick={() => onNavigate(srv.id)}
                className="bg-[#123C73] border border-blue-900/10 p-7 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-[1.03] shadow-md hover:shadow-xl flex flex-col justify-between text-white group cursor-pointer"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center mb-5 group-hover:bg-[#D62828] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5 pointer-events-none" />
                  </div>
                  <h3 className="font-sans font-extrabold text-white text-lg lg:text-xl mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-slate-200/95 leading-relaxed mb-6 font-normal">
                    {srv.description}
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate(srv.id); }}
                  className="text-xs font-bold text-slate-100 group-hover:text-amber-200 flex items-center gap-1.5 uppercase tracking-wider self-start transition-colors duration-300"
                >
                  Conhecer Soluções
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate(ActivePage.Servicos)}
            className="bg-[#123C73] hover:bg-[#0d2d57] text-white font-bold tracking-wider text-xs px-8 py-3.5 rounded transition-all uppercase shadow-md"
          >
            Ver Todos os Serviços
          </button>
        </div>
      </div>
    </section>
  );
};
