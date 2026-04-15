import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionWrapper from "./components/SectionWrapper";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import SkillsGrid from "./components/SkillsGrid";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const projects = [
  {
    title: "Selenium Automation Framework",
    desc: "A production-grade POM framework built with Java and Maven. Features multi-browser support, customized Allure reporting, and full integration with Jenkins pipelines for continuous quality validation.",
    image: "/images/selenium.png",
    tags: ["Selenium", "Java", "Jenkins", "Allure"],
    github: "#",
    live: "#",
  },
  {
    title: "Playwright E2E Suite",
    desc: "Modern, high-speed end-to-end testing suite leveraging Playwright's parallel execution capabilities. Built with TypeScript, it includes state storage for authenticated sessions and visual regression testing.",
    image: "/images/playwright.png",
    tags: ["Playwright", "TypeScript", "CI/CD", "Testing"],
    github: "#",
    live: "#",
  },
  {
    title: "Unified API Validator",
    desc: "Robust API testing solution focused on security and performance. Validates endpoint schemas, handles complex authentication flows, and monitors response times across global regions.",
    image: "/images/api.png",
    tags: ["API", "REST", "Security", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Strategic Bug Analysis",
    desc: "A comprehensive case study on identifying root causes in complex microservice architectures. Documented 150+ defects with detailed reproduction steps and mitigation strategies.",
    image: "/images/bug_hunting.png",
    tags: ["Analysis", "Manual QA", "Case Study"],
    github: "#",
    live: "#",
  },
];

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    if (dark) {
      document.body.classList.add("bg-slate-950");
      document.body.classList.remove("bg-white");
    } else {
      document.body.classList.remove("bg-slate-950");
      document.body.classList.add("bg-white");
    }
  }, [dark]);

  return (
    <div className={`min-h-screen transition-colors duration-700 bg-black-theme overflow-hidden relative ${dark ? "text-white" : "text-slate-900"}`}>
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>

      <Navbar dark={dark} setDark={setDark} />
      
      <main className="pt-16 relative z-10">
        <Hero />

        <SectionWrapper id="projects">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black">Featured <span className="text-gradient">Projects</span></h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="experience" className="bg-slate-900/20">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent-500 uppercase mb-4">Career</h2>
            <h3 className="text-4xl md:text-5xl font-black">3 Years of <span className="text-gradient">Impact</span></h3>
          </div>
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black">Technical <span className="text-gradient">Arsenal</span></h3>
          </div>
          <SkillsGrid />
        </SectionWrapper>

        <SectionWrapper id="testimonials" className="bg-slate-900/20">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent-500 uppercase mb-4">Feedback</h2>
            <h3 className="text-4xl md:text-5xl font-black">What My <span className="text-gradient">Team Says</span></h3>
          </div>
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm italic">
            "Quality is not an act, it is a habit." — Aristotle
          </p>
          <p className="text-slate-400 text-sm">
            © 2026 Muhammad Anas. Built with React, Tailwind & Passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
