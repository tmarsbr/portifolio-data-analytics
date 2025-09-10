import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * SubCategoryPills - Componente para filtros de subcategoria
 *
 * Renderiza botões em formato de "pills" para seleção de subcategorias,
 * com ícones e animações consistentes.
 *
 * @param {Object} props
 * @param {string[]} props.subcategories - Lista de subcategorias
 * @param {string} props.active - Subcategoria ativa atualmente
 * @param {Function} props.onChange - Callback para mudança de subcategoria
 * @component
 */
const SubCategoryPills = ({ subcategories, active, onChange }) => {
  const { theme } = useTheme();

  // Adicionar 'Todos' no início se não estiver presente
  const allSubcategories = ['Todos', ...subcategories];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 1,
        mb: 4,
      }}
    >
      {allSubcategories.map((subcategory, index) => (
        <motion.div
          key={subcategory}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => onChange(subcategory)}
            variant={active === subcategory ? 'contained' : 'outlined'}
            sx={{
              minWidth: 'auto',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 2.5,
              py: 1,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              ...(active === subcategory ? {
                background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
                color: 'white',
                border: 'none',
                boxShadow: `0 4px 15px ${theme.palette.secondary.main}30`,
              } : {
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                '&:hover': {
                  backgroundColor: `${theme.palette.secondary.main}10`,
                  borderColor: theme.palette.secondary.main,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 15px ${theme.palette.secondary.main}20`,
                },
              }),
            }}
          >
            {subcategory}
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};

export default SubCategoryPills;
