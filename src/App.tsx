import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NetworkCanvas } from './components/NetworkCanvas';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  const [loading, setLoading] = useState(true);

  const handleFinish = useCallback(() => setLoading(false), []);

  if (loading) {
    return <LoadingScreen onFinish={handleFinish} />;
  }

  return (
    <>
      <NetworkCanvas />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
