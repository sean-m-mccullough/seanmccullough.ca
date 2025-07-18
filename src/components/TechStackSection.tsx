import React from 'react';
import { Box, Typography, Container, Chip, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
}));

const TechStackSection: React.FC = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Next.js', 'Material-UI', 'Styled Components', 'MobX', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Rest API', 'Kafka'],
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['Docker', 'GitHub Actions', 'GCP'],
    },
    {
      category: 'Tools & Testing',
      technologies: ['Git', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Vitest', 'ESLint', 'Prettier', 'NPM', 'PNPM'],
    },
    {
      category: 'AI & ML',
      technologies: ['GitHub Copilot', 'OpenAI', 'Anthropic Claude'],
    },
    {
      category: 'Collaborative Tools',
      technologies: ['Jira', 'Confluence', 'Slack', 'Trello', 'Figma'],
    },
  ];

  return (
    <SectionContainer id="tech-stack">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Tech Stack
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}
        >
          Technologies and tools I work with to bring ideas to life
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}
        >
          {techCategories.map((category, index) => (
            <CategoryCard key={index}>
              <Typography variant="h4" component="h3" gutterBottom color="primary">
                {category.category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    variant="outlined"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </CategoryCard>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default TechStackSection;