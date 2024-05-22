import React from "react";
import { motion } from "framer-motion";

const ContentReveal = ({ content, startAnimation, slideControls }) => {
  return (
    <motion.div
      className="relative w-fit text-xl font-semibold overflow-hidden"
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{
        duration: 0.5,
      }}
      initial="hidden"
      animate={startAnimation}
    >
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duaration: 0.5, ease: "easeIn", delay: 0.5 }}
        style={{
          position: "absolute",
          top: 2,
          bottom: 2,
          left: 0,
          right: 0,
          background: "black",
        }}
      ></motion.div>
      {content}
    </motion.div>
  );
};

export default ContentReveal;
