export const iconAnimation = {
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.05, opacity: 0.9 },
};

export const navLinkAnimation = {
  whileTap: { scale: 0.95, transition: { duration: 0.2 } },
  whileHover: {
    scale: 1.05,
    opacity: 0.9,
    y: -1,
    transition: { duration: 0.2 },
  },
};

export const CTAButtonAnimation = {
  whileTap: {
    scale: 0.95,
    x: 1,
    transition: { duration: 0.2, type: 'spring', stiffness: 200, damping: 15 },
  },
  whileHover: {
    scale: 1.025,
    x: -0.5,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const headingAnimations = {
  expand: {
    initial: { opacity: 0, scaleX: 0 },
    animate: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 10,
        type: 'spring',
        stiffness: 700,
        damping: 900,
        delay: 2,
        ease: 'easeInOut',
      },
    },
    whileInView: { opacity: 1, scaleX: 1 },
  },
  bounce: {
    initial: { y: -30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
    whileInView: { y: 0, opacity: 1 }, // If you want it to bounce when in view
  },
};
