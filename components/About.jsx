"use client";
import { useActiveContext } from "@/context/sectionSelectionContext";
import useContentInView from "@/hooks/useContentInView";
import React, { useEffect } from "react";
import { easeIn, motion, useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useContentInView("About");
  const startAnimation = useAnimation();
  const sildeControls = useAnimation();

  useEffect(() => {
    if (inView) {
      startAnimation.start("visible");
      sildeControls.start("visible");
    }
  }, [inView]);

  return (
    <div
      className="h-[100vh] bg-gradient-to-b from-sky-200"
      id="About"
      ref={ref}
    >
      <div className="flex h-full justify-between items-center align-middle px-[300px]">
        <div className="flex flex-col gap-3 max-w-[400px]">
          <motion.div
            className="relative w-fit text-xl overflow-hidden"
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
              animate={sildeControls}
              transition={{ duaration: 0.5, ease: "easeIn", delay: 0.5 }}
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "black",
              }}
            ></motion.div>
            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
            Bla Bla Bla Bla Bla Bla Bla
          </motion.div>
          <motion.div
            className="relative w-fit text-xl overflow-hidden"
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
              animate={sildeControls}
              transition={{ duaration: 0.5, ease: "easeIn", delay: 0.5 }}
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "black",
              }}
            ></motion.div>
            Bla Bla Bla Bla Bla
          </motion.div>
        </div>

        <div className="max-w-[400px] text-xl">
          Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla
          Bla Bla Bla Bla Bla Bla Bla
        </div>
      </div>
    </div>
  );
};

export default About;
