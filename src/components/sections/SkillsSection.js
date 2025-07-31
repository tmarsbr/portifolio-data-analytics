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
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faReact, 
  faJs, 
  faGitAlt, 
  faDocker, 
  faAws 
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faChartLine,
  faBrain,
  faCloud,
  faCogs,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import { skills } from '../../config/portfolio';
import { useTheme } from '../../contexts/ThemeContext';

// Mapeamento de ícones para skills
const skillIcons = {
  'Python': faPython,
  'R': faCode,
  'SQL': faDatabase,
  'JavaScript': faJs,
  'React': faReact,
  'Pandas': faPython,
  'NumPy': faPython,
  'Scikit-learn': faBrain,
  'TensorFlow': faBrain,
  'PyTorch': faBrain,
  'Tableau': faChartLine,
  'Power BI': faChartLine,
  'Excel': faChartLine,
  'Google Analytics': faChartLine,
  'AWS': faAws,
  'Google Cloud': faCloud,
  'Docker': faDocker,
  'Git': faGitAlt,
  'Apache Spark': faCogs,
  'Hadoop': faCogs,
  'MySQL': faDatabase,
  'PostgreSQL': faDatabase,
  'MongoDB': faDatabase,
  'Apache Airflow': faCogs,
  'Jupyter': faCode,
  'VS Code': faCode,
  'Matplotlib': faChartLine,
  'Seaborn': faChartLine,
  'Plotly': faChartLine,
  'D3.js': faChartLine,
};

// Componente para skill individual com animação
const SkillCard = ({ skill, level, delay }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  const iconName = skillIcons[skill] || faCode;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          height: '100%',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${theme.palette.divider}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(25, 118, 210, 0.2)'
              : '0 8px 32px rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <CardContent sx={{ p: 3, textAlign: 'center' }}>
          {/* Ícone da skill */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                mb: 2,
              }}
            >
              <FontAwesomeIcon 
                icon={iconName} 
                style={{ 
                  fontSize: '24px', 
                  color: 'white' 
                }} 
              />
            </Box>
          </motion.div>

          {/* Nome da skill */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'text.primary',
            }}
          >
            {skill}
          </Typography>

          {/* Barra de progresso animada */}
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Proficiência
              </Typography>
              <Typography variant="body2" color="primary.main" fontWeight="600">
                {level}%
              </Typography>
            </Box>
            
            <Box
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, delay: delay + 0.5 }}
                style={{
                  height: '100%',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  borderRadius: 4,
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const skillCategories = Object.keys(skills);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
          : 'linear-gradient(to bottom, white 0%, rgb(248, 250, 252) 50%, rgb(241, 245, 249) 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: theme.palette.mode === 'dark' ? 'none' : '1px solid rgb(226, 232, 240)',
        transition: 'all 0.3s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 20% 50%, rgba(25, 118, 210, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
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
        </motion.div>

        {/* Tabs de categorias com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 6 }}>
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
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  minWidth: 120,
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-selected': {
                    color: 'primary.main',
                    fontWeight: 700,
                  },
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: 2,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                },
              }}
            >
              {skillCategories.map((category, index) => (
                <Tab
                  key={category}
                  label={category}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 2,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '80%',
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </motion.div>
        {/* Grid de habilidades com animação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              {skills[skillCategories[selectedCategory]]?.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
                  <SkillCard 
                    skill={skill.name} 
                    level={skill.level} 
                    delay={index * 0.1} 
                  />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Resumo estatístico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
              borderRadius: 3,
              textAlign: 'center',
              border: `1px solid ${theme.palette.divider}`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: 'text.primary',
              }}
            >
              Resumo de Competências
            </Typography>
            
            <Grid container spacing={4}>
              {[
                { number: '10+', label: 'Linguagens & Ferramentas', icon: '💻' },
                { number: '8+', label: 'Bibliotecas ML', icon: '🤖' },
                { number: '5+', label: 'Bancos de Dados', icon: '🗄️' },
                { number: '3+', label: 'Ferramentas de BI', icon: '📊' },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          mb: 1, 
                          fontSize: '2rem',
                          filter: 'grayscale(0.2)',
                        }}
                      >
                        {stat.icon}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
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
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection;
