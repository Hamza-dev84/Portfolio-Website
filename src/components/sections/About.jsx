"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutData } from "@/data/about";

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
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About2() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgTextY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0.3]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 px-6 overflow-hidden"
    >

      <motion.span
        style={{ y: bgTextY }}
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 text-[180px] font-bold text-[var(--color-border)] select-none leading-none hidden md:block"
      >
        01
      </motion.span>

      <motion.div
        style={{ opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[var(--color-accent)] text-lg">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            About Me
          </h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-[var(--color-text-muted)] leading-relaxed mb-6"
        >
          {aboutData.intro}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[var(--color-text-muted)] leading-relaxed mb-10"
        >
          {aboutData.journey}
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, borderColor: "var(--color-accent)" }}
          transition={{ duration: 0.3 }}
          className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-secondary)]"
        >
          <p className="font-mono text-xs text-[var(--color-accent)] mb-2">
            EDUCATION
          </p>
          <h3 className="text-[var(--color-text)] font-semibold text-lg">
            {aboutData.education.degree}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm mt-1">
            {aboutData.education.institution} · {aboutData.education.duration}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}