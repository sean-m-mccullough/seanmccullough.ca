import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { KeyboardArrowDown } from '@mui/icons-material';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: 'white',
  position: 'relative',
}));

const ScrollIndicator = styled(Box)(() => ({
  position: 'absolute',
  bottom: 30,
  left: '50%',
  transform: 'translateX(-50%)',
  animation: 'bounce 2s infinite',
  cursor: 'pointer',
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
}));

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer id="home">
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h1" component="h1">
            Sean McCullough
          </Typography>
          <Typography variant="h3" component="h2" sx={{ opacity: 0.9 }}>
            Software Engineer
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.8, fontSize: '1.2rem' }}>
            Passionate about building scalable web applications and leading and collaborating with high-performing teams.
            Specialized in modern JavaScript frameworks, cloud architecture, and developer experience.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
      
      <ScrollIndicator onClick={scrollToAbout}>
        <KeyboardArrowDown sx={{ fontSize: 40 }} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;