/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActivePage } from '../types';
import { Map } from './Map';
import * as Icons from 'lucide-react';

interface ContatoViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const ContatoView: React.FC<ContatoViewProps> = () => {
  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Header */}
      <section className="bg-[#123C73] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
            alt="Fundo Contato" 
            className="w-full h-full object-cover opacity-25 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-transparent to-[#123C73]/90" />
        </div>
        <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block mb-3">CONVERSA DIRETA</span>
            <h1 className="font-sans font-bold text-3xl lg:text-5xl tracking-tight leading-tight mb-4">
              Fale Conosco
            </h1>
            <p className="text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
              Nossa equipe de consultoria e engenharia está apostos para entender sua necessidade operacional, desenhar propostas bem balizadas e responder civilmente.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Channel columns Grid */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-[#C9CDD3]">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Informações de canais */}
          <div className="space-y-8">
            <div>
              <span className="text-[#D62828] font-bold tracking-widest text-xs uppercase block mb-3">CANAIS DE ATENDIMENTO</span>
              <h2 className="font-sans font-bold text-xl lg:text-2xl text-[#2B2B2B]">
                Fale Diretamente Conosco
              </h2>
              <div className="bg-[#123C73]/5 border border-[#123C73]/20 p-4 rounded-lg my-3 flex items-start gap-3">
                <Icons.UserCheck className="w-5 h-5 text-[#123C73] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#123C73] tracking-wider block">Diretoria Comercial</span>
                  <span className="font-sans font-extrabold text-sm text-[#2B2B2B] block">Gilberto Teixeira da Silva</span>
                  <span className="text-[10px] text-[#6F7782] block font-medium">Diretor Comercial</span>
                </div>
              </div>
              <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed mt-2 font-normal">
                Prefere outros meios de comunicação rápida? Estamos disponíveis em canais tradicionais de atendimento continuado corporativo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://wa.me/5511962251448"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#F7F8FA] border border-[#C9CDD3] p-4 rounded-lg hover:border-[#123C73] hover:bg-slate-50 transition-colors"
                id="contact-whatsapp"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <Icons.MessageSquareQuote className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#6F7782] tracking-wider block">WhatsApp Oficial</span>
                  <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] hover:text-[#123C73] transition-colors">
                    (11) 96225-1448
                  </span>
                </div>
              </a>

              <a
                href="tel:+5511962251448"
                className="flex items-center gap-4 bg-[#F7F8FA] border border-[#C9CDD3] p-4 rounded-lg hover:border-[#123C73] hover:bg-slate-50 transition-colors"
                id="contact-phone"
              >
                <div className="w-10 h-10 rounded-full bg-[#123C73]/10 flex items-center justify-center text-[#123C73] shrink-0">
                  <Icons.Phone className="w-5 h-5 text-[#123C73]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#6F7782] tracking-wider block">Telefone Comercial</span>
                  <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] hover:text-[#123C73] transition-colors">
                    (11) 96225-1448
                  </span>
                </div>
              </a>

              <a
                href="mailto:gilbertteixeirael@hotmail.com"
                className="flex items-center gap-4 bg-[#F7F8FA] border border-[#C9CDD3] p-4 rounded-lg hover:border-[#123C73] hover:bg-slate-50 transition-colors"
                id="contact-email"
              >
                <div className="w-10 h-10 rounded-full bg-[#D62828]/10 flex items-center justify-center text-[#D62828] shrink-0">
                  <Icons.Mail className="w-5 h-5 text-[#D62828]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#6F7782] tracking-wider block">E-mail Corporativo</span>
                  <span className="font-sans font-bold text-xs lg:text-sm text-[#2B2B2B] hover:text-[#123C73] transition-colors break-all">
                    gilbertteixeirael@hotmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE OFFICE MAP */}
      <section className="py-16 px-6 lg:px-12 bg-[#F7F8FA] border-b border-[#C9CDD3]">
        <div className="max-w-5xl md:w-[75%] mx-auto">
          {/* Integrated Interactive map component */}
          <Map />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#123C73] text-white py-12 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl md:w-[75%] mx-auto">
          <p className="text-xs lg:text-sm text-slate-300 uppercase tracking-[0.2em] mb-2 font-semibold">RE ENGENHARIA ELÉTRICA</p>
          <h2 className="font-sans font-bold text-xl lg:text-2xl text-white">Conte com a experiência e profissionalismo de quem atua há mais de 30 anos em obras elétricas de alta responsabilidade.</h2>
        </div>
      </section>
    </div>
  );
};
