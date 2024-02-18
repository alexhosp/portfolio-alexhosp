'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  [
    'text-xs md:text-sm leading-loose leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-body tracking-wider',
  ],
  {
    variants: {
      intent: {
        labelAbove: 'font-semibold text-[var(--color-foreground)]',
        labelInside: 'font-light text-[var(--color-highlight)]',
      },
    },
  }
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  intent: 'labelAbove' | 'labelInside';
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, intent, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ intent }), className)} // Apply the variant
    {...props}
  >
    {children}
  </LabelPrimitive.Root>
));

Label.displayName = 'Label';

export { Label };
