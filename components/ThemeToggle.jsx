import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useActiveContext } from "@/context/sectionSelectionContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useActiveContext();
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    initial > 0 && localStorage.setItem("dark-mode", JSON.stringify(isDark));
    setInitial((prev) => prev + 1);
  }, [isDark]);

  return (
    <>
      <button
        onClick={() => setIsDark(!isDark)}
        className="hidden fixed top-5 sm:left-[85%] md:left-[80%] lg:left-[75%] xl:left-[70%] bg-white dark:bg-slate-500 w-[60px] h-[60px] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full sm:flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      >
        {isDark ? <BsMoon /> : <BsSun />}
      </button>
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed sm:hidden top-5 right-3 bg-white w-[60px] h-[60px] bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:bg-slate-500 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      >
        {isDark ? <BsMoon /> : <BsSun />}
      </button>
    </>
  );
};

export default ThemeToggle;
