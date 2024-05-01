'use client';

import { easeInOut, motion } from 'framer-motion';
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

export const staggerAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeInOut,
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.15,
      when: 'beforeChildren',
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
    viewport={{ once: false, amount: 0.3 }}
    variants={cardItemAnimationVariants[animate]}
    {...props}
  >
    {children}
  </motion.div>
));

CardItemAnimationWrapper.displayName = 'CardItemAnimationWrapper';

export const StaggeredAnimationWrapper = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial='hidden'
      whileInView='show'
      variants={staggerAnimationVariants}
      viewport={{ once: false, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

StaggeredAnimationWrapper.displayName = 'StaggeredAnimationWrapper';
