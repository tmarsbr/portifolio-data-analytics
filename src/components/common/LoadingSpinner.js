import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const LoadingSpinner = () => {
    const { darkMode } = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                backgroundColor: darkMode ? '#0f172a' : '#fafafa',
                gap: 2
            }}
        >
            <CircularProgress
                size={60}
                thickness={4}
                sx={{
                    color: darkMode ? '#64b5f6' : '#1565c0',
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    color: darkMode ? '#94a3b8' : '#64748b',
                    fontWeight: 500,
                    animation: 'pulse 1.5s infinite ease-in-out',
                    '@keyframes pulse': {
                        '0%': { opacity: 0.6 },
                        '50%': { opacity: 1 },
                        '100%': { opacity: 0.6 },
                    }
                }}
            >
                Carregando...
            </Typography>
        </Box>
    );
};

export default LoadingSpinner;
