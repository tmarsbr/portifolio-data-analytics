import React, { useState, useEffect } from 'react';
import {
  Fab,
  Zoom,
  useScrollTrigger,
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

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
