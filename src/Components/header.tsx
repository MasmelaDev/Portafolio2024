import { useEffect, useState } from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
export const Header = () => {
  const getMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  };

  const [darkMode, setDarkMode] = useState(getMode());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", `${darkMode}`);
  }, [darkMode]);

  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <header className="flex py-6 ">
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="flex fixed items-center gap-2 top-0 w-full max-w-[768px] bg-[#f9fafb] dark:bg-gray-950 backdrop-blur-lg z-50 bg-opacity-50 dark:bg-opacity-70 py-2 rounded-br-xl rounded-bl-xl px-2"
          >
            <motion.div
              initial={{ y: -20, x: -20 }}
              animate={{ y: 0, x: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="overflow-hidden rounded-full flex justify-center items-center w-14 h-14 shadow-lg ">
                <div className="relative w-[calc(100%-.6rem)] rounded-full h-[calc(100%-.6rem)] object-cover bg-emerald-500 dark:bg-white/5  dark:shadow-neon">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/me.png"
                    alt="Miguel Angel Lopez Masmela"
                  />
                </div>
              </div>
              <span className="font-bold text-sm sm:text-base">
                Miguel Angel Lopez
              </span>
            </motion.div>
            <button
              className="ml-auto mr-5"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <IconMoonFilled className="text-slate-50" />
              ) : (
                <IconSunFilled className="text-orange-400" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!showNav && (
        <button className="ml-auto mr-5" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <IconMoonFilled className="text-slate-50" />
          ) : (
            <IconSunFilled className="text-orange-400" />
          )}
        </button>
      )}
    </header>
  );
};
