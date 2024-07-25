"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Image from "next/image";
import qKart from "@/assets/Qkart.png";
import mernEstate from "@/assets/mernEstate.png";
import instaPay from "@/assets/Instapay.png";
import chatApp from "@/assets/ChatApp.png";
import { useRef } from "react";
import useContentInView from "@/hooks/useContentInView";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300 dark:from-[#0F2027] dark:to-[#2C5364]",
      title: "MernEstate",
      desc: "A 'MERN' stack, fully responsive real estate application where users can register, login and buy/sell properties. A chat feature between users has also been implemented using web sockets.",
      img: mernEstate,
      liveLink: "https://mernestate.vercel.app/",
      codeLink: "https://github.com/mharoon2595/mernEstate",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300 dark:from-[#2C5364] dark:to-red-700",
      title: "InstaPay",
      desc: "Instapay is a fully responsive, Credit Card Management platform which can handle the entire lifecycle of a customer's credit card. Implemented using the 'MERN' stack.",
      img: instaPay,
      liveLink: "https://instapaymern.web.app/",
      codeLink: "https://github.com/mharoon2595/credMERN",
    },
    {
      id: 3,
      color:
        "from-violet-300 to-purple-300 dark:from-red-700 dark:to-slate-700",
      title: "QKart",
      desc: "QKart is a fully responsive, e-commerce application implemented using the 'MERN' stack.",
      img: qKart,
      liveLink: "https://qkart-mharoon.netlify.app/",
      codeLink: "https://github.com/mharoon2595/QKart_",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300 dark:from-slate-700 dark:to-[#2C5364]",
      title: "React-Chat",
      desc: "A chat application using web sockets, TypeScript and Postgres.",
      img: chatApp,
      liveLink: "https://chat-app-d0r8.onrender.com/",
      codeLink: "https://github.com/mharoon2595/chat-app",
    },
  ];
  const { ref } = useContentInView("Projects");
  const refScroll = useRef();

  const { scrollYProgress } = useScroll({ target: refScroll });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div id="Projects" className="min-h-1">
      <div className="h-[400vh] relative" ref={refScroll}>
        <div
          className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden"
          ref={ref}
        >
          <motion.div style={{ x }} className="flex">
            {/* <div
              className="h-screen w-[50vw] flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"
              ref={ref}
            ></div> */}
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center ${
                  item.id === 4 ? "bg-gradient-to-br" : "bg-gradient-to-r"
                } ${item.color}`}
                key={item.id}
              >
                {/* <div className="flex flex-col gap-1 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[350px] lg:h-[250px] ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <liveLink href={item.liveLink} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </liveLink>
                </div> */}
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
