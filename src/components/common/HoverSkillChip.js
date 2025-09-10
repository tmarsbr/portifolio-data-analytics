import React, { useRef, useState, useCallback } from 'react';
import {
  Chip,
  Popper,
  Paper,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

/**
 * HoverSkillChip - Chip com painel de sub-skills no hover
 * @param {string} label - Rótulo principal do chip
 * @param {ReactNode} icon - Ícone do chip principal
 * @param {string[]} items - Lista de sub-tecnologias
 * @param {string} placement - Posicionamento do Popper (default: 'bottom-start')
 */
const HoverSkillChip = ({
  label,
  icon,
  items = [],
  placement = 'bottom-start'
}) => {
  const theme = useTheme();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  // Cancelar fechamento
  const cancelClose = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Solicitar fechamento com delay
  const requestClose = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  }, []);

  // Handlers para mouse
  const handleMouseEnter = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const handleMouseLeave = useCallback(() => {
    requestClose();
  }, [requestClose]);

  // Handlers para foco/teclado
  const handleFocus = useCallback(() => {
    setOpen(true);
  }, []);

  const handleBlur = useCallback(() => {
    requestClose();
  }, [requestClose]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  // Handler para touch (mobile)
  const handleTouchStart = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Chip
          ref={anchorRef}
          label={label}
          icon={icon}
          variant="filled"
          role="button"
          tabIndex={0}
          aria-describedby={open ? `skill-panel-${label}` : undefined}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          sx={{
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(77, 208, 225, 0.2)'
              : 'rgba(0, 137, 123, 0.1)',
            color: theme.palette.mode === 'dark' ? '#e2e8f0' : '#1e293b',
            fontWeight: 500,
            fontSize: '0.875rem',
            height: '32px',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(77, 208, 225, 0.3)'
                : 'rgba(0, 137, 123, 0.2)',
            },
            '&:focus': {
              outline: `2px solid ${theme.palette.primary.main}`,
              outlineOffset: 2,
            }
          }}
        />
      </motion.div>

      <Popper
        id={`skill-panel-${label}`}
        open={open}
        anchorEl={anchorRef.current}
        placement={placement}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          },
        ]}
        style={{ zIndex: 1300 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 1.5,
              borderRadius: 2,
              boxShadow: theme.shadows[6],
              backgroundColor: theme.palette.background.default,
              border: `1px solid ${theme.palette.divider}`,
              maxWidth: 360,
              minWidth: 200,
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: 1,
                alignItems: 'center',
              }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Chip
                    label={item}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.75rem',
                      height: '28px',
                      cursor: 'default',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                      justifyContent: 'center',
                      minWidth: 'fit-content',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Popper>
    </>
  );
};

export default HoverSkillChip;
