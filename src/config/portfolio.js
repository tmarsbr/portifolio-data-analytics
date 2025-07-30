// ========================================
// CONFIGURAÇÃO DO PORTFÓLIO DATA & ANALYTICS
// ========================================
// Edite este arquivo para personalizar seu portfólio

// Informações Pessoais
export const personalInfo = {
  name: "Tiago da Silva e Santo",
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
  aboutDescription: `Minha jornada profissional começou na Torneiro Mecânico, onde desenvolvi uma sólida base em pensamento analítico e resolução de problemas complexos. A transição para o universo de dados foi natural, combinando minha paixão por números com o potencial transformador da tecnologia.

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
    description: "🎵 Decifrando o DNA do sucesso musical: análise profunda de +50k músicas para descobrir os padrões ocultos que fazem uma música se tornar viral no Spotify.",
    longDescription: "Mergulhei no universo musical para responder uma pergunta intrigante: o que torna uma música irresistível? Usando dataset do Spotify com as faixas mais tocadas globalmente, conduzi uma análise exploratória completa que revelou insights surpreendentes. Descobri que características como 'danceability' e 'energy' têm correlações específicas com o sucesso, mas também identifiquei padrões temporais que mostram como o gosto musical evolui. O projeto culminou na criação de um 'mapa do sucesso musical' com 8 fatores-chave que podem prever a popularidade de uma música.",
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
    description: "🛣️ Transformando tragédias em prevenção: análise geoespacial de +100k acidentes nas rodovias brasileiras para criar um mapa inteligente de segurança viária.",
    longDescription: "Este projeto nasceu de uma missão pessoal: usar dados para salvar vidas nas estradas. Analisando registros da Polícia Rodoviária Federal, criei visualizações interativas que revelam os pontos críticos de acidentes em todo território nacional. O mais impactante foi descobrir padrões inesperados entre localização de radares e redução de acidentes, gerando insights que podem influenciar políticas públicas de segurança. Mapiei 27 estados e identifiquei os horários, condições climáticas e trechos mais perigosos, criando um verdadeiro 'GPS da segurança' para as rodovias brasileiras.",
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
    description: "🏥 Unindo duas clínicas em uma só: desafio real de fusão empresarial onde criei um pipeline ETL robusto para integrar sistemas de dados completamente diferentes sem perder uma única informação.",
    longDescription: "Enfrentei um desafio real do mundo corporativo: duas clínicas médicas se fundiram e precisavam unificar seus dados de pacientes, históricos e procedimentos. O problema? Sistemas completamente diferentes, formatos incompatíveis e zero margem para erros - afinal, eram dados de saúde humana. Desenvolvi uma solução elegante usando programação orientada a objetos, criando um pipeline ETL modular que não apenas integrou os dados, mas também implementou validações rigorosas de qualidade. O resultado? Uma migração 100% bem-sucedida que permitiu à nova empresa operar desde o primeiro dia.",
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
  url: "https://tmarsbr.github.io/portifolio-data-analytics", // URL do GitHub Pages
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
