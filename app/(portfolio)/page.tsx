import { Card, CardTitle } from '@/ui/Card/card';
import { MotionHeading } from '@/ui/Heading/heading';
import { HeroSVG } from '@/ui/assets/HeroSVG/hero-svg';
import { CTAButton, SmallCTAButton } from '@/ui/Button/cta-button';
import Link from 'next/link';
import { getAboutContent } from '@/lib/data';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';
import Image from 'next/image';
import Text from '@/ui/Text/text';

const HomePage = async () => {
  const aboutContent = await getAboutContent();

  return (
    <main className='overflow-x-hidden'>
      <Card
        edge='sharp'
        width='full'
        color='solidBackground'
        className='pt-0 min-h-[80vh] md:mt-44 md:min-h-[70vh]'
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
          <div className='hidden md:grid gap-12 grid-cols-2 grid-rows-1 mt-12 md:mt-20 lg:max-w-sm lg:m-auto lg:mt-12'>
            <CTAButton className='!font-bold'>
              <Link href='/about'>My Focus</Link>
            </CTAButton>
            <CTAButton className='!font-bold'>
              <Link href='/services'>My Services</Link>
            </CTAButton>
          </div>
        </div>
      </Card>
      {aboutContent.map((item) => {
        return (
          <Card
            key={item.id}
            edge='sharp'
            width='full'
            color='solidPrimary'
            className='pt-0 lg:grid lg:gap-x-5'
          >
            <CardItemAnimationWrapper animate='scaleDown'>
              <Image
                alt='avatar of the developer'
                src={item.imageUrl ?? '/avatar-blue.png'}
                height={512}
                width={512}
                className='md:mt-4'
              />
            </CardItemAnimationWrapper>
            <div className='lg:col-start-2'>
              <CardItemAnimationWrapper animate='fadeIn'>
                <CardTitle>{item.title}</CardTitle>
              </CardItemAnimationWrapper>
              <CardItemAnimationWrapper animate='floatUp'>
                <Text
                  as='p'
                  size='large'
                  textColor='default'
                  style={{ whiteSpace: 'pre-wrap' }}
                  className='pt-4 md:text-xl/8 tracking-wide lg:pt-12'
                >
                  {item.shortDescription.replace(/\. /g, '.\n\n')}
                </Text>
              </CardItemAnimationWrapper>
              <CardItemAnimationWrapper animate='scaleUp'>
                <div className='md:hidden pt-5'>
                  <SmallCTAButton>
                    <Link href='/about'>{item.cta}</Link>
                  </SmallCTAButton>
                </div>
                <div className='hidden md:block md:mt-16'>
                  <CTAButton>
                    <Link href='/about'>{item.cta}</Link>
                  </CTAButton>
                </div>
              </CardItemAnimationWrapper>
            </div>
          </Card>
        );
      })}
    </main>
  );
};

export default HomePage;
