"use client";
import { routes, languages } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [lang] = useState("pt-br");

  return (
    <header className="left-0 top-0 z-10 absolute flex flex-row h-28 w-full justify-between items-center font-bold text-sm tracking-widest px-5 md:px-10">
      <Link href={"/"} className="font-extrabold text-3xl -tracking-wide hidden md:block">
        EDGAR
      </Link>
      <div className="flex flex-row gap-5 md:gap-10 text-gray-600">
        {routes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${
              pathname === item.href && "text-[--foreground]"
            } hover:text-[--foreground]`}
          >
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>
      {/* Language Switcher */}
      <div className="flex flex-row text-gray-600 gap-3 md:gap-5 max-md:hidden md:flex">
        {languages.map((item) => (
          <button
            key={item.id}
            className={`${
              lang === item.id && "text-[--foreground]"
            } hover:text-[--foreground]`}
          >
            {item.name.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}