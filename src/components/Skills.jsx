import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Zap, 
  BarChart3, 
  BrainCircuit, 
  Flame, 
  GitBranch, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function Skills({ mousePosition }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Parallax shifts for floating skills
  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.012;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.012;

  const skillsData = [
    {
      id: 'python',
      name: 'Python',
      category: 'core',
      level: 'Advanced',
      icon: Code2,
      glowColor: '#38bdf8',
      accentBg: 'from-blue-500/20 to-yellow-500/10',
      borderColor: 'border-sky-400/30 group-hover:border-sky-400/70',
      textColor: 'text-sky-300',
      description: 'Primary programming language for machine learning modeling, algorithmic processing, and backend systems.',
      highlight: 'Core engine powering AadiBI Churn Modeling and Digital Preservation archival tools.',
      floatDuration: 5.4,
      floatY: [0, -14, 0],
      floatX: [0, 4, 0],
      delay: 0,
    },
    {
      id: 'flask',
      name: 'Flask',
      category: 'backend',
      level: 'Proficient',
      icon: Server,
      glowColor: '#2dd4bf',
      accentBg: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-teal-400/30 group-hover:border-teal-400/70',
      textColor: 'text-teal-300',
      description: 'Lightweight WSGI web framework for serving machine learning models, RESTful endpoints, and rapid prototyping.',
      highlight: 'Built the microservice API for AadiBI predicting customer churn in real time.',
      floatDuration: 6.2,
      floatY: [0, -11, 0],
      floatX: [0, -5, 0],
      delay: 0.3,
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'backend',
      level: 'Advanced',
      icon: Zap,
      glowColor: '#06b6d4',
      accentBg: 'from-cyan-500/20 to-teal-500/10',
      borderColor: 'border-cyan-400/30 group-hover:border-cyan-400/70',
      textColor: 'text-cyan-300',
      description: 'High-performance asynchronous Python web framework with auto-generated OpenAPI documentation and type validation.',
      highlight: 'Asynchronous event handling and rapid data pipelining for scalable microservices.',
      floatDuration: 5.0,
      floatY: [0, -13, 0],
      floatX: [0, 3, 0],
      delay: 0.6,
    },
    {
      id: 'pandas',
      name: 'Pandas',
      category: 'ml',
      level: 'Advanced',
      icon: BarChart3,
      glowColor: '#818cf8',
      accentBg: 'from-indigo-500/20 to-purple-500/10',
      borderColor: 'border-indigo-400/30 group-hover:border-indigo-400/70',
      textColor: 'text-indigo-300',
      description: 'High-throughput tabular data structures, exploratory data analysis (EDA), cleaning, and feature engineering.',
      highlight: 'Processed multi-variable customer datasets and churn cohorts in AadiBI.',
      floatDuration: 6.8,
      floatY: [0, -15, 0],
      floatX: [0, -4, 0],
      delay: 0.2,
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn',
      category: 'ml',
      level: 'Advanced',
      icon: BrainCircuit,
      glowColor: '#f59e0b',
      accentBg: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-400/30 group-hover:border-amber-400/70',
      textColor: 'text-amber-300',
      description: 'Statistical modeling, supervised classification algorithms, Random Forests, model evaluation, and cross-validation.',
      highlight: 'Trained, hyperparameter-tuned, and deployed predictive churn classifiers.',
      floatDuration: 5.7,
      floatY: [0, -12, 0],
      floatX: [0, 5, 0],
      delay: 0.5,
    },
    {
      id: 'firebase',
      name: 'Firebase',
      category: 'cloud',
      level: 'Proficient',
      icon: Flame,
      glowColor: '#f97316',
      accentBg: 'from-orange-500/20 to-yellow-500/10',
      borderColor: 'border-orange-400/30 group-hover:border-orange-400/70',
      textColor: 'text-orange-300',
      description: 'Cloud Firestore NoSQL database, authentication, serverless functions, and real-time state synchronization.',
      highlight: 'Configured cloud database backing and live data subscriptions for interactive web apps.',
      floatDuration: 6.5,
      floatY: [0, -13, 0],
      floatX: [0, -3, 0],
      delay: 0.4,
    },
    {
      id: 'git',
      name: 'Git',
      category: 'cloud',
      level: 'Advanced',
      icon: GitBranch,
      glowColor: '#f43f5e',
      accentBg: 'from-rose-500/20 to-red-500/10',
      borderColor: 'border-rose-400/30 group-hover:border-rose-400/70',
      textColor: 'text-rose-300',
      description: 'Distributed version control, branch merging workflows, CI/CD automation, and open-source collaboration on GitHub.',
      highlight: 'Active version management across repositories under @Aadistech.',
      floatDuration: 5.2,
      floatY: [0, -10, 0],
      floatX: [0, 4, 0],
      delay: 0.1,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ml', label: 'Machine Learning & Data' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'cloud', label: 'Cloud & Version Control' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory || s.category === 'core');

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-purple-950/30 border-purple-400/20 text-purple-300 text-xs font-mono mb-4 shadow-glow-violet"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WEIGHTLESS ARSENAL</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Floating Technical Stack
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Suspended in zero gravity — each technology represents a specialized instrument calibrated for 
            predictive intelligence, resilient backends, and rapid deployment.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-glow-cyan'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
                } border backdrop-blur-md`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Glowing Orbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.id;

            return (
              <motion.div
                key={skill.id}
                animate={{
                  y: skill.floatY,
                  x: skill.floatX,
                }}
                transition={{
                  duration: skill.floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: skill.delay,
                }}
                style={{
                  x: parallaxX * (skill.id.length % 2 === 0 ? 1 : -1),
                  y: parallaxY,
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative"
              >
                {/* Ambient dynamic glow behind each orb */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 filter blur-xl pointer-events-none"
                  style={{ backgroundColor: skill.glowColor }}
                />

                {/* Glassmorphic Orb Container */}
                <div
                  className={`relative h-full flex flex-col justify-between p-6 rounded-3xl glass-panel bg-gradient-to-b ${skill.accentBg} bg-slate-900/40 border ${skill.borderColor} transition-all duration-400 shadow-glass group-hover:-translate-y-2`}
                >
                  {/* Top Row: Orb Glyph + Level badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner-glow"
                      style={{
                        boxShadow: isHovered ? `0 0 20px -2px ${skill.glowColor}66` : 'none',
                      }}
                    >
                      <Icon className={`w-7 h-7 ${skill.textColor}`} />
                      {/* Weightless micro orbit indicator */}
                      <span
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: skill.glowColor }}
                      />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {skill.level}
                    </span>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom: Highlight of Practical Implementation */}
                  <div className="pt-3 border-t border-white/10 mt-auto">
                    <div className="flex items-start gap-1.5 text-[11px] font-mono text-slate-400">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${skill.textColor}`} />
                      <span>{skill.highlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Weightless Drift Summary Tagline */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2"
        >
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Calibrated for Zero Latency, Clean Modularity, and Data Accuracy</span>
        </motion.div>
      </div>
    </section>
  );
}
