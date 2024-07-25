"use client";
import React, { useEffect } from "react";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import Links from "./Links";
import Image from "next/image";
import menuIcon from "@/assets/menu-icon.png";
import { BsMoon, BsSun } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("Home");

  const headerClass =
    "sm:flex fixed border -translate-x-1/2 border-white border-opacity-40 bg-white dark:bg-black bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-6 left-1/2 h-[3.25rem] w-[36rem] rounded-full dark:bg-slate-500 dark:border-black/40 dark:bg-opacity-75";

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(id);
  }, []);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <header className="relative z-[999] h-20 flex items-center">
      <div className="flex">
        <div className={`hidden ${headerClass}`}>
          <Links fromHeader current={selected} setCurrent={setSelected} />
        </div>
        <ThemeToggle />
      </div>

      <motion.div className=" sm:hidden" animate={open ? "open" : "closed"}>
        {show && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black "
            variants={variants}
          >
            <Links
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              setCurrent={setSelected}
              current={selected}
            />
          </motion.div>
        )}
        <MenuIcon setOpen={setOpen} />
      </motion.div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
