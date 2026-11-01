import React from 'react';
import { motion } from 'framer-motion';
import { 
  Youtube, 
  Mountain, 
  Compass, 
  MapPin, 
  Video, 
  Palette, 
  Film, 
  Sparkles, 
  Play, 
  ExternalLink,
  Camera
} from 'lucide-react';

export default function Creator({ mousePosition }) {
  // Mouse parallax
  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.012;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.012;

  const vlogs = [
    {
      id: 'trekking',
      title: 'Sahyadri Forts & High-Altitude Trekking',
      tag: 'Trekking & Peaks',
      badge: '4K Cinema',
      elevation: '4,500+ FT',
      description:
        'Conquering ancient Maratha forts, mist-clad cliffs, and perilous monsoon ridges across the Western Ghats.',
      bgGradient: 'from-amber-600/30 via-orange-900/20 to-slate-950',
      borderColor: 'border-amber-500/30 hover:border-amber-400/60',
      accentColor: '#f59e0b',
      tilt: '-rotate-2 group-hover:rotate-0',
      floatConfig: { duration: 5.8, y: [0, -12, 0], delay: 0 },
      icon: Mountain,
      location: 'Harishchandragad & Rajgad',
    },
    {
      id: 'roadtrips',
      title: 'Konkan Coast & Western Ghats Road Trips',
      tag: 'Road Trips & Expeditions',
      badge: 'GoPro POV',
      elevation: '1,200 KM',
      description:
        'Winding hairpin curves, coastal sea breezes, hidden waterfall cascades, and monsoon bike expeditions.',
      bgGradient: 'from-orange-600/30 via-rose-900/20 to-slate-950',
      borderColor: 'border-orange-500/30 hover:border-orange-400/60',
      accentColor: '#f97316',
      tilt: 'rotate-3 group-hover:rotate-0',
      floatConfig: { duration: 6.4, y: [0, -15, 0], delay: 0.3 },
      icon: Compass,
      location: 'Konkan Coastal Highway & Amboli Ghat',
    },
    {
      id: 'cultural',
      title: 'Cultural Heritage & Ancient Folklore',
      tag: 'Cultural Exploration',
      badge: 'Documentary Lore',
      elevation: 'Historic Lore',
      description:
        'Unearthing centuries-old rock-cut temples, localized dialect traditions, and untold rural stories.',
      bgGradient: 'from-yellow-600/30 via-amber-900/20 to-slate-950',
      borderColor: 'border-yellow-500/30 hover:border-yellow-400/60',
      accentColor: '#eab308',
      tilt: '-rotate-3 group-hover:rotate-0',
      floatConfig: { duration: 5.2, y: [0, -10, 0], delay: 0.5 },
      icon: MapPin,
      location: 'Deccan Temples & Rural Maharashtra',
    },
  ];

  return (
    <section id="creator" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* Background warm cosmic glow for Creator section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-500/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill bg-amber-950/40 border-amber-400/30 text-amber-300 text-xs font-mono mb-4 shadow-glow-gold"
          >
            <Youtube className="w-4 h-4 text-red-400" />
            <span>CREATOR ORBIT &bull; TRAVEL &amp; STORYTELLING</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            SG Boy's Bhatkanti
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Beyond computer science and predictive models lies the thrill of the Sahyadris. Through 
            <span className="text-amber-300 font-semibold"> SG Boy's Bhatkanti</span>, I chronicle high-altitude
            treks, scenic road trips, and Maharashtra's timeless heritage with cinematic immersion.
          </p>
        </div>

        {/* Floating Tilted Vlog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vlogs.map((vlog) => {
            const Icon = vlog.icon;
            return (
              <motion.div
                key={vlog.id}
                animate={{
                  y: vlog.floatConfig.y,
                }}
                transition={{
                  duration: vlog.floatConfig.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: vlog.floatConfig.delay,
                }}
                style={{
                  x: parallaxX * (vlog.id === 'roadtrips' ? -1 : 1),
                  y: parallaxY,
                }}
                className="group relative"
              >
                {/* Glow behind thumbnail card */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 filter blur-xl pointer-events-none"
                  style={{ backgroundColor: vlog.accentColor }}
                />

                {/* Tilted Floating Glass Thumbnail */}
                <div
                  className={`relative p-6 rounded-3xl glass-panel bg-gradient-to-b ${vlog.bgGradient} border ${vlog.borderColor} transition-all duration-500 transform ${vlog.tilt} group-hover:scale-[1.03] shadow-2xl h-full flex flex-col justify-between`}
                >
                  {/* Thumbnail Visual Simulation */}
                  <div className="relative w-full h-44 rounded-2xl bg-black/40 border border-white/10 mb-5 overflow-hidden flex flex-col justify-between p-4 group-hover:border-amber-400/40 transition-colors">
                    {/* Decorative Top Badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                        <Icon className="w-3 h-3" />
                        {vlog.tag}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600/80 text-white font-bold tracking-wide">
                        {vlog.badge}
                      </span>
                    </div>

                    {/* Central Play Badge */}
                    <div className="self-center flex items-center justify-center w-12 h-12 rounded-full bg-white/10 group-hover:bg-amber-500/80 group-hover:scale-110 text-white transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>

                    {/* Location Badge */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {vlog.location}
                      </span>
                      <span className="text-amber-300 font-semibold">{vlog.elevation}</span>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {vlog.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                      {vlog.description}
                    </p>
                  </div>

                  {/* Watch Link */}
                  <div className="pt-3 border-t border-white/10 mt-auto flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                      <Youtube className="w-3.5 h-3.5 text-red-400" />
                      SG Boy's Bhatkanti
                    </span>
                    <a
                      href="https://youtube.com/@SGBoysBhatkanti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <span>Watch</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Video Editing Skills Highlight: Canva & Premiere Pro */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="p-8 rounded-3xl glass-panel bg-slate-900/60 border border-amber-400/20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Production Craft Overview */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-400/30 text-amber-300 text-xs font-mono mb-3">
                <Video className="w-3.5 h-3.5" />
                POST-PRODUCTION SUITE
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Cinematic Craftsmanship &amp; Visual Design
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                Every Bhatkanti episode is meticulously cut, color graded, and branded for maximum engagement. 
                Blending creative storytelling with professional editing workflows.
              </p>

              <a
                href="https://youtube.com/@SGBoysBhatkanti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                <Youtube className="w-4 h-4 fill-current text-red-600" />
                <span>Explore the YouTube Channel</span>
              </a>
            </div>

            {/* Right: Canva & Premiere Pro Dual Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Canva Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 text-teal-300">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Canva Pro</h4>
                    <span className="text-[10px] font-mono text-cyan-400">Thumbnails &amp; Brand Assets</span>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    High-CTR YouTube thumbnail composition
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Visual hierarchy &amp; dynamic Marathi typography
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Channel branding and social story cards
                  </li>
                </ul>
              </div>

              {/* Premiere Pro Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Adobe Premiere Pro</h4>
                    <span className="text-[10px] font-mono text-purple-400">4K Timeline &amp; Audio Mastery</span>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Cinematic 4K grading &amp; nature LUTs
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Dynamic speed ramping on ridge scrambles
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Multi-layer audio mixing &amp; ambient soundscapes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
