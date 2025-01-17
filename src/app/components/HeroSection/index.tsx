"use client";
import Link from "next/link";
import { socialMedia } from "@/constants";
import { ParticlesComponent } from "../ParticlesComponent";
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100vh]">
      <ParticlesComponent />
        <div className="flex flex-col gap-6 max-md:items-center max-md:text-center md:max-w-[40%] ">
          <div className="flex flex-row items-center gap-2 text-gray-500">
            <div className="w-6 bg-gray-500 h-[2px]"></div>
            <h2 className="text-2xl font-semibold">HELLO</h2>
          </div>
          <h1 className="text-6xl font-bold text-center">
            {"I'm"} <span className="text-[--foreground]">Edgar</span> Barroso
          </h1>
        </div>
      <div className="flex flex-row gap-5 mt-10 ">
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
