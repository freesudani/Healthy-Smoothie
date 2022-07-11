import React, { FC } from "react";
import IconImage from "../images/e153069c5bc343f08a9b8398de94b63c.png";

const Navbar: FC = () => {
  return (
    <div className="static w-screen h-48 mb:h-40 m-0 px-8 bg-white text-black flex justify-between items-center">
      <div>
        <img src={IconImage} alt="Logo" className="h-auto w-44" />
      </div>
      <div>
        <button className="lgbt primarybt uppercase mb:smbt">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
