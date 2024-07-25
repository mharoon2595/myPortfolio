"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SectionContext = createContext(null);

export const SectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [lastClick, setLastClick] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [skillsShuffle, setSkillsShuffle] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme !== null) {
      setIsDark(JSON.parse(savedTheme));
    }
    if (JSON.parse(savedTheme)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastClick,
        setLastClick,
        isMobile,
        setIsMobile,
        skillsShuffle,
        setSkillsShuffle,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export function useActiveContext() {
  const context = useContext(SectionContext);

  if (context === null) {
    throw new Error("Must be used within an active component");
  }

  return context;
}
