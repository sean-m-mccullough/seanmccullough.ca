import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, Group, Lightbulb } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(2),
}));

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code />,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies including React, Node.js, TypeScript, and cloud platforms.',
    },
    {
      icon: <Group />,
      title: 'Team Leadership',
      description: 'Experienced in leading development teams, mentoring and coaching developers, and driving technical decisions.',
    },
    {
      icon: <Lightbulb />,
      title: 'Problem Solving',
      description: 'Passionate about solving complex technical challenges and optimizing system performance.',
    },
  ];

  return (
    <SectionContainer id="about">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
        >
          I am a software engineer with over a decade of hands-on experience building scalable, high-performance systems across diverse industries. My journey has allowed me to work with talented teams and learn from varied challenges, from architecting cloud-based solutions to supporting legacy systems. I've been fortunate to contribute to projects that make a real difference, whether improving customer experiences or streamlining internal processes.
        </Typography>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
          >
            Throughout my career, I've enjoyed collaborating with colleagues, product owners, and stakeholders to turn ideas into reliable, maintainable software. Leading teams and mentoring fellow engineers has been especially rewarding, as I value open communication, continuous learning, and fostering a supportive environment. My technical toolkit includes modern JavaScript frameworks, cloud platforms, and tools for testing and deployment, but I'm always eager to explore new technologies and approaches.
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
          >
            I believe that successful engineering is about more than just code—it's about understanding needs, solving problems thoughtfully, and delivering solutions that stand the test of time. I approach each project with curiosity and dedication, striving to grow as a professional and as a teammate. If my experience and perspective can contribute to a project or team, I'm always open to new opportunities and meaningful collaborations.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper>
                {feature.icon}
              </IconWrapper>
              <Typography variant="h4" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </FeatureCard>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;