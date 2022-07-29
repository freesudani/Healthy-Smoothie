import React, { FC } from "react";
import StoreImage from "../images/shop.png";
import UnderCImage from "../images/underconstructionsign.png";
import GlobeImage from "../images/Globe-Continent-2015101219.png";
import BlenderImage from "../images/soda_juice_water.png";

const Stores: FC = () => {
  return (
    <div className="w-screen h-[30rem] mb:h-min  p-10  grid grid-cols-4 md:grid-cols-2 md:grid-rows-2 mb:grid-cols-1 mb:grid-rows-4 mb:gap-10 bg-stacked-bg bg-no-repeat bg-center bg-cover ">
      <div className="flex justify-evenly items-center w-[28rem] sm:w-[25rem]">
        <div>
          <img
            src={StoreImage}
            alt="Store"
            className="h-44 w-44 sm:h-40 sm:w-40 ph:h-32 ph:w-32"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-8xl ph:text-6xl font-bold text-secondary-200">
            61+
          </h3>
          <h5 className="text-3xl ph:text-xl italic">Opened Location</h5>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-[28rem] sm:w-[25rem]">
        <div>
          <img
            src={UnderCImage}
            alt="UnderContruction"
            className="h-44 w-44 sm:h-40 sm:w-40 ph:h-32 ph:w-32"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-8xl ph:text-6xl font-bold text-secondary-200">
            32+
          </h3>
          <h5 className="text-3xl ph:text-xl italic">Under Construction</h5>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-[28rem] sm:w-[25rem]">
        <div>
          <img
            src={GlobeImage}
            alt="UnderContruction"
            className="h-44 w-44 sm:h-40 sm:w-40 ph:h-32 ph:w-32"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-8xl ph:text-6xl font-bold text-secondary-200">
            52+
          </h3>
          <h5 className="text-3xl ph:text-xl italic">Countries Branches</h5>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-[28rem] sm:w-[25rem]">
        <div>
          <img
            src={BlenderImage}
            alt="UnderContruction"
            className="h-44 w-44 sm:h-40 sm:w-40 ph:h-32 ph:w-32"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-8xl ph:text-6xl font-bold text-secondary-200">
            15+
          </h3>
          <h5 className="text-3xl ph:text-xl italic">New Mixtures</h5>
        </div>
      </div>
    </div>
  );
};

export default Stores;
