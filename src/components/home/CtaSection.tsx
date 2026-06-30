import React from 'react';
import { ActivePage } from '../../types';

interface CtaSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#123C73] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
          alt="Fundo CTA" 
          className="w-full h-full object-cover opacity-25 pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
      </div>
      <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
        <h2 className="font-sans font-bold text-2xl lg:text-4xl tracking-tight mb-6 leading-tight">
          Seu Empreendimento com Segurança e Robustez Elétrica
        </h2>
        <p className="text-sm lg:text-base text-slate-200 leading-relaxed mb-8">
          Coloque sua infraestrutura elétrica sob os cuidados de uma engenharia civilmente responsável que emite ART em todas as suas etapas e assevera total estabilidade operacional para seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate(ActivePage.Contato)}
            className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase shadow-lg"
          >
            Falar Com Especialista
          </button>
          <button
            onClick={() => onNavigate(ActivePage.Servicos)}
            className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold tracking-wider text-xs px-8 py-4 rounded transition-all uppercase"
          >
            Nossas Soluções Técnicas
          </button>
        </div>
      </div>
    </section>
  );
};
