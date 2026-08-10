"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Parent variant - bachon ke animation ko stagger (delay se) trigger karega
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, // har child 0.15s baad animate hoga
        },
    },
};

// Har child isi pattern se fade + slide up hoga
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
            >
                {/* Chota intro tag */}
                <motion.p
                    variants={itemVariants}
                    className="font-mono text-sm text-indigo-400 mb-4"
                >
                    Hi, my name is
                </motion.p>

                {/* Naam - main heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold text-white mb-4"
                >
                    Muhammad Hamza
                </motion.h1>

                {/* Professional title */}
                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-4xl font-semibold text-neutral-400 mb-6"
                >
                    Full-Stack Developer
                </motion.h2>

                {/* Short intro */}
                <motion.p
                    variants={itemVariants}
                    className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    I build fast, scalable web applications using the MERN stack and
                    Next.js — from backend APIs to polished, animated frontends.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4 mb-10"
                >

                    <a href="#projects"
                        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-colors"
                    >
                        View Projects
                    </a>

                    <a href="/resume.pdf"
                        download
                        className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-white rounded-full font-medium flex items-center gap-2 transition-colors"
                    >
                        <FileDown size={18} />
                        Download Resume
                    </a>
                </motion.div>


                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-6"
                >
                    <a
                        href="https://github.com/Hamza-dev84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/muhammad-hamza-209181339"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator - bottom mein subtle bounce */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 text-neutral-500"
            >
                <ArrowDown size={20} />
            </motion.div>
        </section>
    );
}