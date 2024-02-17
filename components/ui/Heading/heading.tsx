import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';
import { headingAnimations } from '../util/animation';

const headingVariants = cva([' font-exo2 text-center'], {
  variants: {
    size: {
      h1Default:
        'mb-4 pt-5 pb-0.5 text-[2.5rem] leading-none font-extrabold tracking-wider md:text-5xl md:pt-11 md:pb-1 lg:text-[4rem] lg:pt-[1.625rem] lg:tracking-[0.09em]',
      h1Accent: 'text-6xl font-black md:text-7xl lg:text-8xl pb-2',
      h2Big:
        'text-[2.5rem] font-extrabold tracking-wider md:text-5xl lg:text-[4rem]',
      h2Default: 'text-[2rem] font-bold tracking-wide md:text-4xl lg:text-6xl',
      h2Small: 'text-2xl font-semibold tracking-wider md:text-3xl lg:text-5xl',
      h3Default:
        'text-xl uppercase tracking-wider md:text-2xl lg:text-4xl font-semibold',
    },

    color: {
      default: 'text-[var(--color-foreground)]',
      h1accent:
        'bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-foreground)] drop-shadow-lg',
      h2accent: 'text-[var(--color-accent)] drop-shadow-md',
      h2accentgradient:
        'bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-active)] drop-shadow-md',
      lighter: 'text-[var(--color-primary)] drop-shadow-lg',
    },
  },
  defaultVariants: {
    size: 'h2Default',
    color: 'default',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as: 'h1' | 'h2' | 'h3';
  color: 'default' | 'h2accent' | 'h1accent' | 'lighter' | 'h2accentgradient';
  children: React.ReactNode;
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

export const MotionHeading: React.FC<HeadingProps & MotionProps> = ({
  children,
  as,
  size,
  color = 'default',
  ...props
}) => {
  const Component = motion(as);
  const variantClasses = headingVariants({ size, color });
  const combinedClasses = cn(variantClasses);

  const selectedAnimation = as === 'h1' ? 'expand' : 'bounce';
  const animationProps = headingAnimations[selectedAnimation];

  return (
    <Component className={combinedClasses} {...animationProps} {...props}>
      {children}
    </Component>
  );
};
