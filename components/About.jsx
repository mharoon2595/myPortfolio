"use client";
import { useActiveContext } from "@/context/sectionSelectionContext";
import useContentInView from "@/hooks/useContentInView";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useContentInView("About");
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
    }
  }, [inView]);

  return (
    <div
      className="h-[100vh] bg-gradient-to-b from-sky-200"
      id="About"
      ref={ref}
    >
      <div className="flex h-full justify-between items-center align-middle px-[300px]">
        <div className="max-w-[400px] text-xl">
          Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
          Bla Bla Bla Bla Bla Bla Bla
        </div>
        <div className="max-w-[400px] text-xl">
          Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
          Bla Bla Bla Bla Bla Bla Bla
        </div>
      </div>
    </div>
  );
};

export default About;
