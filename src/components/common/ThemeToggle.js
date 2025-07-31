import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * ThemeToggle - Botão para alternar entre modo claro e escuro
 * 
 * Exibe ícone de sol (modo claro) ou lua (modo escuro) com tooltip explicativo.
 * Possui animação suave na transição e feedback visual ao clicar.
 * 
 * @component
 * @example
 * return (
 *   <ThemeToggle />
 * )
 */
const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Tooltip 
      title={darkMode ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
      arrow
    >
      <Box
        component="div"
        sx={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{
            transition: 'all 0.3s ease-in-out',
            transform: 'scale(1)',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: darkMode 
                ? 'rgba(255, 255, 255, 0.08)' 
                : 'rgba(0, 0, 0, 0.04)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
            // Efeito de destaque para indicar funcionalidade
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: darkMode 
                ? 'linear-gradient(45deg, #4dd0e1 30%, #64b5f6 90%)'
                : 'linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
              zIndex: -1,
            },
            '&:hover::before': {
              opacity: 0.1,
            },
          }}
          aria-label={darkMode ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
        >
          {/* Ícone com animação de rotação suave */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.5s ease-in-out',
              transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            {darkMode ? (
              <Brightness7 
                sx={{ 
                  fontSize: '1.5rem',
                  color: '#fff',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                }} 
              />
            ) : (
              <Brightness4 
                sx={{ 
                  fontSize: '1.5rem',
                  color: 'inherit',
                  filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.2))',
                }} 
              />
            )}
          </Box>
        </IconButton>
        
        {/* Indicador visual sutil do estado atual */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 2,
            right: 2,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: darkMode ? '#4dd0e1' : '#1976d2',
            opacity: 0.8,
            transition: 'all 0.3s ease-in-out',
            transform: 'scale(1)',
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                transform: 'scale(1)',
                opacity: 0.8,
              },
              '50%': {
                transform: 'scale(1.2)',
                opacity: 0.4,
              },
              '100%': {
                transform: 'scale(1)',
                opacity: 0.8,
              },
            },
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default ThemeToggle;
