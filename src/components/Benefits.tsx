import React, { FC } from "react";
import { data } from "../data/Benefits";
import { BenefitsProps } from "../models/types.types";

const Benefits: FC = () => {
  return (
    <div className="w-screen h-min py-40 sm:h-min sm:py-10 ph:my-10 bg-white flex justify-center items-center ">
      <div className="w-10/12  h-min   bg-staff-bg bg-no-repeat bg-cover bg-center shadow-lg shadow-neutral-900 ">
        <div className="from-transparent  via-gray-800 to-black w-full h-full bg-gradient-to-r flex justify-start items-end flex-col">
          <div className="h-full w-4/5 ph:w-full p-5">
            <div>
              <h2 className="text-6xl md:text-5xl sm:text-4xl text-white font-bold text-left capitalize">
                The benefits of working at Healthy-Smoothie.
              </h2>
            </div>
            <ul>
              {data.map((item: BenefitsProps) => {
                return (
                  <li key={item.id} className="my-5">
                    <div>
                      <h6 className="text-white text-4xl md:text-3xl sm:text-2xl text-left">
                        <span className="text-white font-extrabold rounded-full bg-primary-200 px-4 mr-2">
                          {item.id}
                        </span>
                        {item.title}
                      </h6>
                    </div>
                    <div>
                      <body className="text-secondary-200 text-xl md:text-lg text-left mt-2">
                        {item.description}
                      </body>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
