'use client'
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import Skills from "@/components/Skills/Skills";
import { ROUTES } from "@/utils/consts";

export default function Main() {

  return (
    <div className="flex flex-col lg:gap-8">
      <Nav links={ROUTES} />
      <Hero />
      <Skills/>
    </div>
  );
}
