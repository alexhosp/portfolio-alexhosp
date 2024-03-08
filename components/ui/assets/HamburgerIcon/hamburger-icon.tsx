'use client';

import { motion } from 'framer-motion';

const lineVariants = {
  open: {
    rotate: 45,
    color: 'var(--color-foreground)',
  },
  closed: {
    rotate: 0,
    translateY: 0,
    opacity: 1,
  },
};

const crossVariants = {
  open: {
    rotate: -45,
    translateY: -7,
    color: 'var(--color-foreground)',
  },
  closed: {
    rotate: 0,
    translateY: 0,
  },
};

interface HamburgerIconProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className='p-2.5 w-11 h-11 text-[var(--color-foreground)] transition-colors'
      onClick={toggleOpen}
      aria-label='Toggle menu'
    >
      <motion.path
        fill='none'
        strokeWidth='1.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 9h16.5'
        variants={lineVariants}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.path
        fill='none'
        strokeWidth='1.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 15.75h16.5'
        variants={crossVariants}
        animate={isOpen ? 'open' : 'closed'}
      />
    </motion.svg>
  );
};
export default HamburgerIcon;
