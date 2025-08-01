import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Engineering,
  ExpandMore,
  ExpandLess,
  CheckCircle,
} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding,
  faGraduationCap,
  faProjectDiagram,
  faBriefcase,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

import { experiences } from '../../config/portfolio';
import { useTheme } from '../../contexts/ThemeContext';

// Componente para item de experiência expandível
const ExperienceCard = ({ experience, index, isLast }) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const getIcon = (type, icon) => {
    if (icon) {
      return <Typography sx={{ fontSize: '1.2rem' }}>{icon}</Typography>;
    }
    
    switch (type) {
      case 'work':
        return <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '16px' }} />;
      case 'education':
        return <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '16px' }} />;
      case 'project':
        return <FontAwesomeIcon icon={faProjectDiagram} style={{ fontSize: '16px' }} />;
      default:
        return <Engineering fontSize="small" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return theme.palette.primary.main;
      case 'education':
        return theme.palette.secondary.main;
      case 'project':
        return theme.palette.success.main;
      default:
        return theme.palette.info.main;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'work':
        return 'Experiência Profissional';
      case 'education':
        return 'Formação';
      case 'project':
        return 'Projeto';
      default:
        return 'Outro';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <TimelineItem
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
        }}
      >
        {/* Conteúdo da data (lado oposto) */}
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            variant: 'body2',
            color: 'text.secondary',
            fontSize: '0.875rem',
            fontWeight: 500,
            flex: { xs: 'none', md: 0.3 },
            width: { xs: '100%', md: 'auto' },
            textAlign: { xs: 'left', md: 'right' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <FontAwesomeIcon 
              icon={faCalendarAlt} 
              style={{ 
                fontSize: '12px', 
                color: theme.palette.text.secondary 
              }} 
            />
            {experience.period}
          </Box>
          {experience.location && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                style={{ 
                  fontSize: '12px', 
                  color: theme.palette.text.secondary 
                }} 
              />
              <Typography variant="caption" color="text.secondary">
                {experience.location}
              </Typography>
            </Box>
          )}
        </TimelineOppositeContent>

        {/* Separador com ícone */}
        <TimelineSeparator sx={{ flexDirection: { xs: 'row', md: 'column' } }}>
          <TimelineDot
            sx={{
              bgcolor: getTypeColor(experience.type),
              color: 'white',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 0 4px ${getTypeColor(experience.type)}20`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: `0 0 0 6px ${getTypeColor(experience.type)}30`,
              },
            }}
          >
            {getIcon(experience.type, experience.icon)}
          </TimelineDot>
          
          {!isLast && (
            <TimelineConnector
              sx={{
                bgcolor: getTypeColor(experience.type),
                width: 3,
                borderRadius: 2,
                opacity: 0.3,
                mx: { xs: 1, md: 0 },
                my: { xs: 0, md: 1 },
              }}
            />
          )}
        </TimelineSeparator>

        {/* Conteúdo principal */}
        <TimelineContent sx={{ py: '12px', px: 2, flex: 1, width: { xs: '100%', md: 'auto' } }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.divider}`,
                borderLeft: `4px solid ${getTypeColor(experience.type)}`,
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(25, 118, 210, 0.15)'
                    : '0 8px 32px rgba(0, 0, 0, 0.08)',
                  borderLeftWidth: 6,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Cabeçalho */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {experience.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <FontAwesomeIcon 
                          icon={faBuilding} 
                          style={{ 
                            fontSize: '14px', 
                            color: getTypeColor(experience.type) 
                          }} 
                        />
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: getTypeColor(experience.type),
                            fontWeight: 600,
                          }}
                        >
                          {experience.company || experience.institution}
                        </Typography>
                      </Box>
                    </Box>

                    <Chip
                      label={getTypeLabel(experience.type)}
                      size="small"
                      sx={{
                        bgcolor: `${getTypeColor(experience.type)}15`,
                        color: getTypeColor(experience.type),
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>
                </Box>

                {/* Descrição */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: experience.achievements?.length ? 2 : 0,
                  }}
                >
                  {experience.description}
                </Typography>

                {/* Tecnologias/Skills */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      Tecnologias
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {experience.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.7rem',
                            height: 24,
                            borderColor: getTypeColor(experience.type),
                            color: getTypeColor(experience.type),
                            '&:hover': {
                              bgcolor: `${getTypeColor(experience.type)}10`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Botão de expandir/contrair */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                    onClick={() => setExpanded(!expanded)}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: getTypeColor(experience.type),
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      {expanded ? 'Ocultar' : 'Ver'} Conquistas
                      {expanded ? <ExpandLess /> : <ExpandMore />}
                    </Typography>
                  </Box>
                )}

                {/* Lista de conquistas/realizações (expandível) */}
                <AnimatePresence>
                  {expanded && experience.achievements && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Divider sx={{ my: 2, borderColor: `${getTypeColor(experience.type)}30` }} />
                      <List dense sx={{ pt: 0 }}>
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                          >
                            <ListItem sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 28 }}>
                                <CheckCircle 
                                  sx={{ 
                                    fontSize: 16, 
                                    color: getTypeColor(experience.type) 
                                  }} 
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={achievement}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  color: 'text.secondary',
                                  fontSize: '0.875rem',
                                  lineHeight: 1.5,
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
};

const ExperienceTimeline = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(33, 33, 33, 0.9) 100%)'
          : 'linear-gradient(to bottom, rgb(248, 250, 252) 0%, white 50%, rgb(241, 245, 249) 100%)',
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
            ? 'radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
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
              Minha Jornada
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
              Experiência e{' '}
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
                Formação
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
              Um histórico diversificado combinando experiência técnica em infraestrutura com 
              especialização crescente em Data Science e Analytics.
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline */}
        <Timeline
          sx={{
            p: 0,
            '& .MuiTimelineItem-root': {
              '&:before': {
                display: 'none',
              },
            },
          }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </Timeline>

        {/* Estatísticas resumidas */}
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
              Números da Minha Jornada
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: 3,
              }}
            >
              {[
                { number: '7+', label: 'Anos de Experiência Técnica', icon: '⚙️' },
                { number: '3', label: 'Empresas Trabalhadas', icon: '🏢' },
                { number: '1+', label: 'Anos em Data & Analytics', icon: '📊' },
                { number: '100%', label: 'Dedicação ao Aprendizado', icon: '🎯' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
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
                        fontSize: { xs: '1.5rem', md: '2rem' },
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
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExperienceTimeline;
