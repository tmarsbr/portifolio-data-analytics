import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importar AOS para animações de scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// Configuração do Google Analytics (se habilitado)
import { analyticsConfig } from './config/portfolio';

// Inicializar AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
});

// Configurar Google Analytics se habilitado
if (analyticsConfig.enabled && analyticsConfig.trackingId) {
  // Adicionar script do Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.trackingId}`;
  document.head.appendChild(script);

  // Configurar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', analyticsConfig.trackingId);
  
  // Disponibilizar gtag globalmente
  window.gtag = gtag;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
