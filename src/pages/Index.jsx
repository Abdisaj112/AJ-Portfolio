import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import SEO from '@/components/SEO';

const Index = () => {
  const [loading, setLoading] = useState(true); // Re-enabled loading screen with animated logo

  return (
    <div className="min-h-screen bg-background relative">
      <SEO />
      <AnimatedBackground />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
