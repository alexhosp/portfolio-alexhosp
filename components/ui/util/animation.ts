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
