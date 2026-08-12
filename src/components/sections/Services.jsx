"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import SpotlightCard from "@/components/ui/SpotlightCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-[var(--color-accent)] text-lg">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            What I Can Do
          </h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {servicesData.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <SpotlightCard className="h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 hover:border-[var(--color-accent)]/40 transition-colors">
                <h3 className="text-[var(--color-text)] font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}