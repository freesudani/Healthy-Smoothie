import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StoreApp from "./components/StoreApp";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StoreApp />
      <Products />
    </div>
  );
}

export default App;
