import React from "react";
import stars from "@/assets/stars.png";
import mountains from "@/assets/mountains.png";

const Stars = ({ title }) => {
  return (
    <div className="h-[100vh] sm:h-[150vh] relative">
      <div className="bg-gradient-to-b from-sky-50 via-blue-200 to-sky-400 absolute inset-0 z-[5]"></div>
      <div className="absolute top-[10%] flex justify-center text-7xl sm:text-9xl font-bold text-slate-500 z-[15] w-full">
        {title}
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${stars.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${mountains.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Stars;
