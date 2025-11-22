# Guia de Contexto para Agentes de IA (AI Agent Guide)

Este documento destina-se a Agentes de IA (Copilot, ChatGPT, Claude, etc.) para fornecer contexto rápido e preciso sobre a estrutura, padrões e regras de negócio do projeto **Portfólio de Engenharia de Dados**.

---

## 1. Identidade do Projeto
- **Tipo:** Portfólio Pessoal (Single Page Application).
- **Foco Profissional:** **Engenharia de Dados** (Anteriormente Data Science/Usinagem).
- **Persona:** Profissional técnico, focado em infraestrutura, pipelines (ETL/ELT), Cloud (AWS) e qualidade de dados.
- **Tom de Voz:** Profissional, técnico, direto e moderno.

## 2. Stack Tecnológica
- **Frontend:** React 18 (Functional Components + Hooks).
- **UI Library:** Material-UI (MUI) v5.
- **Estilização:** `sx` prop (MUI System) e `styled-components` (ocasionalmente).
- **Animações:** Framer Motion (`motion.div`, `AnimatePresence`).
- **Roteamento:** React Router Dom v6.
- **Gerenciamento de Estado:** Context API (`ThemeContext`).

## 3. Arquitetura de Dados (CRÍTICO)
O projeto utiliza uma arquitetura **Config-Driven UI**. O conteúdo textual **NÃO** deve ser hardcoded nos componentes, mas sim importado do arquivo de configuração.

- **Fonte da Verdade:** `src/config/portfolio.js`
- **O que reside lá:**
  - Informações pessoais (`personalInfo`).
  - Lista de projetos (`projectsData`).
  - Histórico profissional (`aboutData`).
  - Configurações de SEO (`seoConfig`).
  - Cores do tema (`themeConfig`).

**Regra para Agentes:** Ao adicionar novos projetos ou alterar textos, edite `src/config/portfolio.js`. Ao alterar layout ou comportamento, edite os componentes em `src/components`.

## 4. Estrutura de Diretórios Chave

```
src/
├── components/
│   ├── common/          # Componentes globais (Header, Footer, ThemeToggle)
│   └── sections/        # Seções da Home (Hero, AboutPreview, ProjectsPreview, Contact)
├── config/
│   └── portfolio.js     # ARQUIVO DE DADOS (JSON-like structure)
├── contexts/
│   └── ThemeContext.js  # Lógica de Dark/Light mode
├── pages/
│   ├── Home.js          # Página principal (agregadora de seções)
│   ├── Projects.js      # Página detalhada de projetos
│   └── About.js         # Página detalhada sobre mim
└── styles/
    └── theme.js         # Definições do MUI Theme (Paleta, Tipografia, Overrides)
```

## 5. Padrões de Desenvolvimento

### Estilização
- **Prefira:** Usar a prop `sx={{ ... }}` para estilos inline que acessam o tema.
- **Evite:** Arquivos `.css` separados (exceto `global.css` para resets básicos).
- **Responsividade:** Use breakpoints do MUI (`xs`, `sm`, `md`, `lg`). Ex: `flexDirection: { xs: 'column', md: 'row' }`.

### Ícones
- Use `@mui/icons-material`.
- Para Engenharia de Dados, prefira ícones técnicos: `Storage`, `CloudQueue`, `AccountTree`, `Code`, `Engineering`, `AutoGraph`.

### Cores e Tema
- O projeto possui suporte a **Dark Mode** e **Light Mode**.
- Sempre use cores do tema (`theme.palette.primary.main`, `text.secondary`) em vez de hexcodes hardcoded, para garantir compatibilidade com ambos os modos.

## 6. Instruções de Manutenção Comuns

### Adicionar um Novo Projeto
1. Abra `src/config/portfolio.js`.
2. Localize o array `projectsData`.
3. Adicione um novo objeto seguindo o esquema existente.
4. Use tags relevantes: "ETL", "AWS", "Python", "dbt".

### Alterar Cores do Site
1. Abra `src/config/portfolio.js`.
2. Edite o objeto `themeConfig`.
3. As alterações refletirão automaticamente em todo o site via `src/styles/theme.js`.

### Melhorar SEO
1. Edite `seoConfig` em `src/config/portfolio.js`.
2. Certifique-se de que as meta tags em `src/pages/Home.js` (via `react-helmet`) estão consumindo essas variáveis.

---
*Documento gerado para auxiliar Agentes de IA na manutenção e evolução do código.*
