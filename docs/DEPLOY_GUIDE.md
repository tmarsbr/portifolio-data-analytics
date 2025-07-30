# 🚀 Deploy para GitHub Pages

Este documento contém instruções para configurar e fazer deploy do portfólio no GitHub Pages.

## ⚙️ Configuração Inicial

### 1. Habilitar GitHub Pages no Repositório

1. Vá para o repositório no GitHub: `https://github.com/tmarsbr/portifolio-data-analytics`
2. Clique em **Settings** (Configurações)
3. Role até a seção **Pages** no menu lateral
4. Em **Source**, selecione **GitHub Actions**
5. Salve as configurações

### 2. Verificar Configurações

✅ **Arquivos já configurados:**
- `/.github/workflows/deploy-pages.yml` - Workflow de deploy automático
- `/package.json` - Homepage configurada para GitHub Pages
- `/public/.nojekyll` - Permite arquivos com underscore
- `/public/404.html` - Redirecionamento para SPA
- `/public/index.html` - Script para roteamento GitHub Pages

## 🔄 Deploy Automático

O deploy acontece automaticamente quando você faz push para a branch `main`:

```bash
git add .
git commit -m "feat: adicionar nova funcionalidade"
git push origin main
```

## 🌐 URLs do Portfólio

- **Produção (GitHub Pages):** https://tmarsbr.github.io/portifolio-data-analytics
- **Desenvolvimento:** http://localhost:3000

## 📋 Comandos Úteis

### Build Local
```bash
# Instalar dependências
npm install

# Build para produção
npm run build

# Testar build localmente
npm install -g serve
serve -s build -l 3000
```

### Deploy Manual (se necessário)
```bash
# Build do projeto
npm run build

# O GitHub Actions fará o deploy automaticamente
# Não é necessário fazer deploy manual
```

## 🔧 Troubleshooting

### Página em Branco
Se o portfólio aparecer em branco após o deploy:
1. Verificar se a URL `homepage` no `package.json` está correta
2. Verificar se o workflow executou com sucesso na aba **Actions**
3. Aguardar alguns minutos para propagação do DNS

### Roteamento Não Funciona
Se as rotas do React Router não funcionarem:
1. Verificar se o arquivo `404.html` está presente
2. Verificar se o script no `index.html` está correto
3. Verificar se o `.nojekyll` está na pasta `public`

### Workflow Falha
Se o GitHub Actions falhar:
1. Verificar a aba **Actions** para logs de erro
2. Verificar se as permissões do GitHub Pages estão corretas
3. Verificar se o `package.json` tem o script `build`

## 📊 Monitoramento

### Ver Status do Deploy
1. Vá para a aba **Actions** no GitHub
2. Clique no último workflow "Deploy to GitHub Pages"
3. Verifique se todos os steps estão verdes ✅

### Ver Site ao Vivo
Após o deploy bem-sucedido, acesse:
👉 **https://tmarsbr.github.io/portifolio-data-analytics**

## 🎯 Próximos Passos

1. **Domínio Personalizado (Opcional):**
   - Comprar domínio (ex: tiagosilvadata.com)
   - Configurar DNS CNAME para apontar para GitHub Pages
   - Adicionar arquivo `CNAME` na pasta `public`

2. **Analytics:**
   - Configurar Google Analytics no arquivo `portfolio.js`
   - Adicionar tracking code no `index.html`

3. **SEO:**
   - Adicionar sitemap.xml
   - Configurar robots.txt
   - Otimizar meta tags

---

🎉 **Seu portfólio estará online automaticamente a cada push!**
