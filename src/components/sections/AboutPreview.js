import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import {
  ArrowForward,
  Engineering,
  Analytics,
  School,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { personalInfo } from '../../config/portfolio';

const AboutPreview = () => {
  const theme = useTheme();

  const highlights = [
    {
      icon: <Engineering />,
      title: 'Background Técnico',
      description: 'Anos de experiência em usinagem de precisão, desenvolvendo habilidades analíticas e atenção aos detalhes.',
    },
    {
      icon: <Analytics />,
      title: 'Transição para Data',
      description: 'Especialização em Data & Analytics, aplicando experiência prática para resolver problemas com dados.',
    },
    {
      icon: <School />,
      title: 'Aprendizado Contínuo',
      description: 'Mais de 9 projetos práticos desenvolvidos, sempre buscando novas tecnologias e metodologias.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Conteúdo principal */}
          <Grid item xs={12} md={6}>
            <Box data-aos="fade-right">
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
                Sobre mim
              </Typography>

              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'text.primary',
                  lineHeight: 1.2,
                }}
              >
                Da Precisão Mecânica para a{' '}
                <Typography
                  component="span"
                  variant="inherit"
                  sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Análise de Dados
                </Typography>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                  mb: 4,
                }}
              >
                Minha jornada começou na usinagem, onde desenvolvi habilidades fundamentais 
                em resolução de problemas e atenção aos detalhes. Hoje, aplico essa experiência 
                na área de Data & Analytics, transformando dados em insights estratégicos para negócios.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                  mb: 4,
                }}
              >
                Combine a precisão técnica com conhecimentos avançados em programação, 
                estatística e machine learning para entregar soluções que geram valor real.
              </Typography>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                Saiba Mais
              </Button>
            </Box>
          </Grid>

          {/* Cards de destaque */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {highlights.map((item, index) => (
                <Paper
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      transform: 'translateX(10px)',
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
                      {item.icon}
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
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPreview;
