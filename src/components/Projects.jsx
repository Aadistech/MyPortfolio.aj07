import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  TrendingDown, 
  Navigation, 
  BookOpen, 
  Check, 
  Cpu, 
  X,
  Layers,
  BarChart2,
  Database
} from 'lucide-react';

// Reusable 3D-Tilting Glass Card Component
function TiltCard({ project, onSelect, index, mousePosition }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.015;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.015;

  return (
    <motion.div
      animate={{
        y: [0, index % 2 === 0 ? -12 : -8, 0],
      }}
      transition={{
        duration: 5.6 + index * 0.7,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      }}
      style={{
        x: parallaxX * (index === 1 ? -1 : 1),
        y: parallaxY,
      }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="group relative h-full flex flex-col justify-between p-7 rounded-3xl glass-panel bg-slate-900/60 border border-white/10 hover:border-cyan-400/40 transition-colors duration-300 preserve-3d shadow-2xl cursor-pointer"
        onClick={() => onSelect(project)}
      >
        {/* Dynamic Glare Reflection */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 60%)`,
          }}
        />

        {/* Ambient Project Glow */}
        <div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 filter blur-2xl pointer-events-none"
          style={{ backgroundColor: project.glowColor }}
        />

        {/* Top Header of Card */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-mono font-medium border"
              style={{
                backgroundColor: `${project.glowColor}15`,
                borderColor: `${project.glowColor}40`,
                color: project.glowColor,
              }}
            >
              {project.badge}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-cyan-400 mb-4">{project.subtitle}</p>

          <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
            {project.description}
          </p>

          {/* Key Features Chips */}
          <div className="space-y-2 mb-6">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Tech Stack Pills & Action Buttons */}
        <div className="relative z-10 pt-4 border-t border-white/10 mt-auto">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-400/30 hover:bg-cyan-900/40 transition-colors"
              >
                <span>Specs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ mousePosition }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'aadibi',
      title: 'AadiBI',
      subtitle: 'Customer Churn Analysis & Prediction System',
      badge: 'Machine Learning & Flask',
      glowColor: '#38bdf8',
      description:
        'An enterprise predictive intelligence system designed to detect early customer churn signals, compute risk probabilities using statistical classification models, and output actionable retention strategies via an interactive Flask analytics dashboard.',
      features: [
        'Predictive churn classification utilizing Scikit-learn pipelines',
        'Cohort segmentation & behavioral churn driver attribution',
        'Interactive Flask RESTful API serving model inferences',
        'Dynamic data visualizer built with Pandas and Seaborn metrics',
      ],
      tech: ['Machine Learning', 'Flask', 'Pandas', 'Scikit-learn', 'Data Analytics', 'Python'],
      github: 'https://github.com/Aadistech/AadiBI',
      liveUrl: 'https://aadibi.hexmind.in',
      architecture: [
        'Data Ingestion: High-volume customer activity logs processed via Pandas',
        'Preprocessing: Missing-value imputation, one-hot encoding, feature normalization',
        'Model Engine: Random Forest & Gradient Boosted Classifiers tuned for recall',
        'API Gateway: Flask microservice exposing /predict and /analytics endpoints',
      ],
      metrics: 'Tested on telecom & subscription datasets with 89% accuracy and high recall.',
    },
    {
      id: 'transx',
      title: 'TransX',
      subtitle: 'Smart Urban Mobility Platform & Transit Hub',
      badge: 'Data Management & Landing Page',
      glowColor: '#2dd4bf',
      description:
        'Next-generation smart urban mobility ecosystem engineered to streamline public transit navigation, multi-modal route scheduling, and fleet data aggregation through a high-performance modern web interface.',
      features: [
        'Multi-modal route mapping and transit schedule aggregation',
        'Real-time transit state tracking with seamless data pipelines',
        'High-conversion, responsive interactive landing page',
        'Admin dashboard for fleet status and commuter traffic load',
      ],
      tech: ['React', 'Data Management', 'Urban Transit', 'REST APIs', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Aadistech/TransX',
      architecture: [
        'State Layer: Centralized transit telemetry cache',
        'Routing Engine: Graph-based shortest path calculation across multi-modal transit',
        'Presentation: Framer Motion fluid transitions & responsive Tailwind components',
        'Telemetry: Event-driven updates for timetable changes and delays',
      ],
      metrics: 'Engineered for sub-100ms UI responsiveness across desktop and mobile devices.',
    },
    {
      id: 'digital-preservation',
      title: 'Digital Preservation',
      subtitle: 'Archiving Regional Languages, Dialects & Folklore',
      badge: 'Cultural Archival & NLP',
      glowColor: '#a855f7',
      description:
        'A dedicated digital humanities and computational archival initiative engineered to record, catalog, and preserve endangered regional languages, local dialects, and oral storytelling traditions for posterity.',
      features: [
        'Structured audio cataloging with phonetic dialect indexing',
        'Community storytelling vault with localized folklore tagging',
        'Linguistic metadata preservation for endangered native accents',
        'Open access cultural repository for researchers & linguists',
      ],
      tech: ['Python', 'Audio Processing', 'Metadata Cataloging', 'Cultural Informatics', 'Open Data'],
      github: 'https://github.com/Aadistech/Digital-Preservation',
      architecture: [
        'Ingestion Pipeline: High-fidelity audio intake with noise reduction filtering',
        'Metadata Schema: Dublin Core-compliant linguistic tagging and regional mapping',
        'Search Engine: Dialect taxonomy index powered by Python audio metadata parsers',
        'Archival Storage: Redundant cold storage structure for cultural heritage audio',
      ],
      metrics: 'Focused on safeguarding indigenous Maharashtra and regional Indian oral traditions.',
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-cyan-950/30 border-cyan-400/20 text-cyan-300 text-xs font-mono mb-4 shadow-glow-cyan"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>GRAVITY-DEFYING INNOVATION</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Creations
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hover over any project to inspect its 3D orbital perspective. Built with end-to-end craftsmanship
            from predictive data science to real-world software platforms.
          </p>
        </div>

        {/* 3D Tilting Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <TiltCard
              key={project.id}
              project={project}
              index={index}
              mousePosition={mousePosition}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Interactive Deep-Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative max-w-2xl w-full p-6 sm:p-8 rounded-3xl glass-panel bg-slate-950/95 border border-cyan-500/30 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${selectedProject.glowColor}15`,
                      borderColor: `${selectedProject.glowColor}40`,
                      color: selectedProject.glowColor,
                    }}
                  >
                    {selectedProject.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-6">{selectedProject.subtitle}</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {selectedProject.description}
                </p>

                {/* Architecture & Pipeline */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    System Architecture &amp; Data Pipeline
                  </h4>
                  <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    {selectedProject.architecture.map((arch, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-mono">0{i + 1}.</span>
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Callout */}
                <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 mb-6">
                  <p className="text-xs font-mono text-cyan-300">
                    <span className="font-bold">IMPACT METRIC: </span>
                    {selectedProject.metrics}
                  </p>
                </div>

                {/* Footer of modal */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20"
                      >
                        <span>Launch Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-slate-200 glass-pill hover:bg-white/[0.08] hover:text-cyan-300 border border-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
