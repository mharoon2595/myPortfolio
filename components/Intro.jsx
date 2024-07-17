"use client";
import React, { useEffect, useState, useCallback } from "react";

import ResponsiveIntro from "./ResponsiveIntro";
import { useActiveContext } from "@/context/sectionSelectionContext";

const Intro = () => {
  // const widthVal = useWidth();
  // const [screenWidth, setScreenWidth]=useState(widthVal)
  // console.log("screen width--->", matches);
  const [width, setWidth] = useState(window.innerWidth);
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
    handleResize(); // Call it initially to set the state based on the current window size

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
