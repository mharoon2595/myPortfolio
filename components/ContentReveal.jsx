import React from "react";
import { motion } from "framer-motion";
import { useActiveContext } from "@/context/sectionSelectionContext";

const ContentReveal = ({
  content,
  startAnimation,
  slideControls,
  fromProjects,
}) => {
  const { isDark } = useActiveContext();

  return (
    <motion.div
      className={`relative w-fit  font-semibold overflow-hidden ${
        !fromProjects &&
        "xl:text-xl !leading-snug text-pretty xl:!leading-relaxed"
      }`}
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
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
        style={{
          position: "absolute",
          top: 2,
          bottom: 2,
          left: 0,
          right: 0,
          background: "gray",
        }}
      ></motion.div>
      {content}
    </motion.div>
  );
};

export default ContentReveal;
