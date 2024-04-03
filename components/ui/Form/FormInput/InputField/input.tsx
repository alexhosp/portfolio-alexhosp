import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  [
    'mt-2 focus:outline-0 autofill:transparent focus:ring-4 focus:ring-offset-1 focus:ring-offset-[var(--color-accent-soft)] focus:ring-[var(--color-accent)] focus:ring-opacity-50 tracking-wider text-body text-[var(--color-foreground)] flex rounded-md border border-[var(--color-detail)] bg-[var(--color-background)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-foreground)]/80 focus:bg-[var(--color-background)] disabled:cursor-not-allowed disabled:opacity-50 transition-transform duration-150 ease-in-out',
  ],
  {
    variants: {
      fieldHeight: {
        default: 'h-10 py-2 text-sm focus:ring-4 focus:scale-[1.009]',
        small:
          'h-6 text-xs focus:border-2 py-1 focus:ring-2  focus:scale-[1.009]',
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
