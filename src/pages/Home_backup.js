import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box } from '@mui/material';

// Seções da página Home
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import CertificatesPreview from '../components/sections/CertificatesPreview';
import ContactSection from '../components/sections/ContactSection';

// Configurações
import { personalInfo, seoConfig } from '../config/portfolio';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
      </Helmet>
      
      {/* Teste de componente simples */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          Teste - Portfolio Data & Analytics
        </Typography>
        <Typography variant="body1">
          Se você está vendo esta mensagem, o React está funcionando!
        </Typography>
      </Container>

      {/* Componentes originais - comentados temporariamente */}
      {/*
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsPreview />
      <CertificatesPreview />
      <ContactSection />
      */}
    </>
  );
};
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <link rel="canonical" href={seoConfig.url} />
      </Helmet>

      {/* Seção Hero - Apresentação inicial */}
      <HeroSection />

      {/* Prévia do Sobre */}
      <AboutPreview />

      {/* Habilidades */}
      <SkillsSection />

      {/* Timeline de Experiência */}
      <ExperienceTimeline />

      {/* Prévia dos Projetos */}
      <ProjectsPreview />

      {/* Prévia dos Certificados */}
      <CertificatesPreview />

      {/* Seção de Contato */}
      <ContactSection />
    </>
  );
};

export default Home;
