import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
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

const ContactSection = () => {
  const theme = useTheme();

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
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: 'background.paper',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[8],
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
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: 'grey.50',
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
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: 'success.main',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  🟢 Disponível para Projetos
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.9,
                    lineHeight: 1.5,
                    color: 'info.main',
                  }}
                >
                  Estou aberto para oportunidades em Data & Analytics, 
                  tanto para projetos freelance quanto posições fixas.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Call to action final */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: 'grey.50',
            borderRadius: 3,
            textAlign: 'center',
            border: `1px solid ${theme.palette.divider}`,
          }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Pronto para Transformar Dados em Insights?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            Vamos discutir como posso ajudar seu negócio a tomar decisões mais 
            inteligentes baseadas em dados. Entre em contato e vamos conversar!
          </Typography>

          {/* Botões sociais rápidos */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {contactMethods.slice(0, 3).map((method, index) => (
              <IconButton
                key={index}
                component="a"
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contato via ${method.title}`}
                sx={{
                  backgroundColor: method.color,
                  color: 'white',
                  width: 48,
                  height: 48,
                  '&:hover': {
                    backgroundColor: method.color,
                    transform: 'scale(1.1)',
                    boxShadow: `0 8px 25px ${method.color}40`,
                  },
                }}
              >
                {method.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
