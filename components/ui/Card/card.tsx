import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Heading } from '../Heading/heading';
import Text from '../Text/text';

const cardVariants = cva(
  'font-body leading-7 w-full flex flex-col items-center justify-center text-center pt-11',
  {
    variants: {
      edge: {
        sharp: 'rounded-none p-4',
        rounded: 'rounded-lg p-4 medium-shadow',
      },
      width: {
        full: 'w-full p-8 sm:max-w-screen',
        half: 'md:w-1/2',
        twoThirds: 'md:7/12',
        quarter: 'md:3/12',
      },
      color: {
        gradientPrimary: 'bg-radial-gradient-light',
        gradientSecondary: 'bg-radial-gradient-dark',
        gradientGrayPrimary: 'bg-radial-gradient-primary',
        gradientGrayDetail: 'bg-radial-gradient-detail',
        solidPrimary:
          'bg-[var(--color-primary)] text-[var(--color-foreground)]',
        solidBackground: 'bg-[var(--color-background)]',
        solidDetail: 'bg-[var(--color-detail)]',
      },
    },
    defaultVariants: {
      edge: 'sharp',
      width: 'full',
      color: 'solidBackground',
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  color?:
    | 'gradientPrimary'
    | 'gradientSecondary'
    | 'gradientGrayDetail'
    | 'gradientGrayPrimary'
    | 'solidPrimary'
    | 'solidBackground'
    | 'solidDetail';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, edge, width, color, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ edge, width, color }), className)}
        style={{ color: 'var(--color-foreground)' }}
        {...props}
      />
    );
  },
);

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
  <div
    className={cn('flex items-center justify-center p-6 pt-0', className)}
    {...props}
  />
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
