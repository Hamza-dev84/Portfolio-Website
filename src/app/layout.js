import { Poppins, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

// Main UI font - clean, modern, professional
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Monospace font - great for a "developer" aesthetic (code snippets, tags, etc.)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Hamza | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB and MySQL. Explore my projects, skills, and experience.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Hamza" }],
  openGraph: {
    title: "Muhammad Hamza | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB and MySQL.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}