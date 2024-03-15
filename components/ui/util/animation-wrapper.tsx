'use client';

import { motion } from 'framer-motion';
import React from 'react';

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

export const CardItemAnimationWrapper = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    animate: 'fadeIn' | 'floatUp' | 'scaleUp' | 'scaleDown';
    className?: string;
  }
>(({ children, animate, className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={`inline-block ${className ?? ''}`}
    initial='offscreen'
    whileInView='onscreen'
    viewport={{ once: false, amount: 0.5 }}
    variants={cardItemAnimationVariants[animate]}
    {...props}
  >
    {children}
  </motion.div>
));

CardItemAnimationWrapper.displayName = 'CardItemAnimationWrapper';
