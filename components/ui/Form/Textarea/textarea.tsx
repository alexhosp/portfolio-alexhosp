import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'select-text bg-[var(--color-background)] focus:outline-0 autofill:transparent focus:ring-4 focus:ring-[var(--color-accent)] tracking-wider text-body text-[var(--color-foreground)] flex border-[var(--color-detail)] file:border-0 file:text-sm file:font-medium placeholder:text-[var(--color-foreground)]/90 focus:bg-[var(--color-background)] disabled:opacity-50flex min-h-[60px] w-full rounded-md border px-3 py-2 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-base',
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
