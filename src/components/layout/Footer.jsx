"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { navLinks } from "@/data/navlinks";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-[var(--color-border)] py-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left - name + copyright */}
                <div className="text-center md:text-left">
                    <p className="font-mono text-[var(--color-text)] font-semibold mb-1">
                        Muhammad Hamza
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <ul className="flex flex-wrap justify-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>

                            <a href={link.href}
                                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-5">

                    <a href="https://github.com/Hamza-dev84"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a href="https://www.linkedin.com/in/muhammad-hamza-209181339"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Back to top"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                    >
                        <FiArrowUp size={16} className="" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}