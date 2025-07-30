import React from 'react';
import { Helmet } from 'react-helmet';

// Seções da página Home
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import CertificatesPreview from '../components/sections/CertificatesPreview';
import ContactSection from '../components/sections/ContactSection';

// Configurações
import { seoConfig } from '../config/portfolio';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:image" content={seoConfig.image} />
        
        <meta name="twitter:card" content={seoConfig.twitterCard} />
        <meta name="twitter:title" content={seoConfig.ogTitle} />
        <meta name="twitter:description" content={seoConfig.ogDescription} />
        <meta name="twitter:image" content={seoConfig.image} />
      </Helmet>

      {/* Página Home principal */}
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsPreview />
      <CertificatesPreview />
      <ContactSection />
    </>
  );
};

export default Home;
