"use client";
import useContentInView from "@/hooks/useContentInView";
import React, { useEffect } from "react";
import { easeIn, motion, useAnimation } from "framer-motion";
import Skills from "./Skills";
import ContentReveal from "./ContentReveal";

const About = () => {
  const { ref, inView } = useContentInView("About");
  const startAnimation = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      startAnimation.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);

  return (
    <div
      className="min-h-[100vh] bg-gradient-to-b from-sky-200"
      id="About"
      ref={ref}
    >
      <div className="flex flex-col gap-5 lg:flex-row h-full justify-between items-center align-middle px-[75px] py-[75px] xl:px-[200px] ">
        <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[500px]  2xl:min-w-[700px] ">
          <Skills />
        </div>
        <div className="flex flex-col gap-3 max-w-[500px] p-2">
          <ContentReveal
            content="I am an enthusiastic full-stack developer with a passion for building dynamic and responsive web applications. With a keen eye for detail and a relentless commitment to excellence, I thrive on tackling complex challenges and delivering innovative solutions."
            startAnimation={startAnimation}
            slideControls={slideControls}
          />
          <br />
          <ContentReveal
            content="Constantly evolving in my craft, I am dedicated to continuous learning and upskilling, ensuring I stay at the forefront of the latest industry trends and technologies. Let's create something amazing together!"
            startAnimation={startAnimation}
            slideControls={slideControls}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
