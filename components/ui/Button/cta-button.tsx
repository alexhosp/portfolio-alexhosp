import { MotionButton } from './button';
import { CTAButtonAnimation } from '../util/animation';

const CTAButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MotionButton variant='cta' size='sm' {...CTAButtonAnimation}>
      {children}
    </MotionButton>
  );
};
export default CTAButton;
