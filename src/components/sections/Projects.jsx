
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import TiltCard from "@/components/ui/TiltCard";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageRevealVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" }, // right side se poori tarah cut hui
  visible: {
    clipPath: "inset(0 0% 0 0)", // fully visible
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-[var(--color-accent)] text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Projects
          </h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </motion.div>

        <div className="grid gap-10" style={{ perspective: 1000 }}>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group grid md:grid-cols-2 gap-6 items-center border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-bg-secondary)]"
            >

              <TiltCard
                className={`relative h-56 md:h-72 overflow-hidden ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <motion.div
                  variants={imageRevealVariants}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
                </motion.div>
              </TiltCard>


              <div className="p-6 md:p-2">
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-[var(--color-text-muted)]"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--color-bg)] text-[var(--color-text-muted)] text-xs rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <FaGithub size={18} />
                    Code
                  </motion.a>

                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}