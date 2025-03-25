"use client"
import { educations, experiences } from "@/constants";
import { CiMapPin } from "react-icons/ci";
import { RiVipCrownLine, RiShoppingBagFill } from "react-icons/ri";

interface ResumeItemProps{
  interval:string;
  title:string;
  description:string;
  location:string;
}

function ResumeItem({ interval, title, description, location }: ResumeItemProps) {
  return (
    <article className="flex flex-col gap-4 bg-[--background-dark] p-4 shadow-md w-full h-52">
      <p className="text-sm font-light">{interval}</p>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm line-clamp-3">{description}</p>
      <div className="flex flex-row gap-1 items-center">
        <CiMapPin />
        <p className="text-sm font-medium">{location}</p>
      </div>
    </article>
  );
}

export function ResumeSection() {
  return (
    <section className="relative py-10 px-[15vw]">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h2 className="text-4xl font-bold">Trajetória</h2>
        <p className="text-sm text-center">
          Minha trajetória na carreira acadêmica e profissional
        </p>

        <div className="flex flex-row max-md:flex-col justify-between gap-10">
          <div className="flex flex-col gap-7 items-center md:w-1/2">
            <div className="flex flex-row items-center gap-2 mb-2">
              <RiVipCrownLine size={30} />
              <h3 className="font-semibold text-lg">Educação:</h3>
            </div>
            {educations.map((education) => (
              <ResumeItem key={education.title} {...education} />
            ))}
          </div>
          <div className="flex flex-col gap-7 items-center md:w-1/2">
            <div className="flex flex-row items-center gap-2 mb-2">
              <RiShoppingBagFill size={30} />
              <h3 className="font-semibold text-lg">Experiência:</h3>
            </div>
            {experiences.map((experience) => (
              <ResumeItem key={experience.title} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}