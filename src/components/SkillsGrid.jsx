import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  ShieldCheck,
  Globe,
  Zap,
  Layers,
  Search
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Automation",
    skills: ["Selenium WebDriver", "Playwright", "Cypress", "Appium"],
    icon: <Cpu className="text-cyan-400" size={32} />,
    color: "from-cyan-500/20"
  },
  {
    title: "Language Stack",
    skills: ["Java (Expert)", "TypeScript", "Python", "JavaScript"],
    icon: <Code2 className="text-primary-400" size={32} />,
    color: "from-primary-500/20"
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Jenkins Pipelines", "GitHub Actions", "Docker", "Kubernetes"],
    icon: <Terminal className="text-emerald-400" size={32} />,
    color: "from-emerald-500/20"
  },
  {
    title: "Test Architecture",
    skills: ["API Automation", "Visual Testing", "Performance", "Security"],
    icon: <ShieldCheck className="text-accent-400" size={32} />,
    color: "from-accent-500/20"
  }
];

export default function SkillsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          className="group relative overflow-hidden p-8 rounded-[40px] glass-glow border border-white/5 hover:scale-[1.05] transition-all duration-500"
        >
          {/* Accent Background */}
          <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${cat.color} to-transparent blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-[24px] bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:rotate-[10deg] transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              {cat.icon}
            </div>
            
            <h3 className="text-2xl font-black mb-6 tracking-tight text-white">{cat.title}</h3>
            
            <ul className="space-y-4">
              {cat.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span className="text-slate-400 font-medium tracking-wide group-hover:text-slate-200 transition-colors">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
