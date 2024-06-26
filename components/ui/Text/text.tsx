import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva(['text-body'], {
  variants: {
    size: {
      default:
        'text-base antialiased text-pretty whitespace-normal tracking-[0.007em]',
      large:
        'text-lg font-normal text-center md:text-xl tracking-[0.007em] antialiased text-pretty whitespace-normal md:leading-8',
      small:
        'text-sm/[1.2rem] tracking-[0.007em] antialiased text-pretty whitespace-normal leading-5',
      tiny: 'text-xs  tracking-[0.007em] antialiased text-pretty whitespace-normal md:text-sm',
    },
    textColor: {
      default: 'text-[var(--color-foreground)]',
      muted: 'text-[var(--color-foreground)] opacity-80',
      accent: 'text-[var(--color-highlight)] font-bold drop-shadow-sm',
      highlight:
        'text-mercury px-2 py-1 rounded bg-gradient-to-tr from-[var(--color-accent-active)] to-[var(--color-accent)]',
    },
  },
  defaultVariants: {
    size: 'default',
    textColor: 'default',
  },
});

export interface TextProps
  extends VariantProps<typeof textVariants>,
    React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  as: 'p' | 'span';
  children: React.ReactNode;
  size: 'default' | 'large' | 'small' | 'tiny';
  textColor: 'default' | 'accent' | 'highlight' | 'muted';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  size = 'default',
  textColor = 'default',
  as = 'p',
  children,
  className,
  ...props
}) => {
  const variantClasses = textVariants({ size, textColor });
  const combinedClasses = cn(variantClasses);

  const Component = as === 'p' ? 'p' : 'span';

  return (
    <Component className={`${className} ${combinedClasses}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
