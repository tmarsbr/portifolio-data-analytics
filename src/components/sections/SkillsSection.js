import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  LinearProgress,
  Tab,
  Tabs,
  useTheme,
} from '@mui/material';

import { skills } from '../../config/portfolio';

const SkillsSection = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const skillCategories = Object.keys(skills);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'grey.50',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up">
          <Typography
            variant="subtitle2"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 2,
            }}
          >
            Habilidades Técnicas
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: 'text.primary',
            }}
          >
            Tecnologias e{' '}
            <Typography
              component="span"
              variant="inherit"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ferramentas
            </Typography>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Domínio completo das principais tecnologias utilizadas em Data & Analytics, 
            desde coleta e processamento até visualização e deploy de modelos.
          </Typography>
        </Box>

        {/* Tabs de categorias */}
        <Box sx={{ mb: 6 }} data-aos="fade-up" data-aos-delay="200">
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minWidth: 'auto',
                px: 3,
                py: 1.5,
                borderRadius: 3,
                margin: '0 4px',
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {skillCategories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Box>

        {/* Grid de habilidades */}
        <Grid container spacing={3}>
          {skills[skillCategories[selectedCategory]]?.map((skill, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                    borderColor: 'primary.main',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                }}
              >
                {/* Ícone */}
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    fontSize: '3rem',
                    lineHeight: 1,
                  }}
                >
                  {skill.icon}
                </Typography>

                {/* Nome da habilidade */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {skill.name}
                </Typography>

                {/* Barra de progresso */}
                <Box sx={{ width: '100%', mb: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Proficiência
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                      },
                    }}
                  />
                </Box>

                {/* Chip de nível */}
                <Chip
                  label={
                    skill.level >= 85
                      ? 'Avançado'
                      : skill.level >= 70
                      ? 'Intermediário'
                      : 'Básico'
                  }
                  size="small"
                  sx={{
                    mt: 1,
                    backgroundColor:
                      skill.level >= 85
                        ? 'success.main'
                        : skill.level >= 70
                        ? 'warning.main'
                        : 'info.main',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Resumo estatístico */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 3,
            textAlign: 'center',
            border: `1px solid ${theme.palette.divider}`,
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Grid container spacing={4}>
            {[
              { number: '10+', label: 'Linguagens & Ferramentas', icon: '💻' },
              { number: '8+', label: 'Bibliotecas ML', icon: '🤖' },
              { number: '5+', label: 'Bancos de Dados', icon: '🗄️' },
              { number: '3+', label: 'Ferramentas de BI', icon: '📊' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box>
                  <Typography variant="h3" sx={{ mb: 1, fontSize: '2rem' }}>
                    {stat.icon}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
