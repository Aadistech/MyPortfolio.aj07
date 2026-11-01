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
  Flame,
  Eye,
  TrendingUp,
  Instagram,
  Scissors,
  Smartphone
} from 'lucide-react';

export default function Creator({ mousePosition }) {
  // Mouse parallax
  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.012;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.012;

  const channelUrl = 'https://www.youtube.com/@sgboysbhatkanti';
  const instagramUrl = 'https://www.instagram.com/sgboysbhatkanti/';

  // The 3 top/most-viewed reference trek episodes from @sgboysbhatkanti
  const vlogs = [
    {
      id: 'tikona',
      title: 'Tikona Fort (Vitandgad) Trek',
      tag: 'Most Viewed',
      badge: '4K Trek Guide',
      elevation: '3,500 FT',
      location: 'Maval, Pawna Lake, Pune',
      description:
        'Conquering the iconic triangular Vitandgad hill fort, historic bastion gates, Trimbakeshwar Mahadev temple, and panoramic views of Pawna Dam.',
      bgGradient: 'from-amber-600/30 via-orange-900/20 to-slate-950',
      borderColor: 'border-amber-500/30 hover:border-amber-400/60',
      accentColor: '#f59e0b',
      tilt: '-rotate-2 group-hover:rotate-0',
      floatConfig: { duration: 5.8, y: [0, -12, 0], delay: 0 },
      icon: Mountain,
      videoUrl: 'https://www.youtube.com/@sgboysbhatkanti/search?query=Tikona',
      metrics: 'Popular Sahyadri Series',
    },
    {
      id: 'karnala',
      title: 'Karnala Fort & Bird Sanctuary Expedition',
      tag: 'Top Trek',
      badge: 'Basalt Pinnacle',
      elevation: '1,440 FT',
      location: 'Panvel, Raigad District',
      description:
        'Hiking through dense forest trails inside Karnala Bird Sanctuary to scale the legendary 125-foot basalt rock chimney (Pandu\'s Tower).',
      bgGradient: 'from-orange-600/30 via-rose-900/20 to-slate-950',
      borderColor: 'border-orange-500/30 hover:border-orange-400/60',
      accentColor: '#f97316',
      tilt: 'rotate-3 group-hover:rotate-0',
      floatConfig: { duration: 6.4, y: [0, -15, 0], delay: 0.3 },
      icon: Compass,
      videoUrl: 'https://www.youtube.com/@sgboysbhatkanti/search?query=Karnala',
      metrics: 'High-Altitude Adventure',
    },
    {
      id: 'peb-fort',
      title: 'Peb Fort (Vikatgad) & Kadyavarcha Ganpati',
      tag: 'Adventure Special',
      badge: 'Ridge Climb',
      elevation: '2,100 FT',
      location: 'Neral - Matheran Ridge',
      description:
        'Extreme ridge walk featuring steep iron ladder climbs, rock-cut steps, caves, and the revered cliff-edge Kadyavarcha Ganpati shrine.',
      bgGradient: 'from-yellow-600/30 via-amber-900/20 to-slate-950',
      borderColor: 'border-yellow-500/30 hover:border-yellow-400/60',
      accentColor: '#eab308',
      tilt: '-rotate-3 group-hover:rotate-0',
      floatConfig: { duration: 5.2, y: [0, -10, 0], delay: 0.5 },
      icon: MapPin,
      videoUrl: 'https://www.youtube.com/@sgboysbhatkanti/search?query=Peb',
      metrics: 'Monsoon Ridge Expedition',
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
            <Youtube className="w-4 h-4 text-red-500" />
            <span>OFFICIAL YOUTUBE &bull; @sgboysbhatkanti</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            SG Boy's Bhatkanti
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Beyond computer science and predictive models lies the thrill of the Sahyadris. Through{' '}
            <span className="text-amber-300 font-semibold">SG Boy's Bhatkanti</span>, I chronicle high-altitude
            treks, scenic road trips, and Maharashtra's timeless heritage with cinematic immersion.
          </p>

          {/* Direct Channel Link Header Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-red-600/90 hover:bg-red-500 border border-red-400/40 shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>Visit @sgboysbhatkanti Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`${channelUrl}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-slate-300 glass-pill hover:text-amber-300 hover:border-amber-400/40 transition-all"
            >
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>All Video Uploads</span>
            </a>
          </div>
        </div>

        {/* Floating Tilted Vlog Cards Grid with Real Episode References */}
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
                  x: parallaxX * (vlog.id === 'karnala' ? -1 : 1),
                  y: parallaxY,
                }}
                className="group relative h-full"
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
                  {/* Thumbnail Visual Container with Link */}
                  <a
                    href={vlog.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-44 rounded-2xl bg-black/50 border border-white/10 mb-5 overflow-hidden group/thumb group-hover:border-amber-400/40 transition-colors"
                  >
                    {/* Decorative Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" />
                        {vlog.tag}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600/90 text-white font-bold tracking-wide">
                        {vlog.badge}
                      </span>
                    </div>

                    {/* Central Play Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600/80 group-hover/thumb:bg-red-500 group-hover/thumb:scale-115 text-white transition-all duration-300 backdrop-blur-md border border-white/30 shadow-xl shadow-red-950/60">
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/5">
                      <span className="flex items-center gap-1 truncate max-w-[180px]">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{vlog.location}</span>
                      </span>
                      <span className="text-amber-300 font-semibold shrink-0">{vlog.elevation}</span>
                    </div>
                  </a>

                  {/* Content Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {vlog.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                      {vlog.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400/90">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>{vlog.metrics}</span>
                    </div>
                  </div>

                  {/* Watch Link */}
                  <div className="pt-3 border-t border-white/10 mt-auto flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Youtube className="w-3.5 h-3.5 text-red-500" />
                      @sgboysbhatkanti
                    </span>
                    <a
                      href={vlog.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-400/30 hover:bg-amber-900/50 hover:text-white transition-all"
                    >
                      <span>Watch Episode</span>
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

              <div className="flex flex-wrap gap-3">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all duration-300 shadow-lg shadow-amber-500/20"
                >
                  <Youtube className="w-4 h-4 fill-current text-red-600" />
                  <span>Subscribe on YouTube</span>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:opacity-90 transition-all duration-300 shadow-lg shadow-rose-950/40"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>

            {/* Right: 4 Creative Tools Grid (Canva, Premiere Pro, CapCut, Instagram) */}
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
                    Visual hierarchy &amp; Marathi typography
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Channel branding and story graphics
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
                    <h4 className="text-base font-bold text-white">Premiere Pro</h4>
                    <span className="text-[10px] font-mono text-purple-400">4K Timeline &amp; Audio Mastery</span>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Cinematic 4K color grading &amp; nature LUTs
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Speed ramping on tricky ridge scrambles
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Multi-layer audio &amp; ambient wind soundscapes
                  </li>
                </ul>
              </div>

              {/* CapCut Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">CapCut</h4>
                    <span className="text-[10px] font-mono text-cyan-400">Viral Shorts &amp; Fast Pacing</span>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Fast-paced 9:16 vertical video editing
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Beat-synced jump cuts &amp; trail transitions
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Dynamic kinetic subtitles &amp; audio effects
                  </li>
                </ul>
              </div>

              {/* Instant by Instagram Card */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-500/50 hover:bg-white/[0.05] transition-all group/ig"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover/ig:text-pink-300 transition-colors">
                        Instant Instagram
                      </h4>
                      <span className="text-[10px] font-mono text-rose-400">@sgboysbhatkanti</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/ig:text-pink-300 transition-colors" />
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    Real-time summit stories &amp; live trail updates
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    Short-form viral reels &amp; drone panoramas
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    Community interaction, route Q&amp;As &amp; polls
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
