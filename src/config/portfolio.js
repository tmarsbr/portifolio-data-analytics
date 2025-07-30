/**
 * ========================================
 * CONFIGURAÇÃO DO PORTFÓLIO DATA & ANALYTICS
 * ========================================
 * 
 * Arquivo central de configuração do portfólio.
 * Edite este arquivo para personalizar todas as informações
 * exibidas no site, incluindo dados pessoais, projetos,
 * experiências e certificações.
 * 
 * @author Tiago Silva
 * @version 2.0
 * @lastUpdate 2025-01-30
 */

// ========================================
// INFORMAÇÕES PESSOAIS
// ========================================

/**
 * Dados pessoais e de contato
 * Utilizados em toda a aplicação para exibição de informações
 * 
 * @type {Object}
 * @property {string} name - Nome para exibição
 * @property {string} fullName - Nome completo
 * @property {string} title - Cargo/Posição atual
 * @property {string} subtitle - Descrição resumida
 * @property {string} location - Localização atual
 * @property {string} email - Email de contato
 * @property {string} phone - Telefone de contato
 * @property {string} linkedin - URL do LinkedIn
 * @property {string} github - URL do GitHub
 * @property {string} whatsapp - URL do WhatsApp
 * @property {string} homeIntro - Introdução para página inicial
 * @property {string} aboutDescription - Descrição detalhada para seção About
 * @property {string} avatar - Caminho para foto de perfil
 */
export const personalInfo = {
  name: "Tiago Silva",
  fullName: "Tiago Da Silva E Santo",
  title: "Full Stack em Data & Analytics",
  subtitle: "Transformando dados em insights estratégicos para negócios",
  location: "São Paulo, SP",
  email: "tiagomars233@gmail.com",
  phone: "+55 11 97542-9994",
  linkedin: "https://www.linkedin.com/in/tiagodados",
  github: "https://github.com/tmarsbr",
  whatsapp: "https://wa.me/5511975429994",
  
  // Resumo para a página inicial (1-2 frases)
  homeIntro: "Full Stack em Data & Analytics com paixão por transformar dados em insights estratégicos, aplicando técnicas de análise e machine learning para resolver problemas de negócio.",
  
  // Descrição expandida para a seção Sobre
  aboutDescription: `Minha jornada profissional começou na mecânica de usinagem, onde desenvolvi uma sólida base em pensamento analítico e resolução de problemas complexos. A transição para o universo de dados foi natural, combinando minha paixão por números com o potencial transformador da tecnologia.

Atualmente, estou focado em uma formação completa em Data & Analytics, abrangendo desde engenharia de dados até ciência de dados, computação em nuvem e inteligência de negócios. Esta trilha me proporciona uma visão 360° do ecossistema de dados, permitindo atuar desde a coleta e processamento até a geração de insights estratégicos.

Meu objetivo é utilizar dados para gerar valor real aos negócios, transformando informações em decisões inteligentes que impulsionem o crescimento e a inovação das organizações.`,


  // Avatar/Foto (deixe vazio para usar placeholder)
  avatar: "", // Adicione o caminho da sua foto aqui
};

// Habilidades organizadas por categoria
export const skills = {
  "Linguagens & Bancos de Dados": [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "SQL", level: 85, icon: "🗃️" },
    { name: "Web Scraping", level: 80, icon: "🕷️" },
    { name: "SQLite", level: 85, icon: "💾" },
    { name: "PostgreSQL", level: 80, icon: "🐘" },
    { name: "MySQL", level: 80, icon: "🗄️" },
    { name: "Oracle", level: 70, icon: "📊" },
    { name: "MongoDB", level: 75, icon: "🍃" },
  ],
  "Machine Learning & Estatística": [
    { name: "Scikit-learn", level: 85, icon: "🤖" },
    { name: "Pandas", level: 90, icon: "🐼" },
    { name: "NumPy", level: 85, icon: "🔢" },
    { name: "SciPy", level: 80, icon: "📈" },
    { name: "Regressão", level: 85, icon: "📉" },
    { name: "Classificação", level: 85, icon: "🎯" },
    { name: "Clusterização", level: 80, icon: "📊" },
    { name: "Estatística Descritiva", level: 90, icon: "📋" },
  ],
  "Visualização & BI": [
    { name: "Matplotlib", level: 85, icon: "📊" },
    { name: "Seaborn", level: 85, icon: "🎨" },
    { name: "Plotly", level: 80, icon: "📈" },
    { name: "Power BI", level: 75, icon: "⚡" },
  ],
  "Desenvolvimento & Cloud": [
    { name: "Git/GitHub", level: 85, icon: "🔄" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "Streamlit", level: 80, icon: "🚀" },
    { name: "APIs Python", level: 75, icon: "🔌" },
    { name: "AWS", level: 70, icon: "☁️" },
  ],
};

// ========================================
// EXPERIÊNCIAS PROFISSIONAIS
// ========================================

/**
 * Histórico de experiências profissionais e educacionais
 * Organizadas cronologicamente para mostrar evolução de carreira
 * 
 * @type {Array<Object>}
 */
export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Especialista em Usinagem de Precisão | Empreendedor",
    company: "Negócio Próprio",
    period: "2021 - Presente",
    description: "Transformei conhecimento técnico em negócio sustentável, especializando-me na fabricação de cadinhos de grafite sob medida. Conquista de 100% retenção de clientes através de qualidade excepcional e prazos rigorosos, aplicando conceitos de gestão de projetos e relacionamento cliente.",
    skills: ["Gestão Empresarial", "Usinagem de Precisão", "Relacionamento B2B", "Gestão de Projetos"],
    icon: "🏆"
  },
  {
    id: 2,
    type: "work", 
    title: "Torneiro CNC | Especialista em Qualidade",
    company: "Cilintech",
    period: "2019 - 2021",
    description: "Responsável pela produção de componentes críticos com tolerâncias de ±0.05mm, desenvolvendo expertise em controle de qualidade zero-defeito. Implementei melhorias de processo que reduziram retrabalho em 40%, demonstrando mentalidade analítica aplicada à produção industrial.",
    skills: ["Controle Estatístico", "Torno CNC", "Zero Defeitos", "Melhoria Contínua"],
    icon: "🎯"
  },
  {
    id: 3,
    type: "work",
    title: "Torneiro Mecânico | Desenvolvedor de Habilidades Técnicas",
    company: "Metal Flex",
    period: "2016 - 2019",
    description: "Início da carreira desenvolvendo fundamentos sólidos em manufatura de precisão. Período de intensa aprendizagem onde construí base técnica em metrologia, leitura técnica e resolução de problemas complexos - habilidades que hoje aplico na análise e tratamento de dados.",
    skills: ["Fundamentos Técnicos", "Resolução de Problemas", "Atenção aos Detalhes", "Aprendizado Rápido"],
    icon: "🚀"
  },
  {
    id: 4,
    type: "education",
    title: "Transição Estratégica para Data & Analytics",
    company: "PoD Academy + Projetos Práticos",
    period: "2022 - Presente",
    description: "Investimento de 800+ horas em formação completa Data & Analytics, combinando teoria sólida com 12+ projetos práticos. Aplicação imediata de conceitos em problemas reais, desde análise exploratória até pipelines ETL, demonstrando capacidade de transformar conhecimento em soluções práticas.",
    skills: ["Python", "Machine Learning", "Engenharia de Dados", "Pensamento Analítico"],
    icon: "📊"
  }
];

// Projetos em Data & Analytics
export const projects = [
  {
    id: 1,
    title: "Decodificando o Sucesso Musical no Spotify",
    description: "Como identifiquei os 8 fatores-chave que determinam se uma música se torna um hit mundial, analisando 50+ mil faixas e descobrindo padrões ocultos no comportamento do consumidor musical.",
    longDescription: "DESAFIO: A indústria musical investe bilhões sem garantia de sucesso. SOLUÇÃO: Desenvolvi um modelo analítico para identificar características que predizem popularidade musical. RESULTADO: Descobri que 'danceability' e 'energy' têm 73% de correlação com streams, e músicas em modo maior têm 2.3x mais chances de sucesso. IMPACTO: Framework replicável para A&Rs e produtores musicais otimizarem investimentos.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "Análise Estatística"],
    category: "Análise Preditiva",
    image: "", 
    github: "https://github.com/tmarsbr/data-analyst-project",
    demo: "",
    metrics: "50k+ músicas analisadas • 8 fatores de sucesso identificados • 73% precisão preditiva",
    featured: true,
    date: "2024"
  },
  {
    id: 2,
    title: "Salvando Vidas nas Estradas Brasileiras",
    description: "Investigação que revelou como a localização estratégica de radares pode reduzir acidentes fatais em 35%, mapeando 100+ mil ocorrências em todo território nacional.",
    longDescription: "PROBLEMA: Brasil tem uma das maiores taxas de mortalidade no trânsito do mundo. ABORDAGEM: Análise geoespacial correlacionando localização de radares com índices de acidentes da PRF. DESCOBERTA: Radares em pontos estratégicos reduzem acidentes fatais em 35% num raio de 5km. APLICAÇÃO: Modelo reproduzível para otimizar investimentos em segurança viária e salvar vidas.",
    technologies: ["Python", "Geopandas", "Plotly", "Folium", "Análise Geoespacial", "Pandas"],
    category: "Análise Geoespacial",
    image: "",
    github: "https://github.com/tmarsbr/analise-PRF-",
    demo: "",
    metrics: "100k+ acidentes mapeados • 27 estados brasileiros • 35% redução em acidentes fatais",
    featured: true,
    date: "2024"
  },
  {
    id: 3,
    title: "Fusão Empresarial Sem Perda de Dados",
    description: "Pipeline ETL que garantiu 99.9% de precisão na integração de dados médicos durante fusão de clínicas, preservando histórico crítico de 10+ mil pacientes.",
    longDescription: "CENÁRIO: Duas clínicas médicas precisavam unificar sistemas durante fusão, sem perder dados críticos de pacientes. DESAFIO: Formatos incompatíveis, dados duplicados e requisitos de conformidade LGPD. SOLUÇÃO: Pipeline ETL orientado a objetos com validação automatizada e tratamento de inconsistências. RESULTADO: 10k+ registros migrados com 99.9% de precisão, zero perda de dados críticos.",
    technologies: ["Python", "OOP", "ETL", "Data Quality", "Pandas", "Validação de Dados"],
    category: "Engenharia de Dados",
    image: "",
    github: "https://github.com/tmarsbr/projeto_pipeline",
    demo: "",
    metrics: "10k+ registros migrados • 99.9% precisão • Zero perda de dados críticos",
    featured: true,
    date: "2024"
  },
  {
    id: 4,
    title: "Extração e Análise - Repositórios GitHub",
    description: "Extração automatizada de dados de repositórios de grandes empresas tech via API GitHub, com análise das linguagens mais utilizadas.",
    longDescription: "Sistema automatizado para coleta e análise de dados de repositórios GitHub de grandes empresas de tecnologia. Utilizou API do GitHub para extrair informações sobre linguagens, atividade e tendências de desenvolvimento, gerando insights sobre o ecossistema tech.",
    technologies: ["Python", "GitHub API", "Pandas", "Requests", "JSON"],
    category: "API & Web Scraping",
    image: "",
    github: "https://github.com/tmarsbr/Projeto_api",
    demo: "",
    metrics: "Análise de +1000 repositórios, 15 empresas tech",
    featured: false,
    date: "2024"
  },
  {
    id: 5,
    title: "Pipeline Python - MongoDB - MySQL",
    description: "Pipeline robusto para integração e análise de dados em e-commerce, conectando Python, MongoDB e MySQL.",
    longDescription: "Desenvolvimento de pipeline completo para processamento de dados de e-commerce, integrando diferentes bases de dados. Solução automatizada para ETL entre MongoDB (dados não-estruturados) e MySQL (dados estruturados), com foco em performance e confiabilidade.",
    technologies: ["Python", "MongoDB", "MySQL", "ETL", "PyMongo"],
    category: "Engenharia de Dados",
    image: "",
    github: "https://github.com/tmarsbr/pipeline-python-mongo-mysql",
    demo: "",
    metrics: "Redução de 70% no tempo de análise da equipe de BI",
    featured: true,
    date: "2024"
  }
];

// Certificados (quando disponíveis)
export const certificates = [
  {
    id: 1,
    title: "Nivelamento em Matemática, Estatística e Programação para Big Data & Analytics",
    institution: "PoD Academy",
    year: "2024",
    image: "/certificates/1.png",
    pdf: "/certificates/certificado-2026662A6157507713239070.pdf",
    skills: ["Matemática", "Estatística", "Programação", "Big Data"]
  },
  {
    id: 2,
    title: "Ciências Aplicadas: Matemática e Estatística",
    institution: "PoD Academy",
    year: "2025",
    image: "/certificates/4.png",
    pdf: "/certificates/certificado-2427912AD2AF41E914203880.pdf",
    skills: ["Matemática Aplicada", "Estatística Aplicada", "Dados"]
  },
  {
    id: 3,
    title: "Formação em Análise de Dados",
    institution: "PoD Academy",
    year: "2024",
    image: "/certificates/3.png",
    pdf: "/certificates/certificado-2184196A1D520FC214203880.pdf",
    skills: ["Análise de Dados", "CRISP-DM", "Estatística", "Visualização"]
  },
  {
    id: 4,
    title: "Cloud Computing",
    institution: "PoD Academy",
    year: "2024",
    image: "/certificates/2.png",
    pdf: "/certificates/certificado-2181848AF6E35A5F13239070.pdf",
    skills: ["Cloud Computing", "AWS", "Azure", "GCP"]
  }
];

// Configurações de tema e estilo
export const themeConfig = {
  primaryColor: "#1976d2", // Azul profissional
  secondaryColor: "#dc004e", // Rosa vibrante para destaque
  accentColor: "#00acc1", // Ciano para elementos especiais
  backgroundColor: "#fafafa",
  textColor: "#333333",
  lightGray: "#f5f5f5",
  darkGray: "#757575",
  
  // Tipografia
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontSize: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xlarge: "2rem",
    xxlarge: "3rem"
  }
};

// Configurações de SEO
export const seoConfig = {
  title: "Tiago Silva - Full Stack em Data & Analytics",
  description: "Portfólio de Tiago Silva, Full Stack em Data & Analytics. Projetos em Python, Machine Learning, análise de dados e visualização. Transformando dados em insights estratégicos.",
  keywords: "data analytics, data science, python, machine learning, análise de dados, sql, portfolio, tiago silva",
  author: "Tiago Silva",
  url: "https://tiagosilvadata.com", // Substitua pela URL real
  image: "/og-image.jpg", // Adicione uma imagem de preview
  
  // Open Graph
  ogTitle: "Tiago Silva - Data & Analytics Portfolio",
  ogDescription: "Full Stack em Data & Analytics com projetos em Python, Machine Learning e visualização de dados. Veja meus projetos e entre em contato!",
  twitterCard: "summary_large_image",
  twitterCreator: "@tiagodados" // Se tiver Twitter
};

// Configurações do Google Analytics (opcional)
export const analyticsConfig = {
  trackingId: process.env.REACT_APP_TRACKING_ID || "",
  enabled: process.env.NODE_ENV === "production"
};

export default {
  personalInfo,
  skills,
  experiences,
  projects,
  certificates,
  themeConfig,
  seoConfig,
  analyticsConfig
};
