import React, { FC } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaGithubSquare,
} from "react-icons/fa";
import IconImage from "../images/e153069c5bc343f08a9b8398de94b63c.png";

const Footer: FC = () => {
  return (
    <div className="w-screen h-[25rem] bg-primary-200 p-10 sm:p-8 grid grid-cols-2 text-white relative">
      <div className="flex flex-col justify-around md:w-3/4 sm:w-11/12">
        <div className="flex justify-start items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb:h-10 mb:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl ml-3 mb:ml-1 mb:text-xl">
              The Baby Soi 7 556 South 9700 East American Fork, AT/MT 84521
            </h2>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb:h-10 mb:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl ml-3 mb:ml-1 mb:text-xl">(652) 780-0584</h2>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb:h-10 mb:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl ml-3 mb:ml-1 mb:text-xl">
              customer-service@healthy-smoothie.com
            </h2>
          </div>
        </div>
      </div>
      <div className="w-2/4 md:w-4/6 flex flex-col justify-around sm:w-11/12">
        <div>
          <h1 className="text-2xl font-bold">About The Company</h1>
        </div>
        <div>
          <body className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim
            sint ex voluptas, sunt aspernatur distinctio corporis cumque iure
            dolorum consequuntur error quibusdam placeat, porro odio officia
            exercitationem ipsam perferendis.
          </body>
        </div>
        <div className="flex justify-between items-center w-2/4 md:w-3/4 mb:w-full">
          <div>
            <FaFacebookSquare className="text-5xl hover:text-[#3b5998] hover:duration-300 hover:ease-in" />
          </div>
          <div>
            <FaLinkedin className="text-5xl hover:text-[#0077b5] hover:duration-300 hover:ease-in" />
          </div>
          <div>
            <FaYoutubeSquare className="text-5xl hover:text-[#cd201f] hover:duration-300 hover:ease-in" />
          </div>
          <div>
            <FaGithubSquare className="text-5xl hover:text-[#00405d] hover:duration-300 hover:ease-in" />
          </div>
        </div>
      </div>
      <div className="absolute right-20 top-24 md:right-5 sm:hidden">
        <img
          src={IconImage}
          alt="Logo"
          className="h-auto w-52 md:w-44 rounded-full hover:-rotate-12 hover:w-60 hover:ease-in hover:duration-300"
        />
      </div>
    </div>
  );
};

export default Footer;
