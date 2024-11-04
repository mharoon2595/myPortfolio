"use client";
import useContentInView from "@/hooks/useContentInView";
import React, { useEffect, useRef } from "react";
import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import Skills from "./Skills";
import github from "@/assets/github.png";
import githubDark from "@/assets/githubDark.png";
import HackerRank from "@/assets/HackerRank.png";
import leetcode from "@/assets/leetcode.png";
import leetcodeDark from "@/assets/leetcodeDark.png";
import linkedin from "@/assets/linkedin.png";
import ContentReveal from "./ContentReveal";
import Link from "next/link";
import Image from "next/image";
import { useActiveContext } from "@/context/sectionSelectionContext";

const About = () => {
  const { ref } = useContentInView("About");
  const refIntro = useRef(null);
  const isInView = useInView(refIntro, { amount: 0.2 });
  const startAnimation = useAnimation();
  const slideControls = useAnimation();
  const { isDark } = useActiveContext();

  useEffect(() => {
    if (isInView) {
      startAnimation.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

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
        <motion.div
          className="flex flex-col gap-3 max-w-[500px] p-2"
          ref={refIntro}
        >
          <ContentReveal
            content="I'm an enthusiastic full-stack developer who enjoys creating dynamic and responsive web applications. I pay great attention to detail and am committed to doing my best work. I like solving complex problems and finding innovative solutions."
            startAnimation={startAnimation}
            slideControls={slideControls}
          />

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
          <div className="flex justify-around py-2 transition-all">
            <button
              className=" h-10 w-10 rounded-full overflow-clip hover:scale-110"
              title="LinkedIn Profile"
            >
              <a
                href="https://www.linkedin.com/in/mharoon2595/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} className="object-cover h-full w-full" />
              </a>
            </button>
            <button
              className=" h-10 w-10 rounded-full overflow-clip hover:scale-110"
              title="GitHub Profile"
            >
              <a
                href="https://github.com/mharoon2595/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isDark ? (
                  <Image
                    src={githubDark}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <Image src={github} className="object-cover h-full w-full" />
                )}
              </a>
            </button>
            <button
              className=" h-10 w-10 rounded-full overflow-clip hover:scale-110"
              title="Leetcode Profile"
            >
              <a
                href="https://leetcode.com/u/mharoon2595/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isDark ? (
                  <Image
                    src={leetcodeDark}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <Image
                    src={leetcode}
                    className="object-cover h-full w-full"
                  />
                )}
              </a>
            </button>
            <button
              className=" h-10 w-10 rounded-full overflow-clip hover:scale-110"
              title="HackerRank Profile"
            >
              <a
                href="https://www.hackerrank.com/profile/mharoon2595"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={HackerRank}
                  className="object-cover h-full w-full"
                />
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
