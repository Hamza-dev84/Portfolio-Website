"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, var(--color-accent) 0%, transparent 70%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative ${className}`}
    >
      <motion.div
        style={{ background }}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}