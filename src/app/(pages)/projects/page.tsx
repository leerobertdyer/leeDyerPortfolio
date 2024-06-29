import Project from "@/components/Project/Project";
import { allProjects } from "@/utils/consts";

export default function Projects() {
  return (
    <>
            <p className="text-center text-white text-3xl">Current Projects</p>
      {allProjects.map((project) => (
        <div key={project.label}>
          <Project name={project.label} link={project.link} description={project.description} image={project.image} github={project.github}/>
        </div>
      ))}
    </>
  );
}
