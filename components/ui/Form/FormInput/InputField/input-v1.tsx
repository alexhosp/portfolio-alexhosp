import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Label } from '@/ui/Form/FormInput/Label/label';
import { useForm } from 'react-hook-form';

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
  label?: string;
  /*  register?: UseFormRegister<TFieldValues>;
  name?: Extract<keyof TFieldValues, string>; */
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    { className, type = 'text', as = 'input', label, fieldSize, ...props },
    ref
  ) => {
    const id = React.useId();

    const { register } = useForm();
    return (
      <div>
        {label && (
          <Label intent='labelAbove' htmlFor={id}>
            {label}
          </Label>
        )}

        {as === 'textarea' ? (
          <textarea
            {...props}
            {...register('textarea')}
            id={id}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            className={cn(inputVariants({ fieldSize }), className)}
          />
        ) : (
          <input
            type={type}
            {...props}
            {...register('text')}
            id={id}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            className={cn(inputVariants({ fieldSize }), className)}
          />
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
