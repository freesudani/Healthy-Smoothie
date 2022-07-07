import React, { FC } from "react";
import SmoothieImage from "../images/smoothie-1703657_prev_ui.png";
import TomatoImage from "../images/tomato-316308_prev_ui.png";
import CoffeeImage from "../images/cappuccino-756490_prev_ui.png";

const Products: FC = () => {
  return (
    <div className="w-screen h-screen pb-20 pt-10 pl-52 bg-products-bg bg-no-repeat bg-center bg-cover grid grid-cols-4 grid-rows-3 items-center justify-center">
      <div className=" w-[45rem] bg-primary-200   col-start-3 row-start-1 col-end-4 row-end-1 grid grid-cols-2 relative">
        <div className="grid grid-rows-3">
          <div>
            <h2 className="text-white text-3xl text-center m-5">
              Healthy Smoothies
            </h2>
          </div>
          <div>
            <body className="text-white text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              distinctio soluta, architecto pariatur id reiciendis aperiam earum
            </body>
          </div>
          <div className="flex justify-center items-center">
            <button className="smbt secondarybt flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Read More
            </button>
          </div>
        </div>
        <div className="row-span-3 absolute -top-36 -right-28">
          <img src={SmoothieImage} alt="smoothie" className="w-[100rem]" />
        </div>
      </div>
      <div className=" w-[45rem] bg-primary-200 col-start-1 col-end-2 row-start-2 row-end-2 relative grid grid-cols-2">
        <div className="row-span-3 absolute -top-36 -right-60">
          <img src={TomatoImage} alt="Juice" className="w-[50rem]" />
        </div>
        <div className="grid grid-rows-3">
          <div>
            <h2 className="text-white text-3xl text-center m-5">
              Healthy Smoothies
            </h2>
          </div>
          <div>
            <body className="text-white text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              distinctio soluta, architecto pariatur id reiciendis aperiam earum
            </body>
          </div>
          <div className="flex justify-center items-center">
            <button className="smbt secondarybt flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[45rem] bg-primary-200   col-start-3 row-start-3 col-end-4 row-end-3 grid grid-cols-2 relative mb-8">
        <div className="grid grid-rows-3">
          <div>
            <h2 className="text-white text-3xl text-center m-5">
              Hot Beverage
            </h2>
          </div>
          <div>
            <body className="text-white text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              distinctio soluta, architecto pariatur id reiciendis aperiam earum
            </body>
          </div>
          <div className="flex justify-center items-center">
            <button className="smbt secondarybt flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Read More
            </button>
          </div>
        </div>
        <div className="row-span-3 absolute -top-13 -right-28">
          <img src={CoffeeImage} alt="coffee" className="w-[30rem]" />
        </div>
      </div>
    </div>
  );
};

export default Products;
