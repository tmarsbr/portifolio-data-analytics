# 📊 Portfólio Data & Analytics - Tiago da Silva e Santo

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.0+-purple.svg)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 🚀 **Portfólio profissional moderno e responsivo** para especialista em Data & Analytics, desenvolvido com React e Material-UI.

## 🌟 **Demonstração Online**

🔗 **[Ver Portfólio Online](https://tmarsbr.github.io/portifolio-data-analytics)**

Um portfólio moderno e responsivo desenvolvido em React para showcase de projetos e habilidades em Data & Analytics, agora com **modo escuro** completo!

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework principal
- **Material-UI (MUI)** - Componentes e design system
- **React Router** - Navegação entre páginas
- **React Context API** - Gerenciamento de estado do tema
- **Lottie React** - Animações interativas
- **AOS** - Animações de scroll
- **React Helmet** - Meta tags e SEO

## ✨ Funcionalidades

- **🌗 Modo Escuro/Claro** - Toggle inteligente com persistência
- **📱 Responsivo** - Adaptado para desktop, tablet e mobile
- **🔍 SEO Otimizado** - Meta tags, Open Graph e títulos dinâmicos
- **♿ Acessibilidade** - ARIA labels, contraste AA/AAA e navegação por teclado
- **⚡ Performance** - Componentes otimizados e lazy loading
- **🎨 Temas Dinâmicos** - Sistema completo de temas claro/escuro
- **💾 Persistência** - Salva preferência do usuário automaticamente
- **🔧 Configuração Dinâmica** - Dados centralizados em arquivo de configuração

## 🌗 Modo Escuro - Destaques

### Funcionalidades Avançadas
- **Toggle Visual**: Ícone sol/lua com animação de rotação
- **Detecção Automática**: Respeita preferência do sistema operacional
- **Persistência Local**: Mantém escolha entre sessões
- **Transições Suaves**: Mudança instantânea sem recarga
- **Paleta Otimizada**: Cores cientificamente escolhidas para conforto visual

### Design Profissional
- **Contraste Perfeito**: WCAG AA/AAA compliant
- **Cores Harmoniosas**: Paleta especial para fundo escuro
- **Componentes Adaptados**: Todos os elementos respondem ao tema
- **Micro-interações**: Feedbacks visuais refinados

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para execução

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd portifolio_data_analytcs
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000/portifolio-data-analytics
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── common/         # Componentes comuns (Header, Footer, etc.)
│   ├── sections/       # Seções específicas (About, Projects, etc.)
│   └── ui/            # Componentes de interface
├── pages/             # Páginas da aplicação
├── config/            # Arquivos de configuração
│   └── portfolio.js   # Dados do portfólio (EDITE AQUI)
├── assets/            # Imagens, ícones e arquivos estáticos
├── styles/            # Estilos globais e temas
└── utils/             # Utilitários e helpers
```

## ⚙️ Personalização

### Editando Informações Pessoais

Para atualizar suas informações, edite o arquivo `src/config/portfolio.js`:

```javascript
// Informações básicas
export const personalInfo = {
  name: "Seu Nome",
  title: "Especialista em Data & Analytics",
  email: "seuemail@gmail.com",
  // ... outras configurações
};
```

### Adicionando Novos Projetos

No arquivo `src/config/portfolio.js`, seção `projects`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição detalhada...",
    technologies: ["Python", "Pandas", "Matplotlib"],
    image: "/path/to/image.jpg",
    github: "https://github.com/user/repo",
    demo: "https://demo-url.com",
    metrics: "Métrica de resultado"
  },
  // ... outros projetos
];
```

### Atualizando Certificados

Na seção `certificates` do mesmo arquivo:

```javascript
export const certificates = [
  {
    id: 1,
    title: "Nome do Certificado",
    institution: "Instituição",
    year: "2024",
    image: "/path/to/certificate.jpg",
    pdf: "/path/to/certificate.pdf"
  },
  // ... outros certificados
];
```

### Modificando Cores e Tema

Edite o arquivo `src/styles/theme.js`:

```javascript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Cor principal
    },
    secondary: {
      main: '#dc004e', // Cor de destaque
    },
    // ... outras cores
  },
});
```

## 📊 Analytics (Opcional)

Para ativar o Google Analytics, adicione sua tracking ID no arquivo `.env`:

```env
REACT_APP_TRACKING_ID=GA_TRACKING_ID
```

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

### Deploy no Netlify/Vercel

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

## 📱 Seções do Portfólio

- **Home** - Apresentação inicial com animações
- **Sobre** - História profissional e transição de carreira
- **Experiência & Formação** - Timeline cronológica
- **Habilidades** - Grid de tecnologias e ferramentas
- **Projetos** - Showcase de projetos com filtros
- **Certificados** - Modal integrado para visualização
- **Contato** - Links diretos para redes sociais

## 🎨 Recursos de Design

- **Paleta de Cores** - Tons profissionais de azul e cinza
- **Tipografia** - Roboto (Material Design)
- **Ícones** - Material Icons
- **Animações** - Transições suaves e micro-interações
- **Grid Responsivo** - Breakpoints para todos os dispositivos

## 🔧 Scripts Disponíveis

- `npm start` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm test` - Executa testes de componentes com `@testing-library/react`
- `npm run eject` - Ejeta configurações (irreversível)

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:
- **Email**: tiagomars233@gmail.com
- **LinkedIn**: [linkedin.com/in/tiagodados](https://linkedin.com/in/tiagodados)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ por Tiago Silva**
