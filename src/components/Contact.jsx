import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative glass-glow rounded-[60px] p-12 md:p-24 overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(38,101,255,0.05)]">
      {/* Decorative background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-600/20 rounded-full blur-[120px]" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Let's build <br />
            <span className="text-gradient">Something Elite.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
            I'm currently accepting select high-impact projects. 
            If you're looking for world-class quality engineering, let's talk.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="flex flex-col gap-6"
        >
          <a
            href="mailto:contact@anas.dev"
            className="group w-full p-8 rounded-[32px] bg-white text-black flex items-center justify-between hover:scale-[1.02] transition-all duration-500 shadow-xl"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs font-black uppercase tracking-widest opacity-50">Direct Email</span>
              <span className="text-2xl font-black">contact@anas.dev</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={28} />
            </div>
          </a>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: <Github size={24} />, link: "#", name: "GitHub" },
              { icon: <Linkedin size={24} />, link: "#", name: "LinkedIn" },
              { icon: <Twitter size={24} />, link: "#", name: "X / Twitter" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="group p-6 rounded-[32px] glass-glow border border-white/5 flex flex-col items-center gap-3 hover:bg-white/5 transition-all hover:-translate-y-2"
              >
                <div className="text-slate-400 group-hover:text-primary-400 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
