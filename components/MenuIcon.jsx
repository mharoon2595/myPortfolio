import React, { useState } from "react";
import Image from "next/image";
import menuIcon from "@/assets/menu-icon.png";
import { motion } from "framer-motion";

const MenuIcon = ({ setOpen }) => {
  return (
    // <div className="flex justify-between items-center sm:hidden m-3">
    //   <div>Personal Portfolio</div>
    //   <div
    //     className="w-[60px] h-[60px] rounded-full bg-white relative cursor-pointer"
    //     onClick={() => setOpen((prevState) => !prevState)}
    //   >
    //     <Image src={menuIcon} fill className="p-3" />
    //   </div>
    // </div>
    <button
      className="fixed top-[28px] left-[38px] w-[50px] h-[50px] rounded-full bg-transparent"
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default MenuIcon;
