export const findUsVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.6,
      type: "spring",
      ease: "easeIn",
      stiffness: 50,
      duration: 0.5,
    },
  },
};

export const svgVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
