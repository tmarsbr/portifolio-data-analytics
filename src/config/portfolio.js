// ========================================
// CONFIGURAÇÃO DO PORTFÓLIO DATA & ANALYTICS
// ========================================
// Edite este arquivo para personalizar seu portfólio

// Informações Pessoais
export const personalInfo = {
  name: "Tiago Silva",
  fullName: "Tiago Da Silva E Santo",
  title: "Especialista em Data & Analytics",
  subtitle: "Transformando dados em insights estratégicos para negócios",
  location: "São Paulo, SP",
  email: "tiagomars233@gmail.com",
  phone: "+55 11 97542-9994",
  linkedin: "https://www.linkedin.com/in/tiagodados",
  github: "https://github.com/tmarsbr",
  whatsapp: "https://wa.me/5511975429994",
  
  // Resumo para a página inicial (1-2 frases)
  homeIntro: "Especialista em Data & Analytics com experiência em resolver problemas de negócio através de dados, aplicando técnicas avançadas de análise e machine learning para gerar insights estratégicos.",
  
  // Descrição expandida para a seção Sobre
  aboutDescription: `Meu nome é Tiago Silva, profissional com background sólido na área de usinagem, onde atuei por anos operando tornos mecânicos para fabricar peças metálicas com precisão. Esta experiência me trouxe habilidades fundamentais em resolução de problemas, atenção aos detalhes e pensamento analítico.

Atualmente, trabalho de forma autônoma especializado na usinagem de cadinhos de grafite para fundição, o que me permite ter flexibilidade para dedicar tempo à minha transição para a área de Data & Analytics.

Nos últimos anos, venho me especializando em Data & Analytics, aplicando minha experiência prática e visão analítica para desenvolver soluções baseadas em dados. Combino a precisão técnica adquirida na usinagem com conhecimentos avançados em programação, estatística e machine learning para entregar insights valiosos aos negócios.`,

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

// Experiências Profissionais
export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Torneiro Mecânico Autônomo",
    company: "Trabalho Autônomo",
    period: "2021 - Presente",
    description: "Especialista em usinagem de cadinhos de grafite para fundição, atendendo demandas personalizadas de clientes. Responsável por todo o processo, desde o planejamento até a entrega final.",
    skills: ["Usinagem de Precisão", "Gestão de Projetos", "Atendimento ao Cliente"],
    icon: "⚙️"
  },
  {
    id: 2,
    type: "work",
    title: "Torneiro Mecânico",
    company: "Cilintech",
    period: "2019 - 2021",
    description: "Usinagem de peças metálicas de precisão utilizando tornos CNC e convencionais. Foco em qualidade e atendimento a especificações técnicas rigorosas.",
    skills: ["Torno CNC", "Leitura de Desenho Técnico", "Controle de Qualidade"],
    icon: "🔧"
  },
  {
    id: 3,
    type: "work",
    title: "Torneiro Mecânico",
    company: "Metal Flex",
    period: "2016 - 2019",
    description: "Operação de tornos mecânicos para fabricação de componentes industriais. Desenvolvimento de habilidades em resolução de problemas e atenção aos detalhes.",
    skills: ["Torno Mecânico", "Metrologia", "Produção Industrial"],
    icon: "⚡"
  },
  {
    id: 4,
    type: "education",
    title: "Transição para Data & Analytics",
    company: "Autodidata + Cursos Online",
    period: "2022 - Presente",
    description: "Estudos intensivos em Data & Analytics através de cursos online, projetos práticos e desenvolvimento de soluções baseadas em dados.",
    skills: ["Python", "Machine Learning", "Análise de Dados", "Visualização"],
    icon: "📊"
  }
];

// Projetos em Data & Analytics
export const projects = [
  {
    id: 1,
    title: "Análise Exploratória - Spotify Most Streamed Songs",
    description: "Análise detalhada das músicas mais tocadas no Spotify, identificando padrões e fatores que contribuem para o sucesso musical. Investigação de correlações entre características musicais e popularidade.",
    longDescription: "Projeto completo de análise exploratória utilizando dataset do Spotify com as músicas mais tocadas. Análise incluiu investigação de padrões temporais, características musicais (danceability, energy, valence) e correlações com popularidade. Resultados revelaram insights valiosos sobre tendências musicais e fatores de sucesso.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    category: "Análise Exploratória",
    image: "", // Placeholder será usado
    github: "https://github.com/tmarsbr/data-analyst-project",
    demo: "",
    metrics: "Análise de +50k músicas, identificação de 8 fatores-chave de sucesso",
    featured: true,
    date: "2024"
  },
  {
    id: 2,
    title: "Análise dos Acidentes nas Rodovias Brasileiras",
    description: "Investigação abrangente dos acidentes nas estradas brasileiras e análise da relação com a localização de radares de velocidade.",
    longDescription: "Análise geoespacial dos dados da Polícia Rodoviária Federal (PRF) investigando padrões de acidentes nas rodovias brasileiras. Estudo incluiu análise temporal, geográfica e correlação com equipamentos de fiscalização. Visualizações interativas revelaram insights sobre segurança rodoviária.",
    technologies: ["Python", "Pandas", "Geopandas", "Plotly", "Folium"],
    category: "Análise Geoespacial",
    image: "",
    github: "https://github.com/tmarsbr/analise-PRF-",
    demo: "",
    metrics: "Análise de +100k acidentes, mapeamento de 27 estados",
    featured: true,
    date: "2024"
  },
  {
    id: 3,
    title: "Pipeline de Integração - Clínicas Sanare e Reviver",
    description: "Projeto de integração e uniformização de dados de duas clínicas durante processo de fusão empresarial.",
    longDescription: "Desenvolvimento de pipeline ETL robusto para integração de dados de duas clínicas médicas durante processo de fusão. Solução utilizou programação orientada a objetos para criar sistema modular e escalável, garantindo qualidade e consistência dos dados migrados.",
    technologies: ["Python", "OOP", "ETL", "Data Quality", "Pandas"],
    category: "Engenharia de Dados",
    image: "",
    github: "https://github.com/tmarsbr/projeto_pipeline",
    demo: "",
    metrics: "Integração de +10k registros, 99.9% de precisão na migração",
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
    title: "Python para Data Science",
    institution: "Comunidade DS",
    year: "2024",
    image: "", // Adicione o caminho do certificado
    pdf: "", // Adicione o caminho do PDF
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: 2,
    title: "SQL para Análise de Dados",
    institution: "Curso Online",
    year: "2024",
    image: "",
    pdf: "",
    skills: ["SQL", "PostgreSQL", "MySQL", "Data Analysis"]
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    institution: "Autodidata",
    year: "2024",
    image: "",
    pdf: "",
    skills: ["Scikit-learn", "ML Algorithms", "Feature Engineering"]
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
  title: "Tiago Silva - Especialista em Data & Analytics",
  description: "Portfólio de Tiago Silva, especialista em Data & Analytics. Projetos em Python, Machine Learning, análise de dados e visualização. Transformando dados em insights estratégicos.",
  keywords: "data analytics, data science, python, machine learning, análise de dados, sql, portfolio, tiago silva",
  author: "Tiago Silva",
  url: "https://tiagosilvadata.com", // Substitua pela URL real
  image: "/og-image.jpg", // Adicione uma imagem de preview
  
  // Open Graph
  ogTitle: "Tiago Silva - Data & Analytics Portfolio",
  ogDescription: "Especialista em Data & Analytics com projetos em Python, Machine Learning e visualização de dados. Veja meus projetos e entre em contato!",
  
  // Twitter Card
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
