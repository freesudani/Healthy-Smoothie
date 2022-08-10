import { FC } from "react";
import { data } from "../data/MenuList";
import { MenuProps } from "../models/types.types";
import DrinkandFooditems from "./DrinkandFooditems";
import { useAppSelector, useAppDispatch } from "../App";
import { drinkandFoodActions } from "../store/dnf";

const DrinksandFood: FC = () => {
  const itemId = useAppSelector((state) => state.drinkfood.itemId);
  const dispatch = useAppDispatch();

  return (
    <div className="w-screen h-screen sm:h-min sm:py-10 ph:my-10 bg-white flex justify-center items-center ">
      <div className="w-10/12 mb:w-11/12 h-[40rem] sm:h-[50rem] p-10  bg-primary-100 grid grid-row-[1fr_5fr] shadow-lg shadow-neutral-900 relative">
        <div className="flex justify-around items-center border-b-2 border-black pb-5 h-[5rem]">
          {data.map((item: MenuProps, index) => {
            return (
              <div
                key={index}
                onClick={() => dispatch(drinkandFoodActions.setItemId(item.id))}
                className={` ${
                  item.id === itemId
                    ? "border-b-4 border-primary-200 mb-2 transition-all duration-200 ease-in"
                    : "border-b-4 border-transparent mb-2 transition-all duration-200 ease-in"
                }`}
              >
                <h3 className="text-4xl md:text-3xl md:text-center ph:text-2xl uppercase">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div>{!itemId && <div>X</div>}</div>
        <div className="overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-primary-200 scrollbar-track-gray-100 scrollbar-thumb-rounded">
          {itemId && <DrinkandFooditems itemId={itemId} />}
        </div>
      </div>
    </div>
  );
};

export default DrinksandFood;
