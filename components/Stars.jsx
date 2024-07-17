"use client";
import React, { useRef } from "react";
import stars from "@/assets/stars.png";
import mountains from "@/assets/Mountains.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Stars = ({ title, index }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "850%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  // index % 2 === 0
  //   ? useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

  return (
    <div className="h-[75vh] sm:h-[150vh] relative overflow-hidden" ref={ref}>
      <div className="bg-gradient-to-b from-transparent via-blue-200 to-sky-400 absolute inset-0 z-[5]"></div>
      <motion.div
        style={{ y: yText }}
        className="absolute top-[10%] flex justify-center text-7xl sm:text-9xl font-bold text-slate-500 z-[15] w-full"
      >
        {title}
      </motion.div>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          x: xStars,
          backgroundImage: `url(${stars.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        transition={{
          repeat: "Infinity",
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${mountains.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Stars;
