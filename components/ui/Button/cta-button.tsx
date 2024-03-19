'use client';

import { MotionButton, Button } from './button';
import { CTAButtonAnimation } from '../util/animation';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export const CTAButton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className, ...props }) => {
  return (
    <MotionButton
      className={className}
      variant='cta'
      size='sm'
      {...CTAButtonAnimation}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export const GradientCTAButton: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <motion.div {...CTAButtonAnimation} {...props} className='inline-flex'>
      <Button
        variant='gradient'
        size='lg'
        className='inline-flex items-center px-0'
      >
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-electricBlue via-darkElectricBlue to-mercury inline-flex items-center hover:from-mercury hover:via-darkElectricBlue hover:to-electricBlue'>
          {children}
          <ChevronRight className='stroke-electricBlue max-h-4' />
        </span>
      </Button>
    </motion.div>
  );
};

interface SmallCTAButtonProps {
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'cta'
    | 'ghost'
    | 'gradient'
    | null
    | undefined;
  size?: 'default' | 'nav' | 'xs' | 'sm' | 'lg' | 'icon' | null | undefined;
  children: React.ReactNode;
  className?: string;
  role?: string;
  tabIndex?: number;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

export const SmallCTAButton = React.forwardRef<
  HTMLButtonElement,
  SmallCTAButtonProps
>(({ children, className, tabIndex, onKeyDown, onClick, ...props }, ref) => {
  return (
    <MotionButton
      ref={ref}
      variant='cta'
      size='xs'
      {...CTAButtonAnimation}
      className={className}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionButton>
  );
});

SmallCTAButton.displayName = 'SmallCTAButton';
