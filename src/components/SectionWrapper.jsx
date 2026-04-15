import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
