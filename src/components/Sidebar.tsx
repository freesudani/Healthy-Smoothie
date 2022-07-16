import React, { FC } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/Navbar";
import { NavbarProps } from "../models/types.types";
import { motion, AnimatePresence } from "framer-motion";
import { sideVariants, itemVariants } from "../animations/SidebarAnimation";

const Sidebar: FC = () => {
  return (
    <AnimatePresence>
      <motion.aside
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        exit={{
          width: 0,
          transition: { delay: 0.7, duration: 0.3 },
        }}
      >
        <motion.div
          initial="closed"
          animate="open"
          variants={sideVariants}
          exit="closed"
          className="fixed z-10 h-screen  top-0 right-0 bg-primary-200"
        >
          <ul className="h-4/6 mt-40 flex justify-between items-center flex-col ">
            {data.map((item: NavbarProps) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                <Link
                  to={item.path}
                  className="text-5xl px-4  cursor-pointer text-white  uppercase active:bg-primary-100"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
