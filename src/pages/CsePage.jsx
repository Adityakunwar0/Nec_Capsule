import React from "react";
import CseCards from "../components/CseCards";

const CsePage = () => {
  return (
    <div className="bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff]">
      <p className="pt-30 pl-35 text-2xl underline underline-offset-7 md:text-3xl font-medium mb-6 ">
        Cse Syllabus
      </p>

      <CseCards />
    </div>
  );
};

export default CsePage;
