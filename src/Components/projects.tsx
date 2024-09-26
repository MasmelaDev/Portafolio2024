import { IconLink, IconBriefcase2 } from "@tabler/icons-react";
import { projects } from "../data";
export const Projects = () => {
  return (
    <section className="w-full mb-8 md:mb-16">
      <h2 className="text-2xl sm:text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-5 dark:drop-shadow-neon dark:text-emerald-100">
        <IconBriefcase2 /> Proyectos
      </h2>
      <section className="flex flex-wrap gap-3 sm:gap-6 justify-center">
        {projects.map((project) => (
          <a
            key={project.url}
            role="article"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex group items-center gap-3 font-bold w-[200px] sm:w-[300px] md:w-[350px] rounded-xl border-2  cursor-pointer hover:scale-105 transition-all  dark:border-gray-500 "
          >
            <article className="relative flex flex-col text-wrap justify-between w-full py-6 px-5">
              <h2 className="text-sm sm:text-base font-bold">
                {project.title}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                {project.description}
              </p>
              <div className="flex gap-1 mt-1.5 items-center">
                {project.technologies.map((tech) => (
                  <div key={tech} className="tooltip-group relative">
                    <img alt={tech} className="w-5 h-5" src={`/${tech}.svg`} />
                    <div className="tooltip">{tech}</div>
                  </div>
                ))}
              </div>
              <div className="absolute grid place-items-center right-3 top-3 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform border-0 border-slate-100 border-indigo-100/50 shadow-sm">
                <IconLink />
              </div>
            </article>
          </a>
        ))}
      </section>
    </section>
  );
};
