// ========================================
// CONFIGURAÇÃO DO PORTFÓLIO DATA & ANALYTICS
// ========================================
// Edite este arquivo para personalizar seu portfólio

/**
 * Informações Pessoais do Profissional
 * @description Dados básicos e contatos do portfólio
 */
export const personalInfo = {
  name: "Tiago da Silva e Santo",
  fullName: "Tiago Da Silva E Santo",
  title: "Full Stack em Dados e Analytics — da coleta ao insight estratégico.",
  subtitle: "Transformando dados em insights estratégicos para negócios",
  location: "São Paulo, SP",
  email: "tiagomars233@gmail.com",
  phone: "+55 11 97542-9994",
  linkedin: "https://www.linkedin.com/in/tiagodados",
  github: "https://github.com/tmarsbr",
  whatsapp: "https://wa.me/5511975429994",
  
  // Resumo para a página inicial (1-2 frases)
  homeIntro: "Atuo com a stack completa de dados — da engenharia de pipelines à análise estatística e modelos preditivos. Tenho paixão por transformar dados em decisões que geram impacto real nos negócios, sempre com foco em clareza, performance e valor.",
  
  // Descrição expandida para a seção Sobre
  aboutDescription: `Da Oficina para os Dados
Tudo começou com barulho de torno, cheiro de óleo e precisão milimétrica. Na usinagem, aprendi que um erro de um décimo pode custar caro. Foi lá que desenvolvi o olhar clínico, a paciência e o gosto por resolver problemas com método.

Hoje, essa precisão virou código. Projeto pipelines, organizo dados brutos, crio dashboards, desenvolvo modelos preditivos e conto histórias com dados reais. Da engenharia à análise, passando pela ciência de dados, aplico o mesmo rigor técnico que aprendi na mecânica para transformar números em decisões inteligentes.

Porque no fim, seja no aço ou no algoritmo, o detalhe certo no lugar certo muda tudo.`,


  // Avatar/Foto (deixe vazio para usar placeholder)
  avatar: "", // Adicione o caminho da sua foto aqui
};

/**
 * Habilidades Técnicas Organizadas por Categoria
 * @description Stack tecnológico com níveis de proficiência (0-100)
 * @structure { categoria: [{ name, level, icon }] }
 */
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

/**
 * Experiências Profissionais e Educacionais
 * @description Timeline da carreira profissional e formação acadêmica
 * @structure Array de objetos com: id, type, title, company, period, description, skills, icon
 */
export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Auxiliar de Produção",
    company: "LJ Correia Equipamentos LTDA",
    period: "01/02/2018 - 07/05/2021",
    description: "Apoio à linha de produção industrial com foco em organização, controle de qualidade e eficiência operacional.",
    skills: ["Produção Industrial", "Controle de Qualidade", "Organização"],
    icon: "⚡"
  },
  {
    id: 2,
    type: "work",
    title: "Torneiro Mecânico",
    company: "Cilintec Cilindros para Impressões LTDA",
    period: "15/07/2022 - 02/09/2023",
    description: "Usinagem de peças metálicas de precisão utilizando tornos CNC e convencionais. Foco em qualidade, atendimento técnico e entrega conforme especificações rigorosas.",
    skills: ["Torno CNC", "Leitura de Desenho Técnico", "Controle de Qualidade"],
    icon: "🔧"
  },
  {
    id: 3,
    type: "work",
    title: "Torneiro Mecânico Autônomo",
    company: "Trabalho Autônomo",
    period: "09/2023 - Presente",
    description: "Especialista em usinagem de cadinhos de grafite para fundição, atendendo demandas personalizadas de clientes. Responsável por todo o processo, desde o planejamento até a entrega final.",
    skills: ["Usinagem de Precisão", "Gestão de Projetos", "Atendimento ao Cliente"],
    icon: "⚙️"
  },
  {
    id: 4,
    type: "education",
    title: "Transição para Data & Analytics",
    company: "Pod Academy",
    period: "1/12/2023 - 8/12/2025",
    description: "A Formação Full Stack Dados & Analytics é a trilha completa de Dados & Analytics, com Engenharia de Dados, Tecnologia, Computação em Nuvem, Negócios e Ciência de Dados do nível básico até o especialista.",
    skills: ["Engenharia de Dados", "Computação em Nuvem", "Ciência de Dados", "Negócios"],
    icon: "📊"
  }
];

/**
 * Portfólio de Projetos em Data & Analytics
 * @description Projetos práticos demonstrando habilidades técnicas
 * @categories "Análise Exploratória", "Engenharia de Dados", "Ciência de Dados", "API & Web Scraping"
 * @structure Array de objetos com dados completos do projeto
 */
export const projects = [
  {
    id: 1,
    title: "Análise Exploratória - Spotify Most Streamed Songs",
    impactPhrase: "★ Destaque | Análise de Dados",
    description: "🎵 Transformei +50k músicas em insights visuais que revelam padrões de sucesso no Spotify usando Python e visualizações com Seaborn.",
    longDescription: "Mergulhei no universo musical para responder uma pergunta intrigante: o que torna uma música irresistível? Usando dataset do Spotify com as faixas mais tocadas globalmente, conduzi uma análise exploratória completa que revelou insights surpreendentes. Descobri que características como 'danceability' e 'energy' têm correlações específicas com o sucesso, mas também identifiquei padrões temporais que mostram como o gosto musical evolui. O projeto culminou na criação de um 'mapa do sucesso musical' com 8 fatores-chave que podem prever a popularidade de uma música.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    category: "Análise Exploratória",
    image: `${process.env.PUBLIC_URL}/projects/capa_spotify_analysis.png`,
    github: "https://github.com/tmarsbr/data-analyst-project",
    demo: "",
    metrics: "Análise de +50k músicas, identificação de 8 fatores-chave de sucesso",
    featured: true,
    complexity: 4,
    date: "2024"
  },
  {
    id: 2,
    title: "Análise dos Acidentes nas Rodovias Brasileiras",
    impactPhrase: "🎯 Projeto Social | Geoanálise",
    description: "🛣️ Analisei +100k registros de acidentes da PRF criando um mapa inteligente de segurança viária que identifica pontos críticos em 27 estados brasileiros.",
    longDescription: "Este projeto nasceu de uma missão pessoal: usar dados para salvar vidas nas estradas. Analisando registros da Polícia Rodoviária Federal, criei visualizações interativas que revelam os pontos críticos de acidentes em todo território nacional. O mais impactante foi descobrir padrões inesperados entre localização de radares e redução de acidentes, gerando insights que podem influenciar políticas públicas de segurança. Mapiei 27 estados e identifiquei os horários, condições climáticas e trechos mais perigosos, criando um verdadeiro 'GPS da segurança' para as rodovias brasileiras.",
    technologies: ["Python", "Pandas", "Geopandas", "Plotly", "Folium"],
    category: "Análise Exploratória",
    image: `${process.env.PUBLIC_URL}/projects/capa_prf_accidents.png`,
    github: "https://github.com/tmarsbr/analise-PRF-",
    demo: "",
    metrics: "Análise de +100k acidentes, mapeamento de 27 estados",
    featured: true,
    complexity: 5,
    date: "2024"
  },
  {
    id: 3,
    title: "Pipeline de Integração - Clínicas Sanare e Reviver",
    impactPhrase: "⚡ Projeto Real | Engenharia de Dados",
    description: "🏥 Desenvolvi um pipeline ETL robusto que unificou sistemas de duas clínicas médicas, migrando +10k registros com 99.9% de precisão e zero downtime.",
    longDescription: "Enfrentei um desafio real do mundo corporativo: duas clínicas médicas se fundiram e precisavam unificar seus dados de pacientes, históricos e procedimentos. O problema? Sistemas completamente diferentes, formatos incompatíveis e zero margem para erros - afinal, eram dados de saúde humana. Desenvolvi uma solução elegante usando programação orientada a objetos, criando um pipeline ETL modular que não apenas integrou os dados, mas também implementou validações rigorosas de qualidade. O resultado? Uma migração 100% bem-sucedida que permitiu à nova empresa operar desde o primeiro dia.",
    technologies: ["Python", "OOP", "ETL", "Data Quality", "Pandas"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_integracao_sistemas_medicos.png`,
    github: "https://github.com/tmarsbr/projeto_pipeline",
    demo: "",
    metrics: "Integração de +10k registros, 99.9% de precisão na migração",
    featured: true,
    complexity: 5,
    date: "2024"
  },
  {
    id: 4,
    title: "Extração e Análise - Repositórios GitHub",
    impactPhrase: "🔥 Automatização | API & Web Scraping",
    description: "🐙 Sistema automatizado que extraiu e analisou dados de +1000 repositórios de 15 grandes empresas tech via API GitHub, revelando tendências de desenvolvimento.",
    longDescription: "Sistema automatizado para coleta e análise de dados de repositórios GitHub de grandes empresas de tecnologia. Utilizou API do GitHub para extrair informações sobre linguagens, atividade e tendências de desenvolvimento, gerando insights sobre o ecossistema tech.",
    technologies: ["Python", "GitHub API", "Pandas", "Requests", "JSON"],
    category: "API & Web Scraping",
    image: `${process.env.PUBLIC_URL}/projects/capa_github_analysis.png`,
    github: "https://github.com/tmarsbr/Projeto_api",
    demo: "",
    metrics: "Análise de +1000 repositórios, 15 empresas tech",
    featured: false,
    complexity: 3,
    date: "2024"
  },
  {
    id: 5,
    title: "Pipeline Python - MongoDB - MySQL",
    impactPhrase: "🚀 Integração | Engenharia de Dados",
    description: "🔄 Pipeline completo para e-commerce integrando MongoDB e MySQL, reduzindo em 70% o tempo de análise da equipe de BI com processamento automatizado.",
    longDescription: "Desenvolvimento de pipeline completo para processamento de dados de e-commerce, integrando diferentes bases de dados. Solução automatizada para ETL entre MongoDB (dados não-estruturados) e MySQL (dados estruturados), com foco em performance e confiabilidade.",
    technologies: ["Python", "MongoDB", "MySQL", "ETL", "PyMongo"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_pipeline_mongo_mysql.png`,
    github: "https://github.com/tmarsbr/pipeline-python-mongo-mysql",
    demo: "",
    metrics: "Redução de 70% no tempo de análise da equipe de BI",
    featured: true,
    complexity: 4,
    date: "2024"
  },
  {
    id: 6,
    title: "Análise de Crédito com Machine Learning",
    impactPhrase: "🛠️ Em Desenvolvimento | Ciência de Dados",
    description: "💳 Modelo de score de crédito com Machine Learning em fase de testes.",
    longDescription: "Projeto de análise de crédito utilizando técnicas de machine learning para avaliação de risco. Em desenvolvimento com foco em algoritmos de classificação e análise de padrões de inadimplência.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    category: "Ciência de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_credito_ml.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    inDevelopment: true,
    date: "Em breve"
  },
  {
    id: 7,
    title: "People Analytics - Insights de RH",
    impactPhrase: "🚧 Em Desenvolvimento | Ciência de Dados",
    description: "👥 Sistema de análise de dados de RH para insights estratégicos em gestão de pessoas.",
    longDescription: "Projeto focado na aplicação de People Analytics para tomada de decisão em gestão de pessoas, incluindo análise de turnover, performance e engajamento de colaboradores.",
    technologies: ["Python", "Pandas", "Plotly", "Statistics"],
    category: "Ciência de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_people_analytics.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    inDevelopment: true,
    date: "Em breve"
  },
  {
    id: 8,
    title: "Previsão de Demandas - Séries Temporais",
    impactPhrase: "⏱️ Em Construção | Ciência de Dados",
    description: "📈 Modelos de previsão de demanda utilizando algoritmos de séries temporais.",
    longDescription: "Projeto focado em previsão de demandas utilizando algoritmos de série temporal avançados, incluindo ARIMA, Prophet e redes neurais para forecasting empresarial.",
    technologies: ["Python", "Prophet", "ARIMA", "TensorFlow"],
    category: "Ciência de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_previsao_demandas.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    inDevelopment: true,
    date: "Em breve"
  },
  {
    id: 9,
    title: "Sistema Antifraude com IA",
    impactPhrase: "🔒 Em Desenvolvimento | Ciência de Dados",
    description: "🛡️ Sistema de detecção de fraudes com métodos estatísticos e machine learning.",
    longDescription: "Modelo de escore antifraude utilizando técnicas avançadas de machine learning para detectar padrões suspeitos e prevenir fraudes em transações financeiras.",
    technologies: ["Python", "Scikit-learn", "Anomaly Detection", "Deep Learning"],
    category: "Ciência de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_fraude_financeira.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    inDevelopment: true,
    date: "Em breve"
  },
  {
    id: 10,
    title: "Projeto Eng-Dados 004 Arquitetura de streaming",
    description: "🚀 Pipeline de dados em tempo real em construção.",
    longDescription: "Implantação de arquitetura de streaming utilizando ferramentas modernas. Em breve detalhes completos.",
    technologies: ["Kafka"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_streaming_kafka.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  },
  {
    id: 11,
    title: "Projeto Eng-Dados 003 automação com bots",
    description: "🤖 Automatização de tarefas de dados em fase inicial.",
    longDescription: "Projeto de bots para otimizar pipelines e rotinas de dados. Disponível em breve.",
    technologies: ["Python"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_automacao_bots.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  },
  {
    id: 12,
    title: "Projeto Eng-Dados 002 Data Lake",
    description: "🗄️ Estruturação de data lake em evolução.",
    longDescription: "Criação de data lake escalável. Conteúdo e repositório serão publicados em breve.",
    technologies: ["Databricks"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_data_lake.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  },
  {
    id: 13,
    title: "Deploy de aplicações de dados com Docker",
    description: "🐳 Automatização de ambientes para ciência de dados.",
    longDescription: "Estudos sobre conteinerização de projetos de dados utilizando Docker. Publicação em breve.",
    technologies: ["Docker"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_docker_deploy.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  },
  {
    id: 14,
    title: "Monitoramento de refrigeração com Kafka (streaming)",
    description: "❄️ Monitoramento em tempo real utilizando Kafka.",
    longDescription: "Projeto para acompanhar e analisar dados de refrigeração via streaming. Detalhes em breve.",
    technologies: ["Kafka"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_monitoramento_refrigeracao_kafka.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  },
  {
    id: 15,
    title: "Orquestração de ETL com Airflow",
    description: "🛠️ Pipelines orquestrados programados para lançamento.",
    longDescription: "Configuração de workflows de ETL utilizando Airflow. Projeto em desenvolvimento.",
    technologies: ["Airflow"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_automacao_etl.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  },
  {
    id: 16,
    title: "Data Lake no Databricks - O Lago do Mago",
    description: "✨ Implementação de data lake avançada em andamento.",
    longDescription: "Exploração de soluções de data lake utilizando Databricks. Documentação em breve.",
    technologies: ["Databricks"],
    category: "Engenharia de Dados",
    image: `${process.env.PUBLIC_URL}/projects/capa_data_lake.png`,
    github: "",
    demo: "",
    metrics: "",
    featured: false,
    date: "Em breve"
  }
];

/**
 * Certificações e Formações Acadêmicas
 * @description Certificados obtidos em cursos e formações
 * @structure Array com dados dos certificados e links para PDFs
 */
export const certificates = [
  {
    id: 1,
    title: "Nivelamento em Matemática, Estatística e Programação para Big Data & Analytics",
    institution: "PoD Academy",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certificates/1.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2026662A6157507713239070.pdf`,
    skills: ["Matemática", "Estatística", "Programação", "Big Data"]
  },
  {
    id: 2,
    title: "Ciências Aplicadas: Matemática e Estatística",
    institution: "PoD Academy",
    year: "2025",
    image: `${process.env.PUBLIC_URL}/certificates/4.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2427912AD2AF41E914203880.pdf`,
    skills: ["Matemática Aplicada", "Estatística Aplicada", "Dados"]
  },
  {
    id: 3,
    title: "Formação em Análise de Dados",
    institution: "PoD Academy",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certificates/3.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2184196A1D520FC214203880.pdf`,
    skills: ["Análise de Dados", "CRISP-DM", "Estatística", "Visualização"]
  },
  {
    id: 4,
    title: "Cloud Computing",
    institution: "PoD Academy",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certificates/2.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2181848AF6E35A5F13239070.pdf`,
    skills: ["Cloud Computing", "AWS", "Azure", "GCP"]
  }
];

/**
 * Configurações de Tema e Estilo
 * @description Paleta de cores, tipografia e espaçamentos para modo claro/escuro
 * @includes cores, fontes, espaçamentos, bordas e transições
 */
export const themeConfig = {
  // Cores principais - refinadas para melhor contraste e harmonia
  light: {
    primaryColor: "#1565c0", // Azul mais vibrante e profissional
    secondaryColor: "#d32f2f", // Vermelho mais equilibrado
    accentColor: "#00897b", // Verde-azulado sofisticado
    backgroundColor: "#fafafa",
    paperColor: "#ffffff",
    alternateBackground: "#f5f7fa", // Off-white para seções alternadas
    textPrimary: "#2c3e50", // Texto mais escuro para melhor contraste
    textSecondary: "#64748b", // Cinza moderno
    dividerColor: "#e2e8f0",
    shadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    hoverShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
  },
  dark: {
    primaryColor: "#64b5f6", // Azul suave para fundo escuro
    secondaryColor: "#ef5350", // Vermelho suave
    accentColor: "#4db6ac", // Verde-azulado suave
    backgroundColor: "#0f172a", // Azul muito escuro
    paperColor: "#1e293b", // Cinza-azul escuro para cards
    alternateBackground: "#1a202c", // Cinza escuro para seções alternadas
    textPrimary: "#f1f5f9", // Branco quase puro
    textSecondary: "#94a3b8", // Cinza claro
    dividerColor: "#334155",
    shadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    hoverShadow: "0 12px 40px rgba(0, 0, 0, 0.5)"
  },
  
  // Tipografia aprimorada com Google Fonts
  fontFamily: "'Inter', 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif",
  fontSize: {
    xs: "0.75rem",
    small: "0.875rem", 
    medium: "1rem",
    large: "1.25rem",
    xlarge: "2rem",
    xxlarge: "3rem",
    xxxlarge: "3.75rem"
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  // Espaçamentos seguindo o padrão 8px
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px"
  },
  
  // Border radius padronizado
  borderRadius: {
    small: "6px",
    medium: "12px",
    large: "16px",
    xl: "24px",
    round: "50%"
  },
  
  // Animações e transições
  transitions: {
    fast: "0.15s ease-out",
    normal: "0.3s ease-in-out", 
    slow: "0.5s ease-in-out"
  }
};

/**
 * Configurações de SEO (Search Engine Optimization)
 * @description Metadados para otimização em motores de busca
 * @includes title, description, keywords, Open Graph, Twitter Cards
 */
export const seoConfig = {
  title: "Tiago Silva - Full Stack em Data & Analytics",
  description: "Portfólio de Tiago Silva, Full Stack em Data & Analytics. Projetos em Python, Machine Learning, análise de dados e visualização. Transformando dados em insights estratégicos.",
  keywords: "data analytics, data science, python, machine learning, análise de dados, sql, portfolio, tiago silva",
  author: "Tiago Silva",
  url: "https://tmarsbr.github.io/portifolio-data-analytics", // URL do GitHub Pages
  image: `${process.env.PUBLIC_URL}/og-image.jpg`, // Adicione uma imagem de preview
  
  // Open Graph
  ogTitle: "Tiago Silva - Data & Analytics Portfolio",
  ogDescription: "Full Stack em Data & Analytics com projetos em Python, Machine Learning e visualização de dados. Veja meus projetos e entre em contato!",
  twitterCard: "summary_large_image",
  twitterCreator: "@tiagodados" // Se tiver Twitter
};

/**
 * Configurações do Google Analytics
 * @description Tracking e métricas de acesso (opcional)
 */
export const analyticsConfig = {
  trackingId: process.env.REACT_APP_TRACKING_ID || "",
  enabled: process.env.NODE_ENV === "production"
};

/**
 * Configuração Principal do Portfólio
 * @description Exportação unificada de todas as configurações
 * @exports Objeto contendo todas as seções do portfólio
 */
const portfolioConfig = {
  personalInfo,
  skills,
  experiences,
  projects,
  certificates,
  themeConfig,
  seoConfig,
  analyticsConfig
};

export default portfolioConfig;
