'use client'
import LinkPhoto from "@/components/LinkPhoto/LinkPhoto";
import Link from "next/link";

export default function Main() {

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-4xl font-bold animate-slide-in-right">
        Hi, {`I'm`} Lee
      </h1>
      <p className="text-md animate-slide-in-right-slower">I play music, and make things.</p>
      <div className="
          w-full mt-8
          flex flex-col md:flex-row 
          items-center justify-evenly gap-4">
        <LinkPhoto src="/images/leeStage1.jpg" alt="Lee Dyer Music photo" text="Music" linkto="/music" />
        <LinkPhoto src="/images/profilePicSmaller.jpg" alt="Lee Dyer Coding photo" text="Coding" linkto="/coding" />

      </div>
    </div>
  );
}
