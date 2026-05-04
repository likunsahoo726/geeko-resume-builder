import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Builder from './components/Builder/Builder';
import Templates from './components/Templates/Templates';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AuthModal from './components/Auth/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onLoginClick={() => setIsAuthOpen(true)} />
      
      <main>
        <Hero />
        <Features />
        <Builder />
        <Templates />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </div>
  );
}

export default App;