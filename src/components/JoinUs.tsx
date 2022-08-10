import { FC } from "react";
import { motion } from "framer-motion";
import EmployeesImage from "../images/avatar-2191932_1920_prev_ui.png";
import { joinusVariants } from "../animations/CareersAnimation";

const JoinUs: FC = () => {
  return (
    <div className="w-screen h-[51rem] relative bg-hero-bg bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <motion.div
        variants={joinusVariants}
        initial="hidden"
        animate="visible"
        className="w-3/6  sm:w-4/6 mb:w-5/6 h-7/12  pt-5 px-5 lg:px-3 ph:pt-1 ph:px-1 z-10 shadow-lg shadow-neutral-900 flex flex-col justify-between items-center bg-black bg-opacity-20"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-4xl mb:text-3xl text-white font-bold uppercase">
            JOIN THE <br />
            Healthy-Smoothie TEAM
          </h1>
        </div>
        <div className="text-center mt-5 w-4/5">
          <h6 className="text-4xl md:text-3xl mb:text-2xl text-secondary-200">
            We're hiring juicers, managers, team members, and corporate
            employees. Join our team!
          </h6>
        </div>
        <div className="bottom-0 -mt-56 md:-mt-40 ph:-mt-36">
          <img src={EmployeesImage} alt="employeeImage" className="w-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default JoinUs;
