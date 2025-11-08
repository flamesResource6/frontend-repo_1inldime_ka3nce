import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Showcase from './components/Showcase.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        <section id="home" className="relative"><Hero /></section>
        <section id="features" className="relative"><Features /></section>
        <section id="showcase" className="relative"><Showcase /></section>
      </main>
      <footer className="border-t border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} AuraAI — All rights reserved.</p>
          <div className="text-sm text-white/60">Built with love, motion, and 3D.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
