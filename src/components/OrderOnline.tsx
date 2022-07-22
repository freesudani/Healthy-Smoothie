import React, { FC } from "react";
import { motion } from "framer-motion";
import { OrderVariants, itemVariants } from "../animations/OrderAnimation";

const OrderOnline: FC = () => {
  return (
    <div className="w-screen h-[51rem] relative bg-hero-bg bg-no-repeat bg-center bg-cover flex justify-center items-center ">
      <motion.div
        variants={OrderVariants}
        initial="hidden"
        animate="visible"
        className="w-3/6 sm:w-4/6 mb:w-5/6 h-7/12 py-5 z-10 shadow-lg shadow-neutral-900 flex flex-col justify-between items-center bg-black bg-opacity-20"
      >
        <div>
          <h1 className="text-6xl ph:text-5xl text-secondary-200 font-bold text-center uppercase">
            Healthy-Smoothie <br /> Menu
          </h1>
        </div>
        <div className="my-5">
          <h4 className="text-3xl ph:text-2xl text-white text-center capitalize">
            Skip the line , and order online
          </h4>
        </div>

        <motion.span
          variants={itemVariants}
          className="h-2 w-3/5 bg-primary-200 my-7"
        ></motion.span>
        <motion.span
          variants={itemVariants}
          className="h-1 w-2/5 bg-primary-200 my-5"
        ></motion.span>

        <div className="mt-3">
          <button className="lgbt ph:mdbt secondarybt uppercase">
            order now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderOnline;
