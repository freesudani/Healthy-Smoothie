import React, { FC } from "react";
import { motion } from "framer-motion";
import { findUsVariants, svgVariant } from "../animations/LocationAnimations";

const FindUs: FC = () => {
  return (
    <div className="w-screen h-[51rem] relative bg-hero-bg bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <motion.div
        variants={findUsVariants}
        initial="hidden"
        animate="visible"
        className="w-3/6 sm:w-4/6 mb:w-5/6 h-7/12 py-5 z-10 shadow-lg shadow-neutral-900  bg-black bg-opacity-20 flex flex-col justify-center items-center"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-4xl mb:text-3xl text-white font-bold uppercase">
            Visit our Healthy-Smoothie Store to refuel on the good stuff!
          </h2>
        </div>
        <div className="text-center mt-5 w-4/5">
          <h3 className="text-4xl md:text-3xl mb:text-2xl text-secondary-200">
            Healthy-Smoothie has 4 functioning locations
          </h3>
        </div>
        <div className="my-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-44 w-44 text-white sm:h-36 sm:w-36 ph:h-32 ph:w-32 mb:h-28 mb:w-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <motion.path
              variants={svgVariant}
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <motion.path
              variants={svgVariant}
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default FindUs;
