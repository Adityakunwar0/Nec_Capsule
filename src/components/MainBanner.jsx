import React from "react";
import Banner from "../assets/main_banner.png";
import WhiteArrow from "../assets/white_arrow_icon.svg";
import { BookOpen } from "lucide-react";

const MainBanner = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Welcome To <span className="text-indigo-600">Nec Capsule</span>….
          <br />
          Turning Engineers into <br />
          Licensed Professionals!
        </h1>

        {/* Button with Icon + Hover Animation */}
        <a
          href="#courses"
          className="group relative inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition hover:bg-indigo-700 active:scale-95"
        >
          <BookOpen className="w-5 h-5" />
          Get Courses
          <img src={WhiteArrow} alt="arrow" className="w-4 h-4" />
          {/* underline animation on hover */}
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Right Image */}
      <div className="mt-20 lg:mt-35 md:w-1/2 flex justify-center">
        <img
          src={Banner} // ✅ using your imported banner
          alt="Engineers"
          className="rounded-xl shadow-lg w-full max-w-md sm:max-w-lg object-cover"
        />
      </div>
    </div>
  );
};

export default MainBanner;
