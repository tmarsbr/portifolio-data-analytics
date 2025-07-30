# 📜 Guia para Adicionar Certificados

## 🎯 **Como Adicionar Novos Certificados**

### 📁 **Passo 1: Preparar os Arquivos**

1. **Imagem do Certificado:**
   - Coloque a imagem em: `public/certificates/`
   - Formatos aceitos: `.png`, `.jpg`, `.jpeg`
   - Nome sugerido: `certificado-5.png`, `certificado-6.png`, etc.

2. **PDF do Certificado (opcional):**
   - Coloque o PDF em: `public/certificates/`
   - Nome sugerido: `certificado-5.pdf`, `certificado-6.pdf`, etc.

### ⚙️ **Passo 2: Configurar no Código**

Edite o arquivo `src/config/portfolio.js` e adicione um novo certificado no array `certificates`:

```javascript
{
  id: 5, // Próximo número sequencial
  title: "🎓 Nome do Seu Certificado",
  institution: "Nome da Instituição",
  year: "2024",
  image: `${process.env.PUBLIC_URL}/certificates/seu-certificado.png`,
  pdf: `${process.env.PUBLIC_URL}/certificates/seu-certificado.pdf`, // Opcional
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  description: "Descrição detalhada do que foi aprendido no curso."
}
```

### 📋 **Exemplo Completo:**

```javascript
export const certificates = [
  // ... certificados existentes ...
  {
    id: 5,
    title: "🐍 Python para Data Science",
    institution: "DataCamp",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certificates/python-datascience.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/python-datascience.pdf`,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    description: "Curso completo de Python focado em ciência de dados, abordando manipulação de dados, visualização e análise estatística."
  },
  {
    id: 6,
    title: "📊 Tableau Desktop Specialist",
    institution: "Tableau",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certificates/tableau.png`,
    pdf: `${process.env.PUBLIC_URL}/certificates/tableau.pdf`,
    skills: ["Tableau", "Visualização de Dados", "Dashboards", "Business Intelligence"],
    description: "Certificação oficial do Tableau para criação de dashboards e visualizações interativas para business intelligence."
  }
];
```

### 🎨 **Passo 3: Escolher Emojis**

Use emojis que representem a área do certificado:
- 🐍 **Python**
- 📊 **Data Analysis** 
- 📈 **Business Intelligence**
- 🤖 **Machine Learning**
- ☁️ **Cloud Computing**
- 🔍 **SQL/Database**
- 🎓 **Academic**
- 🏆 **Achievement**

### 🚀 **Passo 4: Deploy**

Após adicionar os certificados:

```bash
# Testar localmente
npm start

# Fazer commit
git add .
git commit -m "feat: adicionar novos certificados [nome dos certificados]"
git push origin main
```

O site será atualizado automaticamente no GitHub Pages em ~3 minutos.

## 📸 **Dicas para Imagens**

1. **Resolução:** Recomendado 800x600px ou similar
2. **Formato:** PNG para melhor qualidade
3. **Tamanho:** Máximo 500KB para carregamento rápido
4. **Qualidade:** Certificado deve ser legível quando ampliado

## 🔧 **Troubleshooting**

### ❌ **Imagem não aparece:**
- Verifique se o arquivo está em `public/certificates/`
- Confirme que o nome do arquivo no código coincide exatamente
- Use `${process.env.PUBLIC_URL}` no início do caminho

### ❌ **PDF não abre:**
- Verifique se o arquivo PDF está na pasta correta
- Teste o link localmente primeiro

### ❌ **Erro de build:**
- Verifique se há vírgulas corretas no array
- Confirme que todas as aspas estão fechadas
- Execute `npm run build` para testar

## 📞 **Suporte**

Se encontrar problemas, verifique:
1. Console do navegador (F12) para erros
2. Terminal para mensagens de build
3. GitHub Actions para erros de deploy

---

🎉 **Seus novos certificados estarão online automaticamente após o commit!**
