import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ShieldCheck } from "lucide-react";

const experience = [
  {
    company: "TechNova Solutions",
    role: "Senior QA Automation Engineer",
    period: "2024 - Present",
    desc: "Masterminded the transition to Playwright across 12 microservices, reducing flaky tests by 95% and accelerating release velocity by 40%.",
    achievements: ["Zero-Downtime Deployment Validation", "AI-Driven Flaky Test Detection", "Architected Enterprise Framework"]
  },
  {
    company: "Global Quality Labs",
    role: "Automation Engineer",
    period: "2023 - 2024",
    desc: "Engineered a cross-platform Selenium grid capable of running 500+ parallel threads, providing instant feedback for global e-commerce deployments.",
    achievements: ["Infinite Scalability Architect", "Multi-Region API Validation", "CI/CD Pipeline Security Lead"]
  },
  {
    company: "StartUp Hub",
    role: "Manual QA Specialist",
    period: "2022 - 2023",
    desc: "Pioneered the quality culture in a fast-paced fintech environment. Identified structural vulnerabilities that saved $200k+ in potential fraud losses.",
    achievements: ["Critical Path Analysis", "Security-First Manual Testing", "Product Strategy Consultant"]
  }
];

export default function Experience() {
  return (
    <div className="relative space-y-24">
      {/* Central Line */}
      <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent opacity-30" />

      {experience.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Content Card */}
          <div className="w-full md:w-[45%] pl-16 md:pl-0">
            <div className={`p-8 rounded-[32px] glass-glow border border-white/5 relative group transition-all duration-500 hover:scale-[1.02] ${
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            }`}>
              <div className={`absolute top-8 ${index % 2 === 0 ? "md:-right-4" : "md:-left-4"} -left-4 w-8 h-8 rounded-full bg-black border-4 border-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-20`} />
              
              <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                <span className="px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-[10px] font-black tracking-widest uppercase border border-primary-500/20">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-3xl font-black mb-1 tracking-tight text-white group-hover:text-primary-400 transition-colors">{exp.role}</h3>
              <div className={`flex items-center gap-2 text-primary-400 font-bold mb-6 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                <Briefcase size={18} />
                {exp.company}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light italic">
                "{exp.desc}"
              </p>

              <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                {exp.achievements.map((a) => (
                  <span key={a} className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] font-bold text-slate-300">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Empty Space for layout */}
          <div className="hidden md:block w-[45%]" />
        </motion.div>
      ))}
    </div>
  );
}
