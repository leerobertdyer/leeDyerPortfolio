'use client'

import Image from "next/image";
import Link from "next/link";

interface LinkPhoto {
    src: string;
    alt: string;
    text: string;
    linkto: string;
    target?: string;
}
export default function LinkPhoto(props: LinkPhoto) {
    const { src, alt, text, linkto, target } = props;

    return (
        <Link href={linkto} target={target ?? ""} className="flex justify-center w-[30vw] h-[30vw] min-w-[15rem] min-h-[15rem] overflow-hidden relative">
            <Image fill priority
                 className="rounded-md object-cover object-center border-2 border-leeWhite-dark" src={src} alt={alt} />
            <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-leeWhite-light text-center p-2 rounded-b-md">
                {text}
                </p>
        </Link>
    )
}