import { MotionButton, Button } from './button';
import { CTAButtonAnimation } from '../util/animation';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTAButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MotionButton variant='cta' size='sm' {...CTAButtonAnimation}>
      {children}
    </MotionButton>
  );
};

export const GradientCTAButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div {...CTAButtonAnimation} className='inline-flex'>
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
