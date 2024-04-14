import { MotionHeading, Heading } from '@/ui/Heading/heading';
import { Card } from '@/ui/Card/card';

const introHeading = ['Values. ', 'Problem-Solving. ', 'Focus. '];
const AboutPage = () => {
  return (
    <>
      <div className='md:mt-12'>
        <MotionHeading
          as='h2'
          color='default'
          size='h2Small'
          text='About Me.'
          spanText='Who I Am.'
        ></MotionHeading>
      </div>
      {introHeading.map((item, index) => (
        <Card
          key={index}
          color='solidDetail'
          edge='sharp'
          className={`w-11/12 mx-auto mt-${index === 0 ? '3' : '7'}`}
        >
          <div className='flex place-content-center mb-3.5'>
            <Heading as='h3' color='h2accent' size='h3Small' className='inline'>
              {item}
              {index < introHeading.length - 1 && (
                <span className='text-[var(--color-primary)] ml-2'>
                  {introHeading.slice(index + 1).join(' ')}{' '}
                </span>
              )}
            </Heading>
          </div>
        </Card>
      ))}
    </>
  );
};
export default AboutPage;
