import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Heading } from '../Heading/heading';
import Text from '../Text/text';

const cardVariants = cva(
  'leading-7 w-full text-body tracking-[0.002em] flex flex-col items-center text-center pt-11 break-words',
  {
    variants: {
      edge: {
        sharp: 'rounded-none p-4',
        rounded: 'rounded-lg p-4 medium-shadow',
      },
      width: {
        full: 'w-full p-8',
        half: 'md:w-1/2',
        third: 'md:w-1/3',
      },
      color: {
        gradientPrimary: 'bg-radial-gradient-light text-semibold',
        gradientSecondary: 'bg-radial-gradient-dark  text-semibold',
        solidPrimary:
          'bg-[var(--color-primary)] text-[var(--color-foreground)]',
        solidBackground: 'bg-[var(--color-background)]',
      },
    },
    defaultVariants: {
      edge: 'sharp',
      width: 'full',
      color: 'solidBackground',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  color?:
    | 'gradientPrimary'
    | 'gradientSecondary'
    | 'solidPrimary'
    | 'solidBackground';
}

const Card: React.FC<CardProps> = ({
  className,
  edge,
  width,
  color,
  ...props
}) => {
  return (
    <div
      className={cn(cardVariants({ edge, width, color }), className)}
      style={{ color: 'var(--color-foreground)' }}
      {...props}
    />
  );
};

Card.displayName = 'Card';

const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
);
CardHeader.displayName = 'CardHeader';

const CardTitle = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading as='h2' color='default' size='h2Small'>
    {children}
  </Heading>
);
CardTitle.displayName = 'CardTitle';

const CardDescription = ({
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Text as='p' size='default' textColor='default'>
    {children}
  </Text>
);
CardDescription.displayName = 'CardDescription';

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);
CardContent.displayName = 'CardContent';

const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

// consider adding card items with all subcomponets and export (PrimaryCard and SecondaryCard)
