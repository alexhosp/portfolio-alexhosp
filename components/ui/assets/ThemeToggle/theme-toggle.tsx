import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { MotionButton } from '@/ui/Button/button';

export const ModeToggle = () => {
  const { setTheme, theme: currentTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const Icon = currentTheme === 'light' ? Moon : Sun;

  return (
    <MotionButton
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Icon className='h-[1.2rem] w-[1.2rem] text-[var(--color-icon)] transition-colors' />
      <span className='sr-only'>Toggle theme</span>
    </MotionButton>
  );
};
