"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContentReveal from "./ContentReveal";
import { motion, useAnimation } from "framer-motion";

const ProjectCard = ({ title, desc, img, liveLink, codeLink }) => {
  const [inView, setInView] = useState(false);
  const startAnimation = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      startAnimation.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);

  console.log(inView);

  return (
    <>
      <motion.div
        className="h-[80%] sm:h-[75%] w-[70%] sm:w-[60%] rounded-lg md:hidden bg-white dark:bg-slate-700 dark:text-white"
        whileInView={() => setInView(true)}
      >
        <div className="relative w-full h-1/2">
          <Image src={img} fill className="rounded-t-lg" />
        </div>
        <div className="h-1/2 p-3 ">
          <div className="text-center text-xl  font-bold flex justify-center">
            <ContentReveal
              content={title}
              startAnimation={startAnimation}
              slideControls={slideControls}
              fromProjects
            />
          </div>
          <div className="my-3 ">
            <ContentReveal
              content={desc}
              startAnimation={startAnimation}
              slideControls={slideControls}
              fromProjects
            />
          </div>
          <div className="flex justify-evenly ">
            <button className="bg-black p-3 rounded-md text-white ">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                See demo
              </a>
            </button>
            <button className="bg-black p-3 rounded-md text-white">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                View code
              </a>
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="h-[60%] w-[70%] hidden md:flex gap-3"
        whileInView={() => setInView(true)}
      >
        <div className="relative h-full w-1/2">
          <Image fill src={img} className="rounded-lg" />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="p-2 text-center text-5xl  text-white font-semibold flex justify-center">
            <ContentReveal
              content={title}
              startAnimation={startAnimation}
              slideControls={slideControls}
              fromProjects
            />
          </div>
          <div className="p-6 text-left text-2xl text-white ">
            <ContentReveal
              content={desc}
              startAnimation={startAnimation}
              slideControls={slideControls}
              fromProjects
            />
          </div>
          <div className="flex justify-evenly">
            <button className="bg-white p-3 rounded-md text-black">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                See demo
              </a>
            </button>
            <button className="bg-white p-3 rounded-md text-black">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                View code
              </a>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
