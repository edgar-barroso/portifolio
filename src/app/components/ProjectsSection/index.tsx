"use client";
import { projectsFront, projectsBack } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export function ProjectsSection() {
  return (
    <section
      className="relative py-10 px-[15vw] bg-[--background-dark]"
      id="projects"
    >
      {/* Front-End Projects */}
      <motion.div
        className="flex flex-col gap-5 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-[--foreground] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projetos Front-End
        </motion.h2>
        <motion.div className="w-20 h-1 bg-[--foreground] rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
           />

        <motion.div
          className="grid grid-cols-3 gap-6 max-md:grid-cols-1 mt-5"
          variants={sectionVariants}
        >
          {projectsFront.map(({ img, title, description, link }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <Link
                href={link}
                className="relative group flex flex-col gap-4 bg-[--background] shadow-md border-2 border-[--background-light] overflow-hidden h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    alt=""
                    width={600}
                    height={600}
                    src={img}
                    className="w-full aspect-[2/1]"
                  />
                </motion.div>
                <div className="flex flex-col gap-2 px-4 py-2">
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-sm line-clamp-3">{description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-5 justify-center items-center pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-[--foreground] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projetos Back-End
        </motion.h2>
        <motion.div className="w-20 h-1 bg-[--foreground] rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
           />

        <motion.div
          className="grid grid-cols-3 gap-6 max-md:grid-cols-1 mt-5"
          variants={sectionVariants}
        >
          {projectsBack.map(({ img, title, description, link }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <Link
                href={link}
                className="relative group flex flex-col gap-4 bg-[--background] shadow-md border-2 border-[--background-light] overflow-hidden h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    alt=""
                    width={600}
                    height={600}
                    src={img}
                    className="w-full p-6"
                  />
                </motion.div>
                <div className="flex flex-col gap-2 px-4 py-2">
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-sm line-clamp-3">{description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
