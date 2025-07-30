import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Chip,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
  Engineering,
  TrendingUp,
  Code,
  Psychology,
} from '@mui/icons-material';

import { personalInfo } from '../config/portfolio';


const About = () => {
  const theme = useTheme();

  const personalAttributes = [
    {
      icon: <Engineering />,
      title: 'Precisão Técnica',
      description: 'Anos de experiência em usinagem me deram atenção meticulosa aos detalhes e capacidade de trabalhar com tolerâncias mínimas.',
    },
    {
      icon: <Psychology />,
      title: 'Pensamento Analítico',
      description: 'Habilidade desenvolvida para quebrar problemas complexos em partes menores e encontrar soluções eficientes.',
    },
    {
      icon: <TrendingUp />,
      title: 'Orientação a Resultados',
      description: 'Foco constante em entregar soluções que gerem valor real e impacto mensurável nos negócios.',
    },
    {
      icon: <Code />,
      title: 'Aprendizado Rápido',
      description: 'Capacidade de absorver rapidamente novas tecnologias e metodologias, adaptando-me às necessidades do projeto.',
    },
  ];

  const journeySteps = [
    {
      period: '2016-2021',
      title: 'Consolidação na Usinagem',
      description: 'Desenvolvimento de habilidades técnicas fundamentais através da operação de tornos mecânicos e CNC em empresas como Metal Flex e Cilintech.',
      achievements: ['Especialização em peças de precisão', 'Domínio de leitura técnica', 'Controle de qualidade rigoroso'],
    },
    {
      period: '2021-Presente',
      title: 'Autonomia Profissional',
      description: 'Transição para trabalho autônomo, especializando-me na usinagem de cadinhos de grafite para fundição, desenvolvendo gestão de projetos.',
      achievements: ['Gestão completa de projetos', 'Relacionamento direto com clientes', 'Flexibilidade de horários'],
    },
    {
      period: '2022-Presente',
      title: 'Transição para Data & Analytics',
      description: 'Início dos estudos intensivos em Data Science, aplicando experiência prática para desenvolver projetos completos de análise de dados.',
      achievements: ['9+ projetos práticos concluídos'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Conheça a trajetória de ${personalInfo.name}, da precisão mecânica à análise de dados. História de transição de carreira e especialização em Data & Analytics.`} />
        <meta property="og:title" content={`Sobre ${personalInfo.name} - Data & Analytics Specialist`} />
        <meta property="og:description" content="História de transição de carreira da usinagem para Data & Analytics, combinando precisão técnica com análise de dados." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }} data-aos="fade-right">
                <Avatar
                  src={personalInfo.avatar || undefined}
                  alt={personalInfo.name}
                  sx={{
                    width: { xs: 200, md: 280 },
                    height: { xs: 200, md: 280 },
                    mx: 'auto',
                    mb: 3,
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[8],
                    backgroundColor: personalInfo.avatar ? 'transparent' : 'primary.main',
                    fontSize: '4rem',
                    fontWeight: 600,
                  }}
                >
                  {!personalInfo.avatar && personalInfo.name.charAt(0)}
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {personalInfo.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  {personalInfo.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  📍 {personalInfo.location}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box data-aos="fade-left">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    mb: 2,
                  }}
                >
                  Minha História
                </Typography>

                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary',
                    lineHeight: 1.2,
                  }}
                >
                  Da Precisão Mecânica para a Análise de Dados
                </Typography>

                <Box sx={{ '& p': { mb: 3, fontSize: '1.1rem', lineHeight: 1.7 } }}>
                  {personalInfo.aboutDescription.split('\n\n').map((paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Atributos Pessoais */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'grey.50',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Qualidades que me Definem
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Características desenvolvidas ao longo da minha jornada profissional 
              que aplicam diretamente ao trabalho com dados.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {personalAttributes.map((attribute, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 48,
                        height: 48,
                      }}
                    >
                      {attribute.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {attribute.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {attribute.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Jornada Detalhada */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Evolução Profissional
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Os marcos principais da minha trajetória, desde a usinagem 
              até a especialização em Data & Analytics.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {journeySteps.map((step, index) => (
              <Grid
                item
                xs={12}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: theme.shadows[8],
                      borderColor: 'primary.main',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '100%',
                      backgroundColor: index === journeySteps.length - 1 ? 'secondary.main' : 'primary.main',
                      borderRadius: '0 4px 4px 0',
                    },
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                      <Chip
                        label={step.period}
                        sx={{
                          backgroundColor: index === journeySteps.length - 1 ? 'secondary.main' : 'primary.main',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          px: 2,
                          py: 1,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'text.primary',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {step.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {step.achievements.map((achievement, achievementIndex) => (
                          <Chip
                            key={achievementIndex}
                            label={achievement}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: 'divider',
                              color: 'text.secondary',
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'grey.50',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }} data-aos="fade-up">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Interessado em Colaborar?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Estou sempre aberto para discussões sobre projetos, oportunidades 
              de colaboração ou apenas para trocar experiências sobre Data & Analytics. 
              Vamos conversar sobre como posso contribuir para o seu próximo projeto!
            </Typography>
            
            {/* Estatísticas finais */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                { number: '7+', label: 'Anos de Experiência Técnica' },
                { number: '9+', label: 'Projetos de Data Analytics' },
                { number: '10+', label: 'Tecnologias Dominadas' },
                { number: '∞', label: 'Paixão por Aprender' },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
