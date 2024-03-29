import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  [
    'mt-2 focus:outline-0 autofill:transparent focus:ring-4 focus:ring-[var(--color-accent)] tracking-wider text-body text-[var(--color-foreground)] flex rounded-md border border-[var(--color-detail)] bg-[var(--color-background)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-foreground)]/80 focus:bg-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      fieldHeight: {
        default: 'h-10 py-2 text-sm focus:ring-4',
        small: 'h-6 text-xs focus:border-2 py-1 focus:ring',
      },
      fieldWidth: {
        default: 'w-[75%] px-3',
        full: 'w-full px-2',
      },
    },
    defaultVariants: {
      fieldHeight: 'default',
      fieldWidth: 'default',
    },
  },
);

type InputVariantsProps = VariantProps<typeof inputVariants>;

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariantsProps {
  type?: string;
  fieldHeight: 'default' | 'small';
  fieldWidth: 'default' | 'full';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', fieldHeight, fieldWidth, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ fieldHeight, fieldWidth }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
