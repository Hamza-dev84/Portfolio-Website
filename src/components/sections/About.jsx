"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

// Ye variant Hero jaisa hi hai - parent stagger karega children ko
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        {/* Section heading */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
          <span className="font-mono text-indigo-400 text-lg">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-neutral-800" />
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-400 leading-relaxed mb-6"
        >
          {aboutData.intro}
        </motion.p>

        {/* Journey paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-400 leading-relaxed mb-10"
        >
          {aboutData.journey}
        </motion.p>

        {/* Education card */}
        <motion.div
          variants={itemVariants}
          className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/40"
        >
          <p className="font-mono text-xs text-indigo-400 mb-2">EDUCATION</p>
          <h3 className="text-white font-semibold text-lg">
            {aboutData.education.degree}
          </h3>
          <p className="text-neutral-400 text-sm mt-1">
            {aboutData.education.institution} · {aboutData.education.duration}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}