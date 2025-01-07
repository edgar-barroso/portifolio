"use client";
import Link from "next/link";
import { socialMedia } from "@/constants";
import { motion } from "motion/react";
export function HeroSection() {
  return (
    <section className="px-[5vw] relative">
      <div className="absolute -z-10 h-[100vh] w-[1px] bg-[--background-light] left-1/4 " />
      <div className="absolute -z-10 h-[100vh] w-[1px] bg-[--background-light] left-2/4 " />
      <div className="absolute -z-10 h-[100vh] w-[1px] bg-[--background-light] left-3/4 " />
      
      <div className="flex flex-row justify-center items-center pt-10 gap-20">
        <div className="flex flex-col gap-6 md:max-w-[40%] max-md:flex-0 max-md:max-w-[100%]">
          <div className="flex flex-row items-center gap-2 text-gray-500">
            <div className="w-6 bg-gray-500 h-[2px]"></div>
            <h2 className="text-xl font-semibold">HELLO</h2>
          </div>
          <h1 className="text-5xl font-bold">
            {"I'm"} <span className="text-[--foreground]">Edgar</span> Barroso
          </h1>
          <h2 className="text-gray-500 text-sm">
            Programador focado em soluções inovadoras e eficientes. Com
            experiência em backend, interfaces responsivas e sistemas
            escaláveis, busco sempre entregar{" "}
            <span className="text-[--foreground]"> RESULTADOS</span> de{" "}
            <span className="text-[--foreground]"> QUALIDADE</span>.
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="bg-[--foreground] text-white font-bold w-[200px] p-2  mt-10 mb-4"
          >
            BAIXAR CURRÍCULO
          </motion.button>
        </div>
        <div className="w-[400px] h-[400px] max-md:invisible rounded-full shadow-[--foreground] shadow-xl bg-[--foreground-light] bg-[url('/banner-2.png')] bg-cover" />
      </div>
      <div className="flex flex-row gap-5 mt-10 mb-14">
        {socialMedia.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={"hover:text-[--foreground]"}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  );
}
