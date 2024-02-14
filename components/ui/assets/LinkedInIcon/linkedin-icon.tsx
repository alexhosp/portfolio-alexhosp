import { MotionButton } from '../../Button/button';
import { iconAnimation } from '../../util/animation';
import { SocialIcon } from 'react-social-icons';

const LinkednIcon: React.FC = () => {
  return (
    <MotionButton variant='ghost' size='icon' {...iconAnimation}>
      <SocialIcon
        url='https://linkedin.com/in/
        alexandra-hosp'
        bgColor='var(--color-foreground)'
        fgColor='var(--color-background)'
        className='object-contain'
        style={{ height: '1.1rem', width: '1.1rem' }}
      />
    </MotionButton>
  );
};
export default LinkednIcon;
