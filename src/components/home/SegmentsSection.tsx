import React from 'react';
import { ActivePage } from '../../types';

interface SegmentsSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const SegmentsSection: React.FC<SegmentsSectionProps> = ({ onNavigate }) => {
  const row1 = [
    { 
      id: 'industrial', 
      label: 'Indústrias', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v178228632/Captura_de_tela_de_2026-06-22_20-37-44_slshlj.png', 
      case: 'Serraria Pedra Branca e Cabines de Média Tensão' 
    },
    { 
      id: 'hospitalar', 
      label: 'Hospitais', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177040/WhatsApp_Image_2026-05-28_at_10.47.00_2_jesb4p.jpg', 
      case: 'Unimed / Santa Helena' 
    },
    { 
      id: 'educacao', 
      label: 'Ensino', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782234787/Foto-ETEC-5_hqkrib.jpg', 
      case: 'SESI / Escolas Públicas' 
    },
    { 
      id: 'bancario', 
      label: 'Bancos', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225133/Captura_de_tela_de_2026-06-23_11-30-48_yfnbvl.png', 
      case: 'Clube Banco Itaú' 
    }
  ];

  const row2 = [
    { 
      id: 'corporativo', 
      label: 'Corporativo', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176208/WhatsApp_Image_2026-06-08_at_19.47.13_3_g6ddhb.jpg', 
      case: 'Shopping D&D / Metrô' 
    },
    { 
      id: 'obras-publicas', 
      label: 'Obras Públicas', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223890/Captura_de_tela_de_2026-06-23_11-10-37_yqftdl.png', 
      case: 'CEU Vila Alpina' 
    },
    { 
      id: 'infraestrutura', 
      label: 'Infraestrutura', 
      image: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235827/Captura_de_tela_de_2026-06-23_14-29-34_p3jh3v.png', 
      case: 'CEU Parque do Carmo' 
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl md:w-[75%] mx-auto">
        <div className="mb-10 text-center lg:text-left max-w-xl">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight mb-4">
            Segmentos Atendidos
          </h2>
          <p className="text-sm lg:text-base text-[#6F7782] leading-relaxed">
            Desenvolvemos infraestrutura de alta confiabilidade em energia para environments complexos e críticos que demandam continuidade total.
          </p>
        </div>

        {/* Layout de Grade Premium: 4 na primeira linha e 3 centralizados na segunda linha para PC */}
        <div className="flex flex-col gap-6">
          {/* Linha 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {row1.map((segm) => (
              <div
                key={segm.id}
                onClick={() => onNavigate(ActivePage.AreasAtuacaao)}
                className="group relative rounded-2xl overflow-hidden h-72 lg:h-[320px] cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all border border-[#C9CDD3] hover:border-[#123C73]"
              >
                {/* Background Image with Referrer Policy and smooth zoom */}
                <img
                  src={segm.image}
                  alt={segm.label}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay for high text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:from-[#123C73]/95 group-hover:via-[#123C73]/60 transition-colors duration-300" />
                
                {/* Content placed nicely at the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left z-10 select-none">
                  <span className="block font-sans font-extrabold text-lg lg:text-xl text-white leading-tight mb-1.5 uppercase tracking-wide">
                    {segm.label}
                  </span>
                  <span className="block text-[10px] lg:text-xs font-semibold text-slate-300 uppercase tracking-wider leading-snug">
                    {segm.case}
                  </span>
                  
                  {/* Subtle decorative accent line on hover */}
                  <div className="w-0 group-hover:w-16 h-1 bg-[#D62828] mt-3 transition-all duration-300 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Linha 2 - Centralizada no Desktop por ocupar 75% da largura da primeira linha */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-[75%] lg:mx-auto w-full">
            {row2.map((segm) => (
              <div
                key={segm.id}
                onClick={() => onNavigate(ActivePage.AreasAtuacaao)}
                className="group relative rounded-2xl overflow-hidden h-72 lg:h-[320px] cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all border border-[#C9CDD3] hover:border-[#123C73]"
              >
                {/* Background Image with Referrer Policy and smooth zoom */}
                <img
                  src={segm.image}
                  alt={segm.label}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay for high text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:from-[#123C73]/95 group-hover:via-[#123C73]/60 transition-colors duration-300" />
                
                {/* Content placed nicely at the bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left z-10 select-none">
                  <span className="block font-sans font-extrabold text-lg lg:text-xl text-white leading-tight mb-1.5 uppercase tracking-wide">
                    {segm.label}
                  </span>
                  <span className="block text-[10px] lg:text-xs font-semibold text-slate-300 uppercase tracking-wider leading-snug">
                    {segm.case}
                  </span>
                  
                  {/* Subtle decorative accent line on hover */}
                  <div className="w-0 group-hover:w-16 h-1 bg-[#D62828] mt-3 transition-all duration-300 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

