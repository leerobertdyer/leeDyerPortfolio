import LinkPhoto from "@/components/LinkPhoto/LinkPhoto";

export default function Music() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-4 gap-4 flex-wrap">

            <LinkPhoto src="/images/auntVickiTristan.png" alt="Aunt Vicki Band" 
                text="Aunt Vicki" linkto="https://www.auntvicki.rocks/" target="blank"/>

            <LinkPhoto src="/images/wifeIslandLake.jpg" alt="Wife Island Duo" 
                text="Wife Island (AKA Aunt Vicki Duo)" linkto="https://wife-island-git-main-leerobertdyers-projects.vercel.app/" target="blank"/>

            <LinkPhoto src="/images/tinySunPiano.png" alt="Wife Island Duo" 
                text="Tiny Sun" linkto="https://www.tinysunstudio.com/" target="blank"/>

        </div>
    );
}   