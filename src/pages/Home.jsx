import React from "react";
import MainBanner from "../components/MainBanner";
import Courses from "../components/Courses";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] ">
      <MainBanner />
      <Courses />
      <Testimonial />
    </div>
  );
};

export default Home;
