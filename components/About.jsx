"use client";
import { useActiveContext } from "@/context/sectionSelectionContext";
import useContentInView from "@/hooks/useContentInView";
import React, { useEffect } from "react";

const About = () => {
  const { ref } = useContentInView("About");

  return (
    <div className="h-[100vh]" id="About" ref={ref}>
      About
    </div>
  );
};

export default About;
