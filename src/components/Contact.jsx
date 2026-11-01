import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Youtube, 
  Instagram,
  Mail, 
  Copy, 
  Check, 
  ArrowUp, 
  Send, 
  Sparkles, 
  Terminal,
  Globe
} from 'lucide-react';

export default function Contact({ mousePosition }) {
  const [copied, setCopied] = useState(false);
  const email = 'aaditya2508.jadhav25@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.01;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.01;

  return (
    <footer id="contact" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Contact Levitation Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: parallaxX, y: parallaxY }}
          className="relative p-8 sm:p-12 rounded-3xl glass-panel bg-slate-900/70 border border-white/10 hover:border-cyan-400/30 transition-colors shadow-2xl mb-20 text-center"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-cyan-950/40 border-cyan-400/30 text-cyan-300 text-xs font-mono mb-4 shadow-glow-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPEN FOR COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Connect Across the Orbital Expanse
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Interested in building machine learning architectures, high-performance web systems, 
            or discussing adventurous Sahyadri trails? Let's connect and build something extraordinary.
          </p>

          {/* Interactive Email Copy Pill & Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass-pill bg-white/[0.04] border border-white/15 text-slate-200 text-sm font-mono shadow-inner-glow">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{email}</span>
              <button
                onClick={handleCopyEmail}
                className="ml-2 p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-xs text-emerald-400 font-sans">
                    <Check className="w-4 h-4" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={`mailto:${email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>
          </div>

          {/* Key Links Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
            <a
              href="https://github.com/Aadistech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub: @Aadistech</span>
            </a>

            <a
              href="https://www.instagram.com/aadijdv_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-pink-500/10 border border-white/10 hover:border-pink-400/40 text-slate-300 hover:text-pink-400 text-xs font-mono transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram: @aadijdv_</span>
            </a>

            <a
              href="https://www.youtube.com/@sgboysbhatkanti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-red-500/10 border border-white/10 hover:border-red-400/40 text-slate-300 hover:text-red-400 text-xs font-mono transition-all"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>YouTube: SG Boy's Bhatkanti</span>
            </a>

            <a
              href="https://www.instagram.com/sgboysbhatkanti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-amber-400 text-xs font-mono transition-all"
            >
              <Instagram className="w-4 h-4 text-amber-400" />
              <span>Creator IG: @sgboysbhatkanti</span>
            </a>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* SUBTLE GLOWING HORIZON LINE */}
        {/* ============================================================== */}
        <div className="relative w-full my-8 flex items-center justify-center">
          {/* Broad Blurred Horizon Aura */}
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm" />
          {/* Core Sharp Horizon Laser Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
          {/* Subtle Horizon Glow Orb */}
          <div className="absolute w-64 h-12 bg-cyan-400/15 rounded-full filter blur-xl pointer-events-none" />
        </div>

        {/* Minimal Footer Floating Above the Horizon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>&copy; {new Date().getFullYear()} Aaditya Jadhav (Aadistech). Zero-Gravity Engine.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Orbit: Nominal
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
              title="Return to Orbit Zenith"
            >
              <span>Zenith</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
