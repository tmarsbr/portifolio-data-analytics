# 🔗 Imagem de Preview do Link (Open Graph)

## 📸 **O que é a Imagem de Preview?**

Quando você compartilha o link do seu portfólio no:
- **WhatsApp**
- **LinkedIn** 
- **Facebook**
- **Twitter**
- **Slack**
- **Discord**

Uma imagem aparece automaticamente junto com o título e descrição. Esta é a **Open Graph Image**.

## 📁 **Onde Colocar a Imagem**

### **Local:**
```
public/og-image.jpg  ← SUBSTITUA ESTA IMAGEM
```

### **Especificações Técnicas:**
- **Formato:** JPG, PNG ou WebP
- **Dimensões:** 1200x630px (1.91:1) - **PADRÃO OPEN GRAPH**
- **Tamanho:** Máximo 8MB (recomendado: menos de 1MB)
- **Qualidade:** 80-90% para balance entre qualidade e carregamento

## 🎨 **O que Incluir na Imagem**

### **Elementos Essenciais:**
- ✅ **Seu nome** em destaque
- ✅ **Título profissional** ("Full Stack em Data & Analytics")
- ✅ **Logo/Avatar** pessoal
- ✅ **Elementos visuais** relacionados a dados (gráficos, códigos, etc.)
- ✅ **Cores** que combinem com seu portfólio

### **Exemplo de Layout:**
```
┌─────────────────────────────────────────────┐
│  📊 Tiago da Silva e Santo                  │
│                                             │
│  Full Stack em Data & Analytics             │
│  📈 Python | SQL | Machine Learning        │
│                                             │
│  [Gráfico/Dashboard]    [Foto/Avatar]       │
│                                             │
│  🌐 tmarsbr.github.io/portifolio-...       │
└─────────────────────────────────────────────┘
```

## 🛠️ **Ferramentas para Criar**

### **Online (Gratuitas):**
- **Canva** - Templates para Open Graph
- **Figma** - Design profissional
- **Pablo by Buffer** - Específico para redes sociais
- **Crello** - Templates prontos

### **Desktop:**
- **GIMP** - Editor gratuito
- **Photoshop** - Editor profissional
- **PowerPoint** - Criação rápida

## ✅ **Status Atual**

- ✅ **Arquivo existe:** `public/og-image.jpg`
- ✅ **Configuração OK:** Já está no `portfolio.js`
- ✅ **SEO configurado:** Meta tags prontas
- 🔄 **Próximo passo:** Substituir pela sua imagem personalizada

## 🔍 **Como Testar**

### **1. Testar Localmente:**
Após substituir a imagem, acesse: `http://localhost:3000/portifolio-data-analytics`

### **2. Testar Online:**
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator

### **3. Força a Atualização:**
Após trocar a imagem, pode demorar algumas horas para as redes sociais atualizarem o cache.

## 📝 **Dica Importante**

A imagem atual `og-image.jpg` será substituída pela sua. Mantenha o mesmo nome do arquivo para não precisar alterar configurações.

---

**Resultado:** Quando alguém compartilhar seu link, verá sua imagem personalizada! 🚀
