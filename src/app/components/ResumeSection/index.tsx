"use client";
import { educations, experiences } from "@/constants";
import { CiMapPin } from "react-icons/ci";
import { RiVipCrownLine, RiShoppingBagFill } from "react-icons/ri";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};


export function ResumeSection() {
  return (
    <section className="relative py-10 px-4 md:px-[15vw] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm -z-10" />

      <motion.div
        className="flex flex-col gap-3 justify-center items-center z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-[--foreground] text-center"
          variants={itemVariants}
        >
          Trajetória
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[--foreground] rounded-full"
          variants={itemVariants}
        />

        <motion.div
          className="flex flex-row max-md:flex-col justify-between gap-10 pt-10 w-full"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-7 items-center md:w-1/2"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-row items-center gap-2 mb-2"
              variants={itemVariants}
            >
              <RiVipCrownLine size={30} />
              <h3 className="font-semibold text-lg">Educação:</h3>
            </motion.div>
            {educations.map((education) => (
              <ResumeItem
                key={education.title}
                {...education}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-7 items-center md:w-1/2"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-row items-center gap-2 mb-2"
              variants={itemVariants}
            >
              <RiShoppingBagFill size={30} />
              <h3 className="font-semibold text-lg">Experiência:</h3>
            </motion.div>
            {experiences.map((experience) => (
              <ResumeItem
                key={experience.title}
                {...experience}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ResumeItemProps {
  interval: string;
  title: string;
  description: string;
  location: string;
  variants?: Variants;
}

function ResumeItem({
  interval,
  title,
  description,
  location,
  variants,
}: ResumeItemProps) {
  return (
    <motion.article
      className="flex flex-col gap-4 bg-[--background-dark] p-4 shadow-md w-full h-52"
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <p className="text-sm font-light">{interval}</p>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm line-clamp-3">{description}</p>
      <div className="flex flex-row gap-1 items-center">
        <CiMapPin />
        <p className="text-sm font-medium">{location}</p>
      </div>
    </motion.article>
  );
}
