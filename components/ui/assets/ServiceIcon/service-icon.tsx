import { sanitizeHTML } from '@/lib/auth';

export const ServiceIcon: React.FC<{
  icon: string | undefined;
  color?: string;
  className?: string;
}> = ({ icon, color, className }) => {
  const safeIcon = typeof icon === 'string' ? sanitizeHTML(icon) : '';
  return (
    <div
      className={`${color} ${className} flex place-content-center`}
      dangerouslySetInnerHTML={{ __html: safeIcon }}
    />
  );
};
