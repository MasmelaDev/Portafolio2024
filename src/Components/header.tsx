import { useEffect, useState } from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
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

  return (
    <header className="flex py-6 ">
      <button className="ml-auto mr-5" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <IconMoonFilled className="text-slate-50" />
        ) : (
          <IconSunFilled className="text-orange-400" />
        )}
      </button>
    </header>
  );
};
