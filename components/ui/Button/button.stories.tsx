import { Button } from './button';
import { Sun, Moon } from 'lucide-react';

export default {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
};

export const SunIconButton = {
  args: {
    variant: 'ghost',
    size: 'icon',
    children: (
      <Sun className='h-[1.2rem] w-[1.2rem] text-[var(--color-icon)] transition-colors' />
    ),
  },
};

export const MoonIconButton = {
  args: {
    variant: 'ghost',
    size: 'icon',
    children: (
      <Moon className='h-[1.2rem] w-[1.2rem] text-[var(--color-icon)] transition-colors' />
    ),
  },
};
