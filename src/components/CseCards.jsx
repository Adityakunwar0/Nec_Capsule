import React from "react";
import { csecards } from "../assets/assets";
import { Link } from "react-router-dom";

const CseCards = () => {
  return (
    <div className="pt-5">
      <div className="ml-10 mr-10 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {csecards.map((csecard, index) => (
          <Link
            key={index}
            to={`/cse/${csecard.path.toLowerCase()}`}
            className=" bg-white/50 backdrop-blur-md border border-white/70 shadow-lg group cursor-pointer py-6 px-4 rounded-xl flex flex-col
             justify-center items-center hover:shadow-lg transition"
            style={{ backgroundColor: csecard.bgColor }}
            onClick={() => scrollTo(0, 0)}
          >
            <img
              src={csecard.image}
              alt={csecard.text}
              className="group-hover:scale-105 transition max-w-[300px] mb-3"
            />
            <p className="text-semibold md:text-xl font-semibold text-center leading-snug">
              {csecard.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CseCards;
