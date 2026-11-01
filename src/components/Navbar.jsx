import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, Github, Youtube, Instagram, Menu, X, Sparkles, Terminal } from 'lucide-react';

export default function Navbar({ gravityMode, toggleGravity }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Orbit', href: '#hero' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'Creations', href: '#projects' },
    { name: 'SG Boy\'s Bhatkanti', href: '#creator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-5 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-panel bg-slate-950/70 border-cyan-500/20 shadow-glow-cyan'
            : 'glass-pill bg-white/[0.03] border-white/10'
        } backdrop-blur-xl max-w-5xl w-full`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-white font-semibold tracking-wide group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors shadow-inner-glow">
            <Orbit className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-slate-100 flex items-center gap-1.5">
              AADITYA <span className="text-cyan-400">JADHAV</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">@Aadistech</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors rounded-full hover:bg-white/[0.04]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls & External Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Antigravity Field Status Pill */}
          <button
            onClick={toggleGravity}
            title="Click to toggle Anti-Gravity Physics"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 cursor-pointer ${
              gravityMode === 'zero-g'
                ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/40 shadow-glow-cyan'
                : 'bg-purple-950/40 text-purple-300 border-purple-500/40 shadow-glow-violet'
            }"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-medium">
              {gravityMode === 'zero-g' ? 'Zero-G 0.0m/s²' : 'Float-Max Active'}
            </span>
          </button>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/Aadistech"
            target="_blank"
            rel="noopener noreferrer"
            title="Aaditya's GitHub"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/30 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* YouTube SG Boy's Bhatkanti Icon Link */}
          <a
            href="https://www.youtube.com/@sgboysbhatkanti"
            target="_blank"
            rel="noopener noreferrer"
            title="SG Boy's Bhatkanti YouTube"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-red-500/20 text-slate-300 hover:text-red-400 border border-white/10 hover:border-red-400/30 transition-all duration-200"
          >
            <Youtube className="w-4 h-4" />
          </a>

          {/* Personal Instagram Icon Link */}
          <a
            href="https://www.instagram.com/aadijdv_/"
            target="_blank"
            rel="noopener noreferrer"
            title="Aaditya's Instagram (@aadijdv_)"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-pink-500/20 text-slate-300 hover:text-pink-400 border border-white/10 hover:border-pink-400/30 transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 p-5 rounded-2xl glass-panel bg-slate-950/90 border-white/10 shadow-2xl flex flex-col gap-3 md:hidden z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                NAVIGATION SYSTEMS
              </span>
              <button
                onClick={toggleGravity}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
              >
                Zero-G
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-200 hover:text-cyan-300 hover:bg-white/[0.05] rounded-lg transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-around border-t border-white/10">
              <a
                href="https://github.com/Aadistech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.youtube.com/@sgboysbhatkanti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400"
              >
                <Youtube className="w-3.5 h-3.5" /> YouTube
              </a>
              <a
                href="https://www.instagram.com/aadijdv_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-pink-400"
              >
                <Instagram className="w-3.5 h-3.5" /> @aadijdv_
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
