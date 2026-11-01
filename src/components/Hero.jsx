import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Github, Sparkles, Orbit, Cpu, ShieldCheck, Database } from 'lucide-react';

export default function Hero({ mousePosition }) {
  // Parallax shifts for hero elements
  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.015;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.015;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Floating Hero Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Floating Pill: System Status */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              x: parallaxX * 0.8,
              y: parallaxY * 0.8,
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-cyan-950/30 border-cyan-400/20 text-cyan-300 text-xs font-mono mb-6 shadow-glow-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="tracking-wider uppercase">Zero-Gravity Environment Active</span>
          </motion.div>

          {/* Big Bold Floating Typography */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              x: parallaxX,
              y: parallaxY,
            }}
            className="relative"
          >
            {/* Ambient Title Glow behind typography */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/15 rounded-full filter blur-3xl pointer-events-none" />

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Aaditya <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Jadhav
              </span>
            </h1>

            <div className="inline-block px-3 py-1 mb-5 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-300 font-mono text-sm sm:text-base">
              Computer Science Student &amp; Developer
            </div>
          </motion.div>

          {/* Narrative / Mission Statement */}
          <motion.p
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
            className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-light"
          >
            Crafting machine learning architectures, predictive churn analytics, and intelligent web applications 
            with zero computational drag. Driven by curiosity, regional storytelling, and full-stack innovation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary Floating CTA */}
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95"
            >
              <span>Explore My Universe</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/Aadistech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm text-slate-200 glass-pill bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>@Aadistech</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
            className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center lg:justify-start gap-8 text-xs font-mono text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>CORE: ML &amp; Python</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>CREATOR: SG Boy's Bhatkanti</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Zero-Gravity Levitation Instrument Core */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Orbital Rings around core */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-purple-500/20 animate-spin-slow pointer-events-none" />

          {/* Main Floating Glass Capsule */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              x: parallaxX * -1.2,
              y: parallaxY * -1.2,
            }}
            className="relative w-full max-w-sm p-6 rounded-3xl glass-panel bg-slate-900/60 border border-cyan-400/20 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl"
          >
            {/* Header of instrument card */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                <Orbit className="w-3 h-3 animate-spin" />
                ORBITAL TELEMETRY
              </span>
            </div>

            {/* Astronaut / Computer Scientist Profile badge */}
            <div className="flex items-center gap-4 mb-5 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-inner-glow">
                AJ
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">Aaditya Jadhav</h2>
                <p className="text-xs font-mono text-cyan-400">CS &amp; ML Engineer</p>
                <p className="text-[11px] text-slate-400">Pune, Maharashtra</p>
              </div>
            </div>

            {/* System Status Metrics */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-black/30 border border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  GRAVITY VECTOR
                </span>
                <span className="text-emerald-300 font-semibold">0.00 G (Neutral)</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-black/30 border border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  KEY FOCUS
                </span>
                <span className="text-slate-200">AadiBI Churn Analytics</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-black/30 border border-white/5">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  INTEGRITY
                </span>
                <span className="text-cyan-300">100% Orbit Verified</span>
              </div>
            </div>

            {/* Terminal Live String */}
            <div className="mt-4 p-2.5 rounded-xl bg-black/50 border border-white/5 font-mono text-[11px] text-slate-400">
              <span className="text-cyan-400">$ </span>
              <span className="text-slate-200">launch --target="Zero-G Portfolio"</span>
              <span className="inline-block w-1.5 h-3 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </div>
          </motion.div>

          {/* Floating Satellite Tag 1: Top Right */}
          <motion.div
            animate={{
              y: [0, -16, 0],
              x: [0, 6, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="hidden sm:flex absolute -top-4 -right-2 px-3 py-1.5 rounded-full glass-pill bg-purple-950/40 border-purple-400/30 text-purple-200 text-xs font-mono shadow-glow-violet items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>λ ML Pipeline</span>
          </motion.div>

          {/* Floating Satellite Tag 2: Bottom Left */}
          <motion.div
            animate={{
              y: [0, 14, 0],
              x: [0, -6, 0],
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="hidden sm:flex absolute -bottom-6 -left-4 px-3.5 py-1.5 rounded-full glass-pill bg-cyan-950/40 border-cyan-400/30 text-cyan-200 text-xs font-mono shadow-glow-cyan items-center gap-1.5"
          >
            <Orbit className="w-3.5 h-3.5 text-cyan-400" />
            <span>Weightless Orbit</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
