import { ReactElement } from "react";

interface ExpertiseProps {
  title: string;
  description: string;
  icon: ReactElement;
  isSelected:boolean
}

export function Expertise({ title, icon, description,isSelected }: ExpertiseProps) {
  return (
    <div
      key={title}
      className={`h-[280px] transition-all duration-500 flex flex-wrap flex-col items-center justify-center border-2 border-[--background-light] px-4 py-8 gap-3 bg-[--background] w-[300px] text-center  ${isSelected ? "border-[--foreground] shadow-xl scale-110" :""} `}
    >
      <div className={`flex flex-col items-center gap-2 font-medium  ${isSelected && "text-[--foreground]"}`}>

      {icon}
      <h1 className=" font-semibold">{title}</h1>
      </div>
      <p className="text-xs font-medium leading-loose ">{description}</p>
    </div>
  );
}
