export const joinusVariants = {
  hidden: {
    y: "-15vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeIn",
      stiffness: 50,
      duration: 0.5,
    },
  },
};
