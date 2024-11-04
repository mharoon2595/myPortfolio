"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ContentReveal from "./ContentReveal";
import { motion, useAnimation, useInView } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = ({ title, desc, img, liveLink, codeLink }) => {
  const [inView, setInView] = useState(false);
  const startAnimationSm = useAnimation();
  const slideControlsSm = useAnimation();
  const startAnimationLg = useAnimation();
  const slideControlsLg = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.75 });

  useEffect(() => {
    if (inView) {
      startAnimationSm.start("visible");
      slideControlsSm.start("visible");
    }
  }, [inView]);

  useEffect(() => {
    if (isInView) {
      startAnimationLg.start("visible");
      slideControlsLg.start("visible");
    }
  }, [isInView]);

  return (
    <>
      {title === "QKart" && (
        <a
          href="https://www.crio.do/learn/portfolio/mharoon2595"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 absolute bottom-5  justify-center rounded-lg p-2 md:p-3  text-white bg-gradient-to-r from-[#8282cd] via-[#86A8E7] to-[#87f4ed] hover:from-pink-500 hover:to-yellow-500 dark:bg-gradient-to-r dark:from-[#aa4b6b] dark:via-[#6b6b83] dark:to-[#3b8d99] dark:hover:from-[#659999] dark:hover:to-[#f4791f] animate-bounce"
        >
          {"A few other projects as well"} <BsArrowRight />
        </a>
      )}
      <motion.div
        className="h-[80%] sm:h-[75%] w-[70%] sm:w-[60%] rounded-lg md:hidden bg-white dark:bg-slate-700 dark:text-white"
        whileInView={() => setInView(true)}
      >
        <div className="relative w-full h-1/2">
          <Image src={img} fill className="rounded-t-lg" />
        </div>
        <div className="h-1/2 p-3 flex flex-col justify-between">
          <div className="text-center text-xl  font-bold flex justify-center max-h-1/3">
            <ContentReveal
              content={title}
              startAnimation={startAnimationSm}
              slideControls={slideControlsSm}
              fromProjects
            />
          </div>
          <div className="my-3 min-h-[33%] overflow-y-scroll">
            <ContentReveal
              content={desc}
              startAnimation={startAnimationSm}
              slideControls={slideControlsSm}
              fromProjects
            />
          </div>
          <div className="flex justify-evenly max-h-1/3">
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
      <motion.div className="h-[60%] w-[80%] hidden md:flex gap-3" ref={ref}>
        <div className="relative h-full w-1/2">
          <Image fill src={img} className="rounded-lg" />
        </div>
        <div className="flex flex-col h-full justify-between w-1/2">
          <div className="p-2 text-center text-5xl  text-white font-semibold flex justify-center">
            <ContentReveal
              content={title}
              startAnimation={startAnimationLg}
              slideControls={slideControlsLg}
              fromProjects
            />
          </div>
          <div className="p-6 text-left text-2xl text-white ">
            <ContentReveal
              content={desc}
              startAnimation={startAnimationLg}
              slideControls={slideControlsLg}
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
