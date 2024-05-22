import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center font-medium justify-center rounded-full md:font-semibold md:bg-black bg-none text-black md:text-white py-1 px-3 lg:py-3 lg:px-6 shadow-black cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]  2xl:h-[700px]  rounded-full relative flex items-center justify-center bg-circularLightDefault lg:bg-circularLightLg xl:bg-circularLightXl">
      <div className="bg-black rounded-full w-min h-min text-white p-2 absolute z-10">
        Skills
      </div>
      <Skill name="HTML" x="7vw" y="7vw" />
      <Skill name="CSS" x="-7vw" y="-6vw" />
      <Skill name="JavaScript" x="-10vw" y="-10vw" />
      <Skill name="React" x="15vw" y="-10vw" />
      <Skill name="Node/Express" x="-10vw" y="10vw" />
      <Skill name="TypeScript" x="8vw" y="16vw" />
      <Skill name="Postgres" x="7vw" y="-16vw" />
      <Skill name="MongoDB" x="-10vw" y="-16vw" />
      <Skill name="NextJS" x="-12vw" y="5vw" />
      <Skill name="Prisma" x="17vw" y="-1vw" />
      <Skill name="Git" x="6vw" y="-5vw" />
    </div>
  );
};

export default Skills;
