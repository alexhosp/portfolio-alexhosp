'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/ui/Card/card';

const FlipCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((_, ref) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  // set color of the cards dynamically based on position of a string in an array
  // set the size using tailwind selectors, full for mobile , half for desktop

  return (
    <div ref={ref} style={{ perspective: '80vw' }} className='relative'>
      <div
        style={{ transformStyle: 'preserve-3d' }}
        className='transition-transform duration-500'
        onClick={handleFlip}
      >
        <motion.div
          className='absolute'
          style={{ backfaceVisibility: 'hidden' }}
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDuration: 'normal' }}
          onAnimationComplete={() => {
            setIsAnimating(false);
          }}
        >
          <Card
            edge='rounded'
            className='absolute'
            style={{
              backfaceVisibility: 'hidden',
            }}
          ></Card>
          <Card
            edge='rounded'
            className='absolute'
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          ></Card>
        </motion.div>
      </div>
    </div>
  );
});

FlipCard.displayName = 'Flip Card';
