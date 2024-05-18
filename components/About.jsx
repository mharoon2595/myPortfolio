"use client";
import { useActiveContext } from "@/context/sectionSelectionContext";
import useContentInView from "@/hooks/useContentInView";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const { ref } = useContentInView("About");

  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.6,
        // The first child will appear AFTER the parrent has appeared on the screen
        delayChildren: 1.2,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    out: {
      x: -600,
      opacity: 0,
    },
    in: {
      x: 600,
      opacity: 1,
    },
  };

  return (
    <div
      className="h-[100vh] bg-gradient-to-b from-sky-200"
      id="About"
      ref={ref}
    >
      <motion.div variants={boxVariants} initial="out" animate="in">
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
      </motion.div>
    </div>
  );
};

export default About;
