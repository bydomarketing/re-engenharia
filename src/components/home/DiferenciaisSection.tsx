import React, { useState, useEffect } from 'react';
import { CORE_DIFFERENTIALS } from '../../data';
import * as Icons from 'lucide-react';

export const DiferenciaisSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveCard(null);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl md:w-[75%] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-sans font-bold text-2xl lg:text-3xl text-[#2B2B2B] tracking-tight">
            Por Que Escolher a RE Engenharia Elétrica?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_DIFFERENTIALS.map((diff, index) => {
            const isActive = activeCard === index;
            return (
              <div 
                key={index} 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(index);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveCard(index);
                  }
                }}
                tabIndex={0}
                className={`flex gap-4 p-5 rounded-lg border transition-all duration-300 cursor-pointer group outline-none ${
                  isActive 
                    ? 'bg-[#123C73] border-[#123C73] text-white shadow-md scale-[1.02]' 
                    : 'bg-[#F7F8FA] border-[#C9CDD3] text-[#2B2B2B] hover:bg-[#123C73] hover:border-[#123C73] hover:text-white hover:scale-[1.02] hover:shadow-md focus:bg-[#123C73] focus:border-[#123C73] focus:text-white focus:scale-[1.02] focus:shadow-md'
                }`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/15 text-white' 
                    : 'bg-[#123C73]/5 text-[#123C73] group-hover:bg-white/15 group-hover:text-white group-focus:bg-white/15 group-focus:text-white'
                }`}>
                  <Icons.Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-sans font-bold text-sm lg:text-base mb-2 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#2B2B2B] group-hover:text-white group-focus:text-white'
                  }`}>{diff.title}</h4>
                  <p className={`text-xs lg:text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-slate-200' : 'text-[#6F7782] group-hover:text-slate-200 group-focus:text-slate-200'
                  }`}>{diff.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
