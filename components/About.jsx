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
      className="min-h-[100vh] bg-gradient-to-b from-sky-200 dark:from-[#3c3c59]"
      id="About"
      ref={ref}
    >
      <div className="flex flex-col gap-5 lg:flex-row h-full justify-between xl:justify-evenly items-center align-middle px-[70px] py-[75px] xl:px-[100px] ">
        <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[500px]  2xl:min-w-[700px] ">
          <Skills />
        </div>
        <div className="flex flex-col gap-3 max-w-[500px] p-2">
          <ContentReveal
            content="I'm an enthusiastic full-stack developer who enjoys creating dynamic and responsive web applications. I pay great attention to detail and am committed to doing my best work. I like solving complex problems and finding innovative solutions."
            startAnimation={startAnimation}
            slideControls={slideControls}
          />
          <br />
          <ContentReveal
            content="I'm always learning and improving my skills to keep up with the latest industry trends and technologies. I'd love to collaborate and create something great together!"
            startAnimation={startAnimation}
            slideControls={slideControls}
          />
          <a
            href="/mharoon_latest.pdf"
            download
            className="bg-slate-400 rounded-xl p-3 text-center text-white hover:scale-105 font-semibold my-2"
          >
            Download my resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
