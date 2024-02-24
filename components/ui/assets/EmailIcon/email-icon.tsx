import { MotionButton } from '../../Button/button';
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

export const EmailIconLarge = () => {
  return (
    <MotionButton variant='ghost' size='iconLarge' {...iconAnimation}>
      <Mail
        style={{ height: '4.8rem', width: '4.8rem' }}
        aria-label='Open the contact form'
      />
    </MotionButton>
  );
};
