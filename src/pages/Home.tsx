import React, { FC } from "react";
import Hero from "../components/Hero";
import StoreApp from "../components/StoreApp";
import Products from "../components/Products";
import Location from "../components/Location";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <StoreApp />
      <Products />
      <Location />
    </div>
  );
};

export default Home;
