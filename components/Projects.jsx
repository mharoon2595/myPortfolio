"use client";
import React from "react";
import useContentInView from "@/hooks/useContentInView";

const Projects = () => {
  const { ref } = useContentInView("Projects");
  return (
    <div className="h-[100vh] " id="Projects" ref={ref}>
      Projects
    </div>
  );
};

export default Projects;
