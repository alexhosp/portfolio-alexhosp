import { sanitizeHTML } from '@/lib/auth';

export const ServiceIcon: React.FC<{
  icon: string | undefined;
  color?: string;
}> = ({ icon, color }) => {
  const safeIcon = typeof icon === 'string' ? sanitizeHTML(icon) : '';
  return (
    <div
      className={`${color} flex place-content-center`}
      dangerouslySetInnerHTML={{ __html: safeIcon }}
    />
  );
};
