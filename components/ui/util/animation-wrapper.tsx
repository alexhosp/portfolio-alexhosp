'use client';

import { motion } from 'framer-motion';

const cardItemAnimationVariants = {
  fadeIn: {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 0.8 } },
  },
  floatUp: {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  },
  scaleUp: {
    offscreen: {
      scale: 0.95,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  },
  scaleDown: {
    offscreen: {
      scale: 1,
      opacity: 0,
    },
    onscreen: {
      scale: 0.95,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  },
};

export const CardItemAnimationWrapper: React.FC<{
  children: React.ReactNode;
  animate: 'fadeIn' | 'floatUp' | 'scaleUp' | 'scaleDown';
}> = ({ children, animate, ...props }) => (
  <motion.div
    className='inline-block'
    initial='offscreen'
    whileInView='onscreen'
    viewport={{ once: false, amount: 0.8 }}
    variants={cardItemAnimationVariants[animate]}
    {...props}
  >
    {children}
  </motion.div>
);
