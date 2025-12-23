import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    useTheme,
    alpha,
    Tabs,
    Tab,
    Divider,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import {
    GitHub,
    MenuBook,
    Science,
    Code,
    School,
} from '@mui/icons-material';

import { studies, COURSES, FORMATIONS, getCoursesByFormation, studiesPageConfig } from '../config/studies';
import { personalInfo } from '../config/portfolio';

/**
 * Studies - Página de Estudos com estrutura hierárquica
 * Formações > Cursos > Labs/Projetos
 */
const Studies = () => {
    const theme = useTheme();
    const [selectedFormation, setSelectedFormation] = useState('engenharia-dados-4');
    const [selectedCourse, setSelectedCourse] = useState('iac-terraform');

    const placeholderImage = "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%231a1a2e'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3eData Engineering%3c/text%3e%3c/svg%3e";

    // Filtrar estudos por formação e curso
    const getFilteredStudies = () => {
        let filtered = studies;
        
        if (selectedFormation !== 'all') {
            const formationCourses = getCoursesByFormation(selectedFormation);
            const courseIds = formationCourses.map(c => c.id);
            filtered = filtered.filter(study => courseIds.includes(study.course));
        }
        
        if (selectedCourse !== 'all') {
            filtered = filtered.filter(study => study.course === selectedCourse);
        }
        
        return filtered;
    };

    const filteredStudies = getFilteredStudies();

    // Cursos disponíveis baseado na formação selecionada
    const availableCourses = selectedFormation === 'all' 
        ? COURSES 
        : getCoursesByFormation(selectedFormation);

    // Agrupar estudos por curso para exibição
    const getStudiesByCourse = (courseId) => {
        return studies.filter(study => study.course === courseId);
    };

    // Contadores baseados na seleção atual
    const getStudiesForFormation = (formationId) => {
        const formationCourses = getCoursesByFormation(formationId);
        const courseIds = formationCourses.map(c => c.id);
        return studies.filter(study => courseIds.includes(study.course));
    };

    // Contadores
    const totalStudies = studies.length;
    const labCount = studies.filter(s => s.type === 'Laboratório').length;
    const projectCount = studies.filter(s => s.type === 'Projeto').length;

    // Cor do tipo de estudo
    const getTypeColor = (type) => {
        switch (type) {
            case 'Laboratório': return theme.palette.info.main;
            case 'Projeto': return theme.palette.success.main;
            case 'Estudo de Caso': return theme.palette.warning.main;
            default: return theme.palette.primary.main;
        }
    };

    // Estilos para cards
    const cardStyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        backgroundColor: theme.palette.mode === 'dark'
            ? alpha(theme.palette.background.paper, 0.6)
            : theme.palette.background.paper,
        backdropFilter: 'blur(10px)',
        '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: `0 16px 32px ${alpha(theme.palette.primary.main, 0.12)}`,
            borderColor: alpha(theme.palette.primary.main, 0.3),
            '& .study-image': {
                transform: 'scale(1.05)',
            },
        },
    };

    const handleFormationChange = (event, newValue) => {
        setSelectedFormation(newValue);
        setSelectedCourse('all'); // Reset course when formation changes
    };

    const handleCourseChange = (event, newValue) => {
        setSelectedCourse(newValue);
    };

    return (
        <>
            <Helmet>
                <title>Estudos - {personalInfo.name} | Formação Engenharia de Dados</title>
                <meta name="description" content={studiesPageConfig.description} />
            </Helmet>

            {/* Hero Section */}
            <Box
                sx={{
                    pt: { xs: 14, md: 18 },
                    pb: { xs: 6, md: 10 },
                    position: 'relative',
                    overflow: 'hidden',
                    background: theme.palette.mode === 'dark'
                        ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.95)} 0%, ${alpha('#1a237e', 0.1)} 100%)`
                        : `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.95)} 0%, ${alpha('#e3f2fd', 0.5)} 100%)`,
                }}
            >
                {/* Background Elements */}
                <Box sx={{ position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`, filter: 'blur(40px)' }} />
                <Box sx={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`, filter: 'blur(40px)' }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }} data-aos="fade-up">
                        {/* Institution Badges */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: 1.5,
                                mb: 3,
                            }}
                        >
                            {studiesPageConfig.institutions?.map((inst, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: 2,
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                    }}
                                >
                                    <Typography sx={{ fontSize: 16 }}>{inst.icon}</Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1, color: 'primary.main', textTransform: 'uppercase' }}>
                                        {inst.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                background: theme.palette.mode === 'dark'
                                    ? `linear-gradient(135deg, #fff 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`
                                    : `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.02em',
                                fontSize: { xs: '2.2rem', md: '3.5rem' },
                            }}
                        >
                            {studiesPageConfig.title}
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                color: 'text.secondary',
                                mb: 2,
                                fontWeight: 600,
                                fontFamily: 'monospace',
                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                            }}
                        >
                            {studiesPageConfig.subtitle}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1rem',
                                color: 'text.secondary',
                                maxWidth: '800px',
                                mx: 'auto',
                                lineHeight: 1.7,
                                mb: 5,
                            }}
                        >
                            {studiesPageConfig.description}
                        </Typography>

                        {/* Stats */}
                        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                            {[
                                { number: totalStudies, label: 'Total', icon: <MenuBook />, color: 'primary' },
                                { number: COURSES.length, label: 'Cursos', icon: <School />, color: 'secondary' },
                                { number: labCount, label: 'Labs', icon: <Science />, color: 'info' },
                                { number: projectCount, label: 'Projetos', icon: <Code />, color: 'success' },
                            ].map((stat, index) => (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: alpha(theme.palette.background.paper, 0.5),
                                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-3px)',
                                                borderColor: alpha(theme.palette[stat.color].main, 0.3),
                                            }
                                        }}
                                    >
                                        <Box sx={{ color: `${stat.color}.main`, mb: 0.5 }}>{stat.icon}</Box>
                                        <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.number}</Typography>
                                        <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, color: 'text.secondary' }}>
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Navigation Tabs - Container único sticky */}
            <Box
                sx={{
                    // Mantém estilo visual, mas deixa de ser sticky para acompanhar o scroll
                    backgroundColor: theme.palette.background.default,
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
            >
                {/* Formation Tabs - Nível 1 */}
                <Box
                    sx={{
                        py: 1.5,
                        backgroundColor: alpha(theme.palette.background.default, 0.98),
                        backdropFilter: 'blur(10px)',
                        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
                    }}
                >
                    <Container maxWidth="lg">
                        <Tabs
                            value={selectedFormation}
                            onChange={handleFormationChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                minHeight: 44,
                                '& .MuiTab-root': {
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    minHeight: 44,
                                    px: 2.5,
                                },
                                '& .Mui-selected': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            {FORMATIONS.map((formation) => (
                                <Tab
                                    key={formation.id}
                                    label={`${formation.icon} ${formation.name} - ${formation.institution} (${getStudiesForFormation(formation.id).length})`}
                                    value={formation.id}
                                />
                            ))}
                        </Tabs>
                    </Container>
                </Box>

                {/* Course Tabs - Nível 2 */}
                <Box
                    sx={{
                        py: 1,
                        backgroundColor: alpha(theme.palette.background.paper, 0.95),
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Container maxWidth="lg">
                        <Tabs
                            value={selectedCourse}
                            onChange={handleCourseChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                minHeight: 36,
                                '& .MuiTab-root': {
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.8rem',
                                    minHeight: 36,
                                    px: 1.5,
                                    py: 0.5,
                                },
                                '& .Mui-selected': {
                                    color: 'secondary.main',
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: 'secondary.main',
                                },
                            }}
                        >
                            {availableCourses.map((course) => (
                            <Tab
                                key={course.id}
                                label={`${course.icon} ${course.name} (${getStudiesByCourse(course.id).length})`}
                                value={course.id}
                                sx={{
                                    '&.Mui-selected': {
                                        color: course.color,
                                    },
                                }}
                            />
                            ))}
                        </Tabs>
                    </Container>
                </Box>
            </Box>

            {/* Studies Content */}
            <Box sx={{ py: 6, backgroundColor: 'background.default', minHeight: '60vh' }}>
                <Container maxWidth="lg">
                    {selectedCourse === 'all' ? (
                        // Exibir todos agrupados por curso (filtrado por formação se necessário)
                        availableCourses.map((course) => {
                            const courseStudies = getStudiesByCourse(course.id);
                            if (courseStudies.length === 0) return null;
                            return (
                                <Box key={course.id} sx={{ mb: 8 }} data-aos="fade-up">
                                    {/* Course Header */}
                                    <Box sx={{ mb: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                            <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>
                                                {course.icon}
                                            </Typography>
                                            <Typography 
                                                variant="h5" 
                                                sx={{ 
                                                    fontWeight: 700,
                                                    color: course.color,
                                                }}
                                            >
                                                {course.name}
                                            </Typography>
                                            <Chip 
                                                label={`${courseStudies.length} estudos`} 
                                                size="small" 
                                                sx={{ 
                                                    backgroundColor: alpha(course.color, 0.1),
                                                    color: course.color,
                                                    fontWeight: 600,
                                                }} 
                                            />
                                        </Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', ml: 6 }}>
                                            {course.fullName}
                                        </Typography>
                                        <Divider sx={{ mt: 2, borderColor: alpha(course.color, 0.2) }} />
                                    </Box>

                                    {/* Course Studies Grid */}
                                    <Grid container spacing={3}>
                                        {courseStudies.map((study, index) => (
                                            <Grid item xs={12} sm={6} lg={4} key={study.id}>
                                                <Card sx={cardStyle}>
                                                    <Box sx={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                                                        <CardMedia
                                                            component="img"
                                                            image={study.image || placeholderImage}
                                                            alt={study.title}
                                                            className="study-image"
                                                            onError={(e) => { e.target.src = placeholderImage; }}
                                                            sx={{ height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                                        />
                                                        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />
                                                        <Chip
                                                            label={study.type}
                                                            size="small"
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 12,
                                                                left: 12,
                                                                backgroundColor: alpha(getTypeColor(study.type), 0.9),
                                                                color: '#fff',
                                                                fontWeight: 700,
                                                                fontSize: '0.7rem',
                                                            }}
                                                        />
                                                    </Box>

                                                    <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3, fontSize: '0.95rem' }}>
                                                            {study.title}
                                                        </Typography>

                                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flex: 1, lineHeight: 1.5, fontSize: '0.85rem' }}>
                                                            {study.description}
                                                        </Typography>

                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                                                            {study.technologies.slice(0, 3).map((tech, i) => (
                                                                <Chip
                                                                    key={i}
                                                                    label={tech}
                                                                    size="small"
                                                                    sx={{
                                                                        height: 22,
                                                                        fontSize: '0.65rem',
                                                                        backgroundColor: alpha(course.color, 0.1),
                                                                        color: course.color,
                                                                        fontWeight: 600,
                                                                    }}
                                                                />
                                                            ))}
                                                        </Box>

                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            startIcon={<GitHub sx={{ fontSize: 16 }} />}
                                                            href={study.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            sx={{
                                                                mt: 'auto',
                                                                borderRadius: 2,
                                                                textTransform: 'none',
                                                                fontWeight: 600,
                                                                fontSize: '0.8rem',
                                                                py: 0.8,
                                                            }}
                                                        >
                                                            Ver Mais
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            );
                        })
                    ) : (
                        // Exibir apenas o curso selecionado
                        <>
                            {COURSES.filter(c => c.id === selectedCourse).map((course) => (
                                <Box key={course.id} sx={{ mb: 4 }} data-aos="fade-up">
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                        <Typography variant="h3" sx={{ fontSize: '2rem' }}>
                                            {course.icon}
                                        </Typography>
                                        <Box>
                                            <Typography variant="h4" sx={{ fontWeight: 700, color: course.color }}>
                                                {course.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {course.fullName}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Divider sx={{ mb: 4, borderColor: alpha(course.color, 0.3) }} />
                                </Box>
                            ))}

                            <Grid container spacing={3}>
                                {filteredStudies.map((study, index) => {
                                    const course = COURSES.find(c => c.id === study.course);
                                    return (
                                        <Grid item xs={12} sm={6} lg={4} key={study.id} data-aos="fade-up" data-aos-delay={index * 30}>
                                            <Card sx={cardStyle}>
                                                <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                                                    <CardMedia
                                                        component="img"
                                                        image={study.image || placeholderImage}
                                                        alt={study.title}
                                                        className="study-image"
                                                        onError={(e) => { e.target.src = placeholderImage; }}
                                                        sx={{ height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                                    />
                                                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />
                                                    <Chip
                                                        label={study.type}
                                                        size="small"
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 12,
                                                            left: 12,
                                                            backgroundColor: alpha(getTypeColor(study.type), 0.9),
                                                            color: '#fff',
                                                            fontWeight: 700,
                                                            fontSize: '0.75rem',
                                                        }}
                                                    />
                                                </Box>

                                                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                                                        {study.title}
                                                    </Typography>

                                                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flex: 1, lineHeight: 1.6 }}>
                                                        {study.description}
                                                    </Typography>

                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 2 }}>
                                                        {study.technologies.slice(0, 4).map((tech, i) => (
                                                            <Chip
                                                                key={i}
                                                                label={tech}
                                                                size="small"
                                                                sx={{
                                                                    height: 24,
                                                                    fontSize: '0.7rem',
                                                                    backgroundColor: alpha(course?.color || theme.palette.primary.main, 0.1),
                                                                    color: course?.color || theme.palette.primary.main,
                                                                    fontWeight: 600,
                                                                }}
                                                            />
                                                        ))}
                                                    </Box>

                                                    <Button
                                                        variant="contained"
                                                        startIcon={<GitHub />}
                                                        href={study.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            mt: 'auto',
                                                            borderRadius: 2,
                                                            textTransform: 'none',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Ver Mais
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default Studies;
