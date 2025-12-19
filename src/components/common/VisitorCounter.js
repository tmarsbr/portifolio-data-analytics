import React, { useState, useEffect } from 'react';
import { Chip } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { motion } from 'framer-motion';

/**
 * Contador de Visitas usando CountAPI (gratuito)
 * Namespace: tmarsbr-portfolio
 * Key: visits
 */
const VisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // CountAPI - incrementa e retorna o valor
    const fetchCount = async () => {
      try {
        // Usando seu namespace único
        const response = await fetch(
          'https://api.countapi.xyz/hit/tmarsbr-portfolio/visits'
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error('Erro ao buscar contador:', error);
        setCount(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  if (loading) {
    return (
      <Chip
        icon={<Visibility />}
        label="Carregando..."
        size="small"
        variant="outlined"
        sx={{ opacity: 0.5 }}
      />
    );
  }

  if (count === null) {
    return null; // Não mostra nada se falhar
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Chip
        icon={<Visibility sx={{ fontSize: 16 }} />}
        label={`${count.toLocaleString('pt-BR')} visitas`}
        size="small"
        sx={{
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(0,0,0,0.06)',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.1)',
          fontWeight: 500,
          fontSize: '0.75rem',
          '& .MuiChip-icon': {
            color: 'primary.main',
          },
        }}
      />
    </motion.div>
  );
};

export default VisitorCounter;