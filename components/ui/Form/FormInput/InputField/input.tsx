import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  [
    'text-[var(--color-foreground)] tracking-wider flex w-full rounded-lg border bg-[var(--color-background)] px-3 py-2 text-sm tracking-wider placeholder:text-[var(--color-foreground)]/90 focus-visible:outline-none focus-visible:ring-[var(--color-accent-active)] focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50  focus:border-[var(--color-accent-active)]',
  ],
  {
    variants: {
      fieldSize: {
        default: 'h-11',
        small: 'h-6',
      },
    },
    defaultVariants: {
      fieldSize: 'default',
    },
  }
);

type InputVariantsProps = VariantProps<typeof inputVariants>;

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    InputVariantsProps {
  type?: string;
  as: 'input' | 'textarea';
  fieldSize: 'default' | 'small';
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ className, type = 'text', as = 'input', fieldSize, ...props }, ref) => {
  if (as === 'textarea') {
    return (
      <textarea
        {...props}
        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        className={cn(inputVariants({ fieldSize }), className)}
      />
    );
  } else {
    return (
      <input
        type={type}
        {...props}
        ref={ref as React.ForwardedRef<HTMLInputElement>}
        className={cn(inputVariants({ fieldSize }), className)}
      />
    );
  }
});

Input.displayName = 'Input';

export { Input };
