import React from "react";
import { Link } from "react-router-dom";
import Testimonial_Image from "../assets/testimonial.jpg";
import { MessageSquare } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="relative mt-10 pb-10 mx-4 md:mt-30 md:ml-15 md:mr-10">
      <p className="text-2xl underline underline-offset-7 md:text-3xl font-medium mb-6">
        About Us
      </p>

      {/* Background Image */}
      <img
        src={Testimonial_Image}
        alt="testimonial"
        className="w-full h-60 sm:h-80 md:h-120 object-cover rounded-xl shadow-lg"
      />

      {/* Content */}
      <div
        className="absolute inset-0 hidden md:flex flex-col items-start justify-center 
                   px-6 lg:pl-24 text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-snug text-transparent bg-clip-text bg-white/85">
          The Pioneer Platform for Cracking the Nepal Engineer License Exam —
          NEC Capsule: Easy Learning, Quick Revisions, Every Answer Explained….
        </h1>

        <h2 className="mt-4 text-xl font-semibold bg-gradient-to-r from-indigo-700 to-violet-500 px-3 py-1 rounded-md text-white shadow-md">
          Help us improve — Share feedback
        </h2>

        <Link
          to="/feedback"
          className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 
                     text-white font-semibold px-5 py-2 rounded-full shadow-lg 
                     hover:bg-white/30 transition duration-300 text-base"
        >
          <MessageSquare size={20} />
          Feedback
        </Link>
      </div>

      {/* Mobile Content (below image) */}
      <div className="md:hidden mt-4 text-center px-2">
        <h1 className="text-lg sm:text-xl font-bold leading-snug text-gray-800">
          The Pioneer Platform for Cracking the Nepal Engineer License Exam —
          NEC Capsule: Easy Learning, Quick Revisions, Every Answer Explained….
        </h1>

        <h2 className="mt-3 text-base font-semibold text-indigo-700">
          Help us improve — Share feedback
        </h2>

        <Link
          to="/feedback"
          className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white font-medium 
                     px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
        >
          <MessageSquare size={18} />
          Feedback
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
