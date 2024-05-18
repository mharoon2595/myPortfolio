"use client";
import React from "react";
import useContentInView from "@/hooks/useContentInView";

const Contact = () => {
  const { ref } = useContentInView("Contact");
  return (
    <div
      className="h-[100vh] bg-gradient-to-b from-sky-200 "
      id="Contact"
      ref={ref}
    >
      Contact
    </div>
  );
};

export default Contact;
