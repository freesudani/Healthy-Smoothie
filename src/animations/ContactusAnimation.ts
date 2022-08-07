export const contactusVariants = {
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

export const blackdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 1.5 },
  },
};
