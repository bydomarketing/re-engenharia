/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProjectItem } from '../types';
import * as Icons from 'lucide-react';

interface ProjectGalleryCardProps {
  project: ProjectItem;
  onViewProject: (id: string) => void;
}

export const ProjectGalleryCard: React.FC<ProjectGalleryCardProps> = ({ project, onViewProject }) => {
  // Use cover image of project
  const displayImage = project.imageUrl || (project.galleryImages && project.galleryImages[0]) || 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-16-01_cpoept.png';

  return (
    <div 
      onClick={() => onViewProject(project.id)}
      className="bg-white border border-[#C9CDD3] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full group hover:border-[#123C73] cursor-pointer"
    >
      
      {/* Imagem Principal da Obra */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden select-none border-b border-slate-100">
        <img
          src={displayImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle shadow inside for styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Segment badge floating in corner */}
        <span className="absolute top-3 left-3 bg-[#123C73] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-sm">
          {project.segment}
        </span>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Cidade/Estado e Localização */}
          <div className="flex items-center gap-1.5 text-[#6F7782] text-[10px] uppercase font-bold tracking-wider font-mono mb-2.5">
            <Icons.MapPin className="w-3.5 h-3.5 text-[#D62828] shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Nome da Obra */}
          <h3 className="font-sans font-extrabold text-sm lg:text-base text-[#2B2B2B] mb-3 leading-snug group-hover:text-[#123C73] transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Ficha técnica resumida */}
          <div className="space-y-2 mb-4 bg-slate-50/70 p-3 rounded-lg border border-slate-100 text-[11px] lg:text-xs">
            {project.client && (
              <div className="flex items-start gap-1">
                <span className="font-extrabold text-[#2B2B2B] shrink-0">Cliente:</span>
                <span className="text-[#6F7782] line-clamp-1">{project.client}</span>
              </div>
            )}
            {project.service && (
              <div className="flex items-start gap-1">
                <span className="font-extrabold text-[#2B2B2B] shrink-0">Serviço:</span>
                <span className="text-[#6F7782] line-clamp-1">{project.service}</span>
              </div>
            )}
          </div>

          {/* Breve Resumo da Execução */}
          <p className="text-xs text-[#6F7782] leading-relaxed mb-4 font-normal line-clamp-3">
            {project.scope}
          </p>
        </div>

        {/* Botão "VER PROJETO COMPLETO" */}
        <div className="border-t border-slate-100 pt-4 mt-2 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-[#123C73] hover:bg-[#D62828] text-white font-sans font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            VER PROJETO COMPLETO
            <Icons.ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span className="text-[10px] font-mono text-[#6F7782]/80 bg-slate-100 px-2.5 py-1 rounded uppercase tracking-wider font-semibold shrink-0">
            Portfólio
          </span>
        </div>
      </div>
    </div>
  );
};
