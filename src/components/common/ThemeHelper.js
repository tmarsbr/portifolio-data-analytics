import { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * ThemeHelper - Componente para aplicar atributo data-theme no body
 * 
 * Funcionalidade:
 * - Adiciona/remove atributo data-theme="dark" no body do documento
 * - Permite que os estilos CSS respondam ao tema atual
 * - Sincroniza com as mudanças de tema do contexto
 * 
 * @component
 */
const ThemeHelper = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    // Aplicar ou remover o atributo data-theme no body
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.removeAttribute('data-theme');
    };
  }, [darkMode]);

  // Este componente não renderiza nada
  return null;
};

export default ThemeHelper;
