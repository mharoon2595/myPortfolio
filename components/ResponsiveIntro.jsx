"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useContentInView from "@/hooks/useContentInView";
import Lottie from "react-lottie";
import spacemanDark from "@/assets/spacemanDark.json";
import spacemanLight from "@/assets/spacemanLight.json";
import Typewriter from "@/utils/TypeWriter";
import Image from "next/image";
import scroll from "@/assets/scroll.png";
import scrollDark from "@/assets/scrollDark.png";
import { useActiveContext } from "@/context/sectionSelectionContext";

const ResponsiveIntro = ({ isMobile }) => {
  const [animateStatus, setAnimateStatus] = useState(false);
  const [introAnimation1, setIntroAnimation1] = useState(false);
  const [introAnimation2, setIntroAnimation2] = useState(false);
  const [introAnimation3, setIntroAnimation3] = useState(false);
  const [introAnimation4, setIntroAnimation4] = useState(false);
  const [introAnimation5, setIntroAnimation5] = useState(false);

  const { isDark } = useActiveContext();
  const { ref, inView } = useContentInView("Home");

  useEffect(() => {
    let timeoutId;

    function animateStuff() {
      timeoutId = setTimeout(() => setAnimateStatus(true), 1000);
    }
    animateStuff();

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const id1 = setTimeout(() => {
      setIntroAnimation1(true);
    }, 4000);
    const id2 = setTimeout(() => {
      setIntroAnimation2(true);
    }, 4500);
    const id3 = setTimeout(() => {
      setIntroAnimation3(true);
    }, 6500);

    const id4 = setTimeout(() => {
      setIntroAnimation4(true);
    }, 6600);

    const id5 = setTimeout(() => {
      setIntroAnimation5(true);
    }, 7000);

    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
      clearTimeout(id3);
      clearTimeout(id4);
      clearTimeout(id5);
    };
  }, []);

  const spacemanL = {
    loop: true,
    autoplay: true,
    animationData: spacemanLight,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const spacemanD = {
    loop: true,
    autoplay: true,
    animationData: spacemanDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (inView && window.location.hash === "#Home") {
      window.scrollTo(0, 0);
      window.location.hash = "";
    }
  }, [inView]);

  const variants1 = {
    doneDark: {
      rotate: [0, 90, 90],
      width: ["inherit", "inherit", "550px"],
      height: ["4px", "4px", "80vw"],
      backgroundColor: ["null", "null", "transparent"],
      borderWidth: ["null", "null", "2px"],
      borderColor: ["null", "null", "white"],
      transition: { type: "ease", duration: 3 },
    },
    doneLight: {
      rotate: [0, 90, 90],
      width: ["inherit", "inherit", "550px"],
      height: ["4px", "4px", "80vw"],
      backgroundColor: ["null", "null", "transparent"],
      borderWidth: ["null", "null", "2px"],
      borderColor: ["null", "null", "black"],
      transition: { type: "ease", duration: 3 },
    },
    loading: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const boxVariants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 1,

        delayChildren: 4,
      },
    },
  };

  const iconVariants = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },

    wave: {
      rotate: [0, 20, -10, 20, -10, 0],
      transition: { repeat: Infinity, repeatType: "loop", duration: 1.5 },
    },

    scrollIcon: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const variants2 = {
    doneDark: {
      rotate: [90, 180, 180],
      width: ["4px", "4px", "90%"],
      height: ["inherit", "inherit", "85vh"],
      backgroundColor: ["null", "null", "transparent"],
      borderWidth: ["0px", "3px", "3px"],
      borderColor: ["transparent", "white", "white"],
      transition: { type: "ease", duration: 2 },
    },
    doneLight: {
      rotate: [90, 180, 180],
      width: ["4px", "4px", "90%"],
      height: ["inherit", "inherit", "85vh"],
      backgroundColor: ["null", "null", "transparent"],
      borderWidth: ["0px", "3px", "3px"],
      borderColor: ["transparent", "black", "black"],
      transition: { type: "ease", duration: 2 },
    },
    loading: {
      rotate: 90,
      border: 0,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1,
      },
    },
  };

  return (
    <>
      {isMobile < 800 ? (
        <>
          <motion.div
            className="absolute top-[10%] left-[10%] flex flex-col-reverse w-[80vw] justify-between items-center h-[500px] p-10 mt-10"
            id="Homepage"
            ref={ref}
          >
            <motion.div
              className="flex flex-col gap-2 pt-5"
              initial="out"
              animate="in"
              variants={boxVariants}
            >
              <motion.div variants={iconVariants}>
                {introAnimation1 && (
                  <Typewriter
                    text="Hello,"
                    delay={100}
                    style="text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-normal"
                  />
                )}
              </motion.div>
              <motion.div variants={iconVariants}>
                {introAnimation2 && (
                  <Typewriter
                    text="I am Mohammed Haroon."
                    delay={100}
                    style="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-normal"
                  />
                )}
              </motion.div>
              {introAnimation3 && (
                <motion.span
                  variants={iconVariants}
                  animate="wave"
                  className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-normal w-fit"
                >
                  👋
                </motion.span>
              )}
              <motion.div variants={iconVariants}>
                {introAnimation4 && (
                  <Typewriter
                    text="I am a full-stack web developer."
                    delay={100}
                    style="text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-normal"
                  />
                )}
                {introAnimation5 && (
                  <motion.div
                    variants={iconVariants}
                    animate="scrollIcon"
                    className="h-16 flex w-full justify-center  mt-2"
                  >
                    {isDark ? (
                      <Image src={scroll} width={64} />
                    ) : (
                      <Image src={scrollDark} width={64} />
                    )}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
                delay: 4,
              }}
              className="h-[250px] w-[250px]"
            >
              {isDark ? (
                <Lottie options={spacemanD} />
              ) : (
                <Lottie options={spacemanL} />
              )}
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center h-full"
            animate={
              animateStatus ? (isDark ? "doneDark" : "doneLight") : "loading"
            }
          >
            <motion.div
              className={`bg-black w-1/3 h-1  border-0`}
              variants={variants2}
            ></motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <div
            className="absolute top-[15%] left-[10%] flex flex-row-reverse w-[80vw] justify-between items-center h-[400px] p-12 my-4"
            id="Homepage"
            ref={ref}
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
                delay: 4,
              }}
              className=" h-[250px] w-[250px] lg:h-[300px] lg:w-[200px] xl:h-[350px] xl:w-[350px] 2xl:h-[450px] 2xl:w-[450px]"
            >
              {isDark ? (
                <Lottie options={spacemanD} />
              ) : (
                <Lottie options={spacemanL} />
              )}
            </motion.div>
            <motion.div
              className="flex flex-col gap-5 pt-3"
              initial="out"
              animate="in"
              variants={boxVariants}
            >
              <motion.div variants={iconVariants}>
                {introAnimation1 && (
                  <Typewriter
                    text="Hello,"
                    delay={100}
                    style="text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-normal"
                  />
                )}
              </motion.div>
              <motion.div variants={iconVariants}>
                {introAnimation2 && (
                  <Typewriter
                    text="I am Mohammed Haroon."
                    delay={100}
                    style="text-2xl lg:text-4xl xl:text-5xl  font-normal"
                  />
                )}
              </motion.div>
              {introAnimation3 && (
                <motion.span
                  variants={iconVariants}
                  animate="wave"
                  className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl w-fit font-normal"
                >
                  👋
                </motion.span>
              )}
              <motion.div variants={iconVariants}>
                {introAnimation4 && (
                  <Typewriter
                    text="I am a full-stack web developer."
                    delay={100}
                    style="text-2xl lg:text-4xl xl:text-5xl  font-normal"
                  />
                )}
              </motion.div>
              {introAnimation5 && (
                <motion.div
                  variants={iconVariants}
                  animate="scrollIcon"
                  className="w-16 h-16"
                >
                  {isDark ? <Image src={scroll} /> : <Image src={scrollDark} />}
                </motion.div>
              )}
            </motion.div>
          </div>
          <motion.div
            className="relative flex justify-center items-center h-full"
            animate={
              animateStatus ? (isDark ? "doneDark" : "doneLight") : "loading"
            }
          >
            <motion.div
              className={`bg-black w-1/3 h-1 `}
              variants={variants1}
            ></motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ResponsiveIntro;
