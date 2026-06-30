/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const ClientLogosGrid: React.FC = () => {
  const logoWrapperClass = "w-full h-28 flex items-center justify-center p-2 transition-all duration-250 ease-out hover:-translate-y-1 hover:scale-105 cursor-default select-none";

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFC] border-y border-slate-200/60 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact, authoritative header with reduced margin */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="font-sans font-black text-2xl lg:text-3.5xl text-[#123C73] tracking-tight uppercase">
            Alguns de nossos clientes
          </h2>
        </div>

        {/* 5 columns grid with increased sizes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6 items-center justify-items-center">
          
          {/* 1. Banco Itaú */}
          <div className={logoWrapperClass} title="Banco Itaú">
            <svg viewBox="0 0 100 100" className="h-[77px] w-auto animate-fade-in" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="26" fill="#EC7000" />
              <text x="50" y="62" fill="#FFFFFF" fontSize="32" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="-1.5">itaú</text>
            </svg>
          </div>

          {/* 2. Unimed Anhanguera */}
          <div className={logoWrapperClass} title="Unimed Anhanguera">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782232700/logo-unimed-anhanguera_enty1o.png" alt="Unimed Anhanguera" className="h-[66px] w-auto object-contain animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 3. SESI */}
          <div className={logoWrapperClass} title="SESI">
            <svg viewBox="0 0 160 55" className="h-[66px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="5" width="120" height="45" rx="4" fill="#E31C24" />
              <text x="80" y="38" fill="#FFFFFF" fontSize="30" fontWeight="950" fontFamily="sans-serif" fontStyle="italic" textAnchor="middle" letterSpacing="-1.2">SESI</text>
              {/* Speed lines on left border of red box */}
              <line x1="20" y1="12" x2="32" y2="12" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="20" y1="19" x2="32" y2="19" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="20" y1="26" x2="32" y2="26" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="20" y1="33" x2="32" y2="33" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="20" y1="40" x2="32" y2="40" stroke="#FFFFFF" strokeWidth="2" />
              {/* Speed lines on right border */}
              <line x1="128" y1="12" x2="140" y2="12" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="128" y1="19" x2="140" y2="19" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="128" y1="26" x2="140" y2="26" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="128" y1="33" x2="140" y2="33" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="128" y1="40" x2="140" y2="40" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>

          {/* 4. UPA 24h */}
          <div className={logoWrapperClass} title="UPA 24h">
            <svg viewBox="0 0 170 65" className="h-[67px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="5" y="32" fill="#009B52" fontSize="34" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-1">UPA</text>
              <text x="5" y="55" fill="#00569C" fontSize="23" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">24h</text>
              {/* Red cross nested in/overlapping h letter */}
              <rect x="36" y="43" width="7" height="3" fill="#E31C24" />
              <rect x="38" y="41" width="3" height="7" fill="#E31C24" />
              {/* Labels */}
              <text x="54" y="41" fill="#4B5563" fontSize="7" fontWeight="800" fontFamily="system-ui, sans-serif">UNIDADE</text>
              <text x="54" y="48" fill="#4B5563" fontSize="7" fontWeight="800" fontFamily="system-ui, sans-serif">DE PRONTO</text>
              <text x="54" y="55" fill="#4B5563" fontSize="7" fontWeight="800" fontFamily="system-ui, sans-serif">ATENDIMENTO</text>
            </svg>
          </div>

          {/* 5. CEU */}
          <div className={logoWrapperClass} title="CEU">
            <svg viewBox="0 0 160 60" className="h-[67px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="160" height="60" rx="8" fill="#429FD6" />
              {/* Loose brush stroke wave on top */}
              <path d="M 30 18 C 50 8, 70 20, 100 8 C 115 2, 120 10, 130 14 C 115 14, 85 10, 70 16 C 50 22, 40 18, 30 18 Z" fill="#FFFFFF" opacity="0.9" />
              <text x="80" y="42" fill="#FFFFFF" fontSize="24" fontWeight="300" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="1.5">CEU</text>
              <text x="80" y="52" fill="#FFFFFF" fontSize="6.5" fontWeight="500" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.2">Centro Educacional Unificado</text>
            </svg>
          </div>

          {/* 7. Rede FAN */}
          <div className={logoWrapperClass} title="Rede Fan">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782236413/rede_fan_uhsuf4.jpg" alt="Rede Fan" className="h-[88px] lg:h-[100px] w-auto object-contain rounded animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 8. Hospital Santa Helena */}
          <div className={logoWrapperClass} title="Hospital Santa Helena">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782232695/images_1_rfeud6.jpg" alt="Hospital Santa Helena" className="h-[88px] lg:h-[100px] w-auto object-contain rounded animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 10. Hospital Universitário Clementino Fraga Filho (Hospital do Fundão/HUCFF) da UFRJ */}
          <div className={logoWrapperClass} title="Hospital Universitário Clementino Fraga Filho (Hospital do Fundão/HUCFF) da UFRJ">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782760307/HOSPITALUNIVERSITARIO_LOGO-2048x292_xhlxps.jpg" alt="Hospital Universitário Clementino Fraga Filho" className="h-[48px] lg:h-[55px] w-auto object-contain rounded animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 11. Metrocasa Construtora */}
          <div className={logoWrapperClass} title="Metrocasa Construtora">
            <svg viewBox="0 0 160 55" className="h-[66px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Red Chevron icon */}
              <path d="M 18 16 L 28 6 L 38 16 L 34 16 L 28 10 L 22 16 Z" fill="#E31C24" />
              <rect x="25" y="16" width="6" height="5" fill="#E31C24" />
              <text x="44" y="18" fill="#E31C24" fontSize="17" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">metrocasa</text>
              <text x="44" y="28" fill="#4B5563" fontSize="8.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">CONSTRUTORA</text>
              <text x="44" y="38" fill="#1F2937" fontSize="8" fontWeight="600" fontFamily="sans-serif" fontStyle="italic">você <tspan fill="#15803D">+</tspan> perto</text>
            </svg>
          </div>

          {/* 12. Prefeitura de São Paulo */}
          <div className={logoWrapperClass} title="Prefeitura de São Paulo">
            <svg viewBox="0 0 160 60" className="h-[70px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Coat of arms */}
              <rect x="74" y="10" width="12" height="11" fill="#E31C24" rx="1" />
              <path d="M 76 15 L 84 15 M 80 11 L 80 19" stroke="#FFFFFF" strokeWidth="2" />
              <rect x="72" y="5" width="16" height="3" fill="#D97706" />
              <line x1="72" y1="5" x2="72" y2="8" stroke="#D97706" strokeWidth="1" />
              <line x1="80" y1="5" x2="80" y2="8" stroke="#D97706" strokeWidth="1" />
              <line x1="88" y1="5" x2="88" y2="8" stroke="#D97706" strokeWidth="1" />
              <path d="M 70 12 Q 72 23 78 22" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M 90 12 Q 88 23 82 22" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <text x="80" y="38" fill="#111827" fontSize="10.5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">PREFEITURA DE</text>
              <text x="80" y="51" fill="#111827" fontSize="14" fontWeight="950" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.5">SÃO PAULO</text>
            </svg>
          </div>

          {/* 13. Shopping D&D */}
          <div className={logoWrapperClass} title="Shopping D&D">
            <svg viewBox="0 0 160 55" className="h-[67px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="160" height="55" rx="6" fill="#E31C24" />
              <text x="80" y="32" fill="#FFFFFF" fontSize="26" fontWeight="900" fontFamily="serif" textAnchor="middle">D&D</text>
              <text x="80" y="44" fill="#FFFFFF" fontSize="9.5" fontWeight="500" fontFamily="sans-serif" textAnchor="middle" letterSpacing="3.5">SHOPPING</text>
            </svg>
          </div>

          {/* 15. ETEC Garça */}
          <div className={logoWrapperClass} title="ETEC Garça">
            <svg viewBox="0 0 100 100" className="h-[90px] lg:h-[100px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="#1E293B" strokeWidth="1" />
              <circle cx="50" cy="50" r="45" stroke="#E31C24" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="42" stroke="#1E293B" strokeWidth="0.8" />
              <text x="50" y="44" fill="#334155" fontSize="24" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">Etec</text>
              <text x="50" y="56" fill="#991B1B" fontSize="6.5" fontWeight="705" fontFamily="sans-serif" textAnchor="middle">Monsenhor Antônio</text>
              <text x="50" y="65" fill="#991B1B" fontSize="6.5" fontWeight="705" fontFamily="sans-serif" textAnchor="middle">Magliano</text>
              <text x="50" y="78" fill="#475569" fontSize="9" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">GARÇA</text>
            </svg>
          </div>

          {/* 16. Terraço Itália */}
          <div className={logoWrapperClass} title="Terraço Itália">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782232698/logo-terraco-Italia-b_p6uzsr.png" alt="Terraço Itália" className="h-[66px] w-auto object-contain animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 17. Clínica Plane */}
          <div className={logoWrapperClass} title="Clínica Plane">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782232695/Cl%C3%ADnica_Plane_-_S%C3%A3o_Jos%C3%A9_dos_Campos_nzzwod.svg" alt="Clínica Plane" className="h-[66px] w-auto object-contain animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 18. Prefeitura de Guarujá */}
          <div className={logoWrapperClass} title="Prefeitura de Guarujá">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782237305/prefeitura-municipal-de-guaruja-original_qpbvhb.jpg" alt="Prefeitura de Guarujá" className="h-[66px] w-auto object-contain rounded animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 19. Prefeitura de Osasco */}
          <div className={logoWrapperClass} title="Prefeitura de Osasco">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782237293/logo-pmo-sem-gesto-horizontal_w8szro.webp" alt="Prefeitura de Osasco" className="h-[66px] w-auto object-contain rounded animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 19b. Prefeitura de São Bernardo do Campo */}
          <div className={logoWrapperClass} title="Prefeitura de São Bernardo do Campo">
            <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1782238198/logo_home_sbc_l82cuc.png" alt="Prefeitura de São Bernardo do Campo" className="h-[80px] lg:h-[90px] w-auto object-contain rounded animate-fade-in" referrerPolicy="no-referrer" />
          </div>

          {/* 20. Centro Paula Souza (ETEC) */}
          <div className={logoWrapperClass} title="Centro Paula Souza">
            <svg viewBox="0 0 160 55" className="h-[66px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="10" width="35" height="35" rx="5" fill="#E31C24" />
              <text x="29.5" y="34" fill="#FFFFFF" fontSize="17" fontWeight="950" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-0.5">cps</text>
              <text x="56" y="25" fill="#1E293B" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.2">Centro</text>
              <text x="56" y="39" fill="#1E293B" fontSize="13.5" fontWeight="950" fontFamily="sans-serif" letterSpacing="-0.2">Paula Souza</text>
            </svg>
          </div>

          {/* 21. Serraria Pedra Branca */}
          <div className={logoWrapperClass} title="Serraria Pedra Branca">
            <svg viewBox="0 0 170 55" className="h-[66px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 12 36 L 24 16 L 30 16 L 18 36 Z" fill="#522C1B" />
              <path d="M 22 36 L 34 16 L 40 16 L 28 36 Z" fill="#522C1B" />
              <path d="M 32 36 L 44 16 L 50 16 L 38 36 Z" fill="#522C1B" />
              {/* Little green leaves on top right edge */}
              <path d="M 46 14 Q 52 10 50 4 Q 44 6 46 14 Z" fill="#15803D" />
              <path d="M 49 11 Q 54 13 54 8 Q 48 8 49 11 Z" fill="#22C55E" />
              <text x="58" y="27" fill="#3D1F12" fontSize="16" fontWeight="950" fontFamily="sans-serif" fontStyle="italic" letterSpacing="-0.5">PEDRA BRANCA</text>
              <text x="58" y="38" fill="#3D1F12" fontSize="9" fontWeight="600" fontFamily="sans-serif" letterSpacing="3">SERRARIA</text>
            </svg>
          </div>



        </div>
      </div>
    </section>
  );
};
