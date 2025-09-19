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
  avatar: `${process.env.PUBLIC_URL}/imagem/perfil.jpeg`, // Adicione o caminho da sua foto aqui
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
    title: "Análise Exploratória - Spotify Most Streamed Songs",
    impactPhrase: "★ Destaque | Análise de Dados",
    description: "🎵 Transformei +50k músicas em insights visuais que revelam padrões de sucesso no Spotify usando Python e visualizações com Seaborn.",
    longDescription: "Mergulhei no universo musical para responder uma pergunta intrigante: o que torna uma música irresistível? Usando dataset do Spotify com as faixas mais tocadas globalmente, conduzi uma análise exploratória completa que revelou insights surpreendentes. Descobri que características como 'danceability' e 'energy' têm correlações específicas com o sucesso, mas também identifiquei padrões temporais que mostram como o gosto musical evolui. O projeto culminou na criação de um 'mapa do sucesso musical' com 8 fatores-chave que podem prever a popularidade de uma música.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    category: "Análise Exploratória",
    subcategories: ["EDA", "Visualização", "Estatística"],
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
    subcategories: ["EDA", "Visualização", "Estatística"],
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
    id: 4,
    title: "Extração e Análise - Repositórios GitHub",
    impactPhrase: "🔥 Automatização | Engenharia de Dados",
    description: "🐙 Sistema automatizado que extraiu e analisou dados de +1000 repositórios de 15 grandes empresas tech via API GitHub, revelando tendências de desenvolvimento.",
    longDescription: "Sistema automatizado para coleta e análise de dados de repositórios GitHub de grandes empresas de tecnologia. Utilizou API do GitHub para extrair informações sobre linguagens, atividade e tendências de desenvolvimento, gerando insights sobre o ecossistema tech.",
    technologies: ["Python", "GitHub API", "Pandas", "Requests", "JSON"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
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
    id: 6,
    title: "Análise de Crédito com Machine Learning",
    impactPhrase: "🛠️ Em Desenvolvimento | Ciência de Dados",
    description: "💳 Modelo de score de crédito com Machine Learning em fase de testes.",
    longDescription: "Projeto de análise de crédito utilizando técnicas de machine learning para avaliação de risco. Em desenvolvimento com foco em algoritmos de classificação e análise de padrões de inadimplência.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    category: "Ciência de Dados",
    subcategories: ["ML Clássico"],
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
    subcategories: ["ML Clássico"],
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
    subcategories: ["ML Clássico"],
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
    subcategories: ["ML Clássico"],
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
    title: "Automatizando Infraestrutura de Processamento de Dados com AWS EMR e Apache Flink",
    impactPhrase: "☁️ Cloud Infrastructure | Engenharia de Dados",
    description: "⚡ Infraestrutura como código para processamento de big data em tempo real utilizando AWS EMR, Apache Flink e Terraform para escalabilidade automática.",
    longDescription: "Projeto focado na automação completa de infraestrutura de processamento de dados em nuvem. Utilizando AWS EMR (Elastic MapReduce) para clusters gerenciados e Apache Flink para processamento de streams em tempo real, toda a infraestrutura é provisionada via Terraform seguindo práticas de IaC (Infrastructure as Code). O sistema inclui auto-scaling, monitoramento integrado e otimização de custos, demonstrando como construir pipelines de dados robustos e escaláveis na AWS.",
    technologies: ["AWS EMR", "Apache Flink", "Terraform", "IaC", "Python"],
    category: "Engenharia de Dados",
    subcategories: ["Cloud AWS", "IaC"],
    image: `${process.env.PUBLIC_URL}/projects/capa_aws_emr_flink.png`,
    github: "https://github.com/tmarsbr/aws-emr-flink-terraform",
    demo: "",
    metrics: "Infraestrutura 100% automatizada, processamento em tempo real",
    featured: true,
    complexity: 5,
    date: "2024"
  },
  {
    id: 11,
    title: "Pipeline PySpark Para Extrair, Transformar e Carregar Arquivos JSON em Banco de Dados",
    impactPhrase: "🔥 Big Data Processing | Engenharia de Dados",
    description: "🚀 Pipeline robusto de ETL desenvolvido com PySpark para processar grandes volumes de dados JSON, aplicando transformações complexas e carregamento otimizado.",
    longDescription: "Solução completa de ETL (Extract, Transform, Load) utilizando Apache Spark via PySpark para processar arquivos JSON de grande volume. O pipeline implementa transformações complexas incluindo limpeza de dados, normalização, agregações e validações de qualidade. Otimizado para performance com técnicas de particionamento, cache inteligente e processamento distribuído, garantindo escalabilidade para datasets de qualquer tamanho.",
    technologies: ["PySpark", "Apache Spark", "JSON", "ETL", "SQL"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_pyspark_etl_json.png`,
    github: "https://github.com/tmarsbr/pyspark-json-etl-pipeline",
    demo: "",
    metrics: "Processamento distribuído, transformações complexas",
    featured: true,
    complexity: 4,
    date: "2024"
  },
  {
    id: 12,
    title: "Pipeline de Limpeza e Transformação Para Aplicações de IA com PySpark SQL",
    impactPhrase: "🤖 AI Data Preparation | Engenharia de Dados",
    description: "✨ Pipeline especializado em preparação de dados para modelos de IA usando PySpark SQL, garantindo qualidade e consistência dos datasets de treinamento.",
    longDescription: "Pipeline avançado de preparação de dados especificamente desenhado para alimentar aplicações de Inteligência Artificial. Utilizando PySpark SQL para operações eficientes, o sistema implementa técnicas sofisticadas de limpeza, detecção de anomalias, feature engineering e normalização. Inclui validações automatizadas de qualidade, tratamento inteligente de valores ausentes e geração de estatísticas descritivas para garantir que os dados estejam prontos para treinamento de modelos de ML.",
    technologies: ["PySpark", "Spark SQL", "Feature Engineering", "Data Quality"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_pyspark_ai_pipeline.png`,
    github: "https://github.com/tmarsbr/pyspark-ai-data-pipeline",
    demo: "",
    metrics: "Preparação de dados para IA, validações automatizadas",
    featured: true,
    complexity: 5,
    date: "2024"
  },
  {
    id: 13,
    title: "Automação de Testes de Modelos de Dados no dbt",
    impactPhrase: "🧪 Data Testing | Engenharia de Dados",
    description: "🔍 Framework completo de testes automatizados para modelos de dados usando dbt, garantindo qualidade e confiabilidade dos pipelines analíticos.",
    longDescription: "Implementação de um framework robusto de testes automatizados para modelos de dados utilizando dbt (data build tool). O sistema inclui testes de integridade referencial, validações de qualidade de dados, testes de regressão e monitoramento contínuo. Desenvolvido com foco em DataOps, o projeto demonstra como implementar CI/CD para dados, incluindo testes unitários para transformações SQL, validações de schema e alertas automáticos para anomalias nos dados.",
    technologies: ["dbt", "SQL", "Data Testing", "DataOps", "CI/CD"],
    category: "Engenharia de Dados",
    subcategories: ["DataOps"],
    image: `${process.env.PUBLIC_URL}/projects/capa_data_warehouse_local.png`,
    github: "https://github.com/tmarsbr/dbt-automated-testing",
    demo: "",
    metrics: "Framework de testes automatizados, qualidade de dados garantida",
    featured: true,
    complexity: 4,
    date: "2024"
  },
  {
    id: 14,
    title: "Movimentação de Dados Entre Bancos de Dados com Airbyte",
    impactPhrase: "🔄 Data Integration | Engenharia de Dados",
    description: "🌐 Solução de integração de dados usando Airbyte para sincronização automática entre diferentes fontes de dados, garantindo consistência e atualização em tempo real.",
    longDescription: "Implementação de uma solução completa de integração de dados utilizando Airbyte para orquestrar a movimentação entre diferentes sistemas de banco de dados. O projeto demonstra como configurar conectores personalizados, implementar transformações durante a sincronização e garantir a consistência dos dados entre ambientes. Inclui monitoramento de performance, tratamento de falhas e estratégias de recuperação, mostrando como construir pipelines de dados resilientes e escaláveis.",
    technologies: ["Airbyte", "PostgreSQL", "MySQL", "Data Integration", "ETL"],
    category: "Engenharia de Dados",
    subcategories: ["ETL/ELT"],
    image: `${process.env.PUBLIC_URL}/projects/capa_automacao_etl.png`,
    github: "https://github.com/tmarsbr/airbyte-data-movement",
    demo: "",
    metrics: "Sincronização automática entre DBs, integração de dados resiliente",
    featured: true,
    complexity: 4,
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
