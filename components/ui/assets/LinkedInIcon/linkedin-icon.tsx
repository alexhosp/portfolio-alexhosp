import { MotionButton } from '../../Button/button';
import { iconAnimation } from '../../util/animation';
import { SocialIcon } from 'react-social-icons';

const LinkednIcon: React.FC = () => {
  return (
    <MotionButton variant='ghost' size='icon' {...iconAnimation}>
      <SocialIcon
        url='https://www.linkedin.com/in/alexandra-hosp/'
        bgColor='var(--color-foreground)'
        fgColor='var(--color-background)'
        className='object-contain'
        style={{ height: '1.1rem', width: '1.1rem' }}
        aria-label='Visit my LinkedIn Profile'
      />
    </MotionButton>
  );
};
export default LinkednIcon;

export const LargeLinkednIcon: React.FC = () => {
  return (
    <MotionButton variant='ghost' size='iconLarge' {...iconAnimation}>
      <SocialIcon
        url='https://www.linkedin.com/in/alexandra-hosp/'
        bgColor='var(--color-foreground)'
        fgColor='var(--color-background)'
        className='object-contain'
        style={{ height: '4.8rem', width: '4.8rem' }}
        aria-label='Visit my LinkedIn Profile'
      />
    </MotionButton>
  );
};
