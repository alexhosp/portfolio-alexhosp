import { Card } from '@/ui/Card/card';
import { MotionHeading } from '@/ui/Heading/heading';
import { HeroSVG } from '@/ui/assets/HeroSVG/hero-svg';
import { CTAButton, SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main>
      <Card
        edge='sharp'
        width='full'
        color='solidBackground'
        className='pt-0 min-h-[80vh] md:mt-24 md:min-h-[70vh]'
      >
        <div>
          <MotionHeading
            text='let&#x27;s make'
            as='h1'
            color='h2accent'
            size='h2Big'
          ></MotionHeading>
          <div>
            <HeroSVG />
          </div>
          <div>
            <MotionHeading
              text='great ideas grow!'
              as='h1'
              color='h1accent'
              size='h1Default'
            ></MotionHeading>
          </div>
          <div className='grid gap-3 grid-cols-2 grid-rows-1 mt-6 md:hidden'>
            <SmallCTAButton>My Focus</SmallCTAButton>
            <SmallCTAButton>My Services</SmallCTAButton>
          </div>
          <div className='hidden md:grid gap-12 grid-cols-2 grid-rows-1 mt-12 lg:max-w-sm lg:m-auto lg:mt-12'>
            <CTAButton className='!font-bold'>
              <Link href='/about'>My Focus</Link>
            </CTAButton>
            <CTAButton className='!font-bold'>
              <Link href='/services'>My Services</Link>
            </CTAButton>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default HomePage;
