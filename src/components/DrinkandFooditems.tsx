import { FC } from "react";
import { data } from "../data/MenuList";
import { SubMenuProps } from "../models/types.types";
import { motion } from "framer-motion";
import { itemProps } from "../models/types.types";
import { menuVariants } from "../animations/DrinkandFoodItemAnimation";

const DrinkandFooditems: FC<itemProps> = ({ itemId }) => {
  return (
    <div className="relative">
      {data[itemId - 1].menu.map((item: SubMenuProps, index) => {
        return (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            key={index}
            className="my-5 grid grid-cols-[5rem_1fr]"
          >
            <div className="flex justify-center items-center bg-primary-200  p-2 mr-3 ph:p-1 ph:mr-2">
              <h2 className="text-white font-bold text-4xl ph:text-2xl">
                {index + 1}
              </h2>
            </div>
            <div>
              <div className="mb-2">
                <h3 className="text-3xl text-secondary-200 font-semibold uppercase ph:text-2xl">
                  {item.subtitle}
                </h3>
              </div>

              <div className="flex  items-center w-fit">
                {item.ingredients.map((ing) => {
                  return (
                    <body className="mx-2 text-xl ph:mx-1 ph:text-lg">
                      {ing}
                    </body>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
      <div className="absolute top-10 right-20 sm:hidden">
        <img
          src={data[itemId - 1].image}
          alt={data[itemId - 1].title}
          className="w-80 md:w-64"
        />
      </div>
    </div>
  );
};

export default DrinkandFooditems;
