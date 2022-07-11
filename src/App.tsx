import React, { FC } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StoreApp from "./components/StoreApp";
import Products from "./components/Products";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Hero />
      <StoreApp />
      <Products />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
