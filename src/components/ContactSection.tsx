import React from 'react';
import { Box, Typography, Container, Button, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));

const SocialButton = styled(IconButton)(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  width: 60,
  height: 60,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const ContactSection: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:sean.lets.chat@gmail.com';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/sean-m-mccullough', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sean-m-mccullough/', '_blank');
  };

  return (
    <SectionContainer id="contact">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h2" component="h2">
            Let's Connect
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
            I'm always interested in discussing new opportunities, interesting projects,
            or just having a conversation about technology. Feel free to reach out!
          </Typography>
          
          <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
            <SocialButton onClick={handleGitHubClick} aria-label="GitHub">
              <GitHub fontSize="large" />
            </SocialButton>
            <SocialButton onClick={handleLinkedInClick} aria-label="LinkedIn">
              <LinkedIn fontSize="large" />
            </SocialButton>
            <SocialButton onClick={handleEmailClick} aria-label="Email">
              <Email fontSize="large" />
            </SocialButton>
          </Stack>

          <Button
            variant="contained"
            size="large"
            onClick={handleEmailClick}
            sx={{
              mt: 3,
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Send me an email
          </Button>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default ContactSection;