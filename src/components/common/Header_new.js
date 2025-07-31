import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { personalInfo } from '../../config/portfolio';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

/**
 * Header - Barra de navegação do portfólio
 *
 * Exibe links para as páginas principais e adapta o layout entre desktop e mobile.
 * Inclui toggle para alternar entre modo claro e escuro.
 *
 * Funcionalidades:
 * - Navegação responsiva com menu mobile
 * - Mudança de estilo ao rolar a página
 * - Destaque da rota ativa
 * - Toggle de tema claro/escuro
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
const Header = ({ elevation = 0 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, darkMode } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Lista de navegação
  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Sobre', path: '/about' },
    { text: 'Projetos', path: '/projects' },
    { text: 'Contato', path: '/contact' },
  ];

  // Efeito de scroll para mudança de estilo do header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para fechar o menu mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Componente do menu mobile
  const drawer = (
    <Box sx={{ width: 250, height: '100%', backgroundColor: 'background.paper' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          {personalInfo.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ThemeToggle />
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              backgroundColor: location.pathname === item.path ? 'action.selected' : 'transparent',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : elevation}
        sx={{
          backgroundColor: scrolled 
            ? (darkMode ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)') 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
            {/* Logo/Nome */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: scrolled ? 'primary.main' : 'text.primary',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <CodeIcon sx={{ mr: 1 }} />
              {personalInfo.name}
            </Typography>

            {/* Navegação Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path 
                        ? 'primary.main' 
                        : scrolled ? 'text.primary' : 'text.primary',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                        color: 'primary.main',
                      },
                      '&::after': location.pathname === item.path ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: 2,
                        backgroundColor: 'primary.main',
                        borderRadius: 1,
                      } : {},
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                
                {/* Toggle de tema no desktop */}
                <Box sx={{ ml: 1 }}>
                  <ThemeToggle />
                </Box>
              </Box>
            )}

            {/* Menu Mobile */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="abrir menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? 'text.primary' : 'text.primary',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Melhor performance no mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer para evitar sobreposição */}
      <Toolbar />
    </>
  );
};

Header.propTypes = {
  elevation: PropTypes.number,
};

export default Header;
