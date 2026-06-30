import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  trigger?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 1500,
  className = "",
  prefix = "",
  suffix = "",
  trigger = false,
}) => {
  const [count, setCount] = useState(0);
  const [tick, setTick] = useState(0);

  // Restart animation every 10 seconds when trigger is active
  useEffect(() => {
    if (!trigger) {
      setTick(0);
      return;
    }

    const intervalId = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [trigger]);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    // Reset count at start of animation
    setCount(0);
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing curve (easeOutQuad) for highly readable progression
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [trigger, tick, end, duration]);

  return (
    <span className={`${className} select-none inline-block`}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

const STATE_METRICS: Record<string, { name: string; projects: number; highlight: boolean; details: string }> = {
  SP: { name: "São Paulo", projects: 185, highlight: true, details: "Projetos em shoppings, hospitais e cabines de média tensão" },
  RJ: { name: "Rio de Janeiro", projects: 74, highlight: true, details: "Laudos de SPDA, adequação de subestações e manutenção" },
  MG: { name: "Minas Gerais", projects: 62, highlight: true, details: "Infraestrutura industrial, laudos de aterramento e termo-visão" },
  PR: { name: "Paraná", projects: 48, highlight: true, details: "Subestações industriais e laudos de qualidade de energia" },
  SC: { name: "Santa Catarina", projects: 32, highlight: true, details: "Sistemas de proteção contra descargas atmosféricas (SPDA)" },
  RS: { name: "Rio Grande do Sul", projects: 30, highlight: true, details: "Estudos de curto-circuito e coordenação de proteção" },
  BA: { name: "Bahia", projects: 28, highlight: true, details: "Homologação de geradores e adequação regulatória NR10" },
  GO: { name: "Goiás & DF", projects: 18, highlight: true, details: "Projetos elétricos corporativos e laudos técnicos" },
  ES: { name: "Espírito Santo", projects: 22, highlight: true, details: "Manutenção preventiva de disjuntores e transformadores" },
  AM: { name: "Amazonas", projects: 6, highlight: false, details: "Comissionamento técnico e vistorias qualificadas" },
  AC: { name: "Acre", projects: 2, highlight: false, details: "Suporte técnico regulatório de segurança elétrica" },
  RR: { name: "Roraima", projects: 2, highlight: false, details: "Adequação de instalações e laudos prediais" },
  PA: { name: "Pará", projects: 12, highlight: false, details: "Laudos SPDA e conformidade regulatória industrial" },
  AP: { name: "Amapá", projects: 2, highlight: false, details: "Análise de instalações internas e aterramento" },
  RO: { name: "Rondônia", projects: 4, highlight: false, details: "Laudos de aterramento técnico industrial" },
  TO: { name: "Tocantins", projects: 5, highlight: false, details: "Instalação de para-raios e aterramentos" },
  MA: { name: "Maranhão", projects: 6, highlight: false, details: "Adequações elétricas comerciais de segurança" },
  PI: { name: "Piauí", projects: 4, highlight: false, details: "Projetos de para-raios e laudos preventivos" },
  CE: { name: "Ceará", projects: 8, highlight: false, details: "Sistemas de SPDA e aterramentos comerciais" },
  RN: { name: "Rio Grande do Norte", projects: 5, highlight: false, details: "Vistoria e comissionamento de cabines primárias" },
  PB: { name: "Paraíba", projects: 4, highlight: false, details: "Emissão de laudos com anotação de responsabilidade técnica (ART)" },
  PE: { name: "Pernambuco", projects: 10, highlight: false, details: "Laudos preventivos em indústrias e comércio" },
  AL_SE: { name: "Alagoas & Sergipe", projects: 5, highlight: false, details: "Manutenção de painéis e análise de termografia" },
  MT: { name: "Mato Grosso", projects: 14, highlight: false, details: "Projetos de engenharia para agronegócio e silos" },
  MS: { name: "Mato Grosso do Sul", projects: 12, highlight: false, details: "Laudos de instalações conexas e aterramentos" },
};

export const CoreNumbersSection: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-slate-50 text-[#2B2B2B] py-24 px-6 lg:px-12 border-y border-[#C9CDD3] overflow-hidden" 
      id="core-numbers-section"
    >
      
      {/* Style block for gentle float, electrical arc sparks, and animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatMapBackground {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes electricZap {
          0%, 100% {
            stroke-width: 3.5px;
            opacity: 0.95;
            filter: drop-shadow(0 0 2px rgba(214,40,40,0.6)) drop-shadow(0 0 4px rgba(245,158,11,0.4));
          }
          50% {
            stroke-width: 5px;
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(245,158,11,0.95)) drop-shadow(0 0 14px rgba(214,40,40,0.75));
          }
        }
        @keyframes energyFlow {
          to {
            stroke-dashoffset: -48;
          }
        }
        @keyframes glowPoint {
          0%, 100% { transform: scale(0.92); filter: drop-shadow(0 1px 1px rgba(214,40,40,0.35)); opacity: 0.85; }
          50% { transform: scale(1.1); filter: drop-shadow(0 2px 3px rgba(214,40,40,0.6)); opacity: 1; }
        }
        @keyframes mapEnergyFlow {
          to {
            stroke-dashoffset: -32;
          }
        }
        .animate-bg-float {
          animation: floatMapBackground 8s ease-in-out infinite;
        }
        .animate-electric-pulse {
          animation: electricZap 1.5s ease-in-out infinite;
        }
        .animate-circuit-energy {
          stroke-dasharray: 12, 36;
          animation: energyFlow 1.2s linear infinite;
        }
        .animate-map-glow-point {
          animation: glowPoint 2.2s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-map-energy {
          stroke-dasharray: 4, 16;
          animation: mapEnergyFlow 1.8s linear infinite;
        }
      `}} />

      {/* Global Dotted World Map Background Pattern */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-[0.25] z-0 flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full min-w-[1024px] max-w-7xl mx-auto" viewBox="0 0 1000 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="world-map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#94A3B8" />
            </pattern>
          </defs>
          {/* Shapes of continents matching a stylized grid projection, filled with high-density dots */}
          <path d="M40,60 L230,30 L320,60 L260,165 L200,225 L160,165 L30,140 Z" fill="url(#world-map-grid)" />
          <path d="M260,25 L360,5 L330,55 L270,45 Z" fill="url(#world-map-grid)" />
          <path d="M190,225 Q270,240 240,305 T160,405 T130,305 Z" fill="url(#world-map-grid)" />
          <path d="M380,55 L480,35 L730,35 L930,75 L900,215 L780,265 L730,165 L630,225 L530,205 L430,185 Z" fill="url(#world-map-grid)" />
          <path d="M400,185 L540,185 L560,245 L480,365 L420,265 Z" fill="url(#world-map-grid)" />
          <path d="M780,265 L880,275 L860,345 L760,325 Z" fill="url(#world-map-grid)" />
        </svg>
      </div>

      {/* Floating gradient lights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#123C73]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D62828]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl md:w-[85%] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Title + Stats stack centered vertically to match the map height */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left h-full space-y-6 lg:space-y-8">
            
            {/* Header Title */}
            <div className="max-w-xl">
              <h2 className="font-sans font-bold text-2xl lg:text-4.5xl text-[#0A2342] tracking-tight leading-tight mb-4">
                Presença e Rigor Técnico de Linha de Frente
              </h2>
              <p className="text-sm md:text-base text-[#525E71] font-semibold leading-relaxed">
                Operamos com engenharia de precisão e mobilização imediata estruturada para entregar máxima segurança operacional em todos os estados brasileiros.
              </p>
            </div>

            {/* Vertical Stacked and stylized bento cards for ALL 4 stats in the same format */}
            <div className="w-full space-y-4 pt-4 lg:pt-0 border-t border-[#C9CDD3]/85 lg:border-t-0">
              
              {/* Stat 1 Card: Obras (Same layout structure!) */}
              <div className="bg-white/80 hover:bg-white backdrop-blur-md p-4 rounded-xl border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="bg-red-50 text-[#D62828] w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-2xl md:text-3xl font-black tracking-tight leading-none flex items-center">
                    <AnimatedCounter end={500} prefix="+" trigger={isSectionVisible} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wider">
                    Obras Concluídas
                  </h3>
                  <p className="text-xs text-[#6F7782] font-semibold mt-0.5">
                    Instalações robustas finalizadas com excelência técnica absoluta.
                  </p>
                </div>
              </div>

              {/* Stat 2 Card: Anos */}
              <div className="bg-white/80 hover:bg-white backdrop-blur-md p-4 rounded-xl border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="bg-red-50 text-[#D62828] w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-2xl md:text-3xl font-black tracking-tight leading-none flex items-center">
                    <AnimatedCounter end={30} prefix="+" trigger={isSectionVisible} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wider">
                    Anos de Experiência
                  </h3>
                  <p className="text-xs text-[#6F7782] font-semibold mt-0.5">
                    Sólida atuação no setor de infraestrutura e engenharia de ponta.
                  </p>
                </div>
              </div>

              {/* Stat 3 Card: Estados */}
              <div className="bg-white/80 hover:bg-white backdrop-blur-md p-4 rounded-xl border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="bg-red-50 text-[#D62828] w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-2xl md:text-3xl font-black tracking-tight leading-none">
                    <AnimatedCounter end={26} trigger={isSectionVisible} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wider">
                    Estados Atendidos
                  </h3>
                  <p className="text-xs text-[#6F7782] font-semibold mt-0.5">
                    Prontidão logística com rápida mobilização de equipes por todo o Brasil.
                  </p>
                </div>
              </div>

              {/* Stat 4 Card: Segurança */}
              <div className="bg-white/80 hover:bg-white backdrop-blur-md p-4 rounded-xl border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="bg-red-50 text-[#D62828] w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-2xl md:text-3xl font-black tracking-tight leading-none flex items-center">
                    <AnimatedCounter end={100} suffix="%" trigger={isSectionVisible} />
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wider">
                    Segurança e Registro (ART)
                  </h3>
                  <p className="text-xs text-[#6F7782] font-semibold mt-0.5">
                    Conformidade técnica integral e rigorosa emissão de ART activa.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Giant Interactive Map of Brazil with dynamic hub overlays */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100/85 rounded-3xl border border-slate-200/60 p-6 md:p-10 hover:shadow-xl transition-all duration-500 w-full lg:min-h-[620px] shadow-sm select-none">
            
            {/* Radial gradient background aura for map contrast */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-4 right-4 text-[10px] font-extrabold text-slate-400 tracking-[0.15em] uppercase font-mono z-10">
              Cobertura Geográfica Ativa
            </div>

            {/* Professional stamp for Registro CREA-SP reflecting the visual focus from user's attachment */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-2.5 rounded-xl shadow-xs flex items-center gap-2 z-10">
              <div className="w-8 h-8 rounded-full bg-[#0A2342]/10 flex items-center justify-center font-black text-[#0A2342] text-[9px] shrink-0 border border-[#0A2342]/20">
                CREA
              </div>
              <div>
                <div className="text-[9px] font-extrabold text-[#0A2342] leading-none uppercase">Registro CREA-SP Ativo</div>
                <div className="text-[8px] text-[#6F7782] font-bold mt-0.5">Acervo Técnico & Responsabilidade Civil</div>
              </div>
            </div>

            {/* Dynamically Hovered State Information Panel */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E2E8F0] px-4 py-3 rounded-xl shadow-lg flex flex-col gap-1 transition-all duration-300 z-10">
              {hoveredStateId && STATE_METRICS[hoveredStateId] ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#0A2342] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D62828] animate-ping" />
                      {STATE_METRICS[hoveredStateId].name} ({hoveredStateId})
                    </span>
                    <span className="text-xs font-black text-[#D62828] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100 uppercase tracking-wide">
                      {STATE_METRICS[hoveredStateId].projects} Obras
                    </span>
                  </div>
                  <p className="text-[11px] text-[#525E71] font-semibold mt-1">
                    {STATE_METRICS[hoveredStateId].details}
                  </p>
                  <div className="text-[9px] text-[#1D4F91] font-black uppercase mt-1 tracking-wide flex items-center gap-1">
                    <span>✔ Homologação CREA Concluída</span>
                    <span className="text-slate-300">•</span>
                    <span>Qualificação Certificada</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2.5 text-xs text-[#525E71] font-bold py-1">
                  <Icons.MapPin className="w-4 h-4 text-[#D62828]" />
                  <span>Passe o mouse sobre os estados para ver a atuação técnica em tempo real.</span>
                </div>
              )}
            </div>

            <div className="w-full max-w-[530px] md:max-w-[620px] relative pt-12 pb-14">
              
              {/* SVG Vector Map of Brazil representing regional hubs & animated electrical grids */}
              <svg 
                viewBox="0 0 500 500" 
                className="w-full h-auto drop-shadow-[0_22px_45px_rgba(10,35,66,0.14)] hover:scale-[1.01] transition-transform duration-75 select-none cursor-default"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2E5C9A" />
                    <stop offset="100%" stopColor="#0B2342" />
                  </linearGradient>
                  <linearGradient id="normalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F1F5F9" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                  </linearGradient>
                  <linearGradient id="activeHoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#D62828" />
                  </linearGradient>
                </defs>

                <g stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" fillRule="evenodd">
                  {/* Amazonas (AM) */}
                  <path 
                    d="M40,150 L110,95 L180,105 L170,165 L110,215 L50,195 Z" 
                    fill={hoveredStateId === 'AM' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('AM')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Acre (AC) */}
                  <path 
                    d="M10,190 L50,195 L60,225 L25,230 L10,210 Z" 
                    fill={hoveredStateId === 'AC' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('AC')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Roraima (RR) */}
                  <path 
                    d="M110,95 L140,55 L170,95 L140,115 Z" 
                    fill={hoveredStateId === 'RR' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('RR')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Pará (PA) */}
                  <path 
                    d="M180,105 L211,70 L280,105 L290,165 L270,205 L180,165 Z" 
                    fill={hoveredStateId === 'PA' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('PA')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Amapá (AP) */}
                  <path 
                    d="M260,60 L285,45 L295,75 L275,85 Z" 
                    fill={hoveredStateId === 'AP' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('AP')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Rondônia (RO) */}
                  <path 
                    d="M110,215 L150,205 L175,235 L145,260 L115,245 Z" 
                    fill={hoveredStateId === 'RO' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('RO')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Tocantins (TO) */}
                  <path 
                    d="M270,185 L290,165 L300,235 L265,245 Z" 
                    fill={hoveredStateId === 'TO' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('TO')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Maranhão (MA) */}
                  <path 
                    d="M280,105 L315,105 L320,165 L290,165 Z" 
                    fill={hoveredStateId === 'MA' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('MA')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Piauí (PI) */}
                  <path 
                    d="M315,105 L345,115 L340,175 L320,165 Z" 
                    fill={hoveredStateId === 'PI' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('PI')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Ceará (CE) */}
                  <path 
                    d="M345,115 L385,115 L375,145 L345,135 Z" 
                    fill={hoveredStateId === 'CE' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('CE')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Rio Grande do Norte (RN) */}
                  <path 
                    d="M385,115 L415,120 L405,140 L385,135 Z" 
                    fill={hoveredStateId === 'RN' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('RN')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Paraíba (PB) */}
                  <path 
                    d="M385,135 L405,140 L400,155 L380,150 Z" 
                    fill={hoveredStateId === 'PB' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('PB')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Pernambuco (PE) */}
                  <path 
                    d="M350,155 L400,155 L395,170 L345,170 Z" 
                    fill={hoveredStateId === 'PE' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('PE')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Alagoas / Sergipe (AL/SE) */}
                  <path 
                    d="M380,170 L395,170 L390,190 L375,185 Z" 
                    fill={hoveredStateId === 'AL_SE' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('AL_SE')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Bahia (BA) */}
                  <path 
                    d="M300,175 L340,175 L380,185 L360,250 L315,245 Z" 
                    fill={hoveredStateId === 'BA' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('BA')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Mato Grosso (MT) */}
                  <path 
                    d="M170,165 L260,165 L265,245 L175,235 Z" 
                    fill={hoveredStateId === 'MT' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('MT')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Mato Grosso do Sul (MS) */}
                  <path 
                    d="M175,235 L225,245 L215,310 L165,290 Z" 
                    fill={hoveredStateId === 'MS' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('MS')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Goiás / DF (GO) */}
                  <path 
                    d="M265,245 L300,245 L305,295 L255,290 Z" 
                    fill={hoveredStateId === 'GO' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('GO')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Minas Gerais (MG) */}
                  <path 
                    d="M300,245 L355,250 L345,315 L295,305 Z" 
                    fill={hoveredStateId === 'MG' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('MG')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Espírito Santo (ES) */}
                  <path 
                    d="M355,275 L375,280 L370,300 L350,295 Z" 
                    fill={hoveredStateId === 'ES' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('ES')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Rio de Janeiro (RJ) */}
                  <path 
                    d="M335,315 L355,310 L350,330 L330,325 Z" 
                    fill={hoveredStateId === 'RJ' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('RJ')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* São Paulo (SP) */}
                  <path 
                    d="M255,290 L305,295 L295,340 L245,325 Z" 
                    fill={hoveredStateId === 'SP' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('SP')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Paraná (PR) */}
                  <path 
                    d="M235,325 L285,340 L275,370 L225,355 Z" 
                    fill={hoveredStateId === 'PR' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('PR')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Santa Catarina (SC) */}
                  <path 
                    d="M235,370 L275,370 L265,395 L225,390 Z" 
                    fill={hoveredStateId === 'SC' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('SC')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                  {/* Rio Grande do Sul (RS) */}
                  <path 
                    d="M215,390 L265,395 L255,445 L205,430 Z" 
                    fill={hoveredStateId === 'RS' ? 'url(#activeHoverGrad)' : 'url(#normalGrad)'}
                    className="transition-colors duration-250 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId('RS')}
                    onMouseLeave={() => setHoveredStateId(null)}
                  />
                </g>

                {/* Clean state labels overlays with subtle shadows */}
                <g fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif" pointerEvents="none" textAnchor="middle" opacity="0.95">
                  <text x="115" y="160" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">AM</text>
                  <text x="230" y="130" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">PA</text>
                  <text x="340" y="215" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">BA</text>
                  <text x="215" y="200" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">MT</text>
                  <text x="320" y="285" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">MG</text>
                  <text x="275" y="315" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">SP</text>
                  <text x="345" y="325" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">RJ</text>
                  <text x="255" y="350" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">PR</text>
                  <text x="235" y="420" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">RS</text>
                  <text x="280" y="260" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">GO</text>
                  <text x="365" y="130" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">CE</text>
                  <text x="375" y="160" className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">PE</text>
                </g>

                {/* Pulsing electrical station nodes with elegant outer ring + high-visibility inner white core */}
                <g>
                  {/* Porto Alegre - RS */}
                  <circle cx="235" cy="415" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="235" cy="415" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Florianópolis - SC */}
                  <circle cx="250" cy="380" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="250" cy="380" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Curitiba - PR */}
                  <circle cx="255" cy="345" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="255" cy="345" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* São Paulo - SP */}
                  <circle cx="275" cy="305" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="275" cy="305" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Rio de Janeiro - RJ */}
                  <circle cx="345" cy="320" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="345" cy="320" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Belo Horizonte - MG */}
                  <circle cx="320" cy="280" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="320" cy="280" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Vitória - ES */}
                  <circle cx="362" cy="285" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="362" cy="285" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Brasília - DF */}
                  <circle cx="280" cy="265" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="280" cy="265" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Salvador - BA */}
                  <circle cx="345" cy="215" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="345" cy="215" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Recife - PE */}
                  <circle cx="380" cy="155" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="380" cy="155" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Fortaleza - CE */}
                  <circle cx="365" cy="125" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="365" cy="125" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* São Luís - MA */}
                  <circle cx="300" cy="135" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="300" cy="135" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Cuiabá - MT */}
                  <circle cx="215" cy="200" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="215" cy="200" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Belém - PA */}
                  <circle cx="230" cy="115" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="230" cy="115" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                  
                  {/* Manaus - AM */}
                  <circle cx="115" cy="155" r="4.5" fill="#D62828" opacity="0.15" className="animate-map-glow-point" />
                  <circle cx="115" cy="155" r="1.6" fill="#FFFFFF" stroke="#D62828" strokeWidth="1.2" />
                </g>
              </svg>

              {/* Subtitle stating the electric connection overlay */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2 whitespace-nowrap z-10">
                <span className="w-2 h-2 rounded-full bg-[#D62828] animate-ping" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#123C73]">
                  Rede Elétrica Integrada Nacional
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
