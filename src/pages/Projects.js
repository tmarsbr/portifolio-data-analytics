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
  Modal,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
  GitHub,
  Launch,
  TrendingUp,
  Close,
} from '@mui/icons-material';

import { projects, personalInfo, PROJECT_SUBCATEGORIES } from '../config/portfolio';
import CategoryPills from '../components/common/CategoryPills';
import SubCategoryPills from '../components/common/SubCategoryPills';
import { useProjectFilter } from '../hooks/useProjectFilter';

/**
 * Projects - Portfólio de projetos
 *
 * Lista projetos desenvolvidos com filtros e detalhes em modal.
 *
 * Funcionalidades:
 * - Filtro por categoria e busca por texto
 * - Visualização de detalhes em modal com links
 * - Integração com dados do portfolio
 *
 * @component
 * @example
 * return (
 *   <Projects />
 * )
 */
const Projects = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState('Todos');

  const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f5f5f5'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23999'%3eImagem do Projeto%3c/text%3e%3c/svg%3e";

  // Lista de categorias para os pills
  const categories = ['Todos', 'Análise de Dados', 'Engenharia de Dados', 'Ciência de Dados', 'API & Scraping'];

  // Usar hook para filtrar projetos
  const { filtered: filteredProjects, count, total } = useProjectFilter(
    projects,
    categoryFilter === 'all' ? 'Todos' : categoryFilter,
    subcategoryFilter
  );

  // Função para lidar com mudança de categoria
  const handleCategoryChange = (newCategory) => {
    setCategoryFilter(newCategory);
    setSubcategoryFilter('Todos'); // Resetar subcategoria ao mudar categoria
  };

  // Função para abrir modal do projeto
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Projetos - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Explore os projetos de Data & Analytics de ${personalInfo.name}. Soluções em Python, Machine Learning, análise de dados e visualização.`} />
        <meta property="og:title" content={`Projetos de Data & Analytics - ${personalInfo.name}`} />
        <meta property="og:description" content="Portfólio completo de projetos em Data Science, Machine Learning e análise de dados com tecnologias modernas." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
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
              Portfólio Completo
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Projetos em{' '}
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
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Cada projeto representa uma solução completa para problemas reais de negócio, 
              desde a coleta e processamento de dados até insights acionáveis e implementação.
            </Typography>

            {/* Estatísticas */}
            <Grid container spacing={4} sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
              {[
                { number: projects.length, label: 'Projetos Completos' },
                { number: categories.length - 1, label: 'Categorias' },
                { number: '10+', label: 'Tecnologias' },
              ].map((stat, index) => (
                <Grid item xs={4} key={index}>
                  <Typography
                    variant="h4"
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

      {/* Filtros e Busca */}
      <Box
        sx={{
          py: 4,
          backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
          borderBottom: `1px solid ${theme.palette.divider}`,
          borderRadius: { xs: 0, md: '0.5rem' },
          boxShadow: theme.palette.mode === 'dark' 
            ? '0 1px 3px rgba(0,0,0,0.3)' 
            : '0 1px 2px rgba(0,0,0,0.05)',
          mx: { xs: 0, md: 2 },
          my: { xs: 0, md: 2 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              alignItems: { xs: 'stretch', md: 'center' },
            }}
          >
          </Box>

          {/* Pills de categoria */}
          <CategoryPills
            categories={categories}
            active={categoryFilter}
            onChange={handleCategoryChange}
          />

          {/* Pills de subcategoria */}
          {categoryFilter !== 'all' && (
            <SubCategoryPills
              subcategories={PROJECT_SUBCATEGORIES[categoryFilter] || []}
              active={subcategoryFilter}
              onChange={setSubcategoryFilter}
            />
          )}

          {/* Contador de resultados */}
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: theme.palette.mode === 'dark' ? '#94a3b8' : 'text.secondary',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {count === total
              ? `Mostrando todos os ${total} projetos`
              : `${count} de ${total} projetos encontrados`
            }
          </Typography>
        </Container>
      </Box>

      {/* Grid de Projetos */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          {filteredProjects.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Nenhum projeto encontrado
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                Tente ajustar os filtros ou termos de busca
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setCategoryFilter('all');
                  setSubcategoryFilter('Todos');
                }}
              >
                Limpar Filtros
              </Button>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredProjects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
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
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[12],
                        '& .project-image': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Imagem do projeto */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: 220,
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

                      {/* Badge de destaque */}
                      {project.featured && (
                        <Chip
                          label="⭐ Destaque"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      )}
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
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
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
                        {project.technologies.length > 4 && (
                          <Chip
                            label={`+${project.technologies.length - 4}`}
                            size="small"
                            sx={{
                              backgroundColor: 'grey.200',
                              color: 'text.secondary',
                              fontSize: '0.75rem',
                            }}
                          />
                        )}
                      </Box>

                      {/* Footer com data e links */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {project.date}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {project.github && (
                            <IconButton
                              component="a"
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              onClick={(e) => e.stopPropagation()}
                              sx={{
                                color: 'text.secondary',
                                '&:hover': {
                                  color: 'primary.main',
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
                              onClick={(e) => e.stopPropagation()}
                              sx={{
                                color: 'text.secondary',
                                '&:hover': {
                                  color: 'primary.main',
                                },
                              }}
                            >
                              <Launch fontSize="small" />
                            </IconButton>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Modal de detalhes do projeto */}
      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            p: 0,
            maxWidth: 800,
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            width: '100%',
          }}
        >
          {selectedProject && (
            <>
              {/* Header do modal */}
              <Box
                sx={{
                  p: 3,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {selectedProject.title}
                  </Typography>
                  <Chip
                    label={selectedProject.category}
                    size="small"
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                </Box>
                <IconButton onClick={handleCloseModal} aria-label="Fechar">
                  <Close />
                </IconButton>
              </Box>

              {/* Conteúdo do modal */}
              <Box sx={{ p: 3 }}>
                {/* Imagem */}
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <img
                    src={selectedProject.image || placeholderImage}
                    alt={selectedProject.title}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 8,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  />
                </Box>

                {/* Descrição detalhada */}
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  {selectedProject.longDescription || selectedProject.description}
                </Typography>

                {/* Métricas */}
                {selectedProject.metrics && (
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'success.main',
                      borderRadius: 2,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <TrendingUp sx={{ color: 'white', fontSize: 24 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                      }}
                    >
                      {selectedProject.metrics}
                    </Typography>
                  </Box>
                )}

                {/* Tecnologias */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                    }}
                  >
                    Tecnologias Utilizadas
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Links */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {selectedProject.github && (
                    <Button
                      component="a"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<GitHub />}
                    >
                      Ver Código
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      component="a"
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<Launch />}
                    >
                      Ver Demo
                    </Button>
                  )}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Projects;
