import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  isShort?: boolean;
  className?: string;
}

const Skeleton = ({ className, isShort, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        `animate-pulse rounded-md bg-[var(--color-detail)] ${isShort ? 'w-[255.15px] h-[453.6px]' : ''}`,
        className,
      )}
      {...props}
    />
  );
};

export { Skeleton };
