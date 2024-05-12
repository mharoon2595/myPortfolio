"use client";
import React, { useEffect, useState } from "react";

import ResponsiveIntro from "./ResponsiveIntro";

const Intro = () => {
  // const widthVal = useWidth();
  // const [screenWidth, setScreenWidth]=useState(widthVal)
  // console.log("screen width--->", matches);
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
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
