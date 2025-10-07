import React from "react";
import { courses } from "../assets/assets";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div id="courses" className="mt-12 ml-10 mr-10">
      <p className=" text-2xl underline underline-offset-7 md:text-3xl font-medium mb-6">
        Courses
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={`/${course.path.toLowerCase()}`}
            className="group cursor-pointer py-6 px-4 rounded-xl flex flex-col
             justify-center items-center shadow-md hover:shadow-lg transition"
            style={{ backgroundColor: course.bgColor }}
            onClick={() => scrollTo(0, 0)}
          >
            <img
              src={course.image}
              alt={course.text}
              className="group-hover:scale-105 transition max-w-[300px] mb-3"
            />
            <p className="text-semibold md:text-xl font-semibold text-center leading-snug">
              {course.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
