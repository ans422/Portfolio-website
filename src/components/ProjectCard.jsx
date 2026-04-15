import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[32px] glass-glow border border-white/5 transition-all duration-500"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="aspect-[16/10] relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Animated Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-black tracking-widest text-primary-400 flex items-center gap-2">
            <Zap size={12} className="fill-primary-400" /> High Performance
          </div>
        </div>
      </div>
      
      <div className="p-8 relative z-10">
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-white/5 text-slate-300 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-black mb-3 group-hover:text-primary-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
          {project.desc}
        </p>
        
        <div className="flex gap-6">
          <a
            href={project.github}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all group/link"
          >
            <Github size={18} className="group-hover/link:rotate-12 transition-transform" /> Repository
          </a>
          <a
            href={project.live}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all group/link"
          >
            <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
