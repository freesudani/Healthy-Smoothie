import React from "react";
import { data } from "../data/Steps";
import { StepsProps } from "../models/types.types";

const Steps = () => {
  return (
    <div className="w-screen h-[41rem] md:h-[58rem] ph:h-[79rem]  p-10 bg-white ">
      <div className="flex justify-center items-center m-10">
        <h1 className="text-6xl mb:text-5xl text-secondary-200 capitalize">
          steps to ownership
        </h1>
      </div>
      <div className="flex justify-around items-center m-10 md:grid md:grid-cols-3 md:gri-row-2 md:gap-8 ph:grid-cols-2 ph:grid-row-3">
        {data.map((item: StepsProps) => {
          return (
            <div className="h-[20rem] w-[20rem] lg:w-[15rem] md:w-[20rem] sm:w-[15rem] border-primary-200 border-2 rounded-xl shadow-lg shadow-black flex flex-col justify-start items-center z-10">
              <div className="py-6">
                <img src={item.image} alt={item.description} />
              </div>
              <div className="grid grid-cols-[30px_100px] gap-3 items-start ">
                <div className="w-11 h-11 border-primary-200 border-4 rounded-full">
                  <h3 className="font-bold text-2xl text-center">{item.id}</h3>
                </div>
                <div className="w-40">
                  <body className="text-lg">{item.description}</body>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute z-20"></div>
    </div>
  );
};

export default Steps;
