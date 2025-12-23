# 🖼️ Imagens dos Projetos

## 📋 **Como Adicionar Imagens dos Projetos**

### **1. Estrutura de Arquivos**
Coloque as imagens dos projetos nesta pasta com os seguintes nomes:

```
public/projects/
├── spotify-analysis.png        # Projeto Spotify (ID: 1)
├── prf-accidents.png          # Análise PRF (ID: 2)  
├── clinic-pipeline.png        # Pipeline Clínicas (ID: 3)
├── github-api.png             # GitHub API (ID: 4)
├── mongo-mysql-pipeline.png   # Pipeline MongoDB-MySQL (ID: 5)
├── credit-analysis.png        # Análise de Crédito (ID: 6)
├── people-analytics.png       # People Analytics (ID: 7)
├── time-series.png            # Séries Temporais (ID: 8)
├── fraud-detection.png        # Sistema Antifraude (ID: 9)
└── placeholder.png            # Imagem padrão para projetos sem imagem
```

### **2. Formatos Recomendados**
- **Formato:** PNG, JPG ou WebP
- **Dimensões:** 800x450px (16:9) ou 600x400px (3:2)
- **Tamanho:** Máximo 500KB por imagem
- **Qualidade:** 80-90% para balance entre qualidade e performance

### **3. Dicas de Conteúdo**
- Screenshots do código principal
- Gráficos e visualizações geradas
- Dashboards criados
- Diagramas da arquitetura
- Prints dos resultados

### **4. Ferramentas para Criação**
- **Canva** - Templates prontos para projetos
- **Figma** - Design profissional
- **PowerPoint** - Criação rápida de layouts
- **GIMP** - Editor gratuito
- **Photoshop** - Editor profissional

### **5. Exemplo de Uso no Código**
Após adicionar as imagens, atualize o arquivo `src/config/portfolio.js`:

```javascript
{
  id: 1,
  title: "Análise Exploratória - Spotify",
  image: `${process.env.PUBLIC_URL}/projects/spotify-analysis.png`,
  // ... resto da configuração
}
```

### **6. Imagem Placeholder**
Se um projeto não tiver imagem específica, uma imagem padrão será usada automaticamente.
