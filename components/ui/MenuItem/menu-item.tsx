import { MotionButton } from '@/ui/Button/button';
import { navLinkAnimation } from '../util/animation';

interface MenuItemProps {
  children: React.ReactNode;
  isCTA?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <MotionButton variant='link' size='nav' {...navLinkAnimation}>
      {children}
    </MotionButton>
  );
};
export default MenuItem;

export const FooterMenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <MotionButton variant='link' size='footer' {...navLinkAnimation}>
      {children}
    </MotionButton>
  );
};
