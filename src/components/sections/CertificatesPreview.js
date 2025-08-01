/**
 * CertificatesPreview - Seção de prévia dos certificados
 * 
 * Componente que exibe uma prévia dos certificados e conquistas acadêmicas,
 * com funcionalidade de modal para visualização detalhada.
 * 
 * Funcionalidades:
 * - Exibe até 3 certificados na prévia
 * - Modal para visualização ampliada das imagens
 * - Download direto dos PDFs dos certificados
 * - Cards interativos com animações hover
 * - Chips de habilidades relacionadas
 * - Layout responsivo com grid adaptativo
 * 
 * @component
 * @example
 * return (
 *   <CertificatesPreview />
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
  Button,
} from '@mui/material';
import {
  Close,
  School,
  Verified,
  Download,
  Article,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { certificates } from '../../config/portfolio';
import { useTheme } from '../../contexts/ThemeContext';

const CertificatesPreview = () => {
  const { theme, darkMode } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f5f5f5'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23999'%3eCertificado%3c/text%3e%3c/svg%3e";

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  // Mostrar apenas alguns certificados na home
  const displayCertificates = certificates.slice(0, 3);

  if (certificates.length === 0) {
    return null; // Não renderiza a seção se não há certificados
  }

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
          : 'linear-gradient(to bottom, white 0%, rgb(248, 250, 252) 50%, rgb(241, 245, 249) 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: darkMode ? 'none' : '1px solid rgb(226, 232, 240)',
        transition: 'all 0.3s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: darkMode
            ? 'radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            Certificações
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
            Aprendizado{' '}
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
              Contínuo
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
            Certificações e cursos que complementam minha formação técnica 
            e demonstram o compromisso com o desenvolvimento profissional.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {displayCertificates.map((certificate, index) => (
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

        {/* Estatísticas de aprendizado */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            background: darkMode
              ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
            borderRadius: 3,
            textAlign: 'center',
            border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : theme.palette.divider}`,
            backdropFilter: 'blur(10px)',
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: 'text.primary',
            }}
          >
            Compromisso com o Aprendizado
          </Typography>

          <Grid container spacing={4}>
            {[
              { number: `${certificates.length}+`, label: 'Certificações Obtidas', icon: '🏆' },
              { number: '100+', label: 'Horas de Estudo', icon: '📚' },
              { number: '2+', label: 'Anos de Aprendizado', icon: '⏰' },
              { number: '∞', label: 'Busca por Conhecimento', icon: '🚀' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box>
                  <Typography variant="h3" sx={{ mb: 1, fontSize: '2rem' }}>
                    {stat.icon}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                      fontSize: { xs: '1.5rem', md: '2rem' },
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Botão Ver Todas as Certificações */}
        <Box
          sx={{
            mt: 6,
            textAlign: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Button
            component={Link}
            to="/certificacoes"
            variant="contained"
            size="large"
            startIcon={<Article />}
            sx={{
              px: 4,
              py: 2,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'none',
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              boxShadow: darkMode
                ? '0 8px 32px rgba(25, 118, 210, 0.15)'
                : '0 8px 32px rgba(0, 0, 0, 0.08)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: darkMode
                  ? '0 12px 40px rgba(25, 118, 210, 0.25)'
                  : '0 12px 40px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            📜 Ver Todas as Certificações
          </Button>
        </Box>
      </Container>

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
    </Box>
  );
};

export default CertificatesPreview;
