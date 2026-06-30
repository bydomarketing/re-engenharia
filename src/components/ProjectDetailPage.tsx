/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types';
import * as Icons from 'lucide-react';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  // Use cover image and gallery images
  const images = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : project.imageUrl
      ? [project.imageUrl]
      : ['https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-16-01_cpoept.png'];

  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  return (
    <div className="animate-fadeIn bg-slate-50 min-h-screen pt-32 pb-24 px-6 lg:px-12 w-full">
      <div className="max-w-7xl md:w-[75%] mx-auto">
        
        {/* Navigation Breadcrumb / Back Button */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123C73] hover:text-[#D62828] transition-colors focus:outline-none"
          >
            <Icons.ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Portfólio
          </button>
        </div>

        {/* Outer Grid Header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1 & 2: Main Photo & description */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Project Title and Header details */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="inline-block bg-[#123C73]/10 text-[#123C73] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {project.segment}
              </span>
              <h1 className="font-sans font-extrabold text-2xl lg:text-4xl text-[#2B2B2B] leading-tight mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#6F7782] border-t border-slate-100 pt-4">
                <div className="flex items-center gap-1.5 font-mono">
                  <Icons.MapPin className="w-4 h-4 text-[#D62828]" />
                  <span>{project.location}</span>
                </div>
                {project.mapsUrl && (
                  <a
                    href={project.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#D62828] hover:underline font-mono font-bold ml-2"
                  >
                    <span>Ver no Google Maps</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Main Cover Display */}
            <div className="relative aspect-[16/10] w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <img
                src={activeImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <button
                onClick={() => setLightboxImage(activeImage)}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-md focus:outline-none"
                title="Ampliar imagem"
              >
                <Icons.Maximize2 className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Column 3: Project Specifications ("Ficha Técnica") */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#C9CDD3] shadow-md sticky top-36">
              <h3 className="font-sans font-extrabold text-base text-[#123C73] uppercase tracking-wider mb-6 pb-3 border-b-2 border-slate-100 flex items-center gap-2">
                <Icons.FileSpreadsheet className="w-5 h-5 text-[#D62828]" />
                Ficha Técnica da Obra
              </h3>
              
              <div className="space-y-5 text-xs">
                <div>
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                    Cliente / Instituição
                  </span>
                  <div className="flex items-start gap-2">
                    <Icons.Briefcase className="w-4 h-4 text-[#123C73] shrink-0 mt-0.5" />
                    <span className="font-bold text-[#2B2B2B] leading-relaxed">
                      {project.client || 'RE Engenharia Elétrica'}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                    Serviço Realizado
                  </span>
                  <div className="flex items-start gap-2">
                    <Icons.Wrench className="w-4 h-4 text-[#123C73] shrink-0 mt-0.5" />
                    <span className="font-bold text-[#2B2B2B] leading-relaxed text-[#123C73]">
                      {project.service || 'Instalações Elétricas Especializadas'}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                    Localização da Execução
                  </span>
                  <div className="flex items-start gap-2">
                    <Icons.Home className="w-4 h-4 text-[#123C73] shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#6F7782]">
                      {project.location}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                    Segmento Atendido
                  </span>
                  <div className="flex items-center gap-2">
                    <Icons.Layers className="w-4 h-4 text-[#123C73] shrink-0" />
                    <span className="font-semibold text-[#6F7782]">
                      {project.segment}
                    </span>
                  </div>
                </div>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="pt-4 border-t border-slate-100">
                    <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-2">
                      Garantias e Destaques
                    </span>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Icons.BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="font-medium text-[#6F7782] leading-tight">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Detailed execution description and Gallery */}
        <div className="bg-white p-8 lg:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-12 mb-12">
          
          {/* Executive Summary Narrative */}
          <div>
            <h2 className="font-sans font-extrabold text-lg lg:text-xl text-[#2B2B2B] mb-5 flex items-center gap-2.5 border-b border-slate-100 pb-3">
              <span className="w-1.5 h-6 bg-[#D62828] rounded-full inline-block" />
              Memorial de Execução & Atividades Realizadas
            </h2>
            
            <p className="text-sm lg:text-base text-[#6F7782] leading-relaxed font-normal whitespace-pre-line">
              {project.detailedDescription || project.scope}
            </p>
          </div>

          {/* Photo Gallery Grid */}
          {images.length > 1 && (
            <div className="pt-8 border-t border-slate-100">
              <h2 className="font-sans font-extrabold text-lg lg:text-xl text-[#2B2B2B] mb-6 flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-[#123C73] rounded-full inline-block" />
                Galeria de Fotos Reais da Obra
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, idx) => {
                  const isSelected = activeImage === img;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      type="button"
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 bg-slate-900 transition-all duration-300 focus:outline-none ${
                        isSelected
                          ? 'border-[#D62828] scale-102 shadow-md'
                          : 'border-slate-200 hover:border-[#123C73] hover:scale-102'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Galeria de fotos ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Icons.CheckCircle2 className="w-6 h-6 text-white bg-[#D62828] rounded-full p-0.5 shadow-md" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Back Button */}
        <div className="flex justify-center">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-[#123C73] hover:bg-[#D62828] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center gap-2"
          >
            <Icons.ChevronLeft className="w-4 h-4" />
            Voltar para Listagem de Obras
          </button>
        </div>

      </div>

      {/* Lightbox / zoom Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setLightboxImage(null)}
              className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all focus:outline-none"
              title="Fechar visualizador"
            >
              <Icons.X className="w-6 h-6" />
            </button>
          </div>
          <img
            src={lightboxImage}
            alt="Obra em tamanho real"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
