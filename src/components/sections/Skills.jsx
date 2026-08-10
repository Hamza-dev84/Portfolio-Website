"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

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
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-14"
                >
                    <span className="font-mono text-indigo-400 text-lg">02.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
                    <div className="flex-1 h-px bg-neutral-800" />
                </motion.div>

                {/* Categories */}
                <div className="grid sm:grid-cols-2 gap-10">
                    {skillsData.map((category) => (
                        <div key={category.category}>
                            <h3 className="font-mono text-sm text-neutral-500 mb-4 uppercase tracking-wider">
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
                                    const Icon = skill.icon; // component ko variable mein le kar JSX mein use karna padta hai
                                    return (
                                        <motion.span
                                            key={skill.name}
                                            variants={cardVariants}
                                            whileHover={{ scale: 1.08, y: -3 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 cursor-default transition-colors hover:border-indigo-500/50 hover:text-white"
                                        >
                                            <Icon className="text-indigo-400" size={16} />
                                            {skill.name}
                                        </motion.span>
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