"use client";
import React, { useEffect, useState, useCallback } from "react";

import ResponsiveIntro from "./ResponsiveIntro";
import { useActiveContext } from "@/context/sectionSelectionContext";

const Intro = () => {
  const [width, setWidth] = useState();
  const { setIsMobile, setSkillsShuffle } = useActiveContext();

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);

    if (newWidth < 640) {
      setIsMobile(true);
      setSkillsShuffle(newWidth < 545);
    } else {
      setIsMobile(false);
      setSkillsShuffle(false);
    }
  }, []);

  useEffect(() => {
    const debounceHandleResize = () => {
      clearTimeout(handleResize.debounceTimeout);
      handleResize.debounceTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debounceHandleResize);
    handleResize();

    return () => {
      clearTimeout(handleResize.debounceTimeout);
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [handleResize]);

  return (
    <>
      <ResponsiveIntro isMobile={width} />
    </>
  );
};

export default Intro;
