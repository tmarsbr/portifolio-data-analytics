/**
 * Hook para filtrar projetos por categoria e subcategoria
 * @param {Array} projects - Lista completa de projetos
 * @param {string} category - Categoria selecionada ('Todos', 'Análise de Dados', etc.)
 * @param {string} subcategory - Subcategoria selecionada ('Todos', 'IaC', etc.)
 * @returns {Object} { filtered: Array, count: number, total: number }
 */
export const useProjectFilter = (projects, category, subcategory) => {
  const visibleProjects = projects.filter(project => !project.hidden);

  const filtered = visibleProjects.filter(project => {
    // Filtro por categoria
    const categoryMatch = category === 'Todos' || project.category === category;

    // Filtro por subcategoria (apenas se categoria não for 'Todos')
    const subcategoryMatch = subcategory === 'Todos' ||
      (category !== 'Todos' && project.subcategories?.includes(subcategory));

    return categoryMatch && subcategoryMatch;
  });

  return {
    filtered,
    count: filtered.length,
    total: visibleProjects.length
  };
};
