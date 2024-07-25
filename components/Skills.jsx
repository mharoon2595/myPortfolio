"use client";
import React from "react";
import { motion } from "framer-motion";
import { useActiveContext } from "@/context/sectionSelectionContext";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center font-medium justify-center rounded-full md:font-semibold md:bg-black bg-none text-black dark:text-white md:text-white py-1 px-3 lg:py-3 lg:px-6 shadow-black cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      whileInView={{ x: x, y: y, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const { skillsShuffle } = useActiveContext();
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]  2xl:h-[700px]  rounded-full relative flex items-center justify-center bg-circularLightDefault lg:bg-circularLightLg xl:bg-circularLightXl dark:bg-circularDarkDefault dark:lg:bg-circularDarkLg dark:xl:bg-circularDarkXl">
      <div className="bg-black rounded-full w-min h-min text-white p-2 absolute z-10">
        Skills
      </div>
      {skillsShuffle ? (
        <>
          <Skill name="Prisma" x="20vw" y="10vw" />
          <Skill name="Postgres" x="12vw" y="18vw" />
          <Skill name="CSS" x="-24vw" y="0vw" />
          <Skill name="MongoDB" x="-18vw" y="-10vw" />
          <Skill name="React" x="14vw" y="-18vw" />
          <Skill name="Git" x="-12vw" y="18vw" />
          <Skill name="TypeScript" x="0vw" y="25vw" />
          <Skill name="JS" x="0vw" y="-25vw" />
          <Skill name="NodeJS" x="-14vw" y="-19vw" />
          <Skill name="Tailwind" x="-18vw" y="11vw" />
          <Skill name="HTML" x="24vw" y="0vw" />
          <Skill name="NextJS" x="22vw" y="-8vw" />
        </>
      ) : (
        <>
          <Skill name="JS" x="6vw" y="5vw" />
          <Skill name="CSS" x="-5vw" y="-5vw" />
          <Skill name="Tailwind" x="-12vw" y="0vw" />
          <Skill name="Git" x="0vw" y="-15vw" />
          <Skill name="React" x="-5vw" y="5vw" />
          <Skill name="NodeJS" x="12vw" y="10vw" />
          <Skill name="TypeScript" x="0vw" y="15vw" />
          <Skill name="Postgres" x="10vw" y="-10vw" />
          <Skill name="MongoDB" x="-10vw" y="-10vw" />
          <Skill name="NextJS" x="-10vw" y="10vw" />
          <Skill name="Prisma" x="12vw" y="-0vw" />
          <Skill name="HTML" x="6vw" y="-5vw" />
        </>
      )}
    </div>
  );
};

export default Skills;
