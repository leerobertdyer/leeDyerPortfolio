"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type PropsDefinition = {
  links: string[];
};

export default function Nav({ links }: PropsDefinition) {
  const linkClass = "hover:text-blue-700";
  const activeLinkClass = "text-blue-700";
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="border-b-2 py-4 flex justify-evenly">
      {links.map((link) => (
        <Link 
        className={`${
          path === (link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`)
            ? activeLinkClass
            : linkClass
        }`}
        href={`/${link.toLowerCase()}`} key={link}>
          {link}
        </Link>
      ))}
      <a href="https://www.github.com/leerobertdyer" target="_blank">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/leerobertdyer/" target="_blank">
        LinkedIn
      </a>
    </div>
  );
}
