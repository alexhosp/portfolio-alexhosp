import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'cursor-pointer border border-[var(--color-foreground)] text-[var(--color-foreground)] bg-transparent  hover:border-[var(--color-destructive)] hover:text-[var(--color-destructive)]',
        outline:
          'cursor-pointer border border-[var(--color-foreground)] text-[var(--color-foreground)] bg-[var(--color-background)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
        cta: 'bg-[var(--color-accent)] text-mercury hover:small-shadow rounded-full font-bold lg:font-normal font-display tracking-wider lg:tracking-[0.09em]',
        ghost: 'text-[var(--color-foreground)] transition-colors',
        link: 'text-[var(--color-foreground)]',
        gradient: 'text-transparent font-bold font-display uppercase text-xl',
      },
      size: {
        default: 'h-11 px-4 py-2',
        xs: 'min-h-6 rounded-full px-4 py-1 text-base',
        sm: 'min-h-9 rounded-full px-5 py-1 lg:py-0 text-2xl lg:text-sm',
        lg: 'h-11 rounded-full px-8',
        icon: 'h-11 w-11',
        iconLarge: 'h-[5.5rem] w-[5.5rem]',
        nav: 'text-3xl font-bold text-left font-display tracking-wider lg:tracking-[0.09em] lg:text-sm lg:font-normal text-center',
        footer:
          'font-display tracking-wider tracking-[0.09em] text-sm font-normal text-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

const MotionButton = motion(Button);

export { Button, MotionButton, buttonVariants };
