import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          exit={{ opacity: 0 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed shadow-black/40 tooltip-group top-0 right-0 lg:bottom-0 lg:top-auto m-5 p-2 bg-emerald-500 text-white rounded-full shadow-md   z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <div className="tooltip">Subir</div>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};
