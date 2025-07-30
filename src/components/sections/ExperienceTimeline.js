import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  useTheme,
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
import {
  Work,
  School,
  Engineering,
  Analytics,
} from '@mui/icons-material';

import { experiences } from '../../config/portfolio';

const ExperienceTimeline = () => {
  const theme = useTheme();

  const getIcon = (type, icon) => {
    if (icon) {
      return <Typography sx={{ fontSize: '1.2rem' }}>{icon}</Typography>;
    }
    
    switch (type) {
      case 'work':
        return <Work />;
      case 'education':
        return <School />;
      case 'project':
        return <Analytics />;
      default:
        return <Engineering />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return 'primary.main';
      case 'education':
        return 'secondary.main';
      case 'project':
        return 'success.main';
      default:
        return 'info.main';
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
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
            Uma trajetória de crescimento contínuo, combinando experiência prática 
            com conhecimentos técnicos em Data & Analytics.
          </Typography>
        </Box>

        <Timeline
          sx={{
            '& .MuiTimelineItem-root': {
              '&:before': {
                display: 'none',
              },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <TimelineOppositeContent
                sx={{
                  m: 'auto 0',
                  variant: 'body2',
                  color: 'text.secondary',
                  fontWeight: 600,
                  minWidth: 120,
                  textAlign: 'right',
                  pr: 2,
                }}
              >
                {exp.period}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: getTypeColor(exp.type),
                    border: `3px solid ${theme.palette.background.paper}`,
                    boxShadow: `0 0 0 4px ${getTypeColor(exp.type)}20`,
                    p: 1,
                    width: 56,
                    height: 56,
                  }}
                >
                  {getIcon(exp.type, exp.icon)}
                </TimelineDot>
                {index < experiences.length - 1 && (
                  <TimelineConnector
                    sx={{
                      bgcolor: 'divider',
                      width: 2,
                    }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: 'background.paper',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                      borderColor: getTypeColor(exp.type),
                    },
                  }}
                >
                  {/* Tipo da experiência */}
                  <Chip
                    label={getTypeLabel(exp.type)}
                    size="small"
                    sx={{
                      backgroundColor: `${getTypeColor(exp.type)}20`,
                      color: getTypeColor(exp.type),
                      fontWeight: 600,
                      mb: 2,
                    }}
                  />

                  {/* Título e empresa */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {exp.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {exp.company}
                  </Typography>

                  {/* Descrição */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {exp.description}
                  </Typography>

                  {/* Habilidades */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'divider',
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                          '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'primary.main',
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Estatísticas da jornada */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: 'grey.50',
            borderRadius: 3,
            textAlign: 'center',
          }}
          data-aos="fade-up"
          data-aos-delay="600"
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
              { number: '3+', label: 'Empresas Trabalhadas', icon: '🏢' },
              { number: '2+', label: 'Anos em Data & Analytics', icon: '📊' },
              { number: '100%', label: 'Dedicação ao Aprendizado', icon: '🎯' },
            ].map((stat, index) => (
              <Box key={index}>
                <Typography variant="h3" sx={{ mb: 1, fontSize: '2rem' }}>
                  {stat.icon}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
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
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceTimeline;
