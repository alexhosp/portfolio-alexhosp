'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/ui/Card/card';
import { Heading } from '@/ui/Heading/heading';
import { Slot } from '@radix-ui/react-slot';
import Text from '@/ui/Text/text';
import { SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FlipCardContent {
  title?: string | null;
  description?: string | null;
  cta?: string | null;
  ctaLink?: string | null;
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
    const router = useRouter();

    const ctaRef = React.useRef<HTMLButtonElement>(null);

    const handleFlip = () => {
      if (!isAnimating) {
        setIsFlipped(!isFlipped);
        setIsAnimating(true);
      }
    };

    const handleFlipKeyPress = (
      event: React.KeyboardEvent<HTMLButtonElement>,
    ) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleFlip();
      }
    };

    const handleAnimationComplete = () => {
      console.log('animation complete');
      setIsAnimating(false);
      if (isFlipped && ctaRef.current) {
        setTimeout(() => {
          ctaRef.current && ctaRef.current.focus();
        }, 400);
      }
    };

    const handleCtaKeyPress =
      (link: string) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          console.log('navigating to: ', link);
          event.preventDefault();
          router.push(link);
        }
      };

    return (
      <div ref={ref} style={{ perspective: '1000px' }} tabIndex={0} {...props}>
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
          }}
          className='md:max-w-[25%] relative'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, animationDuration: 'normal' }}
          onAnimationComplete={handleAnimationComplete}
        >
          <FlipCardFront style={{ backfaceVisibility: 'hidden' }}>
            <FlipCardContent flipCardColor={flipCardColor}>
              {frontContent.title && (
                <FlipCardTitle>{frontContent.title}</FlipCardTitle>
              )}
              {frontContent.description && (
                <FlipCardDescription>
                  {frontContent.description}
                </FlipCardDescription>
              )}

              <SmallCTAButton
                aria-label='Flip Card'
                onClick={handleFlip}
                tabIndex={0}
                onKeyDown={handleFlipKeyPress}
              >
                Reveal
              </SmallCTAButton>
            </FlipCardContent>
          </FlipCardFront>
          <FlipCardBack
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
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
                <SmallCTAButton
                  aria-label='Learn More'
                  tabIndex={0}
                  onKeyDown={handleCtaKeyPress(backContent.ctaLink)}
                  ref={ctaRef}
                  className='mt-1.5'
                >
                  <Link href={backContent.ctaLink}>{backContent.cta}</Link>
                </SmallCTAButton>
              )}
            </FlipCardContent>
          </FlipCardBack>
        </motion.div>
      </div>
    );
  },
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
        className={`absolute ${className}`}
        style={{ backfaceVisibility: 'hidden', position: 'absolute' }}
      >
        {children}
      </Component>
    );
  },
);

FlipCardFront.displayName = 'FlipCardFront';

const FlipCardBack = React.forwardRef<HTMLDivElement, FlipCardFrontProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div';
    return (
      <Component
        ref={ref}
        {...props}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          position: 'absolute',
        }}
        className={`absolute ${className}`}
      >
        {children}
      </Component>
    );
  },
);

FlipCardBack.displayName = 'FlipCardFront';

export const FlipCardContent = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    flipCardColor?:
      | 'gradientPrimary'
      | 'gradientSecondary'
      | 'solidPrimary'
      | 'solidBackground'
      | 'solidDetail';
  }
>(({ children, flipCardColor, ...props }, ref) => {
  return (
    <>
      <Card
        ref={ref}
        edge='rounded'
        width='full'
        color={flipCardColor}
        className='h-[75vh] gap-y-[4vh] py-2 md:hidden'
        {...props}
      >
        {children}
      </Card>
      <Card
        ref={ref}
        edge='rounded'
        color={flipCardColor}
        className='hidden min-h-[75vh] gap-y-[6vh] w-[25vw] md:flex'
        {...props}
      >
        {children}
      </Card>
    </>
  );
});

FlipCardContent.displayName = 'FlipCardContent';

export const FlipCardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className, ...props }) => {
  return (
    <Heading
      as='h3'
      color='default'
      size='h3Small'
      className={`p-0 ${className}`}
      {...props}
    >
      {children}
    </Heading>
  );
};

FlipCardTitle.displayName = 'FlipCardTitle';

export const FlipCardDescription: React.FC<{
  children: React.ReactNode;
  tabIndex?: number;
}> = ({ children }) => {
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
