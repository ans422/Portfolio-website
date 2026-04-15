import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Send, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-glow border border-white/10 text-cyan-400 text-sm font-bold mb-10 tracking-widest uppercase shadow-[0_0_30px_rgba(34,211,238,0.1)]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          Elite QA Automation Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[120px] font-black leading-[0.9] mb-8 tracking-tighter"
        >
          Elevating <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-400 to-cyan-400 text-glow">
            Digital Quality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          I build high-performance automation ecosystems that eliminate friction and 
          guarantee software excellence at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <a
            href="#projects"
            className="group relative px-10 py-5 rounded-2xl bg-white text-black font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center gap-3"
          >
            Explore Projects <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 rounded-2xl glass-glow border border-white/5 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3"
          >
            <Send size={20} className="text-primary-400" /> Start a Global Quality Chat
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to build</span>
        <ArrowDown size={16} />
      </motion.div>
    </div>
  );
}
