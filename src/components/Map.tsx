/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';

export const Map: React.FC = () => {
  return (
    <div className="w-full bg-white border-y border-[#C9CDD3] overflow-hidden" id="google-maps-section">
      <div className="max-w-7xl md:w-[75%] mx-auto py-16 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sede Info on Left (50%) */}
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-xl lg:text-2xl text-[#0A2342] tracking-tight">
              RE Engenharia Elétrica
            </h2>
            <p className="text-xs lg:text-sm text-[#6F7782] leading-relaxed">
              Atendimento nacional com sede corporativa estrategicamente localizada em São Bernardo do Campo - SP, facilitando a logística de equipes e laboratórios de calibração para todo o território brasileiro.
            </p>
            
            <div className="pt-4 border-t border-slate-100 space-y-3 font-sans">
              <div className="flex items-start gap-2.5">
                <span className="text-[#D62828] text-sm mt-0.5">📍</span>
                <div>
                  <span className="block text-[10px] font-bold text-[#6F7782] uppercase tracking-wider">Endereço Principal</span>
                  <span className="text-xs lg:text-sm font-semibold text-[#2B2B2B]">
                    São Bernardo do Campo - São Paulo, SP
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#123C73] text-sm mt-0.5">📞</span>
                <div>
                  <span className="block text-[10px] font-bold text-[#6F7782] uppercase tracking-wider">Telefone e WhatsApp</span>
                  <span className="text-xs lg:text-sm font-semibold text-[#2B2B2B]">
                    (11) 96225-1448
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#123C73] text-sm mt-0.5">✉️</span>
                <div>
                  <span className="block text-[10px] font-bold text-[#6F7782] uppercase tracking-wider">Canais Digitais</span>
                  <span className="text-xs lg:text-sm font-semibold text-[#2B2B2B]">
                    gilbertteixeirael@hotmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional brand logo and stats on Right (50%), no frame, completely clean */}
          <div className="flex flex-col items-center justify-center text-center py-6 space-y-12">
            <div>
              <Logo variant="horizontal" height={110} className="w-auto transition-transform duration-300 hover:scale-105" />
            </div>

            {/* Institutional Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full pt-8 border-t border-slate-100">
              <div className="flex flex-col items-center">
                <span className="font-sans font-extrabold text-4xl lg:text-5xl text-[#D62828] tracking-tight">
                  +30
                </span>
                <span className="font-sans text-xs lg:text-sm font-semibold text-[#6F7782] uppercase tracking-wider mt-2">
                  anos de atuação
                </span>
              </div>
              
              <div className="hidden sm:block text-[#C9CDD3] text-4xl font-light select-none">
                |
              </div>
              
              <div className="flex flex-col items-center">
                <span className="font-sans font-extrabold text-4xl lg:text-5xl text-[#123C73] tracking-tight">
                  +500
                </span>
                <span className="font-sans text-xs lg:text-sm font-semibold text-[#6F7782] uppercase tracking-wider mt-2">
                  trabalhos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
