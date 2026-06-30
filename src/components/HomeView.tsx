/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActivePage } from '../types';
import { ClientLogosGrid } from './ClientLogosGrid';
import { HeroSection } from './home/HeroSection';
import { ServicesSection } from './home/ServicesSection';
import { SegmentsSection } from './home/SegmentsSection';
import { AboutSection } from './home/AboutSection';
import { CoreNumbersSection } from './home/CoreNumbersSection';
import { DiferenciaisSection } from './home/DiferenciaisSection';
import { CtaSection } from './home/CtaSection';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* 1. HERO SECTION / BANNER PRINCIPAL */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. SERVIÇOS ESPECIALIZADOS DE ENGENHARIA ELÉTRICA */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 3. SEGMENTOS ATENDIDOS */}
      <SegmentsSection onNavigate={onNavigate} />

      {/* 4. SOBRE A RE ENGENHARIA (QUEM SOMOS) */}
      <AboutSection onNavigate={onNavigate} />

      {/* 5. OBRAS EXECUTADAS (CORE NUMBERS / Brazil Map & Stats) */}
      <CoreNumbersSection />

      {/* 6. DEMAIS SEÇÕES */}
      {/* 6.1 EMPRESAS E INSTITUIÇÕES ATENDIDAS */}
      <ClientLogosGrid />

      {/* 6.2 DIFERENCIAIS */}
      <DiferenciaisSection />

      {/* 6.3 CTA FINAL */}
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};
