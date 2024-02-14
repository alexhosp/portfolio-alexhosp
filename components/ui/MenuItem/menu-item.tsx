import { MotionButton } from '@/ui/Button/button';
import { navLinkAnimation } from '../util/animation';

const MenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MotionButton variant='link' size='nav' {...navLinkAnimation}>
      {children}
    </MotionButton>
  );
};
export default MenuItem;
