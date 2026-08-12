"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function FloatingInput({ label, type = "text", name, value, onChange, textarea = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  const Component = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Component
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={textarea ? 5 : undefined}
        className="w-full bg-transparent border border-[var(--color-border)] rounded-lg px-4 pt-6 pb-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
      />
      <motion.label
        animate={{
          top: isActive ? "0.5rem" : "50%",
          fontSize: isActive ? "0.7rem" : "0.9rem",
          y: isActive ? 0 : "-50%",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 text-[var(--color-text-muted)] pointer-events-none origin-left"
      >
        {label}
      </motion.label>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[var(--color-accent)] text-lg">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Contact
          </h2>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <p className="text-[var(--color-text-muted)] mb-10">
          Have a project in mind, a job opportunity, or just want to say hello? My inbox is always open.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <FloatingInput
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FloatingInput
            label="Your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FloatingInput
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            textarea
          />

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: status === "idle" ? 1.03 : 1 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium disabled:opacity-70 transition-opacity"
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message Sent ✓"}
          </motion.button>
        </form>

        {/* Direct contact links */}
        <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-[var(--color-border)]">
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:hamzadev39@gmail.com"
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <FaEnvelope size={20} />
            <span className="text-xs font-mono">Email</span>
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/Hamza-dev84"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <FaGithub size={20} />
            <span className="text-xs font-mono">GitHub</span>
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/muhammad-hamza-209181339"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <FaLinkedin size={20} />
            <span className="text-xs font-mono">LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}