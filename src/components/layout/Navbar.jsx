"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navlinks";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
               
                <a href="#home" className="font-mono text-lg font-semibold text-[var(--color-text)]">
                    MH<span className="text-[var(--color-accent)]">.</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>

                            <a href={link.href}
                                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 w-6"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="h-0.5 w-full bg-[var(--color-text)] block"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="h-0.5 w-full bg-[var(--color-text)] block"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="h-0.5 w-full bg-[var(--color-text)] block"
                        />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-[var(--color-bg)]/95 backdrop-blur-md border-t border-[var(--color-border)]"
                    >
                        {navLinks.map((link) => (
                            <li key={link.name}>

                                <a href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-6 py-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.header>
    );
}