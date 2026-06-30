import React, { useEffect, useRef } from 'react';
import { ActivePage } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Extra safety measure: find the video in the container and force play on mount & interaction
    const container = containerRef.current;
    if (container) {
      const video = container.querySelector('video');
      if (video) {
        // Enforce DOM properties
        video.muted = true;
        video.defaultMuted = true;
        
        const playVideo = () => {
          video.play().catch((err) => {
            console.log("Autoplay caught or pending user interaction", err);
          });
        };

        playVideo();

        // Listeners for page interaction to kickstart video if browser blocked it
        const triggerPlay = () => {
          if (video.paused) {
            playVideo();
          }
          window.removeEventListener('click', triggerPlay);
          window.removeEventListener('scroll', triggerPlay);
          window.removeEventListener('touchstart', triggerPlay);
        };

        window.addEventListener('click', triggerPlay);
        window.addEventListener('scroll', triggerPlay, { passive: true });
        window.addEventListener('touchstart', triggerPlay, { passive: true });

        return () => {
          window.removeEventListener('click', triggerPlay);
          window.removeEventListener('scroll', triggerPlay);
          window.removeEventListener('touchstart', triggerPlay);
        };
      }
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center text-white overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-[#123C73] hero-content-selectable">
      {/* Background Video with overlay */}
      <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          dangerouslySetInnerHTML={{
            __html: `
              <video
                autoplay
                loop
                muted
                playsinline
                preload="auto"
                style="width: 100%; height: 100%; object-fit: cover; object-position: center; pointer-events: none;"
              >
                <source src="https://res.cloudinary.com/dplhygs4v/video/upload/v1782162160/RE_ENGENHARIA_HEDER_TOPO_1_oiwfc2.mp4" type="video/mp4" />
              </video>
            `
          }}
        />
        {/* Brand blue gradient overlay to guarantee text legibility and brand styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#123C73]/95 to-[#123C73]/75 mix-blend-multiply pointer-events-none animate-heroOverlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/70 via-[#123C73]/30 to-[#123C73] pointer-events-none animate-heroOverlay" />
      </div>
      
      <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto w-full animate-heroContent">
        <div className="max-w-4xl">
          <span className="text-[#D62828] font-bold tracking-[0.25em] text-xs lg:text-sm uppercase block mb-4">
            ENGENHARIA ELÉTRICA DE ALTA COMPLEXIDADE
          </span>
          <h1 className="font-sans font-black text-4xl lg:text-6xl tracking-tight leading-none mb-6 text-white drop-shadow-sm">
            RE Engenharia Elétrica
          </h1>
          <p className="text-base lg:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
            Projetos, Execução e Instalações Elétricas Especializadas de Média e Baixa Tensão para Empresas Privadas, Indústrias, Hospitais e Órgãos Públicos em Todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate(ActivePage.Contato)}
              className="bg-[#D62828] hover:bg-[#b52020] text-white font-bold tracking-wider px-8 py-4 rounded shadow-2xl transition-all text-sm uppercase hover:-translate-y-0.5 cursor-pointer"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => onNavigate(ActivePage.ObrasExecutadas)}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white font-bold tracking-wider px-8 py-4 rounded transition-all text-sm uppercase cursor-pointer"
            >
              Conhecer Nossos Cases
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
