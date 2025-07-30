import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  WhatsApp,
  Favorite,
} from '@mui/icons-material';

import { personalInfo } from '../../config/portfolio';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: <LinkedIn />,
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: <GitHub />,
      color: '#333333',
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: <Email />,
      color: '#D14836',
    },
    {
      name: 'WhatsApp',
      url: personalInfo.whatsapp,
      icon: <WhatsApp />,
      color: '#25D366',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Informações principais */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {personalInfo.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'grey.300', mb: 1 }}>
              {personalInfo.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              {personalInfo.location}
            </Typography>
          </Box>

          {/* Links sociais */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: 'center',
                mb: 2,
                color: 'grey.300',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Conecte-se comigo
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {socialLinks.map((link) => (
                <IconButton
                  key={link.name}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Acesse meu ${link.name}`}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: link.color,
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 25px ${link.color}40`,
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, backgroundColor: 'grey.700' }} />

        {/* Copyright e créditos */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'grey.400',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {currentYear} {personalInfo.fullName}. Todos os direitos reservados.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'grey.400',
              textAlign: { xs: 'center', sm: 'right' },
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            Desenvolvido com{' '}
            <Favorite sx={{ fontSize: 16, color: theme.palette.secondary.main }} />{' '}
            usando React & Material-UI
          </Typography>
        </Box>

        {/* Links úteis */}
        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: `1px solid ${theme.palette.grey[700]}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="caption" sx={{ color: 'grey.500', lineHeight: 1.6 }}>
            Este portfólio foi desenvolvido para demonstrar habilidades em Data & Analytics.
            <br />
            Todos os projetos e dados apresentados são para fins educacionais e profissionais.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
