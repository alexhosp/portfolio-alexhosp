import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva(
  ['text-[var(--color-foreground)] font-exo2 text-center'],
  {
    variants: {
      size: {
        h1Default:
          'pt-5 pb-0.5 text-[2.5rem] leading-none font-bold tracking-wider md:text-5xl md:pt-11 md:pb-1 lg:text-[4rem] lg:pt-[1.625rem] lg:tracking-[0.09em]',
        h1Accent: 'text-[6.25rem] font-bold',
        h2Big: 'text-6xl',
        h2Default: 'text-4xl',
        h2Small: 'text-3xl',
        h3Default: 'text-xl',
        h3Big: 'text-4xl',
      },

      color: {
        default: 'text-[var(--color-foreground)]',
        h1accent:
          'bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-active)] shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
        h2accent: 'text-[var(--color-accent)]',
        strong: 'text-foreground',
      },
    },
    defaultVariants: {
      size: 'h2Default',
      color: 'default',
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as: 'h1' | 'h2' | 'h3';
  color: 'default' | 'h2accent' | 'h1accent' | 'strong';
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  as = 'h2',
  size,
  color,
  className,
}) => {
  const Component = as;
  const variantClasses = headingVariants({ size, color });
  const combinedClasses = cn(variantClasses, className);

  return <Component className={combinedClasses}>{children}</Component>;
};
