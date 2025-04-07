"use client";
import { expertises, techStacks } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactElement } from "react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const techItem = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.2,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 200,
    },
  },
};

export function ExpertiseSection() {
  return (
    <section className="flex flex-col py-20 bg-[--background-dark] px-5 md:px-[15vw] gap-20">
      <motion.div
        className="flex flex-col gap-10 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={item}
        >
          <h2 className="text-4xl font-bold text-[--foreground] text-center">
            Tecnologias e Ferramentas
          </h2>
          <motion.div className="w-20 h-1 bg-[--foreground] rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
           />
        </motion.div>

        <motion.p
          className="text-sm text-center max-w-2xl text-[--color]"
          variants={item}
        >
          Com experiência em desenvolvimento de software, atuo na criação de
          soluções completas e eficientes com as seguintes tecnologias.
        </motion.p>

        <motion.div
          className="flex flex-wrap flex-row gap-8 items-center justify-center"
          variants={container}
        >
          {techStacks.map(({ name, imageUrl }) => (
            <motion.div
              key={name}
              variants={techItem}
              whileHover="hover"
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="p-4 bg-[--background] rounded-xl shadow-lg group-hover:shadow-[--foreground] transition-all duration-300">
                <Image
                  alt={name}
                  width={40}
                  height={40}
                  src={imageUrl}
                  className="object-contain w-10 h-10"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-[--color] group-hover:text-[--foreground] transition-colors">
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-14 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={item}
        >
          <h2 className="text-4xl font-bold text-[--foreground] text-center">
            Minhas Especialidades
          </h2>
          <motion.div className="w-20 h-1 bg-[--foreground] rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
           />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={container}
        >
          {expertises.map(({ title, icon, description }) => (
            <motion.div key={title} variants={item}>
              <Expertise icon={icon} description={description} title={title} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ExpertiseProps {
  title: string;
  description: string;
  icon: ReactElement;
}

function Expertise({ title, icon, description }: ExpertiseProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="h-full transition-all duration-500 flex flex-col items-center justify-start px-6 py-8 gap-4 bg-[--background] rounded-sm text-center shadow-lg hover:shadow-[--foreground]/20 hover:border-[--foreground]/50"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="p-2 rounded-md text-[--foreground]">{icon}</div>
        <h1 className="text-xl font-semibold text-[--color]">{title}</h1>
      </div>
      <p className="text-sm font-medium text-[--color] leading-relaxed ">
        {description}
      </p>
    </motion.div>
  );
}
