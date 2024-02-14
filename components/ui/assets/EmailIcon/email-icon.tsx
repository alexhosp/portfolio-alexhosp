import { MotionButton } from '../../Button/button';
import { Mail } from 'lucide-react';
import { iconAnimation } from '../../util/animation';

const EmailIcon = () => {
  return (
    <MotionButton variant='ghost' size='icon' {...iconAnimation}>
      <Mail />
    </MotionButton>
  );
};
export default EmailIcon;
