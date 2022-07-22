import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Franchising from "./pages/Franchising";
import Menu from "./pages/Menu";

const App: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
