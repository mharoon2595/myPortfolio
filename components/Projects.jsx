"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Image from "next/image";
import qKart from "@/assets/QKart.png";
import mernEstate from "@/assets/mernEstate.png";
import instaPay from "@/assets/InstaPay.png";
import cobraCovers from "@/assets/cobraCovers.png";
import nextLevel from "@/assets/nextlevel.png";
import { useRef } from "react";
import useContentInView from "@/hooks/useContentInView";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300 dark:from-[#0F2027] dark:to-[#2C5364]",
      title: "CobraCovers",
      desc: "A website where you can build custom iPhone cases, developed with Next.js App Router, TypeScript, PostgreSQL, and Tailwind CSS.",
      img: cobraCovers,
      liveLink: "https://cobracovers.vercel.app/",
      codeLink: "https://github.com/mharoon2595/lit_cases4all",
    },
    {
      id: 2,
      color: "from-blue-300 to-green-300 dark:from-[#2C5364] dark:to-teal-700",
      title: "MernEstate",
      desc: "A 'MERN' stack, fully responsive real estate application where users can register, login and buy/sell properties. A chat feature between users has also been implemented using web sockets.",
      img: mernEstate,
      liveLink: "https://mernestate.vercel.app/",
      codeLink: "https://github.com/mharoon2595/mernEstate",
    },
    {
      id: 3,
      color: "from-green-300 to-violet-300 dark:from-teal-700 dark:to-red-700",
      title: "InstaPay",
      desc: "Instapay is a fully responsive, Credit Card Management platform which can handle the entire lifecycle of a customer's credit card. Implemented using the 'MERN' stack.",
      img: instaPay,
      liveLink: "https://instapaymern.web.app/",
      codeLink: "https://github.com/mharoon2595/credMERN",
    },
    {
      id: 4,
      color:
        "from-violet-300 to-purple-300 dark:from-red-700 dark:to-slate-700",
      title: "FoodiesApp",
      desc: "A fully responsive NextJS application built with the app-router, uses MongoDB as the database.",
      img: nextLevel,
      liveLink: "https://foodies-app-weld.vercel.app/",
      codeLink: "https://github.com/mharoon2595/foodiesApp",
    },
    {
      id: 5,
      color: "from-purple-300 to-red-300 dark:from-slate-700 dark:to-[#2C5364]",
      title: "QKart",
      desc: "QKart is a fully responsive, e-commerce application implemented using the 'MERN' stack.",
      img: qKart,
      liveLink: "https://qkart-mharoon.netlify.app/",
      codeLink: "https://github.com/mharoon2595/QKart_",
    },
  ];
  const { ref } = useContentInView("Projects");
  const refScroll = useRef();

  const { scrollYProgress } = useScroll({ target: refScroll });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div id="Projects" className="min-h-1">
      <div className="h-[500vh] relative" ref={refScroll}>
        <div
          className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden"
          ref={ref}
        >
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center ${
                  item.id === 5 ? "bg-gradient-to-br" : "bg-gradient-to-r"
                } ${item.color}`}
                key={item.id}
              >
                <ProjectCard
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  liveLink={item.liveLink}
                  codeLink={item.codeLink}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
