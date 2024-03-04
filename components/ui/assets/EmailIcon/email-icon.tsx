import { MotionButton } from '@/ui/Button/button';
import { Mail } from 'lucide-react';
import { iconAnimation } from '../../util/animation';

const EmailIcon = () => {
  return (
    <MotionButton variant='ghost' size='icon' {...iconAnimation}>
      <Mail aria-label='Open the contact form' />
    </MotionButton>
  );
};
export default EmailIcon;

// this causes hydration errors when used inside a modal trigger

export const EmailIconLarge = () => {
  return (
    <MotionButton variant='ghost' size='iconLarge' {...iconAnimation}>
      <Mail
        style={{ height: '50px', width: '50px' }}
        aria-label='Open the contact form'
      />
    </MotionButton>
  );
};
