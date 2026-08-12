"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {theme === "dark" ? (
            <FiSun size={16} className="text-[var(--color-accent)]" />
          ) : (
            <FiMoon size={16} className="text-[var(--color-accent)]" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}