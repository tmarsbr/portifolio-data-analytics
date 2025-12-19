import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Link,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Storage,
  Cloud,
  Terminal,
  Favorite,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { personalInfo } from '../../config/portfolio';
import VisitorCounter from './VisitorCounter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { name: 'Python', icon: <Code fontSize="small" /> },
    { name: 'Airflow', icon: <Storage fontSize="small" /> },
    { name: 'AWS', icon: <Cloud fontSize="small" /> },
    { name: 'SQL', icon: <Terminal fontSize="small" /> },
  ];

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Certificações', path: '/certificacoes' },
    { name: 'Contato', path: '/contato' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub />,
      url: personalInfo.social?.github || 'https://github.com/tmarsbr',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: personalInfo.social?.linkedin || 'https://linkedin.com/in/tmarsbr',
    },
    {
      name: 'Email',
      icon: <Email />,
      url: `mailto:${personalInfo.email || 'contato@exemplo.com'}`,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)'
            : 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.03) 100%)',
        borderTop: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(255,255,255,0.05)'
            : 'rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Coluna 1: Sobre */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                gutterBottom
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personalInfo.name || 'Tiago Mars'}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Engenheiro de Dados Junior focado em construir pipelines
                robustos e escaláveis.
              </Typography>
              {/* Contador de Visitas */}
              <VisitorCounter />
            </motion.div>
          </Grid>

          {/* Coluna 2: Navegação */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                color="text.primary"
              >
                Navegação
              </Typography>
              <Stack spacing={1}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    component={RouterLink}
                    to={link.path}
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Coluna 3: Tech Stack */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                color="text.primary"
              >
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {techStack.map((tech) => (
                  <Chip
                    key={tech.name}
                    icon={tech.icon}
                    label={tech.name}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.75rem',
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.15)',
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Coluna 4: Social */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                color="text.primary"
              >
                Conecte-se
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid',
                      borderColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            my: 4,
            borderColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.05)'
                : 'rgba(0,0,0,0.08)',
          }}
        />

        {/* Copyright */}
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
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            © {currentYear} {personalInfo.name || 'Tiago Mars'}. Feito com
            <Favorite sx={{ fontSize: 14, color: 'error.main', mx: 0.5 }} />
            usando React & Material-UI
          </Typography>
          <Typography variant="caption" color="text.disabled">
            Engenheiro de Dados Junior • São Paulo, Brasil
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;