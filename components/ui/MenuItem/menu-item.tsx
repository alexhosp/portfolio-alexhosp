import { MotionButton } from '@/ui/Button/button';
import { navLinkAnimation } from '../util/animation';
import { motion } from 'framer-motion';

interface MenuItemProps {
  children: React.ReactNode;
  isModalTrigger?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <MotionButton variant='link' size='nav' {...navLinkAnimation}>
      {children}
    </MotionButton>
  );
};
export default MenuItem;

// button causes hydration issues when used inside a modal trigger

export const FooterMenuItem: React.FC<MenuItemProps> = ({
  children,
  isModalTrigger = false,
}) => {
  return isModalTrigger ? (
    <motion.span
      {...navLinkAnimation}
      className='text-[var(--color-foreground)] font-display tracking-[0.09em] text-sm font-normal text-center inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    >
      {children}
    </motion.span>
  ) : (
    <MotionButton variant='link' size='footer' {...navLinkAnimation}>
      {children}
    </MotionButton>
  );
};
