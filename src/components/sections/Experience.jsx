
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData } from "@/data/experience";

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-[var(--color-accent)] text-lg">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Experience
          </h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </motion.div>

        <div ref={timelineRef} className="relative pl-8">

          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <motion.div
            style={{ scaleY: lineHeight, transformOrigin: "top" }}
            className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-accent)]"
          />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative mb-12 last:mb-0"
            >

              <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-[var(--color-text)] font-semibold text-lg">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-[var(--color-accent)] text-sm mb-4">
                  {exp.company}
                </p>

                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-[var(--color-text-muted)]"
                    >
                      <span className="text-[var(--color-accent)] mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--color-bg)] text-[var(--color-text-muted)] text-xs rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}