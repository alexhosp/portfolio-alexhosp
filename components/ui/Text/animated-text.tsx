'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Text from './text';

const MotionText = motion(Text);

// to customize this more could also accept the arrays as props

const attributes = ['custom', 'fast', 'data-driven', 'scalable', 'modern'];
const products = ['web apps', 'websites', 'prototypes', 'dashboards'];

export const AnimatedText = () => {
  const [attributeIndex, setAttributeIndex] = useState(() =>
    Math.floor(Math.random() * attributes.length)
  );
  const [productIndex, setProductIndex] = useState(() =>
    Math.floor(Math.random() * products.length)
  );

  useEffect(() => {
    const attributeInterval = setInterval(() => {
      setAttributeIndex(Math.random() * attributes.length);
    }, 2000); // change all 2 seconds

    const productInterval = setInterval(() => {
      setProductIndex(Math.floor(Math.random() * products.length));
    }, 2400);

    const stopAnimationTimeout = setTimeout(() => {
      clearInterval(attributeInterval);
      clearInterval(productInterval);
    }, 10000); // Stop after 10 seconds

    return () => {
      clearInterval(attributeInterval);
      clearInterval(productInterval);
      clearTimeout(stopAnimationTimeout);
    };
  }, []);

  // would be cool if colors also change randomly
  return (
    <div>
      <Text as='p' size='default' textColor='default'>
        I build
      </Text>
      <AnimatePresence>
        <MotionText
          as='span'
          textColor='accent'
          size='default'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {attributes[attributeIndex]}
        </MotionText>
      </AnimatePresence>
      <AnimatePresence>
        <MotionText
          as='span'
          textColor='accent'
          size='default'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {products[productIndex]}
        </MotionText>
      </AnimatePresence>
      <Text as='p' size='default' textColor='default'>
        continuosly.
      </Text>
    </div>
  );
};
