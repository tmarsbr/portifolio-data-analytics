/**
 * ContactSection - Seção de contato do portfólio
 * 
 * Componente que exibe as informações de contato e formas de comunicação,
 * organizadas em cartões interativos com links diretos.
 * 
 * Funcionalidades:
 * - Cartões de contato com hover effects
 * - Links diretos para email, LinkedIn, GitHub, WhatsApp
 * - Informações rápidas (localização, telefone)
 * - Indicador de disponibilidade para projetos
 * - Layout responsivo com grid adaptativo
 * 
 * @component
 * @example
 * return (
 *   <ContactSection />
 * )
 */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  WhatsApp,
  LocationOn,
  Phone,
} from '@mui/icons-material';

import { personalInfo } from '../../config/portfolio';
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';

const ContactSection = () => {
  const theme = useTheme();
  const { darkMode } = useCustomTheme();

  const contactMethods = [
    {
      icon: <Email />,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Envie um email direto',
      color: '#D14836',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: '/in/tiagodados',
      link: personalInfo.linkedin,
      description: 'Conecte-se comigo',
      color: '#0077B5',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: '@tmarsbr',
      link: personalInfo.github,
      description: 'Veja meus projetos',
      color: '#333333',
    },
    {
      icon: <WhatsApp />,
      title: 'WhatsApp',
      value: personalInfo.phone,
      link: personalInfo.whatsapp,
      description: 'Conversa rápida',
      color: '#25D366',
    },
  ];

  const quickInfo = [
    {
      icon: <LocationOn />,
      title: 'Localização',
      value: personalInfo.location,
    },
    {
      icon: <Phone />,
      title: 'Telefone',
      value: personalInfo.phone,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
          : 'linear-gradient(to bottom, rgb(248, 250, 252) 0%, white 50%, rgb(241, 245, 249) 100%)',
        position: 'relative',
        borderTop: darkMode ? 'none' : '1px solid rgb(226, 232, 240)',
        transition: 'all 0.3s ease',
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
            Entre em Contato
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
            Vamos Conversar sobre{' '}
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
            Estou sempre aberto para discussões sobre projetos, oportunidades 
            de colaboração ou apenas para trocar experiências na área de dados.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Métodos de contato */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {contactMethods.map((method, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Paper
                    component="a"
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textDecoration: 'none',
                      color: 'inherit',
                      border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : theme.palette.divider}`,
                      backgroundColor: darkMode ? 'rgba(39, 39, 42, 0.8)' : 'background.paper',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: darkMode 
                          ? `0 8px 25px rgba(${method.color === '#333333' ? '255, 255, 255' : method.color.replace('#', '')}, 0.15)`
                          : theme.shadows[8],
                        borderColor: method.color,
                        '& .contact-icon': {
                          backgroundColor: method.color,
                          color: 'white',
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        className="contact-icon"
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          backgroundColor: `${method.color}20`,
                          color: method.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 48,
                          height: 48,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {method.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            color: 'text.primary',
                          }}
                        >
                          {method.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 1,
                          }}
                        >
                          {method.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: method.color,
                            fontWeight: 500,
                            fontFamily: 'monospace',
                          }}
                        >
                          {method.value}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Informações adicionais */}
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-left" data-aos-delay="400">
              {/* Card de informações rápidas */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : theme.palette.divider}`,
                  backgroundColor: darkMode ? 'rgba(39, 39, 42, 0.8)' : 'grey.50',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Informações Rápidas
                </Typography>

                {quickInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 32,
                        height: 32,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Paper>

              {/* Disponibilidade */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: darkMode 
                    ? '1px solid rgba(34, 197, 94, 0.3)' 
                    : '1px solid rgba(34, 197, 94, 0.2)',
                  backgroundColor: darkMode 
                    ? 'rgba(39, 39, 42, 0.8)' 
                    : 'rgba(34, 197, 94, 0.05)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: darkMode 
                      ? '0 8px 25px rgba(34, 197, 94, 0.15)' 
                      : '0 8px 25px rgba(34, 197, 94, 0.1)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: darkMode ? '#22c55e' : '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  🟢 Disponível para Projetos
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.5,
                    color: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                  }}
                >
                  Abertura para freelance ou posições fixas em Data & Analytics.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
