import { motion } from "framer-motion";
import { IconEyeSearch, IconFileText } from "@tabler/icons-react";
export const AboutMe = () => {
  return (
    <>
      <section
        id="about-me"
        className="flex w-full flex-col md:flex-row gap-8 md:gap-14 mb-8 md:mb-16 items-center justify-center"
      >
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-slate-700 rounded-full flex justify-center items-center w-48 h-48"
        >
          <div className="relative w-[calc(100%-.9rem)] rounded-full h-[calc(100%-.9rem)] object-cover bg-emerald-500">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/public/me.png"
              alt="Miguel Angel Lopez Masmela"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center md:items-start "
        >
          <h1 className="text-5xl font-extrabold text-center md:text-left mb-8 md:mb-5">
            <span className="text-emerald-500 block">Miguel Angel </span>
            <span className="">Lopez Masmela</span>
          </h1>
          <p className="text-1xl font-medium max-w-[450px] w-full mb-8 md:mb-5 text-center md:text-left">
            Apasionado desarrollador web con experiencia en React, Next.js y
            Python
          </p>
          <div className="flex gap-3 items-center">
            <a
              href="https://linkedin.com/in/miguel-angel-lopez-masmela"
              target="_blank"
              rel="noopener"
              className="flex items-center transition md:justify-center md:hover:scale-105 "
            >
              <div className="flex items-center ">
                <span className="relative inline-flex overflow-hidden rounded-2xl p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <div className="inline-flex gap-2 font-medium items-center justify-center w-full px-3 py-2 text-sm bg-slate-700 text-white rounded-2xl cursor-pointer backdrop-blur-3xl whitespace-nowrap">
                    Disponible para trabajar <IconEyeSearch />
                  </div>
                </span>
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1LaezobTOii5UeM5klvaC7ELEWfc8ih1j/view?usp=drive_link"
              target="_blank"
              rel="noopener"
              className="flex items-center transition md:justify-center md:hover:scale-105 tooltip-group"
            >
              <div className="flex items-center ">
                <span className="relative inline-flex overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <div className="inline-flex gap-2 font-medium items-center justify-center w-full p-2 text-sm bg-slate-700 text-white rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">
                    <IconFileText />
                  </div>
                </span>
                <div className="tooltip">Descargar CV</div>
              </div>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};
