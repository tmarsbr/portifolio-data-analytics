/**
 * HeroSection aprimorada - Seção principal moderna e impactante
 * 
 * Melhorias implementadas:
 * - Animações fluidas e coordenadas
 * - Efeito de digitação (typing) no texto principal
 * - Avatar com animação de hover
 * - Background com gradiente dinâmico
 * - Particles animadas para efeito visual
 * - Botões com micro-interações
 * - Layout otimizado para diferentes telas
 */

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Chip,
  Grid,
  Stack,
} from '@mui/material';
import {
  ArrowForward,
  GitHub,
  LinkedIn,
  Email,
  Download,
  CloudQueue,
  BuildCircle,
  Sync,
  DeviceHub,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

import { personalInfo } from '../../config/portfolio';

// Componente para efeito de digitação
const TypewriterEffect = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const baseSpeed = 50; // velocidade inicial em ms
      const minSpeed = 30; // velocidade mínima em ms
      const letterDelay =
        currentIndex === 0
          ? delay
          : Math.max(minSpeed, baseSpeed - currentIndex * 2); // leve aceleração

      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, letterDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ 
          duration: 0.6, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        style={{ 
          color: 'currentColor',
          fontSize: '1em',
          fontWeight: 'bold',
          marginLeft: '2px',
          display: 'inline-block'
        }}
      >
        |
      </motion.span>
    </span>
  );
};

// Componente para efeito pisca-pisca (texto completo)
const BlinkingText = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <motion.span
      animate={{ 
        opacity: [1, 0.1, 1, 0.1, 1],
        scale: [1, 0.98, 1, 0.98, 1]
      }}
      transition={{ 
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5
      }}
      style={{
        display: 'inline-block'
      }}
    >
      {text}
    </motion.span>
  );
};

// Componente para partículas flutuantes
const FloatingParticles = () => {
  const { darkMode } = useTheme();
  
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="particle"
      initial={{ 
        opacity: 0,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        opacity: [0, 1, 0],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: 'absolute',
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        backgroundColor: darkMode ? '#64b5f6' : '#1565c0',
        borderRadius: '50%',
        zIndex: 1,
      }}
    />
  ));

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {particles}
    </Box>
  );
};

const HeroSection = () => {
  const { darkMode } = useTheme();
  const [animationStarted, setAnimationStarted] = useState(false);

  // Primeira linha de especialidades - Ciência de Dados e Análise
  const specialtiesLine1 = [
    { label: 'Data Science', icon: '📊' },
    { label: 'Python', icon: '🐍' },
    { label: 'Machine Learning', icon: '🤖' },
    { label: 'SQL', icon: '🗃️' },
    { label: 'Estatística', icon: '📈' },
  ];

  // Segunda linha de especialidades — Engenharia de Dados (Home)
  const specialtiesLine2 = [
    { label: 'IaC', icon: <DeviceHub /> },
    { label: 'CI/CD', icon: <BuildCircle /> },
    { label: 'ETL/ELT', icon: <Sync /> },
    { label: 'Cloud AWS', icon: <CloudQueue /> },
    { label: 'DataOps', icon: '' },
  ];

  // Iniciar animações
  useEffect(() => {
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        background: darkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 0 },
        overflow: 'hidden',
      }}
    >
      {/* Partículas flutuantes */}
      <FloatingParticles />

      {/* Background decorativo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: darkMode
            ? `radial-gradient(circle at 20% 50%, rgba(100, 181, 246, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(77, 208, 225, 0.1) 0%, transparent 50%)`
            : `radial-gradient(circle at 20% 50%, rgba(21, 101, 192, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(0, 137, 123, 0.1) 0%, transparent 50%)`,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Coluna do texto principal */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Stack spacing={2}>
                {/* Saudação */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: darkMode 
                        ? 'rgba(100, 181, 246, 0.9)' 
                        : 'rgba(21, 101, 192, 0.9)',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {animationStarted && (
                      <BlinkingText 
                        text="👋 Olá, seja bem-vindo(a) ao meu portifolio!" 
                        delay={200}
                      />
                    )}
                  </Typography>
                </motion.div>

                {/* Nome */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      background: darkMode
                        ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)'
                        : 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      mb: 0.5,
                    }}
                  >
                    {personalInfo.name}
                  </Typography>
                </motion.div>

                {/* Texto animado */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 600,
                      color: darkMode ? '#94a3b8' : '#475569',
                      minHeight: '3rem',
                    }}
                  >
                    {animationStarted && (
                      <TypewriterEffect 
                        text={personalInfo.title} 
                        delay={1800}
                      />
                    )}
                  </Typography>
                </motion.div>

                {/* Descrição */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      color: darkMode ? '#cbd5e1' : '#64748b',
                      lineHeight: 1.6,
                      maxWidth: '600px',
                    }}
                  >
                    {personalInfo.homeIntro}
                  </Typography>
                </motion.div>

                {/* Especialidades */}
                <motion.div variants={itemVariants}>
                  <Stack spacing={2}>
                    {/* Primeira linha de especialidades */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {specialtiesLine1.map((specialty, index) => (
                        <motion.div
                          key={specialty.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Chip
                            label={`${specialty.icon} ${specialty.label}`}
                            variant="filled"
                            sx={{
                              backgroundColor: darkMode 
                                ? 'rgba(100, 181, 246, 0.2)' 
                                : 'rgba(21, 101, 192, 0.1)',
                              color: darkMode ? '#e2e8f0' : '#1e293b',
                              fontWeight: 500,
                              fontSize: '0.875rem',
                              height: '32px',
                              '&:hover': {
                                backgroundColor: darkMode 
                                  ? 'rgba(100, 181, 246, 0.3)' 
                                  : 'rgba(21, 101, 192, 0.2)',
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                    
                    {/* Segunda linha de especialidades */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {specialtiesLine2.map((specialty, index) => (
                        <motion.div
                          key={specialty.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2.5 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Chip
                            label={`${specialty.icon} ${specialty.label}`}
                            variant="filled"
                            sx={{
                              backgroundColor: darkMode 
                                ? 'rgba(77, 208, 225, 0.2)' 
                                : 'rgba(0, 137, 123, 0.1)',
                              color: darkMode ? '#e2e8f0' : '#1e293b',
                              fontWeight: 500,
                              fontSize: '0.875rem',
                              height: '32px',
                              '&:hover': {
                                backgroundColor: darkMode 
                                  ? 'rgba(77, 208, 225, 0.3)' 
                                  : 'rgba(0, 137, 123, 0.2)',
                              }
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
                  </Stack>
                </motion.div>

                {/* Botões de ação */}
                <motion.div variants={itemVariants}>
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    sx={{ mt: 2 }}
                  >
                    <Button
                      component={Link}
                      to="/projects"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{
                        backgroundColor: darkMode ? '#3b82f6' : '#1565c0',
                        color: '#ffffff',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          backgroundColor: darkMode ? '#2563eb' : '#0d47a1',
                          transform: 'translateY(-2px)',
                          boxShadow: darkMode 
                            ? '0 10px 25px rgba(59, 130, 246, 0.4)'
                            : '0 10px 25px rgba(21, 101, 192, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Ver Projetos
                    </Button>

                    <Button
                      href={personalInfo.resume}
                      download
                      variant="outlined"
                      size="large"
                      endIcon={<Download />}
                      sx={{
                        borderColor: darkMode ? '#10b981' : '#059669',
                        color: darkMode ? '#10b981' : '#059669',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        borderWidth: '2px',
                        '&:hover': {
                          backgroundColor: darkMode 
                            ? 'rgba(16, 185, 129, 0.1)' 
                            : 'rgba(5, 150, 105, 0.1)',
                          borderColor: darkMode ? '#059669' : '#047857',
                          transform: 'translateY(-2px)',
                          borderWidth: '2px',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Baixar CV
                    </Button>

                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      size="large"
                      endIcon={<Email />}
                      sx={{
                        borderColor: darkMode ? '#64b5f6' : '#1565c0',
                        color: darkMode ? '#64b5f6' : '#1565c0',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        borderWidth: '2px',
                        '&:hover': {
                          backgroundColor: darkMode 
                            ? 'rgba(100, 181, 246, 0.1)' 
                            : 'rgba(21, 101, 192, 0.1)',
                          borderColor: darkMode ? '#3b82f6' : '#0d47a1',
                          transform: 'translateY(-2px)',
                          borderWidth: '2px',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Contato
                    </Button>
                  </Stack>
                </motion.div>

                {/* Links sociais */}
                <motion.div variants={itemVariants}>
                  <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                    <Button
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        minWidth: 'auto',
                        p: 1.5,
                        borderRadius: '50%',
                        color: darkMode ? '#94a3b8' : '#64748b',
                        '&:hover': {
                          backgroundColor: darkMode 
                            ? 'rgba(100, 181, 246, 0.1)' 
                            : 'rgba(21, 101, 192, 0.1)',
                          color: darkMode ? '#64b5f6' : '#1565c0',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <GitHub />
                    </Button>

                    <Button
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        minWidth: 'auto',
                        p: 1.5,
                        borderRadius: '50%',
                        color: darkMode ? '#94a3b8' : '#64748b',
                        '&:hover': {
                          backgroundColor: darkMode 
                            ? 'rgba(100, 181, 246, 0.1)' 
                            : 'rgba(21, 101, 192, 0.1)',
                          color: darkMode ? '#64b5f6' : '#1565c0',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LinkedIn />
                    </Button>

                    <Button
                      href={`mailto:${personalInfo.email}`}
                      sx={{
                        minWidth: 'auto',
                        p: 1.5,
                        borderRadius: '50%',
                        color: darkMode ? '#94a3b8' : '#64748b',
                        '&:hover': {
                          backgroundColor: darkMode 
                            ? 'rgba(100, 181, 246, 0.1)' 
                            : 'rgba(21, 101, 192, 0.1)',
                          color: darkMode ? '#64b5f6' : '#1565c0',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Email />
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Coluna do avatar */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <motion.div
                variants={avatarVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Avatar
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  sx={{
                    width: { xs: 200, md: 280, lg: 320 },
                    height: { xs: 200, md: 280, lg: 320 },
                    border: `4px solid ${darkMode ? '#3b82f6' : '#1565c0'}`,
                    boxShadow: darkMode
                      ? '0 20px 40px rgba(59, 130, 246, 0.3)'
                      : '0 20px 40px rgba(21, 101, 192, 0.3)',
                  }}
                />
              </motion.div>

              {/* Elementos decorativos ao redor do avatar */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  border: `2px dashed ${darkMode ? 'rgba(100, 181, 246, 0.3)' : 'rgba(21, 101, 192, 0.3)'}`,
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
