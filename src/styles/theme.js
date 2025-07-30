import { createTheme } from '@mui/material/styles';
import { themeConfig } from '../config/portfolio';

// Criação do tema personalizado para Data & Analytics
const theme = createTheme({
  palette: {
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
      color: themeConfig.textColor,
    },
    body2: {
      fontSize: themeConfig.fontSize.small,
      lineHeight: 1.6,
      color: themeConfig.darkGray,
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
      color: themeConfig.darkGray,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    // Botões personalizados
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
    
    // Cards personalizados
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
    
    // Chips personalizados
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
    
    // AppBar personalizada
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
    
    // Timeline personalizada
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
    
    // Tooltip personalizado
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
    
    // Paper personalizado
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

// Adicionando cores customizadas ao tema
theme.palette.accent = theme.palette.accent || {
  main: themeConfig.accentColor,
  light: '#4dd0e1',
  dark: '#00838f',
  contrastText: '#ffffff',
};

export default theme;
