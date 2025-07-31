/**
 * ThemeContext - Sistema de temas aprimorado para o portfólio
 * 
 * Características:
 * - Suporte a tema claro e escuro
 * - Configuração centralizada de cores e tipografia
 * - Componentes Material-UI customizados
 * - Persistência do tema selecionado
 * - Transições suaves entre temas
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { themeConfig } from '../config/portfolio';

// Criar contexto do tema
const ThemeContext = createContext();

// Hook para usar o contexto do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

// Função para criar tema base
const createBaseTheme = (mode) => {
  const isDark = mode === 'dark';
  const colors = isDark ? themeConfig.colors.dark : themeConfig.colors.light;
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: colors.primaryLight,
        dark: colors.primaryDark,
        contrastText: '#ffffff',
      },
      secondary: {
        main: colors.secondary,
        light: colors.secondaryLight,
        dark: colors.secondaryDark,
        contrastText: '#ffffff',
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      error: {
        main: colors.error,
      },
      warning: {
        main: colors.warning,
      },
      info: {
        main: colors.info,
      },
      success: {
        main: colors.success,
      },
      divider: colors.border,
    },
    typography: {
      fontFamily: themeConfig.fontFamily.primary,
      h1: {
        fontSize: themeConfig.fontSize.xxlarge,
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: themeConfig.fontSize.xlarge,
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: themeConfig.fontSize.large,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: themeConfig.fontSize.medium,
        fontWeight: 500,
        lineHeight: 1.6,
      },
      body1: {
        fontSize: themeConfig.fontSize.medium,
        lineHeight: 1.7,
      },
      body2: {
        fontSize: themeConfig.fontSize.small,
        lineHeight: 1.6,
      },
      subtitle1: {
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: themeConfig.fontSize.small,
        fontWeight: 500,
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      },
      button: {
        fontSize: themeConfig.fontSize.small,
        fontWeight: 500,
        textTransform: 'none',
        letterSpacing: '0.3px',
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: 1.4,
      },
    },
    shape: {
      borderRadius: themeConfig.borderRadius.medium,
    },
    spacing: themeConfig.spacing.unit,
    transitions: {
      duration: {
        shortest: themeConfig.transitions.fast,
        shorter: themeConfig.transitions.normal,
        short: themeConfig.transitions.slow,
        standard: themeConfig.transitions.normal,
        complex: themeConfig.transitions.slow,
        enteringScreen: themeConfig.transitions.normal,
        leavingScreen: themeConfig.transitions.fast,
      },
    },
    components: {
      // Botões customizados
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: themeConfig.borderRadius.large,
            padding: '12px 32px',
            fontSize: '0.95rem',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
            transition: `all ${themeConfig.transitions.normal}ms ease`,
            '&:hover': {
              boxShadow: isDark ? '0 4px 20px rgba(100, 181, 246, 0.3)' : '0 4px 20px rgba(33, 150, 243, 0.3)',
              transform: 'translateY(-2px)',
            },
          },
          containedPrimary: {
            background: `linear-gradient(45deg, ${colors.primary} 30%, ${colors.primaryLight} 90%)`,
            color: '#ffffff',
            '&:hover': {
              background: `linear-gradient(45deg, ${colors.primaryDark} 30%, ${colors.primary} 90%)`,
            },
          },
        },
      },
      // Cards customizados
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: themeConfig.borderRadius.large,
            border: `1px solid ${colors.border}`,
            boxShadow: isDark 
              ? '0 4px 20px rgba(0, 0, 0, 0.3)'
              : '0 4px 20px rgba(0, 0, 0, 0.08)',
            transition: `all ${themeConfig.transitions.normal}ms ease`,
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: isDark 
                ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                : '0 12px 40px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      },
      // Chips customizados
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: themeConfig.borderRadius.small,
            fontWeight: 500,
          },
          outlined: {
            borderColor: colors.border,
            '&:hover': {
              backgroundColor: colors.primary + '10',
              borderColor: colors.primary,
            },
          },
        },
      },
      // AppBar customizada
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark 
              ? 'rgba(15, 23, 42, 0.95)' 
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${colors.border}`,
          },
        },
      },
      // Paper customizado
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
          },
        },
      },
      // Tabs customizadas
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: colors.primary,
            height: 3,
            borderRadius: '3px 3px 0 0',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.95rem',
            minHeight: 48,
            '&.Mui-selected': {
              color: colors.primary,
            },
          },
        },
      },
      // Lista customizada
      MuiListItem: {
        styleOverrides: {
          root: {
            borderRadius: themeConfig.borderRadius.medium,
            marginBottom: themeConfig.spacing.unit,
            '&:hover': {
              backgroundColor: colors.primary + '10',
            },
            '&.Mui-selected': {
              backgroundColor: colors.primary + '15',
              '&:hover': {
                backgroundColor: colors.primary + '20',
              },
            },
          },
        },
      },
      // TextField customizado
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: themeConfig.borderRadius.medium,
              '& fieldset': {
                borderColor: colors.border,
              },
              '&:hover fieldset': {
                borderColor: colors.primary,
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.primary,
              },
            },
          },
        },
      },
    },
  });
};

// Componente ThemeProvider
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar preferência salva ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Salvar preferência do tema
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Criar tema atual
  const theme = createBaseTheme(darkMode ? 'dark' : 'light');

  const contextValue = {
    theme,
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
