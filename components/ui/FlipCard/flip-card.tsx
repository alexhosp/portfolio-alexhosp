'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/ui/Card/card';
import { Heading } from '@/ui/Heading/heading';
import { Slot } from '@radix-ui/react-slot';
import Text from '@/ui/Text/text';
import { SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';

interface FlipCardContent {
  title?: string;
  description?: string;
  cta?: string;
  ctaLink?: string;
}

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  frontContent: FlipCardContent;
  backContent: FlipCardContent;
  flipCardColor?:
    | 'gradientPrimary'
    | 'gradientSecondary'
    | 'solidPrimary'
    | 'solidBackground'
    | 'solidDetail';
}

export const FlipCard = React.forwardRef<HTMLDivElement, FlipCardProps>(
  ({ frontContent, backContent, flipCardColor, ...props }, ref) => {
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
      <div
        ref={ref}
        style={{ perspective: '80vw' }}
        className='relative'
        {...props}
      >
        <div
          style={{ transformStyle: 'preserve-3d' }}
          className='transition-transform duration-500'
          onClick={handleFlip}
        >
          <motion.div
            className='absolute'
            style={{ backfaceVisibility: 'hidden' }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, animationDuration: 'normal' }}
            onAnimationComplete={() => {
              setIsAnimating(false);
            }}
          >
            <FlipCardFront>
              <FlipCardContent flipCardColor={flipCardColor}>
                {frontContent.title && (
                  <FlipCardTitle>{frontContent.title}</FlipCardTitle>
                )}
                {frontContent.description && (
                  <FlipCardDescription>
                    {frontContent.description}
                  </FlipCardDescription>
                )}
                {frontContent.cta && frontContent.ctaLink && (
                  <SmallCTAButton>
                    <Link href={frontContent.ctaLink}>{frontContent.cta}</Link>
                  </SmallCTAButton>
                )}
              </FlipCardContent>
            </FlipCardFront>
            <FlipCardBack>
              <FlipCardContent flipCardColor={flipCardColor}>
                {backContent.title && (
                  <FlipCardTitle>{backContent.title}</FlipCardTitle>
                )}
                {backContent.description && (
                  <FlipCardDescription>
                    {backContent.description}
                  </FlipCardDescription>
                )}
                {backContent.cta && backContent.ctaLink && (
                  <SmallCTAButton>
                    <Link href={backContent.ctaLink}>{backContent.cta}</Link>
                  </SmallCTAButton>
                )}
              </FlipCardContent>
            </FlipCardBack>
          </motion.div>
        </div>
      </div>
    );
  }
);

FlipCard.displayName = 'Flip Card';

interface FlipCardFrontProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const FlipCardFront = React.forwardRef<HTMLDivElement, FlipCardFrontProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div';
    return (
      <Component
        ref={ref}
        {...props}
        className={className}
        style={{ backfaceVisibility: 'hidden', position: 'absolute' }}
      >
        {children}
      </Component>
    );
  }
);

FlipCardFront.displayName = 'FlipCardFront';

const FlipCardBack = React.forwardRef<HTMLDivElement, FlipCardFrontProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div';
    return (
      <Component
        ref={ref}
        {...props}
        className={className}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          position: 'absolute',
        }}
      >
        {children}
      </Component>
    );
  }
);

FlipCardBack.displayName = 'FlipCardFront';

export const FlipCardContent: React.FC<{
  children: React.ReactNode;
  flipCardColor?:
    | 'gradientPrimary'
    | 'gradientSecondary'
    | 'solidPrimary'
    | 'solidBackground'
    | 'solidDetail';
}> = ({ children, flipCardColor, ...props }) => {
  return (
    <Card edge='sharp' color={flipCardColor} {...props}>
      {children}
    </Card>
  );
};

export const FlipCardTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <Heading as='h3' color='default' size='h3Default' {...props}>
      {children}
    </Heading>
  );
};

FlipCardTitle.displayName = 'FlipCardTitle';

export const FlipCardDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className='md:hidden'>
        <Text as='p' size='small' textColor='default'>
          {children}
        </Text>
      </div>
      <div className='hidden md:block'>
        <Text as='p' size='default' textColor='default'>
          {children}
        </Text>
      </div>
    </>
  );
};

FlipCardDescription.displayName = 'FlipCardDescription';
