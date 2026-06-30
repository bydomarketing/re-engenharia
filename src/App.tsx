/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Logo } from './components/Logo';
import { HomeView } from './components/HomeView';
import { EmpresaView } from './components/EmpresaView';
import { ServicosCatalogView } from './components/ServicosCatalogView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { AreasAtuacoView } from './components/AreasAtuacoView';
import { ObrasExecutadasView } from './components/ObrasExecutadasView';
import { ContatoView } from './components/ContatoView';
import { Map } from './components/Map';
import * as Icons from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>(ActivePage.Home);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  }, [activePage]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 400);
    setDropdownTimeout(timeout);
  };

  // Is active page a sub-service detail page
  const isSubServicePage = [
    ActivePage.ProjetosInstalacoes,
    ActivePage.ExecucaoObras,
    ActivePage.LeituraProjetos,
    ActivePage.ManutencaoEletrica,
    ActivePage.CabinesMedia,
    ActivePage.SPDAAterramento,
    ActivePage.AdequacoesModernizacoes,
    ActivePage.SistemasIncendio,
    ActivePage.EnergiaSolar
  ].includes(activePage);

  const renderActiveView = () => {
    switch (activePage) {
      case ActivePage.Home:
        return <HomeView onNavigate={setActivePage} />;
      case ActivePage.Empresa:
        return <EmpresaView onNavigate={setActivePage} />;
      case ActivePage.Servicos:
        return <ServicosCatalogView onNavigate={setActivePage} />;
      case ActivePage.LeituraProjetos:
        return <ServiceDetailView serviceId={ActivePage.ProjetosInstalacoes} scrollToSection="leitura-projetos" onNavigate={setActivePage} />;
      case ActivePage.ProjetosInstalacoes:
      case ActivePage.ExecucaoObras:
      case ActivePage.ManutencaoEletrica:
      case ActivePage.CabinesMedia:
      case ActivePage.SPDAAterramento:
      case ActivePage.AdequacoesModernizacoes:
      case ActivePage.SistemasIncendio:
      case ActivePage.EnergiaSolar:
        return <ServiceDetailView serviceId={activePage} onNavigate={setActivePage} />;
      case ActivePage.AreasAtuacaao:
        return <AreasAtuacoView onNavigate={setActivePage} />;
      case ActivePage.ObrasExecutadas:
        return <ObrasExecutadasView onNavigate={setActivePage} />;
      case ActivePage.Contato:
        return <ContatoView onNavigate={setActivePage} />;
      default:
        return <HomeView onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#2B2B2B] flex flex-col w-full">
      <div className="w-full flex flex-col grow relative">
        
        {/* MAIN CORPORATE HEADER NAVBAR */}
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white/10 shadow-none">
          <div className="relative z-10 max-w-7xl md:w-[75%] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between w-full">
            <div className="cursor-pointer flex items-center" onClick={() => setActivePage(ActivePage.Home)}>
              <Logo variant="horizontal" height={52} onBlueBg={true} />
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => setActivePage(ActivePage.Home)}
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                activePage === ActivePage.Home ? 'text-[#D62828]' : 'text-slate-100 hover:text-[#D62828] hover:bg-white/10'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage(ActivePage.Empresa)}
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                activePage === ActivePage.Empresa ? 'text-[#D62828]' : 'text-slate-100 hover:text-[#D62828] hover:bg-white/10'
              }`}
            >
              SOBRE NÓS
            </button>

            {/* SERVICES DROPDOWN GROUP */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                  activePage === ActivePage.Servicos || isSubServicePage ? 'text-[#D62828]' : 'text-slate-100 hover:text-[#D62828] hover:bg-white/10'
                }`}
              >
                Serviços
                <span className="text-[10px]">{dropdownOpen ? '▲' : '▼'}</span>
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute right-0 top-full pt-1.5 w-80 z-50 animate-fadeIn"
                >
                  <div className="relative overflow-hidden bg-[#123C73] border border-[#123C73]/40 rounded-md shadow-2xl py-2">
                    {/* Watermark layer inside dropdown */}
                    <div className="absolute inset-0 z-0 pointer-events-none select-none">
                      <img 
                        src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
                        alt="Watermark Menu Dropdown" 
                        className="w-full h-full object-cover opacity-25"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/40 via-[#123C73]/90 to-[#123C73]" />
                    </div>
                    
                    <div className="relative z-10">
                      <button
                        onClick={() => { setActivePage(ActivePage.ProjetosInstalacoes); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Projetos e Instalações Elétricas
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.ExecucaoObras); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Execução de Obras Elétricas
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.LeituraProjetos); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Leitura e Interpretação de Projetos Elétricos
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.ManutencaoEletrica); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Manutenção Elétrica
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.CabinesMedia); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Cabines Primárias e Média Tensão
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.SPDAAterramento); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • SPDA e Sistemas de Aterramento
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.AdequacoesModernizacoes); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Adequações e Modernizações Elétricas
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.SistemasIncendio); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Sistemas de Detecção e Alarme de Incêndio
                      </button>
                      <button
                        onClick={() => { setActivePage(ActivePage.EnergiaSolar); setDropdownOpen(false); }}
                        className="w-full text-left px-4 py-2 text-xs font-normal hover:bg-[#0d2d57] text-slate-100 hover:text-white transition-colors"
                      >
                        • Energia Solar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setActivePage(ActivePage.AreasAtuacaao)}
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                activePage === ActivePage.AreasAtuacaao ? 'text-[#D62828]' : 'text-slate-100 hover:text-[#D62828] hover:bg-white/10'
              }`}
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => setActivePage(ActivePage.ObrasExecutadas)}
              className={`px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider rounded transition-colors ${
                activePage === ActivePage.ObrasExecutadas ? 'text-[#D62828]' : 'text-slate-100 hover:text-[#D62828] hover:bg-white/10'
              }`}
            >
              Portfólio
            </button>
            <button
              onClick={() => setActivePage(ActivePage.Contato)}
              className={`ml-3 bg-[#D62828] hover:bg-[#b52020] text-white px-5 py-2 rounded text-xs font-extrabold uppercase tracking-wider transition-colors shadow-md`}
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#D62828] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="relative overflow-hidden lg:hidden bg-[#123C73] border-b border-[#123C73]/20 px-6 py-4 animate-fadeIn">
            {/* Watermark layer inside mobile drawer */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1781870207/2c730f11-a763-448e-abad-1edff042701d_1_oexwsa.png" 
                alt="Watermark Mobile Menu" 
                className="w-full h-full object-cover opacity-25"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#123C73]/60 via-[#123C73]/95 to-[#123C73]" />
            </div>

            <div className="relative z-10 space-y-2">
              <button
                onClick={() => setActivePage(ActivePage.Home)}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D62828] transition-colors"
              >
                • Home
              </button>
              <button
                onClick={() => setActivePage(ActivePage.Empresa)}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D62828] transition-colors"
              >
                • SOBRE NÓS
              </button>
              <div className="pl-3 border-l-2 border-[#D62828] my-2 py-1 space-y-1 bg-[#0d2d57]/70 backdrop-blur-md p-2 rounded">
                <span className="block text-[9px] font-bold text-slate-300 uppercase mb-1">Especialidades:</span>
                <button
                  onClick={() => setActivePage(ActivePage.ProjetosInstalacoes)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Projetos e Instalações Elétricas
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.ExecucaoObras)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Execução de Obras Elétricas
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.LeituraProjetos)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Leitura e Interpretação de Projetos Elétricos
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.ManutencaoEletrica)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Manutenção Elétrica
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.CabinesMedia)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Cabines Primárias e Média Tensão
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.SPDAAterramento)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  SPDA e Sistemas de Aterramento
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.AdequacoesModernizacoes)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Adequações e Modernizações Elétricas
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.SistemasIncendio)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Sistemas de Detecção e Alarme de Incêndio
                </button>
                <button
                  onClick={() => setActivePage(ActivePage.EnergiaSolar)}
                  className="block text-xs text-slate-100 hover:text-white py-1 text-left w-full"
                >
                  Energia Solar
                </button>
              </div>
              <button
                onClick={() => setActivePage(ActivePage.AreasAtuacaao)}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D62828] transition-colors"
              >
                • Áreas de Atuação
              </button>
              <button
                onClick={() => setActivePage(ActivePage.ObrasExecutadas)}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D62828] transition-colors"
              >
                • Portfólio
              </button>
              <button
                onClick={() => setActivePage(ActivePage.Contato)}
                className="block w-full text-center py-2.5 mt-4 bg-[#D62828] hover:bg-[#b52020] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}

        {/* 
          CENTRAL CONTENT AREA:
          Renders the active specific page view dynamically
        */}
        <main className="grow">
          {renderActiveView()}
        </main>

        {/* Google Maps Segment */}
        <Map />

        {/* CORPORATE FOOTER */}
        <footer className="bg-[#123C73] text-slate-300 pb-12 pt-16 px-6 lg:px-12 border-t border-[#123C73] w-full">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start max-w-7xl md:w-[75%] mx-auto">
            {/* Logo details */}
            <div className="md:col-span-5 space-y-4">
              <Logo 
                variant="horizontal" 
                height={52} 
                className="shrink-0" 
                onBlueBg={true}
              />
              <p className="text-xs text-slate-400 mt-4 leading-relaxed font-normal">
                Sólida atuação de mais de 30 anos no mercado construtivo brasileiro, fornecendo energia de qualidade de forma legal, confiável e em conformidade estrita com as normas da ABNT e diretrizes das concessionárias estaduais.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/re.engenhariaeletrica/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D62828] transition-colors" aria-label="Instagram">
                  <Icons.Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/reengenhariaeletrica" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D62828] transition-colors" aria-label="Facebook">
                  <Icons.Facebook className="w-5 h-5" />
                </a>
                <a href="https://br.linkedin.com/in/gilberto-teixeira-79a269211" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D62828] transition-colors" aria-label="LinkedIn">
                  <Icons.Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="font-sans font-bold text-xs lg:text-sm text-white uppercase tracking-wider">Acesso Rápido</h5>
              <ul className="text-xs space-y-2 text-slate-400">
                <li>
                  <button onClick={() => setActivePage(ActivePage.Home)} className="hover:text-white transition-colors">
                    Home Geral
                  </button>
                </li>
                <li>
                  <button onClick={() => setActivePage(ActivePage.Empresa)} className="hover:text-white transition-colors">
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button onClick={() => setActivePage(ActivePage.Servicos)} className="hover:text-white transition-colors">
                    Nossos Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => setActivePage(ActivePage.AreasAtuacaao)} className="hover:text-white transition-colors">
                    Áreas de Atuação
                  </button>
                </li>
                <li>
                  <button onClick={() => setActivePage(ActivePage.ObrasExecutadas)} className="hover:text-white transition-colors">
                    Portfólio
                  </button>
                </li>
              </ul>
            </div>

            {/* Support and legal */}
            <div className="md:col-span-4 space-y-4 text-xs">
              <h5 className="font-sans font-bold text-xs lg:text-sm text-white uppercase tracking-wider">Sede e Contato</h5>
              <p className="text-slate-400 leading-relaxed font-normal">
                São Bernardo do Campo - São Paulo, SP
              </p>
              <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-slate-400">
                <div><strong>Telefone / WhatsApp:</strong> (11) 96225-1448</div>
                <div><strong>E-mail:</strong> gilbertteixeirael@hotmail.com</div>
              </div>
            </div>
          </div>

          {/* Copy disclaimer */}
          <div className="border-t border-[#123C73] mt-12 pt-6 text-center text-xs lg:text-sm text-slate-500 max-w-7xl md:w-[75%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span>© 2018-{new Date().getFullYear()} RE Engenharia Elétrica Ltda. Todos os direitos reservados.</span>
            <span className="flex items-center gap-1">
              Desenvolvido por{' '}
              <a 
                href="https://bydomarketing.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#D62828] hover:text-white transition-colors hover:underline font-bold"
              >
                Bydo Marketing
              </a>
            </span>
          </div>
        </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511962251448"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
        id="whatsapp-floating-btn"
      >
        <span className="absolute -left-36 bg-[#123C73] text-white text-[11px] font-bold py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-wider">
          Fale Conosco
        </span>
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm11.983-2.025c1.785.001 3.522-.48 5.042-1.391l.362-.214 3.753.985-.999-3.66.234-.372c.999-1.587 1.525-3.411 1.524-5.285.002-5.556-4.46-10.074-9.955-10.074-2.651 0-5.143 1.033-7.016 2.91-1.875 1.879-2.903 4.38-2.905 7.039-.002 5.557 4.46 10.076 9.956 10.076zm5.452-7.464c-.298-.15-1.765-.87-2.04-.972-.274-.1-.474-.15-.673.15-.198.3-.77.972-.942 1.171-.173.2-.347.225-.645.075-.298-.15-1.258-.464-2.397-1.48-1.536-1.371-1.53-2.015-1.503-2.228.1-.383.3-.68.423-.833.024-.03.048-.06.07-.087.099-.126.163-.213.248-.383.085-.17.042-.32-.021-.47-.064-.15-.568-1.37-1.78-1.42-.3-.012-.559.088-.707.258-.027.03-.056.061-.082.093-.243.298-.679.83-.679 2.024 0 2.398 1.742 4.708 1.986 5.035.243.328 3.435 5.244 8.339 7.154 4.904 1.91 4.904 1.273 5.799 1.184.896-.089 2.04-.833 2.329-1.638.29-.805.29-1.493.203-1.637-.087-.145-.298-.225-.597-.375z" />
        </svg>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-2 cursor-pointer group/scroll"
          id="scroll-to-top-container"
        >
          <span className="bg-[#123C73] group-hover/scroll:bg-[#D62828] text-white text-[10px] lg:text-xs font-extrabold py-2 px-3 rounded-lg shadow-2xl transition-all uppercase tracking-wider select-none border border-white/10">
            Voltar ao Topo
          </span>
          <button
            className="bg-[#123C73] group-hover/scroll:bg-[#D62828] text-white p-4 rounded-full shadow-2xl transition-all group-hover/scroll:scale-110 active:scale-95 flex items-center justify-center border border-[#123C73]/20 pointer-events-none"
            aria-label="Voltar para o topo"
            id="scroll-to-top-btn"
          >
            <Icons.ArrowUp className="w-6 h-6" />
          </button>
        </div>
      )}

      </div>
    </div>
  );
}
