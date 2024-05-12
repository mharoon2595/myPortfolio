"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ResponsiveIntro = ({ isMobile }) => {
  const [animateStatus, setAnimateStatus] = useState(false);
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    let timeoutId;
    function animateStuff() {
      timeoutId = setTimeout(() => setAnimateStatus(true), 1000);
    }
    animateStuff();

    return () => clearTimeout(timeoutId);
  }, []);

  const variants1 = {
    done: {
      rotate: [0, 90, 90],
      width: ["inherit", "inherit", "500px"],
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

  const variants2 = {
    done: {
      rotate: [0, 90, 180],
      width: ["4px", "4px", "90%"],
      height: ["inherit", "inherit", "80vh"],
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

  console.log("rotate--->", rotate);

  return (
    <>
      {isMobile < 640 ? (
        <>
          <motion.div className="absolute top-[10%] left-[10%] flex flex-col w-[80vw] justify-between h-[400px] p-10">
            <p>HAloooo</p>
            <p>HAloooo</p>
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
          <motion.div className="absolute top-[15%] left-[10%] flex w-[80vw] justify-between h-[400px] p-10">
            <p>HAloooo</p>
            <p>HAloooo</p>
          </motion.div>
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
