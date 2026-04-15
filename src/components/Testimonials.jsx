import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior QA Lead @ TechNova",
    avatar: "/images/avatar_qa.png",
    text: "Anas is a world-class automation engineer. His ability to architect robust, zero-downtime frameworks is unparalleled. He's a strategic asset to any engineering team.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager @ Global Quality",
    avatar: "/images/avatar_pm.png",
    text: "Working with Anas transformed our release cycle. His deep understanding of both manual strategy and automated execution provided us with unprecedented confidence in our product.",
    stars: 5
  },
  {
    name: "Alex Rivera",
    role: "Lead Developer @ StartUp Hub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    text: "The stability of the suites Anas builds is incredible. No more flaky tests, just pure, reliable data. He simplifies complex quality problems with elegant code.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          className="group relative p-10 rounded-[40px] glass-glow border border-white/5 hover:border-primary-500/30 transition-all duration-500"
        >
          <Quote className="absolute top-8 right-10 text-primary-500/10 group-hover:text-primary-500/30 transition-colors" size={56} />
          
          <div className="flex gap-1 mb-8">
            {[...Array(t.stars)].map((_, index) => (
              <Star key={index} size={14} className="fill-yellow-500 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
            ))}
          </div>

          <p className="text-slate-300 text-lg font-light italic mb-10 leading-relaxed relative z-10">
            "{t.text}"
          </p>
          
          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-primary-500/20 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg"
            />
            <div>
              <h4 className="font-black text-white tracking-tight">{t.name}</h4>
              <p className="text-primary-400 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
