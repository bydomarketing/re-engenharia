import React from 'react';
import { ActivePage } from '../../types';
import * as Icons from 'lucide-react';

const ceoGilberto = 'https://res.cloudinary.com/dplhygs4v/image/upload/v1781911604/RE_ENGENHARIA_ELETRICA_GILBERTO_c2zchb.png';

interface AboutSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F7F8FA] border-y border-[#C9CDD3]">
      <div className="max-w-7xl md:w-[75%] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Conteúdo Institucional (60%) */}
          <div className="lg:col-span-7">
            <span className="text-[#D62828] font-bold tracking-[0.2em] text-xs uppercase block mb-3">
              QUEM SOMOS
            </span>
            <h2 className="font-sans font-extrabold text-2xl lg:text-4.5xl text-[#123C73] tracking-tight leading-tight mb-6">
              Mais de 30 Anos Construindo Confiança em Engenharia Elétrica
            </h2>
            
            <div className="space-y-4 text-sm lg:text-base text-[#2B2B2B] leading-relaxed mb-8 font-normal">
              <p>
                A RE Engenharia Elétrica atua há mais de três décadas desenvolvendo projetos, executando obras e entregando soluções em engenharia elétrica para empresas privadas e órgãos públicos em todo o Brasil.
              </p>
              <p>
                Ao longo de sua trajetória, participou de centenas de empreendimentos nos segmentos industrial, hospitalar, educacional, corporativo, bancário e infraestrutura, sempre com foco em segurança, responsabilidade técnica e qualidade de execução.
              </p>
              <p>
                Com mais de 500 obras executadas, a empresa consolidou sua reputação através de resultados entregues em campo, construindo relações de confiança com clientes públicos e privados de diferentes portes.
              </p>
              <p>
                Hoje, a RE Engenharia Elétrica segue evoluindo, mantendo o compromisso de oferecer soluções técnicas seguras, eficientes e alinhadas às necessidades de cada empreendimento.
              </p>
            </div>

            <button
              onClick={() => onNavigate(ActivePage.Empresa)}
              className="bg-[#123C73] hover:bg-[#0d2d57] text-white font-bold tracking-wider text-xs px-6 py-3.5 rounded transition-all uppercase flex items-center gap-2 group shadow-sm hover:shadow"
            >
              <span>Saiba Mais Sobre Nós</span>
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Coluna Direita: Fotografia do Fundador/CEO (40%) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[320px]">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={ceoGilberto}
                  alt="Gilberto Teixeira - Fundador e Responsável Técnico"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-sans font-black text-xl text-[#123C73] leading-tight mb-1">
                  Gilberto Teixeira
                </h3>
                <p className="text-xs text-[#6F7782] font-semibold mb-3">
                  Fundador e Responsável Técnico
                </p>
                <span className="inline-block text-[10px] text-[#123C73] font-bold font-mono tracking-wider bg-[#123C73]/5 border border-[#123C73]/10 px-3 py-1 rounded-full">
                  CREA-SP
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
