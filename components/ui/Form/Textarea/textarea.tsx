import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'focus:scale-[1.009] autofill:transparent focus:ring-offset-1 focus:ring-offset-[var(--color-accent-soft)] focus:ring-opacity-50 text-body file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-foreground)]/80 focus:bg-[var(--color-background)] disabled:cursor-not-allowed transition-transform duration-150 ease-in-out select-text bg-[var(--color-background)] focus:outline-0 autofill:transparent focus:ring-4 focus:ring-[var(--color-accent)] tracking-wider text-body text-[var(--color-foreground)] flex border-[var(--color-detail)] file:border-0  placeholder:text-[var(--color-foreground)]/90 min-h-[60px] w-full rounded-md border px-3 py-2 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:opacity-50 md:text-base',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
