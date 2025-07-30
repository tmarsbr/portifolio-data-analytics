import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography } from '@mui/material';

// Configurações
import { seoConfig } from '../config/portfolio';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
      </Helmet>
      
      <Container sx={{ py: 8, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom color="primary">
            Portfolio Data & Analytics
          </Typography>
          <Typography variant="h5" gutterBottom>
            Tiago da Silva e Santo
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ✅ React está funcionando corretamente!
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Página inicial carregada com sucesso
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Home;
