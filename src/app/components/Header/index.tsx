"use client";
import { routes, languages } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [lang] = useState("pt-br");
  return (
    <header className="flex flex-row h-28 justify-between items-center px-[5vw] font-bold text-sm tracking-widest ">
      <Link href={"/"} className="font-extrabold text-3xl -tracking-wide max-md:hidden">
        EDGAR
      </Link>
      <div className="flex flex-row gap-10 text-gray-600 ">
        {routes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${pathname === item.href && "text-[--foreground]"}`}
          >
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex flex-row text-gray-600 gap-5 max-md:hidden">
        {languages.map((item) => (
          <button
            key={item.id}
            className={`${lang === item.id && "text-[--foreground]"}`}
          >
            {item.name.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}

