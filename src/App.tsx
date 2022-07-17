import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Franchising from "./pages/Franchising";

const App: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/franchising" element={<Franchising />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
