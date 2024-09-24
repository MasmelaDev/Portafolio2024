import { Header } from "./Components/header";
import { AboutMe } from "./Components/about-me";
import { Skills } from "./Components/skills";
import { Projects } from "./Components/projects";
import {
  IconWorldStar,
  IconSeeding,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandUpwork,
} from "@tabler/icons-react";
import { Email } from "./Components/email";
import { GoUpButton } from "./Components/go-up-button";
function App() {
  return (
    <>
      <Header />
      <main className="w-full md:w-[768px] ">
        <AboutMe />

        <section className="flex gap-5 flex-wrap justify-center items-center w-full mb-8 md:mb-16">
          <a
            role="article"
            target="_blank"
            href="https://github.com/MasmelaDev"
            className="flex items-center gap-3 font-bold px-4 md:px-8 h-16 rounded-xl border-2 cursor-pointer hover:scale-105 transition-all text-black"
          >
            <IconBrandGithub />
            <span className="font-bold">GitHub</span>
          </a>
          <a
            role="article"
            target="_blank"
            href="https://www.linkedin.com/in/miguel-angel-lopez-masmela/"
            className="flex items-center gap-3 font-bold px-4 md:px-8 h-16 rounded-xl border-2 cursor-pointer hover:scale-105 transition-all text-[#0A66C2]"
          >
            <IconBrandLinkedin className="" />
            <span className="font-bold ">Linkedin</span>
          </a>
          <a
            role="article"
            target="_blank"
            href="https://www.upwork.com/freelancers/~015f6e2ae16bebe58c"
            className="flex items-center gap-3 font-bold px-4 md:px-8 h-16 rounded-xl border-2 cursor-pointer hover:scale-105 transition-all text-[#6fda44]"
          >
            <IconBrandUpwork className="" />
            <span className="font-bold ">Upwork</span>
          </a>
        </section>
        <hr className="border mb-8 md:mb-16  rounded-full border-opacity-90 border-slate-700"></hr>
        <section className="w-full mb-8 md:mb-16">
          <h2 className="text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-5">
            <IconWorldStar /> Experiencia
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1 ">
              <h2 className="text-lg font-semibold text-slate-700 ">
                Web Developer | Avanze Nuevas Tecnologias
              </h2>
            </div>
            <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700  text-md">
              <li>Migrar un sitio administrativo de ASP.NET a React.</li>
              <li>
                Optimizar el rendimiento del sitio mejorando la base de código y
                aprovechando las capacidades de renderizado de React.
              </li>
              <li>
                Modernizar la interfaz de usuario, creando un diseño más
                intuitivo y visualmente atractivo.
              </li>
              <li>
                Introducir nuevas funciones que optimizaron las operaciones del
                usuario.
              </li>
              <li>
                Mejorar la eficiencia del flujo de trabajo gracias a la
                implementación de nuevas características.
              </li>
              <li>
                Entregar una aplicación robusta y escalable que superó las
                expectativas del cliente en velocidad, diseño y funcionalidad.
              </li>
            </ul>
          </div>
        </section>

        <Projects />
        <Skills />

        <section className="w-full mb-8 md:mb-16">
          <h2 className="text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-5">
            <IconSeeding /> Educación
          </h2>
          <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700  text-md">
            <li>
              <h2 className="text-lg font-semibold text-slate-700">
                Desarrollo de Aplicaciones Web | Tajamar FP+ Professional
                Education
              </h2>
              <p className="text-md text-slate-700 flex flex-col">
                Grado superior en Desarrollo de Aplicaciones Web (DAW)
                <span>Septiembre 2022 - Junio 2024</span>
              </p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-slate-700">
                Educación Autodidacta | Autoformación
              </h2>
              <p className="text-md text-slate-700 flex flex-col">
                Continúo aprendiendo y actualizando de forma autodidacta mi
                conocimiento en desarrollo web.
                <span>Actualidad</span>
              </p>
            </li>
          </ul>
        </section>

        <Email />
        <GoUpButton />
      </main>
    </>
  );
}

export default App;
