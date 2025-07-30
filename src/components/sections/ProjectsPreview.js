import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  ArrowForward,
  GitHub,
  Launch,
  TrendingUp,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { projects } from '../../config/portfolio';

const ProjectsPreview = () => {
  const theme = useTheme();
  
  // Pegar apenas os projetos em destaque para a home
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f5f5f5'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23999'%3eImagem do Projeto%3c/text%3e%3c/svg%3e";

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
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
            Projetos em Destaque
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: 'text.primary',
            }}
          >
            Soluções em{' '}
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
              Data & Analytics
            </Typography>
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
            Projetos práticos que demonstram aplicação de técnicas avançadas 
            de análise de dados para resolver problemas reais de negócio.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                    '& .project-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                {/* Imagem do projeto */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden',
                    backgroundColor: 'grey.100',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image || placeholderImage}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  
                  {/* Overlay com ações */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '.MuiCard-root:hover &': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
                      {project.github && (
                        <IconButton
                          component="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            color: 'text.primary',
                            '&:hover': {
                              backgroundColor: 'white',
                            },
                          }}
                        >
                          <GitHub fontSize="small" />
                        </IconButton>
                      )}
                      {project.demo && (
                        <IconButton
                          component="a"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            color: 'text.primary',
                            '&:hover': {
                              backgroundColor: 'white',
                            },
                          }}
                        >
                          <Launch fontSize="small" />
                        </IconButton>
                      )}
                    </Box>
                  </Box>

                  {/* Chip de categoria */}
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                  }}
                >
                  {/* Título */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Descrição */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Métricas/Resultados */}
                  {project.metrics && (
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: 'success.main',
                        borderRadius: 2,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <TrendingUp sx={{ color: 'white', fontSize: 20 }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                        }}
                      >
                        {project.metrics}
                      </Typography>
                    </Box>
                  )}

                  {/* Tecnologias */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'divider',
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        sx={{
                          backgroundColor: 'grey.200',
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                        }}
                      />
                    )}
                  </Box>

                  {/* Data */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {project.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Botão para ver todos os projetos */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            Ver Todos os Projetos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPreview;
