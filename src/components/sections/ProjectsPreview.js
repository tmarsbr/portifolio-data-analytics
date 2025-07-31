import React, { useState } from 'react';
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
  Tabs,
  Tab,
  Fade,
} from '@mui/material';
import {
  ArrowForward,
  GitHub,
  Launch,
  TrendingUp,
  DataObject,
  Engineering,
  Analytics,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { projects } from '../../config/portfolio';

const ProjectsPreview = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Definir categorias com seus ícones e cores
  const categories = [
    {
      key: 'all',
      label: 'Todos os Projetos',
      icon: <DataObject />,
      color: theme.palette.primary.main,
      description: 'Veja todos os projetos em destaque'
    },
    {
      key: 'Análise Exploratória',
      label: 'Análise de Dados',
      icon: <Analytics />,
      color: '#2196f3',
      description: 'Projetos de análise exploratória e insights'
    },
    {
      key: 'Engenharia de Dados',
      label: 'Engenharia de Dados',
      icon: <Engineering />,
      color: '#4caf50',
      description: 'Pipelines, ETL e infraestrutura de dados'
    },
    {
      key: 'Análise Geoespacial',
      label: 'Ciência de Dados',
      icon: <DataObject />,
      color: '#ff9800',
      description: 'Machine learning e análise geoespacial'
    },
    {
      key: 'API & Web Scraping',
      label: 'API & Web Scraping',
      icon: <TrendingUp />,
      color: '#9c27b0',
      description: 'Extração e coleta de dados via APIs'
    }
  ];

  // Filtrar projetos por categoria
  const getFilteredProjects = (category) => {
    if (category === 'all') {
      return projects.filter(project => project.featured);
    }
    // Para categorias específicas, mostrar todos os projetos da categoria
    return projects.filter(project => project.category === category);
  };

  const filteredProjects = getFilteredProjects(selectedCategory);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

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
        <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
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

        {/* Filtros por categoria */}
        <Box sx={{ mb: 6 }} data-aos="fade-up" data-aos-delay="100">
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: 4,
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: 1.5,
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category.key}
                value={category.key}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {React.cloneElement(category.icon, {
                      sx: { 
                        fontSize: '1.2rem',
                        color: selectedCategory === category.key ? category.color : 'text.secondary'
                      }
                    })}
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: selectedCategory === category.key ? 600 : 400,
                        textTransform: 'none',
                      }}
                    >
                      {category.label}
                    </Typography>
                  </Box>
                }
                sx={{
                  minHeight: 48,
                  textTransform: 'none',
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    color: 'primary.main',
                  },
                }}
              />
            ))}
          </Tabs>

          {/* Descrição da categoria selecionada */}
          <Fade in={true} key={selectedCategory} timeout={300}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontStyle: 'italic',
                mb: 2,
              }}
            >
              {categories.find(cat => cat.key === selectedCategory)?.description}
            </Typography>
          </Fade>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={filteredProjects.length > 6 ? 3 : 4}
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Fade in={true} timeout={500}>
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
                    {project.date === "Em breve" && (
                      <Chip
                        label="Em Breve"
                        size="small"
                        sx={{
                          ml: 1,
                          backgroundColor: 'warning.main',
                          color: 'warning.contrastText',
                          fontSize: '0.7rem',
                          height: 20,
                        }}
                      />
                    )}
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
              </Fade>
            </Grid>
          ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography 
                  variant="h6" 
                  sx={{ color: 'text.secondary', mb: 2 }}
                >
                  Nenhum projeto encontrado nesta categoria
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: 'text.secondary' }}
                >
                  Tente selecionar uma categoria diferente ou visualize todos os projetos.
                </Typography>
              </Box>
            </Grid>
          )}
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
