import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Grid,
  Stack,
  Link as MuiLink,
  Tooltip,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Email,
  WhatsApp,
  Favorite,
  Code,
  Storage,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

import { personalInfo } from '../../config/portfolio';

/**
 * Footer - Rodapé do site
 *
 * Centraliza links de contato, redes sociais e créditos do portfólio.
 *
 * Funcionalidades:
 * - Links para redes sociais
 * - Ano corrente automático
 * - Mensagem personalizada sobre o portfólio
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer = () => {
  const { theme, darkMode } = useTheme();
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
      color: darkMode ? '#ffffff' : '#333333',
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
        background: darkMode 
          ? 'linear-gradient(to top, #0f172a 0%, #1e293b 100%)' 
          : 'linear-gradient(to top, #f8fafc 0%, #f1f5f9 100%)',
        color: 'text.primary',
        py: 8,
        mt: 'auto',
        borderTop: `1px solid ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Elemento decorativo de fundo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Coluna 1: Sobre */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Code color="primary" />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personalInfo.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: '300px' }}>
              Engenheiro de Dados focado em construir pipelines escaláveis e infraestrutura robusta na nuvem. Transformando dados brutos em valor estratégico.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((link) => (
                <Tooltip key={link.name} title={link.name} arrow>
                  <IconButton
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: link.color,
                        transform: 'translateY(-3px)',
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Grid>

          {/* Coluna 2: Links Rápidos */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight="bold" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Navegação
            </Typography>
            <Stack spacing={1}>
              {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <MuiLink
                  key={item}
                  component={Link}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`}
                  color="text.secondary"
                  underline="hover"
                  sx={{ 
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Coluna 3: Tech Stack */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight="bold" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Stack
            </Typography>
            <Stack spacing={1}>
              {['Python & SQL', 'Apache Airflow', 'AWS Cloud', 'dbt & Spark'].map((item) => (
                <Typography key={item} variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Coluna 4: Contato Rápido */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" color="text.primary" fontWeight="bold" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Vamos Conversar?
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Estou disponível para novas oportunidades e projetos desafiadores em Engenharia de Dados.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', mb: 1 }}>
              <Email fontSize="small" color="primary" />
              <Typography variant="body2">{personalInfo.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
              <Storage fontSize="small" color="primary" />
              <Typography variant="body2">São Paulo, SP</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {currentYear} {personalInfo.name}. Todos os direitos reservados.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              Desenvolvido com React & Material-UI
            </Typography>
            <Favorite sx={{ fontSize: 14, color: 'error.main' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;