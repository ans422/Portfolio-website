import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Zap } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass-glow rounded-[32px] border border-white/5 px-8 py-4 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(38,101,255,0.5)]">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            Anas<span className="text-primary-400">.dev</span>
          </span>
        </motion.div>

        <div className="hidden md:flex gap-10 items-center">
          {[
            { name: "Projects", href: "#projects" },
            { name: "Experience", href: "#experience" },
            { name: "Skills", href: "#skills" },
            { name: "Contact", href: "#contact" }
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
        >
          {dark ? (
            <Sun size={20} className="text-yellow-400 group-hover:rotate-90 transition-transform" />
          ) : (
            <Moon size={20} className="text-primary-400 group-hover:-rotate-12 transition-transform" />
          )}
        </button>
      </div>
    </nav>
  );
}
