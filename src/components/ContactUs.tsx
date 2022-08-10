import { FC } from "react";
import { motion } from "framer-motion";
import {
  contactusVariants,
  blackdropVariant,
} from "../animations/ContactusAnimation";
import { useAppDispatch } from "../App";
import { contactActions } from "../store/cntus";

const ContactUs: FC = () => {
  const dispatch = useAppDispatch();

  const hideContactus = () => {
    dispatch(contactActions.hideContactus());
  };

  return (
    <div
      className="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={hideContactus}
    >
      <motion.div
        variants={blackdropVariant}
        key="backdrop"
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black  bg-opacity-80 "
      />

      <motion.div
        className="fixed z-20 inset-0 overflow-y-auto mb-96 "
        variants={contactusVariants}
        key="modal"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-end  justify-center min-h-full p-4 text-center ">
          <div className="relative p-5  bg-white rounded-lg overflow-hidden ">
            <div className="mt-3 text-center  ">
              <h3
                className="text-5xl mb:text-3xl leading-6 p-5 font-medium text-black uppercase underline"
                id="modal-title"
              >
                Feel free to contact us
              </h3>
            </div>
            <div className="grid grid-cols-[1fr_3fr] justify-items-center gap-y-5 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
              <div>
                <h4 className="text-3xl text-primary-200">0508324</h4>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                />
              </svg>
              <div>
                <h4 className="text-3xl text-primary-200">
                  CustomerCare@healthy-smoothie.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
