export const heroVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.9,
      when: "beforeChildren",
    },
  },
};

export const childVariants = {
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
    transition: { ease: "easeOut" },
  },
};
