/**
 * HeroSection Component
 * 
 * Componente principal da página inicial que apresenta o profissional
 * de forma impactante, incluindo animações e call-to-actions.
 * 
 * Features:
 * - Animações sequenciais para melhor engagement
 * - Design responsivo para todos os dispositivos
 * - Ícones animados em background para contexto visual
 * - Links diretos para projetos e contato
 * 
 * @component
 * @example
 * return (
 *   <HeroSection />
 * )
 */

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Download,
  ArrowForward,
  Analytics,
  Code,
  TrendingUp,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { personalInfo } from '../../config/portfolio';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Estado para controlar as animações sequenciais
  const [animationPhase, setAnimationPhase] = useState(0);

  /**
   * Configura animações sequenciais dos elementos da hero section
   * Cada fase é ativada com delay específico para criar fluidez visual
   */
  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationPhase(1), 200),   // Avatar/Nome
      setTimeout(() => setAnimationPhase(2), 600),   // Título/Descrição  
      setTimeout(() => setAnimationPhase(3), 1000),  // Botões
      setTimeout(() => setAnimationPhase(4), 1400),  // Estatísticas
    ];

    // Cleanup dos timers ao desmontar componente
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const iconStyle = {
    fontSize: { xs: 40, md: 60 },
    color: 'primary.main',
    opacity: 0.8,
  };

  const backgroundIcons = [
    { icon: <Analytics sx={iconStyle} />, top: '15%', left: '10%' },
    { icon: <Code sx={iconStyle} />, top: '25%', right: '15%' },
    { icon: <TrendingUp sx={iconStyle} />, bottom: '20%', left: '8%' },
    { icon: <Analytics sx={iconStyle} />, bottom: '30%', right: '12%' },
  ];

  return (
    <Box
      className="hero-section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default} 0%, 
          ${theme.palette.grey[50]} 100%)`,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main}08 0%, transparent 50%)`,
          zIndex: 0,
        },
      }}
    >
      {/* Ícones decorativos de fundo */}
      {/* {backgroundIcons.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            ...item,
            animation: 'float 6s ease-in-out infinite',
            animationDelay: `${index * 0.5}s`,
            opacity: 0.1,
            zIndex: 0,
          }}
        >
          {item.icon}
        </Box>
      ))} */}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Conteúdo principal */}
          <Box
            sx={{
              flex: 1,
              transform: animationPhase >= 1 ? 'translateY(0)' : 'translateY(50px)',
              opacity: animationPhase >= 1 ? 1 : 0,
              transition: 'all 0.8s ease-out',
            }}
          >
            {/* Chip de saudação */}
            <Chip
              label="👋 Olá, seja bem-vindo(a)!"
              variant="outlined"
              sx={{
                mb: 3,
                py: 1,
                px: 2,
                borderRadius: 25,
                borderColor: 'primary.main',
                color: 'primary.main',
                fontWeight: 500,
                animation: animationPhase >= 2 ? 'pulse 2s infinite' : 'none',
              }}
            />

            {/* Nome e título */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {personalInfo.name}
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 400,
                color: 'text.primary',
                mb: 3,
                opacity: animationPhase >= 2 ? 1 : 0,
                transform: animationPhase >= 2 ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              {personalInfo.title}
            </Typography>

            {/* Descrição */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                color: 'text.secondary',
                mb: 4,
                maxWidth: '600px',
                opacity: animationPhase >= 3 ? 1 : 0,
                transform: animationPhase >= 3 ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.4s',
              }}
            >
              {personalInfo.homeIntro}
            </Typography>

            {/* Botões de ação */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                opacity: animationPhase >= 4 ? 1 : 0,
                transform: animationPhase >= 4 ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.6s',
              }}
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
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  textTransform: 'none',
                  fontWeight: 600,
                  minWidth: { xs: '100%', sm: 'auto' },
                }}
              >
                Ver Projetos
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Download />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderWidth: 2,
                  minWidth: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
                onClick={() => {
                  // Aqui você pode adicionar o link para download do CV
                  window.open(personalInfo.email, '_blank');
                }}
              >
                Baixar CV
              </Button>
            </Box>

            {/* Estatísticas rápidas */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                mt: 6,
                pt: 4,
                borderTop: `1px solid ${theme.palette.divider}`,
              }}
            >
              {[
                { number: '9+', label: 'Projetos Completos' },
                { number: '5+', label: 'Anos de Experiência' },
                { number: '10+', label: 'Tecnologias Dominadas' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: { xs: 'center', sm: 'left' },
                    opacity: animationPhase >= 4 ? 1 : 0,
                    transform: animationPhase >= 4 ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.8s ease-out ${0.8 + index * 0.1}s`,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      lineHeight: 1,
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
              ))}
            </Box>
          </Box>

          {/* Avatar/Imagem */}
          <Box
            sx={{
              order: { xs: -1, md: 1 },
              opacity: animationPhase >= 1 ? 1 : 0,
              transform: animationPhase >= 1 ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.8s ease-out 0.3s',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Círculos decorativos */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 280, md: 350 },
                  height: { xs: 280, md: 350 },
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                  animation: 'float 4s ease-in-out infinite',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 240, md: 300 },
                  height: { xs: 240, md: 300 },
                  borderRadius: '50%',
                  border: `2px solid ${theme.palette.primary.main}30`,
                  animation: 'float 4s ease-in-out infinite reverse',
                }}
              />

              {/* Avatar */}
              <Avatar
                src={personalInfo.avatar || undefined}
                alt={personalInfo.name}
                sx={{
                  width: { xs: 200, md: 250 },
                  height: { xs: 200, md: 250 },
                  border: `4px solid ${theme.palette.background.paper}`,
                  boxShadow: theme.shadows[8],
                  backgroundColor: personalInfo.avatar ? 'transparent' : 'primary.main',
                  fontSize: { xs: '4rem', md: '5rem' },
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {!personalInfo.avatar && personalInfo.name.charAt(0)}
              </Avatar>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
