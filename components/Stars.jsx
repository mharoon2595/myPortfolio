"use client";
import React, { useRef } from "react";
import stars from "@/assets/stars.png";
import mountains from "@/assets/Mountains.png";
import planets from "@/assets/planets.png";
import rocket from "@/assets/pocketRocket.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Stars = ({ title, index }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "850%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const xPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const xRocket = useTransform(scrollYProgress, [0, 1], ["-50%", "800%"]);
  const yRocket = useTransform(scrollYProgress, [0, 1], ["50%", "-800%"]);
  // index % 2 === 0
  //   ? useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

  return (
    <div className="h-[75vh] sm:h-[150vh] relative overflow-hidden" ref={ref}>
      <div
        className={`${
          index === 3 ? "bg-gradient-to-bl" : "bg-gradient-to-b"
        }  ${
          index === 3 ? "from-red-300 dark:from-[#2C5364]" : "from-transparent"
        } via-blue-200 to-sky-400 ${
          index === 3 ? "dark:via-[#284754]" : "dark:via-[#170E13]"
        } dark:to-[#7A7ADB] absolute inset-0 z-[5]`}
      ></div>
      <motion.div
        style={{ y: yText }}
        className="absolute top-[10%] flex justify-center text-7xl sm:text-9xl font-bold text-slate-500 z-[15] w-full dark:text-slate-300"
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
      {index === 2 && (
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            x: xPlanets,
            backgroundImage: `url(${planets.src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: `no-repeat`,
          }}
          transition={{
            repeat: "Infinity",
          }}
        ></motion.div>
      )}
      {index === 3 && (
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            x: xRocket,
            y: yRocket,
            width: "200px",
            height: "200px",
            backgroundImage: `url(${rocket.src})`,
            backgroundRepeat: `no-repeat`,
            rotate: 45,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></motion.div>
      )}
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
