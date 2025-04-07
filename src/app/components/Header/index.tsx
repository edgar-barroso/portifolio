"use client";
import { routes, languages } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.5
    }
  }
};

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export function Header() {
  const pathname = usePathname();
  const [lang] = useState("pt-br");

  return (
    <motion.header 
      className="left-0 top-0 z-10 absolute flex flex-row h-28 w-full justify-between items-center font-bold text-sm tracking-widest px-5 md:px-10"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.p 
        className="font-extrabold text-3xl -tracking-wide hidden md:block"
        variants={navItem}
      >
        EDGAR
      </motion.p>

      <motion.div 
        className="flex flex-row gap-5 md:gap-10 text-gray-600"
        variants={container}
      >
        {routes.map((route) => (
          <motion.div
            key={route.href}
            variants={navItem}
            whileHover={hoverEffect}
          >
            <Link
              href={route.href}
              className={`${
                pathname === route.href && "text-[--foreground]"
              } hover:text-[--foreground] transition-colors duration-300`}
            >
              {route.name.toUpperCase()}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Language Switcher */}
      <motion.div 
        className="flex flex-row text-gray-600 gap-3 md:gap-5 max-md:hidden md:flex"
        variants={container}
      >
        {languages.map((language) => (
          <motion.button
            key={language.id}
            variants={navItem}
            whileHover={hoverEffect}
            className={`${
              lang === language.id && "text-[--foreground]"
            } hover:text-[--foreground] transition-colors duration-300`}
          >
            {language.name.toUpperCase()}
          </motion.button>
        ))}
      </motion.div>
    </motion.header>
  );
}