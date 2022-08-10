import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Franchising from "./pages/Franchising";
import Menu from "./pages/Menu";
import Careers from "./pages/Careers";
import Location from "./pages/Location";
import ContactUs from "./components/ContactUs";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store/index";

const App: FC = () => {
  const show = useAppSelector((state) => state.cntus.onShow);
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <AnimatePresence>{show && <ContactUs />}</AnimatePresence>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default App;
