import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-air-force-blue/30 selection:text-sunlit-clay">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
