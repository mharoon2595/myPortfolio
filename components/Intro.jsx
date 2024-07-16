"use client";
import React, { useEffect, useState } from "react";

import ResponsiveIntro from "./ResponsiveIntro";
import { useActiveContext } from "@/context/sectionSelectionContext";

const Intro = () => {
  // const widthVal = useWidth();
  // const [screenWidth, setScreenWidth]=useState(widthVal)
  // console.log("screen width--->", matches);
  const [width, setWidth] = useState(0);
  const { setIsMobile, setSkillsShuffle } = useActiveContext();
  const handleResize = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 640) {
      setIsMobile(true);
      if (window.innerWidth < 545) {
        setSkillsShuffle(true);
      } else if (window.innerWidth >= 545) {
        setSkillsShuffle(false);
      }
    } else if (window.innerWidth >= 640) {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ResponsiveIntro isMobile={width} />
    </>
  );
};

export default Intro;
