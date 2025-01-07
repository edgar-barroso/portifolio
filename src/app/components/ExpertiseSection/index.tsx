"use client";

import { expertises, techStacks } from "@/constants";
import { useState, useEffect } from "react";
import { Expertise } from "./components/Expertise";
import Image from "next/image";

export function ExpertiseSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      changeSelectedExpertise();
    }, 3000);
    return () => clearTimeout(interval);
  }, [selectedIndex]);
  const changeSelectedExpertise = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % expertises.length);
  };

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id); // Obtém o elemento pelo ID
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
      });
    }
  };

  return (
    <section className="flex flex-col py-10 bg-[--background-dark] px-[15vw] gap-20">
      <div className="flex flex-col gap-10 justify-center items-center ">
        <h2 className="text-4xl font-bold">Tecnologias e Ferramentas</h2>
        <p className="text-sm text-center">
          Com experiência em desenvolvimento de software, atuo na criação de
          soluções <br />
          completas e eficientes, as seguintes tecnologias.
        </p>
        <div className="flex flex-wrap flex-row gap-10 items-center justify-center">
          {techStacks.map(({ name, imageUrl }) => (
            <div
              onClick={() => scrollToSection('projects')}
              key={name}
              className="flex flex-col items-center hover:scale-125 transition-all duration-200 cursor-pointer"
            >
              <Image alt={name} width={50} height={50} src={imageUrl} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-wrap flex-row gap-10 items-end max-md:flex-col">
          {expertises.map(({ title, icon, description }, index) => (
            <Expertise
              key={title}
              icon={icon}
              description={description}
              title={title}
              isSelected={selectedIndex === index}
            />
          ))}
        </div>
        <div className="flex flex-row gap-4 ">
          {expertises.map(({ title }, index) => (
            <div
              onClick={() => setSelectedIndex(index)}
              key={title}
              className={`cursor-pointer w-3 h-3 rounded-full transition-transform duration-500 ${
                selectedIndex === index
                  ? "bg-[--foreground] scale-125"
                  : "bg-[--background] border border-[--foreground] "
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
