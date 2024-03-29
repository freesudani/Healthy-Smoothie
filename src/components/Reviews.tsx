import { FC } from "react";
import { data } from "../data/Reviews";
import { AnimatePresence, motion } from "framer-motion";
import { reviewVariants } from "../animations/ReviewsAnimations";
import OpenQtImage from "../images/open-quotations.png";
import { useAppSelector, useAppDispatch } from "../App";
import { reviewActions } from "../store/rev";

const Reviews: FC = () => {
  const index = useAppSelector((state) => state.review.index);
  const dispatch = useAppDispatch();

  const checkNumber = (number: number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    dispatch(reviewActions.nextPerson());
  };

  const prevPerson = () => {
    dispatch(reviewActions.prevPerson());
  };

  return (
    <div className="w-screen h-[31rem] px-10 py-20  bg-white flex flex-col justify-center items-center ">
      <div className="h-full grid grid-rows-2 w-2/4">
        <AnimatePresence exitBeforeEnter>
          {index ? (
            <>
              <motion.div
                variants={reviewVariants}
                key={data[index].id}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-start"
              >
                <img
                  src={OpenQtImage}
                  alt="Open Quote"
                  className="w-10 h-10 mr-3  inline-block"
                />
                <h3 className="text-3xl italic inline">{data[index].text}</h3>
              </motion.div>
              <motion.div
                className="flex justify-end items-center"
                variants={reviewVariants}
                key={data[index].id + 10}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <img
                  src={data[index].image}
                  alt={data[index].name}
                  className="mr-5 rounded-full h-20 w-20 border-2 border-black"
                />
                <div className="w-[12rem]">
                  <h4 className="text-xl capitalize font-bold">
                    {data[index].name}
                  </h4>
                  <h4 className="text-xl capitalize font-bold">
                    {data[index].job}
                  </h4>
                </div>
              </motion.div>
            </>
          ) : (
            <motion.h1
              variants={reviewVariants}
              key={data[index].id}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-5xl text-center capitalize justify-items-center"
            >
              Click Below to see what our customers say about us
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center w-28">
        <button onClick={prevPerson}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 hover:h-14 hover:w-14 active:h-12 active:w-12 hover:text-primary-200 transition-all duration-300 ease-in "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>

        <button onClick={nextPerson}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 hover:h-14 hover:w-14 active:h-12 active:w-12 hover:text-primary-200 transition-all duration-300 ease-in "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
