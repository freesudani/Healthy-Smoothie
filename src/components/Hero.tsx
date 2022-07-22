import React, { FC, useState } from "react";
import DrinksImages from "../images/drinks-1430739.png";
import LemonandeImage from "../images/juice-35236_1280.png";
import { motion, AnimatePresence } from "framer-motion";
import { heroVariants, childVariants } from "../animations/HeroAnimation";

const Hero: FC = () => {
  const [showSlide, setShowSlide] = useState(false);

  const showSlideone = () => {
    setTimeout(() => {
      setShowSlide(false);
    }, 500);
  };

  const showSlidetwo = () => {
    setTimeout(() => {
      setShowSlide(true);
    }, 500);
  };

  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="w-screen h-[51rem] relative bg-hero-bg bg-no-repeat bg-center bg-cover flex justify-center items-center"
    >
      <AnimatePresence exitBeforeEnter>
        {!showSlide && (
          <motion.div
            variants={childVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-3/6 sm:w-4/6 mb:w-5/6 h-7/12 py-5 z-10 shadow-lg shadow-neutral-900 grid grid-cols-2 grid-rows-2 bg-black bg-opacity-20"
          >
            <div className="flex justify-center items-center">
              <h1 className="text-6xl md:text-5xl mb:text-4xl uppercase text-white text-center font-bold">
                Drink Smart <br /> live well
              </h1>
            </div>
            <div className="row-span-2 flex justify-center items-center relative">
              <img src={LemonandeImage} alt="lemonade" className="w-10/12" />
              <h6 className="text-2xl -rotate-90 absolute -right-16 lg:-right-32 mb:-right-24 md:text-xl mb:text-lg text-white font-bold -z-10">
                Don’t settle for something ordinary <br />
                Taste the best Lemonade
              </h6>
            </div>
            <div className="flex justify-between items-center flex-col">
              <img src={DrinksImages} alt="drinks" className="w-7/12 mb-5" />
              <h6 className=" text-secondary-200 text-2xl uppercase md:text-xl md:w-full md:text-center">
                try our freshly squeezed juices
              </h6>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {showSlide && (
          <motion.div
            variants={childVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-3/6 h-7/12 py-5 z-10 shadow-lg shadow-neutral-900  bg-alcohol-bg   bg-no-repeat bg-center bg-cover "
          >
            <div className="flex justify-center items-center m-12  bg-black/80">
              <h1 className="text-white text-6xl text-center uppercase">
                we invite our customers to try our beverages, while also
                offering our seasoned coffee drinkers & smoothie lovers a way to
                experience our beverages in a new way
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex absolute left-20 bottom-5">
        <div className="flex items-center mr-4">
          <input
            onClick={showSlidetwo}
            id="inline-2-radio"
            type="radio"
            value=""
            name="inline-radio-group"
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="flex items-center mr-4">
          <input
            onClick={showSlideone}
            id="inline-checked-radio"
            type="radio"
            value=""
            name="inline-radio-group"
            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
