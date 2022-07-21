import React, { FC } from "react";
import { data } from "../data/FranchiseTraining";
import { TrainingProps } from "../models/types.types";

const FranchiseTraining: FC = () => {
  return (
    <div className="w-screen h-[51rem] sm:h-[60rem] py-10 px-28 lg:px-20 md:py-0 md:px-0 bg-white flex ph:flex-col justify-center items-center">
      <div className="-rotate-90 ph:rotate-0 ph:mb-10">
        <div className="py-5">
          <h1 className="text-6xl md:text-5xl mb:text-4xl text-center font-extrabold text-primary-200 uppercase">
            Training Program
          </h1>
        </div>
        <div>
          <body className="text-xl mb:text-lg text-center uppercase">
            We'll provide with a basic training to help set up a seccuful
            business
          </body>
        </div>
      </div>
      <div className="h-10/12 w-3/4 ph:w-full">
        {data.map((item: TrainingProps) => {
          return (
            <div
              key={item.id}
              className="grid  grid-cols-8 grid-rows-[5rem] gap-x-5"
            >
              <div
                className={`${
                  item.id === 1
                    ? "row-start-1 row-end-1"
                    : item.id === 2
                    ? "row-start-2 row-end-2"
                    : item.id === 3
                    ? "row-start-3 row-end-3"
                    : "row-start-4 row-end-4"
                } + ${"col-start-1 col-end-1  justify-self-end flex justify-center items-center h-20 w-20 md:h-15 md:w-15 mb:h-12 mb:w-12 text-3xl md:text-2xl mb:text-xl font-bold border-4 border-primary-200 rounded-full"}`}
              >
                {item.id}
              </div>
              <div
                className={`${
                  item.id === 1
                    ? "row-start-1 row-end-1"
                    : item.id === 2
                    ? "row-start-2 row-end-2"
                    : item.id === 3
                    ? "row-start-3 row-end-3"
                    : "row-start-4 row-end-4"
                } + ${"col-start-2 col-span-7 justify-self-start pr-20 md:pr-5"}`}
              >
                <div>
                  <h3 className="text-4xl md:text-3xl mb:text-2xl text-primary-200 uppercase">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <h6 className="text-xl mb:text-lg">{item.details}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FranchiseTraining;
