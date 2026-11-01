import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, Zap, Wind, Radio } from 'lucide-react';

export default function GravityController({ gravityMode, setGravityMode, triggerPulse }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
      <div className="relative">
        {/* Expanded Controls Popover */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-64 p-4 rounded-2xl glass-panel bg-slate-950/90 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl mb-2"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  GRAVITY MODULATOR
                </span>
                <span className="text-[10px] text-slate-400">PHYSICS v2.4</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setGravityMode('zero-g')}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-mono transition-all text-left ${
                    gravityMode === 'zero-g'
                      ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-200'
                      : 'bg-white/[0.03] border border-white/5 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Orbit className="w-4 h-4 text-cyan-400" />
                    Zero-G Orbit
                  </span>
                  <span className="text-[10px] text-emerald-400">0.00 G</span>
                </button>

                <button
                  onClick={() => setGravityMode('drift')}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-mono transition-all text-left ${
                    gravityMode === 'drift'
                      ? 'bg-purple-500/20 border border-purple-400/50 text-purple-200'
                      : 'bg-white/[0.03] border border-white/5 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-purple-400" />
                    Cosmic Drift
                  </span>
                  <span className="text-[10px] text-purple-300">-0.05 G</span>
                </button>

                <button
                  onClick={triggerPulse}
                  className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-mono bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Trigger Gravity Impulse
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controller Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel bg-slate-950/80 border border-cyan-400/30 hover:border-cyan-400/70 text-cyan-300 shadow-glow-cyan text-xs font-mono cursor-pointer backdrop-blur-xl transition-all"
        >
          <Orbit className="w-4 h-4 animate-spin-slow text-cyan-400" />
          <span className="hidden sm:inline">Gravity Modulator</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </motion.button>
      </div>
    </div>
  );
}
