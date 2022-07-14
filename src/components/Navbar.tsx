import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import IconImage from "../images/e153069c5bc343f08a9b8398de94b63c.png";

const Navbar: FC = () => {
  const navigate = useNavigate();

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
        <li>
          <NavLink
            to="/menu"
            className={(navData) =>
              navData.isActive
                ? "text-4xl lg:text-3xl md:text-2xl  cursor-pointer border-primary-100 border-b-2 text-primary-100 uppercase"
                : "text-4xl  lg:text-3xl md:text-2xl cursor-pointer border-b-transparent border-b-2 hover:border-primary-200 hover:transition-all hover:duration-300 text-primary-200 uppercase"
            }
          >
            menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={(navData) =>
              navData.isActive
                ? "text-4xl lg:text-3xl md:text-2xl  cursor-pointer border-primary-100 border-b-2 text-primary-100 uppercase"
                : "text-4xl lg:text-3xl md:text-2xl  cursor-pointer border-b-transparent border-b-2 hover:border-primary-200 hover:transition-all hover:duration-300 text-primary-200 uppercase"
            }
          >
            location
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className={(navData) =>
              navData.isActive
                ? "text-4xl lg:text-3xl md:text-2xl cursor-pointer border-primary-100 border-b-2 text-primary-100 uppercase"
                : "text-4xl lg:text-3xl md:text-2xl  cursor-pointer border-b-transparent border-b-2 hover:border-primary-200 hover:transition-all hover:duration-300 text-primary-200 uppercase"
            }
          >
            jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/franchising"
            className={(navData) =>
              navData.isActive
                ? "text-4xl lg:text-3xl md:text-2xl  cursor-pointer border-primary-100 border-b-2 text-primary-100 uppercase"
                : "text-4xl lg:text-3xl md:text-2xl cursor-pointer border-b-transparent border-b-2 hover:border-primary-200 hover:transition-all hover:duration-300 text-primary-200 uppercase"
            }
          >
            FRANCHISING
          </NavLink>
        </li>
      </ul>
      <div className="sm:hidden">
        <button className="lgbt md:mdbt primarybt uppercase mb:smbt">
          Contact Us
        </button>
      </div>
      <div className="hidden sm:block hover:scale-110 active:scale-105 transition-all hover:duration-300">
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
      </div>
    </nav>
  );
};

export default Navbar;
