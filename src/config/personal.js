/**
 * Informações Pessoais do Profissional
 * @description Dados básicos e contatos do portfólio
 */
export const personalInfo = {
  name: "Tiago da Silva e Santo",
  fullName: "Tiago Da Silva E Santo",
  title: "Engenheiro de Dados",
  subtitle: "Transformando dados em insights estratégicos para negócios",
  location: "São Paulo, SP",
  email: "tiagomars233@gmail.com",
  phone: "+55 11 97542-9994",
  linkedin: "https://www.linkedin.com/in/tiagodados",
  github: "https://github.com/tmarsbr",
  whatsapp: "https://wa.me/5511975429994",
  resume: `${process.env.PUBLIC_URL}/certificates/Curriculo_Tiago_Santo_Formatado.pdf`,

  // Resumo para a página inicial (1-2 frases)
  homeIntro: "Engenharia de dados end-to-end: orquestração (Airflow), transformação (dbt, Spark), ingestão (Airbyte), analytics (SQL, DuckDB) e cloud (AWS).",

  // Descrição expandida para a seção Sobre
  aboutDescription: `Da Oficina para os Dados
Tudo começou com barulho de torno, cheiro de óleo e precisão milimétrica. Na usinagem, aprendi que um erro de um décimo pode custar caro. Foi lá que desenvolvi o olhar clínico, a paciência e o gosto por resolver problemas com método.

Hoje, essa precisão virou código. Projeto pipelines, organizo dados brutos, crio dashboards, desenvolvo modelos preditivos e conto histórias com dados reais. Da engenharia à análise, passando pela ciência de dados, aplico o mesmo rigor técnico que aprendi na mecânica para transformar números em decisões inteligentes.

Tolerância apertada e processo confiável geram qualidade — em aço e em dados.`,


  // Avatar/Foto (deixe vazio para usar placeholder)
  avatar: `${process.env.PUBLIC_URL}/imagem/perfil.png`, // Adicione o caminho da sua foto aqui
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
 * Certificações e Formações Acadêmicas
 * @description Certificados obtidos em cursos e formações
 * @structure Array com dados dos certificados e links para PDFs
 */
export const certificates = [
  {
    id: 1,
    title: "Formação Full Stack Dados & Analytics",
    institution: "PoD Academy",
    year: "2024",
    duration: "Completo",
    image: `${process.env.PUBLIC_URL}/certificates/fullstackdataanalytics.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/Formação-full-stack-data-analytics.pdf`,
    skills: ["Engenharia de Dados", "Ciência de Dados", "Analytics", "Business"]
  },
  {
    id: 2,
    title: "Formação Engenharia de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "Especialização",
    image: `${process.env.PUBLIC_URL}/certificates/engenhariadedados.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/formação-engenheiro-de-dados.pdf`,
    skills: ["Big Data", "Spark", "Airflow", "Cloud AWS", "IaC"]
  },
  {
    id: 3,
    title: "Formação Ciência de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "Especialização",
    image: `${process.env.PUBLIC_URL}/certificates/cienciadedados.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/Formação-em-ciencia-de-dados.pdf`,
    skills: ["Machine Learning", "Estatística", "Python", "Modelagem"]
  },
  {
    id: 4,
    title: "Formação Análise de Dados",
    institution: "PoD Academy",
    year: "2024",
    duration: "Especialização",
    image: `${process.env.PUBLIC_URL}/certificates/analisededados.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/Formação-analise-de-dados.pdf`,
    skills: ["Storytelling", "Visualização", "SQL", "KPIs"]
  }
];
