import { IconLink, IconBriefcase2 } from "@tabler/icons-react";
import { projects } from "../data";
export const Projects = () => {
  return (
    <section className="w-full mb-8 md:mb-16">
      <h2 className="text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-5">
        <IconBriefcase2 /> Proyectos
      </h2>
      <section className="flex flex-wrap gap-6 justify-center">
        {projects.map((project) => (
          <a
            key={project.url}
            role="article"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex group items-center gap-3 font-bold w-[350px] rounded-xl border-2 cursor-pointer hover:scale-105 transition-all "
          >
            <article className="relative flex flex-col text-wrap justify-between w-full py-6 px-7">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-slate-400">{project.description}</p>
              <div className="flex gap-1 mt-1.5 items-center">
                {project.technologies.map((tech, index) => (
                  <div className="tooltip-group relative">
                    <img
                      key={index}
                      alt={tech}
                      className="w-5 h-5"
                      src={`/src/assets/${tech}.svg`}
                    />
                    <div className="tooltip">{tech}</div>
                  </div>
                ))}
              </div>
              <div className="absolute grid place-items-center right-3 top-3 bg-white text-slate-600 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform border-0 border-slate-100 border-indigo-100/50 shadow-sm">
                <IconLink />
              </div>
            </article>
          </a>
        ))}
      </section>
    </section>
  );
};
