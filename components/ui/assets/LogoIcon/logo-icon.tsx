'use client';

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
    <div className='px-1 flex items-center'>
      <MotionButton
        variant='ghost'
        size='icon'
        onClick={handleNavigation}
        aria-label='Scroll back to top'
        {...iconAnimation}
      >
        <div>
          <Image
            src='/logo-blue.png'
            width={1024}
            height={1024}
            alt='Logo Icon'
          />
        </div>
      </MotionButton>
    </div>
  );
};
export default LogoIcon;

export const LogoIconLarge: React.FC = () => {
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
    <div className='px-1 flex items-center'>
      <MotionButton
        variant='ghost'
        size='iconLarge'
        onClick={handleNavigation}
        aria-label='Scroll back to top'
        {...iconAnimation}
      >
        <div>
          <Image
            src='/logo-blue.png'
            width={1024}
            height={1024}
            alt='Logo Icon'
            style={{ height: '4.8rem', width: '4.8rem' }}
          />
        </div>
      </MotionButton>
    </div>
  );
};
