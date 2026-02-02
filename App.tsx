
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadMagnet from './components/LeadMagnet';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the intro animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen selection:bg-[#00f3ff] selection:text-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LeadMagnet />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
