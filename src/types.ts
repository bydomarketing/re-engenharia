/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActivePage {
  Home = 'home',
  Empresa = 'empresa',
  Servicos = 'servicos',
  ProjetosInstalacoes = 'projetos-e-instalacoes-eletricas',
  ExecucaoObras = 'execucao-de-obras-eletricas',
  LeituraProjetos = 'leitura-e-interpretacao-de-projetos-eletricos',
  ManutencaoEletrica = 'manutencao-eletrica',
  CabinesMedia = 'cabines-primarias-e-media-tensao',
  SPDAAterramento = 'spda-e-sistemas-de-aterramento',
  AdequacoesModernizacoes = 'adequacoes-e-modernizacoes-eletricas',
  SistemasIncendio = 'sistemas-de-deteccao-e-alarme-de-incendio',
  EnergiaSolar = 'energia-solar',
  AreasAtuacaao = 'areas-atuacao',
  ObrasExecutadas = 'obras-executadas',
  Contato = 'contato'
}

export interface NavigationLink {
  id: ActivePage;
  label: string;
}

export interface ServiceItem {
  id: ActivePage;
  title: string;
  description: string;
  iconName: string;
  benefits?: string[];
  features?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  segment: string;
  scope: string;
  imageUrl?: string;
  galleryImages?: string[];
  highlights?: string[];
  mapsUrl?: string;
  client?: string;
  service?: string;
  detailedDescription?: string;
}

export interface AreaSegment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  challenges: string;
  appliedServices: string[];
  relatedProjects: string[];
}
