'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const Counter: React.FC<{ value: number }> = ({ value }) => {
  const controls = useAnimation();
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    void controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });

    const interval = setInterval(() => {
      if (numRef.current) {
        const current = parseInt(numRef.current.textContent ?? '0', 10) || 0;
        if (current < value) {
          numRef.current.textContent = (current + 1).toString();
        } else {
          clearInterval(interval);
        }
      }
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, [value, controls]);

  return <motion.span ref={numRef}></motion.span>;
};
