import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
    </ThemeProvider>
  );
};

export default App;