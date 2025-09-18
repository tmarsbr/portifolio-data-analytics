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
  title: "Eng. de Dados | Data Science",
  subtitle: "Transformando dados em insights estratégicos para negócios",
  location: "São Paulo, SP",
  email: "tiagomars233@gmail.com",
  phone: "+55 11 97542-9994",
  linkedin: "https://www.linkedin.com/in/tiagodados",
  github: "https://github.com/tmarsbr",
  whatsapp: "https://wa.me/5511975429994",
  resume: `${process.env.PUBLIC_URL}/certificates/Curriculo_Tiago_Santo_Formatado.pdf`,
  
  // Resumo para a página inicial (1-2 frases)
  homeIntro: "Desenho e opero pipelines ETL/ELT (Airflow, dbt, Spark), modelo dados para analytics e sirvo features para ML. Foco em escalabilidade, custo e qualidade com IaC, CI/CD e DataOps na AWS.",
  
  // Descrição expandida para a seção Sobre
  aboutDescription: `Da Oficina para os Dados
Tudo começou com barulho de torno, cheiro de óleo e precisão milimétrica. Na usinagem, aprendi que um erro de um décimo pode custar caro. Foi lá que desenvolvi o olhar clínico, a paciência e o gosto por resolver problemas com método.

Hoje, essa precisão virou código. Projeto pipelines, organizo dados brutos, crio dashboards, desenvolvo modelos preditivos e conto histórias com dados reais. Da engenharia à análise, passando pela ciência de dados, aplico o mesmo rigor técnico que aprendi na mecânica para transformar números em decisões inteligentes.

Tolerância apertada e processo confiável geram qualidade — em aço e em dados.`,


  // Avatar/Foto (deixe vazio para usar placeholder)
  avatar: `${process.env.PUBLIC_URL}/imagem/perfil.jpeg`,
};

/**
 * Categorias de Projetos
 * @description Lista de categorias principais para filtros
 */
export const PROJECT_CATEGORIES = [
  'Todos',
  'Análise de Dados',
  'Engenharia de Dados',
  'Ciência de Dados',
  'API & Scraping'
];

/**
 * Subcategorias por Categoria
 * @description Subfiltros específicos para cada categoria principal
 */
export const PROJECT_SUBCATEGORIES = {
  'Engenharia de Dados': ['IaC', 'CI/CD', 'ETL/ELT', 'Cloud AWS', 'DataOps'],
  'Análise de Dados': ['EDA', 'Visualização', 'Estatística', 'Experimentação'],
  'Ciência de Dados': ['ML Clássico', 'Deep Learning', 'MLOps', 'NLP'],
  'API & Scraping': ['Scraping', 'API REST', 'Integrações'],
  'Todos': []
};

/**
 * Árvore de Skills - Tecnologias por Subcategoria
 * @description Mapeamento de tecnologias específicas para cada subcategoria
 * @structure { categoria: { subcategoria: [tecnologias] } }
 */
export const SKILL_TREE = {
  'Engenharia de Dados': {
    'IaC': ['Terraform'],
    'CI/CD': ['GitHub Actions', 'Docker', 'Kubernetes'],
    'ETL/ELT': ['Airbyte', 'dbt', 'Apache Spark', 'Python'],
    'Cloud AWS': ['S3', 'EMR', 'Redshift', 'Glue', 'Athena', 'DynamoDB', 'QuickSight', 'SageMaker'],
    'DataOps': ['Apache Airflow']
  },
  'Data Science': {
    'Data Science': ['EDA', 'Visualização', 'Feature Engineering', 'Storytelling', 'Causalidade', 'Séries Temporais'],
    'Python': ['pandas', 'numpy', 'matplotlib', 'seaborn', 'plotly', 'scipy', 'polars', 'requests', 'jupyter'],
    'Machine Learning': ['scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'statsmodels', 'Optuna', 'OneHotEncoder', 'StandardScaler', 'Pipeline', 'Cross-Validation'],
    'SQL': ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server', 'Oracle', 'Redshift', 'Athena', 'DuckDB'],
    'Estatística': ['Descritiva', 'Inferência', 'Testes de Hipótese', 'Regressão', 'ANOVA', 'P-valor', 'Intervalo de Confiança', 'Correlação', 'Séries Temporais']
  }
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
    title: "Pipeline de Integração - Clínicas Sanare e Reviver",
    impactPhrase: "⚡ Projeto Real | Engenharia de Dados",
    description: "🏥 Desenvolvi um pipeline ETL robusto que unificou sistemas de duas clínicas médicas, migrando +10k registros com 99.9% de precisão e zero downtime.",
    longDescription: "Duas clínicas médicas se fundiram e precisavam operar em conjunto no dia seguinte. Estruturei um pipeline orientado a objetos que tratou incompatibilidades de schemas, aplicou validações de qualidade e conciliou históricos críticos sem interrupções. A solução entregou migração com 99.9% de acurácia e observabilidade ponta a ponta.",
    technologies: ["Python", "OOP", "ETL", "Data Quality", "Pandas"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_integracao_sistemas_medicos.png`,
    github: "https://github.com/tmarsbr/projeto_pipeline",
    demo: "",
    metrics: "Integração de +10k registros, 99.9% de precisão na migração",
    featured: true,
    complexity: 5,
    date: "2024"
  },
  {
    id: 2,
    title: "Extração e Análise - Repositórios GitHub",
    impactPhrase: "🔥 DataOps | Engenharia de Dados",
    description: "🐙 Orquestrei coleta e análise de +1000 repositórios de 15 empresas tech, entregando benchmark contínuo de stacks e produtividade.",
    longDescription: "Implementei automações para consumir a API do GitHub, aplicar normalização de metadados e consolidar indicadores de engenharia (linguagens, cadência de commits, contributors). O pipeline gera relatórios prontos para squads de tecnologia acompanharem tendências e planejar roadmap técnico.",
    technologies: ["Python", "GitHub API", "Pandas", "Requests", "JSON"],
    category: "Engenharia de Dados",
    subcategories: ["DataOps"],
    image: `${process.env.PUBLIC_URL}/projects/capa_github_analysis.png`,
    github: "https://github.com/tmarsbr/Projeto_api",
    demo: "",
    metrics: "Coleta contínua de +1000 repositórios, 15 empresas monitoradas",
    featured: false,
    complexity: 3,
    date: "2024"
  },
  {
    id: 3,
    title: "Pipeline Python - MongoDB - MySQL",
    impactPhrase: "⭐ Destaque | Engenharia de Dados",
    description: "🔄 Pipeline completo para e-commerce integrando MongoDB e MySQL, reduzindo em 70% o tempo de análise da equipe de BI.",
    longDescription: "Projetei um pipeline modular que captura dados semiestruturados no MongoDB, aplica regras de transformação com Python e povoa camadas relacionais em MySQL prontas para o BI. Logs, monitoramento de SLA e testes automáticos garantem confiabilidade operacional.",
    technologies: ["Python", "MongoDB", "MySQL", "ETL", "PyMongo"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_pipeline_mongo_mysql.png`,
    github: "https://github.com/tmarsbr/pipeline-python-mongo-mysql",
    demo: "",
    metrics: "Redução de 70% no tempo de análise da equipe de BI",
    featured: true,
    complexity: 4,
    date: "2024"
  },
  {
    id: 4,
    title: "Automatizando Infraestrutura de Processamento de Dados com AWS EMR e Apache Flink",
    impactPhrase: "☁️ Streaming | Engenharia de Dados",
    description: "⚙️ Estruturei pipeline distribuído em AWS EMR com Apache Flink para processar streams em tempo real com baixa latência.",
    longDescription: "Desenhei arquitetura em AWS EMR executando aplicações Flink para ingerir eventos de alto volume, aplicar agregações em janela e persistir resultados em data lake otimizado. A solução suporta autoscaling, checkpoints tolerantes a falha e reduz a latência analítica para segundos.",
    technologies: ["AWS EMR", "Apache Flink", "Kinesis", "S3", "Terraform"],
    category: "Engenharia de Dados",
    subcategories: ["Cloud AWS", "DataOps", "IaC"],
    image: `${process.env.PUBLIC_URL}/projects/capa_streaming_kafka.png`,
    github: "",
    demo: "",
    metrics: "Processamento contínuo com SLA sub-segundo e escalabilidade elástica",
    featured: true,
    complexity: 5,
    date: "2024"
  },
  {
    id: 5,
    title: "Pipeline PySpark para Extrair, Transformar e Carregar Arquivos JSON",
    impactPhrase: "💾 Batch ETL | Engenharia de Dados",
    description: "🧱 Desenvolvi pipeline PySpark que padroniza JSON brutos e carrega dados confiáveis em banco relacional.",
    longDescription: "Implementei job PySpark que lê lotes de arquivos JSON, aplica schema enforcement, trata anomalias e entrega datasets normalizados em banco SQL. Controles de qualidade e particionamento otimizam tempo de carga e consultas analíticas.",
    technologies: ["PySpark", "Python", "SQL", "Airflow"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_automacao_etl.png`,
    github: "",
    demo: "",
    metrics: "Carga diária de JSON com 100% de consistência referencial",
    featured: false,
    complexity: 4,
    date: "2024"
  },
  {
    id: 6,
    title: "Pipeline de Limpeza e Transformação para Aplicações de IA com PySpark SQL",
    impactPhrase: "🤖 Data Quality | Engenharia de Dados",
    description: "🧹 Estruturei camada confiável para modelos de IA usando PySpark SQL, padronizando features críticas.",
    longDescription: "Criei camadas bronze, silver e gold em PySpark SQL, com regras de normalização, deduplicação e enriquecimento de atributos. A esteira garante datasets prontos para ML com métricas de qualidade rastreadas via dashboards observáveis.",
    technologies: ["PySpark SQL", "Delta Lake", "Great Expectations", "Databricks"],
    category: "Engenharia de Dados",
    subcategories: ["DataOps"],
    image: `${process.env.PUBLIC_URL}/projects/capa_data_lake.png`,
    github: "",
    demo: "",
    metrics: "Melhoria de 35% na acurácia dos modelos após saneamento",
    featured: false,
    complexity: 4,
    date: "2024"
  },
  {
    id: 7,
    title: "Automação de Testes de Modelos de Dados no dbt",
    impactPhrase: "✅ Qualidade | Engenharia de Dados",
    description: "🧪 Automatizei testes no dbt garantindo integridade e versionamento de modelos analíticos.",
    longDescription: "Configurei rotina CI/CD com dbt, parametrizando testes de schema, dados e relações. Integração com GitHub Actions entrega validações a cada deploy, alertas proativos e documentação atualizada dos modelos.",
    technologies: ["dbt", "GitHub Actions", "SQL", "CI/CD"],
    category: "Engenharia de Dados",
    subcategories: ["CI/CD", "DataOps"],
    image: `${process.env.PUBLIC_URL}/projects/capa_docker_deploy.png`,
    github: "",
    demo: "",
    metrics: "Cobertura de testes 100% automatizada em pipelines versionados",
    featured: false,
    complexity: 3,
    date: "2024"
  },
  {
    id: 8,
    title: "Movimentação de Dados Entre Bancos de Dados com Airbyte",
    impactPhrase: "🔌 Integração | Engenharia de Dados",
    description: "🌐 Configurei Airbyte para sincronizar bancos relacionais e alimentar pipelines ETL escaláveis.",
    longDescription: "Modelei conectores no Airbyte para mover dados entre fontes heterogêneas, com logging, recuperação automática e versionamento das configurações. A solução encurta setup de integrações e suporta replicação incremental confiável.",
    technologies: ["Airbyte", "PostgreSQL", "MySQL", "Docker"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_automacao_bots.png`,
    github: "",
    demo: "",
    metrics: "Replicação incremental agendada em minutos com alertas automáticos",
    featured: false,
    complexity: 3,
    date: "2024"
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
    duration: "120h",
    image: `${process.env.PUBLIC_URL}/certificates/1.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2026662A6157507713239070.pdf`,
    skills: ["Matemática", "Estatística", "Programação", "Big Data"]
  },
  {
    id: 2,
    title: "Ciências Aplicadas: Matemática e Estatística",
    institution: "PoD Academy",
    year: "2025",
    duration: "80h",
    image: `${process.env.PUBLIC_URL}/certificates/4.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2427912AD2AF41E914203880.pdf`,
    skills: ["Matemática Aplicada", "Estatística Aplicada", "Dados"]
  },
  {
    id: 3,
    title: "Formação em Análise de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "100h",
    image: `${process.env.PUBLIC_URL}/certificates/3.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2184196A1D520FC214203880.pdf`,
    skills: ["Análise de Dados", "CRISP-DM", "Estatística", "Visualização"]
  },
  {
    id: 4,
    title: "Cloud Computing",
    institution: "PoD Academy",
    year: "2024",
    duration: "60h",
    image: `${process.env.PUBLIC_URL}/certificates/2.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/certificado-2181848AF6E35A5F13239070.pdf`,
    skills: ["Cloud Computing", "AWS", "Azure", "GCP"]
  },
  {
    id: 5,
    title: "Análise de Negócios",
    institution: "Formação em Ciência de Dados",
    year: "2024",
    duration: "40h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_analise_negocios.png`,
    pdf: "",
    skills: ["Análise de Negócios", "KPIs", "Métricas", "Estratégia"]
  },
  {
    id: 6,
    title: "Regressão Linear - Python",
    institution: "Data Viking",
    year: "2024",
    duration: "20h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_regressao_linear.png`,
    pdf: "",
    skills: ["Python", "Regressão Linear", "Machine Learning", "Estatística"]
  },
  {
    id: 7,
    title: "Floresta Aleatória (Random Forest)",
    institution: "Data Viking",
    year: "2024",
    duration: "25h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_random_forest.png`,
    pdf: "",
    skills: ["Random Forest", "Machine Learning", "Python", "Algoritmos"]
  },
  {
    id: 8,
    title: "Regressão Logística - Python",
    institution: "Data Viking",
    year: "2024",
    duration: "22h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_regressao_logistica.png`,
    pdf: "",
    skills: ["Regressão Logística", "Python", "Machine Learning", "Classificação"]
  },
  {
    id: 9,
    title: "SQL com Python",
    institution: "Data Viking",
    year: "2024",
    duration: "30h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_sql_python.png`,
    pdf: "",
    skills: ["SQL", "Python", "Banco de Dados", "SQLite"]
  },
  {
    id: 10,
    title: "Formação Python Impressionador",
    institution: "Hashtag Treinamentos",
    year: "2024",
    duration: "50h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_python_impressionador.png`,
    pdf: "",
    skills: ["Python", "Automação", "Data Science", "Pandas"]
  },
  {
    id: 11,
    title: "Formação SQL Impressionador",
    institution: "Hashtag Treinamentos",
    year: "2024",
    duration: "45h",
    image: `${process.env.PUBLIC_URL}/certificates/capa_certificado_sql_impressionador.png`,
    pdf: "",
    skills: ["SQL", "Banco de Dados", "Consultas Avançadas", "Performance"]
  },
  {
    id: 12,
    title: "Git e GitHub Essencial",
    institution: "DIO",
    year: "2023",
    duration: "15h",
    image: "",
    pdf: "",
    skills: ["Git", "GitHub", "Controle de Versão", "Colaboração"]
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
  title: "Tiago Silva — Eng. de Dados | Data Science",
  description: "Engenharia de Dados e Data Science: ETL/ELT (Airflow, dbt, Spark), analytics e features para ML. IaC, CI/CD e DataOps na AWS.",
  keywords: "engenharia de dados, data engineering, data science, analytics, python, machine learning, sql, aws, airflow, dbt, spark, tiago silva, portfólio",
  author: "Tiago Silva",
  url: "https://tmarsbr.github.io/portifolio-data-analytics", // URL do GitHub Pages
  image: `${process.env.PUBLIC_URL}/og-image.jpg`, // Adicione uma imagem de preview
  
  // Open Graph
  ogTitle: "Tiago Silva — Eng. de Dados | Data Science",
  ogDescription: "ETL/ELT (Airflow, dbt, Spark), modelagem para analytics e features de ML. IaC, CI/CD e DataOps na AWS.",
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
