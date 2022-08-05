import React, { FC } from "react";
import Hero from "../components/Hero";
import StoreApp from "../components/StoreApp";
import Products from "../components/Products";
import Reviews from "../components/Reviews";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <StoreApp />
      <Products />
      <Reviews />
    </div>
  );
};

export default Home;
