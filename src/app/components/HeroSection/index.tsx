"use client";
import Link from "next/link";
import { socialMedia } from "@/constants";
import { ParticlesComponent } from "../ParticlesComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const helloVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const socialItem = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100vh] overflow-hidden  text-white">
      <ParticlesComponent />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 flex flex-col gap-6 max-md:items-center max-md:text-center md:max-w-[40%]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="flex flex-row items-center gap-2 text-foreground"
          variants={helloVariants}
        >
          <div className="w-6 bg-foreground h-[2px]"></div>
          <h2 className="text-2xl font-semibold">HELLO</h2>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold text-center text-[var(--color)]"
          variants={titleVariants}
        >
          {"I'm"} <span className="text-[--foreground]">Edgar</span> Barroso
        </motion.h1>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-row gap-5 mt-10"
        initial="hidden"
        animate="show"
      >
        {socialMedia.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.3, rotate: 3 }}
            key={item.href}
            variants={socialItem}
            custom={index}
          >
            <Link
              href={item.href}
              className="hover:text-[--foreground] text-[--color] transition-colors duration-300"
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}