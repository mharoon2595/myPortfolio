"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useContentInView from "@/hooks/useContentInView";
import { ReactTyped } from "react-typed";
import Lottie from "react-lottie";
// import Lottie from "@lottielab/lottie-player/react";
import spacemanDark from "@/assets/spacemanDark.json";
import spacemanLight from "@/assets/spacemanLight.json";
import Typewriter from "@/utils/TypeWriter";
import Image from "next/image";
import scroll from "@/assets/scroll.png";
import scrollDark from "@/assets/scrollDark.png";

const ResponsiveIntro = ({ isMobile }) => {
  const [animateStatus, setAnimateStatus] = useState(false);
  const [introAnimation1, setIntroAnimation1] = useState(false);
  const [introAnimation2, setIntroAnimation2] = useState(false);
  const [introAnimation3, setIntroAnimation3] = useState(false);
  const [introAnimation4, setIntroAnimation4] = useState(false);
  const [introAnimation5, setIntroAnimation5] = useState(false);
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

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setElemInView(entry.isIntersecting);
  //     console.log("entry--->", entry);
  //   });
  //   observer.observe(refElem.current);
  // });

  useEffect(() => {
    console.log("url--->", window.location.hash);
    if (inView && window.location.hash === "#Home") {
      window.scrollTo(0, 0);
      window.location.hash = "";
    }
  }, [inView]);

  const variants1 = {
    done: {
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
        // delay: 4,
        duration: 1,
        // The first child will appear AFTER the parent has appeared on the screen
        delayChildren: 4,
        // The next sibling will appear 0.5s after the previous one
      },
    },
  };

  const iconVariants = {
    out: {
      // x: -600,
      opacity: 0,
    },
    in: {
      // x: 0,
      opacity: 1,
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
    done: {
      rotate: [0, 90, 180],
      width: ["4px", "4px", "90%"],
      height: ["inherit", "inherit", "85vh"],
      backgroundColor: ["null", "null", "transparent"],
      borderWidth: ["0px", "3px", "3px"],
      borderColor: ["transparent", "black", "black"],
      transition: { type: "ease", duration: 2 },
    },
    loading: {
      rotate: 0,
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
            className="absolute top-[10%] left-[10%] flex flex-col-reverse w-[80vw] justify-between items-center h-[500px] p-10"
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
                  className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-normal"
                >
                  🤝
                </motion.span>
              )}
              <motion.div variants={iconVariants}>
                {introAnimation3 && (
                  <Typewriter
                    text="I am a full-stack web developer."
                    delay={100}
                    style="text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-normal"
                  />
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
              <Lottie options={spacemanL} />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center h-full"
            animate={animateStatus ? "done" : "loading"}
          >
            <motion.div
              className={`bg-black w-1/3 h-1 rotate-90 border-0 `}
              variants={variants2}
            ></motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <div
            className="absolute top-[15%] left-[10%] flex flex-row-reverse w-[80vw] justify-between items-center h-[400px] p-10"
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
              <Lottie options={spacemanL} />
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
                    style="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-normal"
                  />
                )}
              </motion.div>
              {introAnimation3 && (
                <motion.span
                  variants={iconVariants}
                  className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-normal"
                >
                  🤝
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
              </motion.div>
              {introAnimation5 && (
                <motion.div
                  variants={iconVariants}
                  animate="scrollIcon"
                  className="w-16 h-16"
                >
                  <Image src={scrollDark} />
                </motion.div>
              )}
            </motion.div>
            {/* <motion.div
              variants={boxVariants}
              initial="out"
              animate="in"
              className="flex flex-col gap-5"
            >
              <motion.span
                role="img"
                aria-labelledby="magic wand"
                variants={iconVariants}
              >
                🚀
              </motion.span>
              <motion.span
                role="img"
                aria-labelledby="sparkles"
                variants={iconVariants}
              >
                ✨
              </motion.span>
            </motion.div> */}
          </div>
          <motion.div
            className="relative flex justify-center items-center h-full"
            animate={animateStatus ? "done" : "loading"}
          >
            <motion.div
              className={`bg-black w-1/3 h-1`}
              variants={variants1}
            ></motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ResponsiveIntro;
