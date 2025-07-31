import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { themeConfig } from '../config/portfolio';

// Criar contexto do tema
const ThemeContext = createContext();

// Hook customizado para usar o contexto do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

/**
 * Provider do Tema - Gerencia o estado do tema claro/escuro
 * 
 * Funcionalidades:
 * - Toggle entre modo claro e escuro
 * - Persistência da preferência no localStorage
 * - Criação dinâmica dos temas Material-UI
 * - Aplicação automática do tema preferido
 * 
 * @component
 */
export const ThemeProvider = ({ children }) => {
  // Estado do modo escuro (false = claro, true = escuro)
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    
    // Verificar preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Salvar preferência no localStorage quando o tema mudar
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Função para alternar entre temas
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Criação do tema claro
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: themeConfig.primaryColor,
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#ffffff',
      },
      secondary: {
        main: themeConfig.secondaryColor,
        light: '#ff5983',
        dark: '#9a0036',
        contrastText: '#ffffff',
      },
      accent: {
        main: themeConfig.accentColor,
        light: '#4dd0e1',
        dark: '#00838f',
        contrastText: '#ffffff',
      },
      background: {
        default: themeConfig.backgroundColor,
        paper: '#ffffff',
      },
      text: {
        primary: themeConfig.textColor,
        secondary: themeConfig.darkGray,
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: themeConfig.darkGray,
        600: '#666666',
        700: '#424242',
        800: '#212121',
        900: '#111111',
      },
    },
    typography: {
      fontFamily: themeConfig.fontFamily,
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
      borderRadius: 12,
    },
    spacing: 8,
    components: {
      // Componentes customizados para tema claro
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 25,
            padding: '12px 32px',
            fontSize: '0.95rem',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
            },
          },
          contained: {
            background: `linear-gradient(45deg, ${themeConfig.primaryColor} 30%, ${themeConfig.accentColor} 90%)`,
            '&:hover': {
              background: `linear-gradient(45deg, ${themeConfig.primaryColor} 60%, ${themeConfig.accentColor} 100%)`,
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              backgroundColor: 'rgba(25, 118, 210, 0.04)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
            fontSize: '0.8rem',
            '&.MuiChip-filled': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: themeConfig.primaryColor,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            color: themeConfig.textColor,
          },
        },
      },
      MuiTimelineItem: {
        styleOverrides: {
          root: {
            '&:before': {
              display: 'none',
            },
          },
        },
      },
      MuiTimelineDot: {
        styleOverrides: {
          root: {
            backgroundColor: themeConfig.primaryColor,
            border: `3px solid ${themeConfig.accentColor}`,
            boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.2)',
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: themeConfig.textColor,
            fontSize: themeConfig.fontSize.small,
            borderRadius: 8,
            padding: '8px 12px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
          elevation1: {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          },
          elevation2: {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
          },
          elevation3: {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  // Criação do tema escuro
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#64b5f6', // Versão mais suave do azul para fundo escuro
        light: '#90caf9',
        dark: '#1976d2',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f48fb1', // Rosa mais suave para fundo escuro
        light: '#ffc1e3',
        dark: '#ad1457',
        contrastText: '#000000',
      },
      accent: {
        main: '#4dd0e1', // Ciano suave
        light: '#80deea',
        dark: '#0097a7',
        contrastText: '#000000',
      },
      background: {
        default: '#121212', // Fundo principal escuro para conforto visual
        paper: '#1e1e1e',   // Fundo dos cards/papers
      },
      text: {
        primary: '#ffffff',    // Texto principal claro
        secondary: '#b0b0b0',  // Texto secundário com bom contraste
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
      divider: 'rgba(255, 255, 255, 0.12)',
    },
    typography: {
      fontFamily: themeConfig.fontFamily,
      h1: {
        fontSize: themeConfig.fontSize.xxlarge,
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: '#ffffff',
      },
      h2: {
        fontSize: themeConfig.fontSize.xlarge,
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        color: '#ffffff',
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#ffffff',
      },
      h4: {
        fontSize: themeConfig.fontSize.large,
        fontWeight: 500,
        lineHeight: 1.4,
        color: '#ffffff',
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: 1.5,
        color: '#ffffff',
      },
      h6: {
        fontSize: themeConfig.fontSize.medium,
        fontWeight: 500,
        lineHeight: 1.6,
        color: '#ffffff',
      },
      body1: {
        fontSize: themeConfig.fontSize.medium,
        lineHeight: 1.7,
        color: '#ffffff',
      },
      body2: {
        fontSize: themeConfig.fontSize.small,
        lineHeight: 1.6,
        color: '#b0b0b0',
      },
      subtitle1: {
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#ffffff',
      },
      subtitle2: {
        fontSize: themeConfig.fontSize.small,
        fontWeight: 500,
        lineHeight: 1.4,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: '#b0b0b0',
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
        color: '#b0b0b0',
      },
    },
    shape: {
      borderRadius: 12,
    },
    spacing: 8,
    components: {
      // Componentes customizados para tema escuro
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 25,
            padding: '12px 32px',
            fontSize: '0.95rem',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(100, 181, 246, 0.3)',
            },
          },
          contained: {
            background: 'linear-gradient(45deg, #64b5f6 30%, #4dd0e1 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #64b5f6 60%, #4dd0e1 100%)',
            },
          },
          outlined: {
            borderWidth: 2,
            borderColor: '#64b5f6',
            color: '#64b5f6',
            '&:hover': {
              borderWidth: 2,
              backgroundColor: 'rgba(100, 181, 246, 0.08)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: '#1e1e1e',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
            fontSize: '0.8rem',
            '&.MuiChip-filled': {
              backgroundColor: 'rgba(100, 181, 246, 0.2)',
              color: '#64b5f6',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(30, 30, 30, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
            color: '#ffffff',
          },
        },
      },
      MuiTimelineItem: {
        styleOverrides: {
          root: {
            '&:before': {
              display: 'none',
            },
          },
        },
      },
      MuiTimelineDot: {
        styleOverrides: {
          root: {
            backgroundColor: '#64b5f6',
            border: '3px solid #4dd0e1',
            boxShadow: '0 0 0 4px rgba(100, 181, 246, 0.2)',
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#424242',
            fontSize: themeConfig.fontSize.small,
            borderRadius: 8,
            padding: '8px 12px',
            color: '#ffffff',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: '#1e1e1e',
          },
          elevation1: {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          },
          elevation2: {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
          },
          elevation3: {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
          },
        },
      },
      // Ajustes para Timeline no modo escuro
      MuiTimelineConnector: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  // Selecionar o tema atual
  const currentTheme = darkMode ? darkTheme : lightTheme;

  // Adicionar cores customizadas ao tema atual
  currentTheme.palette.accent = currentTheme.palette.accent || (darkMode ? {
    main: '#4dd0e1',
    light: '#80deea',
    dark: '#0097a7',
    contrastText: '#000000',
  } : {
    main: themeConfig.accentColor,
    light: '#4dd0e1',
    dark: '#00838f',
    contrastText: '#ffffff',
  });

  const value = {
    darkMode,
    toggleTheme,
    theme: currentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={currentTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
