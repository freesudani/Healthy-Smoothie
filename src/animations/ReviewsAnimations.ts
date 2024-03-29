export const reviewVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      damping: 9,
      ease: "easeIn",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
