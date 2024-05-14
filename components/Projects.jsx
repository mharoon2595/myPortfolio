"use client";
import React from "react";
import useContentInView from "@/hooks/useContentInView";

const Projects = () => {
  const { ref } = useContentInView("Projects");
  return (
    <div className="h-[100vh] w-full bg-slate-400" id="Projects" ref={ref}>
      Projects
    </div>
  );
};

export default Projects;
