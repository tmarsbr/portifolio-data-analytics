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
        { name: "Apache Airflow", level: 75, icon: "🌊" },
        { name: "AWS", level: 70, icon: "☁️" },
    ],
};
