/**
 * Certificacoes - Página completa de certificações e cursos
 * 
 * Página dedicada para exibir todas as certificações e cursos concluídos,
 * com filtros por categoria, lightbox para imagens e layout responsivo.
 * 
 * Funcionalidades:
 * - Lista completa de certificações
 * - Filtro por categoria e busca
 * - Modal/Lightbox para visualização das imagens
 * - Download direto dos PDFs
 * - Design consistente com dark mode
 * - Layout responsivo (2 colunas mobile, 3 desktop)
 * - Hover effects nos cards
 * 
 * @component
 * @example
 * return (
 *   <Certificacoes />
 * )
 */

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
  Modal,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  Button,
  Fade,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
  Close,
  School,
  Verified,
  Download,
  Search,
  AccessTime,
  ZoomIn,
} from '@mui/icons-material';

import { certificates, personalInfo } from '../config/portfolio';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';

/**
 * Certificacoes - Página de certificações completa
 */
const Certificacoes = () => {
  const theme = useTheme();
  const { darkMode } = useCustomTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Categorias extraídas das skills dos certificados
  const categories = ['all', ...new Set(
    certificates.flatMap(cert => cert.skills || [])
      .filter(skill => skill)
      .sort()
  )];

  // Filtrar certificados
  const filteredCertificates = certificates.filter(certificate => {
    const matchesSearch = 
      certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      certificate.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (certificate.skills && certificate.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    
    const matchesCategory = categoryFilter === 'all' || 
      (certificate.skills && certificate.skills.includes(categoryFilter));
    
    return matchesSearch && matchesCategory;
  });

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <Helmet>
        <title>Todas as Certificações e Cursos Concluídos - {personalInfo.name} | Data & Analytics</title>
        <meta name="description" content={`Todas as certificações e cursos de ${personalInfo.name} em Data Science, Machine Learning e tecnologias relacionadas.`} />
        <meta property="og:title" content={`Certificações - ${personalInfo.name}`} />
        <meta property="og:description" content="Lista completa de certificações e cursos em Data & Analytics, Machine Learning e tecnologias modernas." />
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
              Formação Acadêmica
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
              Todas as{' '}
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
                Certificações e Cursos Concluídos
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
              Jornada de aprendizado contínuo com cursos e certificações que fundamentam 
              minha expertise em Data & Analytics, demonstrando compromisso com a excelência técnica.
            </Typography>

            {/* Estatísticas */}
            <Grid container spacing={4} sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
              {[
                { number: certificates.length, label: 'Certificações' },
                { number: categories.length - 1, label: 'Áreas de Estudo' },
                { number: '2+', label: 'Anos de Formação' },
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
            {/* Busca */}
            <TextField
              placeholder="Buscar certificações, instituições..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: 400 },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === 'dark' ? '#334155' : 'background.paper',
                  color: theme.palette.mode === 'dark' ? '#f8fafc' : 'text.primary',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? '#475569' : theme.palette.divider,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? '#64748b' : theme.palette.primary.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: theme.palette.mode === 'dark' ? '#94a3b8' : 'text.secondary',
                  opacity: 1,
                },
              }}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: theme.palette.mode === 'dark' ? '#94a3b8' : 'text.secondary' }} />,
              }}
            />

            {/* Filtro de categoria */}
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel 
                sx={{ 
                  color: theme.palette.mode === 'dark' ? '#94a3b8' : 'text.secondary',
                  '&.Mui-focused': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Área de Estudo
              </InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                label="Área de Estudo"
                sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? '#334155' : 'background.paper',
                  color: theme.palette.mode === 'dark' ? '#f8fafc' : 'text.primary',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'dark' ? '#475569' : theme.palette.divider,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.mode === 'dark' ? '#64748b' : theme.palette.primary.main,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                  '& .MuiSvgIcon-root': {
                    color: theme.palette.mode === 'dark' ? '#94a3b8' : 'text.secondary',
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: theme.palette.mode === 'dark' ? '#334155' : 'background.paper',
                      '& .MuiMenuItem-root': {
                        color: theme.palette.mode === 'dark' ? '#f8fafc' : 'text.primary',
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#475569' : 'action.hover',
                        },
                        '&.Mui-selected': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#475569' : 'action.selected',
                          '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? '#64748b' : 'action.selected',
                          },
                        },
                      },
                    },
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category === 'all' ? 'Todas as Áreas' : category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

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
            {filteredCertificates.length === certificates.length
              ? `Mostrando todas as ${certificates.length} certificações`
              : `${filteredCertificates.length} de ${certificates.length} certificações encontradas`
            }
          </Typography>
        </Container>
      </Box>

      {/* Grid de Certificações */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          {filteredCertificates.length === 0 ? (
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
                Nenhuma certificação encontrada
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
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredCertificates.map((certificate, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={certificate.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      background: darkMode
                        ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : theme.palette.divider}`,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: darkMode
                          ? '0 8px 32px rgba(25, 118, 210, 0.15)'
                          : '0 8px 32px rgba(0, 0, 0, 0.08)',
                        borderColor: 'primary.main',
                        '& .certificate-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .zoom-icon': {
                          opacity: 1,
                        },
                      },
                    }}
                    onClick={() => handleCertificateClick(certificate)}
                  >
                    {/* Imagem do Certificado */}
                    {certificate.image ? (
                      <CardMedia
                        component="img"
                        className="certificate-image"
                        sx={{
                          height: 200,
                          maxHeight: 300,
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          backgroundColor: darkMode ? '#1e293b' : '#f8fafc',
                        }}
                        image={certificate.image}
                        alt={`Certificado de ${certificate.title}`}
                      />
                    ) : (
                      <Box
                        sx={{
                          height: 200,
                          backgroundColor: darkMode ? '#334155' : '#e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          gap: 2,
                        }}
                      >
                        <School sx={{ fontSize: 48, color: 'primary.main', opacity: 0.7 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            textAlign: 'center',
                            px: 2,
                          }}
                        >
                          Certificado
                        </Typography>
                      </Box>
                    )}

                    {/* Ícone de zoom para indicar que pode clicar */}
                    <Box 
                      className="zoom-icon"
                      sx={{ 
                        position: 'absolute', 
                        top: 8, 
                        right: 8,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <IconButton 
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                          },
                        }}
                      >
                        <ZoomIn sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Box>

                    <CardContent sx={{ p: 3, flex: 1 }}>
                      {/* Título do certificado */}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'text.primary',
                          lineHeight: 1.3,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {certificate.title}
                      </Typography>

                      {/* Instituição */}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {certificate.institution}
                      </Typography>

                      {/* Informações adicionais */}
                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip
                          label={certificate.year}
                          size="small"
                          icon={<Verified sx={{ fontSize: 16 }} />}
                          sx={{
                            backgroundColor: darkMode ? 'rgba(76, 175, 80, 0.2)' : 'success.light',
                            color: darkMode ? 'success.light' : 'success.dark',
                            fontWeight: 600,
                          }}
                        />
                        {certificate.duration && (
                          <Chip
                            label={certificate.duration}
                            size="small"
                            icon={<AccessTime sx={{ fontSize: 16 }} />}
                            sx={{
                              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'grey.200',
                              color: 'text.secondary',
                              fontWeight: 600,
                            }}
                          />
                        )}
                      </Box>

                      {/* Skills relacionadas */}
                      {certificate.skills && certificate.skills.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'divider',
                                color: 'text.secondary',
                                fontSize: '0.7rem',
                                '&:hover': {
                                  borderColor: 'primary.main',
                                  color: 'primary.main',
                                },
                              }}
                            />
                          ))}
                          {certificate.skills.length > 3 && (
                            <Chip
                              label={`+${certificate.skills.length - 3}`}
                              size="small"
                              sx={{
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'grey.200',
                                color: 'text.secondary',
                                fontSize: '0.7rem',
                              }}
                            />
                          )}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Modal para visualizar certificado */}
      <Modal
        open={!!selectedCertificate}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Fade in={!!selectedCertificate}>
          <Box
            sx={{
              background: darkMode
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)'
                : 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(226, 232, 240, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              boxShadow: darkMode
                ? '0 25px 50px rgba(0, 0, 0, 0.5)'
                : '0 25px 50px rgba(0, 0, 0, 0.15)',
              border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              outline: 'none',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            {selectedCertificate && (
              <>
                {/* Botão fechar */}
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    zIndex: 10,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Imagem do certificado em destaque */}
                {selectedCertificate.image && (
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 800,
                      backgroundColor: darkMode ? '#1e293b' : '#f8fafc',
                      borderRadius: '16px 16px 0 0',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={selectedCertificate.image}
                      alt={`Certificado de ${selectedCertificate.title}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '60vh',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </Box>
                )}

                {/* Informações do certificado */}
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                    <School
                      sx={{
                        fontSize: 32,
                        color: 'primary.main',
                        mt: 0.5,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 1,
                          lineHeight: 1.2,
                        }}
                      >
                        {selectedCertificate.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {selectedCertificate.institution}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Informações adicionais */}
                  <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<Verified />}
                      label={`Concluído em ${selectedCertificate.year}`}
                      sx={{
                        backgroundColor: darkMode ? 'rgba(76, 175, 80, 0.2)' : 'success.light',
                        color: darkMode ? 'success.light' : 'success.dark',
                        fontWeight: 600,
                      }}
                    />
                    {selectedCertificate.duration && (
                      <Chip
                        icon={<AccessTime />}
                        label={selectedCertificate.duration}
                        sx={{
                          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'grey.200',
                          color: 'text.secondary',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>

                  {/* Skills e competências */}
                  {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 2,
                        }}
                      >
                        Competências Desenvolvidas:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedCertificate.skills.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              '&:hover': {
                                backgroundColor: darkMode 
                                  ? 'rgba(25, 118, 210, 0.1)' 
                                  : 'rgba(25, 118, 210, 0.05)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* Botão de download se disponível */}
                  {selectedCertificate.pdf && (
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      onClick={() => window.open(selectedCertificate.pdf, '_blank')}
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        color: 'white',
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
                        },
                      }}
                    >
                      Baixar Certificado PDF
                    </Button>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Certificacoes;
