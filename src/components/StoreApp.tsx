import React, { FC } from "react";
import ThirstyImage from "../images/sad-3672388_1920.png";
import GooglePlay from "../images/256x256.png";
import AppStore from "../images/256x256A.png";

const StoreApp: FC = () => {
  return (
    <div className="w-screen h-[51rem]  bg-white flex justify-center items-center ">
      <div className="w-10/12 h-7/12  bg-primary-100 flex justify-center items-center flex-col shadow-lg shadow-neutral-900 relative">
        <div className="absolute left-0">
          <img src={ThirstyImage} alt="Image" className="h-auto w-96" />
        </div>
        <div className="my-5">
          <h5 className="text-white text-4xl font-bold">Drink App</h5>
        </div>
        <div className="my-5 text-center">
          <h1 className="text-white text-7xl">
            Why stay thirsty when <br /> you can order from healthy smoothie
          </h1>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-4xl">Download the drink app now on</h3>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="mx-5 cursor-pointer">
            <img src={GooglePlay} alt="googlePlay" className="w-64" />
          </div>
          <div className="mx-5 cursor-pointer">
            <img src={AppStore} alt="AppStore" className="w-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreApp;
