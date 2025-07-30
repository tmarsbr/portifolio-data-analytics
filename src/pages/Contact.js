import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../components/sections/ContactSection';
import { personalInfo } from '../config/portfolio';

/**
 * Contact - Página de contato
 *
 * Reúne informações para entrar em contato e formulário dedicado.
 *
 * Funcionalidades:
 * - Metadados dinâmicos para SEO
 * - Componente reutilizável de contato
 * - Espaçamento para header fixo
 *
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contato - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Entre em contato com ${personalInfo.name} para discussões sobre projetos de Data & Analytics, oportunidades de colaboração e consultoria em análise de dados.`} />
        <meta property="og:title" content={`Contato - ${personalInfo.name} | Data & Analytics Specialist`} />
        <meta property="og:description" content="Entre em contato para projetos de Data & Analytics, consultoria em análise de dados e oportunidades de colaboração." />
      </Helmet>

      {/* Espaçamento para o header fixo */}
      <div style={{ height: '64px' }} />
      
      {/* Componente de contato reutilizado */}
      <ContactSection />
    </>
  );
};

export default Contact;
