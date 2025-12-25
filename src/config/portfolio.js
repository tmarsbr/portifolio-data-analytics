// ========================================
// CONFIGURAÇÃO DO PORTFÓLIO DATA & ANALYTICS
// ========================================
// Edite este arquivo para personalizar seu portfólio

import { personalInfo, experiences, certificates } from './personal';
import { projects, PROJECT_CATEGORIES, PROJECT_SUBCATEGORIES, projectsConfig, projectsPageConfig } from './projects';
import { skills, SKILL_TREE } from './skills';
import { themeConfig } from './theme';

// Re-exportar tudo para manter compatibilidade
export {
  personalInfo,
  experiences,
  certificates,
  projects,
  PROJECT_CATEGORIES,
  PROJECT_SUBCATEGORIES,
  projectsConfig,
  projectsPageConfig,
  skills,
  SKILL_TREE,
  themeConfig
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
  url: "https://tmarsbr.github.io/portifolio", // URL do GitHub Pages
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
  projectsConfig,
  projectsPageConfig,
  certificates,
  themeConfig,
  seoConfig,
  analyticsConfig
};

export default portfolioConfig;
