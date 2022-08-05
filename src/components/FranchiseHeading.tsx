import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  franchiseVariant,
  itemVariants,
} from "../animations/FranchisingAnimation";
import { data } from "../data/Franchise";
import { FranchiseProps } from "../models/types.types";

const FranchiseHeading: FC = () => {
  return (
    <div className="w-screen h-[51rem] relative bg-hero-bg bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <motion.div
        variants={franchiseVariant}
        initial="hidden"
        animate="visible"
        className="w-3/6 sm:w-4/6 mb:w-5/6 h-7/12 p-5 z-10 shadow-lg shadow-neutral-900 flex flex-col bg-black bg-opacity-20"
      >
        <div>
          <h1 className="text-6xl  md:text-5xl mb:text-4xl uppercase text-secondary-200 text-center font-bold">
            INVESTING IN OUR FRANCHISE
          </h1>
        </div>
        <div className="mt-5">
          <h6 className="text-2xl ph:text-lg  text-white text-center">
            Your investment in our healthy franchise opportunity allows you to
            fully capitalize on a robust industry while enjoying comprehensive
            franchisor support.
          </h6>
        </div>
        <div className="flex justify-around  items-center ph:justify-between mt-14 ">
          {data.map((item: FranchiseProps) => {
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`h-60 w-60 md:h-44 md:w-44 ph:h-36 ph:w-36 flex flex-col justify-center items-center border-primary-200 border-4 rounded-full text-white ${
                  item.id === 1
                    ? "bg-fruit1-bg"
                    : item.id === 2
                    ? "bg-fruit2-bg"
                    : "bg-fruit3-bg"
                }  bg-center bg-cover bg-no-repeat`}
              >
                <h2 className="text-4xl md:text-3xl ph:text-2xl">
                  ${item.price}
                </h2>
                <h3 className="text-3xl md:text-2xl ph:text-xl text-center capitalize">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FranchiseHeading;
