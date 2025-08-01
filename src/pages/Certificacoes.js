/**
 * Certificacoes - Página completa de certificações e cursos
 * 
 * Página dedicada para exibir todas as certificações e cursos concluídos,
 * com filtros por categoria e layout responsivo.
 * 
 * Funcionalidades:
 * - Lista completa de certificações
 * - Filtro por categoria
 * - Modal para visualização detalhada
 * - Download direto dos PDFs
 * - Design consistente com dark mode
 * - Layout responsivo
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
  Chip,
  Modal,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
  Close,
  School,
  Verified,
  Download,
  Search,
  FilterList,
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

  const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f5f5f5'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23999'%3eCertificado%3c/text%3e%3c/svg%3e";

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
        <title>Certificações - {personalInfo.name} | Data & Analytics</title>
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
                Certificações
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
                      },
                    }}
                    onClick={() => handleCertificateClick(certificate)}
                  >
                    {/* Header com ícone */}
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative',
                      }}
                    >
                      <School sx={{ fontSize: 40, mb: 1 }} />
                      <Verified
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          color: 'success.light',
                        }}
                      />
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

                      {/* Ano */}
                      <Chip
                        label={certificate.year}
                        size="small"
                        sx={{
                          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'grey.200',
                          color: 'text.secondary',
                          fontWeight: 600,
                          mb: 3,
                        }}
                      />

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
        <Box
          sx={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : theme.palette.divider}`,
            borderRadius: 3,
            boxShadow: 24,
            p: 0,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {selectedCertificate && (
            <>
              {/* Header do modal */}
              <Box
                sx={{
                  p: 3,
                  borderBottom: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : theme.palette.divider}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {selectedCertificate.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    {selectedCertificate.institution} - {selectedCertificate.year}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {selectedCertificate.pdf && (
                    <IconButton
                      component="a"
                      href={selectedCertificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download PDF"
                    >
                      <Download />
                    </IconButton>
                  )}
                  <IconButton onClick={handleCloseModal} aria-label="Fechar">
                    <Close />
                  </IconButton>
                </Box>
              </Box>

              {/* Conteúdo do modal */}
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <img
                  src={selectedCertificate.image || placeholderImage}
                  alt={selectedCertificate.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    borderRadius: 8,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Certificacoes;
