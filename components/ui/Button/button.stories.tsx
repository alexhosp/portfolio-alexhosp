import { Button } from './button';
import { Sun, Moon } from 'lucide-react';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const SunIconButton = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: (
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
    ),
  },
};

export const MoonIconButton = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: (
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    ),
  },
};

// variant: outline
// size: icon
// children: sun or moon
