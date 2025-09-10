import React, { useState, useRef, useEffect } from 'react';
import {
  Chip,
  Collapse,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

/**
 * ExpandableSkillChip - Chip expansível com sub-tecnologias
 * @param {string} label - Rótulo principal do chip
 * @param {ReactNode} icon - Ícone do chip principal
 * @param {string[]} items - Lista de sub-tecnologias
 * @param {boolean} defaultOpen - Se deve iniciar expandido
 */
const ExpandableSkillChip = ({
  label,
  icon,
  items = [],
  defaultOpen = false
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  const chipRef = useRef(null);
  const [chipId] = useState(() => `skill-chip-${Math.random().toString(36).substr(2, 9)}`);

  // Toggle expansão
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle keyboard events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    } else if (event.key === 'Escape' && isExpanded) {
      setIsExpanded(false);
    }
  };

  // Foco automático quando expandir
  useEffect(() => {
    if (isExpanded && chipRef.current) {
      // Pequeno delay para garantir que o elemento esteja renderizado
      setTimeout(() => {
        const firstItem = document.querySelector(`#${chipId}-item-0`);
        if (firstItem) {
          firstItem.focus();
        }
      }, 100);
    }
  }, [isExpanded, chipId]);

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Chip Principal */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Chip
          ref={chipRef}
          label={label}
          icon={icon}
          variant="filled"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-controls={`${chipId}-panel`}
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

      {/* Painel Expandido */}
      <Collapse
        in={isExpanded}
        timeout={300}
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 10,
          mt: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            id={`${chipId}-panel`}
            role="region"
            aria-labelledby={chipId}
            sx={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              p: 2,
              boxShadow: theme.shadows[4],
              minWidth: 200,
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    id={`${chipId}-item-${index}`}
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
                      '&:focus': {
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: 2,
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Collapse>
    </Box>
  );
};

export default ExpandableSkillChip;
