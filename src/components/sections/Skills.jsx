"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import TiltCard from "@/components/ui/TiltCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ perspective: 800 }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-[var(--color-accent)] text-lg">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Skills
          </h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="font-mono text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div key={skill.name} variants={cardVariants}>
                      <TiltCard className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text)] cursor-default hover:border-[var(--color-accent)]/50">
                        <Icon className="text-[var(--color-accent)]" size={16} />
                        {skill.name}
                      </TiltCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}