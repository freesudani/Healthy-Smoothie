export const OrderVariants = {
  hidden: {
    scale: 0.5,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      type: "spring",
      ease: "easeIn",
      stiffness: 50,
      duration: 0.5,
    },
  },
};

export const itemVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: { x: 0, transition: { duration: 1 } },
};
