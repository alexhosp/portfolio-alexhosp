import Image from 'next/image';
import { MotionButton } from '@/ui/Button/button';
import { iconAnimation } from '@/ui/util/animation';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const LogoIcon: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  }, []);
  return (
    <MotionButton
      variant='ghost'
      size='icon'
      onClick={handleNavigation}
      aria-label='Scroll back to top'
      {...iconAnimation}
    >
      <div>
        <Image
          src='/logo-light.png'
          width={1024}
          height={1024}
          alt='Logo Icon'
          layout='responsive'
        />
      </div>
    </MotionButton>
  );
};
export default LogoIcon;
