import React, { useState, useEffect } from 'react';
import {
  Fab,
  Zoom,
  useScrollTrigger,
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

/**
 * ScrollToTop - Botão flutuante para voltar ao início
 *
 * Aparece após a página ser rolada e permite retorno suave ao topo.
 *
 * Funcionalidades:
 * - Detecta a posição do scroll
 * - Exibe efeito de zoom na aparição
 * - Scroll suave ao topo
 *
 * @component
 * @example
 * return (
 *   <ScrollToTop />
 * )
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Trigger para mostrar/esconder o botão baseado no scroll
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  // Função para fazer scroll suave para o topo
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible} timeout={300}>
      <Fab
        onClick={handleClick}
        color="primary"
        size="medium"
        aria-label="voltar ao topo"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 1000,
          boxShadow: 3,
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: 6,
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
