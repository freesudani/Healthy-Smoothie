import React, { FC } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StoreApp from "./components/StoreApp";
import Products from "./components/Products";
import Location from "./components/Location";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StoreApp />
      <Products />
      <Location />
    </div>
  );
};

export default App;
