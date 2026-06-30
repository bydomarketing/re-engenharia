/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActivePage, NavigationLink, ServiceItem, FAQItem, ProjectItem, AreaSegment } from './types';

export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: ActivePage.Home, label: 'Home' },
  { id: ActivePage.Empresa, label: 'SOBRE NÓS' },
  { id: ActivePage.Servicos, label: 'Serviços' },
  { id: ActivePage.AreasAtuacaao, label: 'Áreas de Atuação' },
  { id: ActivePage.ObrasExecutadas, label: 'Portfólio' },
  { id: ActivePage.Contato, label: 'Contato' }
];

export const CORE_NUMBERS = [
  { value: '+30', suffix: ' anos', label: 'de atuação sólida no mercado nacional' },
  { value: '+500', suffix: ' obras', label: 'executadas com sucesso e comissionamento' },
  { value: '100%', suffix: '', label: 'de projetos com ART e homologação de engenharia' },
  { value: '26', suffix: ' estados', label: 'com capacidade de atendimento e mobilização rápida' }
];

export const CLIENT_LOGOS = [
  { name: 'Banco Itaú', industry: 'Setor Bancário' },
  { name: 'Unimed', industry: 'Saúde de Alta Complexidade' },
  { name: 'Shopping D&D', industry: 'Shopping / Corporativo' },
  { name: 'Clínica Plane', industry: 'Medicina Diagnóstica' },
  { name: 'Multh Engenharia', industry: 'Construção Civil' },
  { name: 'Construtora Provence', industry: 'Construção Civil' },
  { name: 'Metrô Casa', industry: 'Desenvolvimento Imobiliário' },
  { name: 'Prefeitura de SP', industry: 'Gestão Pública' },
  { name: 'Prefeitura de Guarujá', industry: 'Gestão Pública' },
  { name: 'SESI São Paulo', industry: 'Educação e Esporte' }
];

export const CORE_DIFFERENTIALS = [
  {
    title: 'Responsabilidade Técnica',
    description: 'Emissão de ART (Anotação de Responsabilidade Técnica) sob registro ativo no CREA-SP para todo e qualquer serviço prestado. Compromisso ético e civil.',
    iconName: 'Shield'
  },
  {
    title: 'Qualidade Rigorosa',
    description: 'Materiais e equipamentos certificados fornecidos pelos principais players mundiais, aplicados de acordo com as especificações precisas de projeto elétrico.',
    iconName: 'Award'
  },
  {
    title: 'Segurança Absoluta',
    description: 'Colaboradores 100% qualificados e certificados com NR-10 (Segurança em Instalações), NR-12 (Máquinas), NR-35 (Trabalho em Altura) e EPIs regulamentados.',
    iconName: 'HardHat'
  },
  {
    title: 'Transparência Total',
    description: 'Acompanhamento por Diários de Obra detalhados, relatórios fotográficos de progresso físico e cronograma monitorado de perto por engenheiros residentes.',
    iconName: 'Eye'
  },
  {
    title: 'Supervisão de Engenharia',
    description: 'Participação direta de engenheiros de campo em todas as fases, do kick-off inicial e planejamento de materiais até os ensaios de comissionamento final.',
    iconName: 'Cpu'
  },
  {
    title: 'Evolução Contínua',
    description: 'Investimento massivo em equipamentos de teste calibrados (RBC), softwares avançados de simulação computacional luminotécnica, de curto-circuito e SPDA.',
    iconName: 'TrendingUp'
  }
];

export const SERVICES_SUMMARY: ServiceItem[] = [
  {
    id: ActivePage.ProjetosInstalacoes,
    title: 'Projetos e Instalações Elétricas',
    description: 'Estudos de viabilidade, projetos executivos de baixa e média tensão, além de instalações elétricas industriais, comerciais e prediais de alta criticidade.',
    iconName: 'PenTool'
  },
  {
    id: ActivePage.ExecucaoObras,
    title: 'Execução de Obras Elétricas',
    description: 'Montagem de painéis, distribuição de força em leitos galvanizados, cabeamento estruturado e infraestruturas complexas de energia para alta produtividade.',
    iconName: 'Briefcase'
  },
  {
    id: ActivePage.LeituraProjetos,
    title: 'Leitura e Interpretação de Projetos Elétricos',
    description: 'Análise detalhada, interpretação estrutural e auditoria crítica de plantas técnicas para prevenção de inconformidades operacionais e de dimensionamento.',
    iconName: 'FileText'
  },
  {
    id: ActivePage.ManutencaoEletrica,
    title: 'Manutenção Elétrica',
    description: 'Programas de manutenção preventiva baseados em medições termográficas de ponta e correções ágeis com total segurança mecânica e operacional.',
    iconName: 'Settings'
  },
  {
    id: ActivePage.CabinesMedia,
    title: 'Cabines Primárias e Média Tensão',
    description: 'Dimensionamento, montagem eletromecânica, ensaios dielétricos (TTR), modernização de cabines (Retrofit) e aumento planejado de carga de energia.',
    iconName: 'Box'
  },
  {
    id: ActivePage.SPDAAterramento,
    title: 'SPDA e Sistemas de Aterramento',
    description: 'Sistemas de proteção contra surtos (DPS), caminhos de captação isolados e malhas equipotenciais de terra com baixos índices de resistividade.',
    iconName: 'Zap'
  },
  {
    id: ActivePage.AdequacoesModernizacoes,
    title: 'Adequações e Modernizações Elétricas',
    description: 'Reformas programadas (Retrofit), substituição cirúrgica de condutores de fiação elétrica e chaves degradadas, e regularização cadastral completa.',
    iconName: 'RefreshCw'
  },
  {
    id: ActivePage.SistemasIncendio,
    title: 'Sistemas de Detecção e Alarme de Incêndio',
    description: 'Instalação física de sensores industriais e prediais endereçados, interligação de comandos secundários e montagem de cabeamento antichama de alta temperatura.',
    iconName: 'Flame'
  },
  {
    id: ActivePage.EnergiaSolar,
    title: 'Energia Solar',
    description: 'Planejamento espacial e montagem de microgeradoras fotovoltaicas para residências e comércio, impulsionando a independência e sustentabilidade tarifária.',
    iconName: 'Sun'
  }
];

export const ABOUT_US = {
  quemSomos: 'A RE Engenharia Elétrica é uma empresa altamente consolidada com mais de 30 anos de atuação especializada no cenário nacional. Nascida sob o preceito de aliar sólido conhecimento acadêmico com excelência empírica, nos tornamos referência em engenharia construtiva técnica. Planejamos, coordenamos e executamos soluções integradas de energia de baixa e média tensão para indústrias robustas, hospitais de alta complexidade, centros corporativos e o setor público brasileiro. Nossa estrutura comercial e logística está perfeitamente preparada para atender necessidades de altíssima escala com mobilização ágil, rigor normativo e responsabilidade civil incontestável.',
  nossaHistoria: [
    { year: '1996', event: 'Fundação da RE Engenharia Elétrica em São Paulo, focada em consultoria técnica e projetos estruturais elétricos prediais.' },
    { year: '2004', event: 'Expansão de escopo para montagens eletromecânicas e execução direta de grandes obras de instalações industriais.' },
    { year: '2010', event: 'Certificação de processos corporativos estruturados e fornecimento de engenharia especializada para órgãos de saúde e hospitais.' },
    { year: '2018', event: 'Inovação tecnológica com aquisição de equipamentos termaise de análise de harmônicas de última geração calibrados RBC.' },
    { year: '2026', event: 'Mais de 500 grandes obras executadas e consolidação entre os principais players de engenharia elétrica especializada no Brasil.' }
  ],
  certificacoes: [
    'Artigo Quinto: Registro Ativo e Regularizado junto ao Conselho Regional de Engenharia e Agronomia (CREA-SP)',
    'Responsabilidade Técnica amparada por ARTs de projeto elétrico, execução eletromecânica e comissionamento',
    'Colaboradores integrados de forma direta ao PCMSO e PPRA, com exames médicos de aptidão física em dia',
    'Softwares de simulação computacional licenciados para dimensionamento preciso de redes e simulação de SPDA',
    'Instrumentos de ensaios elétricos com certificados de calibração vigentes rastreáveis pela Rede Brasileira de Calibração (RBC)'
  ]
};

export const SERVICES_DETAILS_DATA = {
  [ActivePage.ProjetosInstalacoes]: {
    heroTitle: 'Projetos e Instalações Elétricas',
    heroSubtitle: 'Engenharia refinada de planejamento, modelagem executiva detalhada, dimensionamento e consultoria regulatória para total estabilidade funcional de baixa e média tensão.',
    subsections: [
      {
        title: 'Projetos de Instalações Elétricas',
        description: 'Desenvolvimento de projetos executivos elétricos completos com base nas normas NBR 5410 e NBR 14039. Inclui diagramas unifilares refinados, plantas baixas de roteamento detalhadas, cálculos exatos de queda de tensão e especificação rigorosa de condutores e proteções.'
      },
      {
        title: 'Leitura e Interpretação de Projetos Elétricos',
        description: 'Análise minuciosa e compatibilização de diagramas elétricos com outras disciplinas de uma obra (civil, hidráulica, climatização), traduzindo desenhos em planos de montagem de campo sem qualquer desvio ou retrabalho dispendioso.'
      },
      {
        title: 'Instalações Prediais',
        description: 'Estruturação integrada do fluxo de energia para edifícios multifamiliares e arranha-céus corporativos, cuidando desde a prumada elétrica de distribuição, quadros de medição coletiva homologados até sistemas de iluminação técnica de alto padrão.'
      },
      {
        title: 'Instalações Comerciais',
        description: 'Montagem de caminhos de cabos, leitos e infraestrutura elétrica para lojas de varejo de grande porte, supermercados e shoppings. Projetos luminotécnicos computadorizados e flexibilidade de layout corporativo com segurança.'
      },
      {
        title: 'Instalações Industriais',
        description: 'Sistemas elétricos industriais robustos para grandes máquinas, lines de produção integradas e motores de indução trifásicos. Gestão eficiente de caminhos metálicos estruturais pesados e interligações complexas trifásicas.'
      },
      {
        title: 'Consultoria em Engenharia Elétrica',
        description: 'Assessoria de alta capacidade analítica para auditoria de consumo energético residencial, empresarial ou industrial, dimensionamento de correção de fator de potência e migração estratégica para o Mercado Livre de Energia.'
      }
    ],
    faqs: [
      {
        question: 'O que a RE Engenharia Elétrica necessita para dar início ao escopo de projetos?',
        answer: 'Trabalhamos de forma integrada a partir de plantas arquitetônicas baixas (em DWG ou modelagem BIM), dados estimados de demanda de energia elétrica solicitados por máquinas, e especificações específicas de cargas do comércio ou condomínio.'
      },
      {
        question: 'Todas as entregas de projetos preveem e acompanham emissão de ART?',
        answer: 'Com certeza absoluta. Toda a documentação técnica elaborada por nossos engenheiros e submetida a aprovações de concessionárias ou prefeituras possui Anotação de Responsabilidade Técnica (ART) sob registro ativo no CREA-SP.'
      }
    ]
  },
  [ActivePage.ExecucaoObras]: {
    heroTitle: 'Execução de Obras Elétricas',
    heroSubtitle: 'Execução física integral de empreendimentos industriais e prediais de energia com máximo rigor mecânico, cumprimento estrito de prazos e excelência civil.',
    subsections: [
      {
        title: 'Execução de Obras Elétricas',
        description: 'Materialização prática de projetos elétricos coordenados e supervisionados em campo por engenheiros de montagem experientes, assegurando que o planejado seja replicado rigorosamente em campo com alto padrão operativo.'
      },
      {
        title: 'Montagem de Painéis Elétricos',
        description: 'Concepção física e estruturação interna de painéis elétricos auxiliares sob medida, alinhando barramentos de cobre tracionados de alta condutividade e organizando calhas de cabeamento sob perfeito isolamento térmico.'
      },
      {
        title: 'Montagem de Quadros Elétricos',
        description: 'Montagem e organização de quadros de distribuição de luz e força gerais (QDLF) e quadros de embutir prediais com perfeito anilhamento metálico e polimérico e marcação lógica para facilitar processos futuros de manutenção.'
      },
      {
        title: 'Montagens Industriais',
        description: 'Ancoragem de leitos e perfilados pesados, acoplagem eletromecânica de chaves seccionadoras e motores trifásicos, além de comissionamento elétrico de infraestruturas fabris complexas e subestações industriais.'
      },
      {
        title: 'Infraestrutura Elétrica',
        description: 'Passagem aérea e subterrânea de fiação alimentadora de bitola generosa com ferramentarias específicas para proteção mecânica máxima dos condutores, e distribuição de barramentos blindados (Busways) de alta flexibilidade.'
      }
    ],
    faqs: [
      {
        question: 'Qual a qualificação técnica exigida para os eletricistas e montadores da RE?',
        answer: 'Nossas frentes de obras em geral são coordenadas por engenheiros supervisores fixos e executadas por montadores altamente certificados nas diretrizes obrigatórias de segurança NR-10, NR-12, NR-35 e portabilidade operacional de EPIs.'
      },
      {
        question: 'Como é garantido que a RE Engenharia Elétrica garanta o cumprimento do cronograma?',
        answer: 'Trabalhamos com diários de obra digitais diários e controle preditivo exato de estoques de fiação e perfilados. Nossos engenheiros antecipam as requisições de materiais para que nenhum gap logístico atrase o comissionamento técnico final.'
      }
    ]
  },
  [ActivePage.ManutencaoEletrica]: {
    heroTitle: 'Manutenção Elétrica',
    heroSubtitle: 'Rigorosa gestão preditiva, preventiva e corretiva de sistemas para eliminar riscos imprevistos de inatividade e sobreaquecimento térmico nocivo.',
    subsections: [
      {
        title: 'Manutenção Preventiva',
        description: 'Inspeções térmicas periódicas com câmeras termográficas de altíssima fidelidade Flir de última geração, mapeando pontos quentes anômalos em barramentos e reaperto geral mecânico com ciclo de chaves torquimétricas calibradas.'
      },
      {
        title: 'Manutenção Corretiva',
        description: 'Troca ágil e segura de contatores desgastados por ação de arcos elétricos, troca urgente de fusíveis especiais de potência e disjuntores avariados sob total atendimento emergencial com foco no retorno rápido da produção comercial.'
      },
      {
        title: 'Manutenção Elétrica Industrial',
        description: 'Testes de resistência térmica de motores e isolação de bobinas (Megger), filtragem de óleo isolante de transformadores industriais instalados e testes de funcionamento de Bancos de Capacitores Automáticos de alta fidelidade.'
      }
    ],
    faqs: [
      {
        question: 'Quais equipamentos de diagnóstico preditivo a RE Engenharia Elétrica utiliza?',
        answer: 'Nossa divisão preditiva é amparada por instrumental certificado RBC (Rede Brasileira de Calibração), contendo megômetros digitais, terrômetros de alta frequência, alicates termográficos rápidos e analisadores trifásicos de perturbações Fluke.'
      },
      {
        question: 'Vocês emitem certificados e relatórios detalhados contendo imagens fotogeradas?',
        answer: 'Sim, todos os ciclos preventivos ou vistorias diagnósticas geram um laudo oficial ilustrado detalhado, integrando as fotografias térmicas comparativas com as medições de carga e corrente do exato momento das manobras operadas.'
      }
    ]
  },
  [ActivePage.CabinesMedia]: {
    heroTitle: 'Cabines Primárias e Média Tensão',
    heroSubtitle: 'Estruturação, ampliação, ensaios de rigidez dielétrica e homologação completa de subestações transformadoras junto a concessionárias.',
    subsections: [
      {
        title: 'Cabines Primárias',
        description: 'Dimensionamento operacional e implantação turnkey de cabines primárias em alvenaria convencional ou cabines metálicas blindadas compactas autossuficientes, perfeitamente em conformidade com as diretivas das concessionárias locais.'
      },
      {
        title: 'Média Tensão',
        description: 'Montagem mecânica e barramento de chaves de acoplamento a vácuo, transformadores isolados a óleo mineral ou seco (resina epóxi) de alta eficiência energética de média tensão, além de relés de proteção coordenados refinados (padrão SEL).'
      },
      {
        title: 'Ampliação de Carga',
        description: 'Estudo analítico e assessoria técnica perante a concessionária para aumento do limite de corrente e consumo liberados, interligação de novos cubículos isolados adicionais de energia e adensamento estrutural mecânico.'
      },
      {
        title: 'Adequações de Cabines',
        description: 'Upgrade estrito de segurança substituindo isoladores trincados por modelos poliméricos hidrofóbicos avançados, reinstalação de conexões desgastadas terrestres e iluminação de segurança operacional interna de emergência.'
      },
      {
        title: 'Modernização de Cabines',
        description: 'Atualização construtiva integrando chaves motorizadas com comando à distância seguro, instalação física de barreira de arco de explosão e reforma de painéis analógicos obsoletos por centrais microprocessadas digitais.'
      }
    ],
    faqs: [
      {
        question: 'Por que empresas buscam migrar para o mercado de média tensão (Cabine Primária)?',
        answer: 'A energia adquirida em média tensão goza de tarifas de consumo consideravelmente mais acessíveis. O projeto de implantação de uma cabine primária para indústrias e comércio robusto costuma se pagar integralmente em prazos estimados de 1 a 2 anos.'
      },
      {
        question: 'Como se dá o andamento burocrático de aprovação com as concessionárias de energia?',
        answer: 'A RE Engenharia Elétrica cuida de toda a esteira do andamento. Elaboramos memoriais de cálculo de demanda, estudos de parametrização lógica de relés, submetemos os arquivos DWG nos portais integrados das distribuidoras e asseveramos vistoria física sem qualquer restrição.'
      }
    ]
  },
  [ActivePage.SPDAAterramento]: {
    heroTitle: 'SPDA e Sistemas de Aterramento',
    heroSubtitle: 'Estruturação inteligente de blindagem contra surtos e dissipadores magnéticos terrestres sob estreito respaldo das normas NBR 5419 e NBR 5410.',
    subsections: [
      {
        title: 'SPDA',
        description: 'Cálculo de análise de riscos estruturados computacionalmente, implantação de malhas de captação e condutores metálicos de descida (Gaiola de Faraday ou Método dos Ângulos) ancoradas perfeitamente por fachadas prediais de grandes alturas.'
      },
      {
        title: 'Sistemas de Aterramento',
        description: 'Desenho cirúrgico e execução física de malhas de aterramento equipotencial terrestres, injetando hastes revestidas de cobre profundo e unindo condutores metálicos por meio de processo endotérmico de soldagem de alta durabilidade.'
      },
      {
        title: 'Proteção contra Descargas Atmosféricas',
        description: 'Planejamento e instalação espacial de sinalizadores inteligentes DPS na entrada primária dos painéis de baixa tensão, reduzindo picos induzidos por relâmpagos próximos de forma a blindar equipamentos eletrônicos de precisão.'
      },
      {
        title: 'Adequações de Sistemas de Proteção',
        description: 'Intervenções corretivas para recuperação de malhas oxidadas, reinstalação de trechos de barramentos de alumínio danificados e ensaios de continuidade física das armaduras estruturais de edifícios antigos.'
      }
    ],
    faqs: [
      {
        question: 'Qual a periodicidade legal exigida para os laudos técnicos estruturais de SPDA?',
        answer: 'Em cumprimento a solicitações de Corpo de Bombeiros, seguradoras patrimoniais e auditores do Ministério do Trabalho, as medições de aterramento e emissão de laudo SPDA com ART devem ser emitidos anualmente ou a cada 3 anos para riscos padrão.'
      },
      {
        question: 'Como é garantido que a infraestrutura resistirá aos ambientes de solos agressivos?',
        answer: 'Utilizamos apenas cabos normatizados e hastes com alto teor de deposição micrométrica de cobre eletrolítico estável, complementando uniões por solda exotérmica para que a junção eletrônica de terra persista livre de oxidações por décadas sob solo úmido.'
      }
    ]
  },
  [ActivePage.AdequacoesModernizacoes]: {
    heroTitle: 'Adequações e Modernizações Elétricas',
    heroSubtitle: 'Engenharia cirúrgica de Retrofit elétrico, renovação de condutores degradados termicamente e conformidade integral perante órgãos públicos.',
    subsections: [
      {
        title: 'Adequações Elétricas',
        description: 'Reformas pontuais para regularização total de sistemas que apresentam falhas frequentes de sobrecarga. Inclui redimensionamento cirúrgico de disjuntores de entrada, adequação construtiva de barramentos de cobre e inserção de DPS/DR.'
      },
      {
        title: 'Modernização de Instalações',
        description: 'Atualização tecnológica e remodelação de redes elétricas prediais ou comerciais velhas. Substituição de quadros de ferro e fiação vulcanizada antiga por instalações contemporâneas limpas livres de perdas geradas por efeito Joule.'
      },
      {
        title: 'Retrofit Elétrico',
        description: 'Técnica de reengenharia aplicada para atualizar painéis de distribuição (QGBT) ou quadros de comando mantendo a envolvente civil existente, proporcionando rápida atuação de disjuntores disparadores eletrônicos sem perdas estruturais.'
      },
      {
        title: 'Regularização de Sistemas Elétricos',
        description: 'Elaboração documental, memoriais de estabilidade e readequação física para atendimento a notificações fiscais, exigências imediatas da vigilância sanitária ou laudos preventivos de condomínios.'
      }
    ],
    faqs: [
      {
        question: 'O Retrofit Elétrico demanda a paralisação longa das operações comerciais?',
        answer: 'De forma alguma. Na RE Engenharia Elétrica, planejamos desligamentos cirúrgicos escalonados (shut-downs) em horários não operacionais (noites/finais de semana) e disponibilizamos paralelamente, se necessário, sincronismo de grupos geradores temporários.'
      },
      {
        question: 'Quais os riscos diretos de postergar adequações corretivas em cabos e chaves?',
        answer: 'Fiações antigas sofrem fadiga contínua do isolante termoplástico, ocasionando fugas de corrente (encarecimento mensal inexplicável da tarifa), sobreaquecimentos severos recorrentes em conexões e riscos graves imediatos de pânico ou curtos térmicos.'
      }
    ]
  },
  [ActivePage.SistemasIncendio]: {
    heroTitle: 'Sistemas de Detecção e Alarme de Incêndio',
    heroSubtitle: 'Planejamento e estruturação de redes de alarme prediais e industriais, com ativação integrada de sensores sob absoluto rigor operacional.',
    subsections: [
      {
        title: 'Sistema de Detecção de Incêndio',
        description: 'Instalação física de detectores de fumaça e sensores térmicos endereçáveis, posicionados estrategicamente nos ambientes conforme cálculo espacial exato, assegurando cobertura total de monitoramento contra indícios biológicos de gases.'
      },
      {
        title: 'Sistema de Alarme de Incêndio',
        description: 'Montagem de caminhos de cabos blindados antichamas resistentes a altíssimas temperaturas operacionais mecânicas, ligando sirenes sonoras potentes, acionadores manuais do tipo "quebre o vidro" e centrais supervisoras digitais comandadas.'
      },
      {
        title: 'Sistema de Combate a Incêndio',
        description: 'Mapeamento e interligação técnica elétrica e eletrônica de painéis de bombas de incêndio hidráulicas (motor principal e motor jockey de pressurização profunda), garantindo comandos lógicos de partida redundantes e autônomos sob intercorrências críticas.'
      }
    ],
    faqs: [
      {
        question: 'Os materiais e condutores destes sistemas obedecem a regulamentação antichama?',
        answer: 'Sim, de forma imutável. Toda a distribuição de sensoriamento de emergência é operada com cabos especiais blindados com blindagem eletrostática e isolação livre de compostos halogenados (LSZH), sobrevivendo a temperaturas elevadas sob sinistro.'
      },
      {
        question: 'Vocês realizam a integração das centrais de alarme com outros acionadores?',
        answer: 'Realizamos sim. Nossas soluções preveem comandos inteligentes integrados para que, na ocorrência técnica de acionamento do sensor, a central envie pulsos elétricos para liberação automática de catracas, destravamento de portas magnéticas e desligamento imediato de climatizadores de duto.'
      }
    ]
  },
  [ActivePage.EnergiaSolar]: {
    heroTitle: 'Energia Solar',
    heroSubtitle: 'Planejamento construtivo, aprovação e montagem de microgeradoras solares fotovoltaicas sob medida para independência sustentável.',
    subsections: [
      {
        title: 'Energia Solar para Empresas',
        description: 'Dimensionamento de sistemas fotovoltaicos de geração de eletricidade adaptados para telhados comerciais ou coberturas mecânicas industriais. Redução significativa do custo insumo de fabricação ao longo de ciclos operacionais diurnos.'
      },
      {
        title: 'Energia Solar para Residências',
        description: 'Implantação de placas solares com alta resistência estática mecânica a ventos e intempéries, com fixação estrutural que preserva integralmente a impermeabilização do telhado residencial de concreto ou madeira.'
      },
      {
        title: 'Instalação de Sistemas Fotovoltaicos',
        description: 'Montagem de painéis, inversores de alta eficiência tecnológica homologados pela Aneel, roteamento de cabos CC certificados de proteção UV e montagem de string-boxes robustas com fusíveis ultrarrápidos integrados.'
      },
      {
        title: 'Manutenção de Sistemas Solares',
        description: 'Ciclos de limpeza especializada periódica de resíduos das placas fotovoltaicas para maximização da absorção de luz solar, medição de aterramento e testes lógicos eletrônicos térmicos de inversores (microinversores).'
      }
    ],
    faqs: [
      {
        question: 'Quais os passos da homologação do sistema fotovoltaico com a concessionária?',
        answer: 'Nossos engenheiros desenvolvem o projeto técnico de microgeração, submetem a documentação e ART à distribuidora, solicitam a vistoria física e garantem a substituição do relógio de medição convencional por um relógio bidirecional regulado.'
      },
      {
        question: 'A RE Engenharia Elétrica oferece garantias contratuais de potência gerada?',
        answer: 'Nossos projetos usam softwares de excelente precisão meteorológica para estimativa realística mensal de irradiação solar. Trabalhamos exclusivamente com marcas que garantem eficiência linear das células fotovoltaicas superior a 80% por 25 anos.'
      }
    ]
  }
};

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-quadra-diadema',
    title: 'Quadra de Futebol Diadema - SP',
    location: 'Diadema - SP',
    segment: 'Infraestrutura',
    scope: 'Execução de instalações elétricas com tubulação externa galvanizada de alta resistência para iluminação e alimentação geral da quadra de futebol em Diadema.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224745/Captura_de_tela_de_2026-06-23_11-24-00_qu8ses.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224745/Captura_de_tela_de_2026-06-23_11-24-00_qu8ses.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224745/Captura_de_tela_de_2026-06-23_11-24-07_ogcsjf.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224746/Captura_de_tela_de_2026-06-23_11-24-22_w5moyt.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224746/Captura_de_tela_de_2026-06-23_11-24-16_c0rwed.png'
    ],
    highlights: ['Infraestrutura externa galvanizada a prova de tempo', 'Sistemas de iluminação esportiva profissional', 'Instalação e encaminhamento elétrico robustos'],
    client: 'Prefeitura de Diadema / Secretaria de Esportes',
    service: 'Projetos e Instalações Elétricas',
    detailedDescription: 'Instalação completa e montagem mecânica profissional de encaminhamento externo por eletrodutos pesados galvanizados, conexões de segurança intempérie IP65, passagem de condutores dimensionados para refletores esportivos de longo alcance e comissionamento técnico geral.'
  },
  {
    id: 'proj-metrocasa-escritorio',
    title: 'Construtora Metrocasa - Reforma de Escritório no Edifício Itália',
    location: 'São Paulo - SP',
    segment: 'Corporativo',
    scope: 'Reforma integral das instalações de eletricidade e redes estruturadas para o novo escritório corporativo central de atendimento da Construtora Metrocasa, no icônico Edifício Itália.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176208/WhatsApp_Image_2026-06-08_at_19.47.13_3_g6ddhb.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176208/WhatsApp_Image_2026-06-08_at_19.47.13_3_g6ddhb.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176208/WhatsApp_Image_2026-06-08_at_19.47.14_sst72o.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176208/WhatsApp_Image_2026-06-08_at_19.47.13_2_yseeie.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176207/WhatsApp_Image_2026-06-08_at_19.47.13_1_ih72ay.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176207/WhatsApp_Image_2026-06-08_at_19.47.13_ohspd4.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782176207/WhatsApp_Image_2026-06-08_at_19.44.50_lo2at0.jpg'
    ],
    highlights: ['Infraestrutura elétrica corporativa completa', 'Localizado no Edifício Itália (Av. Ipiranga)', 'Adequação estética e organizadora de cabeamento'],
    client: 'Construtora Metrocasa',
    service: 'Adequações e Modernizações Elétricas',
    detailedDescription: 'Projeto e execução turnkey para completa reforma da infraestrutura elétrica, tomadas, iluminação de alto padrão estético de design corporativo, lógica de rede e infraestrutura de servidores para o novo escritório da Construtora Metrocasa ocupando andar de prestígio no tradicional Edifício Itália em São Paulo.'
  },
  {
    id: 'proj-santa-helena-hospital',
    title: 'Hospital Santa Helena - São Bernardo do Campo - SP',
    location: 'São Bernardo do Campo - SP',
    segment: 'Saúde',
    scope: 'Reforma integral de infraestrutura elétrica e adequação técnica das instalações e salas médicas para o Hospital Santa Helena em São Bernardo do Campo.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177040/WhatsApp_Image_2026-05-28_at_10.47.00_2_jesb4p.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177040/WhatsApp_Image_2026-05-28_at_10.47.00_2_jesb4p.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177040/WhatsApp_Image_2026-05-28_at_10.47.00_1_utjq9j.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177039/WhatsApp_Image_2026-05-28_at_10.47.00_br83tj.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177038/WhatsApp_Image_2026-05-28_at_10.46.59_1_nb3uqe.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177038/WhatsApp_Image_2026-05-28_at_10.46.59_l7ioxu.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177037/WhatsApp_Image_2026-05-28_at_10.46.58_1_dtaqh4.jpg',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782177037/WhatsApp_Image_2026-05-28_at_10.46.58_lqnnib.jpg'
    ],
    highlights: ['Adequações elétricas de salas médicas', 'Retrofit geral de barramentos', 'Sistemas de energia segura e continuada'],
    client: "Hospital Santa Helena / Rede D'Or",
    service: 'Projetos e Instalações Elétricas',
    detailedDescription: 'Planejamento construtivo e execução da reforma completa das infraestruturas de encaminhamento e fiação elétrica, readequação de painéis de distribuição interna e montagem de circuitos estabilizados redundantes para atendimento dos requisitos normativos em ambientes de atendimento hospitalar e áreas críticas.'
  },
  {
    id: 'proj-ceu-alpina',
    title: 'CEU Vila Alpina - São Paulo',
    location: 'São Paulo - SP',
    segment: 'Educação',
    scope: 'Instalação elétrica geral em execução para o novo complexo do CEU Vila Alpina, incluindo cabeamento lógico, barramentos de potência e redes de distribuição integras.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223890/Captura_de_tela_de_2026-06-23_11-10-37_yqftdl.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223890/Captura_de_tela_de_2026-06-23_11-10-37_yqftdl.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223889/Captura_de_tela_de_2026-06-23_11-10-29_kfb7c3.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223890/Captura_de_tela_de_2026-06-23_11-10-47_zdgyxe.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223889/Captura_de_tela_de_2026-06-23_11-09-36_bbea04.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223890/Captura_de_tela_de_2026-06-23_11-10-54_tatlq2.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223889/Captura_de_tela_de_2026-06-23_11-09-49_wb0pwg.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223889/Captura_de_tela_de_2026-06-23_11-09-13_gticza.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223889/Captura_de_tela_de_2026-06-23_11-09-30_ygnb2g.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782223889/Captura_de_tela_de_2026-06-23_11-09-23_iuhvh5.png'
    ],
    highlights: ['Instalação elétrica geral em execução', 'Rigoroso controle técnico de barramentos', 'Equipagem predial de alta capacidade'],
    client: 'Prefeitura de São Paulo / Secretaria Municipal de Educação',
    service: 'Execução de Obras Elétricas',
    detailedDescription: 'Frentes de trabalho coordenadas e ativas em campo para implementação completa e segura da rede de força de baixa e média tensão, envolvendo salas de aula, quadras, teatro, áreas administrativas e infraestrutura robusta de iluminação e segurança de energia.'
  },
  {
    id: 'proj-sesi-sp',
    title: 'SESI SÃO PAULO',
    location: 'Estado de São Paulo',
    segment: 'Educação',
    scope: 'Obras executadas em unidades do SESI no Estado de São Paulo.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782232829/f7eb1cd6d3e5d4e8e304fd1a4c2ad9461fba4fdcd3a560daa094b5289e1565a4_ifhrwe.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782232829/f7eb1cd6d3e5d4e8e304fd1a4c2ad9461fba4fdcd3a560daa094b5289e1565a4_ifhrwe.jpg'
    ],
    highlights: [
      'SESI Caçapava – obra executada do início ao fim',
      'SESI Lorena – obra executada do início ao fim',
      'SESI Mauá – reforma da piscina e ampliação'
    ],
    client: 'SESI - Serviço Social da Indústria',
    service: 'Projetos, Instalações e Adequações Elétricas',
    detailedDescription: 'A RE Engenharia Elétrica participou da execução de obras em diferentes unidades do SESI no Estado de São Paulo, atuando em projetos de infraestrutura elétrica, ampliações, reformas e adequações técnicas.\n\nUnidades contempladas:\n• SESI Caçapava\n• SESI Lorena\n• SESI Mauá\n\nAtividades executadas:\n• Instalações elétricas\n• Infraestrutura elétrica\n• Reformas e ampliações\n• Adequações técnicas\n• Montagem e distribuição elétrica\n\nObservações:\n• SESI Caçapava – obra executada do início ao fim.\n• SESI Lorena – obra executada do início ao fim.\n• SESI Mauá – reforma da piscina e ampliação da área ao redor.'
  },
  {
    id: 'proj-escola-guaruja',
    title: 'Escola Municipal de Guarujá – SP',
    location: 'Guarujá - SP',
    segment: 'Educação',
    scope: 'Execução de elétrica da Escola Municipal da Prefeitura de Guarujá em São Paulo.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782233332/Captura_de_tela_de_2026-06-23_13-47-28_sbjzup.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782233332/Captura_de_tela_de_2026-06-23_13-47-28_sbjzup.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782233334/Captura_de_tela_de_2026-06-23_13-47-57_lqsiz1.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782233333/Captura_de_tela_de_2026-06-23_13-47-50_nhvwne.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782233333/Captura_de_tela_de_2026-06-23_13-47-42_vs3sfo.png'
    ],
    highlights: [
      'Execução das instalações elétricas prediais',
      'Infraestrutura de baixa tensão e iluminação',
      'Montagem de quadros gerais de distribuição'
    ],
    client: 'Prefeitura de Guarujá / Secretaria de Educação',
    service: 'Projetos e Instalações Elétricas',
    detailedDescription: 'Execução completa das obras de instalações elétricas civis e prediais para a Escola Municipal da Prefeitura de Guarujá, em São Paulo. O projeto englobou a montagem de infraestruturas suspensas para fiação, passagem de cabos alimentadores, instalação de quadros de distribuição de energia com disjuntores de segurança, luminárias de alto rendimento energético e infraestrutura de rede para salas de aula, administração e áreas comuns.'
  },
  {
    id: 'proj-clube-itau',
    title: 'Clube Banco Itaú (São Sebastião) - SPDA e Aterramento',
    location: 'São Sebastião - SP',
    segment: 'Bancário',
    scope: 'Projeto e execução de sistema de proteção contra descargas atmosféricas (SPDA) com solda exotérmica nos captores e malhas de aterramento para o Clube Banco Itaú no Litoral de SP.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225133/Captura_de_tela_de_2026-06-23_11-30-48_yfnbvl.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225133/Captura_de_tela_de_2026-06-23_11-30-48_yfnbvl.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225134/Captura_de_tela_de_2026-06-23_11-30-53_wzcvsu.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225134/Captura_de_tela_de_2026-06-23_11-31-02_c2eln9.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225135/Captura_de_tela_de_2026-06-23_11-31-08_oh3vbw.png'
    ],
    highlights: ['Uso técnico de solda exotérmica', 'Atendimento restrito à NBR 5419', 'Emissão de Laudo Técnico e ART ativa'],
    client: 'Banco Itaú Unibanco S.A.',
    service: 'SPDA e Sistemas de Aterramento',
    detailedDescription: 'Instalação completa de para-raios e captores de proteção aérea Franklin, anéis metálicos e conexões realizadas por meio de solda exotérmica de alta condutividade e fusão perfeita, além de condutores de descida isolados e comissionamento com laudo de resistividade elétrica.'
  },
  {
    id: 'proj-clube-itau-represa',
    title: 'Clube Banco Itaú - Represa Guarapiranga, Itanhaém e São Sebastião',
    location: 'São Paulo, Itanhaém e São Sebastião - SP',
    segment: 'Bancário',
    scope: 'Instalação de fita de alumínio nas coberturas com descida para ligação mecânica segura na malha de aterramento em cabo de cobre nu de 50 mm, além da ligação dos postes com captor Franklin.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225351/Captura_de_tela_de_2026-06-23_11-34-55_sqikd5.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225351/Captura_de_tela_de_2026-06-23_11-34-55_sqikd5.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225350/Captura_de_tela_de_2026-06-23_11-34-46_akxmgu.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225348/Captura_de_tela_de_2026-06-23_11-34-40_xebvbh.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225345/Captura_de_tela_de_2026-06-23_11-34-29_avnjvy.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225345/Captura_de_tela_de_2026-06-23_11-33-26_iesgrt.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225344/Captura_de_tela_de_2026-06-23_11-33-19_n5lsva.png'
    ],
    highlights: ['Instalação de fitas de alumínio', 'Malha com cabo de cobre nu 50 mm', 'Montagem e interligação de captores Franklin'],
    client: 'Banco Itaú Unibanco S.A.',
    service: 'SPDA e Sistemas de Aterramento',
    detailedDescription: 'Implantação completa de redes protetivas adicionais de SPDA nas coberturas e estruturas sociais e esportivas dos clubes de funcionários do Itaú em diferentes regiões de São Paulo (Guarapiranga, Itanhaém, São Sebastião). Estiramento mecânico de fitas condutoras de alumínio de alta pureza, montagem de rotas de descida seguras conectando as coberturas diretamente à malha inferior de aterramento estruturado em cabo de cobre nu robusto de 50mm, e montagem de sistema aéreo de postes elevadores instalando captores blindados da marca Franklin.'
  },
  {
    id: 'proj-unimed-hospital',
    title: 'Unimed em Leme – SP',
    location: 'Leme - SP',
    segment: 'Saúde',
    scope: 'Montagem de transformador de voltagem de 380V para 127V/220V com capacidade de 500 kVA e montagem completa do quadro de distribuição na obra da Unimed em Leme - SP.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v178228632/Captura_de_tela_de_2026-06-22_20-37-44_slshlj.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v178228632/Captura_de_tela_de_2026-06-22_20-37-44_slshlj.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v178228630/Captura_de_tela_de_2026-06-22_20-36-00_w9ub29.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v178228629/Captura_de_tela_de_2026-06-22_20-35-52_wbcrub.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v178228629/Captura_de_tela_de_2026-06-22_20-35-45_jqsfn1.png'
    ],
    highlights: ['Transformador de 500 kVA', 'Painéis e quadro de distribuição', 'Conversão de voltagem 380V/220V/127V'],
    client: 'Unimed Leme Sociedade Cooperativa',
    service: 'Cabines Primárias e Média Tensão',
    detailedDescription: 'Montagem e comissionamento eletromecânico completo de um transformador de voltagem pesada com capacidade de 500 kVA, projetado para reduzir a tensão de 380V para 127V e 220V de forma segura e estável. O projeto inclui também a montagem, o barramento e a conexão técnica de fiação do quadro de distribuição elétrica geral de força e luz.'
  },
  {
    id: 'proj-hc-rj',
    title: 'Hospital Universitário Clementino Fraga Filho (Hospital do Fundão/HUCFF) da UFRJ',
    location: 'Rio de Janeiro - RJ',
    segment: 'Saúde',
    scope: 'Instalação de máquina de ressonância magnética e adequação completa de infraestrutura elétrica de alimentação e suporte técnico.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235562/Captura_de_tela_de_2026-06-23_14-24-50_eqwkaa.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235562/Captura_de_tela_de_2026-06-23_14-24-50_eqwkaa.png'
    ],
    highlights: ['Instalação de máquina de ressonância', 'Infraestrutura elétrica dedicada', 'Adequações de segurança hospitalar'],
    client: 'Hospital Universitário Clementino Fraga Filho (Hospital do Fundão/HUCFF) da UFRJ',
    service: 'Instalações Hospitalares e Blindagem Técnica',
    detailedDescription: 'A RE Engenharia Elétrica executou a montagem completa da infraestrutura de suporte e alimentação dedicada para a instalação de máquina de ressonância magnética no Hospital Universitário Clementino Fraga Filho (Hospital do Fundão/HUCFF) da UFRJ, no Rio de Janeiro. O escopo contemplou o lançamento técnico de condutores de alta confiabilidade, conexões de segurança e montagem de painéis elétricos para garantir o pleno funcionamento do equipamento de diagnóstico por imagem de alta complexidade.'
  },
  {
    id: 'proj-shopping-ded',
    title: 'Shopping D&D - Reforma Geral de Infraestrutura',
    location: 'São Paulo - SP',
    segment: 'Corporativo',
    scope: 'Desmobilização sistemática segura de caminhos e circuitos de fiação elétrica obsoletos, remoção de chaves e painéis velhos oxidados, montagem mecânica suspensa e conexões de novos leitos galvanizados, passagem de fiação alimentadora de cobre tracionada e conexão de Quadro de Distribuição Geral dos Lojistas.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175805/FOTO_DE_CAPA_knbpvo.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175805/FOTO_DE_CAPA_knbpvo.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175802/Captura_de_tela_de_2026-06-22_20-30-51_fapies.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175801/Captura_de_tela_de_2026-06-22_20-30-45_bngwqe.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175805/Captura_de_tela_de_2026-06-22_20-33-16_tihork.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175804/Captura_de_tela_de_2026-06-22_20-33-08_esuuy2.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175802/Captura_de_tela_de_2026-06-22_20-32-35_m0rdr5.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175802/Captura_de_tela_de_2026-06-22_20-32-42_decbvv.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175802/Captura_de_tela_de_2026-06-22_20-32-50_d06nvc.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175801/Captura_de_tela_de_2026-06-22_20-29-26_smvo65.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175801/Captura_de_tela_de_2026-06-22_20-29-21_eaej84.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782175801/Captura_de_tela_de_2026-06-22_20-29-33_pxnnuw.png'
    ],
    highlights: ['Desmobilização de redes obsoletas', 'Fusíveis e chaves blindadas', 'Novos leitos galvanizados suspensos'],
    client: 'Shopping D&D / Lojistas Reunidos',
    service: 'Adequações e Modernizações Elétricas',
    detailedDescription: 'Completo retrofit de fiação de potência lógica para as lojas e áreas de circulação do Shopping D&D em São Paulo.'
  },
  {
    id: 'proj-ceu-carmo',
    title: 'CEU Parque do Carmo - Instalação da Cabine Primária',
    location: 'São Paulo - SP',
    segment: 'Educação',
    scope: 'Execução de toda a infraestrutura e instalações elétricas prediais de força e luz. Inclui a cabine primária para fornecimento de média tensão segura ao ginásio poliesportivo, teatro, blocos de aula e áreas da administração pública.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-16-01_cpoept.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-16-01_cpoept.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-16-11_znteq6.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224266/Captura_de_tela_de_2026-06-23_11-14-11_c1ube2.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-16-07_vi4irs.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224267/Captura_de_tela_de_2026-06-23_11-15-48_jaivtc.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224266/Captura_de_tela_de_2026-06-23_11-14-17_i17mgu.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224265/Captura_de_tela_de_2026-06-23_11-13-56_zkjyfh.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782224265/Captura_de_tela_de_2026-06-23_11-14-03_dozizo.png'
    ],
    highlights: ['Instalação e adequação de cabine primária', 'Redes de distribuição elétricas robustas', 'Homologação completa junto à concessionária'],
    client: 'Prefeitura de São Paulo / Secretaria Municipal de Educação',
    service: 'Cabines Primárias e Projetos de Instalações',
    detailedDescription: 'Execução turnkey das redes de força de baixa e média tensão para o complexo escolar, cobrindo a montagem e fornecimento elétrico de cabine primária seccionadora, fiações subterrâneas blindadas contra infiltração e painéis de força dedicados ao teatro e ginásio.'
  },
  {
    id: 'proj-upas-sp',
    title: 'UPAs DE SÃO PAULO',
    location: 'São Paulo - SP',
    segment: 'Saúde',
    scope: 'Execução de instalações elétricas em Unidades de Pronto Atendimento do município de São Paulo.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782232694/banner_upa_logo_o5v2xl.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782232694/banner_upa_logo_o5v2xl.jpg'
    ],
    highlights: [
      'Execução completa das instalações elétricas',
      'Infraestrutura elétrica',
      'Distribuição elétrica',
      'Montagem de quadros elétricos',
      'Alimentação elétrica de equipamentos',
      'Adequações técnicas',
      'Instalações de baixa tensão'
    ],
    client: 'Prefeitura de São Paulo / Secretaria Municipal de Saúde',
    service: 'Instalações Elétricas Hospitalares',
    detailedDescription: 'A RE Engenharia Elétrica participou da execução completa das instalações elétricas em diversas Unidades de Pronto Atendimento do município de São Paulo, contribuindo para a infraestrutura elétrica de importantes equipamentos públicos de saúde.\n\nUnidades contempladas:\n• UPA Perus\n• UPA Pirituba\n• UPA Jaçanã\n• UPA Ermelino Matarazzo\n• UPA Tito Lopes\n• UPA Itaquera\n\nServiços executados:\n• Execução completa das instalações elétricas\n• Infraestrutura elétrica\n• Distribuição elétrica\n• Montagem de quadros elétricos\n• Alimentação elétrica de equipamentos\n• Adequações técnicas\n• Instalações de baixa tensão\n\nObservação:\nTodas as unidades acima receberam execução completa da parte elétrica pela RE Engenharia Elétrica.'
  },
  {
    id: 'proj-ci-osasco',
    title: 'CENTROS DE EDUCAÇÃO INFANTIL DE OSASCO – SP',
    location: 'Osasco - SP',
    segment: 'Educação',
    scope: 'Infraestrutura elétrica e modernização executadas para unidades educacionais da Prefeitura de Osasco.',
    highlights: [
      'Projetos e instalações elétricas',
      'Infraestrutura elétrica completa',
      'Redes de força',
      'Adequações e modernizações elétricas',
      'Alimentação de equipamentos',
      'Distribuição elétrica',
      'Iluminação interna e externa',
      'Instalações de baixa tensão'
    ],
    client: 'Prefeitura de Osasco',
    service: 'Projetos e Instalações Elétricas',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782234218/Captura_de_tela_de_2026-06-23_14-01-24_jbd3fo.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782234218/Captura_de_tela_de_2026-06-23_14-01-24_jbd3fo.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782234218/Captura_de_tela_de_2026-06-23_14-02-15_n8bwan.png'
    ],
    detailedDescription: 'A RE Engenharia Elétrica participou da execução de obras de infraestrutura elétrica em unidades de educação infantil do município de Osasco, realizando serviços de implantação, modernização e adequação dos sistemas elétricos para garantir segurança, confiabilidade operacional e suporte às atividades educacionais.\n\nUnidades contempladas:\n• CEI Infantil Palmares\n• CEI Infantil Veloso (Jardim Veloso)\n\nServiços executados:\n• Projetos e instalações elétricas\n• Infraestrutura elétrica completa\n• Redes de força\n• Adequações e modernizações elétricas\n• Alimentação de equipamentos\n• Distribuição elétrica\n• Iluminação interna e externa\n• Instalações de baixa tensão'
  },

  {
    id: 'proj-etec-garca',
    title: 'ETEC de Garça - Laboratórios Técnicos e Redes',
    location: 'Garça - Interior SP',
    segment: 'Educação',
    scope: 'Execução civil das redes de iluminação externa, fiação interna sob leitos suspensos, instalação de alimentações trifásicas para os laboratórios de eletrônica e informática.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782234787/Foto-ETEC-5_hqkrib.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782234787/Foto-ETEC-5_hqkrib.jpg'
    ],
    highlights: ['Laboratórios técnicos completos', 'Cabeação estruturada e fiação Geral', 'Instalação de malha SPDA preventiva'],
    client: 'Centro Paula Souza / ETEC',
    service: 'Execução de Obras Elétricas',
    detailedDescription: 'Cabeamento técnico integrado com eletrocalhas suspensas para alimentar computadores e equipamentos de teste nos laboratórios, instalando também malha de aterramento robusta SPDA e iluminação perimetral.'
  },
  {
    id: 'proj-cenforpe',
    title: 'Cenforpe SBC (Centro de Formação de Professores) - Reforma',
    location: 'São Bernardo do Campo - SP',
    segment: 'Corporativo',
    scope: 'Execução de reforma e adequação profunda no sistema elétrico do centro de convenções. Substituição da cabeação metálica antiga, montagem de infraestrutura para iluminação cênica de auditório e fiação secundária.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225881/Captura_de_tela_de_2026-06-23_11-39-56_meamwg.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225881/Captura_de_tela_de_2026-06-23_11-39-56_meamwg.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225882/Captura_de_tela_de_2026-06-23_11-40-05_zjb53w.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225882/Captura_de_tela_de_2026-06-23_11-41-25_ab5orp.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225883/Captura_de_tela_de_2026-06-23_11-41-51_owaund.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782225883/Captura_de_tela_de_2026-06-23_11-42-49_bfjefd.png'
    ],
    highlights: ['Reforma de infraestrutura e iluminação cênica', 'Adequações NR-10 e barramentos QGBT', 'Estudos de harmônicas e estabilizadores'],
    client: 'Prefeitura de São Bernardo do Campo',
    service: 'Adequações e Modernizações Elétricas',
    detailedDescription: 'Desmobilização sistemática civil completa de circuitos de distribuição velhos e inadequados de energia, com implantação de fiação sob leitos para iluminadores de palco e teatro, adequando o complexo à norma NR-10.'
  },
  {
    id: 'proj-estadio-sbc',
    title: 'Estádio 1º de Maio SBC - Reforma de Torres de Iluminação',
    location: 'São Bernardo do Campo - SP',
    segment: 'Infraestrutura',
    scope: 'Reforma ampla das instalações de força das torres de refletores de alta potência. Instalação e interligação de novas caixas acopladas estanques para os geradores flutuantes e fiação robusta de cobre blindada contra descargas em altura.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235827/Captura_de_tela_de_2026-06-23_14-29-34_p3jh3v.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235827/Captura_de_tela_de_2026-06-23_14-29-34_p3jh3v.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235825/Captura_de_tela_de_2026-06-23_14-29-13_feucnb.png',
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782235825/Captura_de_tela_de_2026-06-23_14-29-19_inh4jc.png'
    ],
    highlights: ['Reforma elétrica de refletores de potência', 'Quadros estanques grau IP66', 'Infraestrutura blindada em altura'],
    client: 'Prefeitura de São Bernardo do Campo',
    service: 'Recondicionamento e Obras de Média Tensão',
    detailedDescription: 'Modernização estrutural das redes de força aéreas das quatro grandes torres de refletores metálicos de potência do estádio, montando quadros de emenda com estanqueidade extrema IP66 e fiação blindada de cobre.'
  },
  {
    id: 'proj-escola-ramaciote',
    title: 'Escola Rolando Ramaciote Rudge Ramos - Reforma Elétrica',
    location: 'São Bernardo do Campo - SP',
    segment: 'Educação',
    scope: 'Serviço de reforma estrutural, adequações de fiação interna sob calhas, redimensionamento térmico de disjuntores da entrada primária e recomposição de aterramento geral (SPDA).',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782240945/Captura_de_tela_de_2026-06-23_15-53-58_s6ynmd.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782240945/Captura_de_tela_de_2026-06-23_15-53-58_s6ynmd.png'
    ],
    highlights: ['Reforma e eliminação de perdas térmicas', 'Novos quadros QG de barramentos cobre', 'Homologação CREA-SP ativa'],
    client: 'Prefeitura de São Bernardo do Campo / Escola Municipal',
    service: 'Adequações e Modernizações Elétricas',
    detailedDescription: 'Reforma cirúrgica de perdas elétricas severas por fadiga térmica de condutores em eletrocalhas antigas, montagem de novos quadros gerais de embutir e distribuição com barramentos isolados, homologado.'
  },
  {
    id: 'proj-posto-pesqueira',
    title: 'Posto de Combustível Bandeira FAN - Pesqueira',
    location: 'Pesqueira - PE (BR 232 / Km 226)',
    segment: 'Infraestrutura',
    scope: 'Toda instalação elétrica executada sob as mais restritas especificações para atmosferas explosivas. Montagem de eletrodutos de aço galvanizado rosqueados, vedações corta-chamas, aterramento equipotencial das ilhas de gasolina e interligação geral de iluminação de pista elevada.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782236102/Captura_de_tela_de_2026-06-23_14-33-36_c3okex.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782236102/Captura_de_tela_de_2026-06-23_14-33-36_c3okex.png'
    ],
    highlights: ['Executada toda a instalação elétrica', 'Sistemas elétricos à prova de explosão (EX)', 'Google Maps e localização ativa PE'],
    client: 'Posto de Combustível Bandeira FAN - Pesqueira / Rede FAN',
    service: 'Instalações Elétricas em Áreas Classificadas (Explosivas - Ex)',
    detailedDescription: 'Execução de infraestrutura elétrica dedicada 100% à prova de explosão, usando rígidas tubulações roscadas sem costura de aço carbono galvanizado à fogo, unidades seladoras corta-chamas com composto isolante, tomadas industriais blindadas e aterramento redundante das ilhas das bombas e tanques subterrâneos contra centelha termodinâmica.',
    mapsUrl: 'https://maps.app.goo.gl/YJaqJfzG1N1kdj8i9'
  },
  {
    id: 'proj-posto-zabele',
    title: 'Posto de Combustível Bandeira FAN - Zabelê',
    location: 'Zabelê - PB',
    segment: 'Infraestrutura',
    scope: 'Toda a infraestrutura e instalações elétricas das pistas, bombas, iluminação LED de alta eficiência da cobertura e sistemas de geradores. Montagem planejada contra riscos de faísca térmica.',
    imageUrl: 'https://res.cloudinary.com/dplhygs4v/image/upload/v1782236202/Captura_de_tela_de_2026-06-23_14-36-01_mz7ojo.png',
    galleryImages: [
      'https://res.cloudinary.com/dplhygs4v/image/upload/v1782236202/Captura_de_tela_de_2026-06-23_14-36-01_mz7ojo.png'
    ],
    highlights: ['Executada toda a instalação de bombas', 'Aterramento equipotencial de tanques', 'Google Maps e localização ativa PB'],
    client: 'Posto de Combustível Bandeira FAN - Zabelê / Rede FAN',
    service: 'Instalações em Atmosferas Explosivas (Ex)',
    detailedDescription: 'Roteamento físico e cabeamento de força e sinal técnico sob atmosfera explosiva de combustíveis, unindo de forma isolada quadros de comando a motores e bombas com unidades seladoras instaladas.',
    mapsUrl: 'https://maps.app.goo.gl/14BC3AWqSrtSDGYn7'
  }
];

export const AREAS_SEGMENTS_DATA: AreaSegment[] = [
  {
    id: 'industrial',
    title: 'Segmento Industrial',
    description: 'Instalações robustas e dimensionamento elétrico de potência sob estrito controle operacional de comandos de motores e painéis de fusão térmica.',
    iconName: 'Factory',
    challenges: 'Flutuações de tensão perigosas, alto nível de ruído eletromagnético nocivo aos comandos lógicos PLC, distorções harmônicas originadas de chaves ou inversores de frequência eletrônicos de potência.',
    appliedServices: ['Adequações e Retrofit de Painéis CCM', 'Medição e Análise de Harmônicas e Fator de Potência', 'Redes de Média Tensão e Cabines Primárias'],
    relatedProjects: ['Posto de Combustível Bandeira FAN - Pesqueira', 'Posto de Combustível Bandeira FAN - Zabelê']
  },
  {
    id: 'hospitalar',
    title: 'Segmento Hospitalar e Unidades de Saúde',
    description: 'Instalações críticas onde a estabilidade elétrica do sistema de suporte à vida define a segurança do paciente e o bom trâmite corporativo de dados terapêuticos.',
    iconName: 'HeartPulse',
    challenges: 'Necessidade absoluta de energia com distorção harmônica zero e interrupção nula, blindagem estrita contra estática atmosférica, esquemas de aterramento IT-Médico.',
    appliedServices: ['Projetos Elétricos de Altíssima Disponibilidade e Estabilidade', 'Execução de Obras de Entrada de Energia Redundante', 'Modernização de Sistemas Críticos (Retrofit)'],
    relatedProjects: ['UPAs DE SÃO PAULO', 'Hospital Universitário Clementino Fraga Filho (Hospital do Fundão/HUCFF) da UFRJ', 'Unimed em Leme – SP', 'Hospital Santa Helena - São Bernardo do Campo - SP']
  },
  {
    id: 'educacao',
    title: 'Instituições de Ensino',
    description: 'Instalações voltadas para o conforto e a segurança no aprendizado em universidades, escolas estaduais e laboratórios especializados de tecnologia.',
    iconName: 'GraduationCap',
    challenges: 'Alta densidade de pessoas exigindo excelente eficiência de combate a incêndio por fiação atóxica livre de halogênio, eficiência energética sustentável.',
    appliedServices: ['Projetos Luminotécnicos Eficientes Dialux', 'Sistemas de Proteção Patrimonial (SPDA)', 'Montagem de Laboratórios e Quadros de Cargas'],
    relatedProjects: ['SESI SÃO PAULO', 'Escola Municipal de Guarujá – SP', 'CEU Parque do Carmo - Infraestrutura Elétrica Geral']
  },
  {
    id: 'bancario',
    title: 'Setor Bancário e Financeiro',
    description: 'Espaços focados na conectividade segura e em sistemas de dados de transações ininterruptos.',
    iconName: 'Bank',
    challenges: 'Garantia de No-breaks trifásicos e sistemas de geradores atuando sob lógica restrita para prevenção de desligamento de servidores de processamento.',
    appliedServices: ['Consultoria de Viabilidade Energética', 'Montagem de Painéis Auxiliares Conectores Multipolo', 'Manutenção Termográfica de Quadros Gerais'],
    relatedProjects: ['Shopping D&D - Reforma Geral de Infraestrutura']
  },
  {
    id: 'corporativo',
    title: 'Empresas Corporativas e Lajes Negociais',
    description: 'Modernização e otimização de edifícios corporativos de escritórios que valorizam a estabilidade térmica das cargas de ar-condicionado e informática.',
    iconName: 'Building',
    challenges: 'Encaminhamento estético e organizado de centenas de cabos de lógica sob pisos elevados de escritório e teto estruturado.',
    appliedServices: ['Projetos Elétricos Industriais e Comerciais', 'Sistemas de Proteção Contra Surtos Rápidos e SPDA', 'Retrofit e Ampliações de Carga'],
    relatedProjects: ['Cenforpe SBC (Centro de Formação de Professores) - Reforma', 'Shopping D&D - Reforma Geral de Infraestrutura', 'Construtora Metrocasa - Reforma de Escritório no Edifício Itália']
  },
  {
    id: 'obras-publicas',
    title: 'Obras Públicas e Estatais',
    description: 'Execução de licitações federais, estaduais e municipais onde o rigor da documentação, licenças e conformação contratual é fator decisivo.',
    iconName: 'FileText',
    challenges: 'Preços estritos balizados por tabelas públicas de referência (Sinapi, FDE), cumprimento imutável de cronograma e transparência de engenharia.',
    appliedServices: ['Execução Completa de Instalações Técnicas', 'Laudos Técnicos e comissionamento com emissão de ART', 'Sistemas Robustos de SPDA homologados pelo Estado'],
    relatedProjects: ['UPAs DE SÃO PAULO', 'Escola Municipal de Guarujá – SP', 'SESI SÃO PAULO']
  },
  {
    id: 'infraestrutura',
    title: 'Infraestrutura Urbana e Saneamento',
    description: 'Encaminhamento externo de cabos e alimentadores em pátios, iluminação externa robusta e conexões elétricas de bombas hidráulicas de saneamento.',
    iconName: 'Network',
    challenges: 'Ambiente externo exposto a intempéries extremas exigindo quadros de aço inox com vedação IP65 elevada, proteção mecânica de cabos blindados.',
    appliedServices: ['Redes de Média Tensão e Cabines Primárias de Alvenaria', 'Medições de Aterramento e Resistividade do Solo', 'Laudos de SPDA Corretivos do Solo'],
    relatedProjects: ['Posto de Combustível Bandeira FAN - Pesqueira', 'Posto de Combustível Bandeira FAN - Zabelê', 'Estádio 1º de Maio SBC - Reforma de Torres de Iluminação']
  }
];
