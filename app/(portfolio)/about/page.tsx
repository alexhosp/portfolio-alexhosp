import { MotionHeading, Heading } from '@/ui/Heading/heading';
import { Card } from '@/ui/Card/card';
import { VideoComponent } from '@/ui/YouTubeEmbed/video-component';
import { CardItemAnimationWrapper } from '@/ui/util/animation-wrapper';

// all these should be loaded from the database in the next version
// these can be fetched on the server using the YouTube API in the next version
const videoIds = ['Q5LRmWWUABE', 'bxLrkLibdRM', 'Lgb5FcLO0B0'];
const videoTitles = [
  'My Values as a Developer',
  'My Problem-Solving Strategy',
  'My Focus as a Developer',
];

// fetch this from the db in the next version
const videoDescriptions = [
  [
    'Practical Solutions: I care about turning complex insights into useful tools.',
    'Access to Technology: I care about building apps that make powerful tools available to everyone.',
    'Growth: I build apps with the goal to help everyone grow and learn.',
  ],
  [],
  [],
];

const introHeading = ['Values. ', 'Problem-Solving. ', 'Focus. '];
const AboutPage = () => {
  return (
    <>
      <div className='md:mt-12 mb-2'>
        <MotionHeading
          as='h2'
          color='default'
          size='h2Small'
          text='About Me.'
          spanText='Who I Am.'
        ></MotionHeading>
      </div>
      <div className='md:grid'>
        {introHeading.map((item, index) => (
          <Card
            key={index}
            color='solidDetail'
            edge='sharp'
            className={`w-11/12 mx-auto mt-${index === 0 ? '3' : '7'}`}
          >
            <div className='flex place-content-center mb-3.5 md:hidden'>
              <Heading
                as='h3'
                color='h2accent'
                size='h3Small'
                className='inline'
              >
                {item}
                {index < introHeading.length - 1 && (
                  <span className='text-[var(--color-primary)] ml-2'>
                    {introHeading.slice(index + 1).join(' ')}{' '}
                  </span>
                )}
              </Heading>
            </div>
            <div className='hidden place-content-center mb-4 md:flex'>
              <Heading
                as='h2'
                color='h2accent'
                size='h3Default'
                className='inline'
              >
                {item}
                {index < introHeading.length - 1 && (
                  <span className='text-[var(--color-primary)] ml-2'>
                    {introHeading.slice(index + 1).join(' ')}{' '}
                  </span>
                )}
              </Heading>
            </div>
            <div className='md:grid grid-cols-2'>
              {videoIds[index] && videoTitles[index] && (
                <VideoComponent
                  id={videoIds[index]} // Pass video ID
                  title={videoTitles[index]} // Pass corresponding title
                  isShort
                />
              )}
              <div className='hidden md:flex md: place-content-center'>
                <CardItemAnimationWrapper animate='floatUp'>
                  {videoDescriptions[index].length > 0 ? (
                    <ul className='flex content-start p-8 pt-16'>
                      <div className='flex flex-col content-start justify-center'>
                        {videoDescriptions[index].map(
                          (description, descIndex) => {
                            const parts = description.split(':');
                            return (
                              <li key={descIndex} className='m-4'>
                                <Heading
                                  as='h3'
                                  size='h3Small'
                                  color='default'
                                  className='mb-2'
                                >
                                  {parts[0]}
                                </Heading>
                                <Heading as='h3' size='h3Small' color='lighter'>
                                  {parts[1]}
                                </Heading>
                              </li>
                            );
                          },
                        )}
                      </div>
                    </ul>
                  ) : null}
                </CardItemAnimationWrapper>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};
export default AboutPage;
