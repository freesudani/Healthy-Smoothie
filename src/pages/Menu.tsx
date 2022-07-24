import React, { FC } from "react";
import DrinksandFood from "../components/DrinksandFood";
import OrderOnline from "../components/OrderOnline";

const MenuBook: FC = () => {
  return (
    <div>
      <OrderOnline />
      <DrinksandFood />
    </div>
  );
};

export default MenuBook;
