import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Creator from './components/Creator';
import Contact from './components/Contact';
import GravityController from './components/GravityController';

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  const [gravityMode, setGravityMode] = useState('zero-g');
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    let frameId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const toggleGravity = () => {
    setGravityMode((prev) => (prev === 'zero-g' ? 'drift' : 'zero-g'));
  };

  const triggerPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#03050c] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Dynamic Cosmic Background with Starfield & Mouse Parallax */}
      <CosmicBackground mousePosition={mousePosition} />

      {/* Impulse Wave Ripple Effect when user triggers Gravity Impulse */}
      <AnimatePresence>
        {pulseActive && (
          <motion.div
            initial={{ scale: 0.1, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-cyan-400 pointer-events-none z-30 shadow-[0_0_50px_rgba(56,189,248,0.6)]"
          />
        )}
      </AnimatePresence>

      {/* Floating Glassmorphism Navbar */}
      <Navbar gravityMode={gravityMode} toggleGravity={toggleGravity} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero mousePosition={mousePosition} />
        <Skills mousePosition={mousePosition} />
        <Projects mousePosition={mousePosition} />
        <Creator mousePosition={mousePosition} />
      </main>

      {/* Contact Section & Footer with glowing horizon line */}
      <Contact mousePosition={mousePosition} />

      {/* Floating Micro-Gravity Modulator Widget */}
      <GravityController
        gravityMode={gravityMode}
        setGravityMode={setGravityMode}
        triggerPulse={triggerPulse}
      />
    </div>
  );
}
