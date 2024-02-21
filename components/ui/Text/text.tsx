import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva(['text-body'], {
  variants: {
    size: {
      default:
        'text-base antialiased text-pretty whitespace-normal tracking-wider',
      large:
        'text-lg font-bold text-center md:text-xl tracking-wider antialiased text-pretty whitespace-normal',
      small:
        'text-sm/[1.2rem] text-left tracking-wide antialiased text-pretty whitespace-normal',
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
  size: 'default' | 'large' | 'small';
  textColor: 'default' | 'accent' | 'highlight' | 'muted';
}

const Text: React.FC<TextProps> = ({
  size = 'default',
  textColor = 'default',
  as = 'p',
  children,
  ...props
}) => {
  const variantClasses = textVariants({ size, textColor });
  const combinedClasses = cn(variantClasses);

  const Component = as === 'p' ? 'p' : 'span';

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Text;
