import { skills } from "../data";
import { IconCode } from "@tabler/icons-react";
export const Skills = () => {
  return (
    <section className="w-full mb-8 md:mb-16">
      <h2 className="text-2xl sm:text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-8 md:mb-16 dark:drop-shadow-neon dark:text-emerald-100">
        <IconCode size={30} /> Habilidades
      </h2>
      <section className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill, index) => (
          <article
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  border-2  flex justify-center items-center duration-300 relative tooltip-group hover:scale-105 dark:border-gray-500 "
          >
            <img
              alt={skill.alt}
              className="w-9 h-9 sm:w-12 sm:h-12"
              src={skill.img}
            />
            <div className="tooltip">{skill.alt}</div>
          </article>
        ))}
      </section>
    </section>
  );
};
