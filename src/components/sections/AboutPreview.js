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
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';

const AboutPreview = () => {
  const theme = useTheme();
  const { darkMode } = useCustomTheme();

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
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
          : 'linear-gradient(to bottom, rgb(249, 250, 251) 0%, white 50%, rgb(241, 245, 249) 100%)',
        position: 'relative',
        borderTop: darkMode ? 'none' : '1px solid rgb(226, 232, 240)',
        transition: 'all 0.3s ease',
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
                Da Oficina para os{' '}
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
                  Dados
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
                Tudo começou com barulho de torno, cheiro de óleo e precisão milimétrica. 
                Na usinagem, aprendi que um erro de um décimo pode custar caro. Foi lá que 
                desenvolvi o olhar clínico, a paciência e o gosto por resolver problemas com método.
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
                Hoje, essa precisão virou código. Projeto pipelines, organizo dados brutos, 
                crio dashboards, desenvolvo modelos preditivos e conto histórias com dados reais. 
                Da engenharia à análise, passando pela ciência de dados, aplico o mesmo rigor 
                técnico que aprendi na mecânica para transformar números em decisões inteligentes.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                  mb: 4,
                  fontWeight: 500,
                }}
              >
                Tolerância apertada e processo confiável geram qualidade — em aço e em dados.
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
