"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const nameContainerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.04, delayChildren: 0.3 },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const NAME = "Muhammad Hamza";

export default function Hero() {
    const sectionRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const glowX = useTransform(mouseX, (val) => val - 200);
    const glowY = useTransform(mouseY, (val) => val - 200);

    const handleMouseMove = (e) => {
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
        >
            <motion.div
                style={{ x: glowX, y: glowY }}
                className="pointer-events-none absolute w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative max-w-3xl"
            >
                <motion.p
                    variants={itemVariants}
                    className="font-mono text-sm text-[var(--color-accent)] mb-4"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    variants={nameContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ perspective: 400 }}
                    className="text-5xl md:text-7xl font-bold text-[var(--color-text)] mb-4 flex flex-wrap justify-center gap-x-4"
                >
                    {NAME.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-flex whitespace-nowrap">
                            {word.split("").map((char, i) => (
                                <motion.span key={i} variants={letterVariants} className="inline-block">
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-4xl font-semibold text-[var(--color-text-muted)] mb-6"
                >
                    Full-Stack Developer
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    I build fast, scalable web applications using the MERN stack and
                    Next.js — from backend APIs to polished, animated frontends.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4 mb-10"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="px-6 py-3 bg-[var(--color-accent)] hover:opacity-90 text-white rounded-full font-medium transition-opacity"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/Hamza_Resume.pdf"
                        download
                        className="px-6 py-3 border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text)] rounded-full font-medium flex items-center gap-2 transition-colors"
                    >
                        <FileDown size={18} />
                        Download Resume
                    </motion.a>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.15, y: -2 }}
                        href="https://github.com/Hamza-dev84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.15, y: -2 }}
                        href="https://www.linkedin.com/in/muhammad-hamza-209181339"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={22} />
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 text-[var(--color-text-muted)]"
            >
                <ArrowDown size={20} />
            </motion.div>
        </section>
    );
}