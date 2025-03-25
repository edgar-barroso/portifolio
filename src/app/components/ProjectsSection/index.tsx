import { projectsFront,projectsBack } from "@/constants";
import Image from "next/image";
import Link from "next/link";
export function ProjectsSection() {
  return (
    <section className="relative py-10 px-[15vw] bg-[--background-dark]" id="projects">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h2 className="text-4xl font-bold">Projetos Front-End</h2>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {projectsFront.map(({ img, title, description, link }) => (
            <Link
              href={link}
              className="relative group flex flex-col gap-4 bg-[--background] shadow-md border-2 border-[--background-light] transition-all duration-300 hover:scale-105"
              key={title}
            >
              <Image
                alt=""
                width={1200}
                height={1200}
                src={img}
                className="w-full"
              />
              <div className="flex flex-col gap-2 px-4 py-2">
                <h4 className="font-bold">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center pt-10">
        <h2 className="text-4xl font-bold">Projetos Back-End</h2>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {projectsBack.map(({ img, title, description, link }) => (
            <Link
              href={link}
              className="relative group flex flex-col gap-4 bg-[--background] shadow-md border-2 border-[--background-light] transition-all duration-300 hover:scale-105"
              key={title}
            >
              <Image
                alt=""
                width={1200}
                height={1200}
                src={img}
                className="w-full p-6"
              />
              <div className="flex flex-col gap-2 px-4 py-2">
                <h4 className="font-bold">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
