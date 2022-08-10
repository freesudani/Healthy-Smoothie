import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import IconImage from "../images/e153069c5bc343f08a9b8398de94b63c.png";
import { data } from "../data/Navbar";
import { NavbarProps } from "../models/types.types";
import Sidebar from "./Sidebar";
import { useCycle } from "framer-motion";
import { useAppDispatch } from "../App";
import { contactActions } from "../store/cntus";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [open, cycleOpen] = useCycle(false, true);
  const dispatch = useAppDispatch();
  const sidebarHandler = () => cycleOpen();
  const showContactus = () => {
    dispatch(contactActions.showContactus());
  };

  return (
    <nav className="static w-screen h-48 mb:h-40 m-0 px-8 bg-white text-black flex justify-between items-center">
      <div className="hover:scale-110 active:scale-105 transition-all hover:duration-300">
        <img
          src={IconImage}
          alt="Logo"
          className="h-auto w-44 cursor-pointer"
          onClick={() => navigate("/home")}
        />
      </div>
      <ul className="flex justify-between items-center w-5/12 sm:hidden ">
        {data.map((item: NavbarProps) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={(navData) =>
                navData.isActive
                  ? "text-4xl lg:text-3xl md:text-2xl  cursor-pointer border-primary-100 border-b-2 text-primary-100 uppercase"
                  : "text-4xl  lg:text-3xl md:text-2xl cursor-pointer border-b-transparent border-b-2 hover:border-primary-200 hover:transition-all hover:duration-300 text-primary-200 uppercase"
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sm:hidden">
        <button
          className="lgbt md:mdbt primarybt uppercase mb:smbt"
          onClick={showContactus}
        >
          Contact Us
        </button>
      </div>
      <div
        onClick={sidebarHandler}
        className="hidden sm:block hover:scale-110 active:scale-105 transition-all hover:duration-300"
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-primary-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-primary-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {open && <Sidebar />}
    </nav>
  );
};

export default Navbar;
