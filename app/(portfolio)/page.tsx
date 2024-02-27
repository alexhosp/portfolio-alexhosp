import { Card } from '@/ui/Card/card';
import { MotionHeading } from '@/ui/Heading/heading';
import { HeroSVG } from '@/ui/assets/HeroSVG/hero-svg';

const HomePage = () => {
  return (
    <main>
      <Card edge='sharp' width='full' color='solidBackground'>
        <MotionHeading
          text='Got an idea?'
          as='h1'
          color='h2accent'
          size='h1Default'
        ></MotionHeading>
        <div>
          <HeroSVG />
        </div>
        <div className='mt-14'>
          <MotionHeading
            text=' Make it real!'
            as='h1'
            color='h1accent'
            size='h1Default'
          ></MotionHeading>
        </div>
      </Card>
    </main>
  );
};

export default HomePage;
