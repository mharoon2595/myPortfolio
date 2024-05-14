"use client";
import React from "react";
import useContentInView from "@/hooks/useContentInView";

const Contact = () => {
  const { ref } = useContentInView("Contact");
  return (
    <div className="h-[100vh] w-full bg-blue-400" id="Contact" ref={ref}>
      Contact
    </div>
  );
};

export default Contact;
