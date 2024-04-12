'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';
import React from 'react';

const headingVariants = cva(
  ['font-display text-center flex justify-center items-center'],
  {
    variants: {
      size: {
        h1Default:
          'mb-4 pt-5 pb-0.5 text-[2.5rem] leading-none font-extrabold tracking-[0.007em] md:text-5xl md:pt-11 md:pb-1 lg:text-6xl lg:pt-[1.625rem] lg:tracking-[0.09em]',
        h1Accent: 'text-6xl font-black md:text-7xl lg:text-8xl pb-2',
        h2Big:
          'text-[2.5rem] font-extrabold tracking-[0.007em] md:text-5xl lg:text-6xl',
        h2Default:
          'text-[2rem] font-bold tracking-wide md:text-4xl lg:text-6xl',
        h2Small:
          'text-2xl font-semibold tracking-[0.007em] md:text-3xl lg:text-5xl',
        h2Tiny: 'text-lg font-semibold tracking-wider',
        h3Default:
          'text-xl uppercase tracking-wider lg:text-[2rem]/8 font-semibold',
        h3Small:
          'text-sm md:text-base uppercase tracking-wider font-semibold antialiased',
      },

      color: {
        default: 'text-[var(--color-foreground)]',
        h1accent:
          'bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-foreground)] drop-shadow-lg',
        h2accent: 'text-[var(--color-accent)] drop-shadow-sm',
        h2accentgradient:
          'bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-active)] drop-shadow-md',
        lighter: 'text-[var(--color-primary)]',
      },
    },
    defaultVariants: {
      size: 'h2Default',
      color: 'default',
    },
  },
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as: 'h1' | 'h2' | 'h3';
  color: 'default' | 'h2accent' | 'h1accent' | 'lighter' | 'h2accentgradient';

  children?: React.ReactNode;
  size:
    | 'h1Default'
    | 'h1Accent'
    | 'h2Big'
    | 'h2Default'
    | 'h2Small'
    | 'h2Tiny'
    | 'h3Default'
    | 'h3Small';
  text?: string;
  spanText?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  as = 'h2',
  size,
  color,
  className,
}) => {
  const Component = as;
  const variantClasses = headingVariants({ size, color });
  const combinedClasses = cn(variantClasses, className);

  return <Component className={combinedClasses}>{children}</Component>;
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      type: 'spring',
    },
  },
};

export const MotionHeading: React.FC<HeadingProps & MotionProps> = ({
  as = 'h1',
  size,
  color = 'default',
  text,
  spanText,
  ...props
}) => {
  const delay = 1;

  const variantClasses = headingVariants({ size, color });
  const combinedClasses = cn(variantClasses);

  const Component = motion(as);

  return (
    <Component className={`w-full ${combinedClasses}`} {...props}>
      <span className='sr-only'>{text}</span>
      <motion.div className={`${spanText && 'text-left w-11/12'}`}>
        <motion.span
          className='inline font-[var(--font-exo2)] tracking-[0.008em]'
          aria-hidden
          initial='hidden'
          animate='visible'
          transition={{
            staggerChildren: 0.05,
            ease: 'easeInOut',
            type: 'spring',
          }}
        >
          {text?.split('').map((char, index) => (
            <motion.span key={index} variants={childVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
        {spanText && (
          <motion.span
            className='inline font-[var(--font-exo2)] text-[var(--color-primary)] tracking-[0.008em] ml-2'
            aria-hidden
            initial='hidden'
            animate='visible'
            transition={{
              delay,
              staggerChildren: 0.05,
              ease: 'easeInOut',
              type: 'spring',
            }}
          >
            {spanText.split('').map((char, index) => (
              <motion.span key={index} variants={childVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        )}
      </motion.div>
    </Component>
  );
};
