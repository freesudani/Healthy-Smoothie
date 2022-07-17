export const franchiseVariant = {
  hidden: {
    opacity: 0,
    y: "100vw",
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
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
    opacity: 0,
    rotate: -50,
  },
  visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
};
