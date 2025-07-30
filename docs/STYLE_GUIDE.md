# Guia de Estilo e Boas Práticas - Portfólio Data & Analytics

## 📝 Padrões de Documentação

### Comentários em Componentes React
Todos os componentes devem ter documentação JSDoc no formato:

```javascript
/**
 * NomeDoComponente - Descrição breve
 * 
 * Descrição detalhada do que o componente faz e suas responsabilidades.
 * 
 * Funcionalidades:
 * - Lista das principais funcionalidades
 * - Características importantes
 * - Comportamentos especiais
 * 
 * @component
 * @example
 * return (
 *   <NomeDoComponente />
 * )
 */
```

### Nomes de Variáveis e Funções
- **Português**: Use nomes em português para variáveis relacionadas ao conteúdo
- **Inglês**: Use inglês para funções técnicas e estados do React
- **camelCase**: Para todas as variáveis JavaScript
- **PascalCase**: Para componentes React

## 🎨 Padrões de Storytelling

### Descrições de Projetos
1. **Hook Inicial**: Comece com emoji + frase impactante
2. **Problema**: Defina claramente o desafio enfrentado
3. **Solução**: Explique a abordagem técnica usada
4. **Resultado**: Destaque os insights ou valor gerado

### Exemplo de Boa Descrição:
```
🎵 Decifrando o DNA do sucesso musical: análise profunda de +50k músicas para descobrir os padrões ocultos que fazem uma música se tornar viral no Spotify.
```

### Elementos Obrigatórios:
- Emoji temático
- Números concretos (quantidades, percentuais)
- Verbos de ação (decifrando, transformando, criando)
- Benefício claro (insights, prevenção, economia)

## 🔤 Correções de Português

### Termos Padronizados:
- ✅ **Data & Analytics** (não "Data & Analytic")
- ✅ **Análise** (não "analise")
- ✅ **Especialização** (não "especialiazação")
- ✅ **Técnicas** (não "tecnicas")
- ✅ **Habilidades** (sempre no plural quando se refere ao conjunto)

### Acentuação:
- ✅ **Gráficos** (não "graficos")
- ✅ **Geográfica** (não "geografica")
- ✅ **Específico** (não "especifico")
- ✅ **Análise** (não "analise")

## 🏗️ Estrutura de Arquivos

### Organização de Componentes:
```
src/
├── components/
│   ├── common/          # Componentes reutilizáveis
│   └── sections/        # Seções específicas das páginas
├── config/              # Configurações e dados
├── pages/               # Páginas principais
└── styles/              # Temas e estilos globais
```

### Nomenclatura de Arquivos:
- **PascalCase** para componentes: `HeroSection.js`
- **camelCase** para utilitários: `portfolio.js`
- **UPPERCASE** para constantes: `README.md`

## 🎯 Checklist de Qualidade

### Antes de Cada Commit:
- [ ] Todos os componentes têm documentação JSDoc
- [ ] Textos revisados para erros de português
- [ ] Storytelling impactante nos projetos
- [ ] Nomes de variáveis consistentes
- [ ] Layout responsivo testado
- [ ] Console sem erros

### Padrões de Git:
- **feat**: nova funcionalidade
- **fix**: correção de bug
- **docs**: atualização de documentação
- **style**: melhorias de estilo/formatação
- **refactor**: refatoração de código

Exemplo: `feat: adicionar documentação JSDoc aos componentes principais`

---

💡 **Lembre-se**: Este portfólio é uma demonstração das suas habilidades. Cada detalhe conta para transmitir profissionalismo e atenção à qualidade!
